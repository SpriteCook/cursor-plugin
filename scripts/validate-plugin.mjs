#!/usr/bin/env node

import { promises as fs } from "node:fs";
import path from "node:path";
import process from "node:process";

const repoRoot = process.cwd();
const errors = [];
const warnings = [];

function addError(message) {
  errors.push(message);
}

function addWarning(message) {
  warnings.push(message);
}

async function pathExists(targetPath) {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function readJsonFile(filePath, context) {
  let raw;
  try {
    raw = await fs.readFile(filePath, "utf8");
  } catch {
    addError(`${context} is missing: ${filePath}`);
    return null;
  }

  try {
    return JSON.parse(raw);
  } catch (error) {
    addError(`${context} contains invalid JSON (${filePath}): ${error.message}`);
    return null;
  }
}

function parseFrontmatter(content) {
  const normalized = content.replace(/\r\n/g, "\n");
  if (!normalized.startsWith("---\n")) {
    return null;
  }

  const closingIndex = normalized.indexOf("\n---\n", 4);
  if (closingIndex === -1) {
    return null;
  }

  const frontmatterBlock = normalized.slice(4, closingIndex);
  const fields = {};

  for (const line of frontmatterBlock.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }
    const separator = line.indexOf(":");
    if (separator === -1) {
      continue;
    }
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim();
    fields[key] = value;
  }

  return fields;
}

async function walkFiles(dirPath) {
  const files = [];
  const stack = [dirPath];

  while (stack.length > 0) {
    const current = stack.pop();
    const entries = await fs.readdir(current, { withFileTypes: true });
    for (const entry of entries) {
      const entryPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(entryPath);
      } else if (entry.isFile()) {
        files.push(entryPath);
      }
    }
  }

  return files;
}

async function validateFrontmatterFiles(dirPath, componentName, requiredKeys) {
  if (!(await pathExists(dirPath))) {
    return;
  }

  const files = await walkFiles(dirPath);
  for (const file of files) {
    const baseName = path.basename(file);
    const ext = path.extname(file).toLowerCase();
    const shouldCheck =
      baseName === "SKILL.md" ||
      ext === ".md" ||
      ext === ".mdc" ||
      ext === ".markdown" ||
      ext === ".txt";

    if (!shouldCheck) {
      continue;
    }

    const content = await fs.readFile(file, "utf8");
    const parsed = parseFrontmatter(content);
    const relativeFile = path.relative(repoRoot, file);

    if (!parsed) {
      addError(`${componentName} file missing YAML frontmatter: ${relativeFile}`);
      continue;
    }

    for (const key of requiredKeys) {
      if (!parsed[key] || parsed[key].length === 0) {
        addError(`${componentName} file missing "${key}" in frontmatter: ${relativeFile}`);
      }
    }
  }
}

async function main() {
  const manifestPath = path.join(repoRoot, ".cursor-plugin", "plugin.json");
  const manifest = await readJsonFile(manifestPath, "Plugin manifest");
  if (!manifest) {
    summarizeAndExit();
    return;
  }

  if (typeof manifest.name !== "string" || manifest.name.length === 0) {
    addError('Plugin manifest "name" is required.');
  }

  if (typeof manifest.description !== "string" || manifest.description.length === 0) {
    addError('Plugin manifest "description" is required.');
  }

  if (manifest.logo) {
    const logoPath = path.join(repoRoot, manifest.logo);
    if (!(await pathExists(logoPath))) {
      addError(`Manifest logo path is missing: ${manifest.logo}`);
    }
  }

  const requiredDirs = ["skills", "commands"];
  for (const dirName of requiredDirs) {
    const dirPath = path.join(repoRoot, dirName);
    if (!(await pathExists(dirPath))) {
      addError(`Required directory is missing: ${dirName}`);
    }
  }

  if (!(await pathExists(path.join(repoRoot, "mcp.json")))) {
    addError("mcp.json is missing.");
  }

  await validateFrontmatterFiles(path.join(repoRoot, "skills"), "skill", ["name", "description"]);
  await validateFrontmatterFiles(path.join(repoRoot, "commands"), "command", ["name", "description"]);

  const hooksPath = path.join(repoRoot, "hooks", "hooks.json");
  if (!(await pathExists(hooksPath))) {
    addWarning("No hooks/hooks.json file found (only needed when using hooks).");
  }

  summarizeAndExit();
}

function summarizeAndExit() {
  if (warnings.length > 0) {
    console.log("Warnings:");
    for (const warning of warnings) {
      console.log(`- ${warning}`);
    }
    console.log("");
  }

  if (errors.length > 0) {
    console.error("Validation failed:");
    for (const error of errors) {
      console.error(`- ${error}`);
    }
    process.exit(1);
  }

  console.log("Validation passed.");
}

await main();

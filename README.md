# SpriteCook Cursor Plugin

SpriteCook brings game art generation into Cursor with a hosted MCP server and bundled skills for concept-first UI kits, sprite generation, local-file uploads, presets, animation workflows, and asset handling.

## What's Included

- `mcp.json`: SpriteCook Cursor MCP configuration
- `skills/`: bundled SpriteCook workflow skills, including UI kits, uploads, presets, and Godot export guidance
- `commands/`: quick command for connecting SpriteCook in Cursor
- `.cursor-plugin/plugin.json`: Cursor plugin manifest

## Local Testing

Copy or symlink this repository into Cursor's local plugin folder as:

```text
~/.cursor/plugins/local/spritecook
```

Then:

1. Fully quit Cursor.
2. Reopen Cursor.
3. Open `Settings -> Tools & MCP`.
4. Connect `spritecook` through the OAuth flow.

## Validation

Run:

```powershell
node scripts\validate-plugin.mjs
```

## Install Script

Hosted installers can place this plugin directly into Cursor's local plugin folder:

```powershell
iwr -useb https://spritecook.ai/install-cursor.ps1 | iex
```

```bash
curl -fsSL https://spritecook.ai/install-cursor.sh | bash
```

## Skill source of truth

Bundled workflow skills come from [SpriteCook/skills](https://github.com/SpriteCook/skills). Update that repository first, then sync its committed skills into `skills/`. [skills-source.json](skills-source.json) records the exact bundled source revision.

This release adds a skills version stamp. Agents compare it with the latest version that `get_credit_balance` reports and tell you when a newer SpriteCook plugin is available. Servers without `latest_skills_version` skip the check. No new plugin environment variables or database migrations are required.

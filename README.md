# SpriteCook Cursor Plugin Repo

SpriteCook is an AI game art platform for generating production-ready assets from prompts, including pixel art and detailed/HD styles.

This repository is the Cursor Marketplace plugin source for SpriteCook. It packages:

- SpriteCook MCP server configuration
- SpriteCook skill instructions for autonomous game-art workflows
- A local install helper for testing in Cursor before marketplace publication

Current plugin in this repo:

- `plugins/spritecook-gen`

## What This Repo Is For

- Publish and maintain SpriteCook plugin(s) for Cursor Marketplace
- Keep MCP configuration and skill content versioned together
- Provide a clean reviewable source for marketplace submission

## Repository Structure

- `.cursor-plugin/marketplace.json`: marketplace-level manifest
- `plugins/spritecook-gen/.cursor-plugin/plugin.json`: plugin manifest
- `plugins/spritecook-gen/mcp.json`: SpriteCook Cursor MCP server config
- `plugins/spritecook-gen/skills/`: bundled SpriteCook skills

## Local Validation

Run:

```powershell
node scripts\validate-template.mjs
```

## Local Testing In Cursor

Use Cursor's local plugin folder:

1. Copy or symlink `plugins/spritecook-gen` to `~/.cursor/plugins/local/spritecook-gen`.
2. Fully quit Cursor.
3. Reopen Cursor.
4. Open Settings -> Tools & MCP and confirm `spritecook` is present.
5. Complete the SpriteCook OAuth flow when Cursor prompts for sign-in.
6. Test with `Check my SpriteCook credit balance`.

## Cursor Marketplace Submission

Submit this repository through:

- https://cursor.com/marketplace/publish

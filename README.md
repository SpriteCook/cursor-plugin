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

This release adds guidance for generating multiple sprites in grids, preparing animation starting poses, and repairing outlines after background removal. It includes a local alpha-comparison helper and recommends GPT Image 2.5 Sunburst for UI-kit component sheets. Nano Banana 2.1 remains the recommended default for new pixel-art sprites and characters.

Alpha-cutoff saving requires a connected server exposing `alpha_editing` metadata and `set_asset_alpha_cutoff`; Sunburst component sheets require the corresponding server update. Updating this plugin alone does not enable those backend features. The skills explain how to identify older servers. No new plugin environment variables or database migrations are required.

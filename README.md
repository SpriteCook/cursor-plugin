# SpriteCook for Cursor

SpriteCook generates game art from Cursor: sprites, characters, tilesets, UI kits, and short animations, in pixel art or detailed HD styles. This plugin adds the hosted SpriteCook MCP server plus workflow skills that show the agent how to keep a set of assets consistent and ready for your engine.

## What's Included

- `mcp.json`: the hosted SpriteCook MCP server (`https://mcp.spritecook.ai/mcp/cursor`), which you sign in to with your SpriteCook account
- `skills/`: workflow skills for sprites, tilesets, UI kits, animation, uploads, presets, edge cleanup, and Godot export
- `commands/connect-spritecook.md`: walks you through connecting your account
- `.cursor-plugin/plugin.json`: the plugin manifest

## Connect Your Account

1. Open Cursor Settings, then Tools & MCP.
2. Enable `spritecook`.
3. Sign in to SpriteCook in the browser window that opens.

You need a SpriteCook account. Every account gets free credits each month, and paid plans add more. If the server doesn't show up, fully quit and reopen Cursor. More help is at [spritecook.ai/cursor](https://spritecook.ai/cursor).

## Try It

Ask the agent:

- "Generate a tiny pixel art knight, idle pose."
- "Build a top-down grass tileset."
- "Design a UI kit for a fantasy inventory screen."
- "Animate this sprite into a short idle loop."

Results are saved to your SpriteCook library, so you can download or reuse them later.

## Privacy and Terms

SpriteCook uses your prompts, and any images you choose to upload, to generate your assets. Read the [privacy policy](https://spritecook.ai/privacy) and [terms of service](https://spritecook.ai/terms).

## Install Script

The hosted installers place this plugin in Cursor's local plugin folder:

```powershell
iwr -useb https://spritecook.ai/install-cursor.ps1 | iex
```

```bash
curl -fsSL https://spritecook.ai/install-cursor.sh | bash
```

## Local Testing

Copy or symlink this repository into Cursor's local plugin folder as:

```text
~/.cursor/plugins/local/spritecook
```

Then fully quit and reopen Cursor, open Settings, then Tools & MCP, and connect `spritecook`.

## Validation

```powershell
node scripts\validate-plugin.mjs
```

## Skill Source of Truth

Bundled workflow skills come from [SpriteCook/skills](https://github.com/SpriteCook/skills). Update that repository first, then sync its committed skills into `skills/`. [skills-source.json](skills-source.json) records the exact bundled source revision.

Bundled skills now match the current SpriteCook tools on reference limits, size hints, tileset edges and animation engines, add Pixel Engine Image for exact-size sprites and centered framing for flying or bouncing animations, and include tested steps for small sprites, scene cutouts, tiny edits and two-surface tilesets. Version checks run when you ask about updates or compatibility. No new plugin environment variables or database migrations are required.

## License

MIT. See [LICENSE](LICENSE).

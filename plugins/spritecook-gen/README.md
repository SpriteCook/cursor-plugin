# SpriteCook Plugin

This plugin connects Cursor to SpriteCook through MCP and bundles the core SpriteCook skills for still-image generation, animation workflows, credits checks, and asset-handling guidance.

SpriteCook can generate:

- game assets
- pixel art sprites and icons
- detailed/HD game art
- short animations from existing assets

The bundled skills help the agent choose settings, generate assets consistently, animate existing SpriteCook assets, and follow practical game-art workflows.

## Included

- MCP config: `mcp.json`
- Skills:
  - `skills/spritecook-workflow-essentials/SKILL.md`
  - `skills/spritecook-generate-sprites/SKILL.md`
  - `skills/spritecook-animate-assets/SKILL.md`
  - `skills/spritecook-connect-mcp/SKILL.md`
- Command: `commands/connect-spritecook.md`

## Authentication

The plugin now targets the hosted SpriteCook Cursor MCP endpoint without embedding an API key. Cursor should authenticate through the endpoint's OAuth flow.

Preferred path:

1. Install the plugin.
2. Open Cursor MCP settings and enable `spritecook`.
3. When Cursor prompts for authentication, complete the SpriteCook OAuth flow.
4. Reload Cursor if the tool list does not refresh immediately.

Fallback path:

- Run `npx spritecook-mcp setup` for local bootstrap or any non-OAuth editor flow.

## Quick Start After Install

1. Enable `spritecook` under Cursor MCP settings.
2. Complete the SpriteCook OAuth connect flow when prompted.
3. Reload Cursor.
4. Ask: `Check my SpriteCook credit balance`.
5. Ask: `Generate a 32x32 pixel art chicken sprite with transparent background`.
6. Ask: `Animate my existing SpriteCook knight asset into a short idle loop`.

## Local Development

To test the plugin locally in Cursor:

1. Copy or symlink `plugins/spritecook-gen` into `C:\Users\<you>\.cursor\plugins\local\spritecook-gen`.
2. Fully quit Cursor.
3. Start Cursor again.
4. Open Settings -> Tools & MCP and verify `spritecook` is listed.
5. Trigger the OAuth connect flow.

If Cursor does not pick up changes immediately, reload the window or remove the local plugin folder and copy it again before restarting Cursor.

# SpriteCook Cursor Plugin

SpriteCook brings game art generation into Cursor with a hosted MCP server and bundled skills for sprite generation, animation workflows, and asset handling.

## What's Included

- `mcp.json`: SpriteCook Cursor MCP configuration
- `skills/`: bundled SpriteCook workflow skills
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

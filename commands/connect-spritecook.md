---
name: connect-spritecook
description: Guide the user through connecting SpriteCook MCP in Cursor and verify the setup.
---

# Connect SpriteCook

Use this command when the user installed the plugin but has not connected their SpriteCook account yet.

## Steps

1. Explain SpriteCook MCP requires account authentication before generation works.
2. Offer two setup paths:
   - Cursor OAuth flow (recommended):
     - Open Cursor Settings -> Tools & MCP
     - Enable `spritecook`
     - Complete the SpriteCook OAuth browser flow when prompted
   - Local bootstrap fallback:
     - `npx spritecook-mcp setup`
3. After setup, ask user to reload Cursor.
4. Verify connection by calling `get_credit_balance`.
5. If verification passes, suggest a first generation test prompt.

## If It Fails

- `401/403`: auth session is missing or expired; reconnect SpriteCook from Cursor MCP settings.
- MCP unavailable: ensure the plugin is installed and `spritecook` is enabled in Cursor MCP settings.
- No tools visible: check plugin is enabled and the `spritecook` server is active.
- OAuth issues in Cursor: try `npx spritecook-mcp setup` as a fallback local bootstrap.

---
name: spritecook-connect-mcp
description: Connect SpriteCook MCP authentication when tools are missing or unauthorized. Use when SpriteCook generation is requested but MCP is not configured, disabled, or returning auth errors.
---

# SpriteCook MCP Connection

Use this skill when SpriteCook generation is requested and MCP is not ready.

## Trigger Conditions

- `spritecook` MCP server is missing from MCP list
- MCP calls return `401`, `403`, `invalid_token`, or auth errors
- User asks for SpriteCook generation but account is not connected

## Required Behavior

1. Tell the user SpriteCook MCP requires account authentication before generation can run.
2. Offer the preferred Cursor path:
   - Open Cursor Settings -> Tools & MCP
   - Enable `spritecook`
   - Complete the SpriteCook OAuth browser flow
3. Offer the fallback bootstrap path:
   - `npx spritecook-mcp setup`
4. Ask the user to fully restart Cursor.
5. Re-try a SpriteCook MCP call (`get_credit_balance` first, then generation).

## Do Not

- Do not silently switch to non-SpriteCook image tools when user asked for SpriteCook generation.
- Do not claim SpriteCook is unavailable without offering connection steps.

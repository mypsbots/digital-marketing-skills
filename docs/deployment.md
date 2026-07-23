# Deploying the MCP server over HTTPS (for ChatGPT & remote clients)

Local clients (Cursor, Claude Desktop, Gemini CLI) launch the server over **stdio** via `npx`.
Remote-only clients — notably **ChatGPT connectors** — need a **hosted HTTPS endpoint**. This guide
covers hosting the Streamable HTTP transport.

The server exposes:

- `POST /mcp` — the MCP endpoint (stateless Streamable HTTP).
- `GET /health` — health check (`{ "status": "ok", ... }`), always unauthenticated.

## Security defaults

- Set `DM_MCP_HTTP_AUTH_TOKEN` to require `Authorization: Bearer <token>` on `POST /mcp`.
  `/health` stays open for platform health checks.
- Keep `DM_MCP_READ_ONLY=true` and `DM_MCP_REQUIRE_APPROVAL=true` (the defaults) for a public endpoint.
- Bind to `0.0.0.0` in a container (`DM_MCP_HTTP_HOST=0.0.0.0`); the platform's `PORT` is honoured
  automatically.

## Option A — Render (Docker blueprint)

1. Push this repo to GitHub (already done).
2. Render → **New → Blueprint** → select the repo. It reads [`render.yaml`](../render.yaml).
3. Render builds the [`Dockerfile`](../Dockerfile), injects `PORT`, terminates TLS, and generates
   `DM_MCP_HTTP_AUTH_TOKEN`. Copy that token from the dashboard.
4. Your endpoint: `https://<service>.onrender.com/mcp`.

## Option B — Vercel (serverless, recommended)

Vercel hosts the MCP server as a serverless function via [`api/[transport].ts`](../api/%5Btransport%5D.ts)
(using [`mcp-handler`](https://www.npmjs.com/package/mcp-handler)) with config in [`vercel.json`](../vercel.json).
The skill/config/workflow files are bundled into the function with `includeFiles`, and the server context
is built once per warm instance.

Unlike the Docker options, the Vercel endpoint lives at **`/api/mcp`** (not `/mcp`), and there is no
`/health` route — health is implicit in a successful `initialize`.

```bash
# From the repo root, with the Vercel CLI:
vercel                                                   # first deploy (creates the project)
vercel env add DM_MCP_HTTP_AUTH_TOKEN production         # paste a strong token (e.g. openssl rand -hex 32)
vercel --prod                                            # promote to production
```

Endpoint: `https://<project>.vercel.app/api/mcp`.

Notes:

- Set `DM_MCP_HTTP_AUTH_TOKEN` as a Project Environment Variable to require the bearer token.
- `npm install` runs the `prepare` script which builds `dist/`; the function imports the compiled output.
- SSE is disabled (deprecated in the MCP spec); stateless Streamable HTTP needs no Redis.

## Option C — Fly.io (Docker)

```bash
fly launch --no-deploy                                   # creates the app, keeps fly.toml
fly secrets set DM_MCP_HTTP_AUTH_TOKEN=$(openssl rand -hex 32)
fly deploy
```

Endpoint: `https://<app>.fly.dev/mcp`.

## Option D — any Docker host

```bash
docker build -t dm-skills-mcp .
docker run -p 8080:8080 \
  -e DM_MCP_HTTP_AUTH_TOKEN=$(openssl rand -hex 32) \
  dm-skills-mcp
```

Put it behind a TLS-terminating reverse proxy (Caddy, nginx, a load balancer) so the public URL is
HTTPS.

## Connect ChatGPT

As of the December 2025 rename, ChatGPT calls these **apps** (formerly "connectors") and configures
them through **Developer mode**, not a "Connectors" menu.

1. **Enable Developer mode:** Settings → **Security and login** → toggle **Developer mode** on.
2. **Create the app:** Settings → **Plugins** (or open `chatgpt.com/plugins`) → **+ / Create**.
   - **Name:** `Digital Marketing Skills`
   - **Connection / Server URL:** your MCP URL **with the token as a query parameter** (see next point).
   - **Authentication:** **No authentication**.
3. **Authentication caveat:** ChatGPT's app form only offers **OAuth** and **No authentication** — there
   is no static-header / API-key field. Because this server uses a static token, pass it in the URL:

   ```text
   https://<project>.vercel.app/api/mcp?key=<your DM_MCP_HTTP_AUTH_TOKEN>
   ```

   The server accepts the token via the `?key=` (or `?token=`) query parameter as well as the
   `Authorization: Bearer` header, so "No authentication" works while the endpoint stays gated.
4. **Enable per chat:** custom apps are off by default in each conversation — in the composer, click
   **+** → **Developer mode** → enable **Digital Marketing Skills**.

> Self-hosted (Docker/Render/Fly) endpoints are at `/mcp`; Vercel is at `/api/mcp`. The `?key=` trick
> works on any of them. If you would rather not put the token in the URL, run the endpoint fully public
> (unset `DM_MCP_HTTP_AUTH_TOKEN`) and select "No authentication" — only advisable because the server is
> read-only and approval-gated by default.

Header-based clients (Cursor, Claude, VS Code, Gemini CLI) should keep using
`Authorization: Bearer <your DM_MCP_HTTP_AUTH_TOKEN>`.

## Verify

```bash
# Docker/Render/Fly only — Vercel has no /health route:
curl https://your-host/health
# {"status":"ok","skills":171,"read_only":true}

# Use /api/mcp instead of /mcp on Vercel:
curl -s -X POST https://your-host/mcp \
  -H "Authorization: Bearer $DM_MCP_HTTP_AUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list","params":{}}'
```

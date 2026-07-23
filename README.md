# Digital Marketing Skills — MCP Platform

A **Model Context Protocol (MCP) server** and a curated library of **digital-marketing skills**.
It lets AI assistants discover and apply industry-standard marketing methodology — strategy,
research, SEO, paid media, content, email/CRM, CRO, analytics, reporting, budgeting and
industry playbooks — through structured **resources, prompts and tools**, with **safety and
human-in-the-loop controls built in by default**.

> Marketing outcomes are never guaranteed. This platform encodes method, transparency and
> safeguards — not promises. See [`DISCLAIMER.md`](./DISCLAIMER.md).

## What's inside

- **167 skills** across 31 categories (`skills/00-foundation` … `skills/30-optimisation-disciplines`),
  each a single rich `SKILL.md` with YAML metadata, methodology, decision rules, quality &
  compliance checklists, failure conditions, worked examples, KPIs and MCP mappings.
- **MCP server** (TypeScript/Node) exposing:
  - **Resources** — skill & workflow catalogues, individual skills/workflows, metrics/channels/
    funnel/industry catalogues, per-industry playbooks, and advertising-policy summaries
    (`marketing://policies/catalogue`, `marketing://policies/{network}`) (`marketing://…`).
  - **Prompts** — 30 reusable, structured marketing prompts (audit, strategy, GTM, SEO cluster,
    Google/Meta ads, email nurture, reporting, budgeting, industry growth plans, compliance).
  - **Tools** — read-only discovery/metric tools plus controlled write tools that respect
    dry-run and approval policies.
- **8 multi-step workflows** (`workflows/`) with explicit approval gates before spend/sends.
- **Deterministic engines** — pure, auditable metric calculations, a policy engine, an approval
  engine, an audit log and a workflow planner.
- **Optional Python utilities** (`python/dm_skills`) — metrics and experiment statistics
  (sample size, two-proportion z-test), dependency-light and reproducible.
- **Governance & safety** — Apache-2.0 licence (code) with a separate name/logo
  [trademark notice](./TRADEMARK.md), security model, compliance-first defaults, schemas, CI, and a
  deterministic evaluation harness. See [`docs/repository-protection.md`](./docs/repository-protection.md)
  for branch protection and ownership guidance.

## Safety model (defaults)

- **Read-only by default**; writes are **dry-run by default**.
- **Human approval required** for high-risk, cost-incurring or externally side-effecting actions.
- **Privacy by design** — data minimisation, consent checks, PII redaction in logs.
- **No fabricated data** and **no guaranteed results** — assumptions and ranges are explicit.
- **Mock connectors** ship by default; live connectors are opt-in via config.

See [`SECURITY.md`](./SECURITY.md), [`docs/approval-model.md`](./docs/approval-model.md) and
[`config/`](./config).

## Quick start

Requirements: Node.js ≥ 20.

```bash
npm ci
npm run build

# Run over stdio (for MCP clients)
npm run start:stdio

# Or run the Streamable HTTP transport
npm run start:http   # health check at http://127.0.0.1:8080/health
```

Copy `.env.example` to `.env` to adjust transport, safety defaults and directories.

## Install as a Cursor plugin

This repository is a Cursor plugin: [`.cursor-plugin/plugin.json`](./.cursor-plugin/plugin.json)
is the manifest and [`mcp.json`](./mcp.json) registers the MCP server (launched via `npx`, so the
bundled skills are resolved automatically — no working-directory setup needed).

- **Local (private) install:** copy or symlink this repo into `~/.cursor/plugins/local/`, then run
  *Developer: Reload Window*.
  ```bash
  ln -s "$(pwd)" ~/.cursor/plugins/local/digital-marketing-skills
  ```
- **Marketplace:** publish the public repo at
  [cursor.com/marketplace/publish](https://cursor.com/marketplace/publish) (manual review).

## Use across MCP clients

Once the package is published to npm (`npm publish`), any MCP client can run it via `npx` with no
local checkout. The server bundles its skills/config and resolves them relative to itself.

**Cursor / Claude Desktop / Gemini CLI (stdio):**

```json
{
  "mcpServers": {
    "digital-marketing-skills": {
      "command": "npx",
      "args": ["-y", "digital-marketing-skills-mcp@latest"]
    }
  }
}
```

- **Claude Desktop:** add the block above to `claude_desktop_config.json`.
- **Gemini CLI:** add it under `mcpServers` in `~/.gemini/settings.json`.
- **ChatGPT** (and other remote-only clients) require a **hosted HTTPS endpoint** rather than a local
  command — see the next section.

### Hosted HTTPS endpoint (remote clients)

Deploy the Streamable HTTP transport behind HTTPS (see [`docs/deployment.md`](./docs/deployment.md)
for Vercel / Render / Fly / Docker). The endpoint is `/api/mcp` on Vercel, or `/mcp` when self-hosted.
When `DM_MCP_HTTP_AUTH_TOKEN` is set, the token may be supplied **either** as an
`Authorization: Bearer <token>` header **or** as a `?key=<token>` query parameter.

**Cursor / Claude (web or desktop) / VS Code — header auth:**

```json
{
  "mcpServers": {
    "digital-marketing-skills": {
      "url": "https://<project>.vercel.app/api/mcp",
      "headers": { "Authorization": "Bearer <DM_MCP_HTTP_AUTH_TOKEN>" }
    }
  }
}
```

**ChatGPT (developer-mode app) — query-parameter auth:**

ChatGPT's app form only offers **OAuth** and **No authentication** (no static-header field), so pass the
token in the URL and select **No authentication**:

1. Settings → **Security and login** → enable **Developer mode**.
2. Settings → **Plugins** (or `chatgpt.com/plugins`) → **+ / Create**:
   - **Name:** `Digital Marketing Skills`
   - **Server URL:** `https://<project>.vercel.app/api/mcp?key=<DM_MCP_HTTP_AUTH_TOKEN>`
   - **Authentication:** **No authentication**
   - Tick the risk acknowledgement, then **Create**.
3. In a chat, click **+** → **Developer mode** → enable the app (required per conversation).

### From source (no npm)

```json
{
  "mcpServers": {
    "digital-marketing-skills": {
      "command": "node",
      "args": ["/absolute/path/to/dist/server/index.js", "--transport", "stdio"]
    }
  }
}
```

## Repository layout

```
skills/            # 167 SKILL.md files across 31 categories
workflows/         # multi-step, approval-gated workflow definitions (YAML)
industries/        # per-industry playbooks (saas, ecommerce, real-estate, retail)
templates/         # reusable output templates (plans, briefs, reports, approvals)
examples/          # end-to-end worked examples (illustrative)
config/            # metrics, channels, funnel, risk, approval, regional catalogues
schemas/           # JSON Schemas for skills, workflows, campaigns, reports, etc.
src/               # MCP server (core engines, connectors, mcp resources/prompts/tools)
python/            # optional dm_skills utilities + tests
scripts/           # validate-skills, evaluate
evals/             # evaluation harness docs + behavioural golden cases
docs/              # MkDocs documentation
```

## Development

```bash
npm run typecheck        # TypeScript type-check
npm run lint             # ESLint
npm test                 # Vitest unit tests
npm run validate:skills  # validate skill metadata & structure
npm run evaluate         # deterministic structural evaluation

# Python (optional)
pip install -e ".[dev]"
pytest && ruff check python && mypy python/dm_skills
```

## Skill catalogue (categories)

`00-foundation`, `01-market-research`, `02-customer-research`, `03-brand-positioning`,
`04-marketing-strategy`, `05-offer-and-messaging`, `06-content-marketing`, `07-seo`,
`08-paid-search`, `09-paid-social`, `10-organic-social`, `11-email-marketing`,
`12-crm-lifecycle`, `13-conversion-optimisation`, `14-experimentation`,
`15-analytics-measurement`, `16-reporting-insights`, `17-budgeting-forecasting`,
`18-marketing-automation`, `19-compliance-privacy`, `20-saas-growth`,
`21-product-led-growth`, `22-ecommerce-marketing`, `23-real-estate-marketing`,
`24-retail-marketing`, `25-account-based-marketing`, `26-community-reputation`,
`27-content-production`, `28-platform-playbooks`, `29-advertising-policy`,
`30-optimisation-disciplines`.

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md), [`GOVERNANCE.md`](./GOVERNANCE.md) and
[`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md). New skills must pass `npm run validate:skills` and
`npm run evaluate`.

## Licence

[Apache-2.0](./LICENSE).

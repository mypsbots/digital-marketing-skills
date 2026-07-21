# Digital Marketing Skills — MCP Platform

A **Model Context Protocol (MCP) server** and a curated library of **digital-marketing skills**.
It lets AI assistants discover and apply industry-standard marketing methodology — strategy,
research, SEO, paid media, content, email/CRM, CRO, analytics, reporting, budgeting and
industry playbooks — through structured **resources, prompts and tools**, with **safety and
human-in-the-loop controls built in by default**.

> Marketing outcomes are never guaranteed. This platform encodes method, transparency and
> safeguards — not promises. See [`DISCLAIMER.md`](./DISCLAIMER.md).

## What's inside

- **75 skills** across 25 categories (`skills/00-foundation` … `skills/24-retail-marketing`),
  each a single rich `SKILL.md` with YAML metadata, methodology, decision rules, quality &
  compliance checklists, failure conditions, worked examples, KPIs and MCP mappings.
- **MCP server** (TypeScript/Node) exposing:
  - **Resources** — skill & workflow catalogues, individual skills/workflows, metrics/channels/
    funnel/industry catalogues, and per-industry playbooks (`marketing://…`).
  - **Prompts** — 30 reusable, structured marketing prompts (audit, strategy, GTM, SEO cluster,
    Google/Meta ads, email nurture, reporting, budgeting, industry growth plans, compliance).
  - **Tools** — read-only discovery/metric tools plus controlled write tools that respect
    dry-run and approval policies.
- **8 multi-step workflows** (`workflows/`) with explicit approval gates before spend/sends.
- **Deterministic engines** — pure, auditable metric calculations, a policy engine, an approval
  engine, an audit log and a workflow planner.
- **Optional Python utilities** (`python/dm_skills`) — metrics and experiment statistics
  (sample size, two-proportion z-test), dependency-light and reproducible.
- **Governance & safety** — Apache-2.0 licence, security model, compliance-first defaults,
  schemas, CI, and a deterministic evaluation harness.

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

### Connecting an MCP client (stdio)

```json
{
  "mcpServers": {
    "digital-marketing": {
      "command": "node",
      "args": ["dist/server/index.js", "--transport", "stdio"]
    }
  }
}
```

## Repository layout

```
skills/            # 75 SKILL.md files across 25 categories
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
`24-retail-marketing`.

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md), [`GOVERNANCE.md`](./GOVERNANCE.md) and
[`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md). New skills must pass `npm run validate:skills` and
`npm run evaluate`.

## Licence

[Apache-2.0](./LICENSE).

# Security

This page summarises the security posture; see [`SECURITY.md`](https://github.com/mypsbots/digital-marketing-skills/blob/main/SECURITY.md)
in the repository root for reporting instructions and supported versions.

## Model

- **Read-only by default.** Write actions are disabled unless explicitly enabled, and are
  **dry-run by default**.
- **Human-in-the-loop.** High/critical-risk, cost-incurring or externally side-effecting actions
  require an explicit approval (see [Approval model](approval-model.md)).
- **Secret isolation.** Secrets are accessed through a dedicated abstraction, never read ad hoc
  from `process.env` in business logic, and never logged.
- **PII redaction.** Structured logs pass through a redaction layer; data minimisation is applied
  throughout.
- **Input/output validation.** Tool inputs are validated with Zod; artefacts conform to JSON
  Schemas in `schemas/`.
- **SSRF/allowlisting.** Outbound URLs are constrained by an allowlist utility.
- **No fabricated data.** The server returns `insufficient_data` rather than inventing figures.

## Threats explicitly considered

- Prompt injection attempting to trigger spend/sends → blocked by policy + approval gates.
- Secret leakage → secret abstraction + redaction + `.gitignore` of env/secret files.
- Unauthorised external actions → mock connectors by default; live connectors opt-in and gated.
- Over-collection of personal data → data minimisation and consent checks.

## Operational guidance

- Keep `DM_MCP_READ_ONLY=true` and `DM_MCP_WRITE_DRY_RUN_DEFAULT=true` unless you have a reason
  to change them, and keep `DM_MCP_REQUIRE_APPROVAL=true`.
- Run the container as a non-root user (see the provided `Dockerfile`).
- Enable live connectors only with scoped, least-privilege credentials.

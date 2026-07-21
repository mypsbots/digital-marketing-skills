# Connector model

Connectors provide a uniform interface to external marketing platforms (analytics, advertising,
CRM). The platform ships **deterministic mock connectors by default**; live connectors are opt-in.

## Interface

All connectors implement a common descriptor and health-check contract (`src/connectors/base`).
Read-only connectors expose metric queries over a date range; write connectors additionally
expose gated, side-effecting operations.

- `ConnectorDescriptor` — name, provider, auth method, capabilities, data sensitivity.
- `ReadOnlyConnector` — `healthCheck()`, `getMetrics(query)`.
- `WriteConnector` — read capabilities plus explicitly gated write operations.

## Mock connectors

`mock-analytics`, `mock-advertising` and `mock-crm` produce **deterministic, synthetic** data
from a seed so results are reproducible for development, demos and tests. They never touch a real
account and require no credentials.

## Enabling live connectors

Live connectors are disabled unless `DM_MCP_ENABLE_LIVE_CONNECTORS=true` (see
`config/feature-flags.yaml`). When enabling:

- provide scoped, least-privilege credentials via the secret abstraction (never inline);
- keep write operations behind the approval model;
- respect each platform's API policy, rate limits and data-handling terms.

## Adding a connector

1. Implement the interface in `src/connectors/<domain>/<provider>.ts`.
2. Provide a `ConnectorDescriptor` (including `data_sensitivity`).
3. Register it in `src/connectors/registry.ts` (guarded by the live-connector flag).
4. Keep all outbound calls within the URL allowlist; add tests with mocked responses.

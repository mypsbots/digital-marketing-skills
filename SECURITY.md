# Security Policy

## Supported versions

This project is pre-1.0. Security fixes are applied to the `main` branch and the latest
released minor version.

## Reporting a vulnerability

Please **do not** open a public issue for security vulnerabilities. Instead, report privately
via a GitHub security advisory on the repository, or contact the maintainers listed in
`GOVERNANCE.md`. Include:

- A description of the vulnerability and its impact.
- Steps to reproduce or a proof of concept.
- Affected versions or commit hashes.
- Any suggested remediation.

We aim to acknowledge reports within 5 working days and to provide a remediation plan within
30 days for confirmed issues.

## Security model

This platform is designed for safe operation by AI agents. Key controls:

- **Read-only default.** The server can run fully read-only; write tools are disabled unless
  explicitly enabled.
- **Dry-run default for write tools.** Write tools preview changes and require an explicit
  flag plus an approval record to execute.
- **Human-in-the-loop approvals.** High-risk actions (publishing, contacting customers,
  budget changes, deletions, list uploads) require a valid approval token.
- **Secret isolation.** Secrets are read only from environment variables via a secret-manager
  abstraction. They are never written to source, skills, prompts, examples, tests, logs or
  git history.
- **Input and output validation.** All tool inputs and outputs are validated against schemas.
- **PII redaction.** A redaction layer removes personal data and secrets from logs and from
  content returned to the model where not required.
- **Allowlisting.** Connectors and outbound URLs are allowlisted to mitigate SSRF and data
  exfiltration.
- **Idempotency and audit.** Write actions require idempotency keys and produce audit events.

See `docs/security.md` and `src/security/` for the full threat model and implementation.

## Reporting non-security bugs

For non-security bugs, please open a normal GitHub issue using the bug report template.

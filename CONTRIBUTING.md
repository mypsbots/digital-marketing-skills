# Contributing

Thank you for your interest in improving the Digital Marketing Skills MCP platform. This guide
explains how to contribute skills, connectors, code and documentation.

## Ways to contribute

- **New skills** — add a marketing capability following the skill authoring guide.
- **Skill improvements** — refine methodology, decision rules, checklists or examples.
- **Connectors** — add mock-first adapters for marketing platforms.
- **Core code** — improve the MCP server, engines and utilities.
- **Docs and examples** — improve clarity, add end-to-end examples.

## Getting started

```bash
git clone https://github.com/mypsbots/digital-marketing-skills.git
cd digital-marketing-skills
npm install
npm run build
npm test
```

Copy `.env.example` to `.env` for local configuration. Never commit real secrets.

## Authoring a skill

1. Choose the correct category folder under `skills/` (for example `skills/07-seo/`).
2. Create a folder named with the skill slug, containing a single `SKILL.md`.
3. Add YAML front matter with all required metadata (see `docs/skill-authoring.md` and
   `schemas/skill.schema.json`).
4. Write the body: purpose, inputs, outputs, methodology, decision rules, quality checklist,
   compliance checklist, examples, KPIs, related skills and MCP mappings.
5. Run `npm run validate:skills` and fix any errors.
6. Ensure no unsupported performance promises and that facts, assumptions and recommendations
   are clearly separated.

## Standards

- British English in documentation.
- ISO 8601 dates; UTC for internal timestamps.
- Make currency, locale, timezone, date ranges and attribution windows explicit.
- No secrets anywhere in the repository or its history.
- Lint and format before committing: `npm run lint` and `npm run format`.

## Pull requests

- Keep PRs focused and small where possible.
- Fill in the pull request template.
- Ensure CI passes (build, lint, tests, skill validation, security scan).
- New skills and connectors require a domain reviewer as described in `GOVERNANCE.md`.

## Reporting issues

Use the issue templates for bug reports, feature requests, new skill requests and platform
adapter requests.

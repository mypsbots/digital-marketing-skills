# Skill authoring

Each skill is a single `SKILL.md` under `skills/<NN-category>/<slug>/SKILL.md`, combining YAML
front-matter metadata with a structured Markdown body.

## Front matter (required fields)

`id`, `name`, `version` (semver), `status`, `description`, `category`, `industries`,
`business_models`, `funnel_stages`, `risk_level`, `execution_mode`, `human_approval_required`,
`last_reviewed` (YYYY-MM-DD).

Common optional fields: `sub_category`, `channels`, `objectives`, `estimated_duration`,
`required_inputs`, `optional_inputs`, `outputs`, `related_skills`, `resources`, `mcp_prompts`,
`data_sensitivity`, `pii_expected`, `external_side_effects`, `cost_implication`, `maintainers`,
`tags`.

### ID convention

Use `domain.slug`, e.g. `seo.seo-audit`, `positioning.positioning-statement`. IDs must be unique
across the catalogue and are what prompts, workflows and `related_skills` reference.

### Risk & approval consistency

If `risk_level` is `high` or `critical`, `human_approval_required` **must** be `true`. This is
enforced by `npm run validate:skills` and `npm run evaluate`.

## Required body sections

The validator checks for these headings (regex, case-insensitive): **Methodology**,
**Decision rules**, **Quality checklist**, **Compliance checklist**, **Examples**. Recommended
full structure:

```
## Overview
## Business purpose
## When to use / when not to use
## Inputs (Required / Optional)
## Outputs
## Methodology
## Decision rules
## Quality checklist
## Compliance checklist
## Failure conditions and escalation
## Examples
## KPIs and metrics
## Related skills
## MCP mappings
## Changelog
```

## Authoring principles

- Be honest about uncertainty; never promise results. Prefer ranges with assumptions.
- Return to `insufficient_data` when required inputs are missing.
- Minimise personal data; call out consent and compliance explicitly.
- Provide examples across the supported industries where relevant.

## Validate

```bash
npm run validate:skills   # metadata, uniqueness, required sections, freshness
npm run evaluate          # cross-checks references and approval invariants
```

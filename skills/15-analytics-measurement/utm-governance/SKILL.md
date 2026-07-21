---
id: analytics.utm-governance
name: UTM Governance
version: 1.0.0
status: stable
description: Define UTM naming conventions and governance so campaign attribution is consistent, clean and comparable across channels and teams.
category: analytics-measurement
sub_category: tracking
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
objectives: [reliable-attribution]
risk_level: low
execution_mode: planning
human_approval_required: false
estimated_duration: hours
required_inputs: [channels, campaign-types]
optional_inputs: [existing-utms, naming-preferences]
outputs: [utm-conventions, allowed-values, builder-rules]
related_skills: [analytics.tracking-plan-design, reporting.campaign-performance-report]
resources: []
mcp_prompts: [build_tracking_plan]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [analytics, utm, attribution]
---

## Overview

Sets consistent rules for `utm_source/medium/campaign/content/term` and controlled vocabularies
so channel/campaign reporting is comparable and not fragmented by ad-hoc tags.

## Business purpose

Inconsistent UTMs fragment reporting and misattribute performance.

## When to use / when not to use

- **Use** to standardise campaign tagging.
- **Do not use** to place PII or secrets in URLs.

## Inputs

### Required
- Channels, campaign types.

### Optional
- Existing UTMs, naming preferences.

## Outputs

- **UTM conventions** (case, separators, structure).
- **Allowed values** for source/medium.
- **Builder rules** and a governance process.

## Methodology

1. Fix case and separators (e.g. lowercase, hyphen).
2. Define controlled vocab for source/medium; free-ish for campaign with a pattern.
3. Provide a naming pattern (e.g. `objective_region_date`).
4. Provide a builder/template and a review step.
5. Document migration for legacy tags.

## Decision rules

- Lowercase, consistent separators, controlled source/medium.
- No PII/secrets in URLs.
- One canonical value per concept.

## Quality checklist

- [ ] Conventions documented.
- [ ] Controlled vocab defined.
- [ ] Builder/template provided.

## Compliance checklist

- [ ] No PII/secrets in URL parameters.

## Failure conditions and escalation

- Missing channels/campaign types → `insufficient_data`.

## Examples

- **SaaS:** `utm_medium=cpc`, `utm_campaign=trial_us_2026q3`.
- **E-commerce:** `utm_medium=paid_social`, seasonal campaign codes.
- **Real estate:** per-development campaign codes.
- **Retail:** per-store/promo campaign codes.

## KPIs and metrics

UTM consistency, unattributed-traffic share.

## Related skills

`analytics.tracking-plan-design`, `reporting.campaign-performance-report`.

## MCP mappings

- Prompts: `build_tracking_plan`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

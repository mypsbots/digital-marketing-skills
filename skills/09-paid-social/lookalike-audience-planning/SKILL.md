---
id: paid-social.lookalike-audience-planning
name: Lookalike Audience Planning
version: 1.0.0
status: stable
description: Plan lookalike/similar audiences from high-quality seed sources with appropriate size and exclusions, using only consented, compliant data.
category: paid-social
sub_category: audiences
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration]
objectives: [scale-prospecting, improve-targeting]
risk_level: medium
execution_mode: planning
human_approval_required: false
estimated_duration: hours
required_inputs: [seed-audience-source, campaign-objective]
optional_inputs: [customer-value-data, exclusions]
outputs: [lookalike-plan, seed-quality-assessment, size-and-exclusions]
related_skills: [paid-social.audience-planning, compliance.customer-list-upload-assessment, paid-social.social-campaign-architecture]
resources: [marketing://policies/meta-ads/policies]
mcp_prompts: [plan_meta_ads]
data_sensitivity: confidential
pii_expected: true
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [paid-social, lookalike, audiences]
---

## Overview

Plans lookalike/similar audiences by selecting the best seed (e.g. high-value customers,
converters), setting similarity size, and defining exclusions — grounded in consent and platform
data-use policy.

## Business purpose

Quality seeds produce efficient prospecting audiences; poor seeds scale waste.

## When to use / when not to use

- **Use** to plan prospecting lookalikes from strong seeds.
- **Do not use** with non-consented data, sensitive-category seeds, or where customer-list upload
  is not permitted (see compliance).

## Inputs

### Required
- Seed audience source, campaign objective.

### Optional
- Customer-value data, exclusions.

## Outputs

- A **lookalike plan** (seed → similarity size → placements).
- A **seed quality assessment**.
- **Size and exclusions** (suppress existing customers/converters where appropriate).

## Methodology

1. Choose the highest-signal seed (value-based converters > all leads).
2. Confirm seed data is consented and permitted for audience use.
3. Set similarity size trading reach vs precision (tighter for prospecting quality).
4. Define exclusions to avoid overlap with existing customers/retargeting.
5. Plan testing across sizes and seeds.

## Decision rules

- Seed quality drives results; prefer value-based seeds.
- Only consented, policy-compliant data.
- Exclude existing customers to avoid waste/overlap.

## Quality checklist

- [ ] High-signal seed chosen.
- [ ] Size + exclusions set.
- [ ] Testing plan included.

## Compliance checklist

- [ ] Consent + platform data-use policy verified.
- [ ] No sensitive-category seeds; customer-list upload assessed.

## Failure conditions and escalation

- Missing seed/objective → `insufficient_data`.
- Customer-list data use → compliance assessment + approval.

## Examples

- **SaaS:** lookalike of paying, retained accounts.
- **E-commerce:** lookalike of high-LTV purchasers.
- **Real estate:** lookalike of qualified past enquirers (consented).
- **Retail:** lookalike of loyalty members.

## KPIs and metrics

Prospecting CPA/ROAS, reach quality, overlap rate.

## Related skills

`paid-social.audience-planning`, `compliance.customer-list-upload-assessment`,
`paid-social.social-campaign-architecture`.

## MCP mappings

- Resources: `marketing://policies/meta-ads/policies`
- Prompts: `plan_meta_ads`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

---
id: paid-social.social-campaign-architecture
name: Paid Social Campaign Architecture
version: 1.0.0
status: stable
description: Design paid-social campaign structure across prospecting and retargeting with audiences, budgets and testing built in.
category: paid-social
sub_category: structure
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
channels: [paid-social]
objectives: [efficient-acquisition, scalable-testing]
risk_level: medium
execution_mode: planning
human_approval_required: false
estimated_duration: days
required_inputs: [objective, budget, audience, offer]
optional_inputs: [creative-assets, pixel-status, catalogue]
outputs: [campaign-structure, audience-plan, testing-plan]
related_skills: [paid-social.audience-planning, paid-social.creative-brief-development, paid-social.creative-testing-plan]
resources: [marketing://policies/meta-ads/policies]
mcp_prompts: [plan_meta_ads, create_full_funnel_campaign]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [paid-social, structure, meta]
---

## Overview

A structure that separates prospecting from retargeting, consolidates learning, and bakes in
creative testing. Planning only; launching requires approval.

## Business purpose

Modern paid-social performance is creative-led; structure should enable testing and stable
learning rather than fragment budgets.

## When to use / when not to use

- **Use** to plan/restructure paid-social.
- **Do not use** to launch or change live campaigns without approval.

## Inputs

### Required
- Objective, budget, audience, offer.

### Optional
- Creative assets, pixel/CAPI status, catalogue.

## Outputs

- A **campaign structure** (prospecting/retargeting; consolidated ad sets).
- An **audience plan**.
- A **testing plan** for creative.

## Methodology

1. Choose the objective/optimisation event matching the true goal.
2. Separate prospecting (broad/interest/lookalike) from retargeting (engagers, site, catalogue).
3. Consolidate ad sets to avoid audience fragmentation and speed learning.
4. Plan creative volume and a testing cadence (the primary lever).
5. Confirm tracking (pixel/CAPI) and conversion events before launch.

## Decision rules

- Avoid too many small ad sets (starves the algorithm).
- Feed retargeting with sufficient prospecting reach.
- Test creative continuously; refresh before fatigue.

## Quality checklist

- [ ] Prospecting/retargeting separated.
- [ ] Ad sets consolidated for learning.
- [ ] Creative testing planned.
- [ ] Tracking confirmed.

## Compliance checklist

- [ ] Ad policy compliance (restricted categories flagged).
- [ ] Special ad categories handled (e.g. housing/credit/employment restrictions).
- [ ] Consent for tracking/retargeting.

## Failure conditions and escalation

- Missing objective/budget/audience/offer → `insufficient_data`.
- Housing/credit/employment (special categories) → escalate for compliant targeting.

## Examples

- **SaaS:** lead or trial objective; lookalikes + retargeting site visitors.
- **E-commerce:** catalogue sales; prospecting + dynamic retargeting.
- **Real estate:** restricted targeting compliance for housing ads.
- **Retail:** local awareness + store-traffic objective.

## KPIs and metrics

CPA/ROAS, hook/hold rate, frequency, creative win rate.

## Related skills

`paid-social.audience-planning`, `paid-social.creative-brief-development`,
`paid-social.creative-testing-plan`.

## MCP mappings

- Resources: `marketing://policies/meta-ads/policies`
- Prompts: `plan_meta_ads`, `create_full_funnel_campaign`
- Tools: `marketing_get_skill`, `marketing_request_approval`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

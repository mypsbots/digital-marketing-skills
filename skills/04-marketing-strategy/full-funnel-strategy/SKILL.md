---
id: strategy.full-funnel-strategy
name: Full-Funnel Strategy
version: 1.0.0
status: stable
description: Coordinate awareness, consideration and decision activity into a single funnel strategy with stage roles, messaging and measurement.
category: marketing-strategy
sub_category: funnel
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision, retention]
objectives: [full-funnel-coordination, efficient-growth]
risk_level: medium
execution_mode: planning
human_approval_required: false
estimated_duration: days
required_inputs: [objective, audience, offer, budget]
optional_inputs: [channels, conversion-definition]
outputs: [funnel-plan, stage-roles, measurement-plan]
related_skills: [strategy.channel-mix-planning, content.content-strategy, paid-social.social-campaign-architecture, analytics.kpi-framework]
resources: [marketing://funnel-stages]
mcp_prompts: [create_full_funnel_campaign]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [funnel, full-funnel, strategy]
---

## Overview

Balances demand creation and demand capture so growth is efficient and durable rather than
dependent on squeezing bottom-funnel intent.

## Business purpose

Prevents rising CAC caused by over-investing only in capture; builds future demand.

## When to use / when not to use

- **Use** when planning coordinated multi-stage activity.
- **Do not use** for a single-stage tactical push.

## Inputs

### Required
- Objective, audience, offer, budget.

### Optional
- Channels, conversion definition.

## Outputs

- A **funnel plan** with activity per stage.
- **Stage roles** (KPI + audience per stage).
- A **measurement plan** spanning stages.

## Methodology

1. Define the conversion action and funnel stages.
2. Assign each stage a role, audience and KPI.
3. Allocate budget across creation and capture with a rationale.
4. Define message and creative themes per stage (problem-aware → solution-aware → decision).
5. Set cross-stage measurement, including leading indicators for upper funnel.
6. Plan retargeting and lifecycle to move audiences down the funnel.

## Decision rules

- Fund upper funnel even when it is harder to attribute; use leading indicators.
- Ensure retargeting audiences are being fed by upper-funnel reach.
- Keep messaging coherent across stages.

## Quality checklist

- [ ] Every stage has role, audience and KPI.
- [ ] Creation vs capture balance justified.
- [ ] Cross-stage measurement defined.

## Compliance checklist

- [ ] Retargeting/consent compliant.
- [ ] Claims consistent and substantiated across stages.

## Failure conditions and escalation

- Missing objective/audience/offer/budget → `insufficient_data`.

## Examples

- **SaaS:** thought-leadership (awareness) → webinars/comparison (consideration) → demo/trial (decision).
- **E-commerce:** creator content → retargeting → offer + email capture.
- **Real estate:** local awareness → property alerts → viewing booking.
- **Retail:** local awareness → offers → in-store/collect conversion.

## KPIs and metrics

Stage KPIs, funnel conversion, blended efficiency, assisted conversions (directional).

## Related skills

`strategy.channel-mix-planning`, `content.content-strategy`,
`paid-social.social-campaign-architecture`, `analytics.kpi-framework`.

## MCP mappings

- Resources: `marketing://funnel-stages`
- Prompts: `create_full_funnel_campaign`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

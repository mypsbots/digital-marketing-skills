---
id: retail.loyalty-programme
name: Retail Loyalty Programme
version: 1.0.0
status: stable
description: Design a retail loyalty programme that increases repeat visits and spend with a sustainable rewards economy, clear tiers and consent-based communication.
category: retail-marketing
sub_category: loyalty
industries: [retail, ecommerce]
business_models: [b2c, d2c]
funnel_stages: [retention, advocacy]
objectives: [increase-retention, grow-clv]
risk_level: medium
execution_mode: planning
human_approval_required: false
estimated_duration: days
required_inputs: [business-model, margins, objective]
optional_inputs: [customer-data, purchase-frequency, existing-programme]
outputs: [programme-design, rewards-economy, tiers, measurement]
related_skills: [retail.local-promotion, ecommerce.repeat-purchase, crm.lifecycle-stage-design]
resources: [marketing://metrics]
mcp_prompts: [retail_promotion_plan]
data_sensitivity: confidential
pii_expected: true
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [retail, loyalty, retention]
---

## Overview

Designs a loyalty programme (earn/burn mechanics, tiers, benefits) with a financially sustainable
rewards economy that lifts repeat visits and spend without eroding margin.

## Business purpose

Loyalty programmes increase retention and CLV and provide first-party data (with consent).

## When to use / when not to use

- **Use** to design/refresh a loyalty programme.
- **Do not use** to create liabilities that exceed incremental margin.

## Inputs

### Required
- Business model, margins, objective.

### Optional
- Customer data, purchase frequency, existing programme.

## Outputs

- A **programme design** (earn/burn, benefits).
- A **rewards economy** (cost vs incremental margin).
- **Tiers** and **measurement** (repeat rate, CLV, liability).

## Methodology

1. Define the behaviour to reward (visits, spend, referrals).
2. Design earn/burn mechanics and tiers with attainable value.
3. Model the rewards economy (breakage, cost, incremental margin).
4. Plan consent-based communication and enrolment.
5. Measure incremental repeat, spend, CLV, and liability.

## Decision rules

- Rewards cost must be covered by incremental margin.
- Benefits attainable and clear.
- Consent for programme communications.

## Quality checklist

- [ ] Mechanics/tiers defined.
- [ ] Rewards economy modelled.
- [ ] Incrementality measured.

## Compliance checklist

- [ ] Consent for communications; PII protected.
- [ ] Terms transparent.

## Failure conditions and escalation

- Missing model/margins/objective → `insufficient_data`.

## Examples

- **Grocery:** points per spend + member prices.
- **Fashion:** tiered VIP benefits.
- **Cafe:** visit-based rewards.

## KPIs and metrics

Enrolment, active-member rate, repeat/CLV lift, redemption, liability.

## Related skills

`retail.local-promotion`, `ecommerce.repeat-purchase`, `crm.lifecycle-stage-design`.

## MCP mappings

- Resources: `marketing://metrics`
- Prompts: `retail_promotion_plan`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

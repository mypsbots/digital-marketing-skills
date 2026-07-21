---
id: ecommerce.repeat-purchase
name: Repeat Purchase & Retention
version: 1.0.0
status: stable
description: Increase repeat purchase and customer lifetime value through post-purchase experience, lifecycle marketing and retention offers, consent-based.
category: ecommerce-marketing
sub_category: retention
industries: [ecommerce, retail]
business_models: [b2c, d2c, b2b]
funnel_stages: [retention, advocacy]
objectives: [increase-repeat-purchase, grow-ltv]
risk_level: medium
execution_mode: planning
human_approval_required: false
estimated_duration: days
required_inputs: [products, customer-data-or-segments, objective]
optional_inputs: [purchase-frequency, margins, esp-crm]
outputs: [retention-plan, lifecycle-flows, offers, measurement]
related_skills: [ecommerce.conversion-rate-improvement, crm.lifecycle-stage-design, email.lead-nurture-series]
resources: [marketing://metrics]
mcp_prompts: [ecommerce_growth_plan]
data_sensitivity: confidential
pii_expected: true
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [ecommerce, retention, ltv]
---

## Overview

Designs a retention programme (post-purchase experience, replenishment/lifecycle flows, loyalty
and win-back) to lift repeat rate and LTV — all consent-based and margin-aware.

## Business purpose

Repeat customers are cheaper to serve and drive most profit; retention beats endless acquisition.

## When to use / when not to use

- **Use** to grow repeat purchase/LTV.
- **Do not use** to contact customers without consent.

## Inputs

### Required
- Products, customer data or segments, objective.

### Optional
- Purchase frequency, margins, ESP/CRM.

## Outputs

- A **retention plan** and **lifecycle flows** (welcome, replenish, win-back).
- **Offers** (margin-aware) and **measurement** (repeat rate, LTV).

## Methodology

1. Segment by RFM/behaviour; identify repeat drivers and cadence.
2. Design post-purchase experience (delivery, education, review ask).
3. Build lifecycle flows aligned to purchase cycle (consent-based).
4. Design retention/loyalty offers protecting margin.
5. Measure repeat rate, purchase frequency, LTV, and churn.

## Decision rules

- Consent required for all outbound.
- Margin-aware offers; avoid training discount-dependence.
- Align cadence to real purchase cycles.

## Quality checklist

- [ ] Segmentation done.
- [ ] Lifecycle flows mapped.
- [ ] Retention metrics defined.

## Compliance checklist

- [ ] Consent/suppression honoured.
- [ ] PII minimised.

## Failure conditions and escalation

- Missing products/customer basis/objective → `insufficient_data`.
- Scaled outbound → requires approval.

## Examples

- **Consumables:** replenishment reminders at cycle.
- **Fashion:** new-collection + VIP flows.
- **B2B supplies:** reorder automation.

## KPIs and metrics

Repeat purchase rate, frequency, AOV, LTV, retention/churn.

## Related skills

`ecommerce.conversion-rate-improvement`, `crm.lifecycle-stage-design`,
`email.lead-nurture-series`.

## MCP mappings

- Resources: `marketing://metrics`
- Prompts: `ecommerce_growth_plan`
- Tools: `marketing_get_skill`, `marketing_calculate_metric`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

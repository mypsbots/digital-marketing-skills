---
id: customer-research.firmographic-segmentation
name: Firmographic Segmentation
version: 1.0.0
status: stable
description: Segment B2B markets by firmographic attributes (industry, size, geography, maturity) to prioritise and target accounts.
category: customer-research
sub_category: segmentation
industries: [common, saas]
business_models: [b2b, b2b2c]
funnel_stages: [awareness, consideration]
objectives: [prioritise-segments, improve-targeting]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: 1-2 days
required_inputs: [market, product-fit-criteria]
optional_inputs: [crm-data, tam-estimate]
outputs: [segment-definitions, prioritisation, targeting-criteria]
related_skills: [customer-research.ideal-customer-profile, account-based-marketing.account-tiering, market-research.market-segmentation]
resources: [marketing://industries/catalogue]
mcp_prompts: [define_icp]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [firmographic, b2b, segmentation]
---

## Overview

Groups target organisations by observable firm-level attributes and prioritises segments by
fit and opportunity.

## Business purpose

Concentrates B2B effort on segments where the product wins, improving pipeline efficiency.

## When to use / when not to use

- **Use** for B2B targeting and ABM tiering.
- **Do not use** for B2C consumer segmentation (use behavioural/demographic instead).

## Inputs

### Required
- Market and product-fit criteria.

### Optional
- CRM data, TAM estimate.

## Outputs

- **Segment definitions** (industry, size, geography, tech, maturity).
- **Prioritisation** by fit × opportunity.
- **Targeting criteria** for lists and audiences.

## Methodology

1. Select firmographic dimensions that predict fit (industry, employee/revenue band,
   geography, tech stack, growth stage).
2. Define segments and estimate size per segment.
3. Score fit using win/retention evidence where available.
4. Prioritise by fit × opportunity ÷ effort.
5. Translate into targeting criteria for platforms and outbound lists.

## Decision rules

- Prioritise segments with proven fit over large but unproven ones.
- Keep segments mutually exclusive and addressable.

## Quality checklist

- [ ] Dimensions predict fit.
- [ ] Segments sized and prioritised.
- [ ] Targeting criteria addressable on chosen platforms.

## Compliance checklist

- [ ] No unlawful data sourcing.
- [ ] Targeting avoids sensitive-category inference.

## Failure conditions and escalation

- No market/fit criteria → `insufficient_data`.

## Examples

- **B2B SaaS:** "UK fintech, 100–500 FTE, uses AWS, Series B+" as a priority tier.
- **Vertical SaaS:** single industry, sub-segmented by sub-vertical and size.

## KPIs and metrics

Pipeline by segment, win rate by segment, CAC by segment.

## Related skills

`customer-research.ideal-customer-profile`, `account-based-marketing.account-tiering`,
`market-research.market-segmentation`.

## MCP mappings

- Resources: `marketing://industries/catalogue`
- Prompts: `define_icp`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

---
id: ecommerce.conversion-rate-improvement
name: E-commerce Conversion Rate Improvement
version: 1.0.0
status: stable
description: Improve store conversion by diagnosing PDP, cart and checkout friction and prioritising margin-aware, testable improvements.
category: ecommerce-marketing
sub_category: conversion
industries: [ecommerce, retail]
business_models: [b2c, d2c, b2b]
funnel_stages: [consideration, decision]
objectives: [improve-conversion, protect-margin]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [store-and-platform, funnel-data-or-access, products]
optional_inputs: [margins, analytics, heatmaps]
outputs: [findings, prioritised-fixes, test-hypotheses]
related_skills: [cro.funnel-drop-off-analysis, ecommerce.repeat-purchase, experimentation.ab-test-design]
resources: [marketing://metrics]
mcp_prompts: [ecommerce_growth_plan]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [ecommerce, cro, conversion]
---

## Overview

Diagnoses the storefront funnel (PDP → cart → checkout) for friction and trust gaps, then
prioritises margin-aware, testable improvements rather than blanket discounting.

## Business purpose

Small conversion lifts compound across all traffic and protect margin vs discounting.

## When to use / when not to use

- **Use** to raise store conversion.
- **Do not use** to default to discounts that erode margin.

## Inputs

### Required
- Store/platform, funnel data or access, products.

### Optional
- Margins, analytics, heatmaps.

## Outputs

- **Findings** across PDP, cart, checkout, trust, speed, mobile.
- **Prioritised fixes** (margin-aware).
- **Test hypotheses**.

## Methodology

1. Measure step conversion; find biggest value leaks.
2. Assess PDP (info, images, reviews, urgency honesty), cart (costs surfaced), checkout (steps, guest, payments).
3. Check trust (reviews, guarantees, security), speed and mobile.
4. Prioritise by value × effort, protecting margin.
5. Convert to test hypotheses.

## Decision rules

- Fix biggest value leak first.
- Prefer clarity/trust/speed over discounts.
- Surface all costs early to reduce checkout abandonment.

## Quality checklist

- [ ] Funnel measured.
- [ ] PDP/cart/checkout reviewed.
- [ ] Margin-aware prioritisation.

## Compliance checklist

- [ ] Honest urgency/scarcity and pricing.
- [ ] Genuine reviews; transparent fees.

## Failure conditions and escalation

- Missing store/funnel/products → `insufficient_data`.

## Examples

- **D2C:** add reviews + reduce checkout steps.
- **Fashion:** better sizing info + returns clarity.
- **Marketplace:** trust badges + faster PDP.

## KPIs and metrics

Conversion rate, add-to-cart, checkout completion, revenue/visitor, margin.

## Related skills

`cro.funnel-drop-off-analysis`, `ecommerce.repeat-purchase`,
`experimentation.ab-test-design`.

## MCP mappings

- Resources: `marketing://metrics`
- Prompts: `ecommerce_growth_plan`
- Tools: `marketing_get_skill`, `marketing_calculate_metric`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

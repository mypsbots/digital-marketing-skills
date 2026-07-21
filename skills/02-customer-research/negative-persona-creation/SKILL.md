---
id: customer-research.negative-persona-creation
name: Negative Persona Creation
version: 1.0.0
status: stable
description: Define who NOT to target — anti-personas that waste budget or fit poorly — to sharpen targeting, exclusions and qualification.
category: customer-research
sub_category: personas
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
objectives: [reduce-waste, improve-fit]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: hours
required_inputs: [icp-or-personas, poor-fit-signals]
optional_inputs: [churn-data, sales-feedback, cost-data]
outputs: [negative-personas, exclusion-criteria, qualification-signals]
related_skills: [customer-research.ideal-customer-profile, customer-research.buyer-persona-development, crm.lead-scoring]
resources: []
mcp_prompts: [generate_buyer_persona]
data_sensitivity: confidential
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [persona, targeting, exclusion]
---

## Overview

Defines negative (anti-)personas: audiences that convert poorly, churn fast, cost too much to
serve, or fall outside the addressable market — used to build exclusions and qualification rules,
not to exclude protected groups.

## Business purpose

Excluding poor-fit audiences cuts wasted spend and improves conversion, retention and sales focus.

## When to use / when not to use

- **Use** to sharpen targeting and qualification with clear exclusions.
- **Do not use** to exclude protected characteristics or as a proxy for discrimination.

## Inputs

### Required
- ICP or personas, poor-fit signals.

### Optional
- Churn data, sales feedback, cost data.

## Outputs

- **Negative personas** with defining traits.
- **Exclusion criteria** (targeting/audience level).
- **Qualification signals** for disqualification.

## Methodology

1. Identify poor-fit patterns from churn, loss, cost-to-serve and sales feedback.
2. Describe anti-personas by legitimate, non-protected attributes and behaviours.
3. Translate into targeting exclusions and qualification/disqualification signals.
4. Validate against real data to avoid over-exclusion.
5. Document rationale and review periodically.

## Decision rules

- Base exclusions on behaviour/fit, never protected characteristics.
- Validate with data to avoid excluding viable demand.
- Keep exclusions reviewable and reversible.

## Quality checklist

- [ ] Anti-personas grounded in evidence.
- [ ] Exclusions/qualification actionable.
- [ ] No protected-attribute targeting.

## Compliance checklist

- [ ] No discrimination on protected characteristics.
- [ ] Data used lawfully.

## Failure conditions and escalation

- Missing ICP/poor-fit signals → `insufficient_data`.

## Examples

- **SaaS:** hobby users unlikely to reach paid value.
- **E-commerce:** deep-discount-only, high-return cohorts.
- **Real estate:** out-of-area or non-serviced enquiries.
- **Retail:** one-time deal-seekers with no loyalty potential.

## KPIs and metrics

Wasted-spend reduction, conversion/qualification-rate lift, cost-to-serve.

## Related skills

`customer-research.ideal-customer-profile`, `customer-research.buyer-persona-development`,
`crm.lead-scoring`.

## MCP mappings

- Prompts: `generate_buyer_persona`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

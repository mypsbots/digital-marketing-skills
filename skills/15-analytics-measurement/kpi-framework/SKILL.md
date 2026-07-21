---
id: analytics.kpi-framework
name: KPI Framework
version: 1.0.0
status: stable
description: Build a KPI framework with a north-star metric, input metrics, targets and guardrails aligned to the funnel and business model.
category: analytics-measurement
sub_category: kpi
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision, retention, advocacy]
objectives: [align-metrics, set-targets]
risk_level: low
execution_mode: planning
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [business-objective, business-model]
optional_inputs: [current-metrics, benchmarks]
outputs: [north-star, input-metrics, targets, guardrails]
related_skills: [analytics.measurement-strategy, strategy.annual-marketing-strategy, reporting.executive-summary]
resources: [marketing://metrics]
mcp_prompts: [create_marketing_strategy]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [analytics, kpi, targets]
---

## Overview

Defines a north-star metric and the input metrics that drive it, with realistic targets and
guardrails, so the team optimises the right things without harmful side effects.

## Business purpose

A shared KPI framework aligns teams and prevents gaming of isolated metrics.

## When to use / when not to use

- **Use** to define/refresh KPIs and targets.
- **Do not use** to set targets without baseline or benchmark grounding.

## Inputs

### Required
- Business objective, business model.

### Optional
- Current metrics, benchmarks.

## Outputs

- A **north-star metric** and rationale.
- **Input metrics** that causally drive it.
- **Targets** (ranges) and **guardrails**.

## Methodology

1. Choose a north-star reflecting delivered customer + business value.
2. Decompose into 3–5 input metrics you can influence.
3. Set target ranges from baseline/benchmarks with assumptions.
4. Add guardrail metrics to prevent harmful optimisation.
5. Assign owners and review cadence.

## Decision rules

- North-star must reflect value, not vanity.
- Prefer target ranges with assumptions over false-precision single numbers.
- Every KPI has an owner.

## Quality checklist

- [ ] North-star + inputs defined.
- [ ] Targets grounded and ranged.
- [ ] Guardrails present.

## Compliance checklist

- [ ] Metrics use aggregated data; no PII exposure.

## Failure conditions and escalation

- Missing objective/model → `insufficient_data`.

## Examples

- **SaaS:** NSM = weekly active accounts; inputs = signups, activation, retention.
- **E-commerce:** NSM = contribution margin; inputs = traffic, CVR, AOV, repeat.
- **Real estate:** NSM = qualified enquiries; inputs = reach, CTR, form CVR.
- **Retail:** NSM = omnichannel revenue; inputs = footfall, basket, loyalty.

## KPIs and metrics

North-star, input metrics, target attainment.

## Related skills

`analytics.measurement-strategy`, `strategy.annual-marketing-strategy`,
`reporting.executive-summary`.

## MCP mappings

- Resources: `marketing://metrics`
- Prompts: `create_marketing_strategy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

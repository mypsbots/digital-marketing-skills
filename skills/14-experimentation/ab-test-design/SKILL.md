---
id: experimentation.ab-test-design
name: A/B Test Design
version: 1.0.0
status: stable
description: Design rigorous A/B tests with a clear hypothesis, primary metric, guardrails, sample size and a pre-registered analysis plan to avoid false wins.
category: experimentation
sub_category: design
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [consideration, decision, retention]
objectives: [validate-changes, improve-conversion]
risk_level: medium
execution_mode: planning
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [primary-metric, baseline-rate, minimum-detectable-effect]
optional_inputs: [traffic-volume, guardrail-metrics, significance-level]
outputs: [hypothesis, variants, sample-size, duration, analysis-plan]
related_skills: [experimentation.sample-size-estimation, cro.landing-page-audit, analytics.tracking-plan-design]
resources: [marketing://metrics]
mcp_prompts: [create_ab_test]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [experimentation, ab-test, statistics]
---

## Overview

Produces a statistically sound A/B test design: a falsifiable hypothesis, one primary metric,
guardrails, a pre-computed sample size and duration, and a fixed analysis plan.

## Business purpose

Rigorous testing prevents shipping false wins and wasting traffic on underpowered tests.

## When to use / when not to use

- **Use** to design experiments before launching.
- **Do not use** to justify peeking/stopping early or HARKing (hypothesising after results).

## Inputs

### Required
- Primary metric, baseline rate, minimum detectable effect (MDE).

### Optional
- Traffic volume, guardrail metrics, significance level/power.

## Outputs

- **Hypothesis** (change → expected effect → metric).
- **Variants** and allocation.
- **Sample size and duration**.
- **Analysis plan** (test, significance, guardrails, decision rule).

## Methodology

1. State a single primary metric and a falsifiable hypothesis.
2. Set significance (α, default 0.05) and power (default 0.8) and MDE.
3. Compute sample size per variant and expected duration from traffic.
4. Define guardrail metrics (e.g. revenue, refunds) that can veto a win.
5. Pre-register the analysis plan; fix the stopping rule (no peeking).
6. Plan for SRM checks and segment sanity checks.

## Decision rules

- One primary metric; guardrails can veto.
- Do not stop early unless using a valid sequential method.
- Require pre-computed sample size; avoid underpowered tests.

## Quality checklist

- [ ] Single primary metric + hypothesis.
- [ ] Sample size/duration computed.
- [ ] Guardrails and stopping rule fixed.

## Compliance checklist

- [ ] No experimentation on protected decisions without review.
- [ ] User data handled per privacy policy.

## Failure conditions and escalation

- Missing metric/baseline/MDE → `insufficient_data`.
- Insufficient traffic for MDE → recommend larger MDE or longer window.

## Examples

- **SaaS:** signup form variant; primary = signup rate; guardrail = activation.
- **E-commerce:** PDP layout; primary = add-to-cart; guardrail = revenue/visitor.
- **Real estate:** enquiry form length; primary = enquiry rate.
- **Retail:** promo banner; primary = CTR to offer; guardrail = margin.

## KPIs and metrics

Primary metric lift, statistical significance, guardrail deltas, power.

## Related skills

`experimentation.sample-size-estimation`, `cro.landing-page-audit`,
`analytics.tracking-plan-design`.

## MCP mappings

- Resources: `marketing://metrics`
- Prompts: `create_ab_test`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

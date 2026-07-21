---
id: experimentation.sample-size-estimation
name: Sample Size Estimation
version: 1.0.0
status: stable
description: Estimate required sample size and test duration for an experiment from baseline rate, minimum detectable effect, significance and power.
category: experimentation
sub_category: statistics
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [consideration, decision, retention]
objectives: [plan-experiments]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: minutes-to-hours
required_inputs: [baseline-rate, minimum-detectable-effect]
optional_inputs: [significance-level, power, traffic-per-day, variants]
outputs: [sample-size-per-variant, total-sample, estimated-duration]
related_skills: [experimentation.ab-test-design, analytics.tracking-plan-design]
resources: []
mcp_prompts: [create_ab_test]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [experimentation, sample-size, power]
---

## Overview

Calculates the sample size per variant and estimated duration for a proportion-based A/B test,
making assumptions explicit and warning when tests are infeasible.

## Business purpose

Prevents underpowered tests (false negatives) and endless tests (wasted time).

## When to use / when not to use

- **Use** to size an experiment before launch.
- **Do not use** as a substitute for a full analysis plan (see `ab-test-design`).

## Inputs

### Required
- Baseline conversion rate, minimum detectable effect (absolute or relative).

### Optional
- Significance level (default 0.05), power (default 0.8), traffic/day, number of variants.

## Outputs

- **Sample size per variant** and **total**.
- **Estimated duration** given traffic.
- Assumptions and feasibility notes.

## Methodology

1. Convert MDE to absolute terms from the baseline.
2. Use the two-proportion power formula with chosen α and power.
3. Multiply by number of variants for total.
4. Divide by daily eligible traffic to estimate duration.
5. Flag if duration is impractical; suggest larger MDE or more traffic.

## Decision rules

- Default α = 0.05, power = 0.8 unless specified.
- State whether MDE is absolute or relative.
- Warn when required duration exceeds a practical window.

## Quality checklist

- [ ] MDE interpretation stated.
- [ ] Assumptions explicit.
- [ ] Duration feasibility flagged.

## Compliance checklist

- [ ] Aggregated counts only; no PII.

## Failure conditions and escalation

- Missing baseline/MDE → `insufficient_data`.

## Examples

- **SaaS:** 5% baseline, +1pt MDE → sample per variant + weeks estimate.
- **E-commerce:** 3% add-to-cart, +0.5pt MDE.
- **Real estate:** enquiry-rate test sizing.
- **Retail:** offer CTR test sizing.

## KPIs and metrics

Required n, achieved power, duration.

## Related skills

`experimentation.ab-test-design`, `analytics.tracking-plan-design`.

## MCP mappings

- Prompts: `create_ab_test`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

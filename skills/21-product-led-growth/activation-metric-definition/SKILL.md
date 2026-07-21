---
id: plg.activation-metric-definition
name: Activation Metric Definition
version: 1.0.0
status: stable
description: Define a product activation metric (aha moment) that predicts retention, with a measurable threshold and a plan to move new users to it.
category: product-led-growth
sub_category: activation
industries: [saas]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [consideration, decision, retention]
objectives: [improve-activation, improve-retention]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [product, key-actions, retention-data-or-hypotheses]
optional_inputs: [cohort-data, onboarding-flow]
outputs: [activation-definition, threshold, onboarding-plan]
related_skills: [saas.saas-go-to-market, analytics.kpi-framework, cro.funnel-drop-off-analysis]
resources: [marketing://metrics]
mcp_prompts: [saas_growth_plan]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [plg, activation, retention]
---

## Overview

Identifies the earliest user action(s) that predict long-term retention (the activation/aha
metric), sets a measurable threshold, and plans onboarding to move users to it faster.

## Business purpose

Activation is the strongest early predictor of retention and expansion in PLG.

## When to use / when not to use

- **Use** to define/validate an activation metric.
- **Do not use** to pick a vanity metric unconnected to retention.

## Inputs

### Required
- Product, key actions, retention data or hypotheses.

### Optional
- Cohort data, onboarding flow.

## Outputs

- An **activation definition** (action + value + time window).
- A **threshold** correlated with retention.
- An **onboarding plan** to increase activation rate.

## Methodology

1. List candidate early actions signalling value.
2. Correlate each with retained cohorts (data or hypothesis + validation plan).
3. Choose an action + magnitude + time window (e.g. X within 7 days).
4. Diagnose onboarding drop-off to that action.
5. Plan interventions; measure activation rate and downstream retention.

## Decision rules

- Activation must predict retention, not just usage.
- Prefer a single, clear threshold.
- Validate correlation before committing.

## Quality checklist

- [ ] Action/value/window defined.
- [ ] Retention correlation (or validation plan).
- [ ] Onboarding plan to threshold.

## Compliance checklist

- [ ] Product analytics aggregated; PII minimised.

## Failure conditions and escalation

- Missing product/actions/retention basis → `insufficient_data`.

## Examples

- **Collaboration tool:** invite ≥1 teammate + create project in 7 days.
- **Analytics SaaS:** connect data source + view report in first session.
- **D2C app:** complete setup + first key action week 1.

## KPIs and metrics

Activation rate, time-to-activate, activated-cohort retention.

## Related skills

`saas.saas-go-to-market`, `analytics.kpi-framework`, `cro.funnel-drop-off-analysis`.

## MCP mappings

- Resources: `marketing://metrics`
- Prompts: `saas_growth_plan`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

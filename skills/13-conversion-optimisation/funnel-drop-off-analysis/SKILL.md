---
id: cro.funnel-drop-off-analysis
name: Funnel Drop-off Analysis
version: 1.0.0
status: stable
description: Quantify where users drop off in a conversion funnel, segment the leakage and prioritise the highest-value fixes.
category: conversion-optimisation
sub_category: analysis
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [consideration, decision]
objectives: [improve-conversion, reduce-leakage]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [funnel-steps, step-volumes]
optional_inputs: [segments, device-breakdown, time-window]
outputs: [funnel-conversion, drop-off-points, prioritised-fixes]
related_skills: [cro.landing-page-audit, analytics.funnel-analysis, experimentation.ab-test-design]
resources: [marketing://metrics]
mcp_prompts: [audit_landing_page]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [cro, funnel, analysis]
---

## Overview

Measures step-by-step conversion through a funnel, identifies the biggest leakage points and
segments them to prioritise fixes with the largest expected uplift.

## Business purpose

Fixing the biggest leak returns more than optimising an already-strong step.

## When to use / when not to use

- **Use** to locate and prioritise funnel leakage.
- **Do not use** to conclude causes without segmenting (device/source/segment matter).

## Inputs

### Required
- Funnel steps and volumes at each step.

### Optional
- Segments, device breakdown, time window.

## Outputs

- **Funnel conversion** per step and overall.
- **Drop-off points** ranked by lost volume/value.
- **Prioritised fixes/hypotheses**.

## Methodology

1. Define funnel steps and confirm tracking validity.
2. Calculate step and overall conversion (deterministic).
3. Rank drop-offs by absolute lost value, not just rate.
4. Segment the worst steps (device/source/new-vs-return) to localise the issue.
5. Form hypotheses and prioritise by impact × effort.

## Decision rules

- Prioritise by value lost, not percentage alone.
- Validate tracking before trusting the funnel.
- Segment before concluding root cause.

## Quality checklist

- [ ] Tracking validated.
- [ ] Conversions computed correctly.
- [ ] Drop-offs ranked by value; segmented.

## Compliance checklist

- [ ] Analytics data aggregated; no PII exposure.

## Failure conditions and escalation

- Missing steps/volumes → `insufficient_data`.
- Broken tracking → flag before analysis.

## Examples

- **SaaS:** signup → activation drop localised to mobile.
- **E-commerce:** cart → checkout leak from shipping cost surprise.
- **Real estate:** enquiry form abandonment on long forms.
- **Retail:** BOPIS flow drop at store selection.

## KPIs and metrics

Step conversion, overall conversion, lost value, segment deltas.

## Related skills

`cro.landing-page-audit`, `analytics.funnel-analysis`, `experimentation.ab-test-design`.

## MCP mappings

- Resources: `marketing://metrics`
- Tools: `marketing_get_skill`, `marketing_calculate_metric`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

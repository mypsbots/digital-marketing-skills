---
id: analytics.funnel-analysis
name: Funnel Analysis
version: 1.0.0
status: stable
description: Analyse conversion funnels to quantify stage-by-stage conversion and drop-off, segment the leaks and surface where to focus, using consented aggregate data.
category: analytics-measurement
sub_category: analysis
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision, retention]
objectives: [find-leaks, improve-conversion]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: hours
required_inputs: [funnel-definition, stage-counts-or-event-data]
optional_inputs: [segments, time-period, benchmarks]
outputs: [funnel-metrics, drop-off-analysis, focus-areas]
related_skills: [foundation.funnel-mapping, cro.funnel-drop-off-analysis, analytics.marketing-performance-diagnosis]
resources: [marketing://metrics, marketing://funnel-stages]
mcp_prompts: [build_tracking_plan, diagnose_declining_conversions]
data_sensitivity: confidential
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [analytics, funnel, conversion]
---

## Overview

Measures each funnel transition, computes conversion and drop-off rates, segments where leaks
concentrate, and identifies the highest-impact stage to fix — using aggregated, consent-based data.

## Business purpose

Quantifying the funnel turns "conversion is low" into a specific, prioritised place to act.

## When to use / when not to use

- **Use** to quantify and localise funnel leakage.
- **Do not use** with non-consented tracking or to present partial data as complete.

## Inputs

### Required
- Funnel definition, stage counts or event data.

### Optional
- Segments, time period, benchmarks.

## Outputs

- **Funnel metrics** (per-stage + overall conversion).
- **Drop-off analysis** (largest absolute/relative leaks).
- **Focus areas** for CRO/lifecycle.

## Methodology

1. Confirm the funnel definition and stage events.
2. Compute stage conversion and drop-off (absolute and relative).
3. Segment (device/source/audience) to localise leaks.
4. Compare to benchmarks/history to judge severity.
5. Prioritise the stage with the biggest value opportunity; hand off to CRO.

## Decision rules

- Prioritise leaks by value at risk, not just percentage.
- Segment before concluding; averages hide problems.
- Note tracking gaps/consent effects on data completeness.

## Quality checklist

- [ ] Stage + overall conversion computed.
- [ ] Segmented drop-off.
- [ ] Prioritised focus area.

## Compliance checklist

- [ ] Consent-based, aggregated analytics.
- [ ] No PII exposure.

## Failure conditions and escalation

- Missing funnel/counts → `insufficient_data`.

## Examples

- **SaaS:** signup→activation drop-off by source.
- **E-commerce:** cart→checkout leak by device.
- **Real estate:** enquiry→viewing drop by area.
- **Retail:** visit→purchase by channel.

## KPIs and metrics

Stage conversion, overall conversion, drop-off %, value at risk.

## Related skills

`foundation.funnel-mapping`, `cro.funnel-drop-off-analysis`,
`analytics.marketing-performance-diagnosis`.

## MCP mappings

- Resources: `marketing://metrics`, `marketing://funnel-stages`
- Prompts: `build_tracking_plan`, `diagnose_declining_conversions`
- Tools: `marketing_get_skill`, `marketing_calculate_metric`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

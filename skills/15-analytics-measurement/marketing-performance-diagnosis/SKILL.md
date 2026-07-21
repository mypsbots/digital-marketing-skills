---
id: analytics.marketing-performance-diagnosis
name: Marketing Performance Diagnosis
version: 1.0.0
status: stable
description: Diagnose why marketing performance changed by decomposing metrics, segmenting and ranking likely drivers before recommending action.
category: analytics-measurement
sub_category: diagnosis
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision, retention]
objectives: [explain-performance, guide-action]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [kpi-and-change, metrics-or-access, period]
optional_inputs: [targets, comparison-period, recent-changes]
outputs: [decomposition, ranked-drivers, evidence, recommendations]
related_skills: [reporting.root-cause-analysis, cro.funnel-drop-off-analysis, reporting.campaign-performance-report]
resources: [marketing://metrics]
mcp_prompts: [analyse_campaign_performance, diagnose_declining_conversions]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [analytics, diagnosis, performance]
---

## Overview

Explains a performance change by decomposing the KPI into drivers (e.g. spend × CTR × CVR ×
AOV), segmenting, and ranking hypotheses by evidence — avoiding single-cause fallacies.

## Business purpose

Correct diagnosis prevents wasted fixes and mis-allocated budget.

## When to use / when not to use

- **Use** to explain a metric movement.
- **Do not use** to assert causation from correlation without checks.

## Inputs

### Required
- KPI and observed change, metrics or data access, period.

### Optional
- Targets, comparison period, recent changes.

## Outputs

- A **metric decomposition** identifying which factor moved.
- **Ranked drivers/hypotheses** with evidence grade.
- **Recommendations** and checks to run.

## Methodology

1. Decompose the KPI into multiplicative/additive drivers.
2. Compare period-over-period to locate the moving factor.
3. Segment (channel/device/geo/new-vs-return) to localise.
4. Correlate with known changes (tracking, pricing, seasonality).
5. Rank hypotheses by evidence; list validation checks.

## Decision rules

- Localise the driver before proposing fixes.
- Distinguish tracking artefacts from real changes.
- Grade evidence; avoid overclaiming causation.

## Quality checklist

- [ ] KPI decomposed.
- [ ] Segmented to localise.
- [ ] Hypotheses ranked with evidence.

## Compliance checklist

- [ ] Aggregated data; no PII exposure.

## Failure conditions and escalation

- Missing KPI/period/data → `insufficient_data`.
- Suspected tracking break → flag before concluding.

## Examples

- **SaaS:** signup drop traced to activation-tracking break.
- **E-commerce:** ROAS decline from CVR drop on mobile.
- **Real estate:** CPL rise from CTR fall after creative fatigue.
- **Retail:** revenue dip from footfall seasonality.

## KPIs and metrics

Driver contribution, segment deltas, hypothesis confidence.

## Related skills

`reporting.root-cause-analysis`, `cro.funnel-drop-off-analysis`,
`reporting.campaign-performance-report`.

## MCP mappings

- Resources: `marketing://metrics`
- Prompts: `analyse_campaign_performance`, `diagnose_declining_conversions`
- Tools: `marketing_get_skill`, `marketing_calculate_metric`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

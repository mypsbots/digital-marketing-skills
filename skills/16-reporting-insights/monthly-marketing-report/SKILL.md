---
id: reporting.monthly-marketing-report
name: Monthly Marketing Report
version: 1.0.0
status: stable
description: Produce a monthly marketing report with an executive summary, channel sections, anomalies, insights and prioritised recommendations.
category: reporting-insights
sub_category: reporting
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision, retention, advocacy]
objectives: [track-progress, guide-action]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: hours
required_inputs: [date-range, kpis, data-or-figures]
optional_inputs: [targets, prior-period, segments]
outputs: [executive-summary, channel-sections, anomalies, recommendations]
related_skills: [reporting.executive-summary, reporting.campaign-performance-report, analytics.kpi-framework]
resources: [marketing://metrics]
mcp_prompts: [monthly_marketing_report]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [reporting, monthly, insights]
---

## Overview

Assembles a monthly report: headline outcomes, per-channel performance vs target, anomalies with
explanations, and prioritised recommendations — concise and decision-oriented.

## Business purpose

A consistent monthly cadence keeps stakeholders aligned and surfaces issues early.

## When to use / when not to use

- **Use** for the monthly reporting cycle.
- **Do not use** to present unexplained numbers or vanity metrics.

## Inputs

### Required
- Date range, KPIs, data/figures.

### Optional
- Targets, prior period, segments.

## Outputs

- An **executive summary** (3–5 points).
- **Channel sections** vs target.
- **Anomalies** and **recommendations**.

## Methodology

1. Lead with headline outcomes vs targets.
2. Report each channel: result, driver, action.
3. Flag anomalies and data caveats.
4. Prioritise recommendations for next month with owners.
5. State assumptions/limitations.

## Decision rules

- Executive summary first; details after.
- Every section links to an action.
- Flag data caveats explicitly.

## Quality checklist

- [ ] Executive summary present.
- [ ] Channel sections vs target.
- [ ] Recommendations prioritised.

## Compliance checklist

- [ ] Aggregated data; no PII exposure.

## Failure conditions and escalation

- Missing date range/KPIs/data → `insufficient_data`.

## Examples

- **SaaS:** pipeline/activation-focused monthly.
- **E-commerce:** revenue/ROAS/CM monthly.
- **Real estate:** enquiries/CPL monthly.
- **Retail:** omnichannel revenue/footfall monthly.

## KPIs and metrics

KPI attainment, trend vs prior, channel efficiency.

## Related skills

`reporting.executive-summary`, `reporting.campaign-performance-report`,
`analytics.kpi-framework`.

## MCP mappings

- Resources: `marketing://metrics`
- Prompts: `monthly_marketing_report`
- Tools: `marketing_get_skill`, `marketing_calculate_metric`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

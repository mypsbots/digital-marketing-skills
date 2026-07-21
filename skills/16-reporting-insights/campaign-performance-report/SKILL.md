---
id: reporting.campaign-performance-report
name: Campaign Performance Report
version: 1.0.0
status: stable
description: Produce a campaign performance report that compares results to objectives, explains drivers and anomalies and recommends clear next actions.
category: reporting-insights
sub_category: reporting
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision, retention]
objectives: [explain-results, guide-action]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: hours
required_inputs: [campaign-objective, metrics-or-access, date-range]
optional_inputs: [targets, comparison-period, segments]
outputs: [kpi-vs-target, drivers, anomalies, recommendations]
related_skills: [analytics.marketing-performance-diagnosis, reporting.monthly-marketing-report, reporting.executive-summary]
resources: [marketing://metrics]
mcp_prompts: [analyse_campaign_performance]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [reporting, campaign, performance]
---

## Overview

Reports a campaign against its objective and KPIs, explaining what drove results and what to do
next — not just a metric dump.

## Business purpose

Reporting must drive decisions; insight and action beat raw numbers.

## When to use / when not to use

- **Use** to summarise and act on campaign results.
- **Do not use** to present metrics without context or action.

## Inputs

### Required
- Campaign objective/KPIs, metrics or access, date range.

### Optional
- Targets, comparison period, segments.

## Outputs

- **KPI vs target** table.
- **Drivers** and **anomalies**.
- **Recommendations** with owners.

## Methodology

1. Restate objective, KPIs and targets.
2. Report results vs target and vs prior period.
3. Explain drivers (decomposition) and flag anomalies/data caveats.
4. Recommend prioritised next actions with owners.
5. State assumptions and data limitations.

## Decision rules

- Always compare to objective/target and a baseline.
- Distinguish signal from noise; flag data caveats.
- End with actions, not just observations.

## Quality checklist

- [ ] KPI vs target shown.
- [ ] Drivers explained.
- [ ] Actions with owners.

## Compliance checklist

- [ ] Aggregated data; no PII exposure.

## Failure conditions and escalation

- Missing objective/data/date range → `insufficient_data`.

## Examples

- **SaaS:** trial campaign vs CPA target.
- **E-commerce:** promo campaign vs ROAS/CM target.
- **Real estate:** lead campaign vs CPL target.
- **Retail:** promo vs incremental revenue target.

## KPIs and metrics

Campaign KPI attainment, efficiency, incremental impact.

## Related skills

`analytics.marketing-performance-diagnosis`, `reporting.monthly-marketing-report`,
`reporting.executive-summary`.

## MCP mappings

- Resources: `marketing://metrics`
- Prompts: `analyse_campaign_performance`
- Tools: `marketing_get_skill`, `marketing_calculate_metric`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

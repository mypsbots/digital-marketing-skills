---
id: reporting.root-cause-analysis
name: Root Cause Analysis
version: 1.0.0
status: stable
description: Systematically root-cause a marketing metric decline by generating, ranking and testing hypotheses with evidence before recommending fixes.
category: reporting-insights
sub_category: diagnosis
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision, retention]
objectives: [find-root-cause, guide-fixes]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [metric-and-decline, affected-period, data-or-access]
optional_inputs: [recent-changes, segments, tracking-status]
outputs: [ranked-hypotheses, evidence, checks-to-run, recommended-fixes]
related_skills: [analytics.marketing-performance-diagnosis, cro.funnel-drop-off-analysis]
resources: [marketing://metrics]
mcp_prompts: [diagnose_declining_conversions]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [reporting, root-cause, diagnosis]
---

## Overview

Applies a structured method (decompose → segment → correlate with changes → rank) to find the
most likely cause of a decline and the checks needed to confirm it.

## Business purpose

Fixing symptoms wastes effort; root-cause work targets the real problem.

## When to use / when not to use

- **Use** to investigate a drop in a key metric.
- **Do not use** to jump to a single cause without checks.

## Inputs

### Required
- Metric and decline, affected period, data/access.

### Optional
- Recent changes, segments, tracking status.

## Outputs

- **Ranked hypotheses** with evidence grade.
- **Checks to run** to confirm/deny.
- **Recommended fixes** once confirmed.

## Methodology

1. Confirm the decline is real (not tracking/seasonality).
2. Decompose the metric and segment to localise.
3. Build a hypothesis tree (demand, tracking, funnel, competitive, external).
4. Correlate timing with known changes.
5. Rank by evidence; specify confirmation checks; then recommend fixes.

## Decision rules

- Verify data integrity first.
- Localise before hypothesising causes.
- Recommend fixes only after confirmation checks.

## Quality checklist

- [ ] Decline verified.
- [ ] Hypotheses ranked with evidence.
- [ ] Confirmation checks listed.

## Compliance checklist

- [ ] Aggregated data; no PII exposure.

## Failure conditions and escalation

- Missing metric/period/data → `insufficient_data`.
- Tracking break suspected → flag first.

## Examples

- **SaaS:** signup drop → tracking regression confirmed.
- **E-commerce:** CVR drop → checkout error on mobile.
- **Real estate:** enquiry drop → form change regression.
- **Retail:** footfall drop → local seasonality/competitor.

## KPIs and metrics

Hypothesis confidence, time-to-diagnosis, fix impact.

## Related skills

`analytics.marketing-performance-diagnosis`, `cro.funnel-drop-off-analysis`.

## MCP mappings

- Resources: `marketing://metrics`
- Prompts: `diagnose_declining_conversions`
- Tools: `marketing_get_skill`, `marketing_calculate_metric`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

---
id: budgeting.channel-budget-allocation
name: Channel Budget Allocation
version: 1.0.0
status: stable
description: Allocate a marketing budget across channels using objectives, efficiency evidence and diversification, with explicit assumptions and ranges.
category: budgeting-forecasting
sub_category: budgeting
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision, retention]
objectives: [allocate-budget, maximise-efficiency]
risk_level: medium
execution_mode: planning
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [total-budget, objectives, time-period]
optional_inputs: [historical-performance, constraints, targets]
outputs: [allocation-by-channel, assumptions, pacing, review-cadence]
related_skills: [budgeting.scenario-planning, strategy.channel-mix-planning, analytics.kpi-framework]
resources: [marketing://channels, marketing://metrics]
mcp_prompts: [allocate_budget]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [budgeting, allocation, planning]
---

## Overview

Allocates budget across channels balancing objectives, efficiency evidence, funnel coverage and
diversification — presented as ranges with assumptions, not false precision.

## Business purpose

Good allocation maximises return within risk limits and avoids over-concentration.

## When to use / when not to use

- **Use** to plan/split budget.
- **Do not use** to execute spend (that requires approval) or promise exact returns.

## Inputs

### Required
- Total budget, objectives, time period.

### Optional
- Historical performance, constraints, targets.

## Outputs

- **Allocation by channel** (ranges).
- **Assumptions** and expected efficiency.
- **Pacing** and **review cadence**.

## Methodology

1. Map objectives to funnel coverage needs.
2. Use efficiency evidence (CAC/ROAS/MER) where available; note uncertainty.
3. Balance proven channels with a test budget (e.g. 70/20/10).
4. Respect constraints and diversification limits.
5. Set pacing, guardrails and a review/reallocation cadence.

## Decision rules

- Present ranges with assumptions; avoid false precision.
- Reserve a test budget; avoid single-channel dependence.
- Spend execution requires approval.

## Quality checklist

- [ ] Allocation tied to objectives.
- [ ] Assumptions explicit.
- [ ] Pacing/review defined.

## Compliance checklist

- [ ] No guaranteed-return claims.
- [ ] Spend requires approval before execution.

## Failure conditions and escalation

- Missing budget/objectives/period → `insufficient_data`.
- Execution → requires approval.

## Examples

- **SaaS:** demand-gen vs capture split with test budget.
- **E-commerce:** prospecting/retargeting/retention split, margin-aware.
- **Real estate:** local paid + portals + nurture split.
- **Retail:** local + national + loyalty split.

## KPIs and metrics

Blended CAC/ROAS/MER, pacing accuracy, marginal efficiency.

## Related skills

`budgeting.scenario-planning`, `strategy.channel-mix-planning`, `analytics.kpi-framework`.

## MCP mappings

- Resources: `marketing://channels`, `marketing://metrics`
- Prompts: `allocate_budget`
- Tools: `marketing_get_skill`, `marketing_request_approval`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

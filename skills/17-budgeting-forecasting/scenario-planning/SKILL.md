---
id: budgeting.scenario-planning
name: Scenario Planning
version: 1.0.0
status: stable
description: Model conservative, base and aggressive marketing scenarios with explicit assumptions, ranges and triggers to guide budget decisions under uncertainty.
category: budgeting-forecasting
sub_category: forecasting
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision, retention]
objectives: [plan-under-uncertainty, guide-decisions]
risk_level: medium
execution_mode: planning
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [objectives, budget-range, key-assumptions]
optional_inputs: [historical-performance, constraints]
outputs: [scenarios, assumptions, ranges, triggers]
related_skills: [budgeting.channel-budget-allocation, analytics.kpi-framework]
resources: [marketing://metrics]
mcp_prompts: [allocate_budget]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [budgeting, forecasting, scenarios]
---

## Overview

Builds conservative/base/aggressive scenarios with explicit assumptions and outcome ranges, plus
triggers for moving between them — supporting robust decisions under uncertainty.

## Business purpose

Point forecasts mislead; scenarios expose risk and inform contingency.

## When to use / when not to use

- **Use** to plan under uncertainty and set contingencies.
- **Do not use** to present a single forecast as certain.

## Inputs

### Required
- Objectives, budget range, key assumptions.

### Optional
- Historical performance, constraints.

## Outputs

- **Scenarios** (conservative/base/aggressive).
- **Assumptions** and **outcome ranges**.
- **Triggers** to switch scenarios.

## Methodology

1. Identify key drivers and their uncertainty.
2. Define 3 scenarios with distinct assumption sets.
3. Model outcomes as ranges, not points.
4. Define leading indicators/triggers to move between scenarios.
5. Recommend a base plan with contingencies.

## Decision rules

- Always ranges, never false precision.
- Make assumptions explicit and testable.
- Define triggers in advance.

## Quality checklist

- [ ] Three scenarios with assumptions.
- [ ] Outcome ranges.
- [ ] Triggers defined.

## Compliance checklist

- [ ] No guaranteed-outcome claims.

## Failure conditions and escalation

- Missing objectives/budget/assumptions → `insufficient_data`.

## Examples

- **SaaS:** CAC/conversion sensitivity scenarios.
- **E-commerce:** ROAS/AOV/seasonality scenarios.
- **Real estate:** market-condition scenarios.
- **Retail:** footfall/promo-response scenarios.

## KPIs and metrics

Forecast accuracy, scenario-trigger lead time.

## Related skills

`budgeting.channel-budget-allocation`, `analytics.kpi-framework`.

## MCP mappings

- Resources: `marketing://metrics`
- Prompts: `allocate_budget`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

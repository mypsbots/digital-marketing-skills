---
id: foundation.smart-goal-creation
name: SMART Goal Creation
version: 1.0.0
status: stable
description: Turn vague ambitions into specific, measurable, achievable, relevant, time-bound marketing goals with baselines, targets and owners.
category: foundation
sub_category: goals
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision, retention, advocacy]
objectives: [set-clear-goals]
risk_level: low
execution_mode: planning
human_approval_required: false
estimated_duration: hours
required_inputs: [ambition-or-objective, timeframe]
optional_inputs: [baseline, benchmarks, constraints]
outputs: [smart-goals, baselines-and-targets, owners]
related_skills: [foundation.business-objective-clarification, analytics.kpi-framework, budgeting.scenario-planning]
resources: [marketing://metrics]
mcp_prompts: [create_marketing_strategy]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [goals, smart, planning]
---

## Overview

Converts ambitions into SMART goals — Specific, Measurable, Achievable, Relevant, Time-bound —
each with a baseline, a target range, an owner and a review cadence.

## Business purpose

Clear goals align effort and enable honest measurement; vague goals cannot be managed.

## When to use / when not to use

- **Use** to formalise goals before planning activity.
- **Do not use** to set targets without a baseline or grounding (avoid false precision).

## Inputs

### Required
- Ambition/objective, timeframe.

### Optional
- Baseline, benchmarks, constraints.

## Outputs

- **SMART goals** with metric definitions.
- **Baselines and target ranges**.
- **Owners** and review cadence.

## Methodology

1. Restate the ambition as a specific outcome.
2. Attach a measurable metric with a clear definition.
3. Set an achievable target range from baseline/benchmarks with assumptions.
4. Confirm relevance to the business objective.
5. Time-box it and assign an owner and review cadence.

## Decision rules

- Every goal needs a metric, baseline and owner.
- Prefer target ranges with assumptions over single false-precision numbers.
- Ensure achievability given resources/constraints.

## Quality checklist

- [ ] Specific and measurable.
- [ ] Baseline + achievable target range.
- [ ] Time-bound with an owner.

## Compliance checklist

- [ ] No guaranteed-outcome framing.

## Failure conditions and escalation

- Missing ambition/timeframe → `insufficient_data`.

## Examples

- **SaaS:** grow activated trials from 22% to 28–32% in 2 quarters.
- **E-commerce:** lift repeat-purchase rate by 3–5pts in 6 months.
- **Real estate:** reduce CPL by 15–20% this quarter.
- **Retail:** increase loyalty active rate by 5–8pts this half.

## KPIs and metrics

Goal attainment vs target range, on-time completion.

## Related skills

`foundation.business-objective-clarification`, `analytics.kpi-framework`,
`budgeting.scenario-planning`.

## MCP mappings

- Resources: `marketing://metrics`
- Prompts: `create_marketing_strategy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

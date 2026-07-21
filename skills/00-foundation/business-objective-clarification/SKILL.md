---
id: foundation.business-objective-clarification
name: Business Objective Clarification
version: 1.0.0
status: stable
description: >-
  Translate a vague business ambition into a specific, measurable business objective and the
  marketing objective(s) that support it, with a clear metric chain.
category: foundation
sub_category: objectives
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision, retention, advocacy]
objectives: [clarify-objective, align-stakeholders]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: hours
required_inputs: [business-ambition, time-horizon]
optional_inputs: [current-baseline, constraints, revenue-model]
outputs: [business-objective, marketing-objective, metric-chain]
related_skills: [foundation.smart-goal-creation, analytics.kpi-framework, strategy.annual-marketing-strategy]
resources: [marketing://funnel-stages]
mcp_prompts: [create_marketing_strategy]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [objectives, alignment, strategy]
---

## Overview

Converts "we want to grow" into a precise objective and the marketing objective(s) that
serve it, connected by an explicit metric chain: `Business objective → Marketing objective →
Funnel stage → Channel → KPI → Data source → Decision rule`.

## Business purpose

Most wasted marketing spend traces back to an unclear objective. Clarifying it up front makes
every later decision (channel, budget, KPI) testable against a single source of truth.

## When to use / when not to use

- **Use** at the start of any strategy, plan or campaign.
- **Do not use** to set creative direction (that follows positioning and messaging).

## Inputs

### Required
- Business ambition (free text) and time horizon.

### Optional
- Current baseline metrics, constraints (budget, capacity, compliance), revenue model.

## Outputs

- A single, measurable **business objective**.
- One or more **marketing objectives** that plausibly move it.
- A documented **metric chain** with data sources and decision rules.

## Methodology

1. Restate the ambition and ask what would count as success in 12 months.
2. Identify the revenue lever (acquisition, conversion, AOV, retention, expansion).
3. Express the business objective with a metric, target range and horizon; if a target cannot
   be evidenced, express it as a hypothesis with an uncertainty range.
4. Derive marketing objective(s) that plausibly move the lever, mapped to funnel stages.
5. Build the metric chain and name the data source and decision rule for each KPI.
6. Validate feasibility against constraints; flag if the target implies unrealistic efficiency.

## Decision rules

- Never accept a vanity metric as the business objective; connect it to revenue or a funnel
  outcome.
- If two objectives conflict (e.g. growth vs efficiency), force an explicit priority.
- If no baseline exists, mark targets as hypotheses, not commitments.

## Quality checklist

- [ ] Objective is specific, measurable and time-bound.
- [ ] Metric chain is complete end to end.
- [ ] Assumptions and uncertainty stated.
- [ ] No guaranteed outcomes.

## Compliance checklist

- [ ] Targets do not incentivise deceptive or non-compliant tactics.
- [ ] Any regulated claims implied by the objective flagged.

## Failure conditions and escalation

- Ambition too vague and stakeholder unavailable → `insufficient_data`.
- Conflicting stakeholder objectives → surface and request a decision.

## Examples

- **SaaS:** "Grow" → "Increase net-new ARR by 20–30% in 12 months" → marketing objective:
  increase qualified pipeline; KPIs: SQLs, pipeline £, win rate.
- **E-commerce:** "More sales" → "Grow contribution margin 15% in 2 quarters" via AOV +
  repeat rate, not just traffic.
- **Real estate:** "More listings" → "30 seller valuations/month" via valuation-request funnel.
- **Retail:** "Busier store" → "10% footfall uplift during promo weeks" with store-visit
  measurement.

## KPIs and metrics

Defined by the metric chain; typically one north-star plus 2–3 supporting KPIs and guardrails.

## Related skills

`foundation.smart-goal-creation`, `foundation.north-star-metric-definition`,
`analytics.kpi-framework`, `strategy.annual-marketing-strategy`.

## MCP mappings

- Resources: `marketing://funnel-stages`, `marketing://metrics/catalogue`
- Prompts: `create_marketing_strategy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

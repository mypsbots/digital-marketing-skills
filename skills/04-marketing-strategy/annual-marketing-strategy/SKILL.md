---
id: strategy.annual-marketing-strategy
name: Annual Marketing Strategy
version: 1.0.0
status: stable
description: Create a 12-month marketing strategy connecting business objectives to audiences, positioning, channel mix, budget, measurement and a quarterly roadmap.
category: marketing-strategy
sub_category: strategy
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision, retention, advocacy]
objectives: [set-strategy, allocate-resources]
risk_level: medium
execution_mode: planning
human_approval_required: false
estimated_duration: 1-2 weeks
required_inputs: [business-objective, audience, budget-range, time-horizon]
optional_inputs: [current-performance, positioning, constraints]
outputs: [strategy-document, channel-mix, measurement-plan, roadmap]
related_skills: [foundation.business-objective-clarification, strategy.channel-mix-planning, analytics.kpi-framework, budgeting.channel-budget-allocation]
resources: [marketing://channels/catalogue, marketing://funnel-stages]
mcp_prompts: [create_marketing_strategy]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [strategy, annual, planning]
---

## Overview

A comprehensive yet decisive annual plan that links objectives to a defensible channel mix,
budget, measurement plan and quarterly roadmap.

## Business purpose

Prevents scattered activity by forcing trade-offs and a coherent, measurable plan leadership
can fund and hold accountable.

## When to use / when not to use

- **Use** for annual planning or a major reset.
- **Do not use** for a single campaign (use the campaign workflow).

## Inputs

### Required
- Business objective, audience, budget range, time horizon.

### Optional
- Current performance, positioning, constraints.

## Outputs

- A **strategy document** (objectives, audience, positioning, mix, budget, risks).
- A **channel mix** with roles per funnel stage.
- A **measurement plan** and a **quarterly roadmap**.

## Methodology

1. Anchor to the clarified business/marketing objective and metric chain.
2. Confirm audience and positioning (run prerequisites if missing).
3. Select channels by fit to audience, objective and stage; assign each a role
   (demand creation vs capture) and a KPI.
4. Allocate budget across channels with assumptions and expected efficiency ranges.
5. Define the measurement plan (KPIs, data sources, decision rules, cadence).
6. Sequence initiatives into a quarterly roadmap with dependencies and owners.
7. Register risks, dependencies and the review cadence.

## Decision rules

- Fix measurement before scaling spend.
- Concentrate budget on fewer channels when maturity is low.
- Balance demand creation and demand capture; do not fund only bottom-funnel.
- Reserve a test budget (e.g. 10–20%) for experiments.

## Quality checklist

- [ ] Objective → channel → KPI chain complete.
- [ ] Budget assumptions and ranges explicit.
- [ ] Roadmap has owners and dependencies.
- [ ] Risks documented; no guaranteed outcomes.

## Compliance checklist

- [ ] Channel choices meet privacy/consent requirements.
- [ ] Claims and offers reviewed for policy risk.

## Failure conditions and escalation

- Missing objective/audience/budget → `insufficient_data`.
- Target implies implausible efficiency → flag and request revision.

## Examples

- **B2B SaaS:** demand-gen content + paid search capture + ABM for enterprise tier.
- **E-commerce:** paid social prospecting + search capture + lifecycle retention.
- **Real estate:** local SEO + lead-gen ads + nurture; seasonal listing pushes.
- **Retail:** local + social + email with seasonal promo calendar.

## KPIs and metrics

North-star + per-channel KPIs, blended CAC/MER, retention; reviewed quarterly.

## Related skills

`foundation.business-objective-clarification`, `strategy.channel-mix-planning`,
`analytics.kpi-framework`, `budgeting.channel-budget-allocation`.

## MCP mappings

- Resources: `marketing://channels/catalogue`, `marketing://funnel-stages`
- Prompts: `create_marketing_strategy`
- Tools: `marketing_get_skill`, `marketing_list_skills`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

---
id: strategy.channel-mix-planning
name: Channel Mix Planning
version: 1.0.0
status: stable
description: Select and balance marketing channels by audience fit, funnel role and efficiency to form a coherent, testable mix.
category: marketing-strategy
sub_category: channels
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision, retention]
objectives: [select-channels, balance-mix]
risk_level: medium
execution_mode: planning
human_approval_required: false
estimated_duration: days
required_inputs: [audience, objective, budget-range]
optional_inputs: [historical-performance, constraints]
outputs: [channel-roles, mix-recommendation, test-plan]
related_skills: [strategy.annual-marketing-strategy, budgeting.channel-budget-allocation, analytics.kpi-framework]
resources: [marketing://channels/catalogue]
mcp_prompts: [create_marketing_strategy, create_full_funnel_campaign]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [channels, mix, planning]
---

## Overview

Decides which channels to use, the role each plays across the funnel, and how they combine
into a balanced, testable mix.

## Business purpose

Avoids over-reliance on a single channel and ensures both demand creation and capture are
funded appropriately.

## When to use / when not to use

- **Use** within strategy or campaign planning.
- **Do not use** to justify adding channels without capacity to run them well.

## Inputs

### Required
- Audience, objective, budget range.

### Optional
- Historical performance, constraints.

## Outputs

- **Channel roles** by funnel stage.
- A **mix recommendation** with rationale.
- A **test plan** for unproven channels.

## Methodology

1. Map where the audience spends attention and searches.
2. Match channels to objective and stage (creation vs capture).
3. Assess fit, cost, feedback speed, scalability and capability required.
4. Propose a core mix (proven) plus a test allocation (unproven).
5. Assign each channel a primary KPI and decision rule.

## Decision rules

- Ensure at least one demand-creation and one demand-capture channel.
- Do not add a channel without the capability to execute it to standard.
- Reallocate based on evidence, not novelty.

## Quality checklist

- [ ] Each channel has a role and KPI.
- [ ] Core vs test split explicit.
- [ ] Capacity to execute confirmed.

## Compliance checklist

- [ ] Channels meet consent/privacy rules (email/SMS especially).
- [ ] Platform policy fit considered.

## Failure conditions and escalation

- Missing audience/objective/budget → `insufficient_data`.

## Examples

- **SaaS:** content + search + LinkedIn (create) / search + retargeting (capture).
- **E-commerce:** paid social + influencers (create) / search + email (capture).
- **Real estate:** local SEO + social (create) / search + portals (capture).
- **Retail:** local + social (create) / search + email (capture).

## KPIs and metrics

Per-channel KPI vs role, blended efficiency, marginal ROI.

## Related skills

`strategy.annual-marketing-strategy`, `budgeting.channel-budget-allocation`,
`analytics.kpi-framework`.

## MCP mappings

- Resources: `marketing://channels/catalogue`
- Prompts: `create_marketing_strategy`, `create_full_funnel_campaign`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

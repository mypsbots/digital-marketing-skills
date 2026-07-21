---
id: reporting.board-ready-marketing-summary
name: Board-Ready Marketing Summary
version: 1.0.0
status: stable
description: Create a board-level marketing summary tying marketing to revenue, efficiency and strategy, with risks and clear decision requests.
category: reporting-insights
sub_category: reporting
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision, retention, advocacy]
objectives: [inform-board, secure-decisions]
risk_level: low
execution_mode: generation
human_approval_required: false
estimated_duration: hours
required_inputs: [period, headline-kpis, business-context]
optional_inputs: [targets, initiatives, budget, market-context]
outputs: [headline-outcomes, efficiency, strategy-progress, risks, decisions]
related_skills: [reporting.executive-summary, analytics.kpi-framework, budgeting.channel-budget-allocation]
resources: []
mcp_prompts: [executive_marketing_summary]
data_sensitivity: confidential
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [reporting, board, executive]
---

## Overview

A board-oriented summary connecting marketing to revenue and efficiency (CAC, payback, LTV:CAC),
progress on strategy, key risks, and specific decisions requested.

## Business purpose

Boards fund strategy and manage risk; marketing must speak in those terms.

## When to use / when not to use

- **Use** for board/investor updates.
- **Do not use** to present channel minutiae or vanity metrics.

## Inputs

### Required
- Period, headline KPIs, business context.

### Optional
- Targets, initiatives, budget, market context.

## Outputs

- **Headline outcomes** vs plan.
- **Efficiency** (CAC, payback, LTV:CAC, MER).
- **Strategy progress**, **risks**, **decisions requested**.

## Methodology

1. Tie results to revenue/pipeline and unit economics.
2. Report efficiency metrics with trend and benchmark context.
3. Summarise progress on strategic bets.
4. State material risks and mitigations.
5. Make explicit, option-based decision requests.

## Decision rules

- Lead with business/financial impact.
- Use efficiency metrics, not vanity.
- Frame asks as decisions with options and trade-offs.

## Quality checklist

- [ ] Revenue/efficiency framing.
- [ ] Strategy progress + risks.
- [ ] Decision requests explicit.

## Compliance checklist

- [ ] Confidential handling; aggregated data.
- [ ] Forward-looking statements caveated.

## Failure conditions and escalation

- Missing period/KPIs/context → `insufficient_data`.

## Examples

- **SaaS:** CAC payback + pipeline coverage + budget ask.
- **E-commerce:** contribution margin + MER + inventory-aware plan.
- **Real estate:** cost per completion + market conditions.
- **Retail:** omnichannel revenue + expansion decision.

## KPIs and metrics

CAC, payback, LTV:CAC, MER, pipeline coverage.

## Related skills

`reporting.executive-summary`, `analytics.kpi-framework`,
`budgeting.channel-budget-allocation`.

## MCP mappings

- Prompts: `executive_marketing_summary`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

---
id: reporting.executive-summary
name: Executive Summary
version: 1.0.0
status: stable
description: "Distil marketing performance into a concise executive summary: outcomes, what changed and why, risks and decisions needed."
category: reporting-insights
sub_category: reporting
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision, retention, advocacy]
objectives: [inform-leadership, enable-decisions]
risk_level: low
execution_mode: generation
human_approval_required: false
estimated_duration: minutes-to-hours
required_inputs: [period, headline-kpis, business-context]
optional_inputs: [targets, initiatives, budget]
outputs: [headline-outcomes, what-changed-why, risks, decisions-needed]
related_skills: [reporting.board-ready-marketing-summary, reporting.monthly-marketing-report]
resources: []
mcp_prompts: [executive_marketing_summary, monthly_marketing_report]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [reporting, executive, summary]
---

## Overview

Produces a short, high-signal summary for leaders: what happened, why, what is at risk, and what
decisions are needed — free of jargon and vanity metrics.

## Business purpose

Executives need clarity and decisions, not dashboards.

## When to use / when not to use

- **Use** to brief leadership succinctly.
- **Do not use** to bury the message in detail.

## Inputs

### Required
- Period, headline KPIs, business context.

### Optional
- Targets, initiatives, budget.

## Outputs

- **Headline outcomes** (vs target).
- **What changed and why**.
- **Risks** and **decisions needed**.

## Methodology

1. Lead with 3–5 outcomes tied to business goals.
2. Explain the key drivers briefly.
3. State risks and what could go wrong.
4. List explicit decisions/asks with options.
5. Keep to one page; link to detail.

## Decision rules

- Outcomes and decisions first.
- Translate metrics into business impact.
- Be explicit about asks.

## Quality checklist

- [ ] Outcomes vs goals.
- [ ] Drivers explained briefly.
- [ ] Decisions/asks explicit.

## Compliance checklist

- [ ] Aggregated data; no PII exposure.

## Failure conditions and escalation

- Missing period/KPIs/context → `insufficient_data`.

## Examples

- **SaaS:** pipeline impact + budget ask.
- **E-commerce:** margin-aware revenue + promo decision.
- **Real estate:** qualified enquiries + spend decision.
- **Retail:** omnichannel revenue + seasonal investment.

## KPIs and metrics

Decision turnaround, alignment (qualitative).

## Related skills

`reporting.board-ready-marketing-summary`, `reporting.monthly-marketing-report`.

## MCP mappings

- Prompts: `executive_marketing_summary`, `monthly_marketing_report`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

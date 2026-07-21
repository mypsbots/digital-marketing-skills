---
id: foundation.marketing-maturity-assessment
name: Marketing Maturity Assessment
version: 1.0.0
status: stable
description: >-
  Assess an organisation's digital marketing maturity across strategy, channels, data,
  technology, process and governance to produce a scored baseline and prioritised roadmap.
category: foundation
sub_category: discovery
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision, retention, advocacy]
channels: []
objectives: [establish-baseline, prioritise-investment]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: 2-5 days
required_inputs: [business-overview, current-channels, primary-objective]
optional_inputs: [analytics-access, martech-inventory, team-structure, budget]
outputs: [maturity-scorecard, gap-analysis, prioritised-roadmap]
dependencies: []
related_skills:
  - foundation.digital-presence-audit
  - foundation.marketing-technology-audit
  - strategy.annual-marketing-strategy
resources: [marketing://frameworks/maturity-model]
mcp_tools: [marketing_list_skills]
mcp_prompts: [audit_digital_marketing]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [maturity, audit, baseline, discovery]
---

## Overview

A structured evaluation of how effectively an organisation plans, executes, measures and
governs digital marketing. It produces a defensible baseline, exposes the highest-value gaps
and sequences improvements so investment follows evidence rather than fashion.

## Business purpose

Leaders repeatedly over-invest in tactics (a new ad channel, a rebrand) while foundational
gaps (no measurement plan, no ICP, broken tracking) quietly cap returns. This assessment
prevents that by grounding the plan in a maturity baseline and a prioritised roadmap.

## When to use

- Onboarding a new client, brand or business unit.
- Before setting an annual strategy or budget.
- After leadership change, a merger, or a period of flat performance.

## When not to use

- For a single-channel tactical question (use the relevant channel audit instead).
- When a specific incident needs root-cause analysis (use `reporting.root-cause-analysis`).

## Inputs

### Required
- Business overview: model, products/services, markets, primary objective.
- Current channels in use.
- Primary business objective for the next 12 months.

### Optional
- Read-only analytics access or exported figures.
- Marketing technology inventory.
- Team structure and skills.
- Current marketing budget.

## Outputs

- A **maturity scorecard** across six dimensions, each scored 1–5.
- A **gap analysis** mapping current vs target state per dimension.
- A **prioritised roadmap** (now / next / later) with rationale and dependencies.

## Methodology

1. **Frame the objective.** Confirm the primary business objective and the marketing
   objective it implies. Record explicitly; if absent, return `insufficient_data`.
2. **Score six dimensions** on a 1–5 scale (1 ad-hoc, 3 defined, 5 optimised):
   - Strategy & positioning (clear ICP, positioning, funnel, objectives).
   - Channels & execution (channel fit, cadence, creative quality).
   - Data & measurement (tracking integrity, KPI framework, attribution honesty).
   - Technology & operations (fit-for-purpose stack, integration, automation).
   - Process & governance (planning cadence, approvals, brand safety, compliance).
   - People & capability (skills, ownership, external support).
3. **Evidence each score.** Separate observed facts, tool data, benchmarks and assumptions.
   Never score above 3 without evidence.
4. **Identify gaps** as the delta between current and a realistic 12-month target.
5. **Prioritise** using impact × confidence ÷ effort, respecting dependencies (e.g. fix
   tracking before optimising spend).
6. **Sequence** into now (0–30 days), next (30–90 days), later (90–365 days).
7. **Summarise** for an executive audience with the single most important gap named first.

## Decision rules

- If tracking integrity scores ≤ 2, block spend-scaling recommendations until measurement is
  fixed; a leaky funnel cannot be optimised reliably.
- If there is no documented ICP or positioning, prioritise foundation over channel expansion.
- If maturity is uniformly low, recommend fewer channels done well, not more channels.
- Only recommend advanced tactics (MMM, incrementality, ABM) when data maturity ≥ 3.

## Quality checklist

- [ ] Primary objective stated and linked to a marketing objective.
- [ ] Every score has at least one piece of supporting evidence.
- [ ] Facts, assumptions and recommendations are clearly separated.
- [ ] Roadmap items have owners, effort and dependencies.
- [ ] No unsupported performance promises.
- [ ] Executive summary leads with the highest-value gap.

## Compliance checklist

- [ ] No personal data collected beyond what the assessment needs.
- [ ] Any consent, privacy or advertising-policy gaps flagged for specialist review.
- [ ] Regional/regulatory constraints noted where relevant (not legal advice).

## Failure conditions and escalation

- **Insufficient data:** objective or channel context missing → return `insufficient_data`
  with the specific missing items and why they matter.
- **Conflicting inputs:** stakeholders disagree on the objective → surface the conflict and
  request a decision before proceeding.
- Escalate to qualified legal/privacy counsel where regulatory risk is identified.

## Examples

- **SaaS (B2B):** Scores reveal strong content but no activation metric and unreliable
  self-reported attribution. Roadmap: define activation, fix tracking, then scale paid.
- **E-commerce (D2C):** Strong paid social, weak retention and no contribution-margin view.
  Roadmap: margin-aware reporting and a post-purchase lifecycle before scaling acquisition.
- **Real estate:** Good local presence, weak lead qualification and CRM hygiene. Roadmap:
  qualification model and agent follow-up workflow before more lead-gen spend.
- **Retail:** Strong store footfall, fragmented online/offline data. Roadmap: unify
  measurement and store-locator/local before omnichannel promotions.

## KPIs and metrics

Baseline (not targets): channel mix, blended CAC/MER, conversion rate, retention rate,
tracking coverage %, and time-to-report. Re-assess maturity quarterly.

## Related skills

`foundation.digital-presence-audit`, `foundation.marketing-technology-audit`,
`analytics.measurement-strategy`, `strategy.annual-marketing-strategy`.

## MCP mappings

- Resources: `marketing://frameworks/maturity-model`, `marketing://skills/catalogue`
- Prompts: `audit_digital_marketing`
- Tools: `marketing_list_skills`, `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

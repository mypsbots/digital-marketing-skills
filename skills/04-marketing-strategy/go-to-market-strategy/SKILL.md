---
id: strategy.go-to-market-strategy
name: Go-to-Market Strategy
version: 1.0.0
status: stable
description: Design a GTM strategy from market and customer research through positioning, offer, funnel, channels, measurement, budget, timeline and approvals.
category: marketing-strategy
sub_category: gtm
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
objectives: [launch, enter-market]
risk_level: medium
execution_mode: planning
human_approval_required: false
estimated_duration: 2-4 weeks
required_inputs: [product-or-service, target-segment, value-proposition, launch-timeframe]
optional_inputs: [competitors, pricing, sales-motion]
outputs: [gtm-plan, launch-roadmap, measurement-plan, approval-checklist]
related_skills: [positioning.positioning-statement, strategy.channel-mix-planning, offer-and-messaging.offer-design, analytics.measurement-strategy]
resources: [marketing://industries/catalogue]
mcp_prompts: [create_go_to_market]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [gtm, launch, strategy]
---

## Overview

An end-to-end plan to bring an offer to a market: who, what, why us, how we reach them, how we
measure success, and what must be approved before launch.

## Business purpose

Coordinates product, marketing and sales around a single launch plan, reducing wasted spend
and mistimed activity.

## When to use / when not to use

- **Use** for new products, new segments or market entry.
- **Do not use** for BAU optimisation.

## Inputs

### Required
- Product/service, target segment, value proposition, launch timeframe.

### Optional
- Competitors, pricing, sales motion.

## Outputs

- A **GTM plan** (market, customer, positioning, offer, funnel, channels, measurement, budget,
  timeline, risks).
- A **launch roadmap** with phases (pre-launch, launch, post-launch).
- A **measurement plan** and **approval checklist**.

## Methodology

1. Synthesise market and customer research; confirm segment and problem.
2. Lock positioning, value proposition and offer.
3. Design the funnel and conversion definition.
4. Select the channel mix and content requirements per stage.
5. Define measurement (KPIs, tracking, targets as ranges/hypotheses).
6. Set budget and timeline with phases and dependencies.
7. Identify risks and the approval checklist for any spend/publishing.

## Decision rules

- Do not launch paid until tracking and landing pages are validated.
- Sequence awareness before conversion pushes for new categories.
- Gate all spend/publishing behind approval.

## Quality checklist

- [ ] Positioning/offer/funnel/measurement coherent.
- [ ] Targets expressed with uncertainty.
- [ ] Approval checklist complete.
- [ ] No guaranteed outcomes.

## Compliance checklist

- [ ] Claims substantiated; regulated claims flagged.
- [ ] Consent/tracking compliant before launch.

## Failure conditions and escalation

- Missing required inputs → `insufficient_data`.
- Regulatory-sensitive launch → escalate to legal.

## Examples

- **AI SaaS:** document-processing launch with waitlist → beta → GA phases.
- **E-commerce:** new product line with seed reviews before paid scale.
- **Real estate:** new development launch with pre-registration funnel.
- **Retail:** store opening with local pre-launch buzz.

## KPIs and metrics

Launch funnel conversion, CAC, activation/first-purchase, pipeline (B2B).

## Related skills

`positioning.positioning-statement`, `strategy.channel-mix-planning`,
`offer-and-messaging.offer-design`, `analytics.measurement-strategy`.

## MCP mappings

- Resources: `marketing://industries/catalogue`
- Prompts: `create_go_to_market`
- Tools: `marketing_get_skill`, `marketing_get_workflow_plan`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

---
id: strategy.campaign-planning
name: Campaign Planning and Objective-based Selection
version: 1.0.0
status: stable
description: Turn a business goal into a coordinated, objective-based campaign - selecting the campaign type (lead gen, monetisation, onboarding, community) and orchestrating assets, channels and metrics.
category: marketing-strategy
sub_category: campaign-design
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision, retention]
objectives: [achieve-campaign-objective, generate-leads, increase-conversion]
risk_level: low
execution_mode: planning
human_approval_required: false
estimated_duration: days
required_inputs: [business-goal, target-audience, offer-or-asset]
optional_inputs: [budget, channel-performance, timeline]
outputs: [campaign-brief, campaign-type-selection, asset-and-channel-plan, success-metrics]
related_skills: [foundation.business-objective-clarification, strategy.full-funnel-strategy, strategy.channel-mix-planning, strategy.lead-generation-strategy, analytics.kpi-framework]
resources: []
mcp_prompts: [create_full_funnel_campaign, create_marketing_strategy]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-23
maintainers: [mypsbots]
tags: [campaign, planning, objective, orchestration, brief]
---

## Overview

Translates a business goal into a single, coordinated campaign with one clear objective. Selects
the appropriate campaign type — lead generation, monetisation/sales, onboarding/engagement, or
community/advocacy — and orchestrates the assets, channels, sequence and metrics needed to hit it.
A campaign is objective-based, coordinated action, not a random collection of tactics.

## Business purpose

Choosing the right campaign type for the goal and coordinating the moving parts avoids wasted
effort, keeps teams aligned to one outcome, and makes results measurable and repeatable.

## When to use / when not to use

- **Use** to plan a specific campaign, pick its type, and brief the assets/channels/metrics.
- **Do not use** for always-on channel strategy (use `strategy.channel-mix-planning`) or the
  overall funnel design (use `strategy.full-funnel-strategy`).

## Inputs

### Required
- Business goal, target audience, offer/asset.

### Optional
- Budget, channel performance, timeline.

## Outputs

- A **campaign brief** (objective, audience, message, timeline, owners).
- A **campaign-type selection** with rationale.
- An **asset and channel plan** (what's needed, where, in what sequence).
- **Success metrics** (primary objective metric + guardrails).

## Methodology

1. Clarify the single business goal and the campaign's one primary objective.
2. Select the campaign type that fits the objective and the audience's journey stage:
   lead generation, monetisation/sales, onboarding/engagement, or community/advocacy.
3. Define the audience, core message and offer for this campaign.
4. Map required assets (landing page, content, emails, ads) and the channels to reach the audience.
5. Sequence the coordinated actions (pre-launch, launch, follow-up) with owners and timeline.
6. Set the primary success metric and guardrails; align tracking (UTMs, events).
7. Plan the review/optimisation checkpoint.

## Decision rules

- One campaign, one primary objective; secondary goals are guardrails, not co-priorities.
- Match campaign type to journey stage (don't run a monetisation campaign at cold awareness).
- Every asset and channel must serve the single objective.

## Quality checklist

- [ ] Single objective and matching campaign type chosen with rationale.
- [ ] Assets, channels and sequence mapped with owners/timeline.
- [ ] Primary metric + guardrails and tracking defined.

## Compliance checklist

- [ ] Channel/ad-policy and consent requirements flagged for the chosen channels.
- [ ] Claims and offers substantiated and compliant.

## Failure conditions and escalation

- Missing goal/audience/offer → `insufficient_data`.
- Regulated offers/claims → compliance review.

## Examples

- **SaaS:** onboarding campaign to lift activation; primary metric = activation rate.
- **E-commerce:** monetisation campaign for a launch; primary metric = revenue/ROAS.
- **Real estate:** lead-generation campaign for a development; metric = qualified enquiries.
- **Retail:** community/loyalty campaign; metric = repeat purchase/engagement.

## KPIs and metrics

Primary objective metric (e.g. leads, revenue, activation, engagement), plus efficiency (CPA/ROAS)
and guardrail metrics.

## Related skills

`foundation.business-objective-clarification`, `strategy.full-funnel-strategy`,
`strategy.channel-mix-planning`, `strategy.lead-generation-strategy`, `analytics.kpi-framework`.

## MCP mappings

- Prompts: `create_full_funnel_campaign`, `create_marketing_strategy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-23): Initial version.

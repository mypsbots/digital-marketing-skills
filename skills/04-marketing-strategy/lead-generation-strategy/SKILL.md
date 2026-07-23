---
id: strategy.lead-generation-strategy
name: Lead Generation Strategy
version: 1.0.0
status: stable
description: Design a channel-neutral engine for a steady, predictable flow of qualified prospects using offers, magnets, capture and nurture aligned to economics.
category: marketing-strategy
sub_category: demand-generation
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
objectives: [generate-leads, build-pipeline, lower-acquisition-cost]
risk_level: medium
execution_mode: planning
human_approval_required: false
estimated_duration: days
required_inputs: [target-segment, core-offer, budget-or-capacity]
optional_inputs: [current-lead-volume, channel-performance, sales-capacity]
outputs: [lead-gen-plan, channel-and-offer-map, capture-and-nurture-plan, lead-economics-model]
related_skills: [strategy.channel-mix-planning, content-production.lead-magnet-creation, offer-and-messaging.offer-design, email.lead-nurture-series, crm.lead-scoring]
resources: []
mcp_prompts: [create_full_funnel_campaign]
data_sensitivity: confidential
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-23
maintainers: [mypsbots]
tags: [lead-generation, demand-generation, pipeline, flow]
---

## Overview

Designs a repeatable lead-generation engine — the "flow" of prospects — by pairing attractive
offers and lead magnets with the right channels, capture mechanics and nurture, sized to the
economics (cost per lead, qualification rate, sales capacity). Channel-neutral; complements the
industry-specific lead skills.

## Business purpose

Predictable lead flow is the foundation of pipeline and revenue; a deliberate engine reduces
acquisition cost and smooths demand rather than relying on sporadic campaigns.

## When to use / when not to use

- **Use** to build or diagnose a lead engine, choose lead offers, or set lead-economics targets.
- **Do not use** to buy or scrape lists, or to promise a guaranteed number of leads.

## Inputs

### Required
- Target segment, core offer, budget or team capacity.

### Optional
- Current lead volume, channel performance, sales capacity.

## Outputs

- A **lead-gen plan** (offers, channels, cadence).
- A **channel-and-offer map** (which magnet/offer runs where).
- A **capture-and-nurture plan** (forms, lead magnet delivery, follow-up).
- A **lead-economics model** (target CPL, volume, qualification and conversion assumptions).

## Methodology

1. Define the qualified lead and target volume from downstream revenue goals working backwards.
2. Choose lead offers/magnets by segment (free value that solves a real, specific problem).
3. Map offers to channels (paid, organic, referral, partnerships) by cost and intent.
4. Design capture (forms, landing pages) and immediate value delivery.
5. Plan nurture and hand-off so lead quality — not just volume — is optimised.
6. Model the economics (CPL, qualification rate, conversion, payback) and set guardrails.
7. Instrument, test and iterate toward a steady, forecastable flow.

## Decision rules

- Optimise for qualified leads and downstream ROI, not raw volume.
- Match lead cost to lifetime value; keep payback within target.
- Balance fast paid flow with compounding organic/referral sources.

## Quality checklist

- [ ] Qualified-lead definition and volume target set from revenue goals.
- [ ] Lead offers mapped to channels and segments.
- [ ] Capture and nurture designed end-to-end.
- [ ] Lead economics modelled with guardrails.

## Compliance checklist

- [ ] Consent captured for marketing contact (see `compliance.consent-assessment`).
- [ ] No purchased/scraped lists.
- [ ] Data minimisation on capture forms; privacy notice linked.

## Failure conditions and escalation

- Missing segment/offer/budget → `insufficient_data`.
- Regulated data capture or consent uncertainty → compliance review.

## Examples

- **SaaS:** gated ROI tool + trial as magnets; paid search for intent, content for compounding flow.
- **E-commerce:** first-order incentive for email/SMS capture; retargeting nurture.
- **Real estate:** valuation/guide magnets; speed-to-lead follow-up (see `real-estate.lead-generation-campaign`).
- **Retail:** loyalty sign-up offer in-store and online.

## KPIs and metrics

Leads and cost per lead, qualification rate, lead-to-opportunity/customer conversion, payback
period, pipeline coverage, source mix and flow stability.

## Related skills

`strategy.channel-mix-planning`, `content-production.lead-magnet-creation`,
`offer-and-messaging.offer-design`, `email.lead-nurture-series`, `crm.lead-scoring`.

## MCP mappings

- Prompts: `create_full_funnel_campaign`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-23): Initial version.

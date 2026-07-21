---
id: customer-research.objection-analysis
name: Objection Analysis
version: 1.0.0
status: stable
description: Systematically surface, categorise and prioritise buyer objections and their root causes to inform messaging, content and sales enablement.
category: customer-research
sub_category: voice-of-customer
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [consideration, decision]
objectives: [reduce-friction, improve-conversion]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [voice-of-customer-or-sales-input]
optional_inputs: [win-loss-data, reviews, support-tickets]
outputs: [objection-inventory, root-causes, prioritisation]
related_skills: [offer-and-messaging.objection-handling, customer-research.jobs-to-be-done, offer-and-messaging.messaging-framework]
resources: []
mcp_prompts: [generate_buyer_persona, generate_marketing_copy]
data_sensitivity: confidential
pii_expected: true
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [objections, voice-of-customer, research]
---

## Overview

Collects objections from sales calls, reviews, support and win/loss, categorises them (price,
trust, fit, timing, risk, effort), finds root causes, and prioritises by frequency and deal impact
to guide messaging and enablement.

## Business purpose

Addressing real objections at the right funnel stage lifts conversion more reliably than adding
features or spend.

## When to use / when not to use

- **Use** to ground messaging/content/enablement in real buyer concerns.
- **Do not use** to fabricate objections; redact PII from source inputs.

## Inputs

### Required
- Voice-of-customer or sales input.

### Optional
- Win/loss data, reviews, support tickets.

## Outputs

- An **objection inventory** by category and stage.
- **Root causes** (real vs perceived).
- **Prioritisation** by frequency × impact.

## Methodology

1. Aggregate objections from available sources; redact PII.
2. Categorise by type and funnel stage.
3. Distinguish genuine barriers from perception/communication gaps.
4. Prioritise by frequency and deal/conversion impact.
5. Hand off to objection-handling and messaging.

## Decision rules

- Ground every objection in evidence; separate perceived from real.
- Prioritise by impact, not loudness.
- Redact PII from qualitative sources.

## Quality checklist

- [ ] Objections categorised by type/stage.
- [ ] Root causes identified.
- [ ] Prioritised by impact.

## Compliance checklist

- [ ] PII redacted from source data.
- [ ] Data used lawfully.

## Failure conditions and escalation

- No VoC/sales input → `insufficient_data`.

## Examples

- **SaaS:** security/integration/switching-cost concerns.
- **E-commerce:** sizing/returns/delivery trust.
- **Real estate:** fee/timing/market-condition worries.
- **Retail:** price/availability/loyalty value.

## KPIs and metrics

Objection frequency, conversion lift after handling, win-rate change.

## Related skills

`offer-and-messaging.objection-handling`, `customer-research.jobs-to-be-done`,
`offer-and-messaging.messaging-framework`.

## MCP mappings

- Prompts: `generate_buyer_persona`, `generate_marketing_copy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

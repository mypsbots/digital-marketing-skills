---
id: strategy.permission-marketing
name: Permission Marketing Strategy
version: 1.0.0
status: stable
description: Build anticipated, personal and relevant communication that earns and respects permission, replacing interruption tactics with consistent, generous, trust-building presence.
category: marketing-strategy
sub_category: relationship-marketing
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision, retention]
objectives: [build-trust, generate-leads, improve-retention]
risk_level: medium
execution_mode: planning
human_approval_required: false
estimated_duration: days
required_inputs: [audience, offering, owned-channels]
optional_inputs: [current-subscriber-base, content-capacity, consent-status]
outputs: [permission-ladder, value-exchange-plan, presence-cadence, consent-and-preference-plan]
related_skills: [strategy.lead-generation-strategy, content-production.lead-magnet-creation, email.lead-nurture-series, compliance.consent-assessment, community-reputation.community-building]
resources: []
mcp_prompts: [create_marketing_strategy, create_full_funnel_campaign]
data_sensitivity: confidential
pii_expected: true
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-23
maintainers: [mypsbots]
tags: [permission-marketing, relationship, trust, consent, retention]
---

## Overview

Designs a permission-based approach: earn the privilege of anticipated, personal and relevant
communication instead of interrupting strangers. Trust is built by consistently showing up and
delivering value over time, and by earning permission for deeper follow-up.

## Business purpose

Permission compounds: an engaged, consenting audience is cheaper to reach, converts better and
advocates — a durable asset versus rented attention and interruption that erodes trust.

## When to use / when not to use

- **Use** to design owned-audience growth, nurture, and trust-building presence.
- **Do not use** to justify spam, purchased lists, dark patterns, or pressuring people into consent.

## Inputs

### Required
- Audience, offering, owned channels.

### Optional
- Current subscriber base, content capacity, consent status.

## Outputs

- A **permission ladder** (from stranger → subscriber → engaged → advocate).
- A **value-exchange plan** (what you give for each level of permission).
- A **presence cadence** (consistent, generous showing-up).
- A **consent and preference plan** (opt-in, preferences, easy opt-out).

## Methodology

1. Map the permission ladder and the value offered at each rung.
2. Design ethical opt-in with a clear, generous value exchange (not tricks).
3. Set a consistent presence cadence you can sustain for the long term.
4. Deliver anticipated, personal, relevant content that earns the next rung.
5. Honour preferences and make opt-out effortless; never abuse the list.
6. Measure engagement/permission health, not just list size; prune disengaged contacts.

## Decision rules

- Permission is non-transferable and revocable — treat it as borrowed, not owned.
- Anticipated + personal + relevant is the bar for every message.
- Consistency over intensity; long-term trust beats short-term extraction.

## Quality checklist

- [ ] Clear value exchange at each permission level.
- [ ] Sustainable, consistent cadence defined.
- [ ] Preferences honoured; opt-out easy.

## Compliance checklist

- [ ] Consent captured and recorded lawfully (GDPR/CAN-SPAM/local) — see `compliance.consent-assessment`.
- [ ] No purchased lists or non-consensual contact.
- [ ] PII stored and processed securely; opt-out honoured promptly.

## Failure conditions and escalation

- Missing audience/channels → `insufficient_data`.
- Consent/PII handling gaps → privacy/legal review before send.

## Examples

- **SaaS:** valuable newsletter/education earning permission ahead of trial asks.
- **E-commerce:** preference-based, welcome/nurture flows rather than blast discounting.
- **Real estate:** consistent local market updates that earn long-term follow-up.
- **Retail:** loyalty/community updates people actually want to receive.

## KPIs and metrics

Engagement rate, opt-in/opt-out rates, list health, permission-to-conversion, LTV of engaged
subscribers, and advocacy/referrals.

## Related skills

`strategy.lead-generation-strategy`, `content-production.lead-magnet-creation`,
`email.lead-nurture-series`, `compliance.consent-assessment`,
`community-reputation.community-building`.

## MCP mappings

- Prompts: `create_marketing_strategy`, `create_full_funnel_campaign`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-23): Initial version.

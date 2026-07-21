---
id: foundation.customer-journey-mapping
name: Customer Journey Mapping
version: 1.0.0
status: stable
description: Map the end-to-end customer journey across stages, touchpoints, questions and frictions to reveal marketing opportunities.
category: foundation
sub_category: journey
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision, retention, advocacy]
objectives: [map-journey, find-friction]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: 1-2 days
required_inputs: [target-audience, product-or-service]
optional_inputs: [analytics-access, voice-of-customer, sales-notes]
outputs: [journey-map, touchpoint-inventory, opportunity-list]
related_skills: [foundation.funnel-mapping, customer-research.buyer-persona-development, cro.funnel-drop-off-analysis]
resources: [marketing://funnel-stages]
mcp_prompts: [create_marketing_strategy]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [journey, funnel, touchpoints]
---

## Overview

A stage-by-stage map of what the customer thinks, feels, does and needs from first awareness
to advocacy, with the touchpoints and frictions at each step.

## Business purpose

Reveals where the journey breaks, which questions go unanswered and which touchpoints are
missing, so marketing addresses real friction rather than guessing.

## When to use / when not to use

- **Use** when planning full-funnel activity or diagnosing drop-off.
- **Do not use** as a substitute for quantitative funnel analysis (pair with it).

## Inputs

### Required
- Target audience/persona and product or service.

### Optional
- Analytics, voice-of-customer research, sales/support notes.

## Outputs

- A **journey map** by stage (thinking/feeling/doing/needs).
- A **touchpoint inventory** (owned/earned/paid) per stage.
- An **opportunity list** ranked by impact.

## Methodology

1. Choose one persona and one primary goal (avoid averaging across segments).
2. Define stages using the canonical funnel plus retention and advocacy.
3. For each stage capture: customer questions, emotions, actions, and information needs.
4. Map touchpoints and owner; note gaps and frictions with evidence where available.
5. Identify moments of truth (highest-leverage decisions).
6. Convert frictions/gaps into prioritised opportunities.

## Decision rules

- Map one persona per journey; create separate maps for materially different segments.
- Prioritise frictions on high-intent stages over top-of-funnel polish.
- Distinguish observed behaviour from assumed behaviour.

## Quality checklist

- [ ] One persona/goal per map.
- [ ] Every stage has questions, emotions, actions and needs.
- [ ] Frictions evidenced or clearly labelled as assumptions.
- [ ] Opportunities prioritised.

## Compliance checklist

- [ ] No unnecessary personal data used.
- [ ] Sensitive stages (e.g. financial decisions) handled with care and flagged if regulated.

## Failure conditions and escalation

- Missing persona/product → `insufficient_data`.
- Conflicting journeys across segments → split into multiple maps.

## Examples

- **SaaS:** Activation friction between signup and first value → in-product onboarding.
- **E-commerce:** Hesitation at delivery/returns info → surface policies earlier.
- **Real estate:** Long consideration; nurture and viewing logistics are moments of truth.
- **Retail:** Online-to-store handoff friction → click-and-collect clarity.

## KPIs and metrics

Stage conversion rates, drop-off points, time-in-stage, touchpoint engagement.

## Related skills

`foundation.funnel-mapping`, `customer-research.buyer-persona-development`,
`cro.funnel-drop-off-analysis`.

## MCP mappings

- Resources: `marketing://funnel-stages`
- Prompts: `create_marketing_strategy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

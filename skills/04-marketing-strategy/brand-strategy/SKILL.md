---
id: strategy.brand-strategy
name: Brand Strategy
version: 1.0.0
status: stable
description: Define a brand strategy (purpose, promise, personality, architecture and expression) that guides consistent, differentiated marketing across channels.
category: marketing-strategy
sub_category: brand
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision, retention, advocacy]
objectives: [build-brand, differentiate, drive-preference]
risk_level: low
execution_mode: planning
human_approval_required: false
estimated_duration: days
required_inputs: [business-objectives, audience, category-context]
optional_inputs: [current-brand, competitors, research]
outputs: [brand-platform, personality-and-voice, brand-architecture, expression-guidelines]
related_skills: [strategy.positioning-strategy, positioning.positioning-statement, offer-and-messaging.messaging-framework]
resources: []
mcp_prompts: [create_marketing_strategy]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [brand, strategy, positioning]
---

## Overview

Establishes the enduring brand platform — purpose, vision, values, promise, personality and
voice — plus brand architecture and expression rules, so all marketing is consistent, distinctive
and hard to copy.

## Business purpose

A coherent brand builds memory, trust and pricing power, and compounds the return on every
campaign. Inconsistency wastes attention and erodes differentiation.

## When to use / when not to use

- **Use** to define or refresh the brand foundation before campaigns and content.
- **Do not use** to invent claims the business cannot deliver, or to copy a competitor's brand.

## Inputs

### Required
- Business objectives, audience, category context.

### Optional
- Current brand, competitors, research.

## Outputs

- A **brand platform** (purpose, vision, values, promise).
- **Personality and voice** guidelines.
- **Brand architecture** (master/sub-brands) and **expression guidelines**.

## Methodology

1. Ground the brand in a true, differentiating purpose and promise the business can keep.
2. Define personality and voice with concrete do/don't examples.
3. Set brand architecture (branded house vs house of brands) fitting the portfolio.
4. Define expression rules (verbal + visual direction) for consistency.
5. Connect brand to positioning and messaging so strategy cascades into execution.

## Decision rules

- The brand promise must be authentic and deliverable, not aspirational fiction.
- Prefer distinctiveness over category conventions where it builds memory.
- Keep architecture as simple as the portfolio allows.

## Quality checklist

- [ ] Purpose/promise authentic and differentiating.
- [ ] Personality/voice actionable with examples.
- [ ] Architecture and expression rules defined.

## Compliance checklist

- [ ] No misleading brand claims.
- [ ] Trademark/IP considerations flagged for legal.

## Failure conditions and escalation

- Missing objectives/audience/category → `insufficient_data`.
- Trademark risk → escalate to legal.

## Examples

- **SaaS:** developer-trust brand with a candid, technical voice.
- **E-commerce:** sustainability-led D2C brand with warm, transparent voice.
- **Real estate:** local-expertise brand with reassuring, precise voice.
- **Retail:** value-and-community brand with upbeat, inclusive voice.

## KPIs and metrics

Aided/unaided awareness, brand preference, consideration, consistency (qualitative), NPS.

## Related skills

`strategy.positioning-strategy`, `positioning.positioning-statement`,
`offer-and-messaging.messaging-framework`.

## MCP mappings

- Prompts: `create_marketing_strategy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

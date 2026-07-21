---
id: strategy.positioning-strategy
name: Positioning Strategy
version: 1.0.0
status: stable
description: Choose a defensible market position (target, frame of reference, differentiation and reasons to believe) that guides messaging, product and channel choices.
category: marketing-strategy
sub_category: positioning
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
objectives: [differentiate, drive-preference]
risk_level: low
execution_mode: planning
human_approval_required: false
estimated_duration: days
required_inputs: [target-segment, category-frame, competitors]
optional_inputs: [product-capabilities, research, current-positioning]
outputs: [positioning-strategy, frame-of-reference, differentiation, reasons-to-believe]
related_skills: [positioning.positioning-statement, strategy.competitive-differentiation-strategy, strategy.brand-strategy]
resources: []
mcp_prompts: [create_marketing_strategy, create_go_to_market]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [positioning, strategy, differentiation]
---

## Overview

Selects the strategic position: who it is for, the category frame of reference, the single most
compelling point of difference, and credible reasons to believe — the decision that shapes
messaging, product priorities and channel emphasis.

## Business purpose

A clear, defensible position makes marketing efficient and preference-driving; a muddled position
forces competition on price.

## When to use / when not to use

- **Use** to decide the strategic position before writing statements/messaging.
- **Do not use** to claim leadership or differentiation that cannot be substantiated.

## Inputs

### Required
- Target segment, category frame, competitors.

### Optional
- Product capabilities, research, current positioning.

## Outputs

- A **positioning strategy** (target + frame + difference + RTBs).
- A **frame of reference** and **differentiation** rationale.
- **Reasons to believe** (proof).

## Methodology

1. Define the target and the category frame customers compare against.
2. Identify points of parity (table stakes) and the primary point of difference.
3. Test the difference for relevance, distinctiveness and defensibility.
4. Assemble reasons to believe (evidence/proof).
5. Cascade into a positioning statement and messaging.

## Decision rules

- Own one differentiating idea; do not dilute with many.
- The difference must matter to the target and be defensible.
- Substantiate all comparative/leadership claims.

## Quality checklist

- [ ] Target and frame explicit.
- [ ] Single, defensible difference.
- [ ] Reasons to believe provided.

## Compliance checklist

- [ ] Comparative claims fair and substantiated.
- [ ] No misleading superlatives.

## Failure conditions and escalation

- Missing target/frame/competitors → `insufficient_data`.

## Examples

- **SaaS:** "the analytics tool non-analysts can actually use".
- **E-commerce:** "premium performance at a fair, transparent price".
- **Real estate:** "the local specialist for X neighbourhood".
- **Retail:** "the convenient local choice with member value".

## KPIs and metrics

Preference/consideration lift, message-match, win rate, price realisation.

## Related skills

`positioning.positioning-statement`, `strategy.competitive-differentiation-strategy`,
`strategy.brand-strategy`.

## MCP mappings

- Prompts: `create_marketing_strategy`, `create_go_to_market`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

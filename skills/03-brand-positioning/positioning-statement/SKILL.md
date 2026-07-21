---
id: positioning.positioning-statement
name: Positioning Statement Creation
version: 1.0.0
status: stable
description: Craft a clear, defensible positioning statement that defines the target, category, unique value and proof.
category: brand-positioning
sub_category: positioning
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration]
objectives: [define-positioning, align-messaging]
risk_level: low
execution_mode: generation
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [target-audience, category, key-benefit]
optional_inputs: [competitor-analysis, proof-points]
outputs: [positioning-statement, differentiators, proof]
related_skills: [market-research.competitor-positioning-analysis, positioning.value-proposition-development, offer-and-messaging.messaging-framework]
resources: [marketing://frameworks/positioning]
mcp_prompts: [create_go_to_market]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [positioning, brand, messaging]
---

## Overview

Produces a single positioning statement that anchors all messaging: for whom, in what
category, the unique value, and why it is believable.

## Business purpose

Consistent positioning improves recall, conversion and pricing power, and aligns teams.

## When to use / when not to use

- **Use** as the foundation for messaging, GTM and creative.
- **Do not use** to make claims the brand cannot substantiate.

## Inputs

### Required
- Target audience, category frame, key benefit.

### Optional
- Competitor analysis, proof points.

## Outputs

- A **positioning statement** (canonical template).
- **Differentiators** and **proof**.

## Methodology

1. Define the target and the frame of reference (category the audience uses to compare).
2. State the single most important, distinctive benefit.
3. Establish the reason to believe (proof: features, outcomes, credentials, social proof).
4. Draft: "For [target] who [need], [brand] is the [category] that [unique value] because
   [proof]. Unlike [alternative], [brand] [differentiator]."
5. Test for clarity, distinctiveness, credibility and relevance.

## Decision rules

- One primary benefit; resist listing many.
- The frame of reference must match how buyers actually compare options.
- Every claim needs proof; unproven claims are removed or substantiated.

## Quality checklist

- [ ] Single distinctive benefit.
- [ ] Credible proof for every claim.
- [ ] Distinct from named alternatives.
- [ ] Relevant to the target's job-to-be-done.

## Compliance checklist

- [ ] No unsubstantiated or regulated claims (flag for legal if needed).
- [ ] Comparative claims are fair and evidenced.

## Failure conditions and escalation

- Missing target/category/benefit → `insufficient_data`.
- Regulated claims → escalate to legal review.

## Examples

- **SaaS:** "For ops leads who struggle to onboard hires, X is the enablement tool that gets
  new starters productive in a week, because [proof]."
- **E-commerce:** provenance-led positioning with proof of sourcing.
- **Real estate:** local-specialist positioning with transaction evidence.
- **Retail:** curation-and-service positioning vs big-box price.

## KPIs and metrics

Message resonance, branded search, conversion lift, win rate vs alternatives.

## Related skills

`market-research.competitor-positioning-analysis`, `positioning.value-proposition-development`,
`offer-and-messaging.messaging-framework`.

## MCP mappings

- Resources: `marketing://frameworks/positioning`
- Prompts: `create_go_to_market`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

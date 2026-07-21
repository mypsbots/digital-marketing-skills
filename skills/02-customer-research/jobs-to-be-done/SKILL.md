---
id: customer-research.jobs-to-be-done
name: Jobs-to-be-Done Analysis
version: 1.0.0
status: stable
description: Uncover the functional, emotional and social jobs customers hire the product to do, and the progress they seek.
category: customer-research
sub_category: needs
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration]
objectives: [understand-needs, inform-positioning]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: 1-2 days
required_inputs: [product-or-service, customer-context]
optional_inputs: [interviews, reviews]
outputs: [job-statements, progress-and-forces, opportunity-map]
related_skills: [customer-research.buyer-persona-development, positioning.value-proposition-development, offer-and-messaging.feature-to-benefit-translation]
resources: []
mcp_prompts: [create_buyer_personas]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [jtbd, needs, positioning]
---

## Overview

Frames customer needs as "jobs" and the progress customers seek, using the four forces (push,
pull, anxiety, habit) to explain switching behaviour.

## Business purpose

JTBD reveals the real competition and the true value drivers, grounding positioning and
messaging in what customers are trying to achieve.

## When to use / when not to use

- **Use** before positioning, messaging or feature prioritisation.
- **Do not use** as a substitute for quantitative demand sizing.

## Inputs

### Required
- Product/service and customer context.

### Optional
- Interview transcripts, review mining.

## Outputs

- **Job statements** (when… I want to… so I can…).
- **Progress and forces** analysis.
- An **opportunity map** (important × underserved).

## Methodology

1. Interview or mine evidence for the situation, motivation and desired outcome.
2. Write job statements in the canonical format; separate main job from related jobs.
3. Map the four forces driving and resisting switching.
4. Rate jobs by importance and satisfaction to find underserved opportunities.
5. Link opportunities to positioning and messaging angles.

## Decision rules

- Define competition by the job, not the product category.
- Prioritise important + underserved jobs.
- Keep emotional and social jobs explicit, not just functional.

## Quality checklist

- [ ] Job statements evidenced.
- [ ] Forces mapped.
- [ ] Opportunities prioritised.

## Compliance checklist

- [ ] No sensitive personal data retained unnecessarily.

## Failure conditions and escalation

- No customer context → `insufficient_data`.

## Examples

- **SaaS:** "When onboarding hires, I want them productive fast, so I look capable" → activation focus.
- **E-commerce:** "When gifting, I want to feel thoughtful" → curation and presentation.
- **Real estate:** "When relocating, I want certainty" → transparency and process clarity.
- **Retail:** "When time-poor, I want a quick reliable pickup" → click-and-collect.

## KPIs and metrics

Opportunity scores, message resonance, conversion lift on job-aligned messaging.

## Related skills

`customer-research.buyer-persona-development`, `positioning.value-proposition-development`,
`offer-and-messaging.feature-to-benefit-translation`.

## MCP mappings

- Prompts: `create_buyer_personas`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

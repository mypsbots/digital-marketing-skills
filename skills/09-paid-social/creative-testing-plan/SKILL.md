---
id: paid-social.creative-testing-plan
name: Creative Testing Plan
version: 1.0.0
status: stable
description: Design a structured paid-social creative testing plan (variables, hypotheses, budget, read criteria) to find winning creative without wasting spend.
category: paid-social
sub_category: creative
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration]
objectives: [find-winning-creative, improve-efficiency]
risk_level: low
execution_mode: planning
human_approval_required: false
estimated_duration: hours
required_inputs: [creative-concepts, objective]
optional_inputs: [budget, historical-performance, audiences]
outputs: [testing-plan, hypotheses, read-criteria]
related_skills: [paid-social.creative-brief-development, paid-social.hook-generation, experimentation.ab-test-design]
resources: [marketing://policies/meta-ads/policies]
mcp_prompts: [plan_meta_ads]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [paid-social, creative-testing, experimentation]
---

## Overview

Structures how creative is tested — what variable per test (hook, format, angle, offer),
hypotheses, budget/duration for a valid read, and decision criteria — so creative learnings
compound rather than random rotation.

## Business purpose

Creative is the biggest performance lever on social; disciplined testing beats guesswork and
protects budget.

## When to use / when not to use

- **Use** to plan a creative test/iteration cycle.
- **Do not use** to declare winners on tiny, underpowered samples.

## Inputs

### Required
- Creative concepts, objective.

### Optional
- Budget, historical performance, audiences.

## Outputs

- A **testing plan** (structure, variables per round).
- **Hypotheses** per concept.
- **Read criteria** (spend/conversions/time before deciding).

## Methodology

1. Define the primary metric and what a meaningful difference is.
2. Isolate one main variable per test (hook, format, angle, proof, offer).
3. Set budget/duration so each variant reaches a valid read (avoid premature calls).
4. Control audience/placement where possible; note platform delivery effects.
5. Define win/iterate/kill criteria and a learning log.

## Decision rules

- Test structured variables, not random creatives.
- Reach adequate signal before deciding; beware learning-phase noise.
- Log learnings to inform the next brief.

## Quality checklist

- [ ] Clear metric + hypotheses.
- [ ] Adequate read budget/time.
- [ ] Decision criteria + learning log.

## Compliance checklist

- [ ] Ad policies respected; claims substantiated.

## Failure conditions and escalation

- Missing concepts/objective → `insufficient_data`.
- Live spend changes → human approval.

## Examples

- **SaaS:** test problem vs outcome hooks.
- **E-commerce:** UGC vs studio; offer framing.
- **Real estate:** listing tour vs testimonial.
- **Retail:** promo vs lifestyle creative.

## KPIs and metrics

Hook rate, CTR, CPA/ROAS by creative, win rate of tests.

## Related skills

`paid-social.creative-brief-development`, `paid-social.hook-generation`,
`experimentation.ab-test-design`.

## MCP mappings

- Resources: `marketing://policies/meta-ads/policies`
- Prompts: `plan_meta_ads`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

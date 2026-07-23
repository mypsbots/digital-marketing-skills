---
id: customer-research.minimum-viable-audience
name: Minimum Viable Audience (Smallest Viable Market)
version: 1.0.0
status: stable
description: Define the smallest specific audience that would make the work viable, so you can serve them remarkably, be specific about the change you seek, and grow by word of mouth.
category: customer-research
sub_category: targeting
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration]
objectives: [improve-targeting, differentiate-offer]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [offering, candidate-audiences, change-you-seek]
optional_inputs: [current-customer-data, competitor-focus, capacity-constraints]
outputs: [minimum-viable-audience-definition, who-its-not-for, change-statement]
related_skills: [customer-research.ideal-customer-profile, market-research.market-segmentation, customer-research.jobs-to-be-done, strategy.positioning-strategy, market-research.perceptual-positioning-map]
resources: []
mcp_prompts: [create_marketing_strategy]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-23
maintainers: [mypsbots]
tags: [minimum-viable-audience, smallest-viable-market, targeting, positioning]
---

## Overview

Defines the **smallest viable market** — the specific, manageable group of people who most need
and want the offering — so effort concentrates on serving them remarkably rather than pleasing
everyone. Specificity about *who it is for* and *the change you seek* is what lets ideas spread.

## Business purpose

Trying to reach everyone dilutes the message and the product; a tightly defined minimum viable
audience enables remarkable relevance, stronger word of mouth, and efficient spend before scaling.

## When to use / when not to use

- **Use** to focus a launch, sharpen positioning, or decide who to serve first.
- **Do not use** to permanently cap growth — it is a starting focus — and do not pick an audience
  so narrow it cannot sustain the business.

## Inputs

### Required
- Offering, candidate audiences, the change you seek to make.

### Optional
- Current-customer data, competitor focus, capacity constraints.

## Outputs

- A **minimum viable audience definition** (specific, reachable, sufficient).
- An explicit **"who it's not for"** statement.
- A **change statement** ("I help [specific people] achieve [specific change]").

## Methodology

1. List candidate audiences and the change each most wants.
2. Score by intensity of need, reachability, willingness to pay, and fit with your strengths.
3. Choose the smallest group that, if delighted, makes the work viable.
4. Write the change statement and explicit exclusions (who it's not for).
5. Pressure-test viability (size × value vs cost to serve) and spreadability (would they tell peers?).
6. Feed into positioning, messaging and channel choices.

## Decision rules

- Prefer specificity and intensity over reach; delight a few before appealing to many.
- Being clear about who it's *not* for strengthens the offer.
- The audience must be viable — big enough and valuable enough to sustain the work.

## Quality checklist

- [ ] Audience is specific, reachable and sufficient.
- [ ] Change statement is concrete and customer-centred.
- [ ] Exclusions stated; viability sanity-checked.

## Compliance checklist

- [ ] Targeting criteria avoid unlawful discrimination and respect ad-platform audience rules.
- [ ] Any customer data used lawfully sourced.

## Failure conditions and escalation

- Missing offering/candidate audiences → `insufficient_data`.
- Sensitive-attribute targeting → compliance review (`ads-policy.special-ad-categories-compliance`).

## Examples

- **SaaS:** one high-intent role/vertical to win first, not "all SMBs".
- **E-commerce:** a specific subculture/use-case that champions the product.
- **Real estate:** a defined neighbourhood/buyer type served exceptionally.
- **Retail:** a local community/niche whose needs you meet remarkably.

## KPIs and metrics

Word-of-mouth/referral rate within the audience, conversion and retention among the target,
message resonance, before broadening reach.

## Related skills

`customer-research.ideal-customer-profile`, `market-research.market-segmentation`,
`customer-research.jobs-to-be-done`, `strategy.positioning-strategy`,
`market-research.perceptual-positioning-map`.

## MCP mappings

- Prompts: `create_marketing_strategy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-23): Initial version.

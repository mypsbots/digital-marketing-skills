---
id: platform.pinterest-content
name: Pinterest Content Playbook
version: 1.0.0
status: stable
description: Plan a Pinterest strategy — keyword-optimised pins, boards, rich/idea pins and seasonal planning — to drive discovery and high-intent referral traffic.
category: platform-playbooks
sub_category: pinterest
industries: [common, ecommerce, retail, real-estate]
business_models: [b2c, d2c, b2b2c]
funnel_stages: [awareness, consideration, decision]
objectives: [drive-discovery, drive-traffic]
risk_level: low
execution_mode: planning
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [goal, audience, offering]
optional_inputs: [keywords, seasonal-calendar, existing-pins]
outputs: [pinterest-strategy, pin-and-board-plan, keyword-and-seasonal-plan]
related_skills: [content-production.image-creative-brief, content-production.infographic-brief, seo.keyword-discovery]
resources: [marketing://channels/catalogue]
mcp_prompts: [social_calendar]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [pinterest, visual-search, platform]
---

## Overview

Defines a Pinterest strategy treating the platform as a visual search engine: keyword-optimised
pins and boards, strong vertical creative, idea/rich pins, and seasonal planning (Pinterest
searches lead trends by weeks) to drive high-intent, long-lived referral traffic.

## Business purpose

Pins have long shelf life and high purchase/planning intent, especially for ecommerce, home, food,
fashion, weddings and DIY.

## When to use / when not to use

- **Use** to plan Pinterest for discovery and traffic.
- **Do not use** misleading pins/links or keyword-stuffed spam.

## Inputs

### Required
- Goal, audience, offering.

### Optional
- Keywords, seasonal calendar, existing pins.

## Outputs

- A **Pinterest strategy** (goal → themes).
- A **pin and board plan** (keyworded boards, vertical creative, rich/idea pins).
- A **keyword and seasonal plan** (Pinterest SEO + early seasonal cadence).

## Methodology

1. Do Pinterest keyword research; structure keyworded boards around themes.
2. Design vertical (2:3) pins with clear text overlay and strong imagery.
3. Optimise pin titles/descriptions for Pinterest search.
4. Use rich/idea pins and product pins where relevant.
5. Plan seasonal content early (6–8+ weeks ahead) and pin consistently.

## Decision rules

- Treat Pinterest as search: keyword everything.
- Vertical, legible creative; accurate destination links.
- Plan seasons well ahead; pin fresh content consistently.

## Quality checklist

- [ ] Keyworded boards + pin SEO.
- [ ] Vertical creative specs.
- [ ] Seasonal + fresh-pin cadence.

## Compliance checklist

- [ ] Accurate links/claims; image rights.
- [ ] Disclose paid partnerships.

## Failure conditions and escalation

- Missing goal/audience/offering → `insufficient_data`.

## Examples

- **E-commerce:** product + how-to pins by category.
- **Retail:** seasonal lookbooks + idea pins.
- **Real estate:** home inspiration + area guides.
- **Common:** templates/checklists driving traffic.

## KPIs and metrics

Impressions, outbound clicks, saves, referral traffic, assisted conversions.

## Related skills

`content-production.image-creative-brief`, `content-production.infographic-brief`,
`seo.keyword-discovery`.

## MCP mappings

- Resources: `marketing://channels/catalogue`
- Prompts: `social_calendar`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

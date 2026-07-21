---
id: content-production.image-creative-brief
name: Image Creative Brief
version: 1.0.0
status: stable
description: Brief static image/graphic creative (social posts, ads, banners) with concept, composition, copy, brand and accessibility specs and format/size variants.
category: content-production
sub_category: visual
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
objectives: [drive-engagement, support-campaigns]
risk_level: low
execution_mode: generation
human_approval_required: false
estimated_duration: hours
required_inputs: [purpose-and-message, placement-or-platform]
optional_inputs: [brand-guidelines, offer, assets]
outputs: [creative-brief, composition-and-copy, format-variants]
related_skills: [content-production.infographic-brief, paid-social.creative-brief-development, content-production.thumbnail-optimisation]
resources: []
mcp_prompts: [create_content_brief, generate_marketing_copy]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [image, graphic, creative-brief]
---

## Overview

Specifies a static image/graphic: the concept, focal message, composition, on-image copy, brand
and accessibility requirements, and the size/format variants needed per placement — ready for a
designer.

## Business purpose

Clear image briefs produce on-brand, high-performing visuals efficiently and correctly sized per
placement.

## When to use / when not to use

- **Use** to brief social graphics, ad creatives, banners, thumbnails.
- **Do not use** for misleading visuals or unlicensed assets.

## Inputs

### Required
- Purpose and message, placement or platform.

### Optional
- Brand guidelines, offer, assets.

## Outputs

- A **creative brief** (concept, focal point, mood).
- **Composition and copy** (headline/overlay, visual hierarchy).
- **Format variants** (per-placement sizes/aspect ratios).

## Methodology

1. Define the goal, single message and desired action.
2. Describe concept, composition and focal hierarchy.
3. Specify on-image copy (concise) and brand elements (logo, colour, type).
4. List required sizes/aspect ratios per placement.
5. Set accessibility (contrast, legibility) and asset licensing notes.

## Decision rules

- One dominant message/focal point per image.
- Brand-consistent, accessible, correctly sized.
- Truthful visuals; licensed assets only.

## Quality checklist

- [ ] Clear concept + focal message.
- [ ] Brand + accessibility specs.
- [ ] All placement sizes listed.

## Compliance checklist

- [ ] Image/font/model-release licensing.
- [ ] No misleading visuals; disclosures where needed.

## Failure conditions and escalation

- Missing purpose/placement → `insufficient_data`.

## Examples

- **SaaS:** feature-announcement graphic set.
- **E-commerce:** product/offer social + ad sizes.
- **Real estate:** listing graphic template.
- **Retail:** promo banner variants.

## KPIs and metrics

Engagement/CTR by creative, on-brand consistency, placement coverage.

## Related skills

`content-production.infographic-brief`, `paid-social.creative-brief-development`,
`content-production.thumbnail-optimisation`.

## MCP mappings

- Prompts: `create_content_brief`, `generate_marketing_copy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

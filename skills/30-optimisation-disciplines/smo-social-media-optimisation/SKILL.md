---
id: optimisation.smo-social-media-optimisation
name: SMO (Social Media Optimisation)
version: 1.0.0
status: stable
description: Optimise social profiles, content and sharability - bios, handles, keywords, social search, share triggers and cross-linking - to maximise organic discovery, reach and referral from social platforms.
category: optimisation-disciplines
sub_category: smo
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration]
objectives: [grow-organic-reach, improve-social-discovery, grow-referral-traffic]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: hours
required_inputs: [social-profiles, brand, target-audience]
optional_inputs: [current-metrics, competitors, priority-platforms]
outputs: [profile-optimisation, social-search-plan, sharability-improvements]
related_skills: [organic-social.social-content-pillars, organic-social.social-content-calendar, platform.linkedin-content]
resources: [marketing://skills/catalogue, marketing://channels/catalogue]
mcp_prompts: [plan_social_content]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [smo, social-media, social-search, discovery, optimisation]
---

## Overview

**Social Media Optimisation (SMO)** improves organic discoverability and sharability on social
platforms: optimised profiles (handles, bios, keywords), **social search** optimisation (many users
now search inside TikTok/Instagram/LinkedIn/Pinterest/YouTube), share triggers, hashtags/tagging, and
cross-linking between owned properties. It complements SEO for the social surface.

## Business purpose

Social platforms are increasingly search and discovery engines. Optimised profiles and content get
found, followed and shared — compounding organic reach without paid spend.

## When to use / when not to use

- **Use** to improve organic discovery/reach across social profiles and content.
- **Do not use** for paid-social targeting (see paid-social skills) or engagement-baiting tactics.

## Inputs

### Required
- Social profiles, brand, target audience.

### Optional
- Current metrics, competitors, priority platforms.

## Outputs

- **Profile optimisation** (handle, name, bio, keywords, links, category).
- A **social-search plan** (keyworded captions, alt text, hashtags, on-screen text).
- **Sharability improvements** (formats and triggers that drive saves/shares).

## Methodology

1. **Profiles:** consistent handle/name, keyword-rich bio, clear category, optimised link (link-in-bio),
   complete fields, branded visuals.
2. **Social search:** treat captions, on-screen text, alt text, titles and hashtags as searchable —
   include the terms your audience actually searches on each platform.
3. **Sharability:** design for saves/shares/sends (value-dense carousels, quotable lines, useful
   lists) — the strongest organic-distribution signals.
4. **Cross-linking:** connect profiles, website and content; add social share/follow paths on owned
   properties.
5. **Measure & iterate:** track reach source (search vs feed vs shares), follows and referral traffic.

## Decision rules

- Optimise for the platform's *search*, not just the feed algorithm.
- Prioritise saves/shares over vanity likes.
- Keep handles/bios/branding consistent across platforms.

## Quality checklist

- [ ] Profiles fully optimised + consistent.
- [ ] Captions/alt/hashtags keyworded for social search.
- [ ] Sharability + cross-linking addressed.

## Compliance checklist

- [ ] No engagement-baiting/manipulation that violates platform rules.
- [ ] Disclosures where content is sponsored.

## Failure conditions and escalation

- Missing profiles/brand/audience → `insufficient_data`.

## Examples

- **SaaS:** keyworded LinkedIn company page + founder profiles.
- **E-commerce:** searchable Instagram/TikTok captions + shoppable links.
- **Real estate:** location-keyworded profiles + Pinterest boards.
- **Retail:** local-keyworded profiles + store links.

## KPIs and metrics

Reach from search/shares, follower growth, save/share rate, social referral traffic.

## Related skills

`organic-social.social-content-pillars`, `organic-social.social-content-calendar`,
`platform.linkedin-content`.

## MCP mappings

- Resources: `marketing://skills/catalogue`, `marketing://channels/catalogue`
- Prompts: `plan_social_content`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

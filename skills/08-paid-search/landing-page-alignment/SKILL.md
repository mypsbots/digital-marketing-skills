---
id: paid-search.landing-page-alignment
name: Landing Page Alignment
version: 1.0.0
status: stable
description: Ensure paid-search landing pages match ad message and keyword intent (message match, relevance, speed, conversion path) to lift Quality Score and conversion.
category: paid-search
sub_category: conversion
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [decision]
objectives: [improve-quality-score, improve-conversion]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: hours
required_inputs: [ad-message-or-keywords, landing-page]
optional_inputs: [conversion-goal, page-speed-data]
outputs: [alignment-review, message-match-fixes, conversion-recommendations]
related_skills: [paid-search.search-ad-copy, cro.landing-page-audit, cro.value-proposition-clarity-review]
resources: [marketing://policies/google-ads/policies]
mcp_prompts: [plan_google_ads, audit_landing_page]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [paid-search, landing-page, message-match]
---

## Overview

Checks that the landing page delivers on the ad's promise and the query's intent — message match,
relevance, load speed, clear conversion path — to raise Quality Score, lower CPC and improve
conversion.

## Business purpose

Ad↔page mismatch wastes clicks and hurts Quality Score; alignment compounds efficiency gains.

## When to use / when not to use

- **Use** to review page fit for a paid campaign/ad group.
- **Do not use** to approve pages with misleading continuity or hidden terms.

## Inputs

### Required
- Ad message or keywords, landing page.

### Optional
- Conversion goal, page-speed data.

## Outputs

- An **alignment review** (message match, relevance, speed, path).
- **Message-match fixes**.
- **Conversion recommendations**.

## Methodology

1. Compare ad headline/offer/CTA to page hero and CTA (message match).
2. Verify keyword/intent relevance of page content.
3. Check load speed and mobile experience.
4. Assess conversion path friction and trust signals.
5. Prioritise fixes by impact on Quality Score/conversion.

## Decision rules

- The page must fulfil the ad's specific promise.
- Fast, mobile-first, single clear conversion path.
- No bait-and-switch between ad and page.

## Quality checklist

- [ ] Message match verified.
- [ ] Relevance + speed assessed.
- [ ] Fixes prioritised.

## Compliance checklist

- [ ] Ad-to-page continuity honest; terms disclosed.
- [ ] Ad policies respected.

## Failure conditions and escalation

- Missing ad message/page → `insufficient_data`.

## Examples

- **SaaS:** ad "free trial" → page leads with trial CTA.
- **E-commerce:** ad product/offer → matching PDP/category.
- **Real estate:** ad area/valuation → matching local page.
- **Retail:** ad promo → matching promo landing.

## KPIs and metrics

Quality Score, bounce, conversion rate, CPC/CPA.

## Related skills

`paid-search.search-ad-copy`, `cro.landing-page-audit`,
`cro.value-proposition-clarity-review`.

## MCP mappings

- Resources: `marketing://policies/google-ads/policies`
- Prompts: `plan_google_ads`, `audit_landing_page`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

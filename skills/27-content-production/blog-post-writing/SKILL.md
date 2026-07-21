---
id: content-production.blog-post-writing
name: Blog Post Writing
version: 1.0.0
status: stable
description: Write a complete, on-brand, search-intent-aligned blog article from a brief, with accurate sourcing, strong structure, E-E-A-T signals and a clear CTA.
category: content-production
sub_category: written
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration]
objectives: [rank-and-inform, drive-organic-traffic]
risk_level: low
execution_mode: generation
human_approval_required: false
estimated_duration: hours
required_inputs: [brief-or-topic, audience]
optional_inputs: [keyword-target, brand-voice, sources]
outputs: [draft-article, meta-title-and-description, internal-links]
related_skills: [content.blog-brief-creation, seo.search-intent-analysis, offer-and-messaging.cta-creation]
resources: []
mcp_prompts: [create_content_brief, generate_marketing_copy]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [content, blog, writing]
---

## Overview

Produces a full-length blog article that satisfies search intent completely, reads well, is
accurate and cited, carries E-E-A-T signals, and drives a clear next action — from a brief or
topic.

## Business purpose

High-quality articles earn rankings, trust and assisted conversions; thin or inaccurate content
wastes crawl budget and harms the brand.

## When to use / when not to use

- **Use** to draft or edit a blog/article once intent and angle are known.
- **Do not use** to fabricate facts, plagiarise, or mass-produce low-value AI filler.

## Inputs

### Required
- Brief or topic, audience.

### Optional
- Keyword target, brand voice, sources.

## Outputs

- A **draft article** (headline, intro, structured body, conclusion, CTA).
- **Meta title and description**.
- **Internal links** to relevant pages.

## Methodology

1. Confirm intent, audience and angle; outline H2/H3 to cover the topic fully.
2. Write a hook intro that promises and delivers value quickly.
3. Develop each section with specifics, examples and cited sources (no fabrication).
4. Add E-E-A-T signals (author expertise, evidence, first-hand insight).
5. Optimise on-page (title, headings, meta, internal links) and end with a clear CTA.

## Decision rules

- Depth and accuracy over word count; match intent.
- Cite credible sources; never fabricate data/quotes.
- Original value beats regurgitation; edit for clarity.

## Quality checklist

- [ ] Covers intent fully; clear structure.
- [ ] Accurate, cited, original.
- [ ] On-page + CTA + internal links.

## Compliance checklist

- [ ] No plagiarism/fabrication; sources cited.
- [ ] Regulated claims substantiated; disclosures where needed.

## Failure conditions and escalation

- Missing brief/topic/audience → `insufficient_data`.

## Examples

- **SaaS:** how-to guide supporting a pillar page.
- **E-commerce:** buying guide with product context.
- **Real estate:** area/market guide.
- **Retail:** seasonal how-to article.

## KPIs and metrics

Rankings, organic traffic, dwell/scroll, assisted conversions.

## Related skills

`content.blog-brief-creation`, `seo.search-intent-analysis`, `offer-and-messaging.cta-creation`.

## MCP mappings

- Prompts: `create_content_brief`, `generate_marketing_copy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

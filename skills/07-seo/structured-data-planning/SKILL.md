---
id: seo.structured-data-planning
name: Structured Data Planning
version: 1.0.0
status: stable
description: Plan schema.org structured data (product, article, FAQ, local business, review) to enable rich results, using only accurate, on-page, guideline-compliant markup.
category: seo
sub_category: technical
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration]
objectives: [enable-rich-results, improve-ctr]
risk_level: low
execution_mode: planning
human_approval_required: false
estimated_duration: hours
required_inputs: [page-types, content-inventory]
optional_inputs: [current-markup, target-rich-results]
outputs: [schema-plan, markup-specs, validation-checklist]
related_skills: [seo.technical-seo-audit, seo.crawlability-assessment, seo.on-page-seo-audit]
resources: [marketing://policies/search/webmaster-guidelines]
mcp_prompts: [seo_audit]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [seo, schema, structured-data]
---

## Overview

Specifies which schema.org types to implement per page template to earn eligible rich results —
ensuring markup is accurate, matches visible content, and follows search structured-data
guidelines (no spammy or fake markup).

## Business purpose

Valid structured data can improve appearance and CTR in search and is required for many rich
results.

## When to use / when not to use

- **Use** to plan schema across templates.
- **Do not use** to mark up content not visible on the page or fabricate ratings/reviews.

## Inputs

### Required
- Page types, content inventory.

### Optional
- Current markup, target rich results.

## Outputs

- A **schema plan** (type per template).
- **Markup specs** (required/recommended properties).
- A **validation checklist**.

## Methodology

1. Map page types to eligible schema (Product, Article, FAQPage, LocalBusiness, Review, Breadcrumb).
2. Confirm content actually present on-page to support each type.
3. Specify required/recommended properties per type.
4. Note guideline constraints (e.g. review markup rules) to avoid penalties.
5. Define validation (rich-results testing) before/after deploy.

## Decision rules

- Markup must reflect visible, accurate page content.
- Follow structured-data guidelines; no fake/self-serving reviews.
- Prioritise schema that yields real rich-result eligibility.

## Quality checklist

- [ ] Schema mapped to templates.
- [ ] Properties specified.
- [ ] Validation planned.

## Compliance checklist

- [ ] Structured-data guidelines followed.
- [ ] No fabricated ratings/reviews.

## Failure conditions and escalation

- Missing page types/content → `insufficient_data`.

## Examples

- **SaaS:** Article + FAQ on resources; SoftwareApplication where apt.
- **E-commerce:** Product + Offer + Review on PDPs.
- **Real estate:** LocalBusiness + listing markup.
- **Retail:** LocalBusiness + Product + store info.

## KPIs and metrics

Rich-result impressions/CTR, valid structured-data items, errors.

## Related skills

`seo.technical-seo-audit`, `seo.crawlability-assessment`, `seo.on-page-seo-audit`.

## MCP mappings

- Resources: `marketing://policies/search/webmaster-guidelines`
- Prompts: `seo_audit`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

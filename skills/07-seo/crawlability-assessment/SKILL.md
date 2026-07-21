---
id: seo.crawlability-assessment
name: Crawlability Assessment
version: 1.0.0
status: stable
description: Assess how well search engines can crawl and index a site — robots, sitemaps, status codes, redirects, crawl budget and indexation — and prioritise fixes.
category: seo
sub_category: technical
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness]
objectives: [ensure-indexation, improve-technical-seo]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [site-url-or-crawl-data]
optional_inputs: [robots-txt, sitemap, log-files, index-coverage]
outputs: [crawlability-findings, severity-ranking, fix-recommendations]
related_skills: [seo.technical-seo-audit, seo.structured-data-planning, seo.internal-linking-plan]
resources: [marketing://policies/search/webmaster-guidelines]
mcp_prompts: [seo_audit]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [seo, technical, crawlability]
---

## Overview

Evaluates whether search engines can discover, crawl and index the right pages — checking
robots.txt, XML sitemaps, HTTP status codes, redirects, canonical signals, crawl budget and index
coverage — then ranks fixes by impact.

## Business purpose

If key pages cannot be crawled/indexed, no amount of content or links will rank them.

## When to use / when not to use

- **Use** to diagnose indexation/crawl issues.
- **Do not use** to recommend production changes without human review/approval at execution.

## Inputs

### Required
- Site URL or crawl data.

### Optional
- robots.txt, sitemap, log files, index coverage.

## Outputs

- **Crawlability findings** (blocked/duplicate/orphan/error pages).
- **Severity ranking**.
- **Fix recommendations**.

## Methodology

1. Review robots.txt and meta robots for unintended blocks.
2. Validate XML sitemaps (coverage, freshness, errors).
3. Audit status codes, redirect chains/loops, canonicals.
4. Assess crawl budget (waste on parameters/duplicates) and orphan pages.
5. Compare crawlable set to index coverage; rank fixes by impact.

## Decision rules

- Ensure priority pages are crawlable and indexable.
- Fix noindex/robots blocks on important pages first.
- Recommendations are advisory; changes need human execution/approval.

## Quality checklist

- [ ] Robots/sitemaps/status/redirects reviewed.
- [ ] Index coverage compared.
- [ ] Fixes severity-ranked.

## Compliance checklist

- [ ] No cloaking/manipulative crawler handling.

## Failure conditions and escalation

- No site URL/crawl data → `insufficient_data`.
- Production changes → human approval.

## Examples

- **SaaS:** app subdomain wrongly blocked from indexing.
- **E-commerce:** faceted URLs wasting crawl budget.
- **Real estate:** expired listings returning soft-404s.
- **Retail:** store pages orphaned from navigation.

## KPIs and metrics

Indexed-page ratio, crawl errors, valid pages in coverage, crawl budget efficiency.

## Related skills

`seo.technical-seo-audit`, `seo.structured-data-planning`, `seo.internal-linking-plan`.

## MCP mappings

- Resources: `marketing://policies/search/webmaster-guidelines`
- Prompts: `seo_audit`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

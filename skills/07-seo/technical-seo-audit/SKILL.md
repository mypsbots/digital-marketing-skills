---
id: seo.technical-seo-audit
name: Technical SEO Audit
version: 1.0.0
status: stable
description: Diagnose crawlability, indexability, architecture, performance and structured-data issues that constrain organic performance.
category: seo
sub_category: technical
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration]
channels: [organic-search]
objectives: [remove-technical-barriers]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: days
required_inputs: [website]
optional_inputs: [crawl-data, search-console-data, log-files]
outputs: [technical-findings, severity, fix-plan]
related_skills: [seo.seo-audit, seo.crawlability-assessment, seo.structured-data-planning]
resources: [marketing://policies/search/webmaster-guidelines]
mcp_prompts: [seo_audit]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [seo, technical]
---

## Overview

Focused examination of the technical foundations that determine whether search engines can
crawl, render, index and rank a site efficiently.

## Business purpose

Technical barriers cap the returns of all content and link work; removing them is high-leverage.

## When to use / when not to use

- **Use** after migrations, for large sites, or when indexation is poor.
- **Do not use** as the only lever when the real gap is content/intent.

## Inputs

### Required
- Website.

### Optional
- Crawl data, Search Console data, server logs.

## Outputs

- **Technical findings** with evidence.
- **Severity** per issue.
- A sequenced **fix plan**.

## Methodology

1. Crawl the site; compare to indexed URLs and sitemaps.
2. Assess crawl budget, robots directives, canonicalisation, pagination and faceted URLs.
3. Check rendering (JS), status codes, redirect chains, duplicate content.
4. Evaluate Core Web Vitals and mobile usability.
5. Validate structured data and eligibility for rich results.
6. Prioritise by impact on indexation/ranking and effort.

## Decision rules

- Prioritise issues affecting whole templates over one-off pages.
- Resolve indexation control (canonical/robots/noindex) before scaling content.
- Validate fixes in staging before production changes.

## Quality checklist

- [ ] Template-level issues identified.
- [ ] Findings evidenced and severity-rated.
- [ ] Fix plan sequenced with dependencies.

## Compliance checklist

- [ ] No cloaking or manipulative techniques.
- [ ] Accessibility overlaps noted.

## Failure conditions and escalation

- No site access/crawl → `insufficient_data`.
- Production config changes require human approval.

## Examples

- **E-commerce:** faceted navigation creating index bloat → parameter handling.
- **SaaS:** JS-rendered content not indexed → SSR/prerender.
- **Real estate:** duplicate listing URLs → canonicalisation.
- **Retail:** slow mobile pages → performance plan.

## KPIs and metrics

Indexed vs submitted, crawl stats, CWV, coverage errors.

## Related skills

`seo.seo-audit`, `seo.crawlability-assessment`, `seo.structured-data-planning`.

## MCP mappings

- Resources: `marketing://policies/search/webmaster-guidelines`
- Prompts: `seo_audit`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

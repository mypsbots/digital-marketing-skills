---
id: content-production.lead-magnet-creation
name: Lead Magnet Creation
version: 1.0.0
status: stable
description: Create high-value lead magnets (ebooks, guides, checklists, templates, whitepapers) that solve a specific problem and justify a consent-based opt-in.
category: content-production
sub_category: gated
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration]
objectives: [generate-leads, build-list]
risk_level: low
execution_mode: generation
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [target-audience, problem-to-solve]
optional_inputs: [brand-voice, offer, existing-content]
outputs: [lead-magnet-content, format-and-structure, opt-in-copy]
related_skills: [content-production.blog-post-writing, email.lead-nurture-series, compliance.email-permission-assessment]
resources: []
mcp_prompts: [create_content_brief, generate_marketing_copy]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [lead-magnet, ebook, gated-content]
---

## Overview

Designs and drafts a lead magnet that delivers real, specific value (ebook, guide, checklist,
template, whitepaper, calculator) worth a consent-based opt-in, with a clear promise, usable
structure, and honest opt-in copy — then hands off to nurture.

## Business purpose

A relevant lead magnet grows a permission-based list of the right prospects and feeds nurture; a
weak one attracts low-intent, high-churn subscribers.

## When to use / when not to use

- **Use** to create gated assets for lead generation.
- **Do not use** to gate low-value content or collect data without a lawful basis/clear purpose.

## Inputs

### Required
- Target audience, problem to solve.

### Optional
- Brand voice, offer, existing content.

## Outputs

- **Lead-magnet content** (drafted asset).
- **Format and structure** (best format for the job).
- **Opt-in copy** (landing/form promise + expectation).

## Methodology

1. Identify a specific, painful problem the audience wants solved now.
2. Choose the lightest format that delivers the outcome (checklist/template beats bloated ebook).
3. Draft genuinely useful, actionable content.
4. Write honest opt-in copy (clear promise, what they get, data use).
5. Plan the follow-up nurture and consent handling.

## Decision rules

- Deliver real, immediate value; match to buyer intent.
- Collect only necessary data with a clear purpose/consent.
- Set honest expectations; deliver instantly.

## Quality checklist

- [ ] Solves a specific problem.
- [ ] Actionable, right-sized format.
- [ ] Honest opt-in + nurture plan.

## Compliance checklist

- [ ] Lawful basis/consent for data collected.
- [ ] Clear data-use notice; no dark patterns.

## Failure conditions and escalation

- Missing audience/problem → `insufficient_data`.
- New data collection → consent/permission assessment.

## Examples

- **SaaS:** ROI calculator / implementation checklist.
- **E-commerce:** sizing/buying guide.
- **Real estate:** "first-time buyer" guide.
- **Retail:** seasonal planner/template.

## KPIs and metrics

Opt-in conversion, lead quality, downstream nurture conversion.

## Related skills

`content-production.blog-post-writing`, `email.lead-nurture-series`,
`compliance.email-permission-assessment`.

## MCP mappings

- Prompts: `create_content_brief`, `generate_marketing_copy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

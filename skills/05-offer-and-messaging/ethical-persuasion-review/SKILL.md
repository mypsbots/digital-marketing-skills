---
id: offer-and-messaging.ethical-persuasion-review
name: Ethical Persuasion Review
version: 1.0.0
status: stable
description: Review copy and UX for manipulative patterns (false urgency, hidden costs, forced continuity, confirmshaming) and recommend honest, effective alternatives.
category: offer-and-messaging
sub_category: ethics
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [consideration, decision]
objectives: [protect-trust, ensure-compliance]
risk_level: medium
execution_mode: analysis
human_approval_required: false
estimated_duration: minutes-to-hours
required_inputs: [copy-or-ux-under-review]
optional_inputs: [jurisdiction, brand-guidelines]
outputs: [dark-pattern-findings, risk-rating, honest-alternatives]
related_skills: [offer-and-messaging.claim-substantiation-checklist, offer-and-messaging.cta-creation, compliance.marketing-compliance-assessment]
resources: [marketing://compliance-rules]
mcp_prompts: [generate_marketing_copy]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [ethics, dark-patterns, persuasion]
---

## Overview

Audits messaging and UX for deceptive or manipulative patterns and replaces them with persuasion
that is honest and still effective — protecting trust and reducing regulatory risk.

## Business purpose

Manipulation may lift short-term metrics but erodes trust, increases churn/complaints and invites
enforcement; ethical persuasion is more durable.

## When to use / when not to use

- **Use** to review copy/UX before launch or during CRO.
- **Do not use** to rubber-stamp dark patterns; recommend removal.

## Inputs

### Required
- Copy or UX under review.

### Optional
- Jurisdiction, brand guidelines.

## Outputs

- **Dark-pattern findings** (type + location).
- A **risk rating**.
- **Honest alternatives** that preserve effectiveness.

## Methodology

1. Scan for common dark patterns: false urgency/scarcity, hidden costs/drip pricing, forced
   continuity, confirmshaming, sneak-into-basket, hard-to-cancel, disguised ads.
2. Rate consumer-harm and regulatory risk.
3. Distinguish legitimate persuasion (genuine scarcity, social proof) from manipulation.
4. Propose honest alternatives that keep persuasive power.
5. Flag high-risk items for compliance/legal.

## Decision rules

- Only genuine urgency/scarcity/social proof.
- All costs and terms disclosed upfront; easy cancellation.
- Remove confirmshaming and forced continuity.

## Quality checklist

- [ ] Patterns identified with location.
- [ ] Risk rated.
- [ ] Honest alternatives provided.

## Compliance checklist

- [ ] Consumer-protection/dark-pattern rules applied.
- [ ] High-risk items escalated.

## Failure conditions and escalation

- No copy/UX provided → `insufficient_data`.
- High consumer-harm risk → compliance/legal.

## Examples

- **SaaS:** transparent trial-to-paid; easy cancel.
- **E-commerce:** real stock counts; no sneak fees.
- **Real estate:** honest availability claims.
- **Retail:** genuine sale end-dates only.

## KPIs and metrics

Complaint rate, refund/chargeback rate, trust/NPS, retention.

## Related skills

`offer-and-messaging.claim-substantiation-checklist`, `offer-and-messaging.cta-creation`,
`compliance.marketing-compliance-assessment`.

## MCP mappings

- Resources: `marketing://compliance-rules`
- Prompts: `generate_marketing_copy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

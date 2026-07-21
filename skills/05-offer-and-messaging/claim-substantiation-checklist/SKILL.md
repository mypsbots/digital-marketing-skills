---
id: offer-and-messaging.claim-substantiation-checklist
name: Claim Substantiation Checklist
version: 1.0.0
status: stable
description: Verify that marketing claims (performance, comparative, superlative, testimonial, environmental) are truthful, evidenced and compliant before publishing.
category: offer-and-messaging
sub_category: compliance
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
objectives: [ensure-compliance, protect-trust]
risk_level: medium
execution_mode: analysis
human_approval_required: false
estimated_duration: minutes-to-hours
required_inputs: [claims, evidence-or-sources]
optional_inputs: [jurisdiction, category-rules]
outputs: [substantiation-review, flagged-claims, required-evidence]
related_skills: [offer-and-messaging.ethical-persuasion-review, compliance.marketing-compliance-assessment, offer-and-messaging.objection-handling]
resources: [marketing://compliance-rules]
mcp_prompts: [generate_marketing_copy]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [claims, substantiation, compliance]
---

## Overview

Reviews each marketing claim against evidence and advertising standards — performance,
comparative, superlative ("best/#1"), testimonial, pricing and environmental/"green" claims —
flagging any that are unsubstantiated, misleading or non-compliant.

## Business purpose

Substantiated claims protect the brand from regulatory action and preserve customer trust.

## When to use / when not to use

- **Use** before publishing claims in ads, pages, emails.
- **Do not use** as a substitute for legal sign-off on high-risk/regulated claims.

## Inputs

### Required
- Claims, evidence or sources.

### Optional
- Jurisdiction, category rules.

## Outputs

- A **substantiation review** per claim (supported / needs evidence / remove).
- **Flagged claims** with reasons.
- **Required evidence** to keep a claim.

## Methodology

1. Extract every explicit and implied claim.
2. Classify claim type and risk (performance, comparative, superlative, testimonial, green).
3. Check evidence adequacy, recency and relevance.
4. Assess against advertising standards and category rules.
5. Recommend keep/qualify/remove and required proof; escalate high-risk to legal.

## Decision rules

- No claim without adequate, current evidence.
- Comparative/superlative claims need robust, fair substantiation.
- Environmental claims must meet green-claims guidance.

## Quality checklist

- [ ] All claims (incl. implied) reviewed.
- [ ] Evidence adequacy assessed.
- [ ] Keep/qualify/remove decisions given.

## Compliance checklist

- [ ] Advertising-standards rules applied.
- [ ] High-risk claims escalated to legal.

## Failure conditions and escalation

- Missing claims/evidence → `insufficient_data`.
- Regulated/high-risk claims → legal review.

## Examples

- **SaaS:** "2x faster" needs benchmarked, reproducible proof.
- **E-commerce:** "eco-friendly" needs green-claims substantiation.
- **Real estate:** "we sell faster" needs local, current data.
- **Retail:** "lowest price" needs verifiable comparison.

## KPIs and metrics

% claims substantiated, complaints/violations avoided.

## Related skills

`offer-and-messaging.ethical-persuasion-review`, `compliance.marketing-compliance-assessment`,
`offer-and-messaging.objection-handling`.

## MCP mappings

- Resources: `marketing://compliance-rules`
- Prompts: `generate_marketing_copy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

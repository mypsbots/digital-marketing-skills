---
id: platform.reddit-marketing
name: Reddit Marketing Playbook
version: 1.0.0
status: stable
description: Plan authentic, community-first Reddit participation — subreddit selection, value-led contribution and rule compliance — that builds trust without spam.
category: platform-playbooks
sub_category: reddit
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration]
objectives: [build-trust, gather-insight]
risk_level: medium
execution_mode: planning
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [goal, audience-or-topic]
optional_inputs: [relevant-subreddits, brand-presence]
outputs: [reddit-strategy, subreddit-and-value-plan, rules-and-disclosure-guidance]
related_skills: [community-reputation.reputation-monitoring, customer-research.objection-analysis, content-production.social-caption-writing]
resources: [marketing://compliance-rules]
mcp_prompts: [social_calendar]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [reddit, community, platform]
---

## Overview

Defines a community-first Reddit approach: identifying relevant subreddits, contributing genuine
value, following each subreddit's rules and reddiquette, being transparent about affiliation, and
using Reddit for insight and trust — not spammy self-promotion (which backfires hard).

## Business purpose

Reddit offers deep, high-trust niche communities and rich customer insight, but punishes overt
marketing; authentic participation earns credibility and intel.

## When to use / when not to use

- **Use** to plan authentic participation, AMAs, insight-gathering, and (sparingly) promotion.
- **Do not use** covert shilling, vote manipulation, fake accounts, or rule-breaking self-promo.

## Inputs

### Required
- Goal, audience or topic.

### Optional
- Relevant subreddits, brand presence.

## Outputs

- A **Reddit strategy** (value-first goals and boundaries).
- A **subreddit and value plan** (where to engage, how to contribute).
- **Rules and disclosure guidance** (per-subreddit rules, transparency, self-promo ratios).

## Methodology

1. Identify subreddits where the audience genuinely gathers; read their rules/culture.
2. Lead with value: answer questions, share expertise, no pitching first.
3. Be transparent about affiliation; respect the ~9:1 value-to-promo norm.
4. Consider AMAs/insight-mining and monitoring for VoC/objections.
5. Track sentiment and contribution; never manipulate votes or use fake accounts.

## Decision rules

- Value and transparency first; self-promo is earned and rare.
- Follow each subreddit's rules and reddiquette exactly.
- No vote manipulation, sockpuppets, or covert promotion.

## Quality checklist

- [ ] Right subreddits + rules understood.
- [ ] Value-first contribution plan.
- [ ] Disclosure + self-promo limits.

## Compliance checklist

- [ ] Transparent affiliation; platform + subreddit rules.
- [ ] No manipulation/fake accounts; honest claims.

## Failure conditions and escalation

- Missing goal/audience/topic → `insufficient_data`.
- Any paid/undisclosed promotion → disclosure/compliance review.

## Examples

- **SaaS:** expert answers in niche subreddits + AMA.
- **E-commerce:** genuine participation + insight mining.
- **Real estate:** local-subreddit helpfulness.
- **Retail:** community engagement + feedback gathering.

## KPIs and metrics

Positive sentiment, upvotes/quality engagement, referral traffic (where allowed), insight captured.

## Related skills

`community-reputation.reputation-monitoring`, `customer-research.objection-analysis`,
`content-production.social-caption-writing`.

## MCP mappings

- Resources: `marketing://compliance-rules`
- Prompts: `social_calendar`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.

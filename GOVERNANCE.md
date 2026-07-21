# Governance

## Purpose

This document describes how the Digital Marketing Skills MCP project is governed, how
decisions are made and how the skill catalogue is maintained to a consistent, high standard.

## Roles

- **Maintainers** — review and merge contributions, own release management and set direction.
- **Domain reviewers** — subject-matter experts who review skills within a category (for
  example SEO, paid media, compliance) for accuracy and best practice.
- **Contributors** — anyone who opens issues or pull requests.

## Decision-making

- Routine changes are approved by at least one maintainer.
- New skills and connectors require review by a maintainer **and** a relevant domain reviewer.
- Changes affecting the security model, approval model or public schemas require review by two
  maintainers.
- Significant direction changes are proposed as an issue labelled `proposal` and are open for
  comment for at least 7 days.

## Skill quality bar

Every skill must:

1. Conform to the skill schema (`schemas/skill.schema.json`) and pass `npm run validate:skills`.
2. Contain complete methodology, decision rules, quality checklist and compliance checklist.
3. Separate facts, assumptions, hypotheses and recommendations.
4. Avoid unsupported performance promises.
5. Declare risk level, execution mode and human-approval requirements consistently.
6. Carry a `last_reviewed` date for any platform-dependent content.

## Reviews and freshness

- Platform-dependent skills and policy references are reviewed at least every 6 months.
- Stale content (`last_reviewed` older than the freshness window) is flagged by CI and by the
  policy-refresh workflow.

## Versioning

The project uses [Semantic Versioning](https://semver.org/). Individual skills are versioned
independently in their front matter and their `CHANGELOG` sections.

## Code of conduct

All participation is governed by `CODE_OF_CONDUCT.md`.

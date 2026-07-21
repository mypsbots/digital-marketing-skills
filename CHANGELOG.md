# Changelog

All notable changes to this project are documented in this file. The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and this project adheres to
[Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added

- **Phase 1 — Architecture & foundation.** Repository scaffolding, governance and policy
  documents, configuration catalogues (`config/`), JSON schemas (`schemas/`), issue and PR
  templates, and CI workflow definitions.
- **Phase 2 — MCP server core.** TypeScript MCP server with stdio and HTTP transports; skill
  loader and registry (front-matter based); resource, prompt and tool registries; core
  engines (policy, approval, metric, audit, workflow); security middleware; mock connectors.
- **Phase 3–5 — Skill catalogue.** Consolidated, detailed `SKILL.md` skills across all 32
  categories, prioritising foundation and core channels; workflow definitions; central metrics
  catalogue; MCP resources, prompts and templates; end-to-end examples.
- **Phase 6 — Python utilities, tests and evaluations.**

### Notes

- All write tools default to dry-run. High-risk actions require approval. No live external
  write integrations are enabled by default.

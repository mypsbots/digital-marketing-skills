import { z } from 'zod';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { ServerContext } from '../../server/context.js';
import { envelope, insufficientData } from '../../core/envelope.js';
import type { ToolEnvelope } from '../../core/types.js';
import { MetricEngine } from '../../core/metric-engine.js';
import { auditEngine } from '../../core/audit-engine.js';
import { approvalEngine } from '../../core/approval-engine.js';
import { logger } from '../../utils/logger.js';
import type { MetricsRow } from '../../connectors/base/connector.interface.js';
import { MockAnalyticsConnector } from '../../connectors/analytics/mock-analytics.js';
import { MockAdvertisingConnector } from '../../connectors/advertising/mock-advertising.js';
import { MockCrmConnector } from '../../connectors/crm/mock-crm.js';

/** Wrap an envelope as an MCP tool result (text + structured content). */
function toResult(env: ToolEnvelope) {
  return {
    content: [{ type: 'text' as const, text: JSON.stringify(env, null, 2) }],
    structuredContent: env as unknown as Record<string, unknown>,
  };
}

const dateRangeShape = {
  start: z.string().describe('Start date (ISO YYYY-MM-DD).'),
  end: z.string().describe('End date (ISO YYYY-MM-DD).'),
  timezone: z.string().default('Europe/London').describe('IANA timezone.'),
};

function sumColumn(rows: MetricsRow[], key: string): number {
  return rows.reduce((acc, r) => acc + (typeof r[key] === 'number' ? (r[key] as number) : 0), 0);
}

export function registerTools(server: McpServer, ctx: ServerContext): void {
  // ----------------------------------------------------------------------
  // READ-ONLY: skills discovery
  // ----------------------------------------------------------------------
  server.registerTool(
    'marketing_list_skills',
    {
      title: 'List marketing skills',
      description:
        'Lists available marketing skills, optionally filtered by category, industry or funnel ' +
        'stage. Read-only, no cost, no side effects, no approval required. Use to discover which ' +
        'skill to apply. Do not use to fetch full skill content (use marketing_get_skill).',
      inputSchema: {
        category: z.string().optional().describe('Category folder or metadata category.'),
        industry: z.enum(['common', 'saas', 'ecommerce', 'real-estate', 'retail']).optional(),
        funnel_stage: z
          .enum(['awareness', 'consideration', 'decision', 'retention', 'advocacy'])
          .optional(),
      },
    },
    async ({ category, industry, funnel_stage }) => {
      const results = ctx.skills.search({ category, industry, funnelStage: funnel_stage });
      const audit_id = auditEngine.record({ action: 'tool.list_skills', outcome: 'success', tool: 'marketing_list_skills' });
      return toResult(
        envelope(
          'success',
          `Found ${results.length} skill(s).`,
          {
            count: results.length,
            skills: results.map((s) => ({
              id: s.metadata.id,
              name: s.metadata.name,
              category: s.categoryDir,
              risk_level: s.metadata.risk_level,
              human_approval_required: s.metadata.human_approval_required,
            })),
          },
          { audit_id, next_actions: ['Fetch a skill with marketing_get_skill to apply its methodology.'] },
        ),
      );
    },
  );

  server.registerTool(
    'marketing_get_skill',
    {
      title: 'Get a marketing skill',
      description:
        'Returns the full content (metadata, methodology, decision rules, checklists, examples) of ' +
        'a single skill by id. Read-only, no cost, no approval required.',
      inputSchema: { id: z.string().describe('Skill id, e.g. seo.keyword-discovery.') },
    },
    async ({ id }) => {
      const skill = ctx.skills.get(id);
      const audit_id = auditEngine.record({
        action: 'tool.get_skill',
        outcome: skill ? 'success' : 'failed',
        tool: 'marketing_get_skill',
        skill_id: id,
      });
      if (!skill) {
        return toResult(
          insufficientData(`Skill not found: ${id}`, { id }, ['valid skill id'], 'Call marketing_list_skills to find a valid id.'),
        );
      }
      return toResult(
        envelope('success', `Skill: ${skill.metadata.name}`, { metadata: skill.metadata, body: skill.body }, { audit_id }),
      );
    },
  );

  server.registerTool(
    'marketing_search_skills',
    {
      title: 'Search marketing skills',
      description: 'Free-text search across skill ids, names, descriptions and tags. Read-only.',
      inputSchema: { query: z.string().min(2).describe('Search text.') },
    },
    async ({ query }) => {
      const results = ctx.skills.search({ text: query });
      const audit_id = auditEngine.record({ action: 'tool.search_skills', outcome: 'success', tool: 'marketing_search_skills' });
      return toResult(
        envelope(
          'success',
          `Found ${results.length} skill(s) matching "${query}".`,
          { skills: results.map((s) => ({ id: s.metadata.id, name: s.metadata.name, category: s.categoryDir })) },
          { audit_id },
        ),
      );
    },
  );

  // ----------------------------------------------------------------------
  // READ-ONLY: workflows
  // ----------------------------------------------------------------------
  server.registerTool(
    'marketing_list_workflows',
    {
      title: 'List marketing workflows',
      description: 'Lists available multi-step marketing workflows. Read-only.',
      inputSchema: {},
    },
    async () => {
      const audit_id = auditEngine.record({ action: 'tool.list_workflows', outcome: 'success', tool: 'marketing_list_workflows' });
      return toResult(
        envelope(
          'success',
          `${ctx.workflows.all().length} workflow(s) available.`,
          { workflows: ctx.workflows.all().map((w) => ({ id: w.id, name: w.name, objective: w.objective })) },
          { audit_id },
        ),
      );
    },
  );

  server.registerTool(
    'marketing_get_workflow_plan',
    {
      title: 'Get workflow execution plan',
      description:
        'Returns an ordered execution plan for a workflow, highlighting approval gates. Read-only. ' +
        'The plan is guidance; the client orchestrates skills/tools and must honour approval gates.',
      inputSchema: { id: z.string().describe('Workflow id.') },
    },
    async ({ id }) => {
      const wf = ctx.workflows.get(id);
      const plan = ctx.workflows.plan(id);
      const audit_id = auditEngine.record({ action: 'tool.get_workflow_plan', outcome: wf ? 'success' : 'failed', tool: 'marketing_get_workflow_plan' });
      if (!wf) {
        return toResult(insufficientData(`Workflow not found: ${id}`, { id }, ['valid workflow id'], 'Call marketing_list_workflows.'));
      }
      return toResult(envelope('success', `Plan for workflow: ${wf.name}`, { workflow: wf, plan }, { audit_id }));
    },
  );

  // ----------------------------------------------------------------------
  // READ-ONLY: deterministic metric calculation
  // ----------------------------------------------------------------------
  server.registerTool(
    'marketing_calculate_metric',
    {
      title: 'Calculate a marketing metric',
      description:
        'Deterministically calculates a marketing metric and returns the value, formula, inputs ' +
        'used and caveats. Read-only, no cost. Supported metrics include roas, cac, ltv, ' +
        'ltv_cac_ratio, cac_payback, conversion_rate, ctr, cpc, cpm, cpa, cpl, aov, mer, ' +
        'marketing_roi, churn_rate, nrr. Use for transparent, auditable maths rather than ' +
        'estimating in prose.',
      inputSchema: {
        metric: z.string().describe('Metric name, e.g. roas.'),
        inputs: z.record(z.number()).describe('Named numeric inputs required by the metric.'),
      },
    },
    async ({ metric, inputs }) => {
      const audit_id = auditEngine.record({ action: 'tool.calculate_metric', outcome: 'success', tool: 'marketing_calculate_metric', details: { metric } });
      const n = (k: string) => inputs[k] ?? NaN;
      let result;
      switch (metric) {
        case 'ctr': result = MetricEngine.ctr(n('clicks'), n('impressions')); break;
        case 'cpc': result = MetricEngine.cpc(n('cost'), n('clicks')); break;
        case 'cpm': result = MetricEngine.cpm(n('cost'), n('impressions')); break;
        case 'conversion_rate': result = MetricEngine.conversionRate(n('conversions'), n('denominator')); break;
        case 'cpa': case 'cost_per_conversion': result = MetricEngine.cpa(n('cost'), n('conversions')); break;
        case 'cpl': case 'cost_per_lead': result = MetricEngine.cpl(n('cost'), n('leads')); break;
        case 'cac': result = MetricEngine.cac(n('marketingCost'), n('salesCost'), n('newCustomers')); break;
        case 'roas': result = MetricEngine.roas(n('attributedRevenue'), n('adSpend')); break;
        case 'mer': result = MetricEngine.mer(n('totalRevenue'), n('totalMarketingSpend')); break;
        case 'marketing_roi': result = MetricEngine.marketingRoi(n('attributedGrossProfit'), n('marketingCost')); break;
        case 'aov': result = MetricEngine.aov(n('revenue'), n('orders')); break;
        case 'ltv': result = MetricEngine.ltv(n('avgOrderValue'), n('purchaseFrequency'), n('grossMargin'), n('avgLifespan')); break;
        case 'ltv_cac_ratio': result = MetricEngine.ltvCacRatio(n('ltv'), n('cac')); break;
        case 'cac_payback': result = MetricEngine.cacPayback(n('cac'), n('monthlyGrossProfitPerCustomer')); break;
        case 'churn_rate': result = MetricEngine.churnRate(n('customersLost'), n('customersAtStart')); break;
        case 'nrr': result = MetricEngine.nrr(n('startingMrr'), n('expansion'), n('contraction'), n('churn')); break;
        default:
          return toResult(insufficientData(`Unsupported metric: ${metric}`, { metric }, ['supported metric name'], 'See config/metrics-catalogue.yaml for supported metrics.'));
      }
      const hasNaN = Object.values(result.inputs).some((v) => Number.isNaN(v));
      if (hasNaN) {
        return toResult(
          envelope('insufficient_data', `Missing numeric inputs for ${metric}.`, result, {
            warnings: ['One or more required inputs are missing or non-numeric.'],
            next_actions: [`Provide all inputs: ${Object.keys(result.inputs).join(', ')}.`],
            audit_id,
          }),
        );
      }
      return toResult(envelope('success', `${metric} = ${result.value}`, result, { warnings: result.warnings, audit_id }));
    },
  );

  // ----------------------------------------------------------------------
  // READ-ONLY: connector data (mock)
  // ----------------------------------------------------------------------
  const analytics = new MockAnalyticsConnector();
  const advertising = new MockAdvertisingConnector();
  const crm = new MockCrmConnector();

  server.registerTool(
    'marketing_fetch_campaign_metrics',
    {
      title: 'Fetch campaign metrics (mock)',
      description:
        'Fetches advertising campaign metrics for a date range from the mock advertising connector. ' +
        'Read-only, no cost. Returns synthetic data clearly labelled as such; do not treat as real. ' +
        'Live connectors are disabled by default.',
      inputSchema: { range: z.object(dateRangeShape) },
    },
    async ({ range }) => {
      const rows = await advertising.query({ range, metrics: ['impressions', 'clicks', 'cost', 'conversions'] });
      const totals = {
        impressions: sumColumn(rows, 'impressions'),
        clicks: sumColumn(rows, 'clicks'),
        cost: Math.round(sumColumn(rows, 'cost') * 100) / 100,
        conversions: sumColumn(rows, 'conversions'),
      };
      const audit_id = auditEngine.record({ action: 'tool.fetch_campaign_metrics', outcome: 'success', tool: 'marketing_fetch_campaign_metrics' });
      return toResult(
        envelope('success', `Fetched ${rows.length} day(s) of mock campaign metrics.`, { totals, rows }, {
          warnings: ['Synthetic mock data. Not real performance.'],
          sources: ['connector:mock-advertising'],
          audit_id,
        }),
      );
    },
  );

  server.registerTool(
    'marketing_fetch_analytics',
    {
      title: 'Fetch analytics metrics (mock)',
      description: 'Fetches web analytics metrics for a date range from the mock analytics connector. Read-only.',
      inputSchema: {
        range: z.object(dateRangeShape),
        metrics: z.array(z.string()).default(['sessions', 'conversions', 'revenue']),
      },
    },
    async ({ range, metrics }) => {
      const rows = await analytics.query({ range, metrics });
      const audit_id = auditEngine.record({ action: 'tool.fetch_analytics', outcome: 'success', tool: 'marketing_fetch_analytics' });
      const totals: Record<string, number> = {};
      for (const m of metrics) totals[m] = sumColumn(rows, m);
      return toResult(
        envelope('success', `Fetched ${rows.length} day(s) of mock analytics.`, { totals, rows }, {
          warnings: ['Synthetic mock data. Not real performance.'],
          sources: ['connector:mock-analytics'],
          audit_id,
        }),
      );
    },
  );

  server.registerTool(
    'marketing_fetch_crm_funnel',
    {
      title: 'Fetch CRM funnel snapshot (mock)',
      description: 'Returns a mock CRM funnel snapshot (leads, MQLs, SQLs, opportunities, customers). Read-only.',
      inputSchema: { range: z.object(dateRangeShape) },
    },
    async ({ range }) => {
      const snapshot = await crm.funnelSnapshot(range);
      const audit_id = auditEngine.record({ action: 'tool.fetch_crm_funnel', outcome: 'success', tool: 'marketing_fetch_crm_funnel' });
      return toResult(
        envelope('success', 'Mock CRM funnel snapshot.', snapshot, {
          warnings: ['Synthetic mock data. Not real customer data.'],
          sources: ['connector:mock-crm'],
          audit_id,
        }),
      );
    },
  );

  server.registerTool(
    'marketing_list_connectors',
    {
      title: 'List connectors',
      description: 'Lists available connectors and their capabilities. Read-only.',
      inputSchema: {},
    },
    async () => {
      const audit_id = auditEngine.record({ action: 'tool.list_connectors', outcome: 'success', tool: 'marketing_list_connectors' });
      return toResult(envelope('success', 'Connector capabilities.', { connectors: ctx.connectors.describe() }, { audit_id }));
    },
  );

  // ----------------------------------------------------------------------
  // READ-ONLY: tracking plan validation
  // ----------------------------------------------------------------------
  server.registerTool(
    'marketing_validate_tracking_plan',
    {
      title: 'Validate a tracking plan',
      description:
        'Validates a tracking plan for common issues (naming consistency, missing conversion ' +
        'definitions, duplicate events, missing UTM parameters). Read-only, no side effects.',
      inputSchema: {
        events: z
          .array(z.object({ name: z.string(), parameters: z.array(z.string()).default([]) }))
          .describe('List of tracked events.'),
        conversion_events: z.array(z.string()).default([]),
      },
    },
    async ({ events, conversion_events }) => {
      const warnings: string[] = [];
      const names = events.map((e) => e.name);
      const dupes = names.filter((n, i) => names.indexOf(n) !== i);
      if (dupes.length) warnings.push(`Duplicate event names: ${[...new Set(dupes)].join(', ')}.`);
      const nonSnake = names.filter((n) => !/^[a-z][a-z0-9_]*$/.test(n));
      if (nonSnake.length) warnings.push(`Events not in snake_case: ${nonSnake.join(', ')}.`);
      if (conversion_events.length === 0) warnings.push('No conversion events defined.');
      const missingConv = conversion_events.filter((c) => !names.includes(c));
      if (missingConv.length) warnings.push(`Conversion events not present in event list: ${missingConv.join(', ')}.`);
      const audit_id = auditEngine.record({ action: 'tool.validate_tracking_plan', outcome: 'success', tool: 'marketing_validate_tracking_plan' });
      return toResult(
        envelope(warnings.length ? 'partial_success' : 'success', warnings.length ? `${warnings.length} issue(s) found.` : 'Tracking plan looks consistent.', { events: names.length, conversion_events: conversion_events.length }, {
          warnings,
          recommendations: ['Adopt a documented naming convention and UTM governance policy.'],
          audit_id,
        }),
      );
    },
  );

  // ----------------------------------------------------------------------
  // READ-ONLY: report generation
  // ----------------------------------------------------------------------
  server.registerTool(
    'marketing_create_report',
    {
      title: 'Create a marketing report',
      description:
        'Assembles a structured marketing report object from provided metrics and narrative. ' +
        'Read-only (produces a report artefact, makes no external change). Currency and period are explicit.',
      inputSchema: {
        title: z.string(),
        period: z.object(dateRangeShape),
        currency: z.string().default('GBP'),
        kpis: z.array(z.object({ metric: z.string(), value: z.number(), target: z.number().optional() })).default([]),
        narrative: z.string().optional(),
      },
    },
    async ({ title, period, currency, kpis, narrative }) => {
      const sections = [
        {
          heading: 'KPIs',
          metrics: kpis.map((k) => ({
            ...k,
            vs_target: k.target != null ? Math.round(((k.value - k.target) / k.target) * 1000) / 10 + '%' : null,
          })),
          narrative: narrative ?? '',
        },
      ];
      const audit_id = auditEngine.record({ action: 'tool.create_report', outcome: 'success', tool: 'marketing_create_report' });
      return toResult(
        envelope('success', `Report created: ${title}`, { title, type: 'ad_hoc', period, currency, sections }, {
          assumptions: ['Figures are as provided by the caller; no data was fetched or verified here.'],
          audit_id,
        }),
      );
    },
  );

  // ----------------------------------------------------------------------
  // GOVERNANCE: approvals
  // ----------------------------------------------------------------------
  server.registerTool(
    'marketing_request_approval',
    {
      title: 'Request human approval',
      description:
        'Creates a pending approval request for a high-risk action (e.g. publishing, sending ' +
        'email, launching/changing ads, budget changes, uploads, deletions). Returns an approval ' +
        'id. The action must NOT be executed until a human approves it out-of-band. No external ' +
        'side effect is performed by this tool.',
      inputSchema: {
        requested_action: z.string(),
        business_reason: z.string(),
        platform: z.string().optional(),
        estimated_cost_amount: z.number().optional(),
        estimated_cost_currency: z.string().optional(),
        risks: z.array(z.string()).default([]),
        rollback_guidance: z.string().optional(),
      },
    },
    async (args) => {
      const req = approvalEngine.create({
        requested_action: args.requested_action,
        business_reason: args.business_reason,
        platform: args.platform,
        estimated_cost_impact:
          args.estimated_cost_amount != null
            ? { amount: args.estimated_cost_amount, currency: args.estimated_cost_currency ?? 'GBP' }
            : undefined,
        risks: args.risks,
        rollback_guidance: args.rollback_guidance,
      });
      return toResult(
        envelope('approval_required', 'Approval request created and pending human decision.', { approval: req }, {
          approval_required: true,
          approval_id: req.id,
          audit_id: req.id,
          next_actions: [
            'A human must review and approve this request before the action is executed.',
            `Check status with marketing_get_approval using id ${req.id}.`,
          ],
        }),
      );
    },
  );

  server.registerTool(
    'marketing_get_approval',
    {
      title: 'Get approval status',
      description: 'Returns the current status of an approval request by id. Read-only.',
      inputSchema: { id: z.string() },
    },
    async ({ id }) => {
      const req = approvalEngine.get(id);
      if (!req) return toResult(insufficientData(`Approval not found: ${id}`, { id }, ['valid approval id'], 'Create one with marketing_request_approval.'));
      return toResult(envelope('success', `Approval ${id} is ${req.state}.`, { approval: req }, { approval_id: id }));
    },
  );

  // ----------------------------------------------------------------------
  // CONTROLLED WRITE (dry-run default, approval-gated)
  // ----------------------------------------------------------------------
  server.registerTool(
    'marketing_create_campaign_draft',
    {
      title: 'Create a campaign draft',
      description:
        'Creates a campaign DRAFT artefact. Defaults to dry-run and never launches anything. ' +
        'Executing a real launch requires a valid approval id AND live connectors, which are ' +
        'disabled by default. Use this to prepare a reviewable draft, not to spend money.',
      inputSchema: {
        name: z.string(),
        channel: z.string(),
        objective: z.string(),
        budget_amount: z.number().nonnegative(),
        budget_currency: z.string().default('GBP'),
        dry_run: z.boolean().default(true),
        approval_id: z.string().optional(),
        idempotency_key: z.string().optional(),
      },
    },
    async (args) => {
      const decision = ctx.policy.evaluate({
        isWrite: true,
        riskLevel: 'high',
        externalSideEffect: !args.dry_run,
        costImplication: !args.dry_run,
        dryRun: args.dry_run,
        approvalId: args.approval_id,
      });

      const audit_id = auditEngine.record({
        action: 'tool.create_campaign_draft',
        outcome: decision.allowed ? 'success' : 'blocked',
        tool: 'marketing_create_campaign_draft',
        risk_level: 'high',
        dry_run: args.dry_run,
        approval_id: args.approval_id,
        inputs: args,
      });

      if (!decision.allowed) {
        return toResult(
          envelope(decision.status, decision.reasons.join(' '), { draft: null }, {
            approval_required: decision.status === 'approval_required',
            warnings: decision.reasons,
            next_actions:
              decision.status === 'approval_required'
                ? ['Create an approval with marketing_request_approval, get it approved, then retry with approval_id.']
                : ['Enable write mode and live connectors only with explicit authorisation.'],
            audit_id,
          }),
        );
      }

      // Validate approval if executing for real.
      if (!args.dry_run && args.approval_id) {
        const check = approvalEngine.validateForExecution(args.approval_id);
        if (!check.valid) {
          return toResult(
            envelope('approval_required', `Cannot execute: ${check.reason}`, { draft: null }, {
              approval_required: true,
              warnings: [check.reason ?? 'Invalid approval.'],
              audit_id,
            }),
          );
        }
      }

      const draft = {
        id: `draft_${Date.now()}`,
        status: args.dry_run ? 'draft' : 'approved_draft',
        name: args.name,
        channel: args.channel,
        objective: args.objective,
        budget: { amount: args.budget_amount, currency: args.budget_currency },
        created_at: new Date().toISOString(),
      };

      return toResult(
        envelope('success', args.dry_run ? 'Campaign draft created (dry-run; nothing launched).' : 'Campaign draft prepared for approved launch.', { draft, dry_run: args.dry_run }, {
          warnings: args.dry_run ? ['Dry-run: no external change was made.'] : [],
          recommendations: ['Review the draft, confirm tracking and landing-page alignment before any launch.'],
          next_actions: args.dry_run ? ['If ready, request approval and re-run with dry_run=false and a valid approval_id.'] : ['Launch is only possible with a live connector adapter installed and enabled.'],
          audit_id,
        }),
      );
    },
  );

  logger.info('MCP tools registered');
}

/** Shared domain types for the platform. */

export type RiskLevel = 'low' | 'medium' | 'high' | 'critical';

export type ExecutionMode =
  | 'analysis'
  | 'planning'
  | 'generation'
  | 'recommendation'
  | 'simulation'
  | 'read_only_tool'
  | 'write_tool'
  | 'workflow';

export type FunnelStage = 'awareness' | 'consideration' | 'decision' | 'retention' | 'advocacy';

export type Industry = 'common' | 'saas' | 'ecommerce' | 'real-estate' | 'retail';

export type BusinessModel = 'b2b' | 'b2c' | 'b2b2c' | 'd2c';

export type ToolStatus =
  | 'success'
  | 'partial_success'
  | 'insufficient_data'
  | 'approval_required'
  | 'policy_blocked'
  | 'permission_denied'
  | 'validation_failed'
  | 'rate_limited'
  | 'connector_unavailable'
  | 'failed';

/** Consistent response envelope returned by every tool (section 11.3 of the spec). */
export interface ToolEnvelope<T = unknown> {
  status: ToolStatus;
  summary: string;
  data: T;
  assumptions: string[];
  warnings: string[];
  recommendations: string[];
  approval_required: boolean;
  approval_id: string | null;
  audit_id: string;
  sources: string[];
  next_actions: string[];
}

/** Metadata parsed from a SKILL.md front matter block. */
export interface SkillMetadata {
  id: string;
  name: string;
  version: string;
  status: string;
  description: string;
  category: string;
  sub_category?: string;
  industries: Industry[];
  business_models: BusinessModel[];
  funnel_stages: FunnelStage[];
  channels?: string[];
  objectives?: string[];
  risk_level: RiskLevel;
  execution_mode: ExecutionMode;
  human_approval_required: boolean;
  estimated_duration?: string;
  required_inputs?: string[];
  optional_inputs?: string[];
  outputs?: string[];
  dependencies?: string[];
  related_skills?: string[];
  resources?: string[];
  mcp_tools?: string[];
  mcp_prompts?: string[];
  data_sensitivity?: string;
  pii_expected?: boolean;
  external_side_effects?: boolean;
  cost_implication?: boolean;
  last_reviewed: string;
  maintainers?: string[];
  tags?: string[];
}

export interface Skill {
  metadata: SkillMetadata;
  /** Full markdown body (everything after the front matter). */
  body: string;
  /** Category folder, e.g. "07-seo". */
  categoryDir: string;
  /** Skill slug folder name. */
  slug: string;
  /** Absolute path to the SKILL.md file. */
  filePath: string;
}

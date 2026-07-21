import type { AppConfig } from '../utils/config.js';
import { SkillRegistry } from '../core/skill-registry.js';
import { WorkflowEngine } from '../core/workflow-engine.js';
import { ConnectorRegistry } from '../connectors/registry.js';
import { PolicyEngine } from '../core/policy-engine.js';
import { ApprovalEngine } from '../core/approval-engine.js';

/** Shared runtime context passed to all MCP registrations. */
export interface ServerContext {
  config: AppConfig;
  skills: SkillRegistry;
  workflows: WorkflowEngine;
  connectors: ConnectorRegistry;
  policy: PolicyEngine;
  approvals: ApprovalEngine;
}

/** Build and initialise the server context (loads skills and workflows). */
export async function createContext(config: AppConfig): Promise<ServerContext> {
  const skills = new SkillRegistry();
  await skills.load(config.paths.skillsDir);

  const workflows = new WorkflowEngine();
  await workflows.load(config.paths.workflowsDir);

  const connectors = new ConnectorRegistry(config.connectors.enableLive);

  const policy = new PolicyEngine({
    readOnly: config.safety.readOnly,
    requireApproval: config.safety.requireApproval,
    writeDryRunDefault: config.safety.writeDryRunDefault,
  });

  const approvals = new ApprovalEngine();

  return { config, skills, workflows, connectors, policy, approvals };
}

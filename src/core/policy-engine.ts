import type { RiskLevel } from './types.js';

export interface PolicyDecision {
  allowed: boolean;
  status: 'success' | 'policy_blocked' | 'permission_denied' | 'approval_required';
  requiresApproval: boolean;
  reasons: string[];
}

export interface PolicyContext {
  readOnly: boolean;
  requireApproval: boolean;
  writeDryRunDefault: boolean;
}

/**
 * Central policy engine. Given an action's characteristics and the runtime
 * safety context, it decides whether the action may proceed, whether approval
 * is required, and why. This centralises the human-in-the-loop controls.
 */
export class PolicyEngine {
  constructor(private readonly ctx: PolicyContext) {}

  evaluate(params: {
    isWrite: boolean;
    riskLevel: RiskLevel;
    externalSideEffect: boolean;
    costImplication: boolean;
    dryRun: boolean;
    approvalId?: string | null;
  }): PolicyDecision {
    const reasons: string[] = [];

    // Read-only mode blocks all write actions outright.
    if (this.ctx.readOnly && params.isWrite && !params.dryRun) {
      return {
        allowed: false,
        status: 'permission_denied',
        requiresApproval: false,
        reasons: ['Server is in read-only mode; write actions are disabled.'],
      };
    }

    const highRisk = params.riskLevel === 'high' || params.riskLevel === 'critical';
    const needsApproval =
      this.ctx.requireApproval &&
      (highRisk || params.externalSideEffect || params.costImplication) &&
      !params.dryRun;

    if (needsApproval && !params.approvalId) {
      reasons.push(
        `Action requires human approval (risk=${params.riskLevel}` +
          `${params.externalSideEffect ? ', external side effect' : ''}` +
          `${params.costImplication ? ', incurs cost' : ''}).`,
      );
      return {
        allowed: false,
        status: 'approval_required',
        requiresApproval: true,
        reasons,
      };
    }

    if (params.dryRun && params.isWrite) {
      reasons.push('Dry-run: no external change will be made.');
    }

    return {
      allowed: true,
      status: 'success',
      requiresApproval: needsApproval,
      reasons,
    };
  }
}

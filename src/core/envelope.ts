import { generateId } from '../utils/ids.js';
import type { ToolEnvelope, ToolStatus } from './types.js';

/**
 * Build a consistent tool response envelope. Every tool returns this shape so
 * clients can reliably parse status, assumptions, warnings and next actions.
 */
export function envelope<T>(
  status: ToolStatus,
  summary: string,
  data: T,
  extras: Partial<Omit<ToolEnvelope<T>, 'status' | 'summary' | 'data'>> = {},
): ToolEnvelope<T> {
  return {
    status,
    summary,
    data,
    assumptions: extras.assumptions ?? [],
    warnings: extras.warnings ?? [],
    recommendations: extras.recommendations ?? [],
    approval_required: extras.approval_required ?? false,
    approval_id: extras.approval_id ?? null,
    audit_id: extras.audit_id ?? generateId('audit'),
    sources: extras.sources ?? [],
    next_actions: extras.next_actions ?? [],
  };
}

export function insufficientData<T>(
  summary: string,
  data: T,
  missing: string[],
  nextAction: string,
): ToolEnvelope<T> {
  return envelope('insufficient_data', summary, data, {
    warnings: [`Missing information: ${missing.join(', ')}`],
    next_actions: [nextAction],
  });
}

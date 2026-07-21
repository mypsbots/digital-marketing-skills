import { promises as fs } from 'node:fs';
import path from 'node:path';
import { parse as parseYaml } from 'yaml';
import { logger } from '../utils/logger.js';

export interface WorkflowStep {
  id: string;
  name: string;
  type: 'skill' | 'tool' | 'decision' | 'approval_gate' | 'checkpoint';
  ref?: string;
  approval_required?: boolean;
  [key: string]: unknown;
}

export interface WorkflowDefinition {
  id: string;
  name: string;
  version?: string;
  objective: string;
  industries?: string[];
  trigger: string;
  required_inputs?: string[];
  optional_inputs?: string[];
  preconditions?: string[];
  steps: WorkflowStep[];
  approval_gates?: string[];
  outputs?: string[];
  kpis?: string[];
  [key: string]: unknown;
}

/**
 * Loads workflow YAML definitions and provides a read-only plan of execution.
 * Actual step execution is delegated to skills/tools by the client; this engine
 * validates structure and produces an ordered, human-readable plan including
 * where approval gates sit.
 */
export class WorkflowEngine {
  private workflows = new Map<string, WorkflowDefinition>();

  async load(workflowsDir: string): Promise<void> {
    this.workflows.clear();
    let files: string[] = [];
    try {
      files = (await fs.readdir(workflowsDir)).filter((f) => f.endsWith('.yaml') || f.endsWith('.yml'));
    } catch {
      logger.warn('No workflows directory found', { workflowsDir });
      return;
    }
    for (const file of files) {
      try {
        const raw = await fs.readFile(path.join(workflowsDir, file), 'utf8');
        const def = parseYaml(raw) as WorkflowDefinition;
        if (def?.id && Array.isArray(def.steps)) {
          this.workflows.set(def.id, def);
        } else {
          logger.warn('Invalid workflow definition skipped', { file });
        }
      } catch (err) {
        logger.warn('Failed to parse workflow', { file, error: String(err) });
      }
    }
    logger.info('Workflow engine loaded', { count: this.workflows.size });
  }

  get(id: string): WorkflowDefinition | undefined {
    return this.workflows.get(id);
  }

  all(): WorkflowDefinition[] {
    return [...this.workflows.values()];
  }

  /** Produce an ordered execution plan with approval gates highlighted. */
  plan(id: string): { steps: Array<{ order: number; name: string; type: string; approval: boolean }> } | undefined {
    const wf = this.workflows.get(id);
    if (!wf) return undefined;
    return {
      steps: wf.steps.map((step, i) => ({
        order: i + 1,
        name: step.name,
        type: step.type,
        approval: step.type === 'approval_gate' || step.approval_required === true,
      })),
    };
  }
}

export const workflowEngine = new WorkflowEngine();

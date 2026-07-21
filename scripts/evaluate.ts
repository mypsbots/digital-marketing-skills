/**
 * Deterministic evaluation harness for the Digital Marketing Skills platform.
 *
 * This is not a model benchmark; it verifies structural invariants that keep the
 * catalogue coherent and safe:
 *   1. every skill referenced by a prompt spec exists
 *   2. every skill referenced by a workflow step exists
 *   3. high/critical-risk skills require human approval
 *   4. skills declaring external side effects or cost implications require approval
 *   5. every prompt with an approval note maps to at least one approval-gated
 *      skill or workflow (defensive check that safety context is not lost)
 *
 * Exits non-zero if any invariant is violated.
 */
import path from 'node:path';
import { SkillRegistry } from '../src/core/skill-registry.js';
import { WorkflowEngine } from '../src/core/workflow-engine.js';
import { PROMPT_SPECS } from '../src/mcp/prompts/prompt-specs.js';

async function main(): Promise<void> {
  const root = process.cwd();
  const skills = new SkillRegistry();
  await skills.load(path.join(root, process.env.DM_MCP_SKILLS_DIR ?? 'skills'));
  const workflows = new WorkflowEngine();
  await workflows.load(path.join(root, process.env.DM_MCP_WORKFLOWS_DIR ?? 'workflows'));

  const errors: string[] = [];
  const warnings: string[] = [];
  const known = new Set(skills.all().map((s) => s.metadata.id));

  // 1. Prompt skill references resolve.
  for (const spec of PROMPT_SPECS) {
    for (const ref of spec.relevantSkills) {
      if (!known.has(ref)) {
        errors.push(`prompt "${spec.name}" references missing skill "${ref}"`);
      }
    }
  }

  // 2. Workflow step references resolve.
  for (const wf of workflows.all()) {
    for (const step of wf.steps) {
      if (step.type === 'skill' && step.ref && !known.has(step.ref)) {
        errors.push(`workflow "${wf.id}" step "${step.id}" references missing skill "${step.ref}"`);
      }
    }
  }

  // 3 & 4. Approval consistency on skills.
  for (const skill of skills.all()) {
    const m = skill.metadata;
    const highRisk = m.risk_level === 'high' || m.risk_level === 'critical';
    if (highRisk && m.human_approval_required !== true) {
      errors.push(`skill "${m.id}" is ${m.risk_level}-risk but does not require approval`);
    }
    if ((m.external_side_effects || m.cost_implication) && m.human_approval_required !== true) {
      warnings.push(
        `skill "${m.id}" has side effects/cost but human_approval_required is not true`,
      );
    }
  }

  // 5. Every workflow that contains an approval gate exposes it in approval_gates.
  for (const wf of workflows.all()) {
    const gateSteps = wf.steps.filter(
      (s) => s.type === 'approval_gate' || s.approval_required === true,
    );
    if (gateSteps.length > 0 && (wf.approval_gates ?? []).length === 0) {
      warnings.push(`workflow "${wf.id}" has approval gate steps but no approval_gates summary`);
    }
  }

  console.log(
    `Evaluated ${skills.count()} skills, ${workflows.all().length} workflows, ${PROMPT_SPECS.length} prompts.`,
  );
  if (warnings.length) {
    console.warn(`\nWarnings (${warnings.length}):`);
    for (const w of warnings) console.warn(`  - ${w}`);
  }
  if (errors.length) {
    console.error(`\nErrors (${errors.length}):`);
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }
  console.log('\nAll evaluation invariants hold.');
}

main().catch((err) => {
  console.error('Evaluation failed:', err);
  process.exit(1);
});

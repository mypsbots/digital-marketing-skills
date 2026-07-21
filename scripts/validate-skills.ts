/**
 * Validates every SKILL.md in the skills directory:
 *  - required front-matter metadata and semantic version
 *  - risk/approval consistency
 *  - unique ids
 *  - presence of required body sections (methodology, decision rules, quality &
 *    compliance checklists, examples)
 *  - freshness (last_reviewed within the configured window)
 *
 * Exits with a non-zero status if any errors are found.
 */
import path from 'node:path';
import { loadAllSkills } from '../src/core/skill-loader.js';
import { validateSkillMetadata } from '../src/core/skill-loader.js';

const REQUIRED_SECTIONS = [
  /##\s+.*methodology/i,
  /##\s+.*decision rules/i,
  /##\s+.*quality checklist/i,
  /##\s+.*compliance checklist/i,
  /##\s+.*examples?/i,
];

const FRESHNESS_DAYS = Number.parseInt(process.env.DM_MCP_FRESHNESS_WINDOW_DAYS ?? '365', 10);

async function main(): Promise<void> {
  const skillsDir = path.resolve(process.cwd(), process.env.DM_MCP_SKILLS_DIR ?? 'skills');
  const skills = await loadAllSkills(skillsDir);

  const errors: string[] = [];
  const warnings: string[] = [];
  const seen = new Map<string, string>();

  if (skills.length === 0) {
    console.error(`No skills found in ${skillsDir}`);
    process.exit(1);
  }

  for (const skill of skills) {
    const where = path.relative(process.cwd(), skill.filePath);
    const metaErrors = validateSkillMetadata(skill.metadata);
    for (const e of metaErrors) errors.push(`${where}: ${e}`);

    if (skill.metadata.id) {
      if (seen.has(skill.metadata.id)) {
        errors.push(`${where}: duplicate id "${skill.metadata.id}" (also in ${seen.get(skill.metadata.id)})`);
      } else {
        seen.set(skill.metadata.id, where);
      }
    }

    for (const pattern of REQUIRED_SECTIONS) {
      if (!pattern.test(skill.body)) {
        warnings.push(`${where}: missing recommended section matching ${pattern}`);
      }
    }

    if (skill.metadata.last_reviewed) {
      const reviewed = new Date(skill.metadata.last_reviewed).getTime();
      const ageDays = (Date.now() - reviewed) / 86_400_000;
      if (ageDays > FRESHNESS_DAYS) {
        warnings.push(`${where}: last_reviewed is ${Math.round(ageDays)} days old (> ${FRESHNESS_DAYS}).`);
      }
    }
  }

  console.log(`Validated ${skills.length} skill(s).`);
  if (warnings.length) {
    console.warn(`\nWarnings (${warnings.length}):`);
    for (const w of warnings) console.warn(`  - ${w}`);
  }
  if (errors.length) {
    console.error(`\nErrors (${errors.length}):`);
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }
  console.log('\nAll skills valid.');
}

main().catch((err) => {
  console.error('Validation failed:', err);
  process.exit(1);
});

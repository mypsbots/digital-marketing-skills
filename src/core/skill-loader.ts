import { promises as fs } from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import type { Skill, SkillMetadata } from './types.js';
import { logger } from '../utils/logger.js';

/**
 * Recursively find all SKILL.md files under a directory.
 */
async function findSkillFiles(dir: string): Promise<string[]> {
  const results: string[] = [];
  let entries: import('node:fs').Dirent[];
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return results;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...(await findSkillFiles(full)));
    } else if (entry.isFile() && entry.name === 'SKILL.md') {
      results.push(full);
    }
  }
  return results;
}

/** Minimal validation of required metadata fields. Returns a list of errors. */
export function validateSkillMetadata(meta: Partial<SkillMetadata>): string[] {
  const errors: string[] = [];
  const required: (keyof SkillMetadata)[] = [
    'id',
    'name',
    'version',
    'status',
    'description',
    'category',
    'industries',
    'business_models',
    'funnel_stages',
    'risk_level',
    'execution_mode',
    'human_approval_required',
    'last_reviewed',
  ];
  for (const field of required) {
    if (meta[field] === undefined || meta[field] === null) {
      errors.push(`Missing required field: ${field}`);
    }
  }
  if (meta.version && !/^\d+\.\d+\.\d+$/.test(meta.version)) {
    errors.push(`Invalid semantic version: ${meta.version}`);
  }
  if (meta.last_reviewed && !/^\d{4}-\d{2}-\d{2}$/.test(meta.last_reviewed)) {
    errors.push(`Invalid last_reviewed date (expected YYYY-MM-DD): ${meta.last_reviewed}`);
  }
  const validRisk = ['low', 'medium', 'high', 'critical'];
  if (meta.risk_level && !validRisk.includes(meta.risk_level)) {
    errors.push(`Invalid risk_level: ${meta.risk_level}`);
  }
  if (
    (meta.risk_level === 'high' || meta.risk_level === 'critical') &&
    meta.human_approval_required !== true
  ) {
    errors.push(
      `Inconsistent approval: risk_level=${meta.risk_level} requires human_approval_required=true`,
    );
  }
  return errors;
}

/** Load and parse a single SKILL.md file. */
export async function loadSkillFile(filePath: string): Promise<Skill> {
  const raw = await fs.readFile(filePath, 'utf8');
  const parsed = matter(raw);
  const meta = parsed.data as SkillMetadata;
  // YAML parses unquoted ISO dates (e.g. last_reviewed: 2026-07-21) into Date
  // objects; normalise them back to YYYY-MM-DD strings for consistent handling.
  const rawReviewed = (meta as unknown as Record<string, unknown>).last_reviewed;
  if (rawReviewed instanceof Date) {
    meta.last_reviewed = rawReviewed.toISOString().slice(0, 10);
  }
  const slug = path.basename(path.dirname(filePath));
  const categoryDir = path.basename(path.dirname(path.dirname(filePath)));
  return {
    metadata: meta,
    body: parsed.content.trim(),
    categoryDir,
    slug,
    filePath,
  };
}

/** Load every skill under the skills directory. Invalid skills are logged and skipped. */
export async function loadAllSkills(skillsDir: string): Promise<Skill[]> {
  const files = await findSkillFiles(skillsDir);
  const skills: Skill[] = [];
  for (const file of files) {
    try {
      const skill = await loadSkillFile(file);
      const errors = validateSkillMetadata(skill.metadata);
      if (errors.length > 0) {
        logger.warn('Skipping skill with invalid metadata', { file, errors });
        continue;
      }
      skills.push(skill);
    } catch (err) {
      logger.warn('Failed to load skill', { file, error: String(err) });
    }
  }
  return skills;
}

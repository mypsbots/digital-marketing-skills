import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { loadAllSkills, validateSkillMetadata } from '../src/core/skill-loader.js';

const SKILLS_DIR = path.resolve(process.cwd(), 'skills');

describe('validateSkillMetadata', () => {
  it('reports missing required fields', () => {
    const errors = validateSkillMetadata({});
    expect(errors.some((e) => e.includes('id'))).toBe(true);
    expect(errors.some((e) => e.includes('last_reviewed'))).toBe(true);
  });

  it('rejects an invalid semantic version', () => {
    const errors = validateSkillMetadata({ version: '1.0' });
    expect(errors.some((e) => e.includes('semantic version'))).toBe(true);
  });

  it('requires approval for high-risk skills', () => {
    const errors = validateSkillMetadata({ risk_level: 'high', human_approval_required: false });
    expect(errors.some((e) => e.includes('Inconsistent approval'))).toBe(true);
  });
});

describe('loadAllSkills (repository skills)', () => {
  it('loads all skills with valid, unique ids', async () => {
    const skills = await loadAllSkills(SKILLS_DIR);
    expect(skills.length).toBeGreaterThan(0);

    for (const skill of skills) {
      expect(validateSkillMetadata(skill.metadata)).toHaveLength(0);
      expect(skill.metadata.last_reviewed).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }

    const ids = skills.map((s) => s.metadata.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

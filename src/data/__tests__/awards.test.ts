import { describe, expect, it } from 'vitest';

import awards from '../resume/awards';

describe('awards data', () => {
  it('exports an array of awards', () => {
    expect(Array.isArray(awards)).toBe(true);
    expect(awards.length).toBeGreaterThan(0);
  });

  it('each award has required properties', () => {
    for (const award of awards) {
      expect(award).toHaveProperty('title');
      expect(award).toHaveProperty('issuer');
      expect(award).toHaveProperty('year');

      expect(typeof award.title).toBe('string');
      expect(typeof award.issuer).toBe('string');
      expect(typeof award.year).toBe('number');
    }
  });

  it('award years are reasonable (between 1950 and current year + 10)', () => {
    const currentYear = new Date().getFullYear();

    for (const award of awards) {
      expect(award.year).toBeGreaterThanOrEqual(1950);
      expect(award.year).toBeLessThanOrEqual(currentYear + 10);
    }
  });

  it('each award has a non-empty title and issuer', () => {
    for (const award of awards) {
      expect(award.title.trim().length).toBeGreaterThan(0);
      expect(award.issuer.trim().length).toBeGreaterThan(0);
    }
  });

  it('description is a string when present', () => {
    for (const award of awards) {
      if (award.description !== undefined) {
        expect(typeof award.description).toBe('string');
      }
    }
  });

  it('has unique title + issuer combinations', () => {
    const keys = awards.map((a) => `${a.title}::${a.issuer}`);
    const uniqueKeys = new Set(keys);

    expect(uniqueKeys.size).toBe(keys.length);
  });
});

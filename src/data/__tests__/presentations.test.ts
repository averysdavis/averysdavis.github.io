import { describe, expect, it } from 'vitest';

import presentations from '../presentations';

describe('presentations data', () => {
  it('exports an array of presentation items', () => {
    expect(Array.isArray(presentations)).toBe(true);
  });

  it('each item has required properties', () => {
    for (const item of presentations) {
      expect(item).toHaveProperty('title');
      expect(item).toHaveProperty('url');
      expect(item).toHaveProperty('date');
      expect(item).toHaveProperty('description');

      expect(typeof item.title).toBe('string');
      expect(typeof item.url).toBe('string');
      expect(typeof item.date).toBe('string');
      expect(typeof item.description).toBe('string');
    }
  });

  it('titles are non-empty', () => {
    for (const item of presentations) {
      expect(item.title.trim().length).toBeGreaterThan(0);
    }
  });

  it('descriptions are non-empty', () => {
    for (const item of presentations) {
      expect(item.description.trim().length).toBeGreaterThan(0);
    }
  });

  it('urls are valid absolute links or root-relative paths', () => {
    const urlRegex = /^(https?:\/\/.+|\/\S+)$/;

    for (const item of presentations) {
      expect(item.url).toMatch(urlRegex);
    }
  });

  it('dates are valid when non-empty', () => {
    for (const item of presentations) {
      if (item.date && item.date.trim().length > 0) {
        const date = new Date(item.date);
        expect(date.toString()).not.toBe('Invalid Date');
      }
    }
  });

  it('has unique titles', () => {
    const titles = presentations.map((p) => p.title);
    const uniqueTitles = new Set(titles);

    expect(uniqueTitles.size).toBe(titles.length);
  });

  it('has unique urls', () => {
    const urls = presentations.map((p) => p.url);
    const uniqueUrls = new Set(urls);

    expect(uniqueUrls.size).toBe(urls.length);
  });
});

import { describe, expect, it, vi } from 'vitest';

import {
  compareWritingItems,
  getWritingItems,
  type WritingItem,
} from '../writing';

// A site-relative entry (a scrollytelling story on a sibling Pages site),
// so the standalone path is covered whether or not one is listed for real.
vi.mock('@/data/writing', () => ({
  default: [
    {
      title: 'Example Story',
      url: '/scrollytelling/example/',
      date: '2026-01-01',
      description: 'A scrollytelling fixture.',
    },
  ],
}));

describe('getWritingItems', () => {
  it('merges published local posts and external writing newest first', () => {
    const items = getWritingItems();

    expect(items.some((item) => !item.isExternal)).toBe(true);

    const dated = items.filter((item) => item.date);
    expect(
      dated.every(
        (item, index) =>
          index === 0 || dated[index - 1]!.date.localeCompare(item.date) >= 0,
      ),
    ).toBe(true);
  });

  it('uses canonical trailing-slash URLs for local posts', () => {
    const localItems = getWritingItems().filter((item) => !item.isExternal);

    expect(localItems.length).toBeGreaterThan(0);
    expect(localItems.every((item) => item.url.endsWith('/'))).toBe(true);
    expect(localItems.every((item) => item.source === 'On this site')).toBe(
      true,
    );
  });

  it('treats site-relative entries as on-site pages outside the Next app', () => {
    const standalone = getWritingItems().filter((item) =>
      item.url.startsWith('/scrollytelling/'),
    );

    expect(standalone.length).toBeGreaterThan(0);
    for (const item of standalone) {
      expect(item).toMatchObject({
        isExternal: false,
        source: 'On this site',
        newTab: false,
        standalone: true,
      });
    }
  });

  it('orders equal and undated entries deterministically', () => {
    const item = (
      title: string,
      date: string,
      url = `https://example.com/${title.toLowerCase()}`,
      pinned = false,
    ): WritingItem => ({
      title,
      date,
      url,
      description: '',
      isExternal: true,
      source: 'Example',
      pinned,
      newTab: true,
      standalone: false,
    });

    expect(
      [item('Zulu', ''), item('Alpha', '')].sort(compareWritingItems),
    ).toEqual([item('Alpha', ''), item('Zulu', '')]);
    expect(
      [item('Zulu', '2026-01-01'), item('Alpha', '2026-01-01')].sort(
        compareWritingItems,
      ),
    ).toEqual([item('Alpha', '2026-01-01'), item('Zulu', '2026-01-01')]);
  });
});

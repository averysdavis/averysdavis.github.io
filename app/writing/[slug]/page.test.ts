import { describe, expect, it, vi } from 'vitest';

import { SITE_URL } from '@/lib/utils';

import { generateMetadata } from './page';

/**
 * No real post currently carries a custom `image`, so the "explicit article
 * image" behavior is exercised against a fixture rather than real content.
 * The fixture points at a real file (`public/images/me.jpg`) so
 * `readImageSize` reads real, correct dimensions rather than needing its own
 * mock.
 */
vi.mock('@/lib/posts', () => ({
  getPostBySlug: (slug: string) =>
    slug === 'fixture-post'
      ? {
          slug: 'fixture-post',
          title: 'Fixture Post',
          date: '2026-01-01',
          description: 'A fixture post for testing explicit image metadata.',
          content: '',
          image: '/images/me.jpg',
          imageAlt: 'A test portrait.',
        }
      : null,
  getPostSlugs: () => ['fixture-post'],
}));

describe('writing post metadata', () => {
  it('uses a trailing-slash canonical URL for posts', async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({ slug: 'fixture-post' }),
    });

    expect(metadata.openGraph?.url).toBe(`${SITE_URL}/writing/fixture-post/`);
  });

  it('uses an explicitly selected article image for social metadata', async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({ slug: 'fixture-post' }),
    });

    expect(metadata.openGraph?.images).toEqual([
      {
        url: `${SITE_URL}/images/me.jpg`,
        width: 1198,
        height: 1198,
        alt: 'A test portrait.',
      },
    ]);
    expect(metadata.twitter?.images).toEqual(metadata.openGraph?.images);
  });
});

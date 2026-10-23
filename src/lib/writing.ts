import presentations from '@/data/presentations';
import externalWriting from '@/data/writing';
import { getAllPosts } from '@/lib/posts';

export interface WritingItem {
  title: string;
  url: string;
  date: string;
  description: string;
  isExternal: boolean;
  source: string;
  /** Features this item in the homepage's "Selected Writings" list. */
  pinned: boolean;
  /** Whether an external-styled item opens in a new tab. PDFs open in place. */
  newTab: boolean;
  /**
   * Lives on this domain but outside the Next app (e.g. a Quarto project
   * site), so it needs a full page load rather than a client-side `<Link>`.
   */
  standalone: boolean;
}

/** A site-relative path served by a separate Pages site on this domain. */
function isStandalone(url: string): boolean {
  return url.startsWith('/');
}

/** Newest-first order; undated guides sort by title at the end. */
export function compareWritingItems(a: WritingItem, b: WritingItem): number {
  if (!a.date && !b.date) {
    return a.title.localeCompare(b.title) || a.url.localeCompare(b.url);
  }
  if (!a.date) return 1;
  if (!b.date) return -1;

  return (
    b.date.localeCompare(a.date) ||
    a.title.localeCompare(b.title) ||
    a.url.localeCompare(b.url)
  );
}

function externalSource(url: string): string {
  const hostname = new URL(url).hostname.replace(/^www\./, '');

  if (hostname === 'promptfoo.dev') return 'Promptfoo';
  if (hostname === 'linkedin.com') return 'LinkedIn';

  return hostname;
}

/** Published on-site posts and selected external writing, newest first. */
export function getWritingItems(): WritingItem[] {
  const internal: WritingItem[] = getAllPosts().map((post) => ({
    title: post.title,
    url: `/writing/${post.slug}/`,
    date: post.date,
    description: post.description,
    isExternal: false,
    source: 'On this site',
    pinned: Boolean(post.pinned),
    newTab: false,
    standalone: false,
  }));
  const external: WritingItem[] = externalWriting.map((item) => {
    const standalone = isStandalone(item.url);

    return {
      ...item,
      isExternal: !standalone,
      source: standalone ? 'On this site' : externalSource(item.url),
      pinned: Boolean(item.pinned),
      newTab: !standalone,
      standalone,
    };
  });

  return [...internal, ...external].sort(compareWritingItems);
}

/** PDFs and similar; styled like external links but open in the same tab. */
export function getPresentationItems(): WritingItem[] {
  return presentations
    .map((item) => ({
      ...item,
      isExternal: true,
      source: 'PDF',
      pinned: Boolean(item.pinned),
      newTab: false,
      standalone: false,
    }))
    .sort(compareWritingItems);
}

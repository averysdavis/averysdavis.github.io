import type { Metadata } from 'next';
import Link from 'next/link';

import { SchemaGraph } from '@/components/Schema';
import Hero from '@/components/Template/Hero';
import PageWrapper from '@/components/Template/PageWrapper';
import { HOME_URL, profilePageNode } from '@/lib/schema';
import {
  AUTHOR_NAME,
  formatDate,
  SITE_DESCRIPTION,
  SITE_URL,
} from '@/lib/utils';
import {
  compareWritingItems,
  getPresentationItems,
  getWritingItems,
} from '@/lib/writing';

export const metadata: Metadata = {
  description: SITE_DESCRIPTION,
  // The homepage builds its openGraph in the root layout, so it only needs
  // the canonical here. `trailingSlash: true` makes `/` the canonical form.
  alternates: { canonical: `${SITE_URL}/` },
};

export default function HomePage() {
  const recentWriting = [...getWritingItems(), ...getPresentationItems()]
    .filter((item) => item.pinned && item.date)
    .sort(compareWritingItems)
    .slice(0, 6);

  return (
    <PageWrapper mainClassName="page-main--hero">
      <SchemaGraph
        nodes={[profilePageNode({ url: HOME_URL, name: AUTHOR_NAME })]}
      />
      <Hero />
      <section className="home-writing" aria-labelledby="home-writing-title">
        <div className="home-writing-header">
          <div>
            <h2 id="home-writing-title">Selected Writings</h2>
          </div>
          <Link href="/writing/" className="home-writing-all">
            View all
          </Link>
        </div>
        <div className="home-writing-list">
          {recentWriting.map((item) => {
            const content = (
              <>
                <span className="home-writing-meta">
                  {formatDate(item.date)}
                  {item.source === 'PDF' && (
                    <span className="home-writing-pdf-mark"> · PDF</span>
                  )}
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </>
            );

            return item.isExternal ? (
              <a
                key={item.url}
                href={item.url}
                {...(item.newTab
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="home-writing-item"
              >
                {content}
                {item.newTab && (
                  <span className="sr-only"> (opens in a new tab)</span>
                )}
              </a>
            ) : (
              <Link
                key={item.url}
                href={item.url}
                className="home-writing-item"
              >
                {content}
              </Link>
            );
          })}
        </div>
      </section>
    </PageWrapper>
  );
}

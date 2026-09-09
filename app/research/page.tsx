import type { Metadata } from 'next';

import Cell from '@/components/Projects/Cell';
import { SchemaGraph } from '@/components/Schema';
import PageWrapper from '@/components/Template/PageWrapper';
import data from '@/data/research';
import { createPageMetadata } from '@/lib/metadata';
import {
  breadcrumbNode,
  collectionPageNode,
  HOME_URL,
  SITE_URL,
} from '@/lib/schema';
import { AUTHOR_NAME } from '@/lib/utils';

const RESEARCH_URL = `${SITE_URL}/research/`;

const RESEARCH_DESCRIPTION = `Research and academic work from ${AUTHOR_NAME}.`;

export const metadata: Metadata = createPageMetadata({
  title: 'Research',
  description: RESEARCH_DESCRIPTION,
  path: '/research/',
});

export default function ResearchPage() {
  const inProgressResearch = data.filter((r) => r.inProgress);
  const completeResearch = data.filter((r) => !r.inProgress);

  return (
    <PageWrapper>
      <SchemaGraph
        nodes={[
          collectionPageNode({
            url: RESEARCH_URL,
            name: 'Research',
            description: RESEARCH_DESCRIPTION,
            hasBreadcrumb: true,
          }),
          breadcrumbNode(RESEARCH_URL, [
            { name: 'Home', url: HOME_URL },
            { name: 'Research', url: RESEARCH_URL },
          ]),
        ]}
      />
      <section className="projects-page">
        <header className="projects-header">
          <h1 className="page-title">Research</h1>
          <p className="page-subtitle">Research and academic work</p>
        </header>

        {inProgressResearch.length > 0 && (
          <section className="projects-featured">
            <h2 className="projects-section-title">In Progress</h2>
            <div className="projects-grid projects-grid--featured">
              {inProgressResearch.map((item) => (
                <Cell data={item} key={item.title} />
              ))}
            </div>
          </section>
        )}

        {completeResearch.length > 0 && (
          <section className="projects-other">
            <h2 className="projects-section-title">Complete</h2>
            <div className="projects-grid">
              {completeResearch.map((item) => (
                <Cell data={item} key={item.title} />
              ))}
            </div>
          </section>
        )}
      </section>
    </PageWrapper>
  );
}

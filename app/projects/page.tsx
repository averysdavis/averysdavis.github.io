import type { Metadata } from 'next';

import Cell from '@/components/Projects/Cell';
import { SchemaGraph } from '@/components/Schema';
import PageWrapper from '@/components/Template/PageWrapper';
import data from '@/data/projects';
import { createPageMetadata } from '@/lib/metadata';
import {
  breadcrumbNode,
  collectionPageNode,
  HOME_URL,
  SITE_URL,
} from '@/lib/schema';
import { AUTHOR_NAME } from '@/lib/utils';

const PROJECTS_URL = `${SITE_URL}/projects/`;

const PROJECTS_DESCRIPTION = `Projects and experiments from ${AUTHOR_NAME}.`;

export const metadata: Metadata = createPageMetadata({
  title: 'Projects',
  description: PROJECTS_DESCRIPTION,
  path: '/projects/',
});

export default function ProjectsPage() {
  const inProgressProjects = data.filter((p) => p.inProgress);
  const completeProjects = data.filter((p) => !p.inProgress);

  return (
    <PageWrapper>
      <SchemaGraph
        nodes={[
          collectionPageNode({
            url: PROJECTS_URL,
            name: 'Projects',
            description: PROJECTS_DESCRIPTION,
            hasBreadcrumb: true,
          }),
          breadcrumbNode(PROJECTS_URL, [
            { name: 'Home', url: HOME_URL },
            { name: 'Projects', url: PROJECTS_URL },
          ]),
        ]}
      />
      <section className="projects-page">
        <header className="projects-header">
          <h1 className="page-title">Projects</h1>
        </header>

        {inProgressProjects.length > 0 && (
          <section className="projects-featured">
            <h2 className="projects-section-title">In Progress</h2>
            <div className="projects-grid projects-grid--featured">
              {inProgressProjects.map((project) => (
                <Cell data={project} key={project.title} />
              ))}
            </div>
          </section>
        )}

        {completeProjects.length > 0 && (
          <section className="projects-other">
            <h2 className="projects-section-title">Complete</h2>
            <div className="projects-grid">
              {completeProjects.map((project) => (
                <Cell data={project} key={project.title} />
              ))}
            </div>
          </section>
        )}
      </section>
    </PageWrapper>
  );
}

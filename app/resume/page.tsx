import type { Metadata } from 'next';

import Awards from '@/components/Resume/Awards';
import Education from '@/components/Resume/Education';
import Experience from '@/components/Resume/Experience';
import ResumeNav from '@/components/Resume/ResumeNav';
import Skills from '@/components/Resume/Skills';
import PageWrapper from '@/components/Template/PageWrapper';
import profile from '@/data/profile.json';
import awards from '@/data/resume/awards';
import degrees from '@/data/resume/degrees';
import { categories, skills } from '@/data/resume/skills';
import work from '@/data/resume/work';
import { createPageMetadata } from '@/lib/metadata';
import { AUTHOR_NAME, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = createPageMetadata({
  title: 'Resume',
  description: `${AUTHOR_NAME}'s Resume. iGEM, NASA GeneLab, Stanford Deliberative Democracy Lab, Khan Lab School.`,
  path: '/resume/',
});

export default function ResumePage() {
  return (
    <PageWrapper>
      <section className="resume-page">
        <header className="resume-header">
          <h1 className="resume-title">Resume</h1>
          <p className="resume-summary">
            I am a senior at Khan Lab School focused on synthetic biology,
            engineering, and Computer Science. I lead the KhanLab-BayArea iGEM
            team and my school's Speech and Debate team. I have research
            experience through NASA GeneLab, Stanford Deliberative Democracy
            Lab, and UCLA.
          </p>
          {/* Print-only, but real markup rather than CSS `content`, so it is
              selectable, linkable, and reads from the shared profile. The
              screen layout carries these in the footer, which print hides. */}
          <address className="resume-print-contact">
            <a href={`${SITE_URL}/`}>{SITE_URL.replace(/^https?:\/\//, '')}</a>
            <span aria-hidden="true"> · </span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span aria-hidden="true"> · </span>
            <a href="https://github.com/averysdavis">github.com/averysdavis</a>
          </address>
        </header>

        <ResumeNav />

        <div className="resume-content">
          <section id="experience" className="resume-section">
            <Experience data={work} />
          </section>

          <section id="awards" className="resume-section">
            <Awards data={awards} />
          </section>

          <section id="education" className="resume-section">
            <Education data={degrees} />
          </section>

          <section id="skills" className="resume-section">
            <Skills skills={skills} categories={categories} />
          </section>
        </div>
      </section>
    </PageWrapper>
  );
}

import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import Awards from '@/components/Resume/Awards';
import Education from '@/components/Resume/Education';
import Experience from '@/components/Resume/Experience';
import Skills from '@/components/Resume/Skills';
import awards from '@/data/resume/awards';
import degrees from '@/data/resume/degrees';
import { categories, skills } from '@/data/resume/skills';
import work from '@/data/resume/work';

const SECTIONS = ['experience', 'awards', 'education', 'skills'];

/**
 * The section components used to render their own `<div class="link-to" id>`
 * alongside the `<section id>` wrappers on the page, so every anchor on the
 * resume existed twice. Duplicate ids are invalid and make `#skills` ambiguous.
 */
function renderResumeSections() {
  return renderToStaticMarkup(
    <>
      <section id="experience">
        <Experience data={work} />
      </section>
      <section id="awards">
        <Awards data={awards} />
      </section>
      <section id="education">
        <Education data={degrees} />
      </section>
      <section id="skills">
        <Skills skills={skills} categories={categories} />
      </section>
    </>,
  );
}

describe('resume section anchors', () => {
  const html = renderResumeSections();

  it.each(SECTIONS)('declares #%s exactly once', (id) => {
    const occurrences = html.split(`id="${id}"`).length - 1;

    expect(occurrences).toBe(1);
  });

  it('emits no duplicate ids at all', () => {
    const ids = Array.from(html.matchAll(/id="([^"]+)"/g)).map((m) => m[1]);
    const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);

    expect(duplicates).toEqual([]);
  });

  it('opens each section with a level-2 heading', () => {
    // h1 is the page title, so sections are h2 and entries within them h3.
    // The old markup jumped straight from h1 to h3. Counted against the
    // section list rather than a literal, so adding one cannot drift.
    expect(html.match(/<h2[ >]/g)).toHaveLength(SECTIONS.length);
    expect(html).not.toMatch(/<h4[ >]/);
  });
});

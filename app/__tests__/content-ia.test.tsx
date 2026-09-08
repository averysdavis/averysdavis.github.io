import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import presentationsData from '@/data/presentations';
import {
  compareWritingItems,
  getPresentationItems,
  getWritingItems,
} from '@/lib/writing';
import HomePage from '../page';
import WritingPage from '../writing/page';

describe('writing information architecture', () => {
  it('surfaces up to the six newest dated items on the homepage, presentations included', () => {
    const expected = [...getWritingItems(), ...getPresentationItems()]
      .filter((item) => item.date)
      .sort(compareWritingItems)
      .slice(0, 6);

    const { container } = render(<HomePage />);
    const section = screen.getByRole('region', { name: 'Selected writings' });
    const cards = container.querySelectorAll('.home-writing-item');

    expect(cards).toHaveLength(expected.length);
    expect(
      [...cards].map((card) => card.querySelector('h3')?.textContent),
    ).toEqual(expected.map((item) => item.title));
    expect(
      within(section).getByRole('link', { name: 'View all' }),
    ).toHaveAttribute('href', '/writing');
  });

  it('marks presentations as PDFs on the homepage and opens them in place', () => {
    // Only presentations that actually make the homepage's top 6 (pinned
    // essays can crowd out an unpinned presentation) should be checked here.
    const expectedOnHome = [...getWritingItems(), ...getPresentationItems()]
      .filter((item) => item.date)
      .sort(compareWritingItems)
      .slice(0, 6)
      .filter((item) => item.source === 'PDF');

    expect(expectedOnHome.length).toBeGreaterThan(0);

    const { container } = render(<HomePage />);
    const presentationCards = [
      ...container.querySelectorAll('.home-writing-item'),
    ].filter((el) =>
      expectedOnHome.some((item) => el.getAttribute('href') === item.url),
    );

    expect(presentationCards).toHaveLength(expectedOnHome.length);
    presentationCards.forEach((card) => {
      expect(card.querySelector('.home-writing-meta')).toHaveTextContent('PDF');
      expect(card).not.toHaveAttribute('target');
      expect(card).not.toHaveAttribute('rel');
      expect(card.querySelector('.sr-only')).not.toBeInTheDocument();
    });
  });

  it('groups owned essays under a real heading, and hides empty groups', () => {
    const { container } = render(<WritingPage />);

    expect(
      screen.getByRole('heading', { level: 2, name: 'Essays / Papers' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Presentations / Posters',
      }),
    ).toBeInTheDocument();
    // No external writing or undated guides exist right now, so those
    // sections should not render an empty heading over nothing.
    expect(
      screen.queryByRole('heading', {
        level: 2,
        name: 'Selected writing elsewhere',
      }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { level: 2, name: 'Guides' }),
    ).not.toBeInTheDocument();

    expect(container.querySelectorAll('.writing-item h3')).toHaveLength(
      getWritingItems().length + presentationsData.length,
    );
  });

  it('shows provenance beside every external-link arrow', () => {
    const externalItems = getWritingItems().filter((item) => item.isExternal);
    const { container } = render(<WritingPage />);
    const externalLinks = [
      ...container.querySelectorAll('a.writing-item[target="_blank"]'),
    ];

    expect(externalLinks).toHaveLength(externalItems.length);
    externalLinks.forEach((link, index) => {
      expect(link.querySelector('.writing-source')).toHaveTextContent(
        externalItems[index].source,
      );
      expect(link.querySelector('.writing-external')).toHaveTextContent('↗');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      expect(link.querySelector('.sr-only')).toHaveTextContent(
        'opens in a new tab',
      );
    });
  });

  it('opens presentations in the same tab despite the external styling', () => {
    const { container } = render(<WritingPage />);
    const presentationLinks = [
      ...container.querySelectorAll('.writing-item'),
    ].filter((el) =>
      presentationsData.some((item) => el.getAttribute('href') === item.url),
    );

    expect(presentationLinks).toHaveLength(presentationsData.length);
    presentationLinks.forEach((link) => {
      expect(link.querySelector('.writing-source')).toHaveTextContent('PDF');
      expect(link).not.toHaveAttribute('target');
      expect(link).not.toHaveAttribute('rel');
      expect(link.querySelector('.sr-only')).not.toBeInTheDocument();
    });
  });
});

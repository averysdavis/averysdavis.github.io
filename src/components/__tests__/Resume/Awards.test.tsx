import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Awards from '../../Resume/Awards';
import Award from '../../Resume/Awards/Award';

const mockAwards = [
  {
    title: 'Gold Medal',
    issuer: 'iGEM Competition',
    year: 2025,
  },
  {
    title: 'Silver Medal',
    issuer: 'iGEM Competition',
    year: 2024,
  },
];

describe('Awards', () => {
  it('renders the awards section with title', () => {
    render(<Awards data={mockAwards} />);

    expect(
      screen.getByRole('heading', { name: /awards/i }),
    ).toBeInTheDocument();
  });

  it('renders all awards', () => {
    render(<Awards data={mockAwards} />);

    expect(screen.getByText('Gold Medal')).toBeInTheDocument();
    expect(screen.getByText('Silver Medal')).toBeInTheDocument();
  });
});

describe('Award', () => {
  const mockAward = {
    title: 'Gold Medal',
    issuer: 'iGEM Competition',
    year: 2025,
  };

  it('renders award title', () => {
    render(<Award data={mockAward} />);

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      'Gold Medal',
    );
  });

  it('renders issuer and year', () => {
    render(<Award data={mockAward} />);

    expect(screen.getByText(/iGEM Competition/)).toBeInTheDocument();
    expect(screen.getByText(/2025/)).toBeInTheDocument();
  });

  it('renders as article element', () => {
    render(<Award data={mockAward} />);

    const article = document.querySelector('article.award-container');
    expect(article).toBeInTheDocument();
  });

  it('renders description when present', () => {
    render(
      <Award data={{ ...mockAward, description: 'A great achievement.' }} />,
    );

    expect(screen.getByText('A great achievement.')).toBeInTheDocument();
  });

  it('omits description when not present', () => {
    render(<Award data={mockAward} />);

    const description = document.querySelector('.award-description');
    expect(description).not.toBeInTheDocument();
  });
});

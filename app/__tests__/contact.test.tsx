import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ContactPage from '../contact/page';

describe('contact page', () => {
  it('uses the main region as the centering surface without a duplicate footer', () => {
    render(<ContactPage />);

    expect(screen.getByRole('main')).toHaveClass('page-main--contact');
    expect(screen.queryByRole('contentinfo')).not.toBeInTheDocument();
    // Deliberately no mailto: link anywhere on the page — see EmailLink.
    expect(screen.queryAllByRole('link', { name: /^Email/ })).toHaveLength(0);
  });
});

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import profile from '../../../data/profile.json';
import EmailLink from '../../Contact/EmailLink';

const [localPart, domain] = profile.email.split('@');
const domainSpoken = domain.replaceAll('.', ' [dot] ');

describe('EmailLink', () => {
  it('renders the local part and a spelled-out domain', () => {
    render(<EmailLink />);

    expect(screen.getByText(localPart)).toBeInTheDocument();
    // getByText trims/normalizes whitespace, so the leading space this span
    // actually renders (` [at] domain`) never matches literally.
    expect(screen.getByText(`[at] ${domainSpoken}`)).toBeInTheDocument();
  });

  it('never renders a mailto: link or the raw @ address as text', () => {
    const { container } = render(<EmailLink />);

    expect(container.querySelector('a[href^="mailto:"]')).toBeNull();
    expect(container.textContent).not.toContain(`${localPart}@${domain}`);
  });

  it('announces the full address to assistive tech, spelled out', () => {
    render(<EmailLink />);

    expect(
      screen.getByText(`Email ${localPart} [at] ${domainSpoken}`, {
        selector: '.sr-only',
      }),
    ).toBeInTheDocument();
  });
});

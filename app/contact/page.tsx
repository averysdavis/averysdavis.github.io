import type { Metadata } from 'next';

import AnimatedText from '@/components/Contact/AnimatedText';
import ContactIcons from '@/components/Contact/ContactIcons';
import EmailLink from '@/components/Contact/EmailLink';
import PageWrapper from '@/components/Template/PageWrapper';
import profile from '@/data/profile.json';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Contact',
  description: `Contact ${profile.name} via email at ${profile.email}.`,
  path: '/contact/',
});

// Add or edit as many variants as you like — they cycle in order, typed out
// one at a time, then loop back to the first.
const CONTACT_HINTS = [
  'Email me if you want a reply within a reasonable amount of time',
];

export default function ContactPage() {
  return (
    <PageWrapper hideFooter mainClassName="page-main--contact">
      <section className="contact-page">
        <header className="contact-header">
          <h1 className="page-title">Get in Touch</h1>
        </header>

        <div className="contact-content">
          <div className="contact-email-block">
            <EmailLink />
            <p className="contact-hint">
              <AnimatedText messages={CONTACT_HINTS} />
            </p>
          </div>

          <div className="contact-divider">
            <span>or find me elsewhere</span>
          </div>

          <ContactIcons includeEmail={false} />
        </div>
      </section>
    </PageWrapper>
  );
}

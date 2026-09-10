import profile from '@/data/profile.json';

const CONTACT_ADDRESS = profile.email;
const [CONTACT_LOCAL_PART, CONTACT_DOMAIN] = CONTACT_ADDRESS.split('@');
/** Domain and address as spoken/scraped text, with "@" and "." spelled out
 * and no mailto: href anywhere in the page, so a plain-text or href scraper
 * never sees a working address pattern. Visitors copy and retype it by hand. */
const CONTACT_DOMAIN_SPOKEN = CONTACT_DOMAIN.replaceAll('.', ' [dot] ');
const CONTACT_ADDRESS_SPOKEN = `${CONTACT_LOCAL_PART} [at] ${CONTACT_DOMAIN_SPOKEN}`;

export default function EmailLink() {
  return (
    <div className="contact-email-container">
      {/* Not a real mailto: link — deliberately. A live href or a raw
          address in the text is exactly what scrapers look for, so this is
          copy-and-retype only. */}
      <span className="contact-email-link">
        <span className="sr-only">Email {CONTACT_ADDRESS_SPOKEN}</span>
        <span className="contact-email-prefix" aria-hidden="true">
          {CONTACT_LOCAL_PART}
        </span>
        <span className="contact-email-domain" aria-hidden="true">
          {` [at] ${CONTACT_DOMAIN_SPOKEN}`}
        </span>
      </span>
    </div>
  );
}

export interface PresentationItem {
  title: string;
  url: string;
  description: string;
  date: string;
  /** Features this item in the homepage's "Selected Writings" list. */
  pinned?: boolean;
}

const data: PresentationItem[] = [
  {
    title: 'Mathematically Blonde',
    url: '/pdfs/Mathematically%20Blonde.pdf',
    description:
      "Taylors are typically blonde, so naturally Taylor series are a series of mathematically blonde mathematicians. I am very proud to say this poster was on my math teacher's door for about a month.",
    date: '2026-04-17',
    pinned: true,
  },
  {
    title: 'Intro to Web Accessibility',
    url: '/pdfs/Web_A11y_Intro.pdf',
    description:
      'An introduction to web accessibility for my baby web developer students.',
    date: '2026-03-04',
  },
];

export default data;

export interface PresentationItem {
  title: string;
  url: string;
  description: string;
  date: string;
  pinned?: boolean;
}

const data: PresentationItem[] = [
  {
    title: 'Mathematically Blonde',
    url: '/pdfs/Mathematically%20Blonde.pdf',
    description: 'Why Taylor series are called Taylor series.',
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

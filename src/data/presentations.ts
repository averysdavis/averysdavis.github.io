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
    title: 'Plot Twist: NYC Airbnb Data Visualizations',
    url: '/pdfs/Plot_Twist.pdf',
    description:
      'Different data visualizations of NYC Airbnb prices I made show how the same data can provide insight or mislead readers. Visualizations hand-edited or made with Matplotlib, pandas, and seaborn in Python.',
    date: '2026-09-09',
    pinned: true,
  },
  {
    title: 'Intro to Web Accessibility',
    url: '/pdfs/Web_A11y_Intro.pdf',
    description:
      'An introduction to web accessibility for my baby web developer students.',
    date: '2026-03-04',
  },
  {
    title: "Euler's Basel Problem",
    url: '/pdfs/Euler_Basel.pdf',
    description:
      'How Euler solved the 1734 Basel problem. By treating sin(x)/x as an infinite polynomial, you can prove the sum of the reciprocals of the squares is exactly π²/6.',
    date: '2026-05-24',
  },
];

export default data;

export interface WritingItem {
  title: string;
  url: string;
  date: string;
  description: string;
  /** Features this item in the homepage's "Selected Writings" list. */
  pinned?: boolean;
}

const data: WritingItem[] = [
  {
    title: 'Closeread Feature Tour',
    url: '/scrollytelling/closeread-tour/',
    date: '2026-10-23',
    description:
      "A walkthrough of Closeread's layouts, highlighting, zoom and scroll effects.",
  },
];

export default data;

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
    title: '繁星 (Fánxīng)',
    url: '/scrollytelling/stars/',
    date: '2026-10-29',
    description:
      "Understanding and analyzing the 20th century poem by Bing Xin about a myriad of stars. Look at three different translations (including my own) to see what Bing Xin's vernacular Chinese says that English can't.",
    pinned: true,
  },
];

export default data;

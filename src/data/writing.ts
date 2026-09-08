export interface WritingItem {
  title: string;
  url: string;
  date: string;
  description: string;
  /** Features this item in the homepage's "Selected Writings" list. */
  pinned?: boolean;
}

const data: WritingItem[] = [];

export default data;

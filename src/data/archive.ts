export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  imageAlt: string;
  date: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
}

const data: Project[] = [];

export default data;

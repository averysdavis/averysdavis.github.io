export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
}

const data: Project[] = [
  {
    title: 'Wiki 2026 - In Progress',
    subtitle: 'International Genetically Engineered Machine (iGEM)',
    link: 'https://2026.igem.wiki/khanlab-bayarea/',
    image: '/images/projects/wiki26-temp.png',
    date: '2026-10-20',
    desc: 'Documentation website for the KhanLab-BayArea 2025 iGEM project.',
    tech: ['HTML', 'CSS', 'Bootstrap', 'Jinja','Mathjax'],
    featured: true,
  },
  {
    title: 'Wiki 2025',
    subtitle: 'International Genetically Engineered Machine (iGEM)',
    link: 'https://2025.igem.wiki/khanlab-bayarea/',
    image: '/images/projects/wiki25.png',
    date: '2025-10-20',
    desc: 'Documentation website for the KhanLab-BayArea 2026 iGEM project.',
    tech: ['HTML', 'CSS', 'Bootstrap', 'Jinja'],
    featured: true,
  },
];

export default data;

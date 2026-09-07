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
    title: 'Promotion Video 2026',
    subtitle: 'International Genetically Engineered Machine (iGEM)',
    link: 'https://video.igem.org/w/1qUXaL9ND5KZCcmvqKZeNL',
    image: '/images/projects/thumbnail_promo_vid26.webp',
    date: '2026-8-20',
    desc: 'Promotion video for the KhanLab-BayArea 2026 iGEM project.',
    tech: ['VTT'],
    featured: true,
  },
  {
    title: 'Strawberry DNA Translation',
    subtitle: 'International Genetically Engineered Machine (iGEM)',
    link: 'https://github.com/averysdavis/caomei-dna',
    image: '/images/projects/caomei_dna.png',
    date: '2026-3-20',
    desc: 'My translation of a strawberry DNA extraction activity. My translation has English, Chinese, and Pinyin (phonetics).',
    tech: ['HTML'],
    featured: true,
  },
  {
    title: 'Bioinformatics Jupyter Notebooks',
    subtitle: 'NASA GeneLab',
    link: 'https://github.com/averysdavis/gl4hs',
    image: '/images/projects/genelab.png',
    date: '2025-6-20',
    desc: 'My Jupyter Notebooks from studying at NASA GeneLab. These include practices and exercises with OSDR files I trimmed and analyzed.',
    tech: ['FastQC','STAR','Trim Galore'],
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
  {
    title: 'Presentation Video 2025',
    subtitle: 'International Genetically Engineered Machine (iGEM)',
    link: 'https://video.igem.org/w/s1KYxCDwpFpSbSdYAC8J3x',
    image: '/images/projects/pres_vid_25.png',
    date: '2025-8-20',
    desc: 'Presentation video for the KhanLab-BayArea 2025 iGEM project.',
    tech: [],
    featured: true,
  },
  {
    title: 'Promotion Video 2025',
    subtitle: 'International Genetically Engineered Machine (iGEM)',
    link: 'https://video.igem.org/w/1qUXaL9ND5KZCcmvqKZeNL',
    image: '/images/projects/pro_vid_25.png',
    date: '2025-8-20',
    desc: 'Promotion video for the KhanLab-BayArea 2025 iGEM project.',
    tech: [],
    featured: true,
  },
];

export default data;

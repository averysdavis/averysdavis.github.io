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

const data: Project[] = [
  {
    title: 'Wiki 2026 - In Progress',
    subtitle: 'International Genetically Engineered Machine (iGEM)',
    link: 'https://2026.igem.wiki/khanlab-bayarea/',
    image: '/images/projects/wiki26-temp.png',
    imageAlt:
      'Website with a purple header and navigation menu; large white text on a wooden background reads, “The Cluck is Ticking.”',
    date: '2026-10-20',
    desc: 'Documentation website for the KhanLab-BayArea 2026 iGEM project.',
    tech: ['HTML', 'CSS', 'Bootstrap', 'Jinja', 'Flask'],
    featured: true,
  },
  {
    title: 'Promotion Video 2026',
    subtitle: 'International Genetically Engineered Machine (iGEM)',
    link: 'https://video.igem.org/w/1qUXaL9ND5KZCcmvqKZeNL',
    image: '/images/projects/thumbnail_promo_vid26.webp',
    imageAlt:
      'A stick figure holding a camera takes a photo of food on a table, with a trash can nearby, on a purple background.',
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
    imageAlt:
      'A set of bilingual instructions in Chinese and English explaining how to prepare a strawberry beverage using cups, plastic wrap, filters, and coffee filters.',
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
    imageAlt:
      'GeneLab logo with a red DNA strand, the words “GeneLab,” a moon, Mars, the International Space Station, and stars on a blue circular background.',
    date: '2025-6-20',
    desc: 'My Jupyter Notebooks from studying at NASA GeneLab. These include practices and exercises with OSDR files I trimmed and analyzed.',
    tech: ['FastQC', 'STAR', 'Trim Galore'],
    featured: true,
  },
  {
    title: 'Wiki 2025',
    subtitle: 'International Genetically Engineered Machine (iGEM)',
    link: 'https://2025.igem.wiki/khanlab-bayarea/',
    image: '/images/projects/wiki25.png',
    imageAlt:
      'A website with the text “Rock The Plastics!” appears over a textured gray background, with a cartoon rock character playing a red guitar on the right side.',
    date: '2025-10-20',
    desc: 'Documentation website for the KhanLab-BayArea 2025 iGEM project.',
    tech: ['HTML', 'CSS', 'Bootstrap', 'Jinja', 'Flask'],
    featured: true,
  },
  {
    title: 'Presentation Video 2025',
    subtitle: 'International Genetically Engineered Machine (iGEM)',
    link: 'https://video.igem.org/w/s1KYxCDwpFpSbSdYAC8J3x',
    image: '/images/projects/pres_vid_25.png',
    imageAlt:
      'Cartoon of a grey lump with googly eyes, arms, and legs, labeled “microplastics” underneath in lowercase letters.',
    date: '2025-8-20',
    desc: 'Presentation video for the KhanLab-BayArea 2025 iGEM project.',
    featured: true,
  },
  {
    title: 'Promotion Video 2025',
    subtitle: 'International Genetically Engineered Machine (iGEM)',
    link: 'https://video.igem.org/w/szW91Q4uFWGSScLLBdqo2Q',
    image: '/images/projects/pro_vid_25.png',
    imageAlt:
      'Text “Rock The Plastics!” appears over a textured gray background, with a cartoon rock character playing a red guitar on the right side.',
    date: '2025-8-20',
    desc: 'Promotion video for the KhanLab-BayArea 2025 iGEM project.',
    featured: true,
  },
];

export default data;

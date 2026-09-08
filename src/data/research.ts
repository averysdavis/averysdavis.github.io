export interface Research {
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

const data: Research[] = [
  {
    title: 'The Cluck is Ticking',
    subtitle: 'International Genetically Engineered Machine (iGEM)',
    link: 'https://2026.igem.wiki/khanlab-bayarea/',
    image: '/images/research/dru_igem26.png',
    imageAlt:
      'A chicken drumstick with a magnifying over it smiling in front of a purple background.',
    date: '2026-10-20',
    desc: 'Engineering a predictive biosensor with a colorimetric readout to detect meat spoilage. Genetically modifying E. coli k-12 to detect cadaverine.',
    featured: true,
  },
];

export default data;

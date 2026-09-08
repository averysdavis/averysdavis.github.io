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
      'A chicken drumstick with a magnifying glass over it smiling in front of a purple background.',
    date: '2026-10-20',
    desc: 'Engineering a predictive biosensor with a colorimetric readout to detect meat spoilage. Genetically modifying E. coli k-12 to detect cadaverine.',
    featured: true,
  },
  {
    title: 'Silicon Valley Urban Heat',
    subtitle: 'Stanford Deliberative Democracy Lab',
    link: 'https://sites.google.com/khanlabschool.org/bayarea-urbanheat/home',
    image: '/images/research/homestead_map.png',
    imageAlt:
      'A map of Homestead High School where the fields are hotter than the surrounding area.',
    date: '2025-10-20',
    desc: 'Mapping land-surface temperature data in Silicon Valley to investigate urban heat. Found correlation of artificial turf and higher temperatures across 5 sites, primarily affecting high schools.',
    tech: ['QGIS'],
    featured: true,
  },
  {
    title: 'Rock the Plastics',
    subtitle: 'International Genetically Engineered Machine (iGEM)',
    link: 'https://2025.igem.wiki/khanlab-bayarea/',
    image: '/images/research/rocky_igem25.png',
    imageAlt: 'A rock with googly eyes holding a guitar.',
    date: '2025-10-20',
    desc: 'Engineering E. coli to co-express plastic-binding curli fibers and a biomineralization pathway to capture microplastics in in situ limestone formations.',
    featured: true,
  },
  {
    title: 'Arabidopsis Gene Variations Under Spaceflight',
    subtitle: 'NASA GeneLab',
    image: '/images/research/arabidopsis.jpg',
    imageAlt: 'Plants in a square plastic box brightly lit.',
    date: '2025-7-20',
    desc: 'Analyzed Arabidopsis gene variants in Jupyter Notebooks, finding upregulation in cell wall loosening under heat stress.',
    tech: ['FastQC', 'STAR', 'Trim Galore'],
    featured: true,
  },
  {
    title:
      'Phagocytic Overload and Lysosome-Dependent Cell Death Down-regulation in Frontotemporal Dementia Patients',
    subtitle: 'miRcore (Genes In Diseases And Symptoms)',
    link: '/pdfs/FTD_GIDAS.pdf',
    image: '/images/research/GIDAS.png',
    imageAlt: 'The letters G-I-D-A-S, where the I is a DNA double helix.',
    date: '2025-5-20',
    desc: 'Analyzing GEO datasets of peripheral blood gene expression data. Used KEGG pathways and GeneCards to identify pathways, specifically Necroptosis and Phagosome pathways.',
    tech: ['Python', 'R'],
    featured: true,
  },
  {
    title: 'Mapping of 2024 Shelly Fire Burn Scars',
    subtitle: 'NASA ECOSTRESS (JPL)',
    link: 'https://ecostress.jpl.nasa.gov/wildfire_gallery',
    image: '/images/research/shellyfire.png',
    imageAlt:
      'A map of Northern California with bright spots labeled "Known Temperature Highs of the 2024 Shelly Fire."',
    date: '2024-7-20',
    desc: 'Mapped ECOSTRESS data of the 2024 Shelly fire in Siskiyou County, California. At the time, the fire was the second largest in California, burning over 40,000 acres.',
    tech: ['QGIS'],
    featured: true,
  },
  {
    title:
      'Comparing Functional Traits and Variations in Desert and Forest Plants',
    subtitle: 'UCLA COSMOS',
    link: '/pdfs/cosmos_paper.pdf',
    image: '/images/research/cosmos_plants.png',
    imageAlt:
      'An infographic with the title "How do Desert Plants differ from Forest Plants?" with graphs and maps.',
    date: '2024-7-20',
    desc: 'Applied t-test to identify differences in water mass, leaf area, and carbon-13 concentration between desert and forest plants.',
    tech: ['QGIS', 'T-Tests'],
    featured: true,
  },
];

export default data;

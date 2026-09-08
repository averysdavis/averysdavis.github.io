export interface Award {
  title: string;
  issuer: string;
  year: number;
  description?: string;
}

const awards: Award[] = [
  {
    title: 'Gold Medal',
    issuer: 'International Genetically Engineered Machine (iGEM) Competition',
    year: 2025,
  },
  {
    title: 'Village Award Nomination',
    issuer: 'International Genetically Engineered Machine (iGEM) Competition',
    year: 2025,
  },
  {
    title: 'Silver Medal',
    issuer: 'International Genetically Engineered Machine (iGEM) Competition',
    year: 2024,
  },
  {
    title: 'Gold Medal',
    issuer: 'Global Open Genetic Engineering Competition (GOGEC)',
    year: 2025,
  },
  {
    title: "Quorum's Choice Award",
    issuer: 'Global Open Genetic Engineering Competition (GOGEC)',
    year: 2025,
  },
  {
    title: 'Best Experimental Project Runner-up',
    issuer: 'Global Open Genetic Engineering Competition (GOGEC)',
    year: 2025,
  },
  {
    title: 'Published Temperature Map of the 2024 Shelly Fire',
    issuer: 'NASA (JPL)',
    year: 2024,
  },
  {
    title: 'Certificate of Recognition for Outstanding Community Service',
    issuer: 'Senator Dave Cortese',
    year: 2024,
  },
];

export default awards;

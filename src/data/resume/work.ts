/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'International Genetically Engineered Machine (iGEM)',
    position: 'Team Lead, KhanLab-BayArea Team',
    url: 'https://igem.org/',
    startDate: '2024-08-20',
    summary: `Co-leading a team of 25+ students and mentors across 8 schools through an international synthetic biology competition. Engineering 2 full stack documentation websites serving as primary knowledge repositories for projects, delivering 20+ biology workshops to 200+ K-12 students and senior citizens with multilingual instruction.`,
  },
  {
    name: 'Speech and Debate, Khan Lab School',
    position: 'President',
    url: 'https://khanlabschool.org/',
    startDate: '2024-08-20',
    summary: `Organizing weekly practice for 20+ students, teaching public speaking skills, organizing tournament sign ups and finances.`,
  },
  {
    name: 'Khan Lab School',
    position: 'Student Teacher, Frontend Web Development',
    url: 'https://khanlabschool.org/',
    startDate: '2026-01-01',
    endDate: '2026-06-20',
    summary: `Taught 4 students frontend web development, including HTML, CSS, and Bootstrap, for a semester long course. Topics covered included code editors, git, web accessibility, JavaScript libraries, and more.`,
  },
  {
    name: 'Stanford Deliberative Democracy Lab',
    position: 'Climate Research Fellow',
    url: 'https://deliberation.stanford.edu/',
    startDate: '2025-10-01',
    endDate: '2025-12-20',
    summary: `Mapped Bay Area heat patterns using QGIS, identifying artificial turf as heat island driver. Quantified artificial turf temperature correlation across 5 sites, finding higher temperatures in high schools.`,
  },
  {
    name: 'NASA GeneLab',
    position: 'Bioinformatics Student Intern',
    url: 'https://www.nasa.gov/ames/space-biosciences/',
    startDate: '2025-06-01',
    endDate: '2025-09-15',
    summary: `Processed omics data with Python & Jupyter Notebooks to investigate plant adaptation to spaceflight conditions. Led team of 4 across 3 timezones, coordinating 10+ hours of virtual collaboration for capstone project. Analyzed Arabidopsis gene variants under spaceflight, discovering upregulation in cell wall loosening under heat stress. Presented findings on spaceflight-induced genetic adaptation to NASA GeneLab directors & 180 researchers.`,
  },
  {
    name: 'Genes In Diseases and Symptoms (miRcore)',
    position: 'Genomics Student Researcher',
    url: 'https://www.mircore.org/gidas/',
    startDate: '2024-08-01',
    endDate: '2026-06-15',
    summary: `Analyzed Gene Expression Omnibus (GEO) datasets to identify pathways associated with Frontotemporal dementia (FTD). Used Python & R to visualize data for 500+ samples, uncovering patterns in gene repression & expression. Authored scientific paper & presented FTD genomic findings to 15+ researchers & principal investigators.`,
  },
  {
    name: 'UCLA COSMOS',
    position: 'Student',
    url: 'https://cosmos.ucla.edu/cluster-courses/cluster-2-ecosystem-responses-to-climate-from-plants-to-planet-analyzing-and-presenting-data-from-lab-and-space-sensors/',
    startDate: '2024-06-01',
    endDate: '2024-08-01',
    summary: `Collected plant samples & analyzed physiological measurements across 83 different plant species. Applied t-tests to identify differences in water mass, leaf area, & carbon-13 concentration between desert & forest plants. Processed NASA satellite data using QGIS across 37,161 acres, producing geospatial analysis of 2024 Shelly Fire.`,
  },
];

export default work;

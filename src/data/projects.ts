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
    title: 'Nearest Dollar',
    subtitle: 'BVP Hackathon',
    image: '/images/projects/nearestdollar.jpg',
    date: '2015-11-20',
    desc: 'Connected to bank accounts to round up purchases and donate spare change to charity.',
    tech: ['React', 'Node.js', 'Plaid API', 'MongoDB'],
    featured: true,
  },
  {
    title: 'Harvest',
    subtitle: '3rd place at Techcrunch Disrupt SF',
    link: 'https://devpost.com/software/harvest',
    image: '/images/projects/harvest.jpg',
    date: '2015-09-20',
    desc: 'Low-cost crop monitoring to catch irrigation leaks and nutrient deficiencies.',
    tech: ['Python', 'Arduino', 'Computer Vision', 'AWS'],
    featured: true,
  },
];

export default data;

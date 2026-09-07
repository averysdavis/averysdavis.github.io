export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
}

const skills: Skill[] = [
  // Languages
  {
    title: 'Python',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'JavaScript',
    competency: 4,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'HTML',
    competency: 5,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'CSS',
    competency: 5,
    category: ['Languages', 'Web Development'],
  },
  // Web Development
  {
    title: 'jQuery',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'Bootstrap',
    competency: 5,
    category: ['Web Development'],
  },
  {
    title: 'Jinja',
    competency: 4,
    category: ['Web Development'],
  },
  // Data Science
  {
    title: 'NumPy',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'Pandas',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Science'],
  },
  // Bioinformatics
  {
    title: 'FastQC',
    competency: 3,
    category: ['Bioinformatics'],
  },
  {
    title: 'Trim Galore',
    competency: 3,
    category: ['Bioinformatics'],
  },
  {
    title: 'STAR',
    competency: 3,
    category: ['Bioinformatics'],
  },
  // Geospatial
  {
    title: 'QGIS',
    competency: 5,
    category: ['Geospatial'],
  },
  // Infrastructure
  {
    title: 'YAML',
    competency: 4,
    category: ['Infrastructure'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

/**
 * Build categories from skills, all using the accent color token.
 */
function buildCategories(skillsList: Skill[]): Category[] {
  const uniqueCategories = Array.from(
    new Set(skillsList.flatMap(({ category }) => category)),
  ).sort();

  return uniqueCategories.map((category) => ({
    name: category,
    color: 'var(--color-accent)',
  }));
}

const categories: Category[] = buildCategories(skills);

export { categories, skills };

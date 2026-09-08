export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
  coursework?: string[];
}

const degrees: Degree[] = [
  {
    school: 'Khan Lab School',
    degree: 'High School Diploma',
    link: 'https://khanlabschool.org/',
    year: 2027,
    coursework: [
      'Calculus BC',
      'Biology',
      'Physics & Engineering',
      'Synthetic Biology',
      'Physics C: Mechanics',
      'JavaScript',
      'Statistics',
    ],
  },
  {
    school: 'Foothill College',
    degree: 'Dual Enrollment',
    link: 'https://foothill.edu/index.html',
    year: 2027,
    coursework: [
      'Fundamentals of Chemistry',
      'Object Oriented Programming Methodologies in Java',
      'Ethical Hacking',
    ],
  },
];

export default degrees;

import { AUTHOR_NAME } from '@/lib/utils';

export interface Route {
  label: string;
  path: string;
  index?: boolean;
  primary?: boolean;
}

const routes: Route[] = [
  {
    index: true,
    label: AUTHOR_NAME,
    path: '/',
  },
  {
    label: 'Resume',
    path: '/resume',
  },
  {
    label: 'Projects',
    path: '/projects',
  },
  {
    label: 'Research',
    path: '/research',
  },
  {
    label: 'Writing',
    path: '/writing',
  },
  {
    label: 'Archive',
    path: '/archive',
    primary: false,
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

export default routes;

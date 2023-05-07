import { FooterLink, Route } from '@/interfaces';

export const routes: Route[] = [
  {
    name: 'Home',
    path: '/',
    icon: {
      active: 'AiFillHome',
      inactive: 'AiOutlineHome',
    },
  },
  {
    name: 'Projects',
    path: '/projects',
    icon: {
      active: 'AiFillProject',
      inactive: 'AiOutlineProject',
    },
  },
  {
    name: 'Notes',
    path: '/notes',
    icon: {
      active: 'AiFillFile',
      inactive: 'AiOutlineFile',
    },
  },
  {
    name: 'About',
    path: '/about',
    icon: {
      active: 'AiFillInfoCircle',
      inactive: 'AiOutlineInfoCircle',
    },
  },
];

export const footerLinks: FooterLink[] = [
  {
    name: 'Source Code',
    link: 'https://github.com/andhikadk/andhikadk.my.id',
  },
  {
    name: 'Email',
    link: 'mailto:andhikadwi980@gmail.com',
  },
  {
    name: 'Notion',
    link: 'https://andhika.notion.site',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/andhikadk',
  },
  {
    name: 'Sandbox',
    link: 'https://andhikadk.my.id/sandbox',
  },
];

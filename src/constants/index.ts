import { FooterLink, Route } from '@/interfaces';

export const routes: Route[] = [
  {
    name: 'Home',
    path: '/',
    icon: {
      active: 'fluent:home-24-filled',
      inactive: 'fluent:home-24-regular',
    },
  },
  {
    name: 'Projects',
    path: '/projects',
    icon: {
      active: 'fluent:clipboard-code-24-filled',
      inactive: 'fluent:clipboard-code-24-regular',
    },
  },
  {
    name: 'Notes',
    path: '/notes',
    icon: {
      active: 'fluent:note-24-filled',
      inactive: 'fluent:note-24-regular',
    },
  },
  {
    name: 'About',
    path: '/about',
    icon: {
      active: 'fluent:info-24-filled',
      inactive: 'fluent:info-24-regular',
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

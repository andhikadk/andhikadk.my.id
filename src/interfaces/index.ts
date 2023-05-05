export interface ProjectMetadata {
  title: string;
  date: string;
  description: string;
  demo: string;
  source: string;
  type: string;
  stack: string[];
  slug: string;
}

export interface Route {
  name: string;
  path: string;
  icon: {
    active: string;
    inactive: string;
  };
}

export interface FooterLink {
  name: string;
  link: string;
}

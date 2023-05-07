import fs from 'fs';
import matter from 'gray-matter';

import { ProjectMetadata } from '@/interfaces';

export const getProjectMetadata = (
  type: string,
  projectSlug?: string
): ProjectMetadata[] => {
  const folder = `src/data/projects/${type}/`;
  const files = fs.readdirSync(folder);

  if (projectSlug) {
    try {
      const fileContents = fs.readFileSync(
        `${folder}${projectSlug}.mdx`,
        'utf8'
      );
      if (fileContents === undefined) return [];
      const matterResult = matter(fileContents);
      const project = {
        title: matterResult.data.title,
        date: matterResult.data.date,
        description: matterResult.data.description,
        demo: matterResult.data.demo,
        source: matterResult.data.source,
        type: matterResult.data.type,
        banner: matterResult.data.banner,
        stack: matterResult.data.stack,
        slug: projectSlug,
      };
      return [project];
    } catch (error: any) {
      if (error.code === 'ENOENT') return [];
    }
  }

  const markdownProjects = files.filter((file) => file.endsWith('.mdx'));

  const projects = markdownProjects.map((fileName) => {
    const fileContents = fs.readFileSync(`${folder}${fileName}`, 'utf8');
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
      demo: matterResult.data.demo,
      source: matterResult.data.source,
      type: matterResult.data.type,
      banner: matterResult.data.banner,
      stack: matterResult.data.stack,
      slug: fileName.replace('.mdx', ''),
    };
  });

  return projects;
};

export const getProjectContent = (type: string, projectSlug: string) => {
  const folder = `src/data/projects/${type}/`;
  const fileContents = fs.readFileSync(`${folder}${projectSlug}.mdx`, 'utf8');
  const matterResult = matter(fileContents);
  return matterResult.content;
};

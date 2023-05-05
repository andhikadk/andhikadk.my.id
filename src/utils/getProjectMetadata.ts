import fs from 'fs';
import matter from 'gray-matter';

import { ProjectMetadata } from '@/interfaces';

const getProjectMetadata = (): ProjectMetadata[] => {
  const folder = 'src/data/projects/';
  const files = fs.readdirSync(folder);

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
      stack: matterResult.data.stack,
      slug: fileName.replace('.mdx', ''),
    };
  });

  return projects;
};

export default getProjectMetadata;

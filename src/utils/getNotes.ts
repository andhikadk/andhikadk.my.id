import fs from 'fs';
import matter from 'gray-matter';

import { NoteMetadata } from '@/interfaces';

export const getNoteMetadata = (noteSlug?: string): NoteMetadata[] => {
  const folder = `src/data/notes/`;
  const files = fs.readdirSync(folder);

  if (noteSlug) {
    try {
      const fileContents = fs.readFileSync(`${folder}${noteSlug}.mdx`, 'utf8');
      if (fileContents === undefined) return [];
      const matterResult = matter(fileContents);
      const note = {
        title: matterResult.data.title,
        created: matterResult.data.created,
        updated: matterResult.data.updated,
        tags: matterResult.data.tags,
        slug: noteSlug,
      };
      return [note];
    } catch (error: any) {
      if (error.code === 'ENOENT') return [];
    }
  }

  const markdownNotes = files.filter((file) => file.endsWith('.mdx'));

  const notes = markdownNotes.map((fileName) => {
    const fileContents = fs.readFileSync(`${folder}${fileName}`, 'utf8');
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      created: matterResult.data.created,
      updated: matterResult.data.updated,
      tags: matterResult.data.tags,
      slug: fileName.replace('.mdx', ''),
    };
  });

  return notes;
};

export const getNoteContent = (noteSlug: string) => {
  const folder = `src/data/notes/`;
  const fileContents = fs.readFileSync(`${folder}${noteSlug}.mdx`, 'utf8');
  const matterResult = matter(fileContents);
  return matterResult.content;
};

'use client';
import Link from 'next/link';

import { NoteMetadata } from '@/interfaces';

export const convertDate = (date: Date) => {
  return date.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
};

const NotePreview = (notes: NoteMetadata) => {
  const date = notes.updated
    ? convertDate(new Date(notes.updated))
    : convertDate(new Date(notes.created));

  return (
    <div className='flex flex-col col-span-3 p-4 rounded-md bg-neutral-800 bg-opacity-70 backdrop-blur-sm backdrop-filter md:col-span-1'>
      <h4>
        <Link href={`/notes/${notes.slug}`} className='link'>
          {notes.title}
        </Link>
      </h4>
      <div className='flex flex-row flex-1 gap-2 mt-2 text-neutral-300'>
        {notes.tags.map((tag) => (
          <p key={tag}>
            <Link
              href={`/notes/tag/${tag}`}
              className='link animated-underline'>
              #{tag}
            </Link>
          </p>
        ))}
      </div>
      <p className='mt-2 text-neutral-400'>
        {notes.updated ? 'Updated on ' : 'Created on '}
        {date}
      </p>
    </div>
  );
};

export default NotePreview;

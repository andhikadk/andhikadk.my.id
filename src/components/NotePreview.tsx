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
    <div className='flex flex-col bg-neutral-800 bg-opacity-70 backdrop-blur-sm backdrop-filter p-4 rounded-md col-span-3 md:col-span-1'>
      <h4>
        <Link href={`/notes/${notes.slug}`} className='link animated-underline'>
          {notes.title}
        </Link>
      </h4>
      <div className='flex flex-row gap-2 text-neutral-300 flex-1 mt-2'>
        {notes.tags.map((tag) => (
          <p key={tag} className='link animated-underline'>
            <Link href={`/notes/tag/${tag}`}>#{tag}</Link>
          </p>
        ))}
      </div>
      <p className='mt-2 text-neutral-300'>{date}</p>
    </div>
  );
};

export default NotePreview;

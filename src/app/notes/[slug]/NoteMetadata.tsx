'use client';
import Image from 'next/image';
import Link from 'next/link';

import { NoteMetadata } from '@/interfaces';

const NoteMetadata = (note: NoteMetadata) => {
  return (
    <section className='flex flex-col pt-8 md:pt-24 pb-4 border-b border-neutral-700'>
      <div className='flex justify-center rounded-md bg-emerald-800'>
        <Image
          src={`/svg/notes.svg`}
          alt={note.title}
          width={1920}
          height={1080}
          className='md:max-w-lg rounded-md'
        />
      </div>
      <h1 className='font-bold mt-6'>{note.title}</h1>
      <div className='flex flex-row gap-2 mt-2 text-neutral-300'>
        {note.tags.map((tag) => (
          <p key={tag} className='link animated-underline'>
            <Link href={`/notes/tag/${tag}`}>#{tag}</Link>
          </p>
        ))}
      </div>
    </section>
  );
};

export default NoteMetadata;

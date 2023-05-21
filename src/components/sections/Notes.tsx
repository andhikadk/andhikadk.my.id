import Link from 'next/link';

import { getNoteMetadata } from '@/utils/getNotes';

import NotePreview from '../NotePreview';

const Notes = () => {
  const noteMetadata = getNoteMetadata();
  const notePreview = noteMetadata.map((project) => (
    <NotePreview key={project.slug} {...project} />
  ));
  return (
    <section id='notes' className='flex flex-col items-center gap-4 mt-24'>
      <h2 className='font-medium text-center'>
        Personal <span className='font-bold accent'>Notes</span>
      </h2>
      <div className='grid grid-cols-1 gap-4 mt-2 md:grid-cols-2 lg:grid-cols-3'>
        {notePreview}
      </div>
      <Link href='/notes'>
        <button className='px-6 py-3 font-medium rounded-md bg-neutral-800'>
          View all notes
        </button>
      </Link>
    </section>
  );
};

export default Notes;

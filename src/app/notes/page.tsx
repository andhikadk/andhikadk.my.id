import NotePreview from '@/components/NotePreview';
import { getNoteMetadata } from '@/utils/getNotes';

const Notes = () => {
  const noteMetadata = getNoteMetadata();
  const notes = noteMetadata.map((project) => (
    <NotePreview key={project.slug} {...project} />
  ));

  return (
    <section className='flex flex-col mt-12 md:mt-28'>
      <h1 className='font-medium'>
        My <span className='font-bold accent'>Notes</span>
      </h1>
      <p className='mt-2 text-neutral-200'>
        Showcase of my notes and thoughts.
      </p>
      <div className='grid grid-cols-3 gap-4 mt-8'>{notes}</div>
    </section>
  );
};

export default Notes;

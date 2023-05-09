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
        My <span className='accent font-bold'>Notes</span>
      </h1>
      <p className='text-neutral-200 mt-2'>
        Showcase of my notes and thoughts.
      </p>
      <div className='grid grid-cols-3 mt-8 gap-4'>{notes}</div>
    </section>
  );
};

export default Notes;

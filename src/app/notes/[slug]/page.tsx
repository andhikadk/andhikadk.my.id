import Markdown from 'markdown-to-jsx';

import { getNoteContent, getNoteMetadata } from '@/utils/getNotes';

import NotFound from './not-found';
import NoteMetadata from './NoteMetadata';
// import ProjectMetadata from './ProjectMetadata';

const ProjectDetail = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const note = getNoteMetadata(params.slug)[0];

  if (!note) {
    return <NotFound />;
  }

  const noteContent = getNoteContent(params.slug);

  const options = {
    overrides: {
      h2: {
        props: {
          className: 'text-emerald-500 pt-8 -mt-4',
        },
      },
      a: {
        props: {
          className:
            'underline underline-offset-2 decoration-dotted hover:no-underline decoration-emerald-200 text-emerald-400 animated-underline',
        },
      },
    },
  };

  return (
    <div className='layout-article'>
      <NoteMetadata {...note} />
      <article className='prose prose-invert max-w-4xl mt-4'>
        <Markdown options={options}>{noteContent}</Markdown>
      </article>
    </div>
  );
};

export default ProjectDetail;

export const generateStaticParams = () => {
  const note = getNoteMetadata();
  const all = [...note];
  return all.map((note) => {
    return {
      params: {
        slug: note.slug,
      },
    };
  });
};

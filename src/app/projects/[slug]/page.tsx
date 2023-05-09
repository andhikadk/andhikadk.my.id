import Markdown from 'markdown-to-jsx';

import { getProjectContent, getProjectMetadata } from '@/utils/getProjects';

import NotFound from './not-found';
import ProjectMetadata from './ProjectMetadata';

const ProjectDetail = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const web = getProjectMetadata('web', params.slug)[0];
  const design = getProjectMetadata('design', params.slug)[0];

  if (!web && !design) {
    return <NotFound />;
  }

  const webContent = web ? getProjectContent('web', params.slug) : '';
  const designContent = design ? getProjectContent('design', params.slug) : '';

  const options = {
    overrides: {
      h2: {
        props: {
          className: 'text-emerald-500 pt-8 -mt-4',
        },
      },
    },
  };

  return (
    <div className='layout-article'>
      <ProjectMetadata {...web} {...design} />
      <article className='prose prose-invert max-w-4xl mt-8'>
        <Markdown options={options}>{webContent + designContent}</Markdown>
      </article>
    </div>
  );
};

export default ProjectDetail;

export const generateStaticParams = () => {
  const web = getProjectMetadata('web');
  const design = getProjectMetadata('design');
  const all = [...web, ...design];
  return all.map((project) => {
    return {
      params: {
        slug: project.slug,
      },
    };
  });
};

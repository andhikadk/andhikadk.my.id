import Link from 'next/link';

import ProjectPreview from '@/components/ProjectPreview';
import { getProjectMetadata } from '@/utils/getProjects';

const Projects = () => {
  const projectMetadata = getProjectMetadata('web');
  const projectPreview = projectMetadata
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .map((project) => <ProjectPreview key={project.slug} {...project} />)
    .slice(0, 3);

  return (
    <section id='projects' className='flex flex-col items-center gap-4 mt-24'>
      <h2 className='font-medium text-center'>
        Highlighted <span className='font-bold accent'>Projects</span>
      </h2>
      <div className='grid grid-cols-1 gap-4 mt-2 md:grid-cols-2 lg:grid-cols-3'>
        {projectPreview}
      </div>
      <Link href='/projects'>
        <button className='px-6 py-3 font-medium rounded-md bg-neutral-800'>
          View all projects
        </button>
      </Link>
    </section>
  );
};

export default Projects;

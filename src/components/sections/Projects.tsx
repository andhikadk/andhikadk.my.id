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
    <section id='projects' className='flex flex-col items-center mt-24 gap-4'>
      <h2 className='text-center font-medium'>
        Highlighted <span className='accent font-bold'>Projects</span>
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2'>
        {projectPreview}
      </div>
      <Link href='/projects'>
        <button className='font-medium px-6 py-3 bg-neutral-800 rounded-md'>
          View all projects
        </button>
      </Link>
    </section>
  );
};

export default Projects;

import ProjectPreview from '@/components/ProjectPreview';
import { getProjectMetadata } from '@/utils/getProjects';

const Projects = () => {
  const webMetadata = getProjectMetadata('web');
  const designMetadata = getProjectMetadata('design');
  const webProjects = webMetadata
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .map((project) => <ProjectPreview key={project.slug} {...project} />);
  const designProjects = designMetadata
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .map((project) => <ProjectPreview key={project.slug} {...project} />);

  return (
    <>
      <section className='flex flex-col mt-12 md:mt-28'>
        <h1 className='font-medium'>
          Web <span className='accent font-bold'>Projects</span>
        </h1>
        <p className='text-neutral-200 mt-2'>
          Showcase of my web development projects.
        </p>
        <div className='grid grid-cols-3 mt-8 gap-4'>{webProjects}</div>
      </section>
      <section className='flex flex-col mt-12 md:mt-28'>
        <h1 className='font-medium'>
          Design <span className='accent font-bold'>Archives</span>
        </h1>
        <p className='text-neutral-200 mt-2'>Showcase of my design projects.</p>
        <div className='grid grid-cols-3 mt-8 gap-4'>{designProjects}</div>
      </section>
    </>
  );
};

export default Projects;

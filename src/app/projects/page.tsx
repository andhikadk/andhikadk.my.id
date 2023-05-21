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
          Web <span className='font-bold accent'>Projects</span>
        </h1>
        <p className='mt-2 text-neutral-200'>
          Showcase of my web development projects.
        </p>
        <div className='grid grid-cols-3 gap-4 mt-8'>{webProjects}</div>
      </section>
      <section className='flex flex-col mt-12 md:mt-28'>
        <h1 className='font-medium'>
          Design <span className='font-bold accent'>Archives</span>
        </h1>
        <p className='mt-2 text-neutral-200'>Showcase of my design projects.</p>
        <div className='grid grid-cols-3 gap-4 mt-8'>{designProjects}</div>
      </section>
    </>
  );
};

export default Projects;

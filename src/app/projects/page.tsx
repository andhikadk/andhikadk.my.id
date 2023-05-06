import ProjectPreview from '@/components/ProjectPreview';
import getProjectMetadata from '@/utils/getProjectMetadata';

const Projects = () => {
  const projectMetadata = getProjectMetadata();

  const projectPreview = projectMetadata
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .map((project) => <ProjectPreview key={project.slug} {...project} />);

  return (
    <section className='flex flex-col py-12 md:py-28'>
      <h1 className='accent font-bold'>My Projects</h1>
      <p className='text-neutral-200 mt-2'>
        All projects i have worked on, both personal and professional.
      </p>
      <div className='grid grid-cols-3 mt-8 gap-4'>{projectPreview}</div>
    </section>
  );
};

export default Projects;

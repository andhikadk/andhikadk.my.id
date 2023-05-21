'use client';
import Image from 'next/image';

import ProjectAction from '@/components/ProjectAction';
import ProjectTechStack from '@/components/ProjectTechStack';
import { ProjectMetadata } from '@/interfaces';

const ProjectMetadata = (project: ProjectMetadata) => {
  return (
    <section className='flex flex-col pt-8 pb-4 border-b md:pt-24 border-neutral-700'>
      <Image
        src={`/images/projects/${project.slug}.png`}
        alt={project.title}
        width={1920}
        height={1080}
        className='w-full rounded-md'
      />
      <h1 className='mt-4 font-bold'>{project.title}</h1>
      <p className='mt-2 text-neutral-300'>{project.description}</p>
      <div className='flex flex-row gap-2 mt-4 text-neutral-300'>
        <ProjectTechStack stack={project.stack} />
        <ProjectAction source={project.source} demo={project.demo} />
      </div>
    </section>
  );
};

export default ProjectMetadata;

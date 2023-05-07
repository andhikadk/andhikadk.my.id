'use client';
import Image from 'next/image';

import ProjectAction from '@/components/ProjectAction';
import ProjectTechStack from '@/components/ProjectTechStack';
import { ProjectMetadata } from '@/interfaces';

const ProjectMetadata = (project: ProjectMetadata) => {
  return (
    <section className='flex flex-col py-8 md:py-24'>
      <Image
        src={`/images/projects/${project.slug}.png`}
        alt={project.title}
        width={1920}
        height={1080}
        quality={100}
        className='w-full'
      />
      <h1 className='font-bold mt-4'>{project.title}</h1>
      <p className='text-neutral-400 mt-2'>{project.description}</p>
      <div className='flex flex-row gap-2 mt-4 text-neutral-300'>
        <ProjectTechStack stack={project.stack} />
        <ProjectAction source={project.source} demo={project.demo} />
      </div>
    </section>
  );
};

export default ProjectMetadata;

'use client';
import Image from 'next/image';
import Link from 'next/link';

import { ProjectMetadata } from '@/interfaces';

import ProjectAction from './ProjectAction';
import ProjectTechStack from './ProjectTechStack';

const ProjectPreview = (project: ProjectMetadata) => {
  return (
    <div className='flex flex-col col-span-3 p-4 rounded-md bg-neutral-800 bg-opacity-70 backdrop-blur-sm backdrop-filter md:col-span-1'>
      <Link href={`/projects/${project.slug}`} className='link'>
        <Image
          src={`/images/projects/${project.slug}.png`}
          alt={project.title}
          width={400}
          height={225}
          className='w-full duration-300 rounded-sm hover:scale-95'
        />
      </Link>
      <h4 className='mt-4'>
        <Link
          href={`/projects/${project.slug}`}
          className='link animated-underline'>
          {project.title}
        </Link>
      </h4>
      <p className='flex-1 text-neutral-400'>{project.description}</p>
      <div className='flex flex-row justify-end gap-2 mt-2 text-neutral-300'>
        <ProjectTechStack stack={project.stack} isPreview />
        <ProjectAction source={project.source} demo={project.demo} />
      </div>
    </div>
  );
};

export default ProjectPreview;

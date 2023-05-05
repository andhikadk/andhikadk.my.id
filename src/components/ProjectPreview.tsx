'use client';
import Image from 'next/image';
import Link from 'next/link';

import { ProjectMetadata } from '@/interfaces';
import { Icon } from '@iconify/react';

const ProjectPreview = (project: ProjectMetadata) => {
  return (
    <div className='flex flex-col bg-neutral-800 bg-opacity-80 backdrop-blur-sm backdrop-filter p-4 rounded-md col-span-3 md:col-span-1'>
      <Link href={`/projects/${project.slug}`} className='link'>
        <Image
          src={`/images/projects/${project.slug}.png`}
          alt={project.title}
          width={400}
          height={225}
          className='w-full hover:scale-95 duration-300 rounded-sm'
        />
      </Link>
      <h4 className='mt-4'>
        <Link
          href={`/projects/${project.slug}`}
          className='link animated-underline'>
          {project.title}
        </Link>
      </h4>
      <p className='text-neutral-400 flex-1'>{project.description}</p>
      <div className='flex flex-row justify-end gap-2 mt-2 text-neutral-300'>
        <Link
          href={project.source}
          target='_blank'
          className='flex items-center gap-1 link animated-underline'>
          <Icon icon='mdi:github' /> Source
        </Link>
        <Link
          href={project.demo}
          target='_blank'
          className='flex items-center gap-1 link animated-underline'>
          <Icon icon='mdi:link-variant' /> Demo
        </Link>
      </div>
    </div>
  );
};

export default ProjectPreview;

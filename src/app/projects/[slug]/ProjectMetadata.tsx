'use client';
import Image from 'next/image';
import Link from 'next/link';
import * as SiIcon from 'react-icons/si';

import { IconType } from '@/interfaces';
import { ProjectMetadata } from '@/interfaces';
import { Icon } from '@iconify/react';

const ProjectMetadata = (project: ProjectMetadata) => {
  const iconList: IconType = SiIcon;

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
        <ul className='flex flex-row gap-2 flex-1'>
          {project.stack?.map((tech) => {
            const Icon = iconList[tech[1]];
            return (
              <li key={tech[1]}>
                <Icon className='inline-block' size={20} />
              </li>
            );
          })}
        </ul>
        {project.source && (
          <Link
            href={project.source}
            target='_blank'
            className='flex items-center gap-1 link animated-underline'>
            <Icon icon='mdi:github' /> Source
          </Link>
        )}
        {project.demo && (
          <Link
            href={project.demo}
            target='_blank'
            className='flex items-center gap-1 link animated-underline'>
            <Icon icon='mdi:link-variant' /> Demo
          </Link>
        )}
      </div>
    </section>
  );
};

export default ProjectMetadata;

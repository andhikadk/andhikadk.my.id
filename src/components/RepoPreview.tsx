'use client';
import Link from 'next/link';

import { Icon } from '@iconify/react';

const RepoPreview = ({ repo }: any) => {
  return (
    <div className='flex flex-col bg-neutral-800 bg-opacity-70 backdrop-blur-sm backdrop-filter shadow-md rounded-md p-4'>
      <h3 className='font-bold text-lg'>
        <Link
          href={repo.html_url}
          target='_blank'
          className='link animated-underline'>
          {repo.name}
        </Link>
      </h3>
      <p className='text-gray-600 dark:text-gray-400 mt-2 flex-1'>
        {repo.description}
      </p>
      <div className='flex flex-row gap-2 items-center mt-4'>
        <span className='text-sm font-semibold flex items-center gap-1'>
          {repo.language && repo.language}
        </span>
        <span className='text-sm font-semibold flex items-center gap-1'>
          {repo.forks_count} <Icon icon='mdi:source-fork' />
        </span>
        <span className='text-sm font-semibold flex items-center gap-1 flex-1'>
          {repo.stargazers_count} <Icon icon='mdi:star' />
        </span>
        <span className='text-neutral-400 text-sm'>
          {new Date(repo.pushed_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </span>
      </div>
    </div>
  );
};

export default RepoPreview;

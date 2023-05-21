'use client';
import Link from 'next/link';
import { AiOutlineFork, AiOutlineStar } from 'react-icons/ai';

const RepoPreview = ({ repo }: any) => {
  return (
    <div className='flex flex-col p-4 rounded-md shadow-md bg-neutral-800 bg-opacity-70 backdrop-blur-sm backdrop-filter'>
      <h3 className='text-lg font-bold'>
        <Link
          href={repo.html_url}
          target='_blank'
          className='link animated-underline'>
          {repo.name}
        </Link>
      </h3>
      <p className='flex-1 mt-2 text-gray-400'>{repo.description}</p>
      <div className='flex flex-row items-center gap-2 mt-4'>
        <span className='flex items-center gap-1 text-sm font-semibold'>
          {repo.language && repo.language}
        </span>
        <span className='flex items-center gap-1 text-sm font-semibold'>
          {repo.forks_count} <AiOutlineFork />
        </span>
        <span className='flex items-center flex-1 gap-1 text-sm font-semibold'>
          {repo.stargazers_count} <AiOutlineStar />
        </span>
        <span className='text-sm text-neutral-400'>
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

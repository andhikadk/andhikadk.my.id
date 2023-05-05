'use client';
import Image from 'next/image';

import { Icon } from '@iconify/react';

const Hero = () => {
  return (
    <section
      id='hero'
      className='flex flex-col pt-24 md:pt-36 items-center text-center'>
      <Image
        src='https://avatars.githubusercontent.com/u/74821917?v=4'
        alt='Andhika Dwi Khalisyahputra'
        className='rounded-full'
        width={128}
        height={128}
      />
      <h1 className='text-white mt-4'>
        <span className='accent'>Andhika</span> Dwi Khalisyahputra
      </h1>
      <p className='text-sm md:text-base text-neutral-300 mt-2'>
        A software engineer from Indonesia who love building things
      </p>
      <div className='flex gap-4 mt-4'>
        <a
          href='https://linkedin.com/in/andhikadk/'
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-row items-center gap-1 text-neutral-400 hover:text-emerald-500'>
          <Icon icon='mdi:linkedin' className='w-8 h-8 md:w-5 md:h-5' />
          <span className='hidden md:inline'>Linkedin</span>
        </a>
        <a
          href='https://github.com/andhikadk'
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-row items-center gap-1 text-neutral-400 hover:text-emerald-500'>
          <Icon icon='mdi:github' className='w-8 h-8 md:w-5 md:h-5' />
          <span className='hidden md:inline'>Github</span>
        </a>
        <a
          href='https://cakeresume.com/andhikadk'
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-row items-center gap-1 text-neutral-400 hover:text-emerald-500'>
          <Icon icon='mdi:file-document' className='w-8 h-8 md:w-5 md:h-5' />
          <span className='hidden md:inline'>Resume</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;

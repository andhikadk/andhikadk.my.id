'use client';
import Image from 'next/image';
import Link from 'next/link';

import { heroLinks } from '@/constants';
import { Icon } from '@iconify/react';

const Hero = () => {
  return (
    <section
      id='hero'
      className='flex flex-col pt-24 md:pt-40 items-center text-center'>
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
        {heroLinks.map(({ name, link, icon }) => (
          <Link
            key={link}
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='flex flex-row items-center gap-1 text-neutral-400 link'>
            <Icon icon={icon} className='w-8 h-8 md:w-5 md:h-5' />
            <span className='hidden md:inline'>{name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Hero;

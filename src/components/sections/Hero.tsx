'use client';
import Image from 'next/image';
import Link from 'next/link';
import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si';

import { HeroLink } from '@/interfaces';

const heroLinks: HeroLink[] = [
  {
    name: 'LinkedIn',
    link: 'https://linkedin.com/in/andhikadk/',
    icon: <SiLinkedin className='w-6 h-6 md:w-5 md:h-5' />,
  },
  {
    name: 'GitHub',
    link: 'https://github.com/andhikadk',
    icon: <SiGithub className='w-6 h-6 md:w-5 md:h-5' />,
  },
  {
    name: 'Email',
    link: 'mailto:andhikadwi980@gmail.com',
    icon: <SiGmail size={32} className='w-6 h-6 md:w-5 md:h-5' />,
  },
];

const Hero = () => {
  return (
    <section
      id='hero'
      className='flex flex-col items-center pt-24 text-center md:pt-40'>
      <Image
        src='https://avatars.githubusercontent.com/u/74821917?v=4'
        alt='Andhika Dwi Khalisyahputra'
        className='duration-300 rounded-full hover:-translate-y-2'
        width={128}
        height={128}
      />
      {/* <p className='text-xl text-neutral-400'>OPEN FOR COLLABORATION</p> */}
      <h1 className='mt-4 text-white'>
        <span className='accent'>Andhika</span> Dwi Khalisyahputra
      </h1>
      <p className='mt-2 text-sm md:text-base text-neutral-300'>
        Just student who loves experimenting with some technologies.
      </p>
      <div className='flex gap-4 mt-4'>
        {heroLinks.map(({ name, link, icon }) => {
          return (
            <Link
              key={link}
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='flex flex-row items-center gap-2 text-neutral-400 link'>
              {icon}
              <span className='hidden md:inline animated-underline'>
                {name}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;

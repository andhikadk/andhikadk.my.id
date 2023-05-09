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
      className='flex flex-col pt-24 md:pt-40 items-center text-center'>
      <Image
        src='https://avatars.githubusercontent.com/u/74821917?v=4'
        alt='Andhika Dwi Khalisyahputra'
        className='rounded-full'
        width={128}
        height={128}
      />
      {/* <p className='text-xl text-neutral-400'>OPEN FOR COLLABORATION</p> */}
      <h1 className='text-white mt-2'>
        <span className='accent'>Andhika</span> Dwi Khalisyahputra
      </h1>
      <p className='text-sm md:text-base text-neutral-300 mt-2'>
        Designer? Software engineer? I don&apos;t know, I just love to code.
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

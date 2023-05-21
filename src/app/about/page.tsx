// This Website inspired by:

// - theodorusclarence.com
// - elianiva.my.id
// - delba.dev
// - and many more
import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <>
      <section id='about-me' className='flex flex-col pt-12 md:pt-28'>
        <h1>
          About <span className='font-bold accent'>Me</span>
        </h1>
        <div className='grid grid-cols-3 gap-4 place-items-center'>
          <div className='col-span-3 py-4 md:col-span-1 md:order-last md:py-0'>
            <Image
              src='https://avatars.githubusercontent.com/u/74821917?v=4'
              alt='Andhika Dwi Khalisyahputra'
              className='duration-300 rounded-md hover:-rotate-3'
              quality={100}
              width={256}
              height={256}
            />
          </div>
          <article className='col-span-3 md:col-span-2'>
            <p className='mt-4'>
              Hi, my name is Andhika Dwi Khalisyahputra. I&apos;m a software
              engineer from Indonesia who prefer backend development. I am
              currently studying at Polinema majoring in Business Information
              System. since 2021, I started learning the programming logic with
              Java. Then I learned the basics of web development since early
              2022 cause in college there are basic web development subjects. of
              course I learned it with HTML, CSS, PHP and Javascript.
            </p>
            <p className='mt-4'>
              I possess strong logical reasoning skills and am a fast learner.
              In addition to my technical skills, I have experience in UI/UX and
              logo design. I enjoy exploring new technologies and coding, and am
              always looking for opportunities to expand my knowledge.
            </p>
            <p className='mt-4'>
              This website is made to show my portfolio and my achievement. I
              hope you enjoy and I also thanks to people who inspired me to make
              this website
            </p>
          </article>
        </div>
      </section>
      <section id='about-website' className='flex flex-col pt-12'>
        <h1>Contact</h1>
        <article className='mt-4 md:w-2/3'>
          <p>
            To get in touch with me, you can find my social media and email in
            the footer. I will respond to your message as soon as possible. 😁
          </p>
        </article>
      </section>
    </>
  );
};

export default AboutPage;

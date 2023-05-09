import Link from 'next/link';

import { footerLinks } from '@/constants';

const Footer = () => {
  return (
    <footer className='layout mt-12 pb-28 md:pb-0'>
      <div className='flex flex-col text-center items-center justify-center gap-6 p-4 border-t border-neutral-700'>
        <div className='flex flex-wrap items-center justify-evenly gap-6'>
          {footerLinks.map(({ name, link, target }) => (
            <Link
              key={link}
              href={link}
              target={target}
              className='link animated-underline'>
              {name}
            </Link>
          ))}
        </div>
        <div>
          <p className='text-sm text-neutral-400'>
            &copy; Andhika Dwi Khalisyahputra {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

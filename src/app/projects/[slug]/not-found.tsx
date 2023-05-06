import Link from 'next/link';

const NotFound = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-4 py-40 md:py-64'>
      <h1>Project not found</h1>
      <Link href='/projects' className='link animated-underline'>
        Go back
      </Link>
    </section>
  );
};

export default NotFound;

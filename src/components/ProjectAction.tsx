import Link from 'next/link';
import { BiLink } from 'react-icons/bi';
import { SiGithub } from 'react-icons/si';

const ProjectAction = ({
  source,
  demo,
}: {
  source?: string;
  demo?: string;
}) => {
  return (
    <>
      {source && (
        <Link
          href={source}
          target='_blank'
          className='flex items-center gap-1 link animated-underline'>
          <SiGithub /> Source
        </Link>
      )}
      {demo && (
        <Link
          href={demo}
          target='_blank'
          className='flex items-center gap-1 link animated-underline'>
          <BiLink /> Demo
        </Link>
      )}
    </>
  );
};

export default ProjectAction;

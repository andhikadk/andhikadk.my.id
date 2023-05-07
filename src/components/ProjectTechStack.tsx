import React from 'react';
import * as SiIcon from 'react-icons/si';

import { IconType } from '@/interfaces';

const ProjectTechStack = ({
  stack,
  isPreview,
}: {
  stack: string[];
  isPreview?: boolean;
}) => {
  const iconList: IconType = SiIcon;

  return (
    <ul className='flex flex-row gap-2 flex-1'>
      {stack.map((tech, index) => {
        const Icon = iconList[tech[1]];
        if (isPreview && index > 2) return null;
        return (
          <li key={tech[1]}>
            <Icon className='inline-block' />
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectTechStack;

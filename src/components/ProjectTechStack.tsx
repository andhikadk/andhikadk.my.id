import React from 'react';
import * as SiIcon from 'react-icons/si';
import { Tooltip } from 'react-tooltip';

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
    <ul className='flex flex-row flex-1 gap-2'>
      {stack.map((tech, index) => {
        const Icon = iconList[tech[1]];
        if (isPreview && index > 2) return null;
        return (
          <li key={tech[1]}>
            <Tooltip id={tech[0]} />
            <Icon
              className='inline-block cursor-pointer'
              data-tooltip-id={tech[0]}
              data-tooltip-content={tech[0]}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectTechStack;

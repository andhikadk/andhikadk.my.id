'use client';
import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import * as AiIcon from 'react-icons/ai';

import { routes } from '@/constants';
import { IconType } from '@/interfaces';

const Header = () => {
  const pathname = usePathname();
  const iconList: IconType = AiIcon;

  return (
    <header>
      <nav className='flex items-center h-fit'>
        <div className='flex flex-row gap-6 text-white md:gap-8'>
          {routes.map((route) => {
            const isRouteActive = pathname === route.path;
            const Icon = isRouteActive
              ? iconList[route.icon.active]
              : iconList[route.icon.inactive];
            return (
              <Link
                key={route.path}
                href={route.path}
                className={clsx(
                  'flex flex-col md:flex-row items-center justify-center gap-2 font-semibold hover:text-emerald-500',
                  isRouteActive && 'text-emerald-500'
                )}>
                <Icon className='inline-block w-5 h-5' />
                <span className='inline text-xs md:text-base'>
                  {route.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Header;

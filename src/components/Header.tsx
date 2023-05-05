'use client';
import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import { routes } from '@/constants';
import { Icon } from '@iconify/react';

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <nav className='flex items-center justify-center'>
        <div className='flex flex-row text-white gap-8'>
          {routes.map((route) => {
            const isRouteActive = pathname === route.path;
            return (
              <Link
                href={route.path}
                key={route.path}
                className={clsx(
                  'flex flex-row items-center justify-center gap-2 font-semibold hover:text-emerald-500',
                  isRouteActive && 'text-emerald-500'
                )}>
                <Icon
                  icon={isRouteActive ? route.icon.active : route.icon.inactive}
                  width='20'
                  height='20'
                />
                <span className='hidden md:inline'>{route.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Header;

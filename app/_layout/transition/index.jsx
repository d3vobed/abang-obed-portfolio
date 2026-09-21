'use client';

import { useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

import { useLenis, useTimeOut } from '@/hooks';

import { Preloader } from './preloader';

/** @param {import('react').PropsWithChildren<{ skipPreload?: boolean }>} */
export function Transition({ children, skipPreload = false }) {
  const [isLoading, setLoading] = useState(true);
  const pathname = usePathname();

  useLenis();
  useTimeOut({
    callback: () => {
      setLoading(false);
      window.scrollTo(0, 0);
    },
    duration: skipPreload ? 0 : 2000,
    deps: [skipPreload],
  });

  return (
    <div key={pathname} className='overflow-hidden'>
      <AnimatePresence mode='wait'>
        {isLoading && !skipPreload ? <Preloader /> : null}
      </AnimatePresence>
      {children}
    </div>
  );
}

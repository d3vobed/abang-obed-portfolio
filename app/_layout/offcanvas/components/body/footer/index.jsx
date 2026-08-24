'use client';

import Link from 'next/link';

import { MagneticButton, ThemeToggle } from '@/components';
import { socialMedias } from '@/data';
import { randomId } from '@/utils';

export function OffcanvasFooter() {
  const medias = socialMedias.map(({ href, title }) => {
    const id = randomId();
    return (
      <li key={id}>
        <Link href={href} target='_blank' rel='noopener' passHref>
          <MagneticButton>{title}</MagneticButton>
        </Link>
      </li>
    );
  });

  return (
    <div>
      <div className='mb-6 flex justify-start'>
        <ThemeToggle className='!text-background !border-background/40' />
      </div>
      <ul className='flex w-full flex-wrap gap-x-6 gap-y-3'>{medias}</ul>
    </div>
  );
}

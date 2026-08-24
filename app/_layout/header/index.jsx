'use client';

import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { MoveDownRight } from 'lucide-react';
import Image from 'next/image';

import { ParallaxSlider } from '@/components';

import { slideUp } from './variants';

const heroImages = [
  '/images/film-still.png',
  '/images/screenshot-2.png',
  '/images/film-still1.png',
  '/images/screenshot-3.png',
  '/images/film-char.png',
  '/images/screenshot-1.png',
  '/images/screenshot-extra.png',
  '/images/screenshot-4.png',
];

export function Header() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIdx((i) => (i + 1) % heroImages.length),
      4500
    );
    return () => clearInterval(t);
  }, []);

  return (
    <motion.header
      className='relative h-screen overflow-hidden bg-secondary-foreground text-background'
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      {heroImages.map((src, i) => (
        <Image
          key={src}
          src={src}
          className={`object-cover transition-opacity duration-1000 md:object-contain md:scale-110 ${
            i === idx ? 'opacity-100' : 'opacity-0'
          }`}
          fill={true}
          sizes='100vw'
          priority={i === 0}
          alt=''
        />
      ))}

      {/* shade + gradient so the white photo stays readable */}
      <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/30' />
      <div className='pointer-events-none absolute inset-0 bg-secondary-foreground/10' />

      <div className='relative flex h-full flex-col justify-end gap-2 md:flex-col-reverse md:justify-normal'>
        <div className='select-none'>
          <h1 className='text-[max(9em,15vw)]'>
            <ParallaxSlider repeat={4} baseVelocity={2}>
              <span className='pe-12'>Abang obX Obed Amen</span>
            </ParallaxSlider>
          </h1>
        </div>

        <div className='md:ml-auto'>
          <div className='mx-10 max-md:my-12 md:mx-36'>
            <div className='mb-4 md:mb-20'>
              <MoveDownRight size={28} strokeWidth={1.25} />
            </div>

            <h4 className='text-[clamp(1.55em,2.5vw,2.75em)]'>
              <span className='block'>Security Engineer</span>
              <span className='block'>Researcher &amp; Filmmaker</span>
            </h4>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

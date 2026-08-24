'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import { MagneticButton, ParallaxFade, ParallaxReveal } from '@/components';

import { Title, Wrapper } from './index.styled';

const phrase =
  'I work in security engineering and research — studying how systems behave under observation and where their assumptions break. The rest of the time I make films about people.';

export function Description() {
  return (
    <article className='container relative'>
      <Wrapper>
        <div className='basis-full lg:basis-9/12'>
          <Title>
            <ParallaxReveal paragraph={phrase} />
          </Title>
        </div>

        <div className='basis-7/12 lg:basis-3/12'>
          <ParallaxFade>
            <Balancer as='p' className='mt-2 text-base lg:text-lg'>
              Based in Abuja, Nigeria. Six years of practical work across
              security operations, offensive research and systems — carried
              alongside a life in cinema.
            </Balancer>
          </ParallaxFade>
        </div>

        <motion.div
          whileInView={{ y: '-15%' }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
          }}
        >
          <div className='group absolute right-0 top-3/4 lg:top-full lg:me-10'>
            <Link href='/about' passHref>
              <MagneticButton variant='ghost' size='xl'>
                About me
              </MagneticButton>
            </Link>
            <div className='pointer-events-none absolute -right-4 top-1/2 z-30 h-40 w-40 -translate-y-1/2 translate-x-full scale-0 overflow-hidden rounded-full opacity-0 shadow-2xl transition-all duration-500 ease-in-expo group-hover:scale-100 group-hover:opacity-100'>
              <Image
                src='/images/asa.jpg'
                fill={true}
                alt='Abang Obed'
                className='object-cover'
              />
            </div>
          </div>
        </motion.div>
      </Wrapper>
    </article>
  );
}

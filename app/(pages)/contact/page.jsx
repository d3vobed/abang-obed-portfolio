import { Center, MagneticButton, ParallaxSlider } from '@/components';
import { socialMedias } from '@/data';
import { Transition } from '@/layout';
import { randomId } from '@/utils';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with Abang Obed — security work and film work both welcome.',
};

export default function Contact() {
  return (
    <Transition>
      <Center className='h-screen flex-col'>
        <div className='select-none mb-24'>
          <h1 className='text-[max(9.5em,15vw)]'>
            <ParallaxSlider repeat={6} baseVelocity={2}>
              <span className='pe-12'>
                Get in touch
                <span className='spacer'>—</span>
              </span>
            </ParallaxSlider>
          </h1>
        </div>
        <ul className='flex max-lg:flex-col items-center gap-8'>
          {socialMedias.map(({ href, title }) => {
            const id = randomId();
            return (
              <li key={id}>
                <a href={href} target='_blank' rel='noopener'>
                  <MagneticButton variant='outline'>{title}</MagneticButton>
                </a>
              </li>
            );
          })}
        </ul>
      </Center>
    </Transition>
  );
}

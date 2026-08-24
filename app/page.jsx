import {
  Contact,
  Description,
  Header,
  Navbar,
  Project,
  Thumbnail,
  Transition,
  Works,
} from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Home | Abang Obed',
  description:
    'Abang Obed — Security Engineer, Security Researcher and Filmmaker based in Abuja, Nigeria. Security work and cinema under one roof.',
};

export default function Home() {
  return (
    <Transition>
      <Navbar />
      <Header />
      <main>
        <Description />
        <Thumbnail />
        <Works />
        <Project />
      </main>
      <Contact />
    </Transition>
  );
}

import {
  Contact,
  Description,
  Header,
  HomeGallery,
  Navbar,
  Project,
  Thumbnail,
  Transition,
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
        <HomeGallery />
        <Project />
      </main>
      <Contact />
    </Transition>
  );
}

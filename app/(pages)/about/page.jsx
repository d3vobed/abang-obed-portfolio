import { ArrowUpRight, FileDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { awards, education, experience, skillTags } from '@/data';
import {
  ContactBand,
  HandLabel,
  NoteSticky,
  Polaroid,
  Sel,
  SiteFooter,
  Sticker,
  TagBlock,
  TopBar,
} from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'About',
  description:
    'Abang Obed — Security Engineer, Security Researcher and Indie Filmmaker from Cross River, Nigeria, based in Abuja.',
};

export default function About() {
  return (
    <div className='canvas-bg min-h-screen'>
      <TopBar />

      <main className='mx-auto max-w-[1200px] px-4 pb-10 pt-14 sm:px-8'>
        {/* header */}
        <div className='text-center'>
          <HandLabel className='-rotate-3'>who&apos;s this?</HandLabel>
          <h1 className='cv-pixel-title mt-6 !text-[clamp(56px,10vw,130px)]'>About</h1>
          <p className='cv-label mt-8 text-[#6b7375]'>
            Cross River → Abuja · Security × Cinema
          </p>
        </div>

        {/* bio */}
        <section className='relative mt-20 grid items-start gap-12 lg:grid-cols-[240px_1fr]'>
          <div className='mx-auto lg:mx-0'>
            <Polaroid
              src='/images/avatar.jpg'
              alt='Pixel portrait of Abang Obed'
              caption='abang obX obed'
              className='rotate-[-5deg]'
              width={400}
              height={400}
            />
          </div>

          <div className='max-w-[720px]'>
            <h2 className='text-[clamp(26px,3.2vw,42px)] font-bold leading-[1.12] tracking-tight'>
              Security Engineer · Security Researcher · Filmmaker
            </h2>
            <p className='mt-7 text-[16px] leading-[1.8] text-[#43494b]'>
              I&apos;m a curious person who enjoys building things and understanding
              how they work. That curiosity led me into cybersecurity, where I work
              across detection engineering, security operations, malware, and
              application security research. I spend most of my time exploring how
              systems behave, how attacks evade visibility, and how we can build
              better ways to detect and respond to them. I enjoy turning ideas into
              practical tools and research that people can actually use.
            </p>
            <p className='mt-5 text-[16px] leading-[1.8] text-[#43494b]'>
              Outside of cybersecurity, I write and make films. It may seem like a
              different world, but it is driven by the same curiosity of asking
              questions, solving problems, and telling stories that matter. I&apos;m
              always learning, building, and looking for opportunities to work with
              people who enjoy solving meaningful problems. If that sounds like you,
              I would be happy to connect.
            </p>

            <div className='mt-9 flex flex-wrap items-center gap-3'>
              {skillTags.map(t => (
                <TagBlock key={t.label} {...t} className='!px-4 !py-2 !text-[15px]' />
              ))}
            </div>

            <div className='mt-9 flex flex-wrap gap-4'>
              <a href='/files/abang-obed-resume.pdf' target='_blank' rel='noreferrer' className='cv-cta'>
                <span className='cv-cta-icon'>
                  <FileDown size={15} aria-hidden />
                </span>
                grab the cv
              </a>
              <Link href='/contact' className='cv-link self-center'>
                say hello <ArrowUpRight size={13} aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        {/* experience */}
        <section className='mt-28'>
          <div className='flex flex-wrap items-end justify-between gap-6'>
            <div>
              <HandLabel className='-rotate-2'>the paper trail</HandLabel>
              <h2 className='cv-pixel-title mt-4 !text-[clamp(40px,6.5vw,84px)]'>Experience</h2>
            </div>
            <NoteSticky className='rotate-2'>
              Roles, contracts and research stints — verbatim, no garnish.
            </NoteSticky>
          </div>

          <div className='mt-12 flex flex-col'>
            {experience.map((job, i) => (
              <article
                key={job.org + job.period}
                className='group grid gap-4 border-t-[1.5px] border-[#111212] py-8 last:border-b-[1.5px] md:grid-cols-[260px_1fr] md:gap-10'
              >
                <div>
                  <p className='cv-label flex items-center gap-2 text-[#6b7375]'>
                    <span className='font-pixel text-[15px] font-bold tracking-normal text-[#111212]'>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {job.period}
                  </p>
                  <p className='cv-label mt-2 text-[#9aa39f]'>{job.place}</p>
                </div>
                <div>
                  <h3 className='text-[clamp(20px,2.2vw,27px)] font-bold leading-tight tracking-tight'>
                    {job.org}
                    <span className='text-[#6b7375]'> — {job.role}</span>
                  </h3>
                  <ul className='mt-4 flex flex-col gap-2'>
                    {job.points.map(p => (
                      <li key={p} className='flex gap-3 text-[15px] leading-relaxed text-[#43494b]'>
                        <span className='mt-[9px] size-1.5 flex-none rounded-full bg-[#111212]' aria-hidden />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* education & certs */}
        <section className='mt-24'>
          <HandLabel className='-rotate-2'>receipts</HandLabel>
          <h2 className='cv-pixel-title mt-4 !text-[clamp(40px,6.5vw,84px)]'>
            Edu&nbsp;&&nbsp;Certs
          </h2>

          <div className='mt-12 grid gap-6 md:grid-cols-2'>
            {education.map(e => (
              <article key={e.title} className='cv-mini flex flex-col p-7'>
                <p className='cv-label text-[#6b7375]'>{e.period}</p>
                <h3 className='mt-4 text-[20px] font-bold leading-snug tracking-tight'>{e.title}</h3>
                <p className='font-dmono mt-1.5 text-[12.5px] uppercase tracking-[0.08em] text-[#e01e5a]'>
                  {e.org}
                </p>
                <p className='mt-4 text-[15px] leading-relaxed text-[#43494b]'>{e.detail}</p>
              </article>
            ))}
          </div>
        </section>

        {/* awards */}
        <section className='mt-24'>
          <h2 className='cv-pixel-title !text-[clamp(40px,6.5vw,84px)]'>Honors</h2>
          <div className='mt-10 flex flex-wrap gap-3.5'>
            {awards.map((a, i) => (
              <Sticker
                key={a.label}
                label={`${a.label} · ${a.detail} · ${a.year}`}
                color={['green', 'sky', 'yellow', 'pink', 'cream', 'green'][i % 6]}
                className='!normal-case'
              />
            ))}
          </div>
        </section>
      </main>

      <div className='mt-20'>
        <ContactBand />
      </div>
      <SiteFooter />
    </div>
  );
}

import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import {
  about,
  educationBlock,
  floatTiles,
  hero,
  honorsBlock,
  profile,
  projectsBlock,
  reel,
  worksDone,
} from '@/data';
import {
  AboutPhotos,
  ContactBand,
  FloatTiles,
  HandLabel,
  Honors,
  PresetCard,
  PresetFrame,
  ProjectWindow,
  Reel,
  Rise,
  SectionHead,
  Sel,
  SiteFooter,
  Typed,
} from '@/layout';

import './canvas.css';

export default function Home() {
  return (
    <main>
      {/* ================= hero: one window, three floating objects ================= */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(36px, 6vw, 80px) 0 36px' }}>
        <FloatTiles tiles={floatTiles} />

        <div className='wrap' style={{ position: 'relative', zIndex: 2, display: 'grid', justifyItems: 'center' }}>
          <Rise>
            <HandLabel>{hero.label}</HandLabel>
          </Rise>

          <Rise delay={80}>
            <div className='cv-hero-window'>
              <div className='cv-window-bar'>
                <span className='wb-dots' aria-hidden='true'>
                  <i />
                  <i />
                  <i />
                </span>
                <span className='wb-title'>{hero.window}</span>
                <span className='wb-spacer' />
              </div>

              <div className='cv-hero-window-body'>
                <h1 className='cv-hero-name'>{profile.name}</h1>
                <Typed />
                <p className='cv-hero-intro'>{hero.intro}</p>

                <p className='mono cv-hero-status'>
                  <span
                    style={{
                      width: 9,
                      height: 9,
                      borderRadius: 99,
                      background: 'var(--green)',
                      display: 'inline-block',
                      boxShadow: '0 0 0 4px rgba(41, 165, 108, .18)',
                    }}
                  />
                  {profile.availability}
                </p>

                <div className='cv-hero-actions'>
                  <Link href='/contact' className='cv-btn cv-btn--ink'>
                    Contact me <ArrowUpRight size={14} />
                  </Link>
                  <a href='#about' className='cv-btn'>
                    Scroll down <ArrowDown size={14} />
                  </a>
                </div>
              </div>
            </div>
          </Rise>
        </div>
      </section>

      {/* ================= highlights reel ================= */}
      <section className='cv-section' style={{ paddingTop: 0 }}>
        <div className='wrap'>
          <Rise>
            <Reel src='/videos/highlights.mp4' poster={reel.poster} sub={reel.sub} />
          </Rise>
        </div>
      </section>

      {/* ================= 01 about ================= */}
      <section className='cv-section' id='about'>
        <div className='wrap'>
          <Rise>
            <SectionHead kicker={about.kicker} title={about.title} sub={about.sub} />
          </Rise>
          <Rise delay={60}>
            <AboutPhotos photos={about.photos}>
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} style={{ margin: 0, maxWidth: 560 }}>
                  {p}
                </p>
              ))}
              <dl className='cv-facts'>
                {about.facts.map(([t, d]) => (
                  <div key={t}>
                    <dt>{t}</dt>
                    <dd>{d}</dd>
                  </div>
                ))}
              </dl>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href='/filmography' className='cv-btn'>
                  Watch the films <ArrowUpRight size={14} />
                </Link>
                <Link href='/contact' className='cv-btn'>
                  Say hello <ArrowUpRight size={14} />
                </Link>
              </div>
            </AboutPhotos>
          </Rise>
        </div>
      </section>

      {/* ================= 02 works done (preset frame) ================= */}
      <section className='cv-section'>
        <div className='wrap'>
          <Rise>
            <SectionHead kicker={worksDone.kicker} title={worksDone.title} sub={worksDone.sub} />
          </Rise>
          <Rise delay={60}>
            <PresetFrame brand={worksDone.frame.brand} meta={worksDone.frame.meta}>
              <div className='cv-presets'>
                {worksDone.roles.map((p) => (
                  <PresetCard key={p.idx} {...p} />
                ))}
              </div>
            </PresetFrame>
          </Rise>
        </div>
      </section>

      {/* ================= 03 education ================= */}
      <section className='cv-section'>
        <div className='wrap'>
          <Rise>
            <SectionHead kicker={educationBlock.kicker} title={educationBlock.title} sub={educationBlock.sub} />
          </Rise>
          <Rise delay={60}>
            <div className='cv-presets'>
              {educationBlock.schools.map((s, i) => (
                <PresetCard
                  key={s.school}
                  idx={`EDU 0${i + 1}`}
                  title={s.school}
                  body={`${s.degree}. ${s.note}`}
                  stack={s.dates}
                  dark={i % 2 === 1}
                />
              ))}
            </div>
          </Rise>
        </div>
      </section>

      {/* ================= 04 projects (OS window) ================= */}
      <section className='cv-section'>
        <div className='wrap'>
          <Rise>
            <SectionHead kicker={projectsBlock.kicker} title={projectsBlock.title} sub={projectsBlock.sub} />
          </Rise>
          <Rise delay={60}>
            <ProjectWindow
              left={projectsBlock.window.left}
              mid={projectsBlock.window.mid}
              right={projectsBlock.window.right}
              projects={projectsBlock.projects}
            />
          </Rise>
        </div>
      </section>

      {/* ================= 05 honors ================= */}
      <section className='cv-section'>
        <div className='wrap'>
          <Rise>
            <SectionHead kicker={honorsBlock.kicker} title={honorsBlock.title} sub={honorsBlock.sub} />
          </Rise>
          <Rise delay={60}>
            <Honors honors={honorsBlock.honors} />
          </Rise>
        </div>
      </section>

      <ContactBand />
      <SiteFooter />
    </main>
  );
}

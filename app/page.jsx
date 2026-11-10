import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import {
  about,
  educationBlock,
  floatTiles,
  hero,
  honorsBlock,
  notepad,
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
  HeroNotepad,
  Honors,
  LicenseCard,
  PaperCard,
  PresetCard,
  ProjectWindow,
  Reel,
  Rise,
  ScrollProgress,
  SectionHead,
  SiteFooter,
  Typed,
  WorksPlaylist,
} from '@/layout';

import './canvas.css';

export default function Home() {
  const notepadTile = floatTiles.find((t) => t.action === 'notepad');
  const staticTiles = floatTiles.filter((t) => t.action !== 'notepad');

  return (
    <main>
      <ScrollProgress />

      {/* ================= hero: full height, rails both sides, floating objects ================= */}
      <section className='cv-hero' style={{ position: 'relative', overflow: 'hidden' }}>
        <FloatTiles tiles={staticTiles} />
        {notepadTile ? <HeroNotepad tile={notepadTile} title={notepad.title} seed={notepad.seed} /> : null}

        <div className='wrap cv-hero-grid'>
          {/* left rail */}
          <aside className='cv-hero-rail cv-hero-rail--left' aria-label='Quick facts'>
            <div className='rail-item'>
              <p className='rail-kicker mono'>now</p>
              <p className='rail-val'>{hero.now}</p>
            </div>
            <div className='rail-item'>
              <p className='rail-kicker mono'>focus</p>
              <p className='rail-val'>{hero.focus}</p>
            </div>
            <div className='rail-item'>
              <p className='rail-kicker mono'>cert</p>
              <p className='rail-val'>{hero.cert}</p>
            </div>
          </aside>

          {/* center window */}
          <div className='cv-hero-center'>
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
                    <a href='#about' className='cv-btn cv-btn--ink'>
                      Scroll down <ArrowDown size={14} />
                    </a>
                    <a href='#works' className='cv-btn'>
                      See the works <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </Rise>

            <Rise delay={160}>
              <p className='cv-hero-hint mono'>{hero.hint}</p>
            </Rise>
          </div>

          {/* right rail */}
          <aside className='cv-hero-rail cv-hero-rail--right' aria-label='Jump to section'>
            {hero.rails.map((r) => (
              <a key={r.n} href={r.href} className='rail-jump'>
                <span className='dep rail-n'>{r.n}</span>
                <span>{r.label}</span>
                <ArrowDown size={12} aria-hidden='true' />
              </a>
            ))}
          </aside>
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

      {/* ================= 02 works done (experiments playlist) ================= */}
      <section className='cv-section' id='works'>
        <div className='wrap'>
          <Rise>
            <SectionHead kicker={worksDone.kicker} title={worksDone.title} sub={worksDone.sub} />
          </Rise>
          <Rise delay={60}>
            <WorksPlaylist items={worksDone.roles} />
          </Rise>
        </div>
      </section>

      {/* ================= 03 education & license ================= */}
      <section className='cv-section' id='education'>
        <div className='wrap'>
          <Rise>
            <SectionHead
              kicker={educationBlock.kicker}
              title={educationBlock.title}
              sub={educationBlock.sub}
            />
          </Rise>

          <div className='cv-edu-grid'>
            <div className='cv-edu-col'>
              <Rise delay={40}>
                <div className='cv-presets cv-presets--single'>
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

              {educationBlock.papers.map((p, i) => (
                <Rise key={p.idx} delay={100 + i * 80}>
                  <PaperCard idx={p.idx} title={p.title} meta={p.meta} />
                </Rise>
              ))}
            </div>

            <Rise delay={140} className='cv-edu-col-r'>
              <LicenseCard license={educationBlock.license} />
            </Rise>
          </div>
        </div>
      </section>

      {/* ================= 04 projects (OS window) ================= */}
      <section className='cv-section' id='projects'>
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

      {/* ================= 05 honors (3x3) ================= */}
      <section className='cv-section' id='honors'>
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

      {/* ================= highlights reel (closing frame) ================= */}
      <section className='cv-section' style={{ paddingTop: 0 }}>
        <div className='wrap'>
          <Rise>
            <Reel src='/videos/highlights.mp4' poster={reel.poster} sub={reel.sub} />
          </Rise>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

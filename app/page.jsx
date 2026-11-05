import { ArrowDown, ArrowUpRight, Heart } from 'lucide-react';
import Link from 'next/link';

import {
  about,
  educationBlock,
  floatTiles,
  heroStickers,
  honorsBlock,
  make,
  profile,
  projectsBlock,
  reel,
} from '@/data';
import {
  AboutPhotos,
  ContactBand,
  FloatTiles,
  HandLabel,
  Honors,
  OrbitField,
  PresetCard,
  Reel,
  SectionHead,
  Sel,
  SiteFooter,
  Sticker,
  Ticker,
  Typed,
} from '@/layout';

import './canvas.css';

const STICKER_POS = {
  top: { top: '-6px', left: '12%', '--rot': '-4deg' },
  left: { top: '38%', left: '-10px', '--rot': '-10deg' },
  right: { top: '16%', right: '-6px', '--rot': '9deg' },
  bleft: { bottom: '10%', left: '2%', '--rot': '6deg' },
  bright: { bottom: '4%', right: '4%', '--rot': '-7deg' },
};

export default function Home() {
  return (
    <main>
      {/* ================= hero ================= */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(40px, 7vw, 90px) 0 30px' }}>
        <OrbitField />
        <FloatTiles tiles={floatTiles} />

        <div className='wrap' style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          {heroStickers.map((s) => (
            <Sticker
              key={s.label}
              color={s.color}
              className='cv-float cv-hero-sticker'
              style={{ position: 'absolute', zIndex: 1, ...STICKER_POS[s.className] }}
            >
              {s.label}
            </Sticker>
          ))}

          <HandLabel className='cv-float' style={{ display: 'inline-block', '--rot': '0deg', '--dur': '6s' }}>
            my name is
          </HandLabel>

          <Sel style={{ display: 'inline-block', margin: '10px auto 18px', background: 'transparent' }}>
            <h1 className='cv-pixel-title'>{profile.firstName}</h1>
          </Sel>

          <div className='cv-float' style={{ '--dur': '8.5s' }}>
            <Typed className='cv-float' />
          </div>

          <p
            className='mono'
            style={{ fontSize: 12, marginTop: 14, display: 'inline-flex', alignItems: 'center', gap: 8 }}
          >
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

          <div style={{ marginTop: 22 }}>
            <a href='#about' className='cv-btn'>
              <ArrowDown size={14} />
              Scroll
            </a>
          </div>
        </div>
      </section>

      <Ticker />

      {/* ================= 01 about ================= */}
      <section className='cv-section' id='about'>
        <div className='wrap'>
          <SectionHead kicker={about.kicker} title={about.title} sub={about.sub} />
          <AboutPhotos photos={about.photos}>
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} style={{ margin: 0, maxWidth: 560 }}>
                {p}
              </p>
            ))}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 4 }}>
              <a href={about.cv} className='cv-btn cv-btn--ink' target='_blank' rel='noopener'>
                Grab the CV
              </a>
              <Link href='/contact' className='cv-btn'>
                Say hello <ArrowUpRight size={14} />
              </Link>
            </div>
          </AboutPhotos>
        </div>
      </section>

      {/* ================= highlights reel ================= */}
      <section className='cv-section'>
        <div className='wrap'>
          <Reel src='/videos/highlights.mp4' poster={reel.poster} sub={reel.sub} />
        </div>
      </section>

      {/* ================= 02 what i make ================= */}
      <section className='cv-section'>
        <div className='wrap'>
          <SectionHead
            kicker={make.kicker}
            title={make.title}
            sub={make.sub}
            right={
              <Link href='/works/film' className='cv-btn'>
                All works <ArrowUpRight size={14} />
              </Link>
            }
          />
          <div className='cv-presets'>
            {make.presets.map((p) => (
              <PresetCard key={p.idx} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= 03 education ================= */}
      <section className='cv-section'>
        <div className='wrap'>
          <SectionHead kicker={educationBlock.kicker} title={educationBlock.title} sub={educationBlock.sub} />
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
        </div>
      </section>

      {/* ================= 04 projects ================= */}
      <section className='cv-section'>
        <div className='wrap'>
          <SectionHead kicker={projectsBlock.kicker} title={projectsBlock.title} sub={projectsBlock.sub} />
          <div className='cv-projlist'>
            {projectsBlock.projects.map((p) => (
              <div className='cv-proj' key={p.name}>
                <span className='year'>{p.year}</span>
                <h3>{p.name}</h3>
                <p>{p.body}</p>
                <span className='tags'>{p.tags}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 05 honors ================= */}
      <section className='cv-section'>
        <div className='wrap'>
          <SectionHead kicker={honorsBlock.kicker} title={honorsBlock.title} sub={honorsBlock.sub} />
          <Honors honors={honorsBlock.honors} />
        </div>
      </section>

      <ContactBand />
      <SiteFooter />
    </main>
  );
}

import fs from 'fs';
import matter from 'gray-matter';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import path from 'path';

import { NovoraMarquee } from '@/components';

import { ctfs, disclosures, projects } from './_components/works/data';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Home | Abang Obed',
  description:
    'Abang Obed — Security Engineer, Security Researcher and Filmmaker based in Abuja, Nigeria. Security work and cinema under one roof.',
};

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog');

function getPosts() {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter(f => f.endsWith('.md'))
    .map(f => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, f), 'utf8');
      const { data } = matter(raw);
      const date = data.date
        ? typeof data.date === 'string'
          ? data.date
          : data.date.toISOString().slice(0, 10)
        : '';
      return {
        slug: f.replace(/\.md$/, ''),
        title: data.title || f,
        date,
        tag: data.tag || 'Post',
        excerpt: data.excerpt || '',
        image: data.image || '',
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 2);
}

const capabilities = [
  {
    num: '001',
    title: 'Security Engineering',
    pitch:
      'Detection engineering, SOC operations, purple teaming and security architecture across web, API, cloud and endpoint.',
    incl: ['Detection & SIEM rules', 'Incident response', 'DeFi & protocol security'],
  },
  {
    num: '002',
    title: 'Offensive Research',
    pitch:
      'Bug bounty and vulnerability research — web, mobile, AI and large language models — with a track record of credited disclosures.',
    incl: ['Web & API vulnerabilities', 'LLM / AI red teaming', 'Responsible disclosure'],
  },
  {
    num: '003',
    title: 'Cloud & Systems',
    pitch:
      'AWS, Azure and hybrid infrastructure — IAM, resilience, CORS and deployment reliability across production systems.',
    incl: ['AWS / Azure hardening', 'Identity & access', 'Reliability engineering'],
  },
  {
    num: '004',
    title: 'Engineering & Media',
    pitch:
      'Backend systems, AI tooling and filmmaking — from NestJS APIs and ML prototypes to writing, directing and cinematography.',
    incl: ['Backend & APIs', 'AI applications', 'Film & narrative'],
  },
];

const processSteps = [
  {
    title: 'Scope & understand',
    pitch: 'Map the systems, surface assumptions, and define what “good” looks like.',
  },
  {
    title: 'Dig & test',
    pitch: 'Push past the happy path — enumerate, probe and break where it matters.',
  },
  {
    title: 'Analyze & document',
    pitch: 'Turn findings into clear, prioritized, reproducible reports.',
  },
  {
    title: 'Harden & follow up',
    pitch: 'Confirm fixes, tighten detection, and make sure it stays fixed.',
  },
];

const stats = [
  { value: '5+', label: 'years in security & engineering (2021–2026)' },
  { value: '9+', label: 'validated security disclosures, triaged & credited' },
  { value: '#59', label: 'global rank — Judgement Day AI Red Team Arena' },
];

const timeline = [
  { year: '2026', note: 'Lead Security Engineer at Kynettic; crypto security assessments, DeFi protocol reviews.' },
  { year: '2025', note: 'SOC operations at NEMA-HQ; AI red teaming placements across Gray Swan & Judgement Day.' },
  { year: '2024', note: 'CPTS (HackTheBox); backend at Phlex IT; CodeSandbox credited disclosure (GHSA).' },
  { year: '2023', note: 'AWS & cloud consulting; CyberSafe HQ HackTheBox 1st place; wireless security talk.' },
];

const awards = [
  { org: 'NCAIR', title: 'Dementia Chatbot Hackathon', meta: 'Winner · $1,000 grant · 2025' },
  { org: 'Opik Comet', title: 'AI Budgeting Agent Hackathon', meta: 'Runner-Up · 2026' },
  { org: 'Gemini', title: 'LiDAR Spatial Assistant', meta: 'Special Recognition · 2026' },
  { org: 'CyberSafe HQ', title: 'HackTheBox Competition', meta: '1st Place · 2023' },
];

const orgBand = [
  'Kynettic',
  'NEMA-HQ',
  'ATL Labs',
  'Phlex IT',
  'IDE Nigeria',
  '234coins',
  'FUT Minna',
  'HackTheBox',
];

export default function Home() {
  const posts = getPosts();
  const selected = projects.slice(0, 4);

  return (
    <>
      <main>
        {/* Hero */}
        <section className='nv-hero'>
          <div className='nv-container'>
            <div className='nv-hero-top'>
              <span>Abuja · Nigeria</span>
              <span>EST. 2021</span>
              <span>Security × Cinema</span>
            </div>
            <h1>
              Abang
              <span className='outline' style={{ paddingRight: '0.12em' }}>obX</span>
              <br />
              Obed
            </h1>
            <p className='nv-hero-sub'>
              Security Engineer, Security Researcher and Filmmaker — studying how
              systems behave under observation, where their assumptions break,
              and telling the stories of the people caught in between.
            </p>
            <div className='nv-cta-row'>
              <Link href='/about' className='nv-btn nv-btn-solid'>
                See my work <ArrowDownRight size={16} />
              </Link>
              <a href='mailto:obx@wearehackerone.com' className='nv-btn nv-btn-ghost'>
                Request a quote
              </a>
            </div>
            <div className='nv-hero-coords'>
              <span>Lat 9.0579°N</span>
              <span>Lon 7.4951°E</span>
              <span>{new Date().getFullYear()} — Security Engineer · Researcher · Filmmaker</span>
            </div>
          </div>
        </section>

        <NovoraMarquee
          dark
          items={['Offensive Security', 'Detection Engineering', 'Cloud Security', 'LLM Red Teaming', 'Film & Storytelling']}
        />

        {/* Who I am */}
        <section className='nv-section'>
          <div className='nv-container'>
            <span className='nv-label'>Who I am</span>
            <div className='nv-statement'>
              <p className='nv-statement-text'>
                I work in security engineering and research, studying how systems
                behave under observation — and where their <strong>assumptions
                break</strong>. The rest of the time I make films about people.
              </p>
              <div className='nv-statement-aside'>
                <p>
                  Based in Abuja, Nigeria. Six years of practical work across
                  security operations, offensive research and systems, carried
                  alongside a life in cinema.
                </p>
                <a className='nv-mono' href='/files/abang-obed-resume.pdf' target='_blank' rel='noopener'>
                  Download CV (PDF) ↘
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className='nv-section nv-section-alt'>
          <div className='nv-container'>
            <span className='nv-label'>What I do</span>
            <div className='nv-caps'>
              {capabilities.map(c => (
                <div key={c.num} className='nv-cap'>
                  <div className='nv-cap-head'>
                    <h3>{c.title}</h3>
                    <span className='nv-cap-num'>{c.num}</span>
                  </div>
                  <p>{c.pitch}</p>
                  <div className='nv-cap-incl'>
                    <span className='nv-incl-title'>Included</span>
                    <div className='nv-incl-list'>
                      {c.incl.map(i => (
                        <span key={i}>{i}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selected work */}
        <section className='nv-section'>
          <div className='nv-container'>
            <div className='nv-head-row'>
              <div>
                <span className='nv-label'>Selected Work</span>
                <h2 className='nv-h2'>Projects &amp; research</h2>
              </div>
              <Link href='/about' className='nv-mono nv-btn nv-btn-ghost'>
                All work <ArrowUpRight size={14} />
              </Link>
            </div>
            <div className='nv-work-grid'>
              {selected.map((p, i) => (
                <article key={i} className='nv-work-card'>
                  <div className='nv-work-media' style={{ background: 'var(--nv-card)' }}>
                    <span
                      style={{
                        display: 'flex',
                        height: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-jetbrains-mono), monospace',
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        color: 'var(--nv-accent)',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className='nv-work-body'>
                    <div className='nv-work-meta'>
                      <span className='nv-tag'>{p.done ? 'Shipped' : 'In progress'}</span>
                      <span>
                        {i + 1}
                        {' / '}
                        {selected.length}
                      </span>
                    </div>
                    <h3>{p.title}</h3>
                    <p>{p.meta}</p>
                    {p.href ? (
                      <a className='nv-work-link' href={p.href} target='_blank' rel='noopener'>
                        Open ↗
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Logo band */}
        <section className='nv-section nv-section-dark'>
          <div className='nv-container'>
            <div className='nv-band'>
              <h3>
                Organisations I&rsquo;ve worked <em>with</em>
              </h3>
              <div className='nv-logos'>
                {orgBand.map(o => (
                  <span key={o} className='nv-logo-chip'>
                    {o}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className='nv-section'>
          <div className='nv-container'>
            <span className='nv-label'>How I work</span>
            <div className='nv-process'>
              {processSteps.map((s, i) => (
                <div key={i} className='nv-step'>
                  <span className='nv-step-num'>{String(i + 1).padStart(2, '0')}</span>
                  <h3>{s.title}</h3>
                  <p>{s.pitch}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className='nv-section nv-section-alt'>
          <div className='nv-container'>
            <span className='nv-label'>By the numbers</span>
            <div className='nv-stats'>
              {stats.map(s => (
                <div key={s.label} className='nv-stat'>
                  <strong>
                    {s.value}
                    <em>.</em>
                  </strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className='nv-section'>
          <div className='nv-container'>
            <span className='nv-label'>The road so far</span>
            <div className='nv-timeline'>
              <div className='nv-timeline-list'>
                {timeline.map(t => (
                  <div key={t.year} className='nv-tl-item'>
                    <span className='nv-tl-year'>{t.year}</span>
                    <div>
                      <h4>{t.note}</h4>
                    </div>
                  </div>
                ))}
              </div>
              <div className='nv-col-card' style={{ alignSelf: 'start' }}>
                <span className='nv-since'>Education &amp; certification</span>
                <h3>B.Tech in Cyber Security Science</h3>
                <p>Federal University of Technology, Minna — 2021–2026.</p>
                <br />
                <h3>HTB Certified Penetration Testing Specialist</h3>
                <p>HackTheBox — CPTS, issued February 2024.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className='nv-section nv-section-alt'>
          <div className='nv-container'>
            <span className='nv-label'>Recognition</span>
            <div className='nv-awards'>
              {awards.map((a, i) => (
                <div key={i} className='nv-award'>
                  <div className='nv-award-top'>
                    <span>{a.org}</span>
                    <span className='nv-award-count'>{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3>{a.title}</h3>
                  <p>{a.meta}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Signals: disclosures + CTF placements */}
        <section className='nv-section'>
          <div className='nv-container'>
            <span className='nv-label'>Signals</span>
            <div className='nv-head-row'>
              <h2 className='nv-h2'>Disclosures &amp; CTF placements</h2>
            </div>
            <div className='nv-signal-grid'>
              {disclosures.slice(0, 6).map((d, i) => (
                <div key={i} className='nv-signal'>
                  <div className='nv-signal-top'>
                    <span className='nv-chip'>{d.vendor}</span>
                    <span className={`nv-status nv-status-${d.status.split(' ')[0].toLowerCase()}`}>
                      {d.status}
                    </span>
                  </div>
                  <h3>{d.title}</h3>
                  <div className='nv-signal-foot'>
                    <span>{d.year}</span>
                    {d.link ? (
                      <a href={d.link} target='_blank' rel='noopener'>
                        Report ↗
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
            <div className='nv-process' style={{ marginTop: '2.5rem' }}>
              {ctfs.slice(0, 4).map((c, i) => (
                <div key={i} className='nv-step'>
                  <span className='nv-step-num'>{String(i + 1).padStart(2, '0')}</span>
                  <h3>{c.title}</h3>
                  <p>{c.meta}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog */}
        <section className='nv-section nv-section-alt'>
          <div className='nv-container'>
            <div className='nv-head-row'>
              <div>
                <span className='nv-label'>Writing</span>
                <h2 className='nv-h2'>Latest notes</h2>
              </div>
              <Link href='/writing' className='nv-mono nv-btn nv-btn-ghost'>
                All posts <ArrowUpRight size={14} />
              </Link>
            </div>
            <div className='nv-blog-grid'>
              {posts.map(p => (
                <Link key={p.slug} href={`/writing/${p.slug}`} className='nv-post'>
                  {p.image ? (
                    <div className='nv-post-media'>
                      <span
                        style={{
                          display: 'flex',
                          height: '100%',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontFamily: 'var(--font-jetbrains-mono), monospace',
                          fontSize: '1rem',
                          color: 'var(--nv-muted)',
                          letterSpacing: '0.04em',
                          background: 'var(--nv-bg-alt)',
                        }}
                      >
                        {p.tag}
                      </span>
                    </div>
                  ) : null}
                  <div className='nv-post-body'>
                    <span className='nv-post-date'>{p.date}</span>
                    <h3>{p.title}</h3>
                    <p>{p.excerpt}</p>
                    <span className='nv-post-link'>Read {String.fromCharCode(8599)}</span>
                  </div>
                </Link>
              ))}
              {[
                { title: 'Essays & security writeups', tag: 'Medium', url: 'https://medium.com/@obx03' },
                { title: 'HTB, Active Directory & engineering notes', tag: 'Blog', url: 'https://d3vobed.github.io' },
              ].map(e => (
                <a key={e.url} href={e.url} target='_blank' rel='noopener' className='nv-post'>
                  <div className='nv-post-media'>
                    <span
                      style={{
                        display: 'flex',
                        height: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-jetbrains-mono), monospace',
                        fontSize: '1rem',
                        color: 'var(--nv-muted)',
                        letterSpacing: '0.04em',
                        background: 'var(--nv-bg-alt)',
                      }}
                    >
                      {e.tag}
                    </span>
                  </div>
                  <div className='nv-post-body'>
                    <span className='nv-post-date'>External</span>
                    <h3>{e.title}</h3>
                    <span className='nv-post-link'>Visit {String.fromCharCode(8599)}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className='nv-cta'>
          <div className='nv-container'>
            <h2>Let&rsquo;s build<br />something solid.</h2>
            <div className='nv-cta-row'>
              <Link href='/contact' className='nv-btn nv-btn-solid'>
                Start a project
              </Link>
              <a href={'mailto:obx@wearehackerone.com'} className='nv-btn nv-btn-ghost'>
                obx@wearehackerone.com
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
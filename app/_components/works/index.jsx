'use client';

import Image from 'next/image';

import { ctfs, disclosures, experience, projects, talks } from './data';
export { ctfs, disclosures, experience, projects, talks };

export default function Works() {
  return (
    <div id='works' className='novora'>
      {/* Experience */}
      <section className='nv-section'>
        <div className='nv-container'>
          <span className='nv-label'>Experience</span>
          <div className='nv-head-row'>
            <h2 className='nv-h2'>Where I&rsquo;ve worked</h2>
          </div>
          <div className='nv-space-y'>
            {experience.map(item => (
              <article
                key={item.slug}
                id={`works-${item.slug}`}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '96px 1fr',
                  gap: '1.5rem',
                  padding: '1.5rem 0',
                  borderTop: '1px solid var(--nv-line)',
                }}
              >
                <div
                  style={{
                    width: '96px',
                    height: '96px',
                    borderRadius: '0.5rem',
                    overflow: 'hidden',
                    border: '1px solid var(--nv-line)',
                    background: 'var(--nv-card)',
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={96}
                    height={96}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <span className='nv-work-genre'>{item.tag}</span>
                  <h3 style={{ fontSize: '1.4rem' }}>{item.title}</h3>
                  <p style={{ color: 'var(--nv-muted)', fontSize: '0.95rem' }}>{item.role}</p>
                  <p className='nv-mono' style={{ fontSize: '0.75rem', color: 'var(--nv-muted)' }}>
                    {item.dates}
                  </p>
                  <ul
                    style={{
                      margin: '0.4rem 0 0 1.1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.3rem',
                      color: 'var(--nv-muted)',
                      fontSize: '0.92rem',
                    }}
                  >
                    {item.bullets.map((b, i) => (
                      <li key={i} style={{ listStyle: 'disc' }}>
                        {b}
                      </li>
                    ))}
                  </ul>
                  {item.href ? (
                    <a className='nv-mono' href={item.href} target='_blank' rel='noopener' style={{ color: 'var(--nv-accent)', marginTop: '0.4rem', fontSize: '0.8rem' }}>
                      Visit ↗
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering projects */}
      <section className='nv-section nv-section-alt'>
        <div className='nv-container'>
          <span className='nv-label'>Engineering</span>
          <div className='nv-head-row'>
            <h2 className='nv-h2'>Projects</h2>
          </div>
          <p className='nv-lead'>
            Everything else, cyber and otherwise, lives on{' '}
            <a className='nv-mono' href='https://github.com/d3vobed' target='_blank' rel='noopener' style={{ color: 'var(--nv-accent)' }}>
              github.com/d3vobed
            </a>
            .
          </p>
          <div className='nv-work-grid'>
            {projects.map((p, i) => (
              <div key={i} className='nv-work-card'>
                <div className='nv-work-body'>
                  <div className='nv-work-meta'>
                    <span className='nv-tag'>{p.done ? 'Shipped' : 'In progress'}</span>
                    <span>
                      {i + 1}
                      {' / '}
                      {projects.length}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.3rem' }}>{p.title}</h3>
                  <p>{p.meta}</p>
                  {p.done && p.href ? (
                    <a className='nv-work-link' href={p.href} target='_blank' rel='noopener'>
                      Code ↗
                    </a>
                  ) : !p.done ? (
                    <span className='nv-mono' style={{ fontSize: '0.75rem', color: 'var(--nv-gold)' }}>
                      Coming soon
                    </span>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security disclosures */}
      <section className='nv-section'>
        <div className='nv-container'>
          <span className='nv-label'>Responsible disclosure</span>
          <div className='nv-head-row'>
            <h2 className='nv-h2'>Security Disclosures</h2>
          </div>
          <div className='nv-signal-grid'>
            {disclosures.map((d, i) => (
              <div key={i} className='nv-signal'>
                <div className='nv-signal-top'>
                  <span className='nv-chip'>{d.vendor}</span>
                  <span className={`nv-status nv-status-${d.status.split(' ')[0].toLowerCase()}`}>
                    {d.status}
                  </span>
                </div>
                <h3 style={{ fontSize: '1rem' }}>{d.title}</h3>
                <div className='nv-signal-foot'>
                  <span>{d.year}</span>
                  {d.link ? (
                    <a href={d.link} target='_blank' rel='noopener' style={{ color: 'var(--nv-accent)' }}>
                      Report ↗
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTFs & Hackathons */}
      <section className='nv-section nv-section-alt'>
        <div className='nv-container'>
          <span className='nv-label'>Competitions</span>
          <div className='nv-head-row'>
            <h2 className='nv-h2' style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)' }}>CTFs &amp; Hackathons</h2>
          </div>
          <div className='nv-signal-grid' style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {ctfs.map((c, i) => (
              <div key={i} className='nv-signal'>
                <div className='nv-signal-top'>
                  <span className='nv-chip'>
                    {String(i + 1).padStart(3, '0')}
                  </span>
                  {c.href ? (
                    <a href={c.href} target='_blank' rel='noopener' className='nv-mono' style={{ color: 'var(--nv-accent)', fontSize: '0.75rem' }}>
                      Profile ↗
                    </a>
                  ) : null}
                </div>
                <h3 style={{ fontSize: '1.3rem' }}>{c.title}</h3>
                <p>{c.meta}</p>
                {c.details ? (
                  <ul style={{ margin: 0, paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.3rem', color: 'var(--nv-muted)', fontSize: '0.9rem' }}>
                    {c.details.map((d, j) => (
                      <li key={j} style={{ listStyle: 'disc' }}>
                        {d}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Talks */}
      <section className='nv-section'>
        <div className='nv-container'>
          <span className='nv-label'>Talks &amp; Presentations</span>
          <div className='nv-process'>
            {talks.map((t, i) => (
              <div key={i} className='nv-step'>
                <span className='nv-step-num'>{String(i + 1).padStart(2, '0')}</span>
                <h3 style={{ fontSize: '1.1rem' }}>{t.title}</h3>
                <p className='nv-mono' style={{ color: 'var(--nv-muted)', fontSize: '0.78rem' }}>
                  {t.meta}
                </p>
                <p>{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
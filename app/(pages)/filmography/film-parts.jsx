import Link from 'next/link';

export function BackToGallery() {
  return (
    <Link href='/filmography' className='cv-btn' style={{ marginBottom: 20, display: 'inline-flex' }}>
      ← All works
    </Link>
  );
}

export function FilmHeader({ film, idx }) {
  return (
    <div style={{ display: 'grid', gap: 14, marginBottom: 26 }}>
      <p className='cv-kicker'>{idx}</p>
      <h2 className='cv-title'>
        {film.title} <span style={{ color: 'var(--ink-soft)' }}>({film.subtitle})</span>
      </h2>
      <p style={{ maxWidth: 680, margin: 0 }}>{film.synopsis}</p>
      <dl
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px 34px',
          margin: 0,
          padding: '14px 0',
          borderTop: '1.5px solid var(--line)',
          borderBottom: '1.5px solid var(--line)',
        }}
      >
        {film.meta.map(([t, d]) => (
          <div key={t}>
            <dt className='mono' style={{ fontSize: 10, textTransform: 'uppercase', color: 'var(--ink-soft)' }}>
              {t}
            </dt>
            <dd className='dep' style={{ margin: '3px 0 0', fontSize: 15 }}>
              {d}
            </dd>
          </div>
        ))}
      </dl>
      <p className='hand' style={{ fontSize: 26, margin: 0 }}>
        {film.credit}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {film.links.map((l) => (
          <a key={l.label} href={l.href} className='cv-btn' target='_blank' rel='noopener'>
            {l.label} ↗
          </a>
        ))}
      </div>
    </div>
  );
}

export function StillsHead({ children }) {
  return (
    <h3 className='cv-title' style={{ fontSize: 24, margin: '40px 0 16px' }}>
      {children}
    </h3>
  );
}

import Link from 'next/link';

/** @type {import('next').Metadata} */
export const metadata = {
  title: '404',
  description: 'Page not found — abangobed',
};

export default function NotFound() {
  return (
    <main>
      <section className='nv-section' style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className='nv-container'>
          <span className='nv-label'>404 — Error</span>
          <h1 className='nv-h2' style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', textTransform: 'uppercase', lineHeight: 1 }}>
            Not found
          </h1>
          <p style={{ color: 'var(--nv-muted)', maxWidth: '40ch', marginTop: '1rem' }}>
            The page you&rsquo;re looking for doesn&rsquo;t exist — or it moved.
          </p>
          <Link href='/' className='nv-btn nv-btn-solid' style={{ marginTop: '2rem' }}>
            Back home
          </Link>
        </div>
      </section>
    </main>
  );
}
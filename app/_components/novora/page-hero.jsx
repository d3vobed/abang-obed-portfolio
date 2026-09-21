import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

/** Type for page hero props */
/**
 * @param {Object} props
 * @param {string} props.title
 * @param {string} [props.label]
 * @param {string} [props.meta]
 */
export function NovoraPageHero({ title, label, meta }) {
  return (
    <header className='nv-page-hero'>
      <div className='nv-container'>
        {label ? (
          <span className='nv-label'>{label}</span>
        ) : null}
        <div className='nv-page-hero-inner'>
          <h1>{title}</h1>
          {meta ? <p className='nv-meta'>{meta}</p> : null}
        </div>
      </div>
    </header>
  );
}

export function NovoraBackLink({ href = '/about' }) {
  return (
    <Link href={href} className='nv-back'>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
        <ArrowUpRight size={14} style={{ rotate: '-45deg' }} />
        Back
      </span>
    </Link>
  );
}
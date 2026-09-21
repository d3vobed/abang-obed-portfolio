import { Star } from 'lucide-react';

/**
 * @param {Object} props
 * @param {string[]} props.items
 * @param {boolean} [props.dark]
 */
export function NovoraMarquee({ items, dark = false }) {
  const group = (
    <div className='nv-marquee-group' aria-hidden='true'>
      {items.map((t, i) => (
        <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
          {t}
          <Star size={14} fill='currentColor' />
        </span>
      ))}
    </div>
  );

  return (
    <div className={`nv-marquee ${dark ? 'nv-marquee-dark' : ''}`}>
      <div className='nv-marquee-track'>
        {group}
        {group}
      </div>
    </div>
  );
}
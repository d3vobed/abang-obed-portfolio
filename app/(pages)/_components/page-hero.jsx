/**
 * @param {Object} props
 * @param {string} props.title
 * @param {string} [props.meta]
 */
export function PageHero({ title, meta }) {
  return (
    <header className='nv-page-hero'>
      <div className='nv-container'>
        {meta ? (
          <span className='nv-meta' style={{ display: 'block', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            {meta}
          </span>
        ) : null}
        <h1>{title}</h1>
      </div>
    </header>
  );
}
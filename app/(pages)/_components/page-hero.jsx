/**
 * @param {Object} props
 * @param {string} props.title
 * @param {string} [props.meta]
 */
export function PageHero({ title, meta }) {
  return (
    <header className='aman-hero'>
      <div className='container'>
        <h1>{title}</h1>
        {meta ? <p className='hero-meta'>{meta}</p> : null}
      </div>
    </header>
  );
}

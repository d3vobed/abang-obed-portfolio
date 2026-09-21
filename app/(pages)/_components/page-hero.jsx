import Image from 'next/image';

/**
 * @param {Object} props
 * @param {string} props.title
 * @param {string} [props.meta]
 * @param {string} [props.image]
 */
export function PageHero({ title, meta, image }) {
  return (
    <header className='aman-hero'>
      {image ? (
        <Image
          src={image}
          alt=''
          fill={true}
          sizes='100vw'
          className='hero-img'
          priority
        />
      ) : null}
      <div className='container'>
        <h1>{title}</h1>
        {meta ? <p className='hero-meta'>{meta}</p> : null}
      </div>
    </header>
  );
}

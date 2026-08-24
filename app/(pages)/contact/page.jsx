'use client';

import { useState } from 'react';

import { MagneticButton } from '@/components';
import { socialMedias } from '@/data';
import { PageHero, Transition } from '@/layout';
import { randomId } from '@/utils';

const EMAIL = 'info@obx0x03.tech';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onSubmit = e => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || 'visitor'}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ''}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <Transition>
      <PageHero title='Contact' meta='Security work · Film collaboration · Anything else' image='/images/film-still1.png' />
      <main className='aman'>
        <section className='section'>
          <div className='container'>
            <h2 className='section-title'>Get in touch</h2>
            <p className='lead'>
              For security work, film collaboration or just to talk — send a
              note to{' '}
              <a href={`mailto:${EMAIL}`} className='mono'>
                {EMAIL}
              </a>
              .
            </p>

            <div className='grid gap-10 md:grid-cols-2'>
              <form onSubmit={onSubmit} className='flex flex-col gap-4'>
                <input
                  required
                  placeholder='Your name'
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className='rounded-lg border border-[#ccc] bg-white px-4 py-3 text-base outline-none focus:border-[var(--privacy-green)]'
                />
                <input
                  required
                  type='email'
                  placeholder='Your email'
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className='rounded-lg border border-[#ccc] bg-white px-4 py-3 text-base outline-none focus:border-[var(--privacy-green)]'
                />
                <textarea
                  required
                  rows={5}
                  placeholder='Your message'
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className='rounded-lg border border-[#ccc] bg-white px-4 py-3 text-base outline-none focus:border-[var(--privacy-green)]'
                />
                <button
                  type='submit'
                  className='rounded-full bg-[var(--ai-purple)] px-8 py-4 text-white transition-colors hover:bg-[var(--privacy-green)]'
                >
                  Send message
                </button>
              </form>

              <div>
                <h3
                  style={{
                    color: 'var(--deep-navy)',
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '1rem',
                  }}
                >
                  Elsewhere
                </h3>
                <ul className='flex flex-wrap gap-x-6 gap-y-3'>
                  {socialMedias.map(({ href, title }) => {
                    const id = randomId();
                    return (
                      <li key={id}>
                        <a href={href} target='_blank' rel='noopener'>
                          {title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Transition>
  );
}

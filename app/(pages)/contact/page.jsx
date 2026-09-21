'use client';

import { useState } from 'react';

import { socialMedias } from '@/data';

import { PageHero } from '../_components/page-hero';

const EMAIL = 'obx@wearehackerone.com';

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
    <main>
      <PageHero title='Contact' meta='Security work · Film collaboration · Anything else' />
      <section className='nv-section'>
        <div className='nv-container'>
          <div className='nv-grid-2'>
            <div>
              <span className='nv-label'>Get in touch</span>
              <h2 className='nv-h2' style={{ marginBottom: '1.25rem' }}>
                Send a note
              </h2>
              <p style={{ color: 'var(--nv-muted)' }}>
                For security work, film collaboration or just to talk — reach me
                at{' '}
                <a href={`mailto:${EMAIL}`} className='nv-mono' style={{ color: 'var(--nv-accent)' }}>
                  {EMAIL}
                </a>
                .
              </p>
              <div className='nv-tags' style={{ marginTop: '2rem' }}>
                {socialMedias.map(s => (
                  <a key={s.href} href={s.href} target='_blank' rel='noopener' className='nv-chip'>
                    {s.title}
                  </a>
                ))}
              </div>
            </div>

            <form onSubmit={onSubmit} className='nv-form'>
              <div className='nv-field'>
                <label htmlFor='nv-name'>Your name</label>
                <input
                  id='nv-name'
                  required
                  placeholder='Jane Doe'
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className='nv-field'>
                <label htmlFor='nv-email'>Your email</label>
                <input
                  id='nv-email'
                  required
                  type='email'
                  placeholder='jane@company.com'
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div className='nv-field nv-field-full'>
                <label htmlFor='nv-message'>Your message</label>
                <textarea
                  id='nv-message'
                  required
                  rows={6}
                  placeholder='Tell me about the project, the vulnerability, or the story…'
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <div className='nv-field nv-field-full'>
                <button type='submit' className='nv-btn nv-btn-solid'>
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
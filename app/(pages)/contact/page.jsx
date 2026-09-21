'use client';

import { useState } from 'react';

import { CheckCircle2, Loader2, Mail, Send, XCircle } from 'lucide-react';

import { MagneticButton } from '@/components';
import { socialMedias } from '@/data';
import { PageHero, Transition } from '@/layout';
import { randomId } from '@/utils';

const EMAIL = 'obx@wearehackerone.com';

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please add your name.';
  if (!values.email.trim()) errors.email = 'Please add your email.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = 'That email doesn’t look right.';
  if (!values.message.trim()) errors.message = 'Please write a message.';
  return errors;
}

const STATUS = {
  idle: 'idle',
  sending: 'sending',
  sent: 'sent',
  error: 'error',
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(STATUS.idle);

  const onSubmit = e => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus(STATUS.error);
      return;
    }

    setStatus(STATUS.sending);

    // Open the mail client with the composed message, then show success.
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name.trim()}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name.trim()}${form.email.trim() ? ` (${form.email.trim()})` : ''}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;

    setTimeout(() => setStatus(STATUS.sent), 650);
  };

  const fieldClass = hasError =>
    `rounded-lg border px-4 py-3 text-base outline-none transition-colors ${
      hasError
        ? 'border-[var(--rm-red)] focus:border-[var(--rm-red)]'
        : 'border-[#ccc] focus:border-[var(--privacy-green)]'
    }`;

  const isSending = status === STATUS.sending;

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
              <form onSubmit={onSubmit} className='flex flex-col gap-4' noValidate>
                <div>
                  <input
                    required
                    placeholder='Your name'
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className={fieldClass(Boolean(errors.name))}
                    disabled={isSending}
                  />
                  {errors.name ? <p className='form-error'>{errors.name}</p> : null}
                </div>
                <div>
                  <input
                    required
                    type='email'
                    placeholder='Your email'
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className={fieldClass(Boolean(errors.email))}
                    disabled={isSending}
                  />
                  {errors.email ? <p className='form-error'>{errors.email}</p> : null}
                </div>
                <div>
                  <textarea
                    required
                    rows={5}
                    placeholder='Your message'
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className={fieldClass(Boolean(errors.message))}
                    disabled={isSending}
                  />
                  {errors.message ? <p className='form-error'>{errors.message}</p> : null}
                </div>
                <button
                  type='submit'
                  className='rounded-full bg-[var(--ai-purple)] px-8 py-4 text-white transition-colors hover:bg-[var(--privacy-green)] disabled:cursor-not-allowed disabled:opacity-70'
                  disabled={isSending}
                >
                  {isSending ? (
                    <span className='inline-flex items-center gap-2'>
                      <Loader2 size={18} className='animate-spin' />
                      Sending…
                    </span>
                  ) : (
                    <span className='inline-flex items-center gap-2'>
                      <Send size={18} />
                      Send message
                    </span>
                  )}
                </button>

                {status === STATUS.sent ? (
                  <p className='form-note form-sent' role='status'>
                    <CheckCircle2 size={16} />
                    Opening your mail app — hit send there to deliver it. Thanks for reaching out.
                  </p>
                ) : null}
                {status === STATUS.error && Object.keys(errors).length > 0 ? (
                  <p className='form-note form-error-note' role='alert'>
                    <XCircle size={16} />
                    Please fix the highlighted fields.
                  </p>
                ) : null}
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

                <div
                  className='mt-10'
                  style={{
                    color: 'var(--deep-navy)',
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '1rem',
                  }}
                >
                  <Mail size={14} style={{ display: 'inline-block', marginRight: '0.5rem', verticalAlign: '-2px' }} />
                  Direct
                </div>
                <p style={{ color: 'var(--muted-text, #555)' }}>
                  Prefer email?{' '}
                  <a href={`mailto:${EMAIL}`} className='mono'>
                    {EMAIL}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Transition>
  );
}
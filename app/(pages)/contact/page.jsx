'use client';

import { useEffect, useRef, useState } from 'react';

import {
  Check,
  CheckCircle2,
  Copy,
  Gamepad2,
  Loader2,
  Mail,
  MapPin,
  Send,
  X,
  XCircle,
} from 'lucide-react';

import { socialMedias } from '@/data';
import { Clock, TopBar } from '@/layout';

import ContactGame from './contact-game';

const EMAIL = 'obx@wearehackerone.com';

const TOPICS = ['Security work', 'Film collaboration', 'Research', 'Just saying hi'];

const STATUS = { idle: 'idle', sending: 'sending', sent: 'sent', error: 'error' };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please add your name.';
  if (!values.email.trim()) errors.email = 'Please add your email.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = 'That email doesn’t look right.';
  if (!values.message.trim()) errors.message = 'Please write a message.';
  return errors;
}

function formStatusCopy() {
  const hour = Number(
    new Intl.DateTimeFormat('en-GB', { hour: '2-digit', hour12: false, timeZone: 'Africa/Lagos' }).format(new Date()),
  );
  if (hour >= 23 || hour < 7) return 'asleep — still replies';
  return 'open for projects';
}

/* ------------------------------------------------------------------
   The contact form — validated, opens the visitor's mail app.
   ------------------------------------------------------------------ */
function ContactForm({ onSent }) {
  const [form, setForm] = useState({ name: '', email: '', topic: TOPICS[0], message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(STATUS.idle);
  const timeouts = useRef([]);

  useEffect(() => () => timeouts.current.forEach(clearTimeout), []);

  const set = (key, value) => {
    setForm(f => ({ ...f, [key]: value }));
    if (errors[key]) setErrors(e => ({ ...e, [key]: undefined }));
  };

  const onSubmit = e => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus(STATUS.error);
      timeouts.current.push(setTimeout(() => setStatus(STATUS.idle), 2400));
      return;
    }

    setStatus(STATUS.sending);
    const subject = `[${form.topic}] message from ${form.name.trim()}`;
    const body = `${form.message.trim()}\n\n—\n${form.name.trim()}\n${form.email.trim()}`;
    const url = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    timeouts.current.push(
      setTimeout(() => {
        window.location.href = url;
        setStatus(STATUS.sent);
        if (onSent) onSent();
      }, 900),
    );
  };

  return (
    <form onSubmit={onSubmit} noValidate className='flex flex-col gap-6'>
      <div className='grid gap-6 sm:grid-cols-2'>
        <label className='flex flex-col gap-2.5'>
          <span className='cv-label text-white/60'>
            name <span aria-hidden className='text-[#e01e5a]'>*</span>
          </span>
          <input
            className='cv-input'
            data-error={Boolean(errors.name)}
            type='text'
            name='name'
            autoComplete='name'
            placeholder='e.g. Ngozi Adeyemi'
            value={form.name}
            onChange={e => set('name', e.target.value)}
          />
          {errors.name ? <FormError msg={errors.name} /> : null}
        </label>

        <label className='flex flex-col gap-2.5'>
          <span className='cv-label text-white/60'>
            email <span aria-hidden className='text-[#e01e5a]'>*</span>
          </span>
          <input
            className='cv-input'
            data-error={Boolean(errors.email)}
            type='email'
            name='email'
            autoComplete='email'
            placeholder='you@domain.com'
            value={form.email}
            onChange={e => set('email', e.target.value)}
          />
          {errors.email ? <FormError msg={errors.email} /> : null}
        </label>
      </div>

      <div className='flex flex-col gap-2.5'>
        <span className='cv-label text-white/60'>topic</span>
        <div className='flex flex-wrap gap-2.5' role='radiogroup' aria-label='Message topic'>
          {TOPICS.map(t => (
            <button
              key={t}
              type='button'
              role='radio'
              aria-checked={form.topic === t}
              onClick={() => set('topic', t)}
              className='font-dmono rounded-full border-[1.5px] px-4 py-2 text-[12px] uppercase tracking-[0.08em] transition-colors'
              style={
                form.topic === t
                  ? { borderColor: '#3ec1f3', background: 'rgba(62,193,243,0.14)', color: '#fff' }
                  : { borderColor: 'var(--cv-dark-line)', color: 'rgba(255,255,255,0.6)' }
              }
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <label className='flex flex-col gap-2.5'>
        <span className='cv-label text-white/60'>
          message <span aria-hidden className='text-[#e01e5a]'>*</span>
        </span>
        <textarea
          className='cv-input min-h-[150px] resize-y'
          data-error={Boolean(errors.message)}
          name='message'
          placeholder='What are we building, breaking or filming?'
          value={form.message}
          onChange={e => set('message', e.target.value)}
        />
        {errors.message ? <FormError msg={errors.message} /> : null}
      </label>

      <div className='flex flex-wrap items-center gap-5'>
        <button type='submit' className='cv-cta !bg-[#3ec1f3] !text-[#111212] hover:!bg-[#5ecbf5]' disabled={status === STATUS.sending}>
          {status === STATUS.sending ? (
            <Loader2 size={16} className='animate-spin' aria-hidden />
          ) : (
            <span className='cv-cta-icon !bg-[#111212] !text-white'>
              <Send size={14} aria-hidden />
            </span>
          )}
          {status === STATUS.sending ? 'sending…' : 'send message'}
        </button>

        {status === STATUS.sent ? (
          <p className='font-dmono flex items-center gap-2 text-[12.5px] uppercase tracking-[0.08em] text-[#5eead4]'>
            <CheckCircle2 size={16} aria-hidden /> opened your mail app — hit send
          </p>
        ) : null}
        {status === STATUS.error ? (
          <p className='font-dmono flex items-center gap-2 text-[12.5px] uppercase tracking-[0.08em] text-[#e01e5a]'>
            <XCircle size={16} aria-hidden /> check the highlighted fields
          </p>
        ) : null}
      </div>
    </form>
  );
}

function FormError({ msg }) {
  return (
    <span role='alert' className='font-dmono flex items-center gap-1.5 text-[12px] text-[#e01e5a]'>
      <XCircle size={13} aria-hidden /> {msg}
    </span>
  );
}

/* ------------------------------------------------------------------
   Modal wrapper — ESC / backdrop closes, body scroll locked.
   ------------------------------------------------------------------ */
function FormModal({ onClose }) {
  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.documentElement.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div className='cv-modal-backdrop' onClick={onClose} role='presentation'>
      <div
        className='cv-modal-panel'
        role='dialog'
        aria-modal='true'
        aria-label='Contact form'
        onClick={e => e.stopPropagation()}
      >
        <button type='button' className='cv-modal-close' onClick={onClose} aria-label='Close form'>
          <X size={16} aria-hidden />
        </button>

        <div className='relative flex items-center justify-between gap-4 border-b border-white/10 pb-5 pr-12'>
          <p className='cv-label flex items-center gap-2'>
            <Mail size={14} aria-hidden />
            new message
          </p>
          <div className='flex items-center gap-2' aria-hidden>
            <span className='size-2.5 rounded-full border border-white/30 bg-[#e01e5a]' />
            <span className='size-2.5 rounded-full border border-white/30 bg-[#eeb63c]' />
            <span className='size-2.5 rounded-full border border-white/30 bg-[#29a56c]' />
          </div>
        </div>

        <div className='relative mt-7'>
          <ContactForm onSent={onClose} />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   Page
   ------------------------------------------------------------------ */
export default function Contact() {
  const [formOpen, setFormOpen] = useState(false);
  const [gameFailed, setGameFailed] = useState(false);
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef(null);

  useEffect(() => () => clearTimeout(copyTimer.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className='canvas-dark min-h-screen'>
      <TopBar dark />

      <main className='mx-auto max-w-[1200px] px-4 pb-20 pt-16 sm:px-8'>
        {/* header */}
        <div className='text-center'>
          <p className='font-hand text-[clamp(30px,4vw,46px)] leading-none text-white/90'>
            say hello!
          </p>
          <div className='mt-6 inline-block rotate-[-1.5deg]'>
            <h1 className='cv-pixel-title !text-[clamp(58px,11vw,150px)]' style={{ WebkitTextStroke: '2.5px #e01e5a' }}>
              CONTACT
            </h1>
          </div>
          <p className='font-dmono mx-auto mt-9 max-w-md text-[13px] leading-relaxed tracking-[0.04em] text-white/60'>
            for security work, film collaboration or just to talk — drop a note and
            it lands straight in my inbox.
          </p>
        </div>

        {/* the contact level — 3D world */}
        <section className='mt-14' aria-label='Contact level — 3D game'>
          <div className='flex flex-wrap items-end justify-between gap-4'>
            <p className='cv-label flex items-center gap-2.5'>
              <Gamepad2 size={15} aria-hidden />
              the contact level
            </p>
            <p className='font-hand text-[clamp(22px,2.6vw,32px)] leading-none text-white/85'>
              walk to the terminal → press E
            </p>
          </div>

          {gameFailed ? (
            <section className='cv-darkcard mt-5 p-6 sm:p-9' aria-label='Contact form'>
              <div className='flex items-center justify-between gap-4 border-b border-white/10 pb-5'>
                <p className='cv-label flex items-center gap-2'>
                  <Mail size={14} aria-hidden />
                  new message
                </p>
                <div className='flex items-center gap-2' aria-hidden>
                  <span className='size-2.5 rounded-full border border-white/30 bg-[#e01e5a]' />
                  <span className='size-2.5 rounded-full border border-white/30 bg-[#eeb63c]' />
                  <span className='size-2.5 rounded-full border border-white/30 bg-[#29a56c]' />
                </div>
              </div>
              <div className='mt-7'>
                <ContactForm />
              </div>
            </section>
          ) : (
            <div className='cv-game-shell mt-5'>
              <ContactGame onOpenForm={() => setFormOpen(true)} onFail={() => setGameFailed(true)} />
            </div>
          )}

          <div className='mt-5 flex flex-wrap items-center justify-between gap-4'>
            <p className='font-dmono text-[11.5px] uppercase tracking-[0.14em] text-white/40'>
              {gameFailed
                ? 'static mode — the world refused to load'
                : 'side quest — collect all 6 flags for a surprise'}
            </p>
            <button
              type='button'
              onClick={() => setFormOpen(true)}
              className='cv-cta !bg-[#3ec1f3] !text-[#111212] hover:!bg-[#5ecbf5]'
            >
              <span className='cv-cta-icon !bg-[#111212] !text-white'>
                <Mail size={14} aria-hidden />
              </span>
              skip the game — open the form
            </button>
          </div>
        </section>

        {/* info row */}
        <div className='mt-14 grid gap-6 md:grid-cols-3'>
          <section className='cv-darkcard p-6 sm:p-7'>
            <p className='cv-label text-white/60'>status</p>
            <p className='font-dmono mt-2.5 flex items-center gap-3 text-[13px] uppercase tracking-[0.08em] text-white'>
              <span className='cv-dot' aria-hidden />
              {formStatusCopy()}
            </p>
            <p className='font-dmono mt-2 text-[12px] text-white/50'>local time — <Clock dark /></p>
          </section>

          <section className='cv-darkcard p-6 sm:p-7'>
            <p className='cv-label text-white/60'>direct</p>
            <p className='font-dmono mt-3 break-all text-[15px] text-white'>
              {EMAIL}
            </p>
            <button type='button' onClick={copyEmail} className='cv-social mt-4' aria-live='polite'>
              {copied ? <Check size={13} aria-hidden /> : <Copy size={13} aria-hidden />}
              {copied ? 'copied!' : 'copy address'}
            </button>
          </section>

          <section className='cv-darkcard p-6 sm:p-7'>
            <p className='cv-label text-white/60'>where</p>
            <p className='font-dmono mt-3 flex items-center gap-2.5 text-[13.5px] uppercase tracking-[0.08em] text-white'>
              <MapPin size={15} aria-hidden /> Abuja, Nigeria · GMT+1
            </p>
            <p className='font-dmono mt-2.5 text-[13px] text-white/60'>
              usually replies within 24–48h
            </p>
          </section>
        </div>

        {/* socials */}
        <section className='mt-14' aria-label='Elsewhere on the internet'>
          <p className='cv-label text-white/60'>elsewhere</p>
          <div className='mt-6 flex flex-wrap gap-3'>
            {socialMedias.map(s => (
              <a key={s.title} href={s.href} target='_blank' rel='noreferrer' className='cv-social'>
                {s.title}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className='border-t border-white/10 px-5 py-8 sm:px-10'>
        <p className='font-dmono mx-auto max-w-[1200px] text-[11px] uppercase tracking-[0.14em] text-white/40'>
          © {new Date().getFullYear()} Abang Obed — site by abang obed
        </p>
      </footer>

      {formOpen ? <FormModal onClose={() => setFormOpen(false)} /> : null}
    </div>
  );
}

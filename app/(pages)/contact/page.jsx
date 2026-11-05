'use client';

import { useEffect, useState } from 'react';

import { Check, Clock3, Copy, Send } from 'lucide-react';

import { profile, socialMedias } from '@/data';
import { Clock, ContactGame, HandLabel, SectionHead, SiteFooter } from '@/layout';

import '../../canvas.css';

const TOPICS = ['Security', 'Film', 'Collab', 'Hello'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [topic, setTopic] = useState('Security');
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [copied, setCopied] = useState(false);

  const [lagosHour, setLagosHour] = useState(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      hour12: false,
      timeZone: 'Africa/Lagos',
    });
    const upd = () => setLagosHour(Number(fmt.format(new Date())) % 24);
    upd();
    const id = setInterval(upd, 60000);
    return () => clearInterval(id);
  }, []);

  const asleep = lagosHour !== null && (lagosHour >= 23 || lagosHour < 7);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (e) {
      /* clipboard unavailable */
    }
  };

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = 'A name helps.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'That email looks off.';
    if (form.message.trim().length < 10) errs.message = 'Give me a little more than that.';
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    const subject = encodeURIComponent(`[${topic}] message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n${form.name}\n${form.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setTimeout(() => setStatus('sent'), 1200);
  };

  return (
    <main className='page-dark'>
      <section className='cv-section' style={{ borderTop: 0 }}>
        <div className='wrap'>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', marginBottom: 8 }}>
            <Clock />
            <span className='mono' style={{ fontSize: 11, textTransform: 'uppercase' }}>
              {asleep ? 'probably asleep, still reply fast' : 'awake and around'}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, flexWrap: 'wrap' }}>
            <div>
              <HandLabel style={{ display: 'inline-block' }}>ping me</HandLabel>
              <h1 className='cv-title' style={{ fontSize: 'clamp(34px, 7vw, 72px)' }}>
                Contact
              </h1>
            </div>
            <p style={{ maxWidth: 520, margin: '0 0 10px', color: 'var(--ink-soft)' }}>
              Security work, film work, or something stranger. The inbox is {profile.email}. The form below drops
              straight into it.
            </p>
          </div>

          {/* ---------- 3d game ---------- */}
          <div style={{ margin: '30px 0 10px' }}>
            <ContactGame />
            <p className='mono' style={{ fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--ink-faint)', marginTop: 8 }}>
              ob3d.exe // move the mouse to tilt the room, click the bugs before they drift off
            </p>
          </div>

          {/* ---------- form ---------- */}
          <div className='cv-contact-grid'>
            <form onSubmit={submit} noValidate style={{ display: 'grid', gap: 18 }}>
              <div>
                <label className='cv-label' htmlFor='c-name'>
                  Name
                </label>
                <input
                  id='c-name'
                  className='cv-input'
                  value={form.name}
                  onChange={set('name')}
                  placeholder='Who is this?'
                />
                {errors.name ? <p className='cv-error'>{errors.name}</p> : null}
              </div>

              <div>
                <label className='cv-label' htmlFor='c-email'>
                  Email
                </label>
                <input
                  id='c-email'
                  type='email'
                  className='cv-input'
                  value={form.email}
                  onChange={set('email')}
                  placeholder='you@domain.com'
                />
                {errors.email ? <p className='cv-error'>{errors.email}</p> : null}
              </div>

              <div>
                <span className='cv-label'>Topic</span>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {TOPICS.map((t) => (
                    <button
                      type='button'
                      key={t}
                      className={`cv-topic ${topic === t ? 'on' : ''}`}
                      onClick={() => setTopic(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className='cv-label' htmlFor='c-msg'>
                  Message
                </label>
                <textarea
                  id='c-msg'
                  rows={6}
                  className='cv-input'
                  value={form.message}
                  onChange={set('message')}
                  placeholder='What are we building?'
                />
                {errors.message ? <p className='cv-error'>{errors.message}</p> : null}
              </div>

              <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                <button type='submit' className='cv-btn cv-btn--sky' disabled={status === 'sending'}>
                  {status === 'sending' ? <Clock3 size={14} /> : <Send size={14} />}
                  {status === 'sending' ? 'Opening mail' : 'Send it'}
                </button>
                <button type='button' className='cv-btn' onClick={copyEmail}>
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  {copied ? 'Copied' : 'Copy email'}
                </button>
                {status === 'sent' ? (
                  <span className='mono' style={{ fontSize: 11, textTransform: 'uppercase' }}>
                    Your mail app should be open. Talk soon.
                  </span>
                ) : null}
                {status === 'error' && Object.keys(errors).length > 0 ? (
                  <span className='cv-error'>Fix the fields and try again.</span>
                ) : null}
              </div>
            </form>

            <aside style={{ display: 'grid', gap: 22, alignContent: 'start' }}>
              <div>
                <p className='cv-label'>Direct</p>
                <a href={`mailto:${profile.email}`} className='cv-input' style={{ display: 'block' }}>
                  {profile.email}
                </a>
                <p className='mono' style={{ fontSize: 10.5, color: 'var(--ink-faint)', marginTop: 8 }}>
                  alt: {profile.altEmail}
                </p>
              </div>
              <div>
                <p className='cv-label'>Base</p>
                <p className='dep' style={{ margin: 0 }}>
                  {profile.base}
                </p>
              </div>
              <div>
                <p className='cv-label'>Elsewhere</p>
                <div className='cv-social'>
                  {socialMedias.map((s) => (
                    <a key={s.title} href={s.href} target='_blank' rel='noopener'>
                      {s.title} ↗
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

/**
 * ContactPage.tsx — Real email sending via EmailJS
 *
 * SETUP (one-time, ~3 minutes):
 * 1. Go to https://www.emailjs.com and create a free account
 * 2. Add an Email Service (Gmail, Outlook, etc.) → copy the SERVICE_ID
 * 3. Create an Email Template with these variables:
 *      {{from_name}}, {{from_email}}, {{subject}}, {{message}}
 *    → copy the TEMPLATE_ID
 * 4. Go to Account → API Keys → copy your PUBLIC_KEY
 * 5. Replace the three constants below with your real values
 * 6. Run: npm install @emailjs/browser
 */

// 

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Phone, Send, Linkedin, Github, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import type { PageProps } from '../../types';

// ─── Replace these with your own EmailJS credentials ─────────────────────────
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;   // e.g. 'abc123DEF456'
// ─────────────────────────────────────────────────────────────────────────────

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function ContactPage({ tokens }: PageProps) {
  const { textPrimary, textSecondary, textMuted, card2, border, accent, accentBg, isDark } = tokens;
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name:  form.name,
          email: form.email,
          subject:    form.subject,
          message:    form.message,
          // EmailJS also lets you set reply_to so you can reply to the sender
          reply_to:   form.email,
        },
        EMAILJS_PUBLIC_KEY,
      );

      setStatus('sent');
      setTimeout(() => {
        setStatus('idle');
        setForm({ name: '', email: '', subject: '', message: '' });
      }, 3500);
    } catch (err: unknown) {
      console.error('EmailJS error:', err);
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again or email me directly.',
      );
      setStatus('error');
    }
  };

  const inputStyle: React.CSSProperties = {
    backgroundColor: card2,
    border: `1px solid ${border}`,
    color: textPrimary,
    borderRadius: '12px',
    padding: '9px 13px',
    fontSize: '13.5px',
    width: '100%',
    outline: 'none',
    fontFamily: 'inherit',
    transition: 'border-color 0.15s',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '11px',
    color: textMuted,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    fontWeight: 500,
  };

  return (
    <div>
      <div className="mb-8">
        <h2
          style={{
            fontSize: '24px',
            fontWeight: 700,
            color: textPrimary,
            letterSpacing: '-0.02em',
            marginBottom: '5px',
          }}
        >
          Contact
        </h2>
        <p style={{ fontSize: '13.5px', color: textMuted }}>
          Let's build something great together.
        </p>
      </div>

      <div className="grid grid-cols-[1fr,260px] gap-8">
        {/* ── Form / Feedback area ── */}
        <AnimatePresence mode="wait">
          {status === 'sent' ? (
            <motion.div
              key="sent"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="flex flex-col items-center justify-center gap-4 rounded-2xl p-10"
              style={{ backgroundColor: card2, border: `1px solid ${border}` }}
            >
              <CheckCircle className="w-10 h-10" style={{ color: accent }} />
              <div className="text-center">
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: textPrimary, marginBottom: '4px' }}>
                  Message sent!
                </h3>
                <p style={{ fontSize: '13px', color: textMuted }}>
                  Thanks for reaching out. I'll get back to you soon.
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {/* Name + Email row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1.5" style={labelStyle}>Name</label>
                  <input
                    style={inputStyle}
                    placeholder="Your name"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    onFocus={e => (e.currentTarget.style.borderColor = accent)}
                    onBlur={e => (e.currentTarget.style.borderColor = border)}
                    required
                    disabled={status === 'sending'}
                  />
                </div>
                <div>
                  <label className="block mb-1.5" style={labelStyle}>Email</label>
                  <input
                    type="email"
                    style={inputStyle}
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    onFocus={e => (e.currentTarget.style.borderColor = accent)}
                    onBlur={e => (e.currentTarget.style.borderColor = border)}
                    required
                    disabled={status === 'sending'}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block mb-1.5" style={labelStyle}>Subject</label>
                <input
                  style={inputStyle}
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                  onFocus={e => (e.currentTarget.style.borderColor = accent)}
                  onBlur={e => (e.currentTarget.style.borderColor = border)}
                  required
                  disabled={status === 'sending'}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-1.5" style={labelStyle}>Message</label>
                <textarea
                  style={{ ...inputStyle, minHeight: '130px', resize: 'vertical' }}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  onFocus={e => (e.currentTarget.style.borderColor = accent)}
                  onBlur={e => (e.currentTarget.style.borderColor = border)}
                  required
                  disabled={status === 'sending'}
                />
              </div>

              {/* Error banner */}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-xl px-4 py-3"
                  style={{ backgroundColor: '#fee2e2', border: '1px solid #fca5a5' }}
                >
                  <AlertCircle size={14} style={{ color: '#dc2626', flexShrink: 0 }} />
                  <span style={{ fontSize: '12.5px', color: '#dc2626' }}>
                    {errorMsg || 'Failed to send. Please try again.'}
                  </span>
                </motion.div>
              )}

              {/* Submit button */}
              <motion.button
                type="submit"
                whileHover={status !== 'sending' ? { y: -1 } : {}}
                whileTap={status !== 'sending' ? { scale: 0.97 } : {}}
                disabled={status === 'sending'}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium"
                style={{
                  backgroundColor: accent,
                  color: isDark ? '#0F0F0F' : '#fff',
                  border: 'none',
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  fontSize: '13px',
                  opacity: status === 'sending' ? 0.75 : 1,
                  transition: 'opacity 0.15s',
                }}
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>

        {/* ── Info panel ── */}
        <div className="space-y-4">
          <div
            className="p-5 rounded-2xl space-y-4"
            style={{ backgroundColor: card2, border: `1px solid ${border}` }}
          >
            <ContactInfoRow icon={<Mail size={14} />}   label="Email"    value="gargh2120@gmail.com"  tokens={tokens} />
            <div className="h-px" style={{ backgroundColor: border }} />
            <ContactInfoRow icon={<Phone size={14} />}  label="Phone"    value="+91 7819007832"       tokens={tokens} />
            <div className="h-px" style={{ backgroundColor: border }} />
            <ContactInfoRow icon={<MapPin size={14} />} label="Location" value="Noida, Uttar Pradesh" tokens={tokens} />
          </div>

          <div
            className="p-5 rounded-2xl"
            style={{ backgroundColor: card2, border: `1px solid ${border}` }}
          >
            <p
              className="mb-4"
              style={{ fontSize: '11px', color: textMuted, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 500 }}
            >
              Connect
            </p>
            <div className="space-y-3">
              {[
                { icon: <Linkedin size={15} />, label: 'LinkedIn', handle: '/in/dev~harsh', href: 'https://linkedin.com/in/dev~harsh' },
                { icon: <Github size={15} />,   label: 'GitHub',   handle: '/harshitgarg-03', href: 'https://github.com/harshitgarg-03' },
              ].map((s, i) => (
                <a key={i} href={s.href} className="flex items-center gap-3 group" target="_blank" rel="noreferrer">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors duration-200"
                    style={{ backgroundColor: accentBg, color: accent }}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '12.5px', color: textSecondary, fontWeight: 500 }}>{s.label}</div>
                    <div style={{ fontSize: '11px', color: textMuted, fontFamily: "'JetBrains Mono', monospace" }}>
                      {s.handle}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactInfoRow({
  icon, label, value, tokens,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  tokens: PageProps['tokens'];
}) {
  const { textPrimary, textMuted, accent, accentBg } = tokens;
  return (
    <div className="flex items-center gap-3">
      <div
        className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
        style={{ backgroundColor: accentBg, color: accent }}
      >
        {icon}
      </div>
      <div>
        <div style={{ fontSize: '10px', color: textMuted, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px', fontWeight: 500 }}>
          {label}
        </div>
        <div style={{ fontSize: '13px', color: textPrimary }}>{value}</div>
      </div>
    </div>
  );
}
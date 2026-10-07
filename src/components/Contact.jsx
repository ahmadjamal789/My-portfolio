import { useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile.js'
import SocialIcons from './SocialIcons.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="section section-anchor">
      <div className="section-head">
        <span className="section-index">04.</span>
        <h2 className="section-title">open a channel</h2>
        <span className="section-line" />
      </div>

      <div className="contact-grid">
        <motion.div
          className="contact-blurb"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <p>
            Whether it&apos;s a robotics hack, a PCB you need reviewed, a
            physics problem you want visualized, or just geeking out about
            microcontrollers — my inbox is open.
          </p>
          <p>
            Current status: <span className="hl">open for grad school,
            internships &amp; collabs</span>.
          </p>
          <div className="contact-mail">
            <span className="prompt">❯</span> {profile.email}
          </div>
          <SocialIcons />
        </motion.div>

        <motion.div
          className="contact-form-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.15 }}
        >
          <div className="term-bar small">
            <span className="dot red" />
            <span className="dot amber" />
            <span className="dot green" />
            <span className="term-title">message.sh</span>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <label className="form-field">
              <span className="field-label">--name</span>
              <input
                type="text"
                required
                placeholder="your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </label>
            <label className="form-field">
              <span className="field-label">--email</span>
              <input
                type="email"
                required
                placeholder="you@domain.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </label>
            <label className="form-field">
              <span className="field-label">--message</span>
              <textarea
                required
                rows="5"
                placeholder="shoot me a message…"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </label>
            <button type="submit" className="btn btn-primary form-submit">
              <span className="btn-glyph">❯</span>
              {sent ? 'transmission sent ✓' : 'send_transmission'}
            </button>
            {sent && (
              <p className="form-sent">
                thanks! i&apos;ll get back to you soonest. ✦
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}
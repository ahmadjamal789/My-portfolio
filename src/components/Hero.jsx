import { motion } from 'framer-motion'
import { profile } from '../data/profile.js'
import Typewriter from './Typewriter.jsx'
import SocialIcons from './SocialIcons.jsx'

const terminalLines = [
  { cmd: '$ whoami', out: 'ahmad.jamal — phys.hons @ UNILAG' },
  { cmd: '$ cat skills.txt', out: 'frontend · hardware · embedded · robotics' },
  { cmd: '$ ./build --target=robotics-engineer', out: 'compiling...  [OK]' },
]

export default function Hero() {
  return (
    <section id="home" className="hero section-anchor">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <span className="hero-stamp">
          <span className="pulse-dot" />
          available for projects
        </span>
        <h1 className="hero-greeting">Hi there, I&apos;m</h1>
        <h2 className="hero-name glitch" data-text={profile.name.toUpperCase()}>
          {profile.name.toUpperCase()}
        </h2>
        <p className="hero-role">
          <span className="chev">&gt;</span>{' '}
          <Typewriter texts={profile.roles} />
        </p>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            <span className="btn-glyph">▸</span> view my work
          </a>
          <a href="#contact" className="btn btn-ghost">
            <span className="btn-glyph">⌥</span> contact me
          </a>
        </div>
        <SocialIcons />
      </motion.div>

      <motion.div
        className="hero-terminal"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      >
        <div className="term-bar">
          <span className="dot red" />
          <span className="dot amber" />
          <span className="dot green" />
          <span className="term-title">ahmadjamal@unilag: ~</span>
        </div>
        <div className="term-body">
          {terminalLines.map((line, i) => (
            <motion.div
              key={line.cmd}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 + i * 0.6 }}
            >
              <p className="term-cmd">
                <span className="prompt">➜</span> {line.cmd}
              </p>
              <p className="term-out">{line.out}</p>
            </motion.div>
          ))}
          <motion.p
            className="term-cmd"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.9 }}
          >
            <span className="prompt">➜</span> <span className="prompt-caret">▊</span>
          </motion.p>
        </div>
      </motion.div>

      <a href="#about" className="scroll-hint" aria-label="Scroll to about">
        <span className="mouse">
          <span className="wheel" />
        </span>
      </a>
    </section>
  )
}
import { useEffect, useState } from 'react'
import { profile } from '../data/profile.js'

const links = [
  { id: 'home', label: 'home' },
  { id: 'about', label: 'about' },
  { id: 'skills', label: 'skills' },
  { id: 'projects', label: 'projects' },
  { id: 'contact', label: 'contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 120
      let current = 'home'
      for (const link of links) {
        const el = document.getElementById(link.id)
        if (el && el.offsetTop <= y) current = link.id
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="navbar">
      <a href="#home" className="brand glitch" data-text="ahmadjamal789">
        aj:~$
      </a>

      <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Primary">
        {links.map((link, i) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={active === link.id ? 'active' : ''}
            onClick={() => setOpen(false)}
            style={{ '--i': i }}
          >
            <span className="nav-index">0{i + 1}.</span>
            {link.label}
          </a>
        ))}
        <a
          href={profile.socials[0].href}
          target="_blank"
          rel="noreferrer"
          className="nav-resume"
        >
          resume
        </a>
      </nav>

      <button
        type="button"
        className="menu-toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}
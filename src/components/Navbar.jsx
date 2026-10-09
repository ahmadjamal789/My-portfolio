import { useEffect, useRef, useState } from 'react'
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
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        setScrolled(window.scrollY > 10)
        const y = window.scrollY + 140
        let current = 'home'
        for (const link of links) {
          const el = document.getElementById(link.id)
          if (!el) continue
          if (el.getBoundingClientRect().top + window.scrollY <= y) current = link.id
        }
        setActive(current)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
        return
      }
      if (e.key !== 'Tab') return
      const header = menuRef.current?.closest('header')
      if (!header) return
      const nodes = [...header.querySelectorAll('a[href], button')].filter(
        (n) => n.offsetParent !== null,
      )
      if (!nodes.length) return
      const first = nodes[0]
      const last = nodes[nodes.length - 1]
      const cur = document.activeElement
      if (e.shiftKey && (cur === first || !header.contains(cur))) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && (cur === last || !header.contains(cur))) {
        e.preventDefault()
        first.focus()
      }
    }
    const onResize = () => {
      if (window.innerWidth > 720) setOpen(false)
    }
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    menuRef.current?.querySelector('a')?.focus()
    return () => {
      document.body.style.overflow = prevOverflow
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a
        href="#home"
        className="brand glitch"
        data-text="ahmadjamal789"
        onClick={() => setOpen(false)}
      >
        ahmadjamal789
      </a>

      {open && (
        <div className="nav-backdrop" onClick={() => setOpen(false)} aria-hidden="true" />
      )}

      <nav
        ref={menuRef}
        id="primary-menu"
        className={`nav-links ${open ? 'open' : ''}`}
        aria-label="Primary"
      >
        {links.map((link, i) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={active === link.id ? 'active' : ''}
            aria-current={active === link.id ? 'true' : undefined}
            onClick={() => setOpen(false)}
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
        ref={toggleRef}
        type="button"
        className={`menu-toggle ${open ? 'open' : ''}`}
        aria-label="Toggle menu"
        aria-expanded={open}
        aria-controls="primary-menu"
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}
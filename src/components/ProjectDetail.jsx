import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function ProjectDetail({ project, index, onClose, githubFallback }) {
  const panelRef = useRef(null)
  const [imgBroken, setImgBroken] = useState(false)

  const github = project.github || githubFallback
  const live = project.live
  const initials = project.title
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    panelRef.current?.focus()
    return () => {
      document.body.style.overflow = prevOverflow
      document.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        tabIndex={-1}
        ref={panelRef}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 26, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{ '--accent': project.accent }}
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close project details">
          ✕
        </button>

        <div className="modal-art">
          {project.image && !imgBroken ? (
            <img src={project.image} alt={project.title} onError={() => setImgBroken(true)} />
          ) : (
            <div className="modal-art-fallback">
              <span className="modal-art-glyph">{initials}</span>
              <span className="modal-art-label">
                {project.category} · {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          )}
        </div>

        <div className="modal-body">
          <div className="modal-meta">
            <span className="modal-index">{String(index + 1).padStart(2, '0')}.</span>
            <span className="project-cat">{project.category}</span>
          </div>

          <h3 className="modal-title">{project.title}</h3>
          <p className="modal-blurb">{project.blurb}</p>
          <p className="modal-desc">{project.description}</p>

          <ul className="tags">
            {project.tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>

          <div className="modal-actions">
            {live ? (
              <a href={live} target="_blank" rel="noreferrer" className="btn btn-primary">
                live view <span className="btn-glyph">↗</span>
              </a>
            ) : (
              <span className="btn btn-primary btn-disabled" aria-disabled="true">
                live view <span className="btn-glyph">↗</span>
              </span>
            )}
            {github && (
              <a href={github} target="_blank" rel="noreferrer" className="btn btn-ghost">
                view on github <span className="btn-glyph">↗</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

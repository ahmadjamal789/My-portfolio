import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { profile } from '../data/profile.js'
import ProjectDetail from './ProjectDetail.jsx'

const categories = ['All', 'Frontend', 'Robotics', 'Hardware', 'Embedded', 'Software']

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [open, setOpen] = useState(null)

  const openProject = (project, index) => setOpen({ project, index })

  const projects = useMemo(
    () =>
      filter === 'All'
        ? profile.projects
        : profile.projects.filter((p) => p.category === filter),
    [filter],
  )

  return (
    <section id="projects" className="section section-anchor">
      <div className="section-head">
        <span className="section-index">03.</span>
        <h2 className="section-title">things i&apos;ve built</h2>
        <span className="section-line" />
      </div>

      <div className="filter-row" role="tablist" aria-label="Filter projects">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={filter === cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="projects-grid">
        <AnimatePresence mode="popLayout">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              layout
              className="card project-card"
              role="button"
              tabIndex={0}
              aria-haspopup="dialog"
              onClick={() => openProject(project, i)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  openProject(project, i)
                }
              }}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              style={{ '--accent': project.accent }}
            >
              <div className="project-top">
                <span className="project-index">
                  {String(i + 1).padStart(2, '0')}.
                </span>
                <span className="project-cat">{project.category}</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-blurb">{project.blurb}</p>
              <ul className="tags">
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <span className="project-open">
                view project <span className="btn-glyph">↗</span>
              </span>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="projects-more">
        <a
          href={profile.socials[0].href}
          target="_blank"
          rel="noreferrer"
          className="btn btn-ghost"
        >
          more on github <span className="btn-glyph">↗</span>
        </a>
      </div>

      <AnimatePresence>
        {open && (
          <ProjectDetail
            key={open.project.title}
            project={open.project}
            index={open.index}
            githubFallback={profile.socials[0].href}
            onClose={() => setOpen(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
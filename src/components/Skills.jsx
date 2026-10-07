import { motion } from 'framer-motion'
import { profile } from '../data/profile.js'

const groupIcons = {
  code: (
    <path d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4Zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4ZM14.2 2h2l-4.4 20h-2l4.4-20Z" />
  ),
  chip: (
    <path d="M7 2h2v3h6V2h2v3h3v2h-3v6h3v2h-3v3h-3v3h-2v-3H9v3H7v-3H4v-2h3V7H4V5h3V2Zm2 5v6h6V7H9Zm2 2h2v2h-2V9Z" />
  ),
  robot: (
    <path d="M12 2a1.5 1.5 0 0 1 1 2.5V7h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-3v2a2 2 0 0 1-4 0v-2H7a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h4V4.5A1.5 1.5 0 0 1 12 2ZM9 11.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
  ),
}

export default function Skills() {
  return (
    <section id="skills" className="section section-anchor">
      <div className="section-head">
        <span className="section-index">02.</span>
        <h2 className="section-title">skills &amp; tools</h2>
        <span className="section-line" />
      </div>

      <div className="skills-grid">
        {profile.skillGroups.map((group, gi) => (
          <motion.div
            key={group.group}
            className="skill-group card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: gi * 0.12 }}
          >
            <h3 className="skill-group-title">
              <span className="skill-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  {groupIcons[group.icon]}
                </svg>
              </span>
              {group.group}
            </h3>
            <div className="skill-bars">
              {group.skills.map((skill) => (
                <div className="skill" key={skill.name}>
                  <div className="skill-row">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-track" role="progressbar" aria-valuenow={skill.level}>
                    <motion.div
                      className="skill-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 1, ease: 'easeOut', delay: gi * 0.08 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <p className="skills-note">
        <span className="prompt">❯</span> always learning{' '}
        <span className="hl">ROS2</span>,{' '}
        <span className="hl">embedded Linux</span>,{' '}
        <span className="hl">FPGAs</span>,{' '}
        <span className="hl">verilog</span> …
      </p>
    </section>
  )
}
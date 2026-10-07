import { motion } from 'framer-motion'
import { profile } from '../data/profile.js'
import useCountUp from '../hooks/useCountUp.js'

function Stat({ stat, index }) {
  const [ref, value] = useCountUp(stat.value)
  return (
    <motion.div
      className="stat"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.08 }}
    >
      <span className="stat-label">// {stat.label}</span>
      <span ref={ref} className="stat-value">
        {value}
        {stat.suffix}
      </span>
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="section section-anchor">
      <div className="section-head">
        <span className="section-index">01.</span>
        <h2 className="section-title">about me</h2>
        <span className="section-line" />
      </div>

      <div className="about-grid">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p>
            I&apos;m a physics student at the{' '}
            <span className="hl">University of Lagos</span> who believes the
            best way to understand nature is to build with it. That belief
            pulled me from equations into three interlocking worlds:{' '}
            <span className="hl">frontend</span>,{' '}
            <span className="hl">hardware</span>, and{' '}
            <span className="hl">embedded systems</span>.
          </p>
          <p>
            I&apos;ve shipped fleet-feel robots, custom PCBs, IoT dashboards
            and physics simulations — always with a soldering iron or a
            compiler not far away. Right now I&apos;m levelling up toward my
            endgame: <span className="hl">robotics engineering</span>, one
            ROS node at a time.
          </p>
          <p className="mono-line">
            <span className="comment"># stack in one breath</span>
            <br />
            react · typescript · tailwind · c/c++ · esp32 · stm32 · kicad · ros
          </p>
        </motion.div>

        <motion.div
          className="about-console"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="term-bar small">
            <span className="dot red" />
            <span className="dot amber" />
            <span className="dot green" />
            <span className="term-title">~/.profile.json</span>
          </div>
          <pre className="json-view">{`{
  "name":       "${profile.name}",
  "degree":     "B.Sc. Physics @ UNILAG",
  "focus":      "embedded · robotics · software",
  "location":   "${profile.location}",
  "theorem":    "curiosity × persistence = shipped",
  "hobbies":    ["pcb etching", "runtime debugging", "oscilloscope nights"]
}`}</pre>
        </motion.div>
      </div>

      <div className="stats-row">
        {profile.stats.map((stat, i) => (
          <Stat key={stat.label} stat={stat} index={i} />
        ))}
      </div>

      <div className="journey">
        {profile.journey.map((step, i) => (
          <motion.div
            key={step.title}
            className="journey-step"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: i * 0.12 }}
          >
            <span className="journey-year">{step.year}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { bootLines } from '../data/profile.js'

export default function BootSequence() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (done) return
    const timers = []
    bootLines.forEach((_, i) => {
      timers.push(
        setTimeout(() => setVisibleLines(i + 1), 280 * (i + 1)),
      )
    })
    timers.push(setTimeout(() => setDone(true), 280 * bootLines.length + 700))
    return () => timers.forEach(clearTimeout)
  }, [done])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="boot"
          key="boot"
          onClick={() => setDone(true)}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6 }}
        >
          <div className="boot-window">
            <div className="term-bar">
              <span className="dot red" />
              <span className="dot amber" />
              <span className="dot green" />
              <span className="term-title">ahmadjamal789 — bash</span>
            </div>
            <div className="boot-body">
              {bootLines.slice(0, visibleLines).map((line) => (
                <div key={line} className="boot-line">
                  {line.startsWith('$') ? <span className="prompt">$</span> : <span className="prompt">»</span>}
                  {line.startsWith('$') ? line.slice(1) : line}
                </div>
              ))}
              <span className="cursor-blink" />
            </div>
            <p className="boot-hint">click anywhere to skip</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
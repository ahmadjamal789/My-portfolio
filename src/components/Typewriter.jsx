import { useEffect, useState } from 'react'

export default function Typewriter({ texts, speed = 70, hold = 1500 }) {
  const [textIndex, setTextIndex] = useState(0)
  const [text, setText] = useState('')

  useEffect(() => {
    const full = texts[textIndex]
    let timeout = null

    if (text.length < full.length) {
      timeout = setTimeout(() => setText(full.slice(0, text.length + 1)), speed)
    } else {
      timeout = setTimeout(() => {
        setText('')
        setTextIndex((i) => (i + 1) % texts.length)
      }, hold)
    }
    return () => clearTimeout(timeout)
  }, [text, textIndex, texts, speed, hold])

  return (
    <span className="typewriter" aria-label={texts.join(', ')}>
      {text}
      <span className="type-cursor" aria-hidden="true" />
    </span>
  )
}
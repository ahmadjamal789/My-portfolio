import { profile } from '../data/profile.js'

const tickerItems = [
  'c/c++',
  'python',
  'react',
  'arduino',
  'esp32',
  'stm32',
  'kicad',
  'ros',
  'embedded linux',
  'pwm',
  'uart',
  'i2c',
  'spi',
  'gpio',
  'physics',
  'robotics',
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="ticker-item">
              {item} <span className="ticker-star">✦</span>
            </span>
          ))}
        </div>
      </div>

      <pre className="ascii">{`
   █████╗      ██╗
  ██╔══██╗    ████╗
  ███████║    ██╔██╗
  ██╔══██║    ██║╚██╗
  ██║  ██║    ██║ ╚███
  ╚═╝  ╚═╝    ╚═╝   ╚══   jamal`}</pre>
      <p className="footer-line">
        © {year} {profile.name} — built with physics, circuits &amp; a
        terrifying amount of solder.
      </p>
      <p className="footer-cmd">
        <span className="prompt">$</span> exit — thanks for visiting 👾
      </p>
      <a href="#home" className="to-top">
        back to top ↑
      </a>
    </footer>
  )
}
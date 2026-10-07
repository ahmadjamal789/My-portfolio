export const profile = {
  name: 'Ahmad Jamal',
  aliases: ['ahmadjamal789', 'AJ_789'],
  roles: [
    'Frontend Software Developer',
    'Hardware Developer',
    'Embedded Systems Engineer',
    'Robotics Engineer (aspiring)',
    'Physics Student @ UNILAG',
  ],
  tagline:
    'Frontend software developer and physics student at the University of Lagos — crafting fast, beautiful interfaces by day, circuits & robots by night.',
  email: 'your.email@example.com',
  location: 'Lagos, Nigeria',
  socials: [
    { label: 'GitHub', href: 'https://github.com/ahmadjamal789', icon: 'github' },
    { label: 'X (Twitter)', href: 'https://x.com/ahmadjamal789', icon: 'x' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ahmadjamal789', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:adesoyeahmad11@gmail.com', icon: 'mail' },
  ],
  stats: [
    { label: 'Projects built', value: 14, suffix: '+' },
    { label: 'Microcontrollers', value: 6, suffix: '+' },
    { label: 'Hypotheses debunked', value: 150, suffix: '+' },
    { label: 'Lines of code', value: 50000, suffix: '+' },
  ],
  skillGroups: [
    {
      group: 'Frontend & Software',
      icon: 'code',
      skills: [
        { name: 'React / JavaScript', level: 92 },
        { name: 'TypeScript', level: 82 },
        { name: 'CSS Animations / Tailwind', level: 90 },
        { name: 'Git & Bash', level: 88 },
      ],
    },
    {
      group: 'Hardware',
      icon: 'chip',
      skills: [
        { name: 'PCB Design (KiCad)', level: 82 },
        { name: 'Circuit Debugging', level: 88 },
        { name: 'Arduino', level: 92 },
        { name: '3D Printing', level: 74 },
      ],
    },
    {
      group: 'Embedded & Robotics',
      icon: 'robot',
      skills: [
        { name: 'C / C++ Firmware', level: 85 },
        { name: 'ESP32 / STM32', level: 84 },
        { name: 'RTOS (FreeRTOS)', level: 70 },
        { name: 'ROS', level: 45 },
      ],
    },
  ],
  projects: [
    {
      title: 'Interactive Physics Sandbox',
      category: 'Frontend',
      blurb:
        'Browser playground with drag-and-drop springs, pendulums and orbits — tweak gravity and damping in real time.',
      tech: ['React', 'Canvas', 'Framer Motion'],
      accent: '#22d3ee',
    },
    {
      title: 'E-Commerce Storefront',
      category: 'Frontend',
      blurb:
        'Full storefront with cart state, product filters, dark mode and buttery micro-interactions throughout.',
      tech: ['React', 'Tailwind', 'Zustand'],
      accent: '#a855f7',
    },
    {
      title: 'Weather Pulse',
      category: 'Frontend',
      blurb:
        'Live weather app with animated condition scenes and a 7-day forecast pulled from a public API.',
      tech: ['React', 'REST API', 'CSS Animations'],
      accent: '#fbbf24',
    },
    {
      title: 'Signal UI Kit',
      category: 'Frontend',
      blurb:
        'My own component library — buttons, toggles, modals and bars, all animated and themeable via tokens.',
      tech: ['React', 'Storybook', 'Design Tokens'],
      accent: '#e879f9',
    },
    {
      title: 'Typing Speed Trainer',
      category: 'Frontend',
      blurb:
        'Gamified typing test with a live WPM graph, accuracy heatmap and a local leaderboard.',
      tech: ['TypeScript', 'Charts', 'LocalStorage'],
      accent: '#4ade80',
    },
    {
      title: 'Autonomous Line-Following Robot',
      category: 'Robotics',
      blurb:
        'Self-driving follower with array-sensor PID control, lane recovery and speed mapping on ATmega.',
      tech: ['Arduino', 'C++', 'PID', 'IR Sensors'],
      accent: '#00ff9d',
    },
    {
      title: 'Smart Home Energy Monitor',
      category: 'Hardware',
      blurb:
        'ESP32 + CT-sensor power meter streaming consumption to a live React dashboard over MQTT.',
      tech: ['ESP32', 'React', 'MQTT', 'KiCad'],
      accent: '#22d3ee',
    },
    {
      title: 'Bare-Metal UART Debugger',
      category: 'Embedded',
      blurb:
        'Zero-dependency C toolchain to flash, log and trace registers over UART with ring-buffer parsing.',
      tech: ['C', 'STM32', 'Registers'],
      accent: '#a855f7',
    },
    {
      title: 'Gesture-Controlled Car',
      category: 'Robotics',
      blurb:
        'Two-wheeler driven by an IMU glove; orientation maps to throttle, steering and braking.',
      tech: ['MPU6050', 'nRF24', 'Arduino'],
      accent: '#f97316',
    },
    {
      title: 'Projectile Motion Simulator',
      category: 'Software',
      blurb:
        'Physics visualizer for trajectories with drag, wind and variable gravity rendered in the browser.',
      tech: ['Python', 'Numerical Methods', 'Matplotlib'],
      accent: '#38bdf8',
    },
    {
      title: 'Roomba-Style Vacuum Prototype',
      category: 'Robotics',
      blurb:
        'Obstacle-avoiding rover with ultrasonic + bump sensors and a state machine for room coverage.',
      tech: ['Ultrasonic', 'State Machine', 'DC Motors'],
      accent: '#facc15',
    },
    {
      title: 'STM32 Dev-Board',
      category: 'Hardware',
      blurb:
        'Custom 2-layer PCB with USB-C, ST-Link footprint, crystal layout and labelled headers.',
      tech: ['KiCad', 'STM32F103', 'USB-C'],
      accent: '#2dd4bf',
    },
    {
      title: 'University Course Timetable Bot',
      category: 'Software',
      blurb:
        'Telegram bot that scrapes the UNILAG portal, resolves clashes and replies in under a second.',
      tech: ['Python', 'Telegram API', 'Scraping'],
      accent: '#818cf8',
    },
    {
      title: 'Firmware CI Pipeline',
      category: 'Embedded',
      blurb:
        'GitHub Actions that compile for three targets, run unit tests and auto-bump firmware versions.',
      tech: ['GitHub Actions', 'CMake', 'Test-driven'],
      accent: '#e879f9',
    },
    {
      title: 'Solar Tracker (Dual Axis)',
      category: 'Hardware',
      blurb:
        'LDR-based tracker with stepper motors maximizing panel tilt against a sun-position model.',
      tech: ['LDR Array', 'Steppers', 'Solar'],
      accent: '#fbbf24',
    },
    {
      title: 'Cell-Division Cellular Automaton',
      category: 'Frontend',
      blurb:
        'Rule-based simulation of growth, apoptosis and mutation rendered on canvas for a computational-biology course project.',
      tech: ['JavaScript', 'Canvas', 'CA Rules'],
      accent: '#4ade80',
    },
    {
      title: 'LoRa Environmental Node',
      category: 'Embedded',
      blurb:
        'Battery-powered sensor node reporting temperature, humidity and soil moisture over LoRa to a gateway.',
      tech: ['LoRa', 'STM32', 'Low Power'],
      accent: '#67e8f9',
    },
  ],
  journey: [
    {
      year: 'First LED blinked',
      title: 'The spark',
      body: 'Bought an Arduino clone with savings; blinked an LED and never looked back.',
    },
    {
      year: 'B.Sc. Physics',
      title: 'University of Lagos',
      body: 'Started studying physics while teaching myself frontend development (React) on the side.',
    },
    {
      year: 'First firmware',
      title: 'Into embedded',
      body: 'Moved from Arduino to bare-metal C on STM32; fell in love with registers and datasheets.',
    },
    {
      year: 'Robotics',
      title: 'The next frontier',
      body: 'Currently learning ROS, motor control and embedded Linux to build real robots.',
    },
  ],
}

export const bootLines = [
  '$ jamal@unilag: ~/portfolio',
  '$ who_am_i',
  '> Ahmad Jamal — frontend dev, phys.hons (UNILAG)',
  '> frontend ▪ hardware ▪ embedded',
  '$ loading systems ......... OK',
  '$ init robotics.stack ......... OK',
  '$ access granted',
]
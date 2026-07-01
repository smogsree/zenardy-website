import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { gradientStyle } from '../lib/gradientStyle'
import { useMouseParallax } from '../hooks/useMouseParallax'

const ghostButtonClass =
  'inline-flex items-center gap-2 rounded-full border border-white/15 text-white text-sm px-5 py-3 hover:border-brand-red/60 hover:text-brand-red transition-colors'

const orbColors = [
  'bg-brand/20',
  'bg-brand-red/15',
  'bg-brand/15',
  'bg-brand-red/10',
]

export function Hero() {
  const orbs = useMouseParallax()

  return (
    <section className="relative z-10 pt-16 md:pt-28 pb-12 text-center flex flex-col items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {orbs.map((orb, i) => (
          <motion.div
            key={i}
            className={`absolute w-72 h-72 rounded-full blur-3xl ${orbColors[i]}`}
            style={{
              x: orb.x,
              y: orb.y,
              left: `${15 + i * 20}%`,
              top: `${20 + (i % 2) * 30}%`,
            }}
          />
        ))}
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative text-4xl md:text-7xl font-semibold tracking-tight leading-[0.9]"
      >
        <span className="text-white">Your Future, Engineered</span>
        <br />
        <span className="text-white">with </span>
        <span className="animate-shiny" style={gradientStyle}>
          Zenardy
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="relative mt-8 text-white/60 max-w-lg text-base leading-[1.5]"
      >
        Zenardy is a technology consulting firm and trusted Oracle NetSuite partner. Streamline
        operations, enhance visibility, and drive smarter decisions with our AI-powered ERP
        solutions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7 }}
        className="relative mt-8 flex flex-wrap items-center justify-center gap-3"
      >
        <Link to="/#services" className={ghostButtonClass}>
          Explore Services
        </Link>
        <Link to="/#why-choose-us" className={ghostButtonClass}>
          Why Zenardy
        </Link>
      </motion.div>
    </section>
  )
}

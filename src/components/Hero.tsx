import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { gradientStyle } from '../lib/gradientStyle'
import { useMouseParallax } from '../hooks/useMouseParallax'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { ease } from '../lib/motion'

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
  const reduced = useReducedMotion()

  return (
    <section className="relative z-10 pt-16 md:pt-28 pb-12 text-center flex flex-col items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {orbs.map((orb, i) => (
          <motion.div
            key={i}
            className={`absolute w-72 h-72 rounded-full blur-3xl ${orbColors[i]}`}
            style={{
              x: reduced ? 0 : orb.x,
              y: reduced ? 0 : orb.y,
              left: `${15 + i * 20}%`,
              top: `${20 + (i % 2) * 30}%`,
            }}
          />
        ))}
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ delay: 0.15, duration: 0.85, ease: ease.smooth }}
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
        initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ delay: 0.35, duration: 0.7, ease: ease.smooth }}
        className="relative mt-8 text-white/60 max-w-lg text-base leading-[1.5]"
      >
        Zenardy is a technology consulting firm and trusted Oracle NetSuite partner. Streamline
        operations, enhance visibility, and drive smarter decisions with our AI-powered ERP
        solutions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.65, ease: ease.smooth }}
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

import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { SectionEyebrow } from './primitives/SectionEyebrow'
import { FadeInUp } from './primitives/FadeInUp'
import { zenSolutions } from '../data/content'
import { solutionSlugByLabel } from '../data/solutionDetails'

const blobPaths = [
  'M40,20 C55,5 75,5 85,25 C95,45 80,60 60,55 C40,50 25,35 40,20 Z',
  'M35,25 C50,10 80,15 88,35 C96,55 75,65 55,58 C35,51 20,40 35,25 Z',
  'M42,18 C58,8 78,12 86,30 C94,48 78,62 58,56 C38,50 28,32 42,18 Z',
]

const delays = [0, 1.5, 3, 4.5, 6]

export function ZenSolutionsSpotlight() {
  return (
    <section id="zen-solutions" className="relative z-10 w-full px-4 md:px-10 py-24">
      <FadeInUp>
        <SectionEyebrow label="Zen IP Solutions" tag="Proprietary" />
        <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02] mb-12">
          Accelerators built by practitioners.
        </h2>
      </FadeInUp>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide md:grid md:grid-cols-5 md:overflow-visible">
        {zenSolutions.map((solution, i) => {
          const slug = solutionSlugByLabel[solution.name]
          const card = (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="liquid-glass rounded-2xl p-6 w-64 shrink-0 md:w-auto group hover:border-brand-red/30 border border-transparent transition-colors h-full"
            >
              <div className="relative w-12 h-12 mb-4">
                <svg viewBox="0 0 100 70" className="absolute inset-0 w-full h-full">
                  <defs>
                    <linearGradient id={`blob-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E63946" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#3D81E3" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    fill={`url(#blob-${i})`}
                    animate={{ d: [...blobPaths, blobPaths[0]] }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: delays[i],
                    }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <solution.icon className="w-5 h-5 text-white/80" />
                </div>
              </div>
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-semibold text-white">{solution.name}</h3>
                {slug && (
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/30 group-hover:text-brand-red transition-colors shrink-0" />
                )}
              </div>
              <p className="text-xs text-white/50 mt-2 leading-relaxed">{solution.benefit}</p>
            </motion.div>
          )

          return slug ? (
            <Link key={solution.name} to={`/solutions/${slug}`}>
              {card}
            </Link>
          ) : (
            <div key={solution.name}>{card}</div>
          )
        })}
      </div>
    </section>
  )
}

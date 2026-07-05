import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { SectionEyebrow } from './primitives/SectionEyebrow'
import { FadeInUp } from './primitives/FadeInUp'
import { RevealGroup } from './primitives/RevealGroup'
import { RevealItem } from './primitives/RevealItem'
import { zenSolutions } from '../data/content'
import { solutionSlugByLabel } from '../data/solutionDetails'

function SolutionCardContent({
  solution,
  index,
  slug,
}: {
  solution: (typeof zenSolutions)[number]
  index: number
  slug?: string
}) {
  return (
    <div className="liquid-glass rounded-2xl p-5 sm:p-6 w-[min(85vw,16rem)] sm:w-64 shrink-0 snap-center md:w-auto group hover:border-brand-red/30 border border-transparent transition-colors h-full">
      <div className="relative w-12 h-12 mb-4">
        <svg viewBox="0 0 100 70" className="absolute inset-0 w-full h-full" aria-hidden>
          <defs>
            <linearGradient id={`blob-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E63946" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#3D81E3" stopOpacity="0.25" />
            </linearGradient>
          </defs>
          <motion.ellipse
            cx="50"
            cy="35"
            rx="38"
            ry="26"
            fill={`url(#blob-${index})`}
            animate={{ opacity: [0.55, 0.8, 0.55] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.4,
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
    </div>
  )
}

export function ZenSolutionsSpotlight() {
  return (
    <section id="zen-solutions" className="relative z-10 w-full px-4 md:px-10 py-24">
      <FadeInUp>
        <SectionEyebrow label="Zen IP Solutions" tag="Proprietary" />
        <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02] mb-12">
          Accelerators built by practitioners.
        </h2>
      </FadeInUp>

      <RevealGroup className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2 -mx-1 px-1 md:grid md:grid-cols-5 md:overflow-visible md:pb-0 md:mx-0 md:px-0">
        {zenSolutions.map((solution, i) => {
          const slug = solutionSlugByLabel[solution.name]
          return (
            <RevealItem key={solution.name} index={i}>
              {slug ? (
                <Link to={`/solutions/${slug}`}>
                  <SolutionCardContent solution={solution} index={i} slug={slug} />
                </Link>
              ) : (
                <SolutionCardContent solution={solution} index={i} />
              )}
            </RevealItem>
          )
        })}
      </RevealGroup>
    </section>
  )
}

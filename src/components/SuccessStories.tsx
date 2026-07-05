import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { SectionEyebrow } from './primitives/SectionEyebrow'
import { FadeInUp } from './primitives/FadeInUp'
import { RevealGroup } from './primitives/RevealGroup'
import { RevealItem } from './primitives/RevealItem'
import { successStories } from '../data/zenardyContent'
import { accordionSpring } from '../lib/motion'

export function SuccessStories() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="success-stories" className="relative z-10 w-full px-4 md:px-10 py-24">
      <FadeInUp>
        <SectionEyebrow label="Success Stories" tag="Latest" />
        <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02] mb-12">
          Latest Success Stories
        </h2>
      </FadeInUp>

      <RevealGroup className="space-y-4">
        {successStories.map((story, i) => {
          const isOpen = openIndex === i
          return (
            <RevealItem key={story.title} index={i}>
              <div className="liquid-glass rounded-2xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-4 p-5 sm:p-6 min-h-[56px] text-left"
                >
                  <div>
                    <h3 className="text-base font-semibold text-white pr-4">{story.title}</h3>
                    <p className="mt-2 text-sm text-white/55 leading-relaxed">{story.summary}</p>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-white/40" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={accordionSpring}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-white/10 pt-4">
                        <p className="text-xs uppercase tracking-wider text-brand-red mb-3">
                          {story.highlightsLabel}
                        </p>
                        <ul className="space-y-2">
                          {story.highlights.map((item) => (
                            <li
                              key={item}
                              className="text-sm text-white/60 leading-relaxed flex gap-2"
                            >
                              <span className="text-brand-red shrink-0">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </RevealItem>
          )
        })}
      </RevealGroup>
    </section>
  )
}

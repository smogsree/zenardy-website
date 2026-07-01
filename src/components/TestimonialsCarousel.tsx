import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Quote, Star } from 'lucide-react'
import { SectionEyebrow } from './primitives/SectionEyebrow'
import { homepageTestimonials } from '../data/zenardyContent'

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % homepageTestimonials.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [paused])

  const current = homepageTestimonials[index]

  return (
    <section className="relative z-10 w-full px-4 md:px-10 py-24">
      <SectionEyebrow label="What Clients Say" tag="Testimonials" />
      <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight mb-12">
        Trusted by leaders worldwide.
      </h2>

      <div
        className="relative min-h-[280px]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5 }}
            className="liquid-glass rounded-2xl p-8"
          >
            <Quote className="w-8 h-8 text-brand-red/60 mb-4" />
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-brand-red text-brand-red" />
              ))}
            </div>
            <p className="text-base text-white/70 leading-relaxed max-w-3xl">
              &ldquo;{current.quote}&rdquo;
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-white/10 text-brand">
                {current.badge}
              </span>
              <p className="text-sm font-medium text-white">{current.company}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {homepageTestimonials.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === index ? 'bg-brand-red' : 'bg-white/20'
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

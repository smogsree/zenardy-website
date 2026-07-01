import { useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'motion/react'
import { SectionEyebrow } from './primitives/SectionEyebrow'
import { industries } from '../data/content'

function IndustryCard({
  name,
  description,
  scrollX,
  index,
  cardWidth,
}: {
  name: string
  description: string
  scrollX: ReturnType<typeof useMotionValue<number>>
  index: number
  cardWidth: number
}) {
  const gap = 16
  const center = index * (cardWidth + gap) + cardWidth / 2
  const scale = useTransform(scrollX, (x) => {
    const viewportCenter = -x + (typeof window !== 'undefined' ? window.innerWidth / 2 : 600)
    const dist = Math.abs(center - viewportCenter)
    return Math.max(0.9, 1 - dist / 800)
  })
  const opacity = useTransform(scrollX, (x) => {
    const viewportCenter = -x + (typeof window !== 'undefined' ? window.innerWidth / 2 : 600)
    const dist = Math.abs(center - viewportCenter)
    return Math.max(0.5, 1 - dist / 600)
  })

  return (
    <motion.div
      style={{ scale, opacity }}
      className="w-72 shrink-0 snap-center liquid-glass rounded-xl p-6"
    >
      <h3 className="text-sm font-semibold text-white">{name}</h3>
      <p className="text-xs text-white/50 mt-3 leading-relaxed">{description}</p>
    </motion.div>
  )
}

export function IndustriesStrip() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollX = useMotionValue(0)
  const cardWidth = 288

  return (
    <section id="industries" className="relative z-10 w-full px-4 md:px-10 py-20">
      <SectionEyebrow label="Industries" tag="8 Verticals" />
      <h2 className="mt-5 text-2xl md:text-4xl font-semibold tracking-tight mb-8">
        Built for your vertical.
      </h2>

      <motion.div
        ref={containerRef}
        drag="x"
        dragConstraints={{ left: -((cardWidth + 16) * industries.length - 600), right: 0 }}
        onDrag={(_, info) => scrollX.set(info.offset.x)}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing pb-4"
      >
        {industries.map((industry, i) => (
          <IndustryCard
            key={industry.name}
            name={industry.name}
            description={industry.description}
            scrollX={scrollX}
            index={i}
            cardWidth={cardWidth}
          />
        ))}
      </motion.div>
    </section>
  )
}

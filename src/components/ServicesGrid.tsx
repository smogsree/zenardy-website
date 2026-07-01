import { useRef, useState } from 'react'
import { motion, AnimatePresence, useSpring } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { SectionEyebrow } from './primitives/SectionEyebrow'
import { services } from '../data/content'

function ServiceCardItem({
  service,
  index,
  expanded,
  onToggle,
}: {
  service: (typeof services)[0]
  index: number
  expanded: boolean
  onToggle: () => void
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const rotateX = useSpring(0, { stiffness: 300, damping: 30 })
  const rotateY = useSpring(0, { stiffness: 300, damping: 30 })

  const row = Math.floor(index / 4)
  const col = index % 4
  const delay = ((row + col) % 2) * 0.05 + index * 0.04

  function handleMouseMove(e: React.MouseEvent) {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    rotateX.set(Math.max(-6, Math.min(6, -dy * 6)))
    rotateY.set(Math.max(-6, Math.min(6, dx * 6)))
  }

  function handleMouseLeave() {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      layout
      ref={cardRef}
      initial={{ opacity: 0, y: 24, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration: 0.5 }}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onToggle}
      className={`liquid-glass rounded-xl p-5 flex flex-col justify-between cursor-pointer group border border-white/10 hover:border-brand-red/40 transition-colors ${
        expanded ? 'md:col-span-2 h-auto' : 'h-40'
      }`}
    >
      <div>
        <div className="flex items-start justify-between">
          <h3 className="text-sm font-semibold text-white pr-2">{service.title}</h3>
          <ArrowUpRight className="w-4 h-4 text-white/30 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-1 transition-all" />
        </div>
        <p className="text-xs text-white/50 mt-2 leading-relaxed">{service.description}</p>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 space-y-1.5 border-t border-white/10 pt-3"
          >
            {service.outcomes.map((outcome) => (
              <li key={outcome} className="text-[11px] text-white/60 flex items-start gap-2">
                <span className="text-brand-red mt-0.5">•</span>
                {outcome}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function ServicesGrid() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id="services" className="relative z-10 w-full px-4 md:px-10 py-24">
      <SectionEyebrow label="Services" tag="End-to-End Delivery" />
      <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02] mb-12">
        One Partner, Every Layer of Your ERP.
      </h2>

      <div className="grid md:grid-cols-4 gap-4">
        {services.map((service, i) => (
          <ServiceCardItem
            key={service.title}
            service={service}
            index={i}
            expanded={expandedIndex === i}
            onToggle={() => setExpandedIndex(expandedIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  )
}

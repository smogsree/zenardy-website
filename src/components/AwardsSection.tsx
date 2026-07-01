import { motion } from 'motion/react'
import { SectionEyebrow } from './primitives/SectionEyebrow'
import { FadeInUp } from './primitives/FadeInUp'
import { awardBadges } from '../data/zenardyContent'

export function AwardsSection() {
  const items = [...awardBadges, ...awardBadges]

  return (
    <section id="awards" className="relative z-10 w-full px-4 md:px-10 py-24 text-center">
      <FadeInUp>
        <SectionEyebrow label="Awards" />
        <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight mb-14">
          Recognized for Excellence
        </h2>
      </FadeInUp>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="overflow-hidden marquee-fade"
      >
        <div className="flex gap-12 md:gap-20 marquee-track-reverse w-max items-center py-4">
          {items.map((award, i) => (
            <motion.img
              key={`${award.name}-${i}`}
              src={award.image}
              alt={award.name}
              title={award.name}
              className="h-24 md:h-32 lg:h-36 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity shrink-0"
              draggable={false}
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.25 }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

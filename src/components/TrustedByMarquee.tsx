import { motion } from 'motion/react'
import { partners } from '../data/partners'
import { PartnerLogo } from './PartnerLogo'

export function TrustedByMarquee() {
  const items = [...partners, ...partners]

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative z-10 h-28 md:h-32 border-t border-b border-white/10 overflow-hidden"
    >
      <div className="h-full flex items-center marquee-fade">
        <div className="flex gap-16 md:gap-24 marquee-track w-max items-center px-6">
          {items.map((partner, i) => (
            <PartnerLogo key={`${partner.name}-${i}`} {...partner} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

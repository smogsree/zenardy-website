import { motion } from 'motion/react'
import { Sparkles, Target, Users } from 'lucide-react'
import { SectionEyebrow } from './primitives/SectionEyebrow'
import { whyChooseUs } from '../data/zenardyContent'

const icons = [Target, Sparkles, Users]

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative z-10 w-full px-4 md:px-10 py-24">
      <SectionEyebrow label="Why Choose Us" />
      <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02] mb-12">
        {whyChooseUs.title}
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {whyChooseUs.pillars.map((pillar, i) => {
          const Icon = icons[i]
          return (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className="liquid-glass rounded-2xl p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-brand/20 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-brand" />
              </div>
              <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm text-white/60 leading-relaxed">{pillar.description}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

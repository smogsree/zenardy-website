import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { SectionEyebrow } from './primitives/SectionEyebrow'
import { servicesOverview } from '../data/zenardyContent'

export function ServicesOverview() {
  return (
    <section id="services" className="relative z-10 w-full px-4 md:px-10 py-24">
      <SectionEyebrow label="Services" tag="Overview" />
      <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02] mb-4">
        Overview of Services
      </h2>
      <p className="text-white/60 max-w-2xl text-base leading-relaxed mb-12">
        End-to-end NetSuite delivery — from implementation and integrations to EPM, automation,
        and proprietary Zen accelerators.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {servicesOverview.map((service, i) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: (i % 2) * 0.05 + Math.floor(i / 2) * 0.04, duration: 0.5 }}
            className="liquid-glass rounded-xl p-5 group hover:border-brand/30 border border-transparent transition-colors"
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-sm font-semibold text-white">{service.title}</h3>
              <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-brand-red transition-colors shrink-0" />
            </div>
            <p className="mt-2 text-xs text-white/55 leading-relaxed">{service.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

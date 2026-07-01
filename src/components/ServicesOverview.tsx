import { ArrowUpRight } from 'lucide-react'
import { SectionEyebrow } from './primitives/SectionEyebrow'
import { FadeInUp } from './primitives/FadeInUp'
import { RevealGroup } from './primitives/RevealGroup'
import { RevealItem } from './primitives/RevealItem'
import { servicesOverview } from '../data/zenardyContent'

export function ServicesOverview() {
  return (
    <section id="services" className="relative z-10 w-full px-4 md:px-10 py-24">
      <FadeInUp>
        <SectionEyebrow label="Services" tag="Overview" />
        <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02] mb-4">
          Overview of Services
        </h2>
        <p className="text-white/60 max-w-2xl text-base leading-relaxed mb-12">
          End-to-end NetSuite delivery — from implementation and integrations to EPM, automation,
          and proprietary Zen accelerators.
        </p>
      </FadeInUp>

      <RevealGroup className="grid md:grid-cols-2 gap-4">
        {servicesOverview.map((service, i) => (
          <RevealItem key={service.title} alternate index={i}>
            <article className="liquid-glass rounded-xl p-6 group hover:border-brand/30 border border-transparent transition-colors h-full">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg md:text-xl font-semibold text-white">{service.title}</h3>
                <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-brand-red transition-colors shrink-0" />
              </div>
              <p className="mt-3 text-base md:text-lg text-white/60 leading-relaxed">
                {service.description}
              </p>
            </article>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  )
}

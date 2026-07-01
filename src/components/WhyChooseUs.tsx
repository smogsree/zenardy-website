import { Target, Sparkles, Users } from 'lucide-react'
import { SectionEyebrow } from './primitives/SectionEyebrow'
import { FadeInUp } from './primitives/FadeInUp'
import { RevealGroup } from './primitives/RevealGroup'
import { RevealItem } from './primitives/RevealItem'
import { whyChooseUs } from '../data/zenardyContent'

const icons = [Target, Sparkles, Users]

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative z-10 w-full px-4 md:px-10 py-24">
      <FadeInUp>
        <SectionEyebrow label="Why Choose Us" />
        <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02] mb-12">
          {whyChooseUs.title}
        </h2>
      </FadeInUp>

      <RevealGroup className="grid md:grid-cols-3 gap-6">
        {whyChooseUs.pillars.map((pillar, i) => {
          const Icon = icons[i]
          return (
            <RevealItem key={pillar.title} index={i}>
              <div className="liquid-glass rounded-2xl p-6 h-full">
                <div className="w-10 h-10 rounded-lg bg-brand/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-brand" />
                </div>
                <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">{pillar.description}</p>
              </div>
            </RevealItem>
          )
        })}
      </RevealGroup>
    </section>
  )
}

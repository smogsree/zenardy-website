import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { SectionEyebrow } from './primitives/SectionEyebrow'
import { industryCategories } from '../data/zenardyContent'
import { industrySlugByLabel } from '../data/industryDetails'

const industryLinkLabels: Record<string, string> = {
  'Food and Beverage': 'Food & Beverage',
  'Wholesale Distribution': 'Wholesale Distribution',
  Manufacturing: 'Manufacturing',
  'Destination Marketing': 'DMO',
  'Software & Technology': 'Software Services',
  'High Tech': 'Software/High-Tech',
}

function getIndustrySlug(name: string): string | undefined {
  if (industrySlugByLabel[name]) return industrySlugByLabel[name]
  const mapped = industryLinkLabels[name]
  if (mapped) return industrySlugByLabel[mapped]
  return undefined
}

export function IndustriesServed() {
  return (
    <section id="industries" className="relative z-10 w-full px-4 md:px-10 py-24">
      <SectionEyebrow label="Industries" tag="Industries Served" />
      <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02] mb-12">
        Built for your industry.
      </h2>

      <div className="space-y-10">
        {industryCategories.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: gi * 0.08, duration: 0.6 }}
          >
            <h3 className="text-xs font-medium uppercase tracking-wider text-brand mb-4">
              {group.category}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {group.items.map((item) => {
                const slug = getIndustrySlug(item.name)
                const card = (
                  <div className="liquid-glass rounded-xl p-4 group hover:border-brand/30 border border-transparent transition-colors h-full">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-medium text-white">{item.name}</p>
                      {slug && (
                        <ArrowUpRight className="w-3.5 h-3.5 text-white/30 group-hover:text-brand-red transition-colors shrink-0" />
                      )}
                    </div>
                    <p className="mt-1.5 text-[11px] text-white/50 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )

                return slug ? (
                  <Link key={item.name} to={`/industries/${slug}`}>
                    {card}
                  </Link>
                ) : (
                  <div key={item.name}>{card}</div>
                )
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

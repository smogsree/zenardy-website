import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { SectionEyebrow } from './primitives/SectionEyebrow'
import { FadeInUp } from './primitives/FadeInUp'
import { RevealGroup } from './primitives/RevealGroup'
import { RevealItem } from './primitives/RevealItem'
import { industryCategories } from '../data/zenardyContent'
import { industryCategoryImages } from '../data/industryCategoryImages'
import { industrySlugByLabel } from '../data/industryDetails'
import { publicAsset } from '../lib/publicAsset'
import { slideFromLeft, slideFromRight, viewport } from '../lib/motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { reducedVariants } from '../lib/motion'

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

function IndustryCard({ name, description, slug }: { name: string; description: string; slug?: string }) {
  const inner = (
    <div className="liquid-glass rounded-xl p-5 group hover:border-brand/30 border border-transparent transition-colors h-full">
      <div className="flex items-start justify-between gap-2">
        <p className="text-lg md:text-xl font-medium text-white">{name}</p>
        {slug && (
          <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-brand-red transition-colors shrink-0" />
        )}
      </div>
      <p className="mt-2.5 text-base md:text-lg text-white/55 leading-relaxed">{description}</p>
    </div>
  )

  return slug ? <Link to={`/industries/${slug}`}>{inner}</Link> : inner
}

function CategoryImagePanel({
  src,
  alt,
  category,
  imageOnRight,
  className = '',
}: {
  src: string
  alt: string
  category: string
  imageOnRight: boolean
  className?: string
}) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      className={`lg:col-span-5 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={reduced ? reducedVariants : imageOnRight ? slideFromRight : slideFromLeft}
    >
      <div className="relative h-52 sm:h-60 lg:h-full lg:min-h-[340px] rounded-2xl overflow-hidden reveal-card group">
        <img
          src={publicAsset(src)}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-[#0a1628]/55 to-brand/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div
          className={`absolute inset-y-0 w-1 bg-gradient-to-b from-brand via-brand-red/70 to-transparent ${
            imageOnRight ? 'right-0' : 'left-0'
          }`}
        />
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
          <p className="text-[11px] uppercase tracking-[0.2em] text-brand/90 font-medium mb-1.5">
            Industry focus
          </p>
          <p className="text-lg sm:text-xl font-semibold text-white leading-snug">{category}</p>
        </div>
      </div>
    </motion.div>
  )
}

function IndustryCardsGrid({
  items,
}: {
  items: (typeof industryCategories)[number]['items']
}) {
  return (
    <RevealGroup className="grid sm:grid-cols-2 gap-4 h-full content-start">
      {items.map((item, i) => (
        <RevealItem key={item.name} alternate index={i}>
          <IndustryCard
            name={item.name}
            description={item.description}
            slug={getIndustrySlug(item.name)}
          />
        </RevealItem>
      ))}
    </RevealGroup>
  )
}

export function IndustriesServed() {
  return (
    <section id="industries" className="relative z-10 w-full px-4 md:px-10 py-24">
      <FadeInUp>
        <SectionEyebrow label="Industries" tag="Industries Served" />
        <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02] mb-12">
          Built for your industry.
        </h2>
      </FadeInUp>

      <div className="space-y-14">
        {industryCategories.map((group, gi) => {
          const imageMeta = industryCategoryImages[group.category]
          const imageOnRight = gi % 2 === 1

          return (
            <div key={group.category}>
              {!imageMeta && (
                <FadeInUp delay={Math.min(gi * 0.04, 0.12)}>
                  <h3 className="text-sm md:text-base font-medium uppercase tracking-wider text-brand mb-5">
                    {group.category}
                  </h3>
                </FadeInUp>
              )}

              {imageMeta ? (
                <div className="grid lg:grid-cols-12 gap-5 items-stretch">
                  {!imageOnRight && (
                    <CategoryImagePanel
                      src={imageMeta.src}
                      alt={imageMeta.alt}
                      category={group.category}
                      imageOnRight={false}
                    />
                  )}

                  <div
                    className={`lg:col-span-7 flex flex-col gap-4 ${
                      imageOnRight ? 'order-2 lg:order-1' : ''
                    }`}
                  >
                    <FadeInUp delay={0.04}>
                      <h3 className="text-sm md:text-base font-medium uppercase tracking-wider text-brand lg:hidden">
                        {group.category}
                      </h3>
                    </FadeInUp>
                    <IndustryCardsGrid items={group.items} />
                  </div>

                  {imageOnRight && (
                    <CategoryImagePanel
                      src={imageMeta.src}
                      alt={imageMeta.alt}
                      category={group.category}
                      imageOnRight
                      className="order-1 lg:order-2"
                    />
                  )}
                </div>
              ) : (
                <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.items.map((item, i) => (
                    <RevealItem key={item.name} alternate index={i}>
                      <IndustryCard
                        name={item.name}
                        description={item.description}
                        slug={getIndustrySlug(item.name)}
                      />
                    </RevealItem>
                  ))}
                </RevealGroup>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

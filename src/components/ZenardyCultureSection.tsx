import { motion } from 'motion/react'
import { SectionEyebrow } from './primitives/SectionEyebrow'
import { FadeInUp } from './primitives/FadeInUp'
import { cultureGallery, cultureHero, cultureOffices, culturePillars } from '../data/cultureGallery'
import { publicAsset } from '../lib/publicAsset'
import { slideFromLeft, slideFromRight, viewport } from '../lib/motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { reducedVariants } from '../lib/motion'

function CultureImage({
  src,
  alt,
  objectPosition = 'center 25%',
  className = '',
}: {
  src: string
  alt: string
  objectPosition?: string
  className?: string
}) {
  return (
    <div className={`relative overflow-hidden bg-[#0a0f18] ${className}`}>
      <img
        src={publicAsset(src)}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        style={{ objectPosition }}
        loading="lazy"
      />
    </div>
  )
}

export function ZenardyCultureSection() {
  const reduced = useReducedMotion()

  return (
    <>
      <section id="inside-zenardy" className="relative z-10 w-full px-4 md:px-10 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={reduced ? reducedVariants : slideFromLeft}
          >
            <SectionEyebrow label="Inside Zenardy" tag="Our Story" />
            <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02]">
              {cultureHero.headline}
            </h2>
            {cultureHero.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="mt-5 text-base text-white/60 leading-relaxed">
                {p}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={reduced ? reducedVariants : slideFromRight}
            className="liquid-glass rounded-2xl overflow-hidden reveal-card group"
          >
            <CultureImage
              src={cultureHero.image}
              alt="Zenardy team outing"
              objectPosition="center 35%"
              className="aspect-[5/4] md:aspect-[4/3]"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          {culturePillars.map((pillar) => (
            <div key={pillar.title} className="liquid-glass rounded-xl p-5 h-full">
              <h3 className="text-sm font-semibold text-white">{pillar.title}</h3>
              <p className="mt-2 text-sm text-white/55 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {cultureOffices.map((office) => (
            <div key={office.city} className="liquid-glass rounded-xl overflow-hidden h-full group">
              <CultureImage
                src={office.image}
                alt={office.city}
                objectPosition={office.objectPosition}
                className="aspect-[16/10]"
              />
              <div className="p-4">
                <p className="text-sm font-semibold text-white">{office.city}</p>
                <p className="mt-1 text-xs text-white/50">{office.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="culture" className="relative z-10 w-full px-4 md:px-10 py-20">
        <FadeInUp>
          <SectionEyebrow label="Zenardy Culture" tag="Our Culture" />
          <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight mb-10">
            The Culture We Breathe
          </h2>
        </FadeInUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cultureGallery.map((item, i) => (
            <figure
              key={`${item.image}-${i}`}
              className="group relative liquid-glass rounded-xl overflow-hidden h-full flex flex-col"
            >
              <CultureImage
                src={item.image}
                alt={item.caption}
                objectPosition={item.objectPosition ?? 'center 25%'}
                className="aspect-[5/4] sm:aspect-[4/3] shrink-0"
              />
              <figcaption className="p-4 text-sm text-white/70 leading-snug flex-1">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  )
}

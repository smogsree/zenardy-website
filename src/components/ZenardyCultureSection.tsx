import { motion } from 'motion/react'
import { SectionEyebrow } from './primitives/SectionEyebrow'
import { cultureGallery, cultureHero, cultureOffices, culturePillars } from '../data/cultureGallery'
import { publicAsset } from '../lib/publicAsset'

export function ZenardyCultureSection() {
  return (
    <>
      <section id="inside-zenardy" className="relative z-10 w-full px-4 md:px-10 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
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
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="liquid-glass rounded-2xl overflow-hidden"
          >
            <img
              src={publicAsset(cultureHero.image)}
              alt="Zenardy team outing"
              className="w-full h-64 md:h-80 object-cover"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-12">
          {culturePillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="liquid-glass rounded-xl p-5"
            >
              <h3 className="text-sm font-semibold text-white">{pillar.title}</h3>
              <p className="mt-2 text-sm text-white/55 leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-10">
          {cultureOffices.map((office, i) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="liquid-glass rounded-xl overflow-hidden"
            >
              <img
                src={publicAsset(office.image)}
                alt={office.city}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <p className="text-sm font-semibold text-white">{office.city}</p>
                <p className="mt-1 text-xs text-white/50">{office.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="culture" className="relative z-10 w-full px-4 md:px-10 py-20">
        <SectionEyebrow label="Zenardy Culture" tag="Our Culture" />
        <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight mb-10">
          The Culture We Breathe
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cultureGallery.map((item, i) => (
            <motion.figure
              key={`${item.image}-${i}`}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: (i % 3) * 0.05, duration: 0.45 }}
              className="group relative liquid-glass rounded-xl overflow-hidden"
            >
              <img
                src={publicAsset(item.image)}
                alt={item.caption}
                className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-3 text-xs text-white text-center bg-black/75 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                {item.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>
    </>
  )
}

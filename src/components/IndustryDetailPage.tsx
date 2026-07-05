import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Quote } from 'lucide-react'
import { SectionEyebrow } from './primitives/SectionEyebrow'
import { AppleButton } from './primitives/AppleButton'
import type { IndustryDetail } from '../data/industryDetails'

export function IndustryDetailPage({ industry }: { industry: IndustryDetail }) {
  return (
    <div className="relative z-10">
      <section className="w-full px-4 md:px-10 pt-12 pb-8">
        <Link
          to="/#industries"
          className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Industries
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionEyebrow label="Industries" tag={industry.subtitle} />
          <h1 className="mt-5 text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            {industry.title}
          </h1>
          <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-3xl">
            {industry.description}
          </p>
        </motion.div>
      </section>

      <section className="w-full px-4 md:px-10 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
          Key Features for Our Solution
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {industry.features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="liquid-glass rounded-xl p-5"
            >
              <h3 className="text-base font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm text-white/55 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="w-full px-4 md:px-10 py-12">
        <SectionEyebrow label="Customization" tag="Support & Options" />
        <h2 className="mt-5 text-2xl md:text-3xl font-semibold tracking-tight mb-8">
          Support &amp; Customization Options
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {industry.customization.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="liquid-glass rounded-xl p-5 border-l-2 border-brand-red/60"
            >
              <h3 className="text-sm font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-white/55 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="w-full px-4 md:px-10 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="liquid-glass rounded-2xl p-8">
            <Quote className="w-8 h-8 text-brand-red/70 mb-4" />
            <p className="text-base text-white/75 leading-relaxed italic">
              &ldquo;{industry.testimonial.quote}&rdquo;
            </p>
            <p className="mt-4 text-sm text-white/40">— {industry.testimonial.attribution}</p>
          </div>
          <div className="liquid-glass rounded-2xl p-8 flex flex-col justify-center">
            <p className="text-xs uppercase tracking-wider text-brand mb-2">Case Study</p>
            <p className="text-lg text-white/80 leading-relaxed">{industry.caseStudy}</p>
          </div>
        </div>
      </section>

      <section className="w-full px-4 md:px-10 py-12 pb-24">
        <div className="liquid-glass rounded-2xl p-8 md:flex md:items-center md:justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-wider text-brand mb-2">FAQ</p>
            <h3 className="text-lg font-semibold text-white">{industry.faq.question}</h3>
            <p className="mt-2 text-sm text-white/60">{industry.faq.answer}</p>
          </div>
          <div className="mt-6 md:mt-0 shrink-0">
            <Link to="/#contact">
              <AppleButton label="Contact Us" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

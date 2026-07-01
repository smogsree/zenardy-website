import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Play } from 'lucide-react'
import { SectionEyebrow } from './primitives/SectionEyebrow'
import { AppleButton } from './primitives/AppleButton'
import type { SolutionDetail } from '../data/solutionDetails'

export function SolutionDetailPage({ solution }: { solution: SolutionDetail }) {
  return (
    <div className="relative z-10">
      <section className="w-full px-4 md:px-10 pt-12 pb-8">
        <Link
          to="/#zen-solutions"
          className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Zen IP Solutions
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionEyebrow label="Zen IP Solutions" tag={solution.subtitle} />
          <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02]">
            {solution.title}
          </h1>
        </motion.div>
      </section>

      <section className="w-full px-4 md:px-10 py-12">
        <SectionEyebrow label="Benefits" />
        <h2 className="mt-5 text-2xl md:text-3xl font-semibold tracking-tight mb-8">Benefits</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {solution.benefits.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="liquid-glass rounded-xl p-5"
            >
              <h3 className="text-sm font-semibold text-brand-red">{item.title}</h3>
              <p className="mt-2 text-sm text-white/55 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="w-full px-4 md:px-10 py-12">
        <SectionEyebrow label="Features" />
        <h2 className="mt-5 text-2xl md:text-3xl font-semibold tracking-tight mb-8">Features</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {solution.features.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="liquid-glass rounded-xl p-5 border-l-2 border-brand/50"
            >
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-white/55 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="w-full px-4 md:px-10 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="liquid-glass rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6"
        >
          <div className="w-14 h-14 rounded-full bg-brand-red/20 flex items-center justify-center shrink-0">
            <Play className="w-6 h-6 text-brand-red ml-0.5" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-brand mb-2">Demo Video</p>
            <p className="text-sm text-white/65 leading-relaxed">{solution.demoDescription}</p>
          </div>
        </motion.div>
      </section>

      <section className="w-full px-4 md:px-10 py-12 pb-24">
        <SectionEyebrow label="FAQ" />
        <h2 className="mt-5 text-2xl md:text-3xl font-semibold tracking-tight mb-8">FAQ</h2>
        <div className="space-y-4 mb-10">
          {solution.faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              className="liquid-glass rounded-xl p-5"
            >
              <h3 className="text-sm font-semibold text-white">{faq.question}</h3>
              <p className="mt-2 text-sm text-white/55 leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>

        <div className="liquid-glass rounded-2xl p-8 md:flex md:items-center md:justify-between gap-8">
          <p className="text-lg font-medium text-white/80">{solution.ctaHeadline}</p>
          <Link to="/#contact" className="shrink-0 mt-6 md:mt-0">
            <AppleButton label="Contact Us" />
          </Link>
        </div>
      </section>
    </div>
  )
}

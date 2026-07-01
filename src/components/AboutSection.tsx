import { motion } from 'motion/react'
import { SectionEyebrow } from './primitives/SectionEyebrow'

export function AboutSection() {
  return (
    <section id="about" className="relative z-10 w-full px-4 md:px-10 py-24">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <SectionEyebrow label="About Us" tag="Est. 2018" />
          <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02]">
            We Don&apos;t Just Power Systems.
            <br />
            We Power Possibility.
          </h2>
          <p className="mt-6 text-white/60 text-base leading-[1.6]">
            Zenardy is a leading technology consulting firm specializing in enterprise-grade
            Technology Strategy, Cloud Architecture Simplification, and Digital Transformation
            Enablement. As a trusted Oracle NetSuite partner, we help organizations streamline
            operations, enhance visibility, and scale efficiently on the cloud.
          </p>
          <blockquote className="mt-6 liquid-glass rounded-lg border-l-2 border-brand-red pl-4 py-3 pr-4">
            <p className="text-sm text-white/70 italic leading-relaxed">
              &ldquo;Technology is not just about systems — it&apos;s about empowering people and
              driving change.&rdquo;
            </p>
            <footer className="mt-2 text-xs text-white/40">— Zenardy Leadership Team</footer>
          </blockquote>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="liquid-glass rounded-2xl p-8"
        >
          <h3 className="text-lg font-semibold mb-6">Mission &amp; Vision</h3>
          <div className="space-y-6">
            <motion.div
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              whileInView={{ clipPath: 'inset(0 0 0 0)' }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs uppercase tracking-wider text-brand mb-2">Mission</p>
              <p className="text-sm text-white/70 leading-relaxed">
                To empower organizations with intelligent ERP solutions that streamline
                operations, unify data, and drive measurable business outcomes.
              </p>
            </motion.div>
            <motion.div
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              whileInView={{ clipPath: 'inset(0 0 0 0)' }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xs uppercase tracking-wider text-brand-red mb-2">Vision</p>
              <p className="text-sm text-white/70 leading-relaxed">
                To be the most trusted NetSuite partner globally — where every implementation
                becomes a lasting competitive advantage.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'motion/react'
import { SectionEyebrow } from './primitives/SectionEyebrow'
import { LeadershipTeam } from './LeadershipTeam'
import { CultureTimeline } from './CultureTimeline'
import { ZenardyCultureSection } from './ZenardyCultureSection'
import { aboutPageContent } from '../data/zenardyContent'

export function AboutPageContent() {
  const { hero, missionVision, longForm } = aboutPageContent

  return (
    <>
      <section className="relative z-10 w-full px-4 md:px-10 pt-12 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <SectionEyebrow label={hero.eyebrow} tag="Est. 2018" />
          <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02]">
            {hero.headline}
          </h1>
          {hero.paragraphs.map((p) => (
            <p key={p} className="mt-6 text-white/60 text-base leading-[1.6] max-w-2xl">
              {p}
            </p>
          ))}
          <blockquote className="mt-8 liquid-glass rounded-lg border-l-2 border-brand-red pl-4 py-3 pr-4 max-w-2xl">
            <p className="text-sm text-white/70 italic leading-relaxed">
              &ldquo;{hero.quote}&rdquo;
            </p>
            <footer className="mt-2 text-xs text-white/40">— {hero.attribution}</footer>
          </blockquote>
        </motion.div>
      </section>

      <section className="relative z-10 w-full px-4 md:px-10 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <SectionEyebrow label={missionVision.title} />
            <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight">
              {missionVision.headline}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="liquid-glass rounded-2xl p-8 space-y-6"
          >
            <div>
              <p className="text-xs uppercase tracking-wider text-brand mb-2">Mission</p>
              <p className="text-sm text-white/70 leading-relaxed">{missionVision.mission}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-brand-red mb-2">Vision</p>
              <p className="text-sm text-white/70 leading-relaxed">{missionVision.vision}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <LeadershipTeam />

      <ZenardyCultureSection />

      <CultureTimeline />

      <section className="relative z-10 w-full px-4 md:px-10 py-24">
        <div className="liquid-glass rounded-2xl p-8 md:p-12 space-y-5">
          {longForm.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-sm text-white/55 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    </>
  )
}

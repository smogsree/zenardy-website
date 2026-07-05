import { useState } from 'react'
import { motion } from 'motion/react'
import { Link2 } from 'lucide-react'
import { SectionEyebrow } from './primitives/SectionEyebrow'
import { FadeInUp } from './primitives/FadeInUp'
import { RevealGroup } from './primitives/RevealGroup'
import { RevealItem } from './primitives/RevealItem'
import { TeamAvatar } from './TeamAvatar'
import { team } from '../data/content'
import { teamPhotos } from '../data/teamPhotos'
import { slideFromLeft, slideFromRight, viewport } from '../lib/motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { reducedVariants } from '../lib/motion'

function PersonCard({
  name,
  title,
  image,
  highlight = false,
}: {
  name: string
  title: string
  image?: string
  highlight?: boolean
}) {
  return (
    <div
      className={`liquid-glass rounded-2xl p-5 sm:p-6 w-full max-w-[18rem] mx-auto sm:mx-0 sm:w-72 text-center transition-shadow duration-700 ${
        highlight ? 'shadow-[0_0_32px_rgba(230,57,70,0.15)]' : ''
      }`}
    >
      <div className="mb-4 flex justify-center">
        <TeamAvatar name={name} image={image} size="xl" />
      </div>
      <h3 className="text-sm font-semibold text-white">{name}</h3>
      <p className="text-xs text-white/50 mt-1">{title}</p>
      <a
        href="#"
        className="inline-flex mt-3 text-white/40 hover:text-brand transition-colors"
        aria-label={`${name} on LinkedIn`}
      >
        <Link2 className="w-4 h-4" />
      </a>
    </div>
  )
}

function TeamGrid({
  members,
  columns = 3,
}: {
  members: typeof team
  columns?: 2 | 3 | 4
}) {
  const useCenteredFlex = members.length < columns

  if (useCenteredFlex) {
    return (
      <RevealGroup className="flex flex-wrap justify-center gap-6">
        {members.map((m, i) => (
          <RevealItem key={m.name} index={i} className="w-full max-w-xs sm:w-72">
            <TeamMemberCard name={m.name} title={m.title} image={teamPhotos[m.name]} />
          </RevealItem>
        ))}
      </RevealGroup>
    )
  }

  const gridCols =
    columns === 4
      ? 'grid-cols-2 md:grid-cols-4'
      : columns === 2
        ? 'grid-cols-1 sm:grid-cols-2'
        : 'grid-cols-1 md:grid-cols-3'

  return (
    <RevealGroup className={`grid ${gridCols} gap-6`}>
      {members.map((m, i) => (
        <RevealItem key={m.name} index={i}>
          <TeamMemberCard name={m.name} title={m.title} image={teamPhotos[m.name]} />
        </RevealItem>
      ))}
    </RevealGroup>
  )
}

function TeamMemberCard({
  name,
  title,
  image,
}: {
  name: string
  title: string
  image?: string
}) {
  return (
    <div className="liquid-glass rounded-2xl p-6 text-center flex flex-col items-center reveal-card h-full">
      <div className="mb-3 flex justify-center">
        <TeamAvatar name={name} image={image} size="md" />
      </div>
      <h3 className="text-sm font-semibold">{name}</h3>
      <p className="text-xs text-white/50 mt-1">{title}</p>
      <a href="#" className="inline-flex mt-2 text-white/40 hover:text-brand" aria-label={`${name} LinkedIn`}>
        <Link2 className="w-3.5 h-3.5" />
      </a>
    </div>
  )
}

export function LeadershipTeam() {
  const [handshake, setHandshake] = useState(false)
  const reduced = useReducedMotion()

  const operations = team.filter((m) => m.group === 'operations')
  const capability = team.filter((m) => m.group === 'capability')
  const others = team.filter(
    (m) => m.group === 'leadership' && m.name !== 'Vijay Avadhan' && m.name !== 'Venky Gurunathan',
  )

  return (
    <section id="team" className="relative z-10 w-full px-4 md:px-10 py-24">
      <FadeInUp>
        <SectionEyebrow label="Our Team" tag="3 Offices, 1 Mission" />
        <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02] mb-16">
          The People Behind the Platform.
        </h2>
      </FadeInUp>

      <div className="relative flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10 min-h-0 sm:min-h-[320px] mb-16 sm:mb-20">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-px w-12 md:w-20 bg-gradient-to-r from-brand to-brand-red z-0 pointer-events-none hidden sm:block"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.45, duration: 0.35, ease: 'easeOut' }}
        />

        <motion.div
          className="relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={reduced ? reducedVariants : slideFromLeft}
          onAnimationComplete={() => setHandshake(true)}
        >
          <PersonCard
            name="Vijay Avadhan"
            title="CEO"
            image={teamPhotos['Vijay Avadhan']}
            highlight={handshake}
          />
        </motion.div>

        <motion.div
          className="relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={reduced ? reducedVariants : slideFromRight}
        >
          <PersonCard
            name="Venky Gurunathan"
            title="COO"
            image={teamPhotos['Venky Gurunathan']}
            highlight={handshake}
          />
        </motion.div>
      </div>

      <div className="mb-12">
        <FadeInUp delay={0.05}>
          <h3 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-4">
            Leadership
          </h3>
        </FadeInUp>
        <TeamGrid members={others} columns={4} />
      </div>

      <div className="mb-12">
        <FadeInUp delay={0.05}>
          <h3 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-4">
            Operations
          </h3>
        </FadeInUp>
        <TeamGrid members={operations} columns={3} />
      </div>

      <div>
        <FadeInUp delay={0.05}>
          <h3 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-4">
            Capability
          </h3>
        </FadeInUp>
        <TeamGrid members={capability} columns={3} />
      </div>
    </section>
  )
}

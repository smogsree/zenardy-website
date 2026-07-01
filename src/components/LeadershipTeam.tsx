import { useState } from 'react'
import { motion } from 'motion/react'
import { Link2 } from 'lucide-react'
import { SectionEyebrow } from './primitives/SectionEyebrow'
import { FadeInUp } from './primitives/FadeInUp'
import { TeamAvatar } from './TeamAvatar'
import { team } from '../data/content'
import { teamPhotos } from '../data/teamPhotos'

function PersonCard({
  name,
  title,
  image,
  pulse = false,
}: {
  name: string
  title: string
  image?: string
  pulse?: boolean
}) {
  return (
    <motion.div
      className="liquid-glass rounded-2xl p-6 w-72 text-center"
      animate={
        pulse
          ? {
              boxShadow: [
                '0 0 0 0 rgba(230, 57, 70, 0)',
                '0 0 24px 4px rgba(230, 57, 70, 0.4)',
                '0 0 0 0 rgba(230, 57, 70, 0)',
              ],
            }
          : undefined
      }
      transition={{ duration: 0.6 }}
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
    </motion.div>
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
      <div className="flex flex-wrap justify-center gap-6">
        {members.map((m, i) => (
          <div key={m.name} className="w-full max-w-xs sm:w-72">
            <FlipCard
              name={m.name}
              title={m.title}
              image={teamPhotos[m.name]}
              index={i}
            />
          </div>
        ))}
      </div>
    )
  }

  const gridCols =
    columns === 4
      ? 'grid-cols-2 md:grid-cols-4'
      : columns === 2
        ? 'grid-cols-1 sm:grid-cols-2'
        : 'grid-cols-1 md:grid-cols-3'

  return (
    <div className={`grid ${gridCols} gap-6`}>
      {members.map((m, i) => (
        <FlipCard
          key={m.name}
          name={m.name}
          title={m.title}
          image={teamPhotos[m.name]}
          index={i}
        />
      ))}
    </div>
  )
}

function FlipCard({
  name,
  title,
  image,
  index,
}: {
  name: string
  title: string
  image?: string
  index: number
}) {
  return (
    <motion.div
      initial={{ rotateY: -90, opacity: 0 }}
      whileInView={{ rotateY: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      style={{ transformPerspective: 800 }}
      className="liquid-glass rounded-2xl p-6 text-center flex flex-col items-center"
    >
      <div className="mb-3 flex justify-center">
        <TeamAvatar name={name} image={image} size="md" />
      </div>
      <h3 className="text-sm font-semibold">{name}</h3>
      <p className="text-xs text-white/50 mt-1">{title}</p>
      <a href="#" className="inline-flex mt-2 text-white/40 hover:text-brand" aria-label={`${name} LinkedIn`}>
        <Link2 className="w-3.5 h-3.5" />
      </a>
    </motion.div>
  )
}

export function LeadershipTeam() {
  const [handshake, setHandshake] = useState(false)

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

      <div className="relative flex flex-row items-center justify-center gap-6 md:gap-10 min-h-[320px] mb-20">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-px w-12 md:w-20 bg-gradient-to-r from-brand to-brand-red z-0 pointer-events-none"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.45, duration: 0.35, ease: 'easeOut' }}
        />

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          onAnimationComplete={() => setHandshake(true)}
        >
          <PersonCard
            name="Vijay Avadhan"
            title="CEO"
            image={teamPhotos['Vijay Avadhan']}
            pulse={handshake}
          />
        </motion.div>

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <PersonCard
            name="Venky Gurunathan"
            title="COO"
            image={teamPhotos['Venky Gurunathan']}
            pulse={handshake}
          />
        </motion.div>
      </div>

      <FadeInUp className="mb-12" delay={0.05}>
        <h3 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-4">
          Leadership
        </h3>
        <TeamGrid members={others} columns={4} />
      </FadeInUp>

      <FadeInUp className="mb-12" delay={0.08}>
        <h3 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-4">
          Operations
        </h3>
        <TeamGrid members={operations} columns={3} />
      </FadeInUp>

      <FadeInUp delay={0.1}>
        <h3 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-4">
          Capability
        </h3>
        <TeamGrid members={capability} columns={3} />
      </FadeInUp>
    </section>
  )
}

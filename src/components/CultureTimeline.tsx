import { useRef } from 'react'
import type { MotionValue } from 'motion/react'
import { motion, useScroll, useTransform } from 'motion/react'
import { SectionEyebrow } from './primitives/SectionEyebrow'
import { timeline } from '../data/content'

function TimelineEntry({
  year,
  text,
  index,
  progress,
  total,
}: {
  year: number
  text: string
  index: number
  progress: MotionValue<number>
  total: number
}) {
  const threshold = index / (total - 1)
  const nodeScale = useTransform(progress, [threshold - 0.05, threshold + 0.05], [0, 1])
  const cardX = useTransform(progress, [threshold - 0.05, threshold + 0.05], [
    index % 2 === 0 ? -40 : 40,
    0,
  ])
  const cardOpacity = useTransform(progress, [threshold - 0.05, threshold + 0.05], [0, 1])
  const isCurrent = year === 2025

  return (
    <div
      className={`relative flex items-center gap-6 mb-12 ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      <motion.div
        style={{ x: cardX, opacity: cardOpacity }}
        className={`liquid-glass rounded-xl p-5 flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}
      >
        <p className="text-xs font-semibold text-brand mb-1">{year}</p>
        <p className="text-sm text-white/70 leading-relaxed">{text}</p>
      </motion.div>

      <motion.div
        style={{ scale: nodeScale }}
        className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full z-10 ${
          isCurrent ? 'bg-brand-red' : 'bg-brand'
        }`}
      />

      <div className="hidden md:block flex-1" />
    </div>
  )
}

export function CultureTimeline() {
  const timelineRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.8', 'end 0.3'],
  })

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])
  const strokeDashoffset = useTransform(pathLength, (v) => 1 - v)

  return (
    <section ref={timelineRef} id="story" className="relative z-10 w-full px-4 md:px-10 py-24">
      <SectionEyebrow label="Our Story" tag="Inside Zenardy" />
      <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight mb-16 text-center">
        2018 → 2025
      </h2>

      <div className="relative min-h-[800px]">
        <svg
          className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-4 overflow-visible"
          viewBox="0 0 4 800"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="timelineGradient" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#3D81E3" />
              <stop offset="100%" stopColor="#E63946" />
            </linearGradient>
          </defs>
          <motion.line
            x1="2"
            y1="0"
            x2="2"
            y2="800"
            stroke="url(#timelineGradient)"
            strokeWidth="2"
            style={{
              pathLength,
              strokeDasharray: 1,
              strokeDashoffset,
            }}
          />
        </svg>

        {timeline.map((entry, i) => (
          <TimelineEntry
            key={entry.year}
            year={entry.year}
            text={entry.text}
            index={i}
            progress={scrollYProgress}
            total={timeline.length}
          />
        ))}
      </div>
    </section>
  )
}

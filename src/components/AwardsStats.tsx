import { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, animate } from 'motion/react'
import { awards, stats } from '../data/content'

function Counter({
  value,
  suffix,
  label,
}: {
  value: number
  suffix: string
  label: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const motionVal = useMotionValue(0)
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!isInView) return
    const controls = animate(motionVal, value, {
      duration: 1.2,
      ease: 'easeOut',
      onUpdate: (v) => {
        if (value >= 1000) {
          setDisplay(Math.round(v).toLocaleString())
        } else if (value % 1 !== 0) {
          setDisplay(v.toFixed(1))
        } else {
          setDisplay(String(Math.round(v)))
        }
      },
    })
    return controls.stop
  }, [isInView, motionVal, value])

  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl md:text-4xl font-semibold text-white">
        {display}
        {suffix}
      </p>
      <p className="text-sm text-white/50 mt-1">{label}</p>
    </div>
  )
}

export function AwardsStats() {
  const items = [...awards, ...awards]

  return (
    <section className="relative z-10 w-full px-4 md:px-10 py-20 text-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {stats.map((stat) => (
          <Counter
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
          />
        ))}
      </div>

      <div className="overflow-hidden marquee-fade">
        <div className="flex gap-12 marquee-track-reverse w-max items-center">
          {items.map((award, i) => (
            <span
              key={`${award}-${i}`}
              className="text-xs font-medium text-white/40 whitespace-nowrap px-4 py-2 liquid-glass rounded-full"
            >
              {award}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

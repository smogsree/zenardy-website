import type { Transition, Variants } from 'motion/react'

/** Smooth, premium easing — no bounce */
export const ease = {
  smooth: [0.22, 1, 0.36, 1] as const,
  out: [0.16, 1, 0.3, 1] as const,
}

export const viewport = {
  once: true,
  amount: 0.18,
  margin: '0px 0px -40px 0px',
} as const

export const revealTransition = (delay = 0): Transition => ({
  duration: 0.6,
  delay,
  ease: ease.smooth,
})

/** Soft blur + lift reveal — reads as polished, not jumpy */
export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 14, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: revealTransition(),
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.04,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 12, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: ease.smooth },
  },
}

/** Alternate subtle horizontal drift for grid cards */
export const staggerItemAlt: Variants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: 10,
    x: i % 2 === 0 ? -10 : 10,
    filter: 'blur(4px)',
  }),
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: ease.smooth },
  },
}

export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -24, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: ease.smooth },
  },
}

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 24, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: ease.smooth, delay: 0.08 },
  },
}

export const reducedVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
}

export const accordionSpring: Transition = {
  type: 'spring',
  stiffness: 420,
  damping: 42,
  mass: 0.8,
}

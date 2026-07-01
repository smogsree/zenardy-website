import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { ease, reducedVariants, revealVariants, viewport } from '../../lib/motion'

interface FadeInUpProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function FadeInUp({ children, className = '', delay = 0 }: FadeInUpProps) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={
        reduced
          ? reducedVariants
          : {
              hidden: revealVariants.hidden,
              visible: {
                ...revealVariants.visible,
                transition: { duration: 0.6, delay, ease: ease.smooth },
              },
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  )
}

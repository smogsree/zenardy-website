import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { reducedVariants, staggerContainer, viewport } from '../../lib/motion'

interface RevealGroupProps {
  children: ReactNode
  className?: string
}

export function RevealGroup({ children, className = '' }: RevealGroupProps) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={reduced ? reducedVariants : staggerContainer}
    >
      {children}
    </motion.div>
  )
}

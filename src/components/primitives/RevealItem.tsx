import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { reducedVariants, staggerItem, staggerItemAlt } from '../../lib/motion'

interface RevealItemProps {
  children: ReactNode
  className?: string
  alternate?: boolean
  index?: number
}

export function RevealItem({
  children,
  className = '',
  alternate = false,
  index = 0,
}: RevealItemProps) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      className={`reveal-card ${className}`}
      variants={reduced ? reducedVariants : alternate ? staggerItemAlt : staggerItem}
      custom={alternate ? index : undefined}
    >
      {children}
    </motion.div>
  )
}

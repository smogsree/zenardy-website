import type { ReactNode } from 'react'
import { motion } from 'motion/react'

interface FadeInUpProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}

export function FadeInUp({ children, className = '', delay = 0, y = 20 }: FadeInUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

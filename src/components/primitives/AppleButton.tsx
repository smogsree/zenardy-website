import type { ReactNode } from 'react'
import { ChevronRight } from 'lucide-react'

interface AppleButtonProps {
  label?: string
  full?: boolean
  icon?: ReactNode
  variant?: 'solid' | 'red'
  onClick?: () => void
  type?: 'button' | 'submit'
}

export function AppleButton({
  label = 'Schedule Consultation',
  full,
  icon,
  variant = 'solid',
  onClick,
  type = 'button',
}: AppleButtonProps) {
  const base =
    'group inline-flex items-center justify-center gap-2 rounded-full font-medium text-sm px-5 py-3 transition-all active:scale-[0.98]'

  const variants = {
    solid: 'bg-white text-black hover:bg-white/90',
    red: 'bg-brand-red text-white hover:bg-brand-red/90',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${full ? 'w-full' : ''}`}
    >
      {icon}
      {label}
      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-px" />
    </button>
  )
}

interface GhostButtonProps {
  label: string
  onClick?: () => void
}

export function GhostButton({ label, onClick }: GhostButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-full border border-white/15 text-white text-sm px-5 py-3 hover:border-brand-red/60 hover:text-brand-red transition-colors"
    >
      {label}
    </button>
  )
}

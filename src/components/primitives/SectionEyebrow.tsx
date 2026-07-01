interface SectionEyebrowProps {
  label: string
  tag?: string
}

export function SectionEyebrow({ label, tag }: SectionEyebrowProps) {
  return (
    <div className="flex items-center gap-2 text-sm text-white/70">
      <span className="w-1.5 h-1.5 rounded-full bg-white" />
      <span>{label}</span>
      {tag && (
        <span className="px-2 py-0.5 rounded-full border border-white/10 text-white/50 text-xs">
          {tag}
        </span>
      )}
    </div>
  )
}

interface TeamAvatarProps {
  name: string
  image?: string
  size?: 'md' | 'lg' | 'xl'
}

const sizeClasses = {
  md: { ring: 'w-24 h-24', text: 'text-lg' },
  lg: { ring: 'w-24 h-24', text: 'text-lg' },
  xl: { ring: 'w-32 h-32', text: 'text-2xl' },
}

export function TeamAvatar({ name, image, size = 'lg' }: TeamAvatarProps) {
  const { ring, text } = sizeClasses[size]

  return (
    <div
      className={`${ring} rounded-full bg-gradient-to-br from-brand to-brand-red p-[2px] shrink-0`}
    >
      <div className="w-full h-full rounded-full bg-[#0e1014] overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top"
            draggable={false}
          />
        ) : (
          <div
            className={`w-full h-full flex items-center justify-center font-semibold text-white ${text}`}
          >
            {name.charAt(0)}
          </div>
        )}
      </div>
    </div>
  )
}

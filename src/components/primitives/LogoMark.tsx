import zenardyLogo from '../../assets/Zenardy_logo.png'

interface LogoMarkProps {
  className?: string
}

export function LogoMark({ className = 'h-11 w-auto' }: LogoMarkProps) {
  return (
    <img
      src={zenardyLogo}
      alt="Zenardy"
      className={className}
      draggable={false}
    />
  )
}

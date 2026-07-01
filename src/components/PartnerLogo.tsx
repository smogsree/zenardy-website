export function PartnerLogo({ name, logo }: { name: string; logo: string }) {
  return (
    <img
      src={logo}
      alt={name}
      title={name}
      className="h-8 md:h-9 w-auto object-contain opacity-45 hover:opacity-75 transition-opacity duration-300 shrink-0"
      draggable={false}
    />
  )
}

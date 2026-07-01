import { publicAsset } from '../lib/publicAsset'

export function PartnerLogo({ name, logo }: { name: string; logo: string }) {
  return (
    <img
      src={publicAsset(logo)}
      alt={name}
      title={name}
      className="h-12 md:h-14 lg:h-16 w-auto max-w-[180px] md:max-w-[220px] object-contain opacity-55 hover:opacity-85 transition-opacity duration-300 shrink-0"
      draggable={false}
    />
  )
}

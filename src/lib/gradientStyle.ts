import type { CSSProperties } from 'react'

export const gradientStyle: CSSProperties = {
  backgroundImage:
    'linear-gradient(to right, #091020 0%, #8B1E2A 12.5%, #E63946 30%, #A4F4FD 50%, #00d2ff 67.5%, #091020 87.5%, #091020 100%)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
  filter: 'url(#c3-noise)',
}

import { useEffect, useState } from 'react'
import { useSpring } from 'motion/react'

const MAX_OFFSET = 18

export function useMouseParallax() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      setMouse({ x, y })
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  const orb0x = useSpring(mouse.x * MAX_OFFSET * 0.4, { stiffness: 40, damping: 20 })
  const orb0y = useSpring(mouse.y * MAX_OFFSET * 0.4, { stiffness: 40, damping: 20 })
  const orb1x = useSpring(mouse.x * MAX_OFFSET * 0.6, { stiffness: 40, damping: 20 })
  const orb1y = useSpring(mouse.y * MAX_OFFSET * 0.6, { stiffness: 40, damping: 20 })
  const orb2x = useSpring(mouse.x * MAX_OFFSET * 0.8, { stiffness: 40, damping: 20 })
  const orb2y = useSpring(mouse.y * MAX_OFFSET * 0.8, { stiffness: 40, damping: 20 })
  const orb3x = useSpring(mouse.x * MAX_OFFSET * 1.0, { stiffness: 40, damping: 20 })
  const orb3y = useSpring(mouse.y * MAX_OFFSET * 1.0, { stiffness: 40, damping: 20 })

  return [
    { x: orb0x, y: orb0y },
    { x: orb1x, y: orb1y },
    { x: orb2x, y: orb2y },
    { x: orb3x, y: orb3y },
  ]
}

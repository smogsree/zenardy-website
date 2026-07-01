import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown, Menu } from 'lucide-react'
import { LogoMark } from './primitives/LogoMark'
import {
  industriesMega,
  insideZenardyMega,
  servicesMega,
  zenSolutionsMega,
  type MegaItem,
} from '../data/content'

const megaLinks: { label: string; items: MegaItem[]; hashFallback?: string }[] = [
  { label: 'Services', items: servicesMega, hashFallback: '#services' },
  { label: 'Industries', items: industriesMega },
  { label: 'Zen IP Solutions', items: zenSolutionsMega, hashFallback: '#zen-solutions' },
  { label: 'Inside Zenardy', items: insideZenardyMega },
]

const primaryNavLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
]

export function Navbar() {
  const [openPanel, setOpenPanel] = useState<string | null>(null)
  const location = useLocation()

  const hashLink = (hash: string) => (location.pathname === '/' ? hash : `/${hash}`)

  const megaItemTo = (item: MegaItem, fallback: string) => {
    if (item.to) {
      if (item.to.startsWith('/#')) {
        return location.pathname === '/' ? item.to : item.to
      }
      return item.to
    }
    return hashLink(fallback)
  }

  const isActive = (to: string) => {
    if (to === '/') return location.pathname === '/'
    if (to.startsWith('/#')) return false
    return location.pathname === to
  }

  const navLinkClass = (to: string) =>
    `text-sm font-medium transition-colors ${
      isActive(to) ? 'text-white' : 'text-white/70 hover:text-white'
    }`

  return (
    <div className="relative z-50 w-full px-4 md:px-10 pt-6">
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex items-center gap-6 md:gap-8"
      >
        <Link to="/" aria-label="Zenardy home" className="shrink-0">
          <LogoMark className="h-11 md:h-12 w-auto" />
        </Link>

        <div className="hidden lg:flex flex-wrap items-center gap-6 xl:gap-8">
          {primaryNavLinks.map((link) => (
            <Link key={link.label} to={link.to} className={navLinkClass(link.to)}>
              {link.label}
            </Link>
          ))}

          {megaLinks.map((link) => (
            <div
              key={link.label}
              className="relative group"
              onMouseEnter={() => setOpenPanel(link.label)}
              onMouseLeave={() => setOpenPanel(null)}
            >
              <button
                type="button"
                className="text-white/70 text-sm font-medium hover:text-white transition-colors inline-flex items-center"
              >
                {link.label}
                <ChevronDown className="w-3 h-3 ml-1 inline transition-transform group-hover:rotate-180" />
              </button>

              <AnimatePresence>
                {openPanel === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="absolute top-full left-0 pt-4 w-[480px]"
                  >
                    <div className="liquid-glass rounded-2xl p-4 grid grid-cols-2 gap-2">
                      {link.items.map((item) => (
                        <Link
                          key={item.label}
                          to={megaItemTo(
                            item,
                            link.hashFallback ??
                              `#${link.label.toLowerCase().replace(/\s/g, '-')}`,
                          )}
                          className="flex gap-3 rounded-lg p-3 hover:bg-white/5 transition-colors"
                          onClick={() => setOpenPanel(null)}
                        >
                          <item.icon className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs font-medium text-white">{item.label}</p>
                            <p className="text-[11px] text-white/50 mt-0.5 leading-snug">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <Link to="/#contact" className={navLinkClass('/#contact')}>
            Contact
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden ml-auto w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center"
          aria-label="Open menu"
        >
          <Menu className="w-4 h-4" />
        </button>
      </motion.nav>
    </div>
  )
}

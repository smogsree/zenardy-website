import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown, Menu, X } from 'lucide-react'
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
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
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
    `text-[15px] font-medium transition-colors whitespace-nowrap ${
      isActive(to) ? 'text-white' : 'text-white/70 hover:text-white'
    }`

  const closeMobile = () => {
    setMobileOpen(false)
    setMobileExpanded(null)
  }

  useEffect(() => {
    setOpenPanel(null)
    setMobileOpen(false)
    setMobileExpanded(null)
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <div className="relative z-50 w-full px-4 md:px-10 pt-[max(0.75rem,env(safe-area-inset-top))] sm:pt-6 pb-2">
      <div
        className="nav-header-scrim absolute inset-x-0 top-0 h-28 md:h-32 -z-10 pointer-events-none"
        aria-hidden
      />

      <AnimatePresence>
        {openPanel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/28 backdrop-blur-[1px] pointer-events-none hidden lg:block"
            aria-hidden
          />
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex items-center w-full"
      >
        <Link to="/" aria-label="Zenardy home" className="shrink-0" onClick={closeMobile}>
          <LogoMark className="h-10 sm:h-12 md:h-16 xl:h-[4.5rem] w-auto max-w-[min(52vw,220px)]" />
        </Link>

        <div className="hidden lg:flex flex-1 items-center justify-end gap-6 xl:gap-7 min-w-0 pl-20 xl:pl-28 2xl:pl-36">
          {primaryNavLinks.map((link) => (
            <Link key={link.label} to={link.to} className={navLinkClass(link.to)}>
              {link.label}
            </Link>
          ))}

          {megaLinks.map((link, linkIndex) => (
            <div
              key={link.label}
              className="relative group"
              onMouseEnter={() => setOpenPanel(link.label)}
              onMouseLeave={() => setOpenPanel(null)}
            >
              <button
                type="button"
                className={`text-[15px] font-medium transition-colors inline-flex items-center whitespace-nowrap ${
                  openPanel === link.label ? 'text-white' : 'text-white/70 hover:text-white'
                }`}
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
                    className={`absolute top-full pt-4 w-[480px] z-50 ${
                      linkIndex >= megaLinks.length - 2 ? 'right-0 left-auto' : 'left-0'
                    }`}
                  >
                    <div className="mega-menu-panel rounded-2xl p-4 grid grid-cols-2 gap-2">
                      {link.items.map((item) => (
                        <Link
                          key={item.label}
                          to={megaItemTo(
                            item,
                            link.hashFallback ??
                              `#${link.label.toLowerCase().replace(/\s/g, '-')}`,
                          )}
                          className="relative z-[1] flex gap-3 rounded-lg p-3 hover:bg-white/8 transition-colors"
                          onClick={() => setOpenPanel(null)}
                        >
                          <item.icon className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs font-medium text-white">{item.label}</p>
                            <p className="text-[11px] text-white/65 mt-0.5 leading-snug">
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
          className="lg:hidden ml-auto w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white z-[60]"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => {
            setMobileOpen((open) => !open)
            setMobileExpanded(null)
            setOpenPanel(null)
          }}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm lg:hidden"
              aria-label="Close menu"
              onClick={closeMobile}
            />

            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed left-3 right-3 sm:left-4 sm:right-4 top-[4.25rem] sm:top-[5rem] z-[60] max-h-[calc(100dvh-5.5rem)] overflow-y-auto overscroll-contain rounded-2xl mobile-nav-panel p-3 sm:p-4 lg:hidden"
            >
              <nav className="space-y-1">
                {primaryNavLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={closeMobile}
                    className="block rounded-lg px-4 py-3 min-h-[48px] flex items-center text-base font-medium text-white hover:bg-white/8 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}

                {megaLinks.map((link) => {
                  const expanded = mobileExpanded === link.label
                  return (
                    <div key={link.label} className="rounded-lg overflow-hidden">
                      <button
                        type="button"
                        onClick={() =>
                          setMobileExpanded(expanded ? null : link.label)
                        }
                        className="flex w-full items-center justify-between rounded-lg px-4 py-3 min-h-[48px] text-base font-medium text-white hover:bg-white/8 transition-colors"
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {expanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22 }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-1 pb-2 pl-2">
                              {link.items.map((item) => (
                                <Link
                                  key={item.label}
                                  to={megaItemTo(
                                    item,
                                    link.hashFallback ??
                                      `#${link.label.toLowerCase().replace(/\s/g, '-')}`,
                                  )}
                                  onClick={closeMobile}
                                  className="flex gap-3 rounded-lg px-3 py-2.5 hover:bg-white/8 transition-colors"
                                >
                                  <item.icon className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                                  <div>
                                    <p className="text-sm font-medium text-white">{item.label}</p>
                                    <p className="text-xs text-white/55 mt-0.5 leading-snug">
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
                  )
                })}

                <Link
                  to="/#contact"
                  onClick={closeMobile}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-white hover:bg-white/8 transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { Link2, Globe } from 'lucide-react'
import { LogoMark } from './primitives/LogoMark'

const footerLinks = {
  Services: [
    'NetSuite Services',
    'Integrations',
    'Celigo',
    'Salesforce',
    'Boomi',
    'EPM',
    'Automation',
    'Zen Solutions',
  ],
  Industries: [
    'Food & Beverage',
    'E-commerce',
    'Wholesale',
    'Retail',
    'Manufacturing',
    'Software/High-Tech',
  ],
  Solutions: [
    'Zen Catch Weight',
    'Zen AI Fulfillment',
    'Zen Budgeting',
    'Zen Mobile Printing',
    'Zen Advanced Allocations',
  ],
  Company: [
  { label: 'About', to: '/about' },
  { label: 'Home', to: '/' },
  { label: 'Careers', to: '/#careers' },
    { label: 'Blog', to: '/#blog' },
    { label: 'Contact', to: '/#contact' },
  ],
}

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10">
      <div className="w-full px-4 md:px-10 pt-12 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <LogoMark className="h-9 w-auto" />
            </div>
            <div className="flex gap-3">
              <a href="#" className="text-white/40 hover:text-brand transition-colors" aria-label="LinkedIn">
                <Link2 className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/40 hover:text-brand transition-colors" aria-label="Twitter">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-medium text-white/70 uppercase tracking-wider mb-3">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => {
                  if (typeof link === 'string') {
                    return (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-sm text-white/40 hover:text-white/70 transition-colors"
                        >
                          {link}
                        </a>
                      </li>
                    )
                  }
                  return (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm text-white/40 hover:text-white/70 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-white/40 text-xs max-w-3xl leading-relaxed mb-8">
          Zenardy is a technology consulting firm and trusted Oracle NetSuite Solution Provider
          specializing in ERP implementation, cloud integrations, EPM (NSPB/NSAR/NSAW), and
          proprietary Zen accelerators. We help organizations streamline financial planning,
          unify operational data, and embed AI-driven automation across the enterprise.
        </p>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Zenardy. All rights reserved.</p>
          <p>Tampa · Chennai · Hyderabad</p>
        </div>
      </div>
    </footer>
  )
}

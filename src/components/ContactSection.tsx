import { useState, type FormEvent } from 'react'
import { motion, useSpring } from 'motion/react'
import { ExternalLink, MapPin, Phone } from 'lucide-react'
import { SectionEyebrow } from './primitives/SectionEyebrow'
import { AppleButton } from './primitives/AppleButton'
import { offices } from '../data/offices'

function MagneticButton() {
  const x = useSpring(0, { stiffness: 300, damping: 20 })
  const y = useSpring(0, { stiffness: 300, damping: 20 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const target = e.currentTarget
    const rect = target.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = e.clientX - cx
    const dy = e.clientY - cy
    const dist = Math.sqrt(dx * dx + dy * dy)
    if (dist < 60) {
      const factor = (60 - dist) / 60
      x.set(dx * factor * 0.15)
      y.set(dy * factor * 0.15)
    }
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div style={{ x, y }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <AppleButton label="Send Message" variant="red" full type="submit" />
    </motion.div>
  )
}

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative z-10 w-full px-4 md:px-10 py-24">
      <SectionEyebrow label="Get In Touch" />
      <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02] mb-12">
        Connect With Our Experts Today.
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        <form onSubmit={handleSubmit} className="liquid-glass rounded-2xl p-8 space-y-4">
          {submitted ? (
            <p className="text-sm text-[#A4F4FD] py-8 text-center">
              Thank you — we&apos;ll be in touch within one business day.
            </p>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  placeholder="Full Name"
                  className="rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-brand/40"
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-brand/40"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  placeholder="Phone"
                  className="rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-brand/40"
                />
                <input
                  placeholder="Company Name"
                  className="rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-brand/40"
                />
              </div>
              <select
                required
                defaultValue=""
                className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white/70 focus:outline-none focus:ring-1 focus:ring-brand/40"
              >
                <option value="" disabled>
                  Reason for Contact
                </option>
                <option value="netsuite">NetSuite Implementation</option>
                <option value="integration">Integration Services</option>
                <option value="zen">Zen Solutions</option>
                <option value="support">Support</option>
                <option value="other">Other</option>
              </select>
              <textarea
                required
                rows={4}
                placeholder="Message"
                className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-brand/40 resize-none"
              />
              <MagneticButton />
            </>
          )}
        </form>

        <div className="space-y-4">
          {offices.map((office, i) => (
            <motion.div
              key={office.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="liquid-glass rounded-xl p-5"
            >
              {office.mapsEmbed ? (
                <div className="h-44 sm:h-48 rounded-lg overflow-hidden mb-4 border border-white/10">
                  <iframe
                    src={office.mapsEmbed}
                    title={`${office.name} map`}
                    className="w-full h-full"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              ) : null}
              <h3 className="text-sm font-semibold text-white">{office.name}</h3>
              <p className="text-xs text-white/50 mt-2 flex items-start gap-1.5 leading-relaxed">
                <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                {office.address}
              </p>
              <p className="text-xs text-white/50 mt-2 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 shrink-0" />
                {office.phone}
              </p>
              <a
                href={office.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 text-xs font-medium text-brand hover:text-white transition-colors"
              >
                Open in Google Maps
                <ExternalLink className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

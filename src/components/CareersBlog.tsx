import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { SectionEyebrow } from './primitives/SectionEyebrow'
import { blogPosts, careers } from '../data/content'

export function CareersBlog() {
  return (
    <section className="relative z-10 w-full px-4 md:px-10 py-24 grid md:grid-cols-2 gap-10">
      <div id="careers">
        <SectionEyebrow label="Careers" tag="We're Hiring" />
        <h2 className="mt-5 text-2xl md:text-3xl font-semibold tracking-tight mb-8">
          Join the Team
        </h2>
        <div className="space-y-3">
          {careers.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="liquid-glass rounded-xl p-4 flex items-center justify-between group cursor-pointer hover:border-brand-red/30 border border-transparent transition-colors"
            >
              <div>
                <p className="text-sm font-medium text-white">{role.title}</p>
                <p className="text-xs text-white/40 mt-0.5">{role.location}</p>
              </div>
              <div className="flex items-center gap-2">
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-brand-red"
                />
                <span className="text-xs text-brand-red font-medium">Open</span>
                <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-brand-red transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div id="blog">
        <SectionEyebrow label="From the Blog" />
        <h2 className="mt-5 text-2xl md:text-3xl font-semibold tracking-tight mb-8">
          Insights &amp; Culture
        </h2>
        <div className="space-y-4">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="liquid-glass rounded-xl overflow-hidden group cursor-pointer"
            >
              <div
                className={`h-28 bg-gradient-to-br ${post.gradient} overflow-hidden`}
              >
                <div className="w-full h-full transition-transform duration-[6000ms] ease-out group-hover:scale-[1.08]" />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-white">{post.title}</h3>
                <p className="text-xs text-white/50 mt-1 leading-relaxed">{post.excerpt}</p>
                <p className="text-[11px] text-white/30 mt-2">{post.author}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

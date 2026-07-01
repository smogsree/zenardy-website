import { motion } from 'motion/react'
import { Search } from 'lucide-react'
import { AppleLogo } from './primitives/AppleLogo'

const menuItems = ['File', 'Edit', 'View', 'Go', 'Window', 'Help']

export function MacMenuBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.6 }}
      className="relative z-10 h-10 bg-black/40 backdrop-blur-md border-t border-b border-white/10"
    >
      <div className="w-full px-4 md:px-10 h-full flex items-center justify-between text-xs">
        <div className="flex items-center gap-3">
          <AppleLogo className="w-3.5 h-3.5" />
          <span className="font-bold text-white">ZenAI</span>
          <div className="flex items-center gap-3 text-white/70">
            {menuItems.map((item, index) => (
              <span
                key={item}
                className={`${index > 2 ? 'hidden sm:inline' : ''} ${index > 3 ? 'hidden md:inline' : ''}`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 text-white/70">
          <Search className="w-3.5 h-3.5" />
          <span>Wed May 6 1:09 PM</span>
        </div>
      </div>
    </motion.div>
  )
}

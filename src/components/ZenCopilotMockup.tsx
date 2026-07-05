import { motion } from 'motion/react'
import {
  Bot,
  Bookmark,
  FileText,
  MessageSquare,
  MoreHorizontal,
  Search,
  Settings,
  Sparkles,
  Workflow,
  Zap,
} from 'lucide-react'

const navItems = [
  { icon: MessageSquare, label: 'Conversations', count: 6, active: true },
  { icon: Bookmark, label: 'Saved Queries', count: 12 },
  { icon: FileText, label: 'Reports' },
  { icon: Workflow, label: 'Automations', count: 3 },
  { icon: Settings, label: 'Settings' },
]

const chats = [
  {
    title: 'GL reconciliation help',
    preview: 'Can you match these journal entries to the bank feed?',
    time: '9:41 AM',
    active: true,
    unread: true,
  },
  {
    title: 'PO approval status',
    preview: 'Show pending purchase orders over $10,000...',
    time: '8:12 AM',
    unread: true,
  },
  {
    title: 'Vendor payment batch',
    preview: 'Which vendors are due for payment this week?',
    time: 'Yesterday',
  },
  {
    title: 'Saved search: AR aging',
    preview: 'Run the 90-day AR aging report for Q2...',
    time: 'Yesterday',
  },
  {
    title: 'Customization request',
    preview: 'Add a custom field to the item fulfillment...',
    time: 'Mon',
  },
  {
    title: 'Support ticket #4021',
    preview: 'Integration error with Shopify order sync...',
    time: 'Mon',
  },
]

export function ZenCopilotMockup() {
  return (
    <section className="relative z-10 w-full px-4 md:px-10 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0e1014]/90 backdrop-blur-2xl"
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-black/20">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 text-center text-xs text-white/50">
            ZenAI
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 md:h-[520px]">
          <div className="hidden lg:flex lg:col-span-3 border-b lg:border-b-0 lg:border-r border-white/10 bg-black/30 p-4 flex-col gap-4">
            <button
              type="button"
              className="flex items-center justify-center gap-1.5 rounded-lg bg-white text-black text-xs font-semibold px-3 py-2"
            >
              <Bot className="w-3.5 h-3.5" />
              New Conversation
            </button>

            <nav className="flex flex-col gap-0.5">
              {navItems.map(({ icon: Icon, label, count, active }) => (
                <button
                  key={label}
                  type="button"
                  className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-xs ${
                    active ? 'bg-white/10 text-white' : 'text-white/60 hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="flex-1 text-left">{label}</span>
                  {count !== undefined && (
                    <span className="text-white/40">{count}</span>
                  )}
                </button>
              ))}
            </nav>

            <div className="mt-auto liquid-glass rounded-lg p-3">
              <div className="flex items-center gap-1.5 mb-1">
                <Zap className="w-3 h-3 text-brand" />
                <span className="text-[10px] font-medium text-white">AI Status</span>
              </div>
              <p className="text-[10px] text-white/50">70% fewer support tickets</p>
            </div>
          </div>

          <div className="hidden md:flex md:col-span-4 lg:col-span-4 border-b md:border-b-0 md:border-r border-white/10 flex-col min-h-[220px] md:min-h-0">
            <div className="flex items-center gap-2 px-3 py-2.5 border-b border-white/10 text-white/40">
              <Search className="w-3.5 h-3.5" />
              <span className="text-xs">Search conversations</span>
            </div>
            <div className="flex-1 overflow-hidden">
              {chats.map((chat) => (
                <div
                  key={chat.title}
                  className={`px-3 py-2.5 border-b border-white/5 cursor-default ${
                    chat.active ? 'bg-white/[0.06]' : 'hover:bg-white/[0.03]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-xs truncate ${chat.unread ? 'font-semibold text-white' : 'text-white/70'}`}
                    >
                      {chat.title}
                    </span>
                    <span className="text-[10px] text-white/40 shrink-0">{chat.time}</span>
                  </div>
                  <p className="text-[11px] text-white/40 truncate mt-0.5">{chat.preview}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-1 md:col-span-8 lg:col-span-5 flex flex-col min-h-[360px] sm:min-h-[400px] md:min-h-0">
            <div className="flex items-center gap-1 px-3 py-2 border-b border-white/10">
              <div className="flex items-center gap-2 flex-1">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand to-brand-red flex items-center justify-center">
                  <Bot className="w-3 h-3 text-white" />
                </div>
                <span className="text-xs font-medium text-white">ZenAI</span>
              </div>
              <button
                type="button"
                className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center text-white/60"
              >
                <MoreHorizontal className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <div className="flex justify-end">
                <div className="max-w-[85%] rounded-xl bg-white/10 px-3 py-2 text-xs text-white/80 leading-relaxed">
                  Can you help me reconcile GL account 1200 against last month&apos;s bank
                  statement? I have 14 unmatched journal entries.
                </div>
              </div>

              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand to-brand-red flex items-center justify-center shrink-0">
                  <Bot className="w-3 h-3 text-white" />
                </div>
                <div className="max-w-[85%] space-y-2">
                  <div className="rounded-xl bg-white/[0.06] px-3 py-2 text-xs text-white/70 leading-relaxed">
                    I found 14 unmatched entries in account 1200. 11 can be auto-matched to bank
                    feed transactions from May 2–28. 3 require manual review — two are timing
                    differences and one is a duplicate posting.
                  </div>

                  <div className="liquid-glass rounded-lg p-3">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <Sparkles className="w-3.5 h-3.5" style={{ color: '#A4F4FD' }} />
                      <span className="text-xs font-medium text-white">
                        Summary by ZenAI
                      </span>
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed">
                      11 of 14 entries auto-matched. 2 timing differences ($4,200 and $1,850)
                      will clear next period. 1 duplicate JE #4821 flagged for reversal. No
                      action needed on the remaining items.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

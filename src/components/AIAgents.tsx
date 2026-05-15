import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MessageSquare, Calendar, Search, BarChart3, ChevronDown } from 'lucide-react';

const agents = [
  {
    id: 'voice-receptionist',
    name: 'AI Voice Receptionist',
    tagline: 'Answers every call, day or night',
    icon: Phone,
    color: '#38bdf8',
    bg: 'rgba(56,189,248,0.08)',
    border: 'rgba(56,189,248,0.2)',
    badge: 'Voice AI',
    description:
      'A natural-sounding AI receptionist that answers inbound calls 24/7, qualifies callers, books appointments, and transfers urgent calls to your team — so you never miss a lead.',
    capabilities: [
      'Natural voice conversations with real-time call handling',
      'Qualifies callers and captures lead information',
      'Books appointments directly into your calendar',
      'Transfers urgent or VIP calls to a live team member',
    ],
    stat: '200+ calls / day',
  },
  {
    id: 'sales-chatbot',
    name: 'AI Sales & Support Chatbot',
    tagline: 'Engages website visitors instantly',
    icon: MessageSquare,
    color: '#34d399',
    bg: 'rgba(52,211,153,0.08)',
    border: 'rgba(52,211,153,0.2)',
    badge: 'Chat AI',
    description:
      'An intelligent chatbot that greets visitors, answers FAQs, qualifies leads, and guides prospects to book a call or purchase — all without human intervention.',
    capabilities: [
      'Instant engagement on your website or landing pages',
      'Qualifies leads with dynamic conversational scripts',
      'Answers product and service questions 24/7',
      'Hands off warm leads to your sales team in real time',
    ],
    stat: '< 3s response',
  },
  {
    id: 'email-followup',
    name: 'Email Follow-Up Automation',
    tagline: 'Nurtures leads while you sleep',
    icon: Mail,
    color: '#fbbf24',
    bg: 'rgba(251,191,36,0.08)',
    border: 'rgba(251,191,36,0.2)',
    badge: 'Email AI',
    description:
      'Automated email sequences that nurture cold leads, re-engage past customers, and send personalized follow-ups — keeping your pipeline active without manual effort.',
    capabilities: [
      'Personalized drip sequences based on lead behavior',
      'Smart send-time optimization for maximum opens',
      'Auto-pause on reply or unsubscribe',
      'Integrates with your CRM and email provider',
    ],
    stat: '300+ emails / day',
  },
  {
    id: 'appointment-booking',
    name: 'Appointment Booking Agent',
    tagline: 'Fills your calendar automatically',
    icon: Calendar,
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.08)',
    border: 'rgba(167,139,250,0.2)',
    badge: 'Booking AI',
    description:
      'Coordinates scheduling across phone, chat, and SMS. Sends confirmations, handles reschedules, and reduces no-shows with automated reminders.',
    capabilities: [
      'Syncs with Google Calendar, Calendly, or Cal.com',
      'Sends confirmation & reminder sequences automatically',
      'Re-books no-shows within 24 hours',
      'Works across voice, chat, and SMS channels',
    ],
    stat: '40+ bookings / day',
  },
  {
    id: 'lead-qualifier',
    name: 'Lead Qualification System',
    tagline: 'Scores and routes every inbound lead',
    icon: Search,
    color: '#fb923c',
    bg: 'rgba(251,146,60,0.08)',
    border: 'rgba(251,146,60,0.2)',
    badge: 'Qualification AI',
    description:
      'Responds to every inbound inquiry instantly, asks qualifying questions, scores fit, and routes high-value leads to your team — no manual triage needed.',
    capabilities: [
      'Sub-60-second response to every inquiry',
      'Dynamic qualification scripts tailored to your business',
      'Lead scoring with automatic CRM tagging',
      'Routes hot leads to sales, warm to nurture, cold to archive',
    ],
    stat: '< 60s response',
  },
  {
    id: 'crm-integration',
    name: 'CRM & Workflow Automation',
    tagline: 'Connects everything into one system',
    icon: BarChart3,
    color: '#22d3ee',
    bg: 'rgba(34,211,238,0.08)',
    border: 'rgba(34,211,238,0.2)',
    badge: 'Integration AI',
    description:
      'Connects your AI agents to GoHighLevel, HubSpot, Salesforce, or any CRM. Syncs contacts, updates pipelines, and delivers analytics — so nothing falls through the cracks.',
    capabilities: [
      'Two-way CRM sync with GoHighLevel, HubSpot & more',
      'Automatic pipeline updates after every interaction',
      'Weekly performance reports delivered to your inbox',
      'Custom webhook integrations for any workflow',
    ],
    stat: 'Real-time sync',
  },
];

function AgentCard({ agent, i, inView }: { agent: typeof agents[0]; i: number; inView: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = agent.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.07, duration: 0.55, ease: 'easeOut' }}
      className="rounded-2xl overflow-hidden flex flex-col transition-all duration-300"
      style={{
        background: '#0a1628',
        border: `1px solid ${expanded ? agent.border : 'rgba(255,255,255,0.07)'}`,
      }}
    >
      {/* Top bar */}
      <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${agent.color}99 0%, ${agent.color}15 100%)` }} />

      <div className="p-6">
        {/* Icon + badge row */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: agent.bg, border: `1px solid ${agent.border}` }}
          >
            <Icon size={20} style={{ color: agent.color }} />
          </div>
          <div className="flex items-center gap-2">
            <span
              className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
              style={{ background: agent.bg, color: agent.color, border: `1px solid ${agent.border}` }}
            >
              {agent.badge}
            </span>
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{ background: 'rgba(52,211,153,0.1)', color: '#34d399', border: '1px solid rgba(52,211,153,0.2)' }}
            >
              {agent.stat}
            </span>
          </div>
        </div>

        <h3 className="text-white font-bold text-lg leading-tight mb-1">{agent.name}</h3>
        <p className="text-slate-400 text-sm mb-4">{agent.tagline}</p>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200"
          style={{ color: agent.color }}
        >
          {expanded ? 'Hide details' : 'See capabilities'}
          <ChevronDown
            size={14}
            className="transition-transform duration-300"
            style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
          />
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-slate-300 text-sm leading-relaxed mt-4 mb-4">{agent.description}</p>
              <ul className="flex flex-col gap-2">
                {agent.capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-2.5 text-xs text-slate-400 leading-snug">
                    <span
                      className="mt-1 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: agent.color }}
                    />
                    {cap}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function AIAgents() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="agents" className="py-28 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-sky-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-4">Your AI Team</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Six agents already deployed.<br />
            <span className="text-gradient">Yours are custom-built.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Every agent is trained on your business, your ICP, and your offer — then deployed into your existing stack within 48 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {agents.map((agent, i) => (
            <AgentCard key={agent.id} agent={agent} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

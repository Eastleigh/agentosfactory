import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MessageSquare, Calendar, Search, BarChart3, ChevronDown } from 'lucide-react';

const agents = [
  {
    id: 'cold-caller',
    name: 'Cold Caller',
    tagline: 'Dials your prospect list 24/7',
    icon: Phone,
    color: '#38bdf8',
    bg: 'rgba(56,189,248,0.08)',
    border: 'rgba(56,189,248,0.2)',
    badge: 'Voice AI',
    description:
      'Makes outbound calls using a natural-sounding AI voice. Handles objections, qualifies interest, and routes hot prospects directly to your calendar — automatically.',
    capabilities: [
      'Natural voice conversation with dynamic objection handling',
      'Instant warm-transfer to your closer when interest spikes',
      'Full call transcript + sentiment score after every call',
      'Integrates with GoHighLevel, HubSpot, or any CRM',
    ],
    stat: '37 calls / day',
  },
  {
    id: 'email-outreach',
    name: 'Email Outreach Rep',
    tagline: 'Personalized at scale — never spammy',
    icon: Mail,
    color: '#fbbf24',
    bg: 'rgba(251,191,36,0.08)',
    border: 'rgba(251,191,36,0.2)',
    badge: 'Email AI',
    description:
      'Researches each prospect, writes a personalized first-line, and sends hyper-targeted sequences that feel 1:1. Stops automatically the moment someone replies.',
    capabilities: [
      'AI-personalized first lines using LinkedIn + website data',
      'Multi-step sequences with smart send-time optimization',
      'Auto-pause on reply, bounce, or unsubscribe',
      'A/B tests subject lines and CTAs continuously',
    ],
    stat: '200 emails / day',
  },
  {
    id: 'sms-followup',
    name: 'SMS Follow-Up Specialist',
    tagline: 'Re-engages cold and dormant leads',
    icon: MessageSquare,
    color: '#34d399',
    bg: 'rgba(52,211,153,0.08)',
    border: 'rgba(52,211,153,0.2)',
    badge: 'SMS AI',
    description:
      'Sends conversational SMS follow-ups that feel human. Recovers dead leads, confirms appointments, and nudges warm prospects back into the pipeline.',
    capabilities: [
      'Two-way SMS conversations with AI reply detection',
      'Appointment reminders and no-show recovery sequences',
      'Dormant lead reactivation campaigns',
      'TCPA-compliant opt-out handling built in',
    ],
    stat: '150 texts / day',
  },
  {
    id: 'appointment-setter',
    name: 'Appointment Setter',
    tagline: 'Books the meeting — you just show up',
    icon: Calendar,
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.08)',
    border: 'rgba(167,139,250,0.2)',
    badge: 'Booking AI',
    description:
      'Coordinates scheduling across channels, sends calendar invites, handles reschedules, and makes sure prospects show up prepared to buy.',
    capabilities: [
      'Syncs with Google Calendar, Calendly, or Cal.com',
      'Sends pre-call confirmation and reminder sequences',
      'Re-books no-shows automatically within 24 hours',
      'Delivers prospect briefing notes before every call',
    ],
    stat: '12 bookings / day',
  },
  {
    id: 'lead-qualifier',
    name: 'Lead Qualifier',
    tagline: 'Scores and routes every inbound lead',
    icon: Search,
    color: '#fb923c',
    bg: 'rgba(251,146,60,0.08)',
    border: 'rgba(251,146,60,0.2)',
    badge: 'Qualification AI',
    description:
      'Responds to every inbound inquiry within 60 seconds, asks qualifying questions, scores fit, and routes high-value leads to your closer immediately.',
    capabilities: [
      'Sub-60-second response to every web form and inbound call',
      'Dynamic qualification scripts tailored to your ICP',
      'Lead scoring with automatic CRM tagging',
      'Routes hot leads to live rep, warm to nurture, cold to disqualify',
    ],
    stat: '< 60s response',
  },
  {
    id: 'pipeline-analyst',
    name: 'Pipeline Analyst',
    tagline: 'Spots revenue leaks before they cost you',
    icon: BarChart3,
    color: '#22d3ee',
    bg: 'rgba(34,211,238,0.08)',
    border: 'rgba(34,211,238,0.2)',
    badge: 'Analytics AI',
    description:
      'Monitors your pipeline health, flags stalled deals, surfaces at-risk accounts, and sends weekly performance reports to keep your team accountable.',
    capabilities: [
      'Daily pipeline health digest delivered to Slack or email',
      'Stalled deal alerts with suggested re-engagement actions',
      'Conversion rate tracking across every funnel stage',
      'Monthly ROI report benchmarked against your goals',
    ],
    stat: 'Daily insights',
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

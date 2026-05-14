import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Phone, Mail, MessageSquare, BarChart3, Calendar, ChevronRight } from 'lucide-react';

const tabs = [
  { id: 'dashboard', label: 'Pipeline Dashboard', icon: BarChart3 },
  { id: 'sms', label: 'SMS Sequences', icon: MessageSquare },
  { id: 'call', label: 'AI Call Summary', icon: Phone },
  { id: 'email', label: 'Email Sequences', icon: Mail },
  { id: 'calendar', label: 'Appointment Booking', icon: Calendar },
];

function DashboardMockup() {
  const leads = [
    { name: 'Marcus Rivera', company: 'Apex HVAC', status: 'Booked', score: 92 },
    { name: 'Sarah Chen', company: 'Precision Roofing', status: 'Calling', score: 78 },
    { name: 'James Okafor', company: 'Elite Plumbing', status: 'Following Up', score: 65 },
    { name: 'Dana Mills', company: 'SunPeak Solar', status: 'Qualified', score: 88 },
    { name: 'Tom Hartley', company: 'Keystone Insulation', status: 'Prospecting', score: 51 },
  ];
  const statusColor: Record<string, string> = {
    Booked: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    Calling: 'bg-sky-500/20 text-sky-400 border-sky-500/30',
    'Following Up': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    Qualified: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    Prospecting: 'bg-slate-500/20 text-slate-400 border-slate-500/30',
  };
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: '#0c1422', border: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="px-5 py-4 border-b border-white/8 flex items-center justify-between">
        <div>
          <p className="text-white font-semibold text-sm">Pipeline Overview</p>
          <p className="text-slate-500 text-xs mt-0.5">Last 30 days · Full workforce active</p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="text-center">
            <p className="text-white font-bold text-lg">148</p>
            <p className="text-slate-500">Leads found</p>
          </div>
          <div className="text-center">
            <p className="text-white font-bold text-lg">37</p>
            <p className="text-slate-500">Calls made</p>
          </div>
          <div className="text-center">
            <p className="text-emerald-400 font-bold text-lg">12</p>
            <p className="text-slate-500">Booked</p>
          </div>
        </div>
      </div>
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b border-white/5">
            <th className="text-left text-slate-500 font-medium px-5 py-3">Contact</th>
            <th className="text-left text-slate-500 font-medium px-3 py-3">Status</th>
            <th className="text-right text-slate-500 font-medium px-5 py-3">Score</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((l) => (
            <tr key={l.name} className="border-b border-white/5 hover:bg-white/3 transition-colors">
              <td className="px-5 py-3">
                <p className="text-white font-medium">{l.name}</p>
                <p className="text-slate-500">{l.company}</p>
              </td>
              <td className="px-3 py-3">
                <span className={`px-2 py-0.5 rounded-full border text-xs font-medium ${statusColor[l.status]}`}>
                  {l.status}
                </span>
              </td>
              <td className="px-5 py-3 text-right">
                <div className="flex items-center justify-end gap-2">
                  <div className="w-16 h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full rounded-full bg-sky-400" style={{ width: `${l.score}%` }} />
                  </div>
                  <span className="text-slate-300 font-mono">{l.score}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SmsMockup() {
  const msgs = [
    { from: 'ai', text: "Hi Marcus, this is Alex — we help HVAC companies book more service calls without hiring extra staff. Do you have 15 mins this week?", time: '9:02 AM' },
    { from: 'lead', text: "How does that work exactly?", time: '9:14 AM' },
    { from: 'ai', text: "We deploy a dedicated appointment-setting team that calls, texts, and follows up with leads 24/7 — books jobs directly on your calendar. Would Tuesday at 2pm work for a quick call?", time: '9:15 AM' },
    { from: 'lead', text: "Yeah Tuesday works. Send me the link.", time: '9:18 AM' },
    { from: 'ai', text: "Perfect! Here's your booking link — see you Tuesday at 2pm!", time: '9:18 AM' },
  ];
  return (
    <div className="rounded-xl overflow-hidden max-w-sm mx-auto" style={{ background: '#0c1422', border: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="px-4 py-3 border-b border-white/8 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center">
          <MessageSquare size={14} className="text-sky-400" />
        </div>
        <div>
          <p className="text-white text-sm font-semibold">Marcus Rivera</p>
          <p className="text-slate-500 text-xs">Follow-up sequence · Step 1 of 5</p>
        </div>
        <span className="ml-auto px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-medium border border-emerald-500/30">Replied</span>
      </div>
      <div className="p-4 flex flex-col gap-3 min-h-[240px]">
        {msgs.map((m, i) => (
          <div key={i} className={`flex ${m.from === 'ai' ? 'justify-start' : 'justify-end'}`}>
            <div className={`max-w-[80%] px-3 py-2 rounded-xl text-xs leading-relaxed ${
              m.from === 'ai' ? 'bg-white/8 text-slate-300 rounded-tl-sm' : 'bg-sky-500/20 text-sky-200 rounded-tr-sm border border-sky-500/20'
            }`}>
              {m.text}
              <p className="text-slate-600 text-[10px] mt-1 text-right">{m.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CallMockup() {
  const points = [
    'Prospect confirmed pain point: current team misses 40% of inbound calls',
    'Showed interest in automated follow-up sequences',
    'Budget range confirmed: $1,000–$3,000/month',
    'Decision maker confirmed — no other stakeholders needed',
    'Objection raised: "We tried chatbots before" — handled with case study',
    'Meeting booked: Tuesday March 18 at 2:00 PM EST',
  ];
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: '#0c1422', border: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="px-5 py-4 border-b border-white/8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-emerald-500/20 flex items-center justify-center">
            <Phone size={15} className="text-emerald-400" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm">Call Summary — Sarah Chen</p>
            <p className="text-slate-500 text-xs">Precision Roofing · Mar 14, 10:32 AM · 8m 14s</p>
          </div>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold border border-emerald-500/30">Booked</span>
      </div>
      <div className="px-5 py-4">
        <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-3">Key Insights</p>
        <ul className="flex flex-col gap-2.5">
          {points.map((p, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 shrink-0" />
              <span className="text-slate-300 text-xs leading-relaxed">{p}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 pt-4 border-t border-white/8 flex items-center justify-between">
          <div>
            <p className="text-slate-500 text-xs">Recommended next step</p>
            <p className="text-sky-400 text-sm font-medium mt-0.5">Send proposal before Tuesday call</p>
          </div>
          <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-sky-500/20 text-sky-400 text-xs font-medium border border-sky-500/30 hover:bg-sky-500/30 transition-colors">
            View transcript <ChevronRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}

function EmailMockup() {
  const steps = [
    { step: 1, subject: 'Quick question about your roofing pipeline', sent: 'Mar 11 · 9:00 AM', status: 'Opened', opens: 1 },
    { step: 2, subject: 'How Apex HVAC booked 23 jobs in 30 days', sent: 'Mar 13 · 10:15 AM', status: 'Clicked', opens: 3 },
    { step: 3, subject: 'Still thinking it over? Here\'s what clients say', sent: 'Mar 16 · 9:00 AM', status: 'Pending', opens: 0 },
    { step: 4, subject: 'Last touch — worth 15 minutes?', sent: 'Mar 19 · 9:00 AM', status: 'Scheduled', opens: 0 },
  ];
  const color: Record<string, string> = {
    Opened: 'text-emerald-400',
    Clicked: 'text-sky-400',
    Pending: 'text-amber-400',
    Scheduled: 'text-slate-400',
  };
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: '#0c1422', border: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="px-5 py-4 border-b border-white/8">
        <p className="text-white font-semibold text-sm">Email Sequence — Roofing Outreach v2</p>
        <p className="text-slate-500 text-xs mt-0.5">4 steps · 847 contacts enrolled · 38% open rate</p>
      </div>
      <div className="p-4 flex flex-col gap-3">
        {steps.map((s) => (
          <div key={s.step} className="flex items-center gap-4 px-4 py-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="w-7 h-7 rounded-full bg-white/8 flex items-center justify-center shrink-0">
              <span className="text-slate-400 text-xs font-bold">{s.step}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-xs font-medium truncate">{s.subject}</p>
              <p className="text-slate-500 text-xs mt-0.5">{s.sent}</p>
            </div>
            <div className="text-right shrink-0">
              <p className={`text-xs font-semibold ${color[s.status]}`}>{s.status}</p>
              {s.opens > 0 && <p className="text-slate-500 text-xs">{s.opens}x opened</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CalendarMockup() {
  const appointments = [
    { time: '9:00 AM', name: 'James Okafor', co: 'Elite Plumbing', type: 'Strategy Call', duration: '30 min' },
    { time: '11:00 AM', name: 'Dana Mills', co: 'SunPeak Solar', type: 'Demo Call', duration: '45 min' },
    { time: '2:00 PM', name: 'Sarah Chen', co: 'Precision Roofing', type: 'Intro Call', duration: '30 min' },
    { time: '4:30 PM', name: 'Tom Hartley', co: 'Keystone Insulation', type: 'Strategy Call', duration: '30 min' },
  ];
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: '#0c1422', border: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="px-5 py-4 border-b border-white/8 flex items-center justify-between">
        <div>
          <p className="text-white font-semibold text-sm">Tuesday, March 18</p>
          <p className="text-slate-500 text-xs mt-0.5">4 appointments set by your team</p>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-semibold border border-sky-500/30">All confirmed</span>
      </div>
      <div className="p-4 flex flex-col gap-3">
        {appointments.map((a) => (
          <div key={a.time} className="flex items-center gap-4 px-4 py-3 rounded-xl border-l-2 border-sky-500/60" style={{ background: 'rgba(14, 165, 233, 0.05)', border: '1px solid rgba(255,255,255,0.06)', borderLeft: '2px solid rgba(14,165,233,0.6)' }}>
            <div className="shrink-0 text-right w-16">
              <p className="text-sky-400 font-bold text-xs">{a.time}</p>
              <p className="text-slate-500 text-xs">{a.duration}</p>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-xs font-semibold">{a.name}</p>
              <p className="text-slate-400 text-xs">{a.co}</p>
            </div>
            <span className="shrink-0 px-2 py-0.5 rounded-md bg-white/5 text-slate-300 text-xs border border-white/8">{a.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const mockups: Record<string, React.ReactNode> = {
  dashboard: <DashboardMockup />,
  sms: <SmsMockup />,
  call: <CallMockup />,
  email: <EmailMockup />,
  calendar: <CalendarMockup />,
};

export default function ProductScreenshots() {
  const [active, setActive] = useState('dashboard');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-28 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-sky-600/6 rounded-full blur-[120px] -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-4">The Platform</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            See your revenue workforce in action
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Every touchpoint is tracked, summarized, and optimized — from the first outreach to the booked call.
          </p>
        </motion.div>

        {/* Tab bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active === tab.id
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
                    : 'glass text-slate-400 hover:text-white'
                }`}
              >
                <Icon size={14} />
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* Mockup display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {mockups[active]}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

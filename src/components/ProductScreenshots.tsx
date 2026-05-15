import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Phone, Mail, MessageSquare, BarChart3, Calendar, ChevronRight } from 'lucide-react';

const tabs = [
  { id: 'dashboard', label: 'Lead Dashboard', icon: BarChart3 },
  { id: 'sms', label: 'SMS Follow-Up', icon: MessageSquare },
  { id: 'call', label: 'AI Call Summary', icon: Phone },
  { id: 'email', label: 'Email Automation', icon: Mail },
  { id: 'calendar', label: 'Appointment Booking', icon: Calendar },
];

function DashboardMockup() {
  const leads = [
    { name: 'Marcus Rivera', company: 'Summit HVAC', status: 'Booked', score: 92 },
    { name: 'Sarah Chen', company: 'Brighter Dental', status: 'Calling', score: 78 },
    { name: 'James Okafor', company: 'Apex Roofing', status: 'Following Up', score: 65 },
    { name: 'Dana Mills', company: 'Glow Med Spa', status: 'Qualified', score: 88 },
    { name: 'Tom Hartley', company: 'Weston Law Group', status: 'Prospecting', score: 51 },
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
          <p className="text-slate-500 text-xs mt-0.5">Last 30 days · All AI agents active</p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="text-center">
            <p className="text-white font-bold text-lg">214</p>
            <p className="text-slate-500">Calls answered</p>
          </div>
          <div className="text-center">
            <p className="text-white font-bold text-lg">127</p>
            <p className="text-slate-500">Leads captured</p>
          </div>
          <div className="text-center">
            <p className="text-emerald-400 font-bold text-lg">43</p>
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
    { from: 'ai', text: "Hi Marcus! Thanks for requesting a quote. I'd love to get you scheduled with our team. Does Tuesday at 2pm work?", time: '9:02 AM' },
    { from: 'lead', text: "How long does the appointment take?", time: '9:14 AM' },
    { from: 'ai', text: "Just 30 minutes! We'll go over your needs and provide a same-day estimate. I'll send a calendar invite right now.", time: '9:15 AM' },
    { from: 'lead', text: "Yeah Tuesday works. Send me the link.", time: '9:18 AM' },
    { from: 'ai', text: "Done! Calendar invite sent. See you Tuesday at 2pm, Marcus!", time: '9:18 AM' },
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
    'Caller requested an emergency plumbing repair estimate',
    'AI captured property address, issue details, and availability',
    'Urgency confirmed: water leak in kitchen — same-day service needed',
    'Customer confirmed budget range for emergency repairs',
    'Appointment booked: Today at 3:00 PM — tech dispatched',
    'Follow-up reminder sent via SMS with technician details',
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
            <p className="text-slate-500 text-xs">Brighter Dental · Mar 14, 10:32 AM · 4m 22s</p>
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
            <p className="text-sky-400 text-sm font-medium mt-0.5">Dispatch technician for 3 PM appointment</p>
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
    { step: 1, subject: 'Thanks for your inquiry — here\'s what to expect', sent: 'Mar 11 · 9:00 AM', status: 'Opened', opens: 1 },
    { step: 2, subject: 'Your appointment is coming up — quick reminder', sent: 'Mar 13 · 10:15 AM', status: 'Clicked', opens: 3 },
    { step: 3, subject: 'How was your experience? We\'d love feedback', sent: 'Mar 16 · 9:00 AM', status: 'Pending', opens: 0 },
    { step: 4, subject: 'Time for your next checkup?', sent: 'Mar 19 · 9:00 AM', status: 'Scheduled', opens: 0 },
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
        <p className="text-white font-semibold text-sm">Email Sequence — Patient Follow-Up</p>
        <p className="text-slate-500 text-xs mt-0.5">4 steps · 312 patients enrolled · 42% open rate</p>
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
    { time: '9:00 AM', name: 'James Okafor', co: 'Apex Roofing', type: 'Estimate Visit', duration: '30 min' },
    { time: '11:00 AM', name: 'Dana Mills', co: 'Glow Med Spa', type: 'Consultation', duration: '45 min' },
    { time: '2:00 PM', name: 'Sarah Chen', co: 'Brighter Dental', type: 'New Patient', duration: '30 min' },
    { time: '4:30 PM', name: 'Tom Hartley', co: 'Weston Law Group', type: 'Intake Call', duration: '30 min' },
  ];
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: '#0c1422', border: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="px-5 py-4 border-b border-white/8 flex items-center justify-between">
        <div>
          <p className="text-white font-semibold text-sm">Tuesday, March 18</p>
          <p className="text-slate-500 text-xs mt-0.5">4 appointments booked by AI</p>
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
            See your AI automation in action
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Every call, chat, and follow-up is tracked, summarized, and optimized — so nothing slips through the cracks.
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

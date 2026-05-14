import { useEffect, useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ArrowRight, Zap, Phone, Mail, MessageSquare, Calendar, Check } from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: 'easeOut' as const },
  }),
};

function useCounter(target: number, duration = 1800, startDelay = 800) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let rafId: number;
    const timeout = setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(ease * target));
        if (progress < 1) rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    }, startDelay);
    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(rafId);
    };
  }, [target, duration, startDelay]);
  return value;
}

const LOG_ENTRIES = [
  { icon: Phone, text: 'Called 9 warm leads — 3 appointments booked', color: '#38bdf8' },
  { icon: Mail, text: 'Drafted 18 personalized outreach emails', color: '#fbbf24' },
  { icon: MessageSquare, text: 'Sent 11 follow-up SMS sequences to cold leads', color: '#34d399' },
  { icon: Calendar, text: 'Booked Marcus Rivera — Tuesday 2:00 PM confirmed', color: '#34d399' },
  { icon: Phone, text: 'Qualified 7 inbound inquiries from the website', color: '#38bdf8' },
  { icon: Mail, text: 'Synced 23 new contacts to CRM — pipeline updated', color: '#fbbf24' },
];

const statCards = [
  { label: 'Leads found', target: 148, color: '#38bdf8', bgColor: 'rgba(56,189,248,0.08)', borderColor: 'rgba(56,189,248,0.18)' },
  { label: 'Emails drafted', target: 96, color: '#fbbf24', bgColor: 'rgba(251,191,36,0.08)', borderColor: 'rgba(251,191,36,0.18)' },
  { label: 'Calls completed', target: 37, color: '#a78bfa', bgColor: 'rgba(167,139,250,0.08)', borderColor: 'rgba(167,139,250,0.18)' },
  { label: 'Meetings booked', target: 12, color: '#34d399', bgColor: 'rgba(52,211,153,0.08)', borderColor: 'rgba(52,211,153,0.2)' },
];

const WHAT_IT_DOES = [
  'Finds and enriches leads automatically',
  'Writes personalized outreach at scale',
  'Follows up via phone, email, and SMS',
  'Qualifies prospects without human effort',
  'Books meetings directly into your calendar',
  'Works 24/7 — never calls in sick',
];

function AgentDashboard() {
  const count0 = useCounter(statCards[0].target, 1600, 900);
  const count1 = useCounter(statCards[1].target, 1600, 1050);
  const count2 = useCounter(statCards[2].target, 1400, 1200);
  const count3 = useCounter(statCards[3].target, 1200, 1350);
  const counts = [count0, count1, count2, count3];

  const [visibleLogs, setVisibleLogs] = useState<number[]>([]);

  useEffect(() => {
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    setVisibleLogs([]);
    const show = () => {
      if (i >= LOG_ENTRIES.length) return;
      const idx = i;
      setVisibleLogs((prev) => (prev.includes(idx) ? prev : [...prev, idx]));
      i++;
      if (i < LOG_ENTRIES.length) timer = setTimeout(show, 620);
    };
    const t = setTimeout(show, 1800);
    return () => {
      clearTimeout(t);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className="rounded-2xl overflow-hidden w-full max-w-lg mx-auto lg:mx-0"
      style={{ background: '#0a1628', border: '1px solid rgba(255,255,255,0.08)' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/8">
        <div>
          <p className="text-slate-500 text-xs font-medium">Revenue Workforce</p>
          <h3 className="text-white text-sm font-bold mt-0.5">AI Agents Active — Live Dashboard</h3>
        </div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Live Now
        </span>
      </div>

      {/* Stat grid */}
      <div className="grid grid-cols-2 gap-2.5 p-4">
        {statCards.map((s, i) => (
          <div
            key={s.label}
            className="rounded-xl px-4 py-3.5 flex flex-col gap-1"
            style={{ background: s.bgColor, border: `1px solid ${s.borderColor}` }}
          >
            <p className="text-xs font-medium" style={{ color: s.color, opacity: 0.8 }}>{s.label}</p>
            <p
              className="text-3xl font-black font-mono tabular-nums leading-none"
              style={{ color: s.color }}
            >
              {counts[i]}
            </p>
          </div>
        ))}
      </div>

      {/* Live work log */}
      <div
        className="mx-4 mb-4 rounded-xl p-4"
        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', minHeight: 164 }}
      >
        <div className="flex items-center justify-between mb-3">
          <p className="text-white text-xs font-semibold">Today's Work Log</p>
          <span className="text-slate-500 text-[10px] font-medium uppercase tracking-widest">Live</span>
        </div>
        <ul className="flex flex-col gap-2">
          <AnimatePresence>
            {visibleLogs.map((idx) => {
              const entry = LOG_ENTRIES[idx];
              if (!entry) return null;
              const Icon = entry.icon;
              return (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-2.5 text-xs leading-snug"
                >
                  <Icon size={12} className="shrink-0 mt-0.5" style={{ color: entry.color }} />
                  <span className="text-slate-300">{entry.text}</span>
                </motion.li>
              );
            })}
          </AnimatePresence>
          {visibleLogs.length < LOG_ENTRIES.length && (
            <li className="flex items-center gap-2 text-slate-500 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping shrink-0" />
              Working...
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-sky-600/8 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-500/6 rounded-full blur-[100px]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Left: copy */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-semibold text-sky-300 mb-6 border border-sky-500/20"
            >
              <Zap size={11} className="text-sky-400" />
              AI outbound workforce — live in 48 hours
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6"
            >
              Stop Hiring SDRs.{' '}
              <span className="text-gradient">Deploy AI That Books Meetings.</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="max-w-xl text-xl text-slate-300 leading-relaxed mb-8 mx-auto lg:mx-0"
            >
              AI outbound agents that find leads, write personalized outreach, follow up automatically, qualify prospects, and book meetings — replacing repetitive SDR workflows in 48 hours.
            </motion.p>

            {/* Bullet proof section */}
            <motion.ul
              custom={2.5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-2.5 mb-10 mx-auto lg:mx-0 max-w-md text-left"
            >
              {WHAT_IT_DOES.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                    <Check size={11} className="text-emerald-400" />
                  </span>
                  {item}
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="https://cal.com/fouad-shariff-a4ffvv"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm transition-all duration-200 shadow-xl shadow-sky-500/30 hover:shadow-sky-400/35 hover:-translate-y-0.5 whitespace-nowrap"
              >
                Book Your AI Workforce Demo
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl glass hover:bg-white/10 text-slate-300 hover:text-white font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                See pricing
              </a>
            </motion.div>

            <motion.p
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-5 text-xs text-slate-500 text-center lg:text-left"
            >
              No hiring · No training · No long-term contract · Cancel anytime
            </motion.p>

            {/* Social proof */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-10 flex items-center justify-center lg:justify-start gap-4 flex-wrap"
            >
              <div className="flex -space-x-2.5">
                {[
                  'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=80',
                  'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=80',
                  'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=80',
                  'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=80',
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="client"
                    className="w-8 h-8 rounded-full object-cover object-top ring-2 ring-slate-950"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#fbbf24">
                      <path d="M6 1l1.39 2.82L10.5 4.27l-2.25 2.19.53 3.11L6 8.02 3.22 9.57l.53-3.11L1.5 4.27l3.11-.45L6 1z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-400 text-xs">
                  Trusted by <span className="text-slate-200 font-semibold">120+ founders</span> — first meeting booked in{' '}
                  <span className="text-sky-400 font-semibold">36 hours</span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: live agent dashboard */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex-1 w-full"
          >
            <AgentDashboard />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

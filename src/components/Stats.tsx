import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock, CalendarCheck, DollarSign } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '3x',
    label: 'More leads captured on average',
    sub: 'Based on 100+ client deployments',
    color: '#38bdf8',
    bg: 'rgba(56,189,248,0.08)',
    border: 'rgba(56,189,248,0.15)',
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Customer response coverage',
    sub: 'Nights, weekends, and holidays',
    color: '#34d399',
    bg: 'rgba(52,211,153,0.08)',
    border: 'rgba(52,211,153,0.15)',
  },
  {
    icon: CalendarCheck,
    value: '90%',
    label: 'Reduction in missed calls',
    sub: 'AI answers when you can\'t',
    color: '#fbbf24',
    bg: 'rgba(251,191,36,0.08)',
    border: 'rgba(251,191,36,0.15)',
  },
  {
    icon: DollarSign,
    value: '60%',
    label: 'Lower operational costs',
    sub: 'vs. hiring additional staff',
    color: '#f87171',
    bg: 'rgba(248,113,113,0.08)',
    border: 'rgba(248,113,113,0.15)',
  },
];

const outcomes = [
  { label: '214', desc: 'Calls Answered' },
  { label: '127', desc: 'Leads Captured' },
  { label: '43', desc: 'Appts Booked' },
  { label: '$0', desc: 'Extra Headcount' },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-sky-600/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left: mission copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex-1 max-w-lg"
          >
            <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-5">The Results</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              Real numbers from{' '}
              <span className="text-gradient">real businesses</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Every stat below comes from active client deployments. Our AI systems start producing measurable results within the first week of going live.
            </p>

            {/* Outcome strip */}
            <div className="grid grid-cols-4 gap-3 mb-8">
              {outcomes.map((o) => (
                <div
                  key={o.desc}
                  className="rounded-xl p-3 text-center"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <p className="text-white font-black text-xl leading-none mb-1">{o.label}</p>
                  <p className="text-slate-500 text-[10px] font-medium leading-tight">{o.desc}</p>
                </div>
              ))}
            </div>

            <a
              href="https://cal.com/fouad-shariff-a4ffvv"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sky-400 font-semibold text-sm hover:text-sky-300 transition-colors"
            >
              See how it works for your business
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Right: stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="flex-1 w-full grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.55 }}
                  className="rounded-2xl p-6 flex flex-col gap-3"
                  style={{ background: stat.bg, border: `1px solid ${stat.border}` }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.05)', border: `1px solid ${stat.border}` }}
                  >
                    <Icon size={16} style={{ color: stat.color }} />
                  </div>
                  <div
                    className="text-5xl font-black tracking-tight leading-none"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm font-medium leading-snug mb-1">{stat.label}</p>
                    <p className="text-slate-500 text-xs">{stat.sub}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

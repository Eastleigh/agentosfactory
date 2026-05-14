import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight, Zap } from 'lucide-react';

const starter = {
  name: 'AI Sales Team',
  price: '$997',
  period: '/ month',
  setup: '$2,500 one-time setup',
  tagline: 'Everything you need to fill your calendar with qualified meetings — without hiring a single SDR.',
  outcome: 'Average 20+ qualified meetings/month',
  items: [
    'AI voice caller — dials leads 24/7',
    'AI email outreach — personalized at scale',
    'AI SMS follow-up sequences',
    'Automatic appointment booking',
    'CRM sync & pipeline analytics',
    'Weekly performance optimization',
    'Dedicated account manager',
    '14-day money-back guarantee',
  ],
};

const addOns = [
  { name: 'AI Revenue Department', price: '$2,500/mo', desc: '5 agents + inbound coverage + custom CRM' },
  { name: 'AI Operator', price: '$5,000/mo', desc: 'Unlimited agents + white-label + priority support' },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="pricing" className="py-28 relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-[600px] h-[400px] bg-sky-600/8 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-4">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            One offer. One outcome.{' '}
            <span className="text-gradient">Meetings on your calendar.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            No hiring, no training, no management. Your AI workforce is live in 48 hours and booking qualified meetings within the first week.
          </p>
        </motion.div>

        {/* Main pricing card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
          className="relative rounded-3xl overflow-hidden mb-8"
          style={{
            background: 'linear-gradient(135deg, rgba(14,26,50,1) 0%, rgba(8,18,38,1) 100%)',
            border: '1px solid rgba(56,189,248,0.25)',
            boxShadow: '0 0 80px rgba(56,189,248,0.08)',
          }}
        >
          {/* Top accent bar */}
          <div className="h-1 w-full bg-gradient-to-r from-sky-500 via-cyan-400 to-sky-500" />

          <div className="p-8 md:p-12">
            <div className="flex flex-col lg:flex-row gap-10">

              {/* Left: name, price, tagline */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/15 text-sky-300 text-xs font-bold border border-sky-500/30">
                    <Zap size={10} /> Most Popular
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                    Live in 48 hours
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{starter.name}</h3>
                <p className="text-slate-400 text-base leading-relaxed mb-6 max-w-sm">{starter.tagline}</p>

                <div className="mb-2">
                  <div className="flex items-end gap-2">
                    <span className="text-6xl font-black text-white tracking-tight">{starter.price}</span>
                    <span className="text-slate-400 text-base pb-2">{starter.period}</span>
                  </div>
                  <p className="text-slate-500 text-sm mt-1">{starter.setup}</p>
                </div>

                {/* Outcome highlight */}
                <div
                  className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl"
                  style={{ background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.25)' }}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span className="text-emerald-400 text-sm font-semibold">{starter.outcome}</span>
                </div>
              </div>

              {/* Right: features + CTA */}
              <div className="flex-1 flex flex-col">
                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {starter.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-sky-500/20 border border-sky-500/40 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={11} className="text-sky-400" />
                      </div>
                      <span className="text-slate-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://cal.com/fouad-shariff-a4ffvv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full py-4 rounded-xl font-bold text-sm text-center text-white bg-sky-500 hover:bg-sky-400 transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-sky-400/35 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  Deploy Your AI Sales Team
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scale-up tiers */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid md:grid-cols-2 gap-4 mb-8"
        >
          {addOns.map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl p-6 flex items-center justify-between gap-4"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div>
                <p className="text-white font-semibold text-sm mb-1">{plan.name}</p>
                <p className="text-slate-500 text-xs">{plan.desc}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sky-400 font-bold text-sm">{plan.price}</p>
                <a
                  href="https://cal.com/fouad-shariff-a4ffvv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-500 hover:text-slate-300 transition-colors mt-1 inline-block"
                >
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="text-center text-slate-500 text-sm"
        >
          All plans include 14-day money-back guarantee · No long-term contracts · Cancel anytime
        </motion.p>
      </div>
    </section>
  );
}

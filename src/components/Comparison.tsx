import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

const rows = [
  {
    ai: 'Fraction of the cost of hiring staff',
    human: '$40K–$60K salary + benefits per receptionist',
  },
  {
    ai: 'Answers calls & chats 24/7/365',
    human: 'Limited to business hours or shifts',
  },
  {
    ai: 'Never burns out, never calls in sick',
    human: 'Burnout, sick days, and turnover',
  },
  {
    ai: 'Scales instantly as your business grows',
    human: 'Hiring takes weeks and budget',
  },
  {
    ai: 'Responds to every lead in under 60 seconds',
    human: 'Leads wait hours or get missed entirely',
  },
  {
    ai: 'Improves with every customer interaction',
    human: 'Performance varies person to person',
  },
];

export default function Comparison() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-sky-600/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-4">The Honest Comparison</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            AI automation vs. hiring more staff
          </h2>
        </motion.div>

        {/* Column headers */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="grid grid-cols-2 gap-4 mb-4"
        >
          <div
            className="rounded-2xl px-6 py-4 flex items-center gap-3"
            style={{ background: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.2)' }}
          >
            <CheckCircle2 size={18} className="text-sky-400 shrink-0" />
            <span className="text-white font-bold text-base">AI Automation System</span>
          </div>
          <div
            className="rounded-2xl px-6 py-4 flex items-center gap-3"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <XCircle size={18} className="text-rose-400/70 shrink-0" />
            <span className="text-slate-400 font-bold text-base">Traditional Staff Hire</span>
          </div>
        </motion.div>

        {/* Rows */}
        <div className="flex flex-col gap-2.5">
          {rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.07, duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              <div
                className="rounded-xl px-5 py-4 flex items-start gap-3"
                style={{ background: 'rgba(56,189,248,0.05)', border: '1px solid rgba(56,189,248,0.12)' }}
              >
                <CheckCircle2 size={15} className="text-sky-400 shrink-0 mt-0.5" />
                <span className="text-slate-200 text-sm leading-relaxed">{row.ai}</span>
              </div>
              <div
                className="rounded-xl px-5 py-4 flex items-start gap-3"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <XCircle size={15} className="text-rose-400/60 shrink-0 mt-0.5" />
                <span className="text-slate-500 text-sm leading-relaxed">{row.human}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center text-slate-500 text-sm mt-8"
        >
          Our AI automation handles the repetitive work — without the overhead, the turnover, or the missed opportunities.
        </motion.p>
      </div>
    </section>
  );
}

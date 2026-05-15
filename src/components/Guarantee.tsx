import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export default function Guarantee() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative rounded-3xl overflow-hidden text-center px-8 py-16 md:px-20"
          style={{
            background: 'linear-gradient(135deg, #0d1f10 0%, #091a1f 60%, #0c1422 100%)',
            border: '1px solid rgba(52,211,153,0.2)',
          }}
        >
          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/8 rounded-full blur-[120px]" />
          </div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 mx-auto"
            style={{ background: 'rgba(52,211,153,0.12)', border: '1px solid rgba(52,211,153,0.25)' }}
          >
            <ShieldCheck size={26} className="text-emerald-400" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-5"
          >
            The Guarantee
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6 text-white"
          >
            If we don't increase your{' '}
            <span style={{ color: '#34d399' }}>lead&nbsp;capture&nbsp;by&nbsp;3x</span>{' '}
            in 90 days,<br className="hidden md:block" />
            you don't pay.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed mb-10"
          >
            We use these exact AI systems to run our own businesses. We know what they produce. The guarantee isn't a sales tactic — it's just confidence in the results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.42, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://cal.com/fouad-shariff-a4ffvv"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white transition-all duration-200 shadow-xl hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                boxShadow: '0 8px 32px rgba(16,185,129,0.3)',
              }}
            >
              Hold us to it — book your free audit
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Fine print */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-slate-600 text-xs mt-8"
          >
            Measured against your current lead capture rate. Results validated across 100+ client deployments.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

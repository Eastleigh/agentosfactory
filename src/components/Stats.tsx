import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const stats = [
  { value: '11x', label: 'Average ROI vs. in-house SDR team', color: '#38bdf8' },
  { value: '36h', label: 'Average time to first booked meeting', color: '#34d399' },
  { value: '500+', label: 'Qualified meetings booked per month', color: '#fbbf24' },
  { value: '87%', label: 'Reduction in cost per booked meeting', color: '#f87171' },
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
            <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-5">Why we exist</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              We build AI workforces that<br />
              <span className="text-gradient">outperform human teams</span><br />
              at a fraction of the cost.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              When you work with us, you get specialists who transform sales pipelines through intelligent, always-on AI. Your competitors will wonder how you scaled so fast.
            </p>
            <a
              href="https://cal.com/fouad-shariff-a4ffvv"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sky-400 font-semibold text-sm hover:text-sky-300 transition-colors"
            >
              Book a strategy call
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Right: 2x2 stat grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="flex-1 w-full grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.55 }}
                className="rounded-2xl p-6 flex flex-col gap-3"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div
                  className="text-5xl font-black tracking-tight leading-none"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <p className="text-slate-400 text-sm leading-snug">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

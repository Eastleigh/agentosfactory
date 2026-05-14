import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, Home, Shield, Briefcase, Scale, Stethoscope, TrendingUp, Wrench } from 'lucide-react';

const industries = [
  {
    icon: Home,
    name: 'Home Services',
    examples: 'HVAC, Roofing, Solar, Plumbing',
    outcome: '20+ qualified estimates/month',
    color: '#38bdf8',
    bg: 'rgba(56,189,248,0.08)',
    border: 'rgba(56,189,248,0.18)',
  },
  {
    icon: Building2,
    name: 'Real Estate',
    examples: 'Agents, brokers, investors',
    outcome: 'Seller & buyer appointments on autopilot',
    color: '#34d399',
    bg: 'rgba(52,211,153,0.08)',
    border: 'rgba(52,211,153,0.18)',
  },
  {
    icon: Shield,
    name: 'Insurance',
    examples: 'Life, health, P&C agencies',
    outcome: 'Policy quotes & renewals booked daily',
    color: '#fbbf24',
    bg: 'rgba(251,191,36,0.08)',
    border: 'rgba(251,191,36,0.18)',
  },
  {
    icon: Briefcase,
    name: 'B2B SaaS',
    examples: 'Software & tech companies',
    outcome: 'Demo calls filled without an SDR team',
    color: '#38bdf8',
    bg: 'rgba(56,189,248,0.08)',
    border: 'rgba(56,189,248,0.18)',
  },
  {
    icon: Scale,
    name: 'Law Firms',
    examples: 'Personal injury, business law',
    outcome: 'Intake calls qualified & scheduled 24/7',
    color: '#f87171',
    bg: 'rgba(248,113,113,0.08)',
    border: 'rgba(248,113,113,0.18)',
  },
  {
    icon: Stethoscope,
    name: 'Med Spas & Clinics',
    examples: 'Aesthetics, dental, wellness',
    outcome: 'Reactivations & new bookings automated',
    color: '#34d399',
    bg: 'rgba(52,211,153,0.08)',
    border: 'rgba(52,211,153,0.18)',
  },
  {
    icon: TrendingUp,
    name: 'Financial Services',
    examples: 'Advisors, mortgage, accounting',
    outcome: 'Discovery calls booked without cold calls',
    color: '#fbbf24',
    bg: 'rgba(251,191,36,0.08)',
    border: 'rgba(251,191,36,0.18)',
  },
  {
    icon: Wrench,
    name: 'Contractors',
    examples: 'Remodeling, electrical, landscaping',
    outcome: 'Estimate pipeline running 24/7',
    color: '#f87171',
    bg: 'rgba(248,113,113,0.08)',
    border: 'rgba(248,113,113,0.18)',
  },
];

export default function WhoItsFor() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-28 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] bg-cyan-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-4">Who It's For</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Built for businesses that run on{' '}
            <span className="text-gradient">booked appointments</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            If your revenue depends on getting qualified prospects onto a call or into a meeting, this workforce was built for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.06, duration: 0.5, ease: 'easeOut' }}
                className="group rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 cursor-default"
                style={{
                  background: ind.bg,
                  border: `1px solid ${ind.border}`,
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(255,255,255,0.05)', border: `1px solid ${ind.border}` }}
                >
                  <Icon size={20} style={{ color: ind.color }} />
                </div>

                <div>
                  <h3 className="text-white font-bold text-base mb-1">{ind.name}</h3>
                  <p className="text-slate-500 text-xs mb-3">{ind.examples}</p>
                  <p
                    className="text-xs font-semibold leading-snug"
                    style={{ color: ind.color }}
                  >
                    {ind.outcome}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom qualifier */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 text-sm">
            Don't see your industry?{' '}
            <a
              href="https://cal.com/fouad-shariff-a4ffvv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300 font-semibold transition-colors"
            >
              Book a call — we likely work with businesses like yours.
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

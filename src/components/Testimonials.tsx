import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const cases = [
  {
    metric: '90%',
    metricLabel: 'fewer missed calls',
    accent: '#38bdf8',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    company: 'Summit HVAC',
    companyInitial: 'S',
    quote: 'We were missing 40% of our calls. Now the AI receptionist answers every single one and books the job before we even know about it.',
    name: 'James Holloway',
    role: 'Owner',
  },
  {
    metric: '3x',
    metricLabel: 'more leads captured',
    accent: '#34d399',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    company: 'Brighter Dental',
    companyInitial: 'B',
    quote: "Patients don't realize they're talking to AI. The booking rate tripled and our front desk can focus on in-office care.",
    name: 'Sarah Mendez',
    role: 'Practice Manager',
  },
  {
    metric: '$8k',
    metricLabel: 'saved monthly on staffing',
    accent: '#fbbf24',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
    company: 'Apex Roofing',
    companyInitial: 'A',
    quote: 'We replaced two full-time receptionists with the AI system. Better response times, more bookings, and massive cost savings.',
    name: 'Marcus Torres',
    role: 'Operations Manager',
  },
  {
    metric: '24/7',
    metricLabel: 'customer coverage',
    accent: '#f87171',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    company: 'Glow Med Spa',
    companyInitial: 'G',
    quote: 'The chatbot and voice agent work around the clock. We went from losing weekend leads to booking them automatically.',
    name: 'Diana Kovacs',
    role: 'Owner',
  },
  {
    metric: '< 60s',
    metricLabel: 'average response time',
    accent: '#22d3ee',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    company: 'Weston Law Group',
    companyInitial: 'W',
    quote: 'Every intake call gets answered immediately. Our conversion rate on new client inquiries doubled in the first month.',
    name: 'Tom Weston',
    role: 'Managing Partner',
  },
  {
    metric: '+47',
    metricLabel: 'dormant leads reactivated',
    accent: '#a3e635',
    image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
    company: 'Clearflow Plumbing',
    companyInitial: 'C',
    quote: 'The automated follow-ups brought back old leads we thought were dead. The system pays for itself every single week.',
    name: 'Priya Nair',
    role: 'Business Development',
  },
];

function TestimonialCard({ c, i, inView }: { c: typeof cases[0]; i: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.09, duration: 0.6, ease: 'easeOut' }}
      className="relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 group"
      style={{
        background: '#0a1628',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* Colored top accent bar */}
      <div
        className="h-[3px] w-full shrink-0"
        style={{ background: `linear-gradient(90deg, ${c.accent}99 0%, ${c.accent}20 100%)` }}
      />

      {/* Metric header */}
      <div
        className="px-6 pt-5 pb-4 border-b"
        style={{ borderColor: 'rgba(255,255,255,0.05)' }}
      >
        <div
          className="text-4xl font-black tracking-tight leading-none mb-1"
          style={{ color: c.accent }}
        >
          {c.metric}
        </div>
        <div className="text-slate-500 text-xs font-medium">{c.metricLabel}</div>
      </div>

      {/* Body */}
      <div className="flex gap-4 px-6 py-5 flex-1">
        <div className="shrink-0">
          <img
            src={c.image}
            alt={c.name}
            className="w-11 h-11 rounded-full object-cover object-top"
            style={{ border: `2px solid ${c.accent}30` }}
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-3">
            <div
              className="w-5 h-5 rounded-md flex items-center justify-center font-bold text-[10px]"
              style={{
                background: `${c.accent}18`,
                border: `1px solid ${c.accent}35`,
                color: c.accent,
              }}
            >
              {c.companyInitial}
            </div>
            <span className="text-slate-400 text-xs font-medium">{c.company}</span>
          </div>

          <p className="text-slate-200 text-sm leading-relaxed mb-4">
            "{c.quote}"
          </p>

          <div className="text-xs text-slate-500">
            <span className="text-slate-400 font-semibold">{c.name}</span>
            {' · '}
            {c.role}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="testimonials" className="py-28 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-cyan-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-4">Customer Results</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Real results. Real businesses.
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Real businesses using AI automation to capture more leads and never miss a call.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <TestimonialCard key={c.company} c={c} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

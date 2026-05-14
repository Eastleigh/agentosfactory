import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, MessageSquare, Mail, Calendar, BarChart3, Brain } from 'lucide-react';

const features = [
  {
    number: '01',
    icon: Phone,
    title: 'Voice Caller',
    description: 'Your dedicated caller dials leads, handles objections in real time, and qualifies prospects — sounding indistinguishable from a top-performing rep. No voicemail, no hesitation, no bad days.',
    accent: '#38bdf8',
    accentBg: 'rgba(56,189,248,0.08)',
    accentBorder: 'rgba(56,189,248,0.2)',
    wide: true,
  },
  {
    number: '02',
    icon: MessageSquare,
    title: 'SMS Follow-Up',
    description: 'Personalized text sequences that re-engage cold leads and push warm ones toward a booked call — relentless and never burned out.',
    accent: '#34d399',
    accentBg: 'rgba(52,211,153,0.08)',
    accentBorder: 'rgba(52,211,153,0.2)',
    wide: false,
  },
  {
    number: '03',
    icon: Mail,
    title: 'Email Outreach',
    description: 'Highly personalized cold campaigns that adapt based on opens, replies, and intent — like a full-time email specialist.',
    accent: '#fbbf24',
    accentBg: 'rgba(251,191,36,0.08)',
    accentBorder: 'rgba(251,191,36,0.2)',
    wide: false,
  },
  {
    number: '04',
    icon: Calendar,
    title: 'Appointment Setter',
    description: 'When a lead is ready, your setter books the meeting directly into your calendar. No back-and-forth, no missed slots, no no-shows.',
    accent: '#f87171',
    accentBg: 'rgba(248,113,113,0.08)',
    accentBorder: 'rgba(248,113,113,0.2)',
    wide: false,
  },
  {
    number: '05',
    icon: BarChart3,
    title: 'Pipeline Analytics',
    description: 'See exactly where leads drop off, which sequences convert best, and how your workforce performs — in a single live dashboard.',
    accent: '#22d3ee',
    accentBg: 'rgba(34,211,238,0.08)',
    accentBorder: 'rgba(34,211,238,0.2)',
    wide: false,
  },
  {
    number: '06',
    icon: Brain,
    title: 'Continuous Optimization',
    description: 'Your workforce gets sharper over time — learning from every call, reply, and booked meeting to lift conversion rates automatically.',
    accent: '#2dd4bf',
    accentBg: 'rgba(45,212,191,0.08)',
    accentBorder: 'rgba(45,212,191,0.2)',
    wide: true,
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  // Layout: wide card spans 2 cols, regular cards span 1
  // Row 1: wide(2) + small(1) + small(1)  → but grid-cols-4 doesn't work cleanly
  // Use grid-cols-3: wide = col-span-2, narrow = col-span-1
  // Row 1: wide(01), small(02), small(03)
  // Row 2: small(04), small(05), wide(06)
  const row1 = features.slice(0, 3); // 01(wide), 02, 03
  const row2 = features.slice(3, 6); // 04, 05, 06(wide)

  return (
    <section id="features" className="py-28 relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-emerald-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-4">Capabilities</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            A full revenue workforce in one deployment
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Every channel your appointment-setting team needs — operating together 24/7.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[...row1, ...row2].map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.number}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.09, duration: 0.6, ease: 'easeOut' }}
                className={`group relative rounded-2xl p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-default ${
                  f.wide ? 'md:col-span-2' : 'md:col-span-1'
                }`}
                style={{
                  background: f.accentBg,
                  border: `1px solid ${f.accentBorder}`,
                }}
              >
                {/* Large background number */}
                <span
                  className="absolute top-4 right-5 text-7xl font-black select-none pointer-events-none leading-none"
                  style={{ color: f.accent, opacity: 0.06 }}
                >
                  {f.number}
                </span>

                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 shrink-0"
                  style={{ background: f.accentBg, border: `1px solid ${f.accentBorder}` }}
                >
                  <Icon size={20} style={{ color: f.accent }} />
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold tracking-widest" style={{ color: f.accent }}>
                    {f.number}
                  </span>
                  <div className="flex-1 h-px" style={{ background: f.accentBorder }} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

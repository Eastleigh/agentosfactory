import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const days = [
  {
    day: 'Day 1',
    title: 'Discovery & Strategy',
    description: 'We map your business processes, customer journey, and automation goals. We plan the AI receptionist scripts, chatbot flows, and follow-up sequences.',
    color: 'from-sky-500 to-sky-400',
    dot: 'bg-sky-400',
  },
  {
    day: 'Day 2',
    title: 'CRM & Integrations',
    description: 'GoHighLevel, HubSpot, Google Calendar, Twilio, and your existing tools are connected and configured for two-way sync.',
    color: 'from-cyan-500 to-cyan-400',
    dot: 'bg-cyan-400',
  },
  {
    day: 'Day 3',
    title: 'AI Voice Receptionist Setup',
    description: 'Your AI voice agent is trained on your business, services, and booking process. Test calls are run and refined until it sounds perfect.',
    color: 'from-sky-500 to-cyan-400',
    dot: 'bg-sky-400',
  },
  {
    day: 'Day 4',
    title: 'Chatbot & Lead Capture',
    description: 'Your AI chatbot is deployed on your website with custom qualification scripts, FAQ handling, and booking capabilities.',
    color: 'from-cyan-500 to-sky-400',
    dot: 'bg-cyan-400',
  },
  {
    day: 'Day 5',
    title: 'Automation Workflows',
    description: 'SMS & email follow-up sequences, appointment reminders, and lead nurture campaigns are built and activated.',
    color: 'from-sky-500 to-sky-400',
    dot: 'bg-sky-400',
  },
  {
    day: 'Day 6',
    title: 'Testing & Approvals',
    description: 'Full end-to-end testing across every channel. You review and approve everything before going live with real customers.',
    color: 'from-cyan-500 to-cyan-400',
    dot: 'bg-cyan-400',
  },
  {
    day: 'Day 7',
    title: 'Go Live',
    description: 'Your complete AI automation system is fully operational. Calls are answered, leads are captured, and appointments land on your calendar.',
    color: 'from-emerald-500 to-emerald-400',
    dot: 'bg-emerald-400',
  },
];

export default function LaunchTimeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="timeline" className="py-28 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] bg-cyan-600/6 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-4">Launch Timeline</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Live in 7 days, not 7 months
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Most agencies take months to implement. We deliver a fully operational AI automation system in one week.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500/40 via-cyan-500/20 to-transparent md:-translate-x-px" />

          <div className="flex flex-col gap-8">
            {days.map((item, i) => {
              const isRight = i % 2 === 0;
              return (
                <motion.div
                  key={item.day}
                  initial={{ opacity: 0, x: isRight ? -24 : 24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.08, duration: 0.55, ease: 'easeOut' }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isRight ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Mobile/desktop dot */}
                  <div className="relative z-10 shrink-0 mt-1 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-3">
                    <div className={`w-4 h-4 rounded-full ${item.dot} ring-4 ring-slate-950 shadow-lg`} />
                  </div>

                  {/* Card */}
                  <div className={`md:w-[44%] ml-4 md:ml-0 ${isRight ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="glass rounded-2xl p-6 hover:bg-white/8 transition-colors duration-200">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-2.5 py-1 rounded-lg bg-gradient-to-r ${item.color} text-white text-xs font-bold`}>
                          {item.day}
                        </span>
                        <h3 className="text-white font-semibold text-base">{item.title}</h3>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-[44%]" />
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="https://cal.com/fouad-shariff-a4ffvv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-sky-500/25"
          >
            Start my 7-day launch
          </a>
          <p className="text-slate-500 text-xs mt-4">Setup begins within 24 hours of onboarding call</p>
        </motion.div>
      </div>
    </section>
  );
}

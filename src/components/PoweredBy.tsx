import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const row1 = [
  { name: 'OpenAI', color: '#10a37f' },
  { name: 'Retell AI', color: '#38bdf8' },
  { name: 'GoHighLevel', color: '#f97316' },
  { name: 'Twilio', color: '#e11d48' },
  { name: 'Google Calendar', color: '#4285f4' },
  { name: 'Apollo', color: '#0ea5e9' },
  { name: 'Clay', color: '#06b6d4' },
  { name: 'Gmail', color: '#ea4335' },
  { name: 'Slack', color: '#36c5f0' },
  { name: 'HubSpot', color: '#ff7a59' },
  { name: 'Salesforce', color: '#00a1e0' },
  { name: 'Zapier', color: '#ff4a00' },
];

const row2 = [
  { name: 'Make', color: '#0ea5e9' },
  { name: 'Stripe', color: '#38bdf8' },
  { name: 'Notion', color: '#ffffff' },
  { name: 'Airtable', color: '#18bfff' },
  { name: 'Calendly', color: '#0284c7' },
  { name: 'Close CRM', color: '#22c55e' },
  { name: 'Instantly', color: '#f59e0b' },
  { name: 'Smartlead', color: '#f97316' },
  { name: 'Lemlist', color: '#fb923c' },
  { name: 'PhantomBuster', color: '#06b6d4' },
  { name: 'n8n', color: '#ea580c' },
  { name: 'Pipedrive', color: '#1a9c3e' },
];

function MarqueeRow({ items, reverse = false }: { items: typeof row1; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex gap-8 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} w-max`}
      >
        {doubled.map((tool, i) => (
          <div key={`${tool.name}-${i}`} className="flex items-center gap-2.5 shrink-0 group">
            <div
              className="w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: tool.color, boxShadow: `0 0 8px ${tool.color}80` }}
            />
            <span className="text-sm font-semibold text-slate-400 group-hover:text-slate-200 transition-colors duration-200 tracking-wide whitespace-nowrap">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PoweredBy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-16 border-y border-white/5 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500"
        >
          Powered by industry-leading infrastructure
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="space-y-5"
      >
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </motion.div>
    </section>
  );
}

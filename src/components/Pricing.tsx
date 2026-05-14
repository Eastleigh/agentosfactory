import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'AI Sales Team',
    price: '$997',
    period: '/ month',
    setup: '$2,500',
    description: 'Everything you need to automate appointment setting and fill your calendar.',
    items: [
      '3 AI employees',
      'AI voice calls',
      'SMS follow-up sequences',
      'Automated appointment booking',
      '5 custom workflows',
      'Pipeline analytics dashboard',
    ],
    highlighted: false,
    badge: null,
    cta: 'Book Strategy Call',
  },
  {
    name: 'AI Revenue Department',
    price: '$2,500',
    period: '/ month',
    setup: '$5,000',
    description: 'A dedicated AI revenue operation for businesses serious about scaling pipeline.',
    items: [
      '5 AI employees',
      'AI voice, SMS & email',
      'Full inbound + outbound coverage',
      'Custom CRM integration',
      'Unlimited workflows',
      'Dedicated account manager',
    ],
    highlighted: true,
    badge: 'Most popular',
    cta: 'Schedule a Call',
  },
  {
    name: 'AI Operator',
    price: '$5,000',
    period: '/ month',
    setup: '$10,000',
    description: 'A complete done-for-you AI revenue team for high-growth businesses ready to dominate.',
    items: [
      'Unlimited AI employees',
      'Custom AI voice & persona training',
      'White-label options',
      'Multi-channel orchestration',
      'Priority onboarding & support',
      'Weekly performance reviews',
    ],
    highlighted: false,
    badge: null,
    cta: 'Apply Now',
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="pricing" className="py-28 relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-[600px] h-[400px] bg-sky-600/8 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-4">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Your AI team, fully managed
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            No hiring, no training, no HR headaches. Pick your level and go live in 7 days.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
              className={`relative flex flex-col rounded-2xl p-7 ${
                plan.highlighted
                  ? 'bg-sky-500/10 border border-sky-500/40 glow'
                  : 'glass'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full bg-sky-500 text-white text-xs font-semibold whitespace-nowrap">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-5">
                <h3 className="text-lg font-semibold text-white mb-1">{plan.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400 text-sm pb-1.5">{plan.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 line-through decoration-slate-600">one-time</span>
                  <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold">
                    + {plan.setup} setup
                  </span>
                </div>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={16} className="text-sky-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://cal.com/fouad-shariff-a4ffvv"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-xl font-semibold text-sm text-center transition-all duration-200 hover:-translate-y-0.5 ${
                  plan.highlighted
                    ? 'bg-sky-500 hover:bg-sky-400 text-white shadow-lg shadow-sky-500/25'
                    : 'glass hover:bg-white/10 text-slate-200'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center text-slate-500 text-sm mt-8"
        >
          All plans include a 14-day money-back guarantee &middot; No long-term contracts &middot; Cancel anytime
        </motion.p>
      </div>
    </section>
  );
}

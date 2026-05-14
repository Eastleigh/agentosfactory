import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { UserPlus, Settings, TrendingUp, ChevronRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Onboard in 48 hours',
    description:
      "Tell us about your offer, your ideal customer, and your goals. We configure your sales workforce, write the scripts, and connect everything to your calendar and CRM — you're live in two days.",
    image:
      'https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=2',
  },
  {
    number: '02',
    icon: Settings,
    title: 'Your AI team goes to work',
    description:
      'Your appointment-setting team begins prospecting, calling, texting, and emailing leads the moment they go live. They qualify interest, handle objections, and push every ready prospect toward a booked meeting — 24/7.',
    image:
      'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=2',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'You close, we optimize',
    description:
      "Attend the meetings your AI booked. We continuously monitor performance, refine scripts based on conversion data, and scale what's working — so your pipeline keeps growing without extra headcount.",
    image:
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=2',
  },
];

const formula1Examples = [
  {
    industry: 'Dental Practice',
    role: 'Front Desk Staff',
    task: 'Reminders, intake & insurance calls',
    hrsPerWeek: 18,
    people: 1,
    hourlyRate: 28,
  },
  {
    industry: 'Real Estate Agency',
    role: 'Inside Sales Agent',
    task: 'Lead follow-up & appointment setting',
    hrsPerWeek: 35,
    people: 2,
    hourlyRate: 32,
  },
  {
    industry: 'Med Spa',
    role: 'Receptionist',
    task: 'Booking, re-activation & upsell calls',
    hrsPerWeek: 22,
    people: 1,
    hourlyRate: 24,
  },
  {
    industry: 'SaaS Company',
    role: 'SDR',
    task: 'Cold outreach & demo scheduling',
    hrsPerWeek: 40,
    people: 3,
    hourlyRate: 45,
  },
  {
    industry: 'Home Services',
    role: 'Dispatcher',
    task: 'Inbound lead qualification & booking',
    hrsPerWeek: 25,
    people: 1,
    hourlyRate: 22,
  },
];

const formula3Examples = [
  {
    industry: 'Dental Practice',
    task: 'Wrong patient info entered at front desk',
    errorsPerMonth: 12,
    costPerError: 180,
  },
  {
    industry: 'Insurance Agency',
    task: 'Missed follow-up causing lapsed policies',
    errorsPerMonth: 8,
    costPerError: 350,
  },
  {
    industry: 'Home Services',
    task: 'Double-booked or missed appointments',
    errorsPerMonth: 6,
    costPerError: 400,
  },
  {
    industry: 'Real Estate Agency',
    task: 'Leads falling through the cracks',
    errorsPerMonth: 10,
    costPerError: 1200,
  },
  {
    industry: 'Med Spa',
    task: 'No-show due to missing reminder',
    errorsPerMonth: 15,
    costPerError: 220,
  },
];

const formula2Examples = [
  {
    industry: 'General Contractor',
    task: 'Estimates sent same day vs. 3 days',
    convLift: 30,
    leadsPerMonth: 15,
    avgDeal: 2500,
  },
  {
    industry: 'Real Estate Agent',
    task: 'Leads responded to in minutes vs. hours',
    convLift: 25,
    leadsPerMonth: 40,
    avgDeal: 8000,
  },
  {
    industry: 'Dental Practice',
    task: 'Missed-call text-back books same day',
    convLift: 35,
    leadsPerMonth: 60,
    avgDeal: 900,
  },
  {
    industry: 'Insurance Agency',
    task: 'Quote follow-up within 5 mins of inquiry',
    convLift: 28,
    leadsPerMonth: 50,
    avgDeal: 1200,
  },
  {
    industry: 'SaaS Company',
    task: 'Trial sign-up followed up within 1 hour',
    convLift: 20,
    leadsPerMonth: 200,
    avgDeal: 500,
  },
];

const formula4Examples = [
  {
    industry: 'Agency Owner',
    task: 'Manually following up with prospects & clients',
    opsHrsPerWeek: 15,
    ownerValuePerHr: 150,
  },
  {
    industry: 'Dental Practice Owner',
    task: 'Handling scheduling, reminders & billing calls',
    opsHrsPerWeek: 12,
    ownerValuePerHr: 200,
  },
  {
    industry: 'Real Estate Broker',
    task: 'Lead sorting, follow-ups & calendar management',
    opsHrsPerWeek: 20,
    ownerValuePerHr: 120,
  },
  {
    industry: 'SaaS Founder',
    task: 'Manually onboarding trial users & chasing invoices',
    opsHrsPerWeek: 10,
    ownerValuePerHr: 250,
  },
  {
    industry: 'Home Services Owner',
    task: 'Dispatching, quoting & inbound lead response',
    opsHrsPerWeek: 18,
    ownerValuePerHr: 100,
  },
];

const formula5Examples = [
  {
    industry: 'Small Business (5–15 staff)',
    task: 'Replacing a full-time admin / receptionist',
    plannedSalary: 48000,
    agentMonthly: 997,
  },
  {
    industry: 'Real Estate Agency',
    task: 'Replacing an inside sales agent (ISA)',
    plannedSalary: 65000,
    agentMonthly: 997,
  },
  {
    industry: 'Med Spa',
    task: 'Replacing front-desk & booking coordinator',
    plannedSalary: 42000,
    agentMonthly: 997,
  },
  {
    industry: 'SaaS Company',
    task: 'Replacing a junior SDR',
    plannedSalary: 72000,
    agentMonthly: 997,
  },
  {
    industry: 'Insurance Agency',
    task: 'Replacing a follow-up specialist',
    plannedSalary: 55000,
    agentMonthly: 997,
  },
];

function formatDollar(n: number) {
  return '$' + Math.round(n).toLocaleString('en-US');
}

export default function HowItWorks() {
  const ref = useRef(null);
  const formulaRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const formulaInView = useInView(formulaRef, { once: true, margin: '-60px' });

  const [activeFormula, setActiveFormula] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [activeExample1, setActiveExample1] = useState(0);
  const [activeExample2, setActiveExample2] = useState(0);
  const [activeExample3, setActiveExample3] = useState(0);
  const [activeExample4, setActiveExample4] = useState(0);
  const [activeExample5, setActiveExample5] = useState(0);

  const ex1 = formula1Examples[activeExample1];
  const annualSavings = ex1.hrsPerWeek * ex1.people * ex1.hourlyRate * 52;

  const ex2 = formula2Examples[activeExample2];
  const monthlyRevLift = (ex2.convLift / 100) * ex2.leadsPerMonth * ex2.avgDeal;

  const ex3 = formula3Examples[activeExample3];
  const annualErrorCost = ex3.errorsPerMonth * ex3.costPerError * 12;

  const ex4 = formula4Examples[activeExample4];
  const ownerAnnualRedirected = ex4.opsHrsPerWeek * ex4.ownerValuePerHr * 52;

  const ex5 = formula5Examples[activeExample5];
  const annualAgentCost = ex5.agentMonthly * 12;
  const annualHireSaving = ex5.plannedSalary - annualAgentCost;

  return (
    <section id="how-it-works" className="py-28 relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[400px] bg-sky-600/8 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-4">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            From zero to a live sales workforce in 48 hours
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            No lengthy onboarding. No hiring headaches. No technical setup. Just results.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col gap-24 mb-32">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isEven = i % 2 === 1;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.7, ease: 'easeOut' }}
                className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
              >
                <div className="flex-1 max-w-lg">
                  <div className="flex items-center gap-4 mb-5">
                    <span className="text-6xl font-black text-white/5 select-none">{step.number}</span>
                    <div className="w-10 h-10 rounded-xl bg-sky-500/15 flex items-center justify-center">
                      <Icon size={20} className="text-sky-400" />
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-lg">{step.description}</p>
                </div>
                <div className="flex-1 w-full max-w-lg">
                  <div className="rounded-2xl overflow-hidden glass glow">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-64 lg:h-80 object-cover opacity-70"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ROI Formula Section */}
        <motion.div
          ref={formulaRef}
          initial={{ opacity: 0, y: 30 }}
          animate={formulaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-12">
            <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-4">The Math</p>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              See exactly what you're leaving on the table
            </h3>
            <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
              Two formulas. One shows what AI saves you. The other shows what it earns you.
            </p>
          </div>

          {/* Formula tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {(
              [
                [1, 'Manual hours removed', 'bg-sky-500 shadow-sky-500/25'],
                [2, 'Cycle time reduction', 'bg-emerald-500 shadow-emerald-500/25'],
                [3, 'Error reduction', 'bg-amber-500 shadow-amber-500/25'],
                [4, 'Owner capacity unlocked', 'bg-cyan-500 shadow-cyan-500/25'],
                [5, 'Headcount replacement', 'bg-rose-500 shadow-rose-500/25'],
              ] as const
            ).map(([f, label, active]) => (
              <button
                key={f}
                onClick={() => setActiveFormula(f)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeFormula === f
                    ? `${active} text-white shadow-lg`
                    : 'glass text-slate-400 hover:text-white hover:bg-white/8'
                }`}
              >
                Formula {f} &mdash; {label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeFormula === 1 ? (
              <motion.div
                key="formula1"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="glass rounded-3xl p-8 md:p-12 mb-8"
              >
                <div className="flex flex-col lg:flex-row gap-10 items-start">
                  {/* Left */}
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-sky-500/15 text-sky-400 text-xs font-bold uppercase tracking-widest mb-6">
                      Formula 1 &mdash; Manual hours removed
                    </div>
                    <div className="text-slate-300 text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                      hrs/wk &times; people &times; hourly rate &times; 52
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeExample1}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="rounded-2xl bg-rose-500/15 border border-rose-500/30 px-6 py-4 inline-block mb-5"
                      >
                        <span className="text-rose-300 text-lg md:text-xl font-bold font-mono">
                          {ex1.hrsPerWeek} hrs &times; {ex1.people > 1 ? `${ex1.people} people × ` : ''}{formatDollar(ex1.hourlyRate)}/hr &times; 52 ={' '}
                          <span className="text-white">{formatDollar(annualSavings)}/yr</span>
                        </span>
                      </motion.div>
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={activeExample1 + '-label'}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-slate-400 text-base"
                      >
                        Example: <span className="text-slate-200 font-medium">{ex1.industry}</span> — {ex1.role} handling{' '}
                        <span className="text-slate-200">{ex1.task}</span>
                      </motion.p>
                    </AnimatePresence>
                  </div>

                  {/* Right: example selector */}
                  <div className="flex-1 w-full">
                    <p className="text-slate-500 text-xs uppercase font-semibold tracking-widest mb-4">Pick an industry</p>
                    <div className="flex flex-col gap-2">
                      {formula1Examples.map((e, i) => (
                        <button
                          key={e.industry}
                          onClick={() => setActiveExample1(i)}
                          className={`group flex items-center justify-between px-5 py-3.5 rounded-xl text-left transition-all duration-200 ${
                            activeExample1 === i
                              ? 'bg-sky-500/15 border border-sky-500/40 text-white'
                              : 'glass hover:bg-white/8 text-slate-400 hover:text-white'
                          }`}
                        >
                          <div>
                            <div className="text-sm font-semibold">{e.industry}</div>
                            <div className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors mt-0.5">{e.task}</div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className={`text-sm font-bold font-mono ${activeExample1 === i ? 'text-sky-400' : 'text-slate-500'}`}>
                              {formatDollar(e.hrsPerWeek * e.people * e.hourlyRate * 52)}/yr
                            </span>
                            <ChevronRight size={16} className={`shrink-0 transition-transform ${activeExample1 === i ? 'text-sky-400 translate-x-0.5' : 'text-slate-600'}`} />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : activeFormula === 2 ? (
              <motion.div
                key="formula2"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="glass rounded-3xl p-8 md:p-12 mb-8"
              >
                <div className="flex flex-col lg:flex-row gap-10 items-start">
                  {/* Left */}
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/15 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
                      Formula 2 &mdash; Cycle time reduction
                    </div>
                    <div className="text-slate-300 text-xl md:text-2xl font-medium mb-2 leading-relaxed">
                      Faster response &rarr; more conversions
                    </div>
                    <div className="text-slate-500 text-sm mb-6">
                      conv lift % &times; leads/mo &times; avg deal value = +$/mo
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeExample2}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="rounded-2xl bg-sky-500/15 border border-sky-500/30 px-6 py-4 inline-block mb-5"
                      >
                        <span className="text-sky-300 text-lg md:text-xl font-bold font-mono">
                          +{ex2.convLift}% conv &times; {ex2.leadsPerMonth} leads/mo &times; {formatDollar(ex2.avgDeal)} avg ={' '}
                          <span className="text-white">+{formatDollar(monthlyRevLift)}/mo</span>
                        </span>
                      </motion.div>
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={activeExample2 + '-label2'}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-slate-400 text-base"
                      >
                        Example: <span className="text-slate-200 font-medium">{ex2.industry}</span> —{' '}
                        <span className="text-slate-200">{ex2.task}</span>
                      </motion.p>
                    </AnimatePresence>
                  </div>

                  {/* Right: example selector */}
                  <div className="flex-1 w-full">
                    <p className="text-slate-500 text-xs uppercase font-semibold tracking-widest mb-4">Pick an industry</p>
                    <div className="flex flex-col gap-2">
                      {formula2Examples.map((e, i) => (
                        <button
                          key={e.industry}
                          onClick={() => setActiveExample2(i)}
                          className={`group flex items-center justify-between px-5 py-3.5 rounded-xl text-left transition-all duration-200 ${
                            activeExample2 === i
                              ? 'bg-emerald-500/15 border border-emerald-500/40 text-white'
                              : 'glass hover:bg-white/8 text-slate-400 hover:text-white'
                          }`}
                        >
                          <div>
                            <div className="text-sm font-semibold">{e.industry}</div>
                            <div className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors mt-0.5">{e.task}</div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className={`text-sm font-bold font-mono ${activeExample2 === i ? 'text-emerald-400' : 'text-slate-500'}`}>
                              +{formatDollar((e.convLift / 100) * e.leadsPerMonth * e.avgDeal)}/mo
                            </span>
                            <ChevronRight size={16} className={`shrink-0 transition-transform ${activeExample2 === i ? 'text-emerald-400 translate-x-0.5' : 'text-slate-600'}`} />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : activeFormula === 3 ? (
              <motion.div
                key="formula3"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="glass rounded-3xl p-8 md:p-12 mb-8"
              >
                <div className="flex flex-col lg:flex-row gap-10 items-start">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/15 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6">
                      Formula 3 &mdash; Error reduction
                    </div>
                    <div className="text-slate-300 text-xl md:text-2xl font-medium mb-2 leading-relaxed">
                      errors/mo &times; cost per error &times; 12
                    </div>
                    <div className="text-slate-500 text-sm mb-6">= annual error cost eliminated</div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeExample3}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="rounded-2xl bg-amber-500/15 border border-amber-500/30 px-6 py-4 inline-block mb-5"
                      >
                        <span className="text-amber-300 text-lg md:text-xl font-bold font-mono">
                          {ex3.errorsPerMonth} errors &times; {formatDollar(ex3.costPerError)} &times; 12 ={' '}
                          <span className="text-white">{formatDollar(annualErrorCost)}/yr</span>
                        </span>
                      </motion.div>
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={activeExample3 + '-label3'}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-slate-400 text-base"
                      >
                        Example: <span className="text-slate-200 font-medium">{ex3.industry}</span> —{' '}
                        <span className="text-slate-200">{ex3.task}</span>
                      </motion.p>
                    </AnimatePresence>
                  </div>
                  <div className="flex-1 w-full">
                    <p className="text-slate-500 text-xs uppercase font-semibold tracking-widest mb-4">Pick an industry</p>
                    <div className="flex flex-col gap-2">
                      {formula3Examples.map((e, i) => (
                        <button
                          key={e.industry}
                          onClick={() => setActiveExample3(i)}
                          className={`group flex items-center justify-between px-5 py-3.5 rounded-xl text-left transition-all duration-200 ${
                            activeExample3 === i
                              ? 'bg-amber-500/15 border border-amber-500/40 text-white'
                              : 'glass hover:bg-white/8 text-slate-400 hover:text-white'
                          }`}
                        >
                          <div>
                            <div className="text-sm font-semibold">{e.industry}</div>
                            <div className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors mt-0.5">{e.task}</div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className={`text-sm font-bold font-mono ${activeExample3 === i ? 'text-amber-400' : 'text-slate-500'}`}>
                              {formatDollar(e.errorsPerMonth * e.costPerError * 12)}/yr
                            </span>
                            <ChevronRight size={16} className={`shrink-0 transition-transform ${activeExample3 === i ? 'text-amber-400 translate-x-0.5' : 'text-slate-600'}`} />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : activeFormula === 4 ? (
              <motion.div
                key="formula4"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="glass rounded-3xl p-8 md:p-12 mb-8"
              >
                <div className="flex flex-col lg:flex-row gap-10 items-start">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-500/15 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
                      Formula 4 &mdash; Owner capacity unlocked
                    </div>
                    <div className="text-slate-300 text-xl md:text-2xl font-medium mb-2 leading-relaxed">
                      Owner's ops hrs/wk &times; owner's value/hr &times; 52
                    </div>
                    <div className="text-slate-500 text-sm mb-6">= time back to revenue-generating work</div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeExample4}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="rounded-2xl bg-cyan-500/15 border border-cyan-500/30 px-6 py-4 inline-block mb-5"
                      >
                        <span className="text-cyan-300 text-lg md:text-xl font-bold font-mono">
                          {ex4.opsHrsPerWeek} hrs &times; {formatDollar(ex4.ownerValuePerHr)}/hr &times; 52 ={' '}
                          <span className="text-white">{formatDollar(ownerAnnualRedirected)}/yr redirected</span>
                        </span>
                      </motion.div>
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={activeExample4 + '-label4'}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-slate-400 text-base"
                      >
                        Example: <span className="text-slate-200 font-medium">{ex4.industry}</span> —{' '}
                        <span className="text-slate-200">{ex4.task}</span>
                      </motion.p>
                    </AnimatePresence>
                  </div>
                  <div className="flex-1 w-full">
                    <p className="text-slate-500 text-xs uppercase font-semibold tracking-widest mb-4">Pick a business type</p>
                    <div className="flex flex-col gap-2">
                      {formula4Examples.map((e, i) => (
                        <button
                          key={e.industry}
                          onClick={() => setActiveExample4(i)}
                          className={`group flex items-center justify-between px-5 py-3.5 rounded-xl text-left transition-all duration-200 ${
                            activeExample4 === i
                              ? 'bg-cyan-500/15 border border-cyan-500/40 text-white'
                              : 'glass hover:bg-white/8 text-slate-400 hover:text-white'
                          }`}
                        >
                          <div>
                            <div className="text-sm font-semibold">{e.industry}</div>
                            <div className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors mt-0.5">{e.task}</div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className={`text-sm font-bold font-mono ${activeExample4 === i ? 'text-cyan-400' : 'text-slate-500'}`}>
                              {formatDollar(e.opsHrsPerWeek * e.ownerValuePerHr * 52)}/yr
                            </span>
                            <ChevronRight size={16} className={`shrink-0 transition-transform ${activeExample4 === i ? 'text-cyan-400 translate-x-0.5' : 'text-slate-600'}`} />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="formula5"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="glass rounded-3xl p-8 md:p-12 mb-8"
              >
                <div className="flex flex-col lg:flex-row gap-10 items-start">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-rose-500/15 text-rose-400 text-xs font-bold uppercase tracking-widest mb-6">
                      Formula 5 &mdash; Headcount replacement
                    </div>
                    <div className="text-slate-300 text-xl md:text-2xl font-medium mb-2 leading-relaxed">
                      Planned hire salary vs. $997/mo workforce member
                    </div>
                    <div className="text-slate-500 text-sm mb-6">Handles 80% of the role — no benefits, no turnover, no training cost</div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeExample5}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="rounded-2xl bg-rose-500/15 border border-rose-500/30 px-6 py-4 inline-block mb-5"
                      >
                        <span className="text-rose-300 text-lg md:text-xl font-bold font-mono">
                          {formatDollar(ex5.plannedSalary)}/yr hire &rarr; {formatDollar(ex5.agentMonthly)}/mo workforce member ={' '}
                          <span className="text-white">{formatDollar(annualHireSaving)}/yr saved</span>
                        </span>
                      </motion.div>
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={activeExample5 + '-label5'}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-slate-400 text-base"
                      >
                        Example: <span className="text-slate-200 font-medium">{ex5.industry}</span> —{' '}
                        <span className="text-slate-200">{ex5.task}</span>
                      </motion.p>
                    </AnimatePresence>
                  </div>
                  <div className="flex-1 w-full">
                    <p className="text-slate-500 text-xs uppercase font-semibold tracking-widest mb-4">Pick a business type</p>
                    <div className="flex flex-col gap-2">
                      {formula5Examples.map((e, i) => (
                        <button
                          key={e.industry}
                          onClick={() => setActiveExample5(i)}
                          className={`group flex items-center justify-between px-5 py-3.5 rounded-xl text-left transition-all duration-200 ${
                            activeExample5 === i
                              ? 'bg-rose-500/15 border border-rose-500/40 text-white'
                              : 'glass hover:bg-white/8 text-slate-400 hover:text-white'
                          }`}
                        >
                          <div>
                            <div className="text-sm font-semibold">{e.industry}</div>
                            <div className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors mt-0.5">{e.task}</div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className={`text-sm font-bold font-mono ${activeExample5 === i ? 'text-rose-400' : 'text-slate-500'}`}>
                              {formatDollar(e.plannedSalary - e.agentMonthly * 12)}/yr
                            </span>
                            <ChevronRight size={16} className={`shrink-0 transition-transform ${activeExample5 === i ? 'text-rose-400 translate-x-0.5' : 'text-slate-600'}`} />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom callout */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={formulaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center glass rounded-2xl px-8 py-6"
          >
            <p className="text-slate-300 text-base md:text-lg">
              Your revenue workforce eliminates the cost <span className="text-rose-400 font-bold">and</span> captures the revenue —
              all 5 formulas working for you simultaneously, around the clock.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

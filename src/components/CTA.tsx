import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';

const STEPS = [
  {
    question: 'What type of business do you run?',
    options: ['Home Services (HVAC, plumbing, etc.)', 'Healthcare / Med Spa', 'Agency / Consulting', 'Law Firm', 'Local Business', 'Other'],
  },
  {
    question: 'How many inbound calls/leads do you get per week?',
    options: ['Under 20', '20–50', '50–100', '100+'],
  },
  {
    question: 'What is your biggest challenge right now?',
    options: [
      'Missing calls after hours or on weekends',
      'Slow follow-up on leads',
      'Too much time on manual scheduling',
      'No system to qualify inbound leads',
      'High staffing costs for reception/admin',
    ],
  },
  {
    question: 'What is your monthly revenue?',
    options: ['Under $50k / mo', '$50k – $200k / mo', '$200k – $500k / mo', '$500k+ / mo'],
  },
];

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const isLastStep = step === STEPS.length;

  const select = (option: string) => {
    const next = [...answers];
    next[step] = option;
    setAnswers(next);
    setTimeout(() => setStep(step + 1), 220);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setEmailError('');
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  const progress = Math.round((step / STEPS.length) * 100);

  return (
    <section className="py-28 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-sky-600/6 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-20">

          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex-1 lg:pt-4"
          >
            <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-5">Get Started</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6">
              Get your custom<br />
              <span className="text-gradient">AI system built.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-md">
              Answer 4 quick questions. We'll send you a free AI Automation Audit within 24 hours — then decide if it makes sense to talk.
            </p>

            <div className="flex flex-col gap-4">
              {[
                'No commitment required',
                'Free AI Automation Audit within 24 hours',
                'Your system live in 7 days once you proceed',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/8">
              <p className="text-slate-500 text-xs uppercase tracking-widest mb-4 font-semibold">What happens next</p>
              <div className="flex flex-col gap-3">
                {[
                  { step: '01', text: 'We review your business needs' },
                  { step: '02', text: 'You receive your free AI Automation Audit' },
                  { step: '03', text: 'We schedule a 30-minute strategy call' },
                  { step: '04', text: 'Your AI system is live within 7 days' },
                ].map((s) => (
                  <div key={s.step} className="flex items-center gap-3">
                    <span
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black shrink-0"
                      style={{ background: 'rgba(56,189,248,0.1)', color: '#38bdf8', border: '1px solid rgba(56,189,248,0.2)' }}
                    >
                      {s.step}
                    </span>
                    <span className="text-slate-400 text-sm">{s.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: quiz form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex-1 w-full"
          >
            <div
              className="rounded-2xl overflow-hidden w-full"
              style={{ background: '#0a1628', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {/* Header */}
              <div className="px-7 pt-7 pb-5 border-b border-white/6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-white font-bold text-sm">Get your custom AI system</p>
                  {!submitted && (
                    <span className="text-slate-500 text-xs font-medium">
                      {isLastStep ? 'Final step' : `${step + 1} of ${STEPS.length}`}
                    </span>
                  )}
                </div>
                {!submitted && (
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(90deg, #0ea5e9, #22d3ee)' }}
                      initial={{ width: '0%' }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                    />
                  </div>
                )}
              </div>

              <div className="px-7 py-7">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="text-center py-8"
                    >
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                        style={{ background: 'rgba(52,211,153,0.12)', border: '1px solid rgba(52,211,153,0.25)' }}
                      >
                        <CheckCircle2 size={28} className="text-emerald-400" />
                      </div>
                      <h3 className="text-white text-xl font-bold mb-2">Application received</h3>
                      <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
                        Check your inbox — your free AI Automation Audit will arrive within 24 hours.
                      </p>
                    </motion.div>
                  ) : !isLastStep ? (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.28 }}
                    >
                      <p className="text-white font-semibold text-base mb-5 leading-snug">
                        {STEPS[step].question}
                      </p>
                      <div className="flex flex-col gap-2.5">
                        {STEPS[step].options.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => select(opt)}
                            className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                            style={{
                              background: answers[step] === opt ? 'rgba(56,189,248,0.1)' : 'rgba(255,255,255,0.04)',
                              border: answers[step] === opt ? '1px solid rgba(56,189,248,0.35)' : '1px solid rgba(255,255,255,0.07)',
                            }}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="email"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.28 }}
                    >
                      <p className="text-white font-semibold text-base mb-2 leading-snug">
                        Where should we send your free AI Automation Audit?
                      </p>
                      <p className="text-slate-500 text-xs mb-6">No spam. Unsubscribe any time.</p>

                      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div>
                          <input
                            type="email"
                            placeholder="you@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3.5 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all duration-200"
                            style={{
                              background: 'rgba(255,255,255,0.05)',
                              border: emailError ? '1px solid rgba(248,113,113,0.5)' : '1px solid rgba(255,255,255,0.1)',
                            }}
                          />
                          {emailError && (
                            <p className="text-red-400 text-xs mt-1.5">{emailError}</p>
                          )}
                        </div>

                        <button
                          type="submit"
                          disabled={submitting}
                          className="group inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-white font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                          style={{
                            background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
                            boxShadow: '0 8px 24px rgba(14,165,233,0.3)',
                          }}
                        >
                          {submitting ? (
                            <Loader2 size={16} className="animate-spin" />
                          ) : (
                            <>
                              Send my free Automation Audit
                              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                            </>
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={() => setStep(step - 1)}
                          className="text-xs text-slate-600 hover:text-slate-400 transition-colors text-center"
                        >
                          Go back
                        </button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Or just book a call */}
            <p className="text-center text-slate-500 text-xs mt-5">
              Prefer to skip the form?{' '}
              <a
                href="https://cal.com/fouad-shariff-a4ffvv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 transition-colors font-medium"
              >
                Book a call directly
              </a>
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

import { Bot, Twitter, Linkedin } from 'lucide-react';

const sectionLinks = [
  { label: 'Services', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Industries', href: '#industries' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Results', href: '#testimonials' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center">
                <Bot size={18} className="text-white" />
              </div>
              <span className="font-semibold text-lg text-white">AgentOS Factory</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              We build AI-powered business automation systems that capture leads, answer customers instantly, book appointments, and increase revenue 24/7.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <Twitter size={15} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <Linkedin size={15} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Navigate</h4>
            <ul className="flex flex-col gap-2.5">
              {sectionLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Get in touch</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Ready to automate your business? Book a free AI audit and we'll have your system live in 7 days.
            </p>
            <a
              href="https://cal.com/fouad-shariff-a4ffvv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-white text-sm font-medium transition-colors duration-200"
            >
              Book a free AI audit
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} AgentOS Factory. All rights reserved.</p>
          <p className="text-slate-500 text-sm">AI-powered automation for service businesses that demand results.</p>
        </div>
      </div>
    </footer>
  );
}

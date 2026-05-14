import { Bot, Twitter, Linkedin } from 'lucide-react';

const sectionLinks = [
  { label: 'Capabilities', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
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
              <span className="font-semibold text-lg text-white">Sales Workforce AI</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              A dedicated appointment-setting team that prospects, follows up, and books meetings — so your closers only talk to people ready to buy.
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
              Ready to build your revenue workforce? Book a strategy call and we'll have your team live in 48 hours.
            </p>
            <a
              href="https://cal.com/fouad-shariff-a4ffvv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-white text-sm font-medium transition-colors duration-200"
            >
              Book a strategy call
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} Sales Workforce AI. All rights reserved.</p>
          <p className="text-slate-500 text-sm">Built for founders and revenue teams who demand results.</p>
        </div>
      </div>
    </footer>
  );
}

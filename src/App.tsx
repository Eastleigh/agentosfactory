import { Component, type ReactNode } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PoweredBy from './components/PoweredBy';
import Stats from './components/Stats';
import AIAgents from './components/AIAgents';
import Features from './components/Features';
import WhoItsFor from './components/WhoItsFor';
import Comparison from './components/Comparison';
import ProductScreenshots from './components/ProductScreenshots';
import HowItWorks from './components/HowItWorks';
import LaunchTimeline from './components/LaunchTimeline';
import Pricing from './components/Pricing';
import Guarantee from './components/Guarantee';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

class ErrorBoundary extends Component<{ children: ReactNode }, { error: string | null }> {
  state = { error: null };
  static getDerivedStateFromError(e: Error) { return { error: e.message + '\n' + e.stack }; }
  render() {
    if (this.state.error) {
      return (
        <div style={{ background: '#0f172a', color: '#f87171', padding: '2rem', fontFamily: 'monospace', whiteSpace: 'pre-wrap', fontSize: '13px' }}>
          <strong style={{ fontSize: '16px' }}>Runtime Error — REPORT THIS:</strong>{'\n\n'}{this.state.error}
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <PoweredBy />
        <WhoItsFor />
        <Stats />
        <AIAgents />
        <Features />
        <Comparison />
        <ProductScreenshots />
        <HowItWorks />
        <LaunchTimeline />
        <Pricing />
        <Guarantee />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
    </ErrorBoundary>
  );
}

export default App;

import React from 'react';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import TechGrid from './components/TechGrid';
import Gallery from './components/Gallery';
import Services from './components/WhyUs';
import Mission from './components/Mission';
import Footer from './components/Footer';

import { Analytics } from '@vercel/analytics/react';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="min-h-screen w-full bg-silver text-navy selection:bg-accent-blue/30 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Introduction />
      <Gallery />
      <TechGrid />
      <Services />
      <Mission />
      <Footer />
      <Analytics />
    </main>
  );
}

export default App;

import { useCallback, useEffect, useState } from 'react';
import { About } from './components/About';
import { Background } from './components/Background';
import { BackToTop, ScrollProgress } from './components/Chrome';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { ThemeProvider } from './context/ThemeContext';

function prefersReducedMotion() {
  return Boolean(window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches);
}

function resetToHome() {
  if (typeof window === 'undefined') return;
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
  if (window.location.hash) {
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
  }
  window.scrollTo(0, 0);
}

export default function App() {
  const [booting, setBooting] = useState(() => (typeof window === 'undefined' ? true : !prefersReducedMotion()));
  const finishBoot = useCallback(() => {
    resetToHome();
    setBooting(false);
  }, []);

  useEffect(() => {
    resetToHome();
  }, []);

  useEffect(() => {
    if (!booting) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [booting]);

  return (
    <ThemeProvider>
      <Background />
      <ScrollProgress />
      {booting ? <Loader onDone={finishBoot} /> : null}
      <Navbar />
      <main id="content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </ThemeProvider>
  );
}

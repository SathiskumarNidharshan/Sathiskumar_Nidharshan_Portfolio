import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { scrollToSection } from '../hooks/useActiveSection';

export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  if (reduce) return null;

  return <motion.div style={{ scaleX }} className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-accent" />;
}

export function BackToTop() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (value) => {
      const next = value > 520;
      setVisible((current) => (current === next ? current : next));
    });
  }, [scrollY]);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => scrollToSection('home')}
      className={`fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-40 grid h-12 w-12 place-items-center rounded-full bg-accent text-accent-ink shadow-lift transition duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <ArrowUp size={18} />
    </button>
  );
}

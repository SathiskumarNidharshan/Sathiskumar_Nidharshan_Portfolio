import { motion, useReducedMotion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { profile } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';

export function Loader({ onDone }: { onDone: () => void }) {
  const reduce = useReducedMotion();
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (reduce) {
      onDone();
      return undefined;
    }
    const timer = window.setTimeout(() => setLeaving(true), 1450);
    return () => window.clearTimeout(timer);
  }, [onDone, reduce]);

  if (reduce) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-canvas px-6"
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
      animate={{ opacity: leaving ? 0 : 1 }}
      transition={{ duration: leaving ? 0.45 : 0 }}
      onAnimationComplete={() => {
        if (leaving) onDone();
      }}
    >
      <div className="w-full max-w-md text-center">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.42em] text-mute">Portfolio</p>
        <p className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-5xl">
          {profile.firstName}
          <span className="text-gradient block">{profile.lastName}</span>
        </p>
        <div className="mx-auto mt-8 h-px w-48 overflow-hidden bg-line">
          <motion.div
            className="h-full origin-left bg-accent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] as const }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDark}
      className="grid h-10 w-10 place-items-center rounded-full border border-line bg-card text-ink"
    >
      <span className="grid place-items-center" key={theme}>
        {isDark ? <Sun size={16} /> : <Moon size={16} />}
      </span>
    </button>
  );
}

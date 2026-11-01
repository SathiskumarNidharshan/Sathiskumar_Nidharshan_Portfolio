import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navItems, profile, sectionIds, type SectionId } from '../data/portfolio';
import { scrollToSection, useActiveSection } from '../hooks/useActiveSection';
import { ThemeToggle } from './Loader';

export function Navbar() {
  const [active, setActive] = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const go = (id: SectionId) => {
    setOpen(false);
    setActive(id);
    scrollToSection(id);
  };

  return (
    <header className="page-shell fixed inset-x-0 top-0 z-50 pt-3">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
      >
        Skip to content
      </a>
      <div
        className={`glass relative flex w-full items-center justify-between rounded-full px-3 py-2 pl-4 ${
          scrolled || open ? 'shadow-lift' : ''
        }`}
      >
        <a
          href="#home"
          onClick={(event) => {
            event.preventDefault();
            go('home');
          }}
          className="relative z-10 flex items-center gap-2.5 rounded-full pr-2"
        >
          <span className="ring-gradient grid h-9 w-9 place-items-center rounded-full bg-card font-display text-xs font-semibold text-ink">
            SN
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight text-ink xl:block">
            {profile.name}
          </span>
        </a>

        <nav
          className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-0.5 lg:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const current = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={current ? 'page' : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  go(item.id);
                }}
                className={`pointer-events-auto relative rounded-full px-2.5 py-2 text-[12px] font-medium transition-colors xl:px-3 xl:text-[13px] ${
                  current ? 'text-ink' : 'text-mute hover:text-ink'
                }`}
              >
                {current ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-soft"
                    transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 34 }}
                  />
                ) : null}
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="relative z-10 flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-card text-ink lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            className="glass mt-2 max-h-[calc(100dvh-5.5rem)] w-full overflow-y-auto rounded-3xl p-4 lg:hidden"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                aria-current={active === item.id ? 'page' : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  go(item.id);
                }}
                initial={reduce ? false : { opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: reduce ? 0 : index * 0.04 }}
                className={`block rounded-2xl px-4 py-3 font-display text-3xl tracking-tight ${
                  active === item.id ? 'bg-soft text-ink' : 'text-mute'
                }`}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

import { motion, useReducedMotion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { marqueeItems, profile } from '../data/portfolio';
import { scrollToSection } from '../hooks/useActiveSection';
import { NextSectionLink } from './NextSectionLink';

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="relative flex min-h-screen scroll-mt-24 flex-col pt-28">
      <div className="page-shell">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-mute"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-aqua motion-safe:animate-pulse" />
          {profile.location}
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease }}
          className="mt-6 max-w-full font-display text-[clamp(2.35rem,7vw,9.5rem)] font-semibold leading-[0.88] tracking-[-0.05em] text-ink"
        >
          <span className="block">{profile.firstName}</span>
          <span className="text-gradient block">{profile.lastName}</span>
        </motion.h1>

        <div className="mt-8 grid min-w-0 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] xl:gap-20">
          <div>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease }}
              className="font-display text-2xl tracking-tight text-ink sm:text-3xl"
            >
              {profile.role}
            </motion.p>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease }}
              className="mt-3 max-w-xl text-base leading-relaxed text-mute sm:text-lg"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="btn btn-primary"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection('projects');
                }}
              >
                View projects
              </a>
              <a className="btn btn-ghost" href={profile.cv} download={profile.cvFileName}>
                <Download size={16} />
                Download CV
              </a>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <a href={profile.phoneHref} className="inline-flex min-h-11 items-center gap-2 text-sm text-mute hover:text-ink">
                <Phone size={15} />
                {profile.phoneDisplay}
              </a>
              <a href={`mailto:${profile.email}`} className="inline-flex min-h-11 items-center gap-2 break-all text-sm text-mute hover:text-ink">
                <Mail size={15} />
                {profile.email}
              </a>
              <span className="flex items-center gap-2">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="grid h-10 w-10 place-items-center rounded-full border border-line bg-card text-ink hover:bg-soft"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="grid h-10 w-10 place-items-center rounded-full border border-line bg-card text-ink hover:bg-soft"
                >
                  <Github size={16} />
                </a>
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="relative mx-auto aspect-square w-full max-w-[460px] overflow-hidden lg:max-w-full"
          >
            <div className="spin-slow absolute inset-4 rounded-full border border-dashed border-line" />
            <div className="absolute inset-[12%] overflow-hidden rounded-full shadow-lift ring-gradient">
              <img
                src={profile.portrait}
                alt={`Portrait of ${profile.name}`}
                fetchPriority="high"
                className="h-full w-full scale-110 translate-y-[3%] object-cover object-[center_10%]"
              />
            </div>
            <div className="absolute bottom-6 left-3 max-w-[min(220px,70%)] rounded-2xl border border-line bg-elevated px-4 py-3 shadow-lift backdrop-blur-md sm:bottom-8 sm:left-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-mute">Currently</p>
              <p className="mt-1 font-display text-sm font-semibold leading-snug text-ink">Software Engineer</p>
              <p className="text-xs text-mute">LTL Transformers (Pvt) Ltd</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-16 min-w-0 border-y border-line py-4">
        <div className="pr-20 md:hidden">
          <div className="flex gap-8 overflow-x-auto pl-5 [-ms-overflow-style:none] [scrollbar-width:none] sm:pl-8 [&::-webkit-scrollbar]:hidden">
            {marqueeItems.map((item, index) => (
              <span key={`${item}-${index}`} className="flex shrink-0 items-center gap-8">
                <span className="font-display text-sm uppercase tracking-[0.18em] text-mute">{item}</span>
                <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
              </span>
            ))}
          </div>
        </div>
        <div className="marquee hidden md:block" aria-hidden="true">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center gap-8 pr-8">
                {marqueeItems.map((item) => (
                  <span key={`${copy}-${item}`} className="flex items-center gap-8">
                    <span className="font-display text-sm uppercase tracking-[0.18em] text-mute">{item}</span>
                    <span className="h-1 w-1 rounded-full bg-accent" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-6 mt-8">
        <NextSectionLink id="about" label="About" />
      </div>
    </section>
  );
}

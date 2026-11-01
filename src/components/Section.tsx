import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { NextSectionLink } from './NextSectionLink';

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 26 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function Section({
  id,
  index,
  next,
  children,
  className = '',
}: {
  id: string;
  index?: string;
  next?: { id: string; label: string };
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative scroll-mt-24 py-24 md:py-32 ${className}`}>
      {index ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-6 select-none font-display text-[6.5rem] font-semibold leading-none text-watermark sm:right-8 sm:text-[9rem] xl:right-[max(2.5rem,3vw)] xl:text-[12rem]"
        >
          {index}
        </span>
      ) : null}
      <div className="page-shell relative">
        {children}
        {next ? (
          <div className="mt-14">
            <NextSectionLink id={next.id} label={next.label} />
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  text,
}: {
  index: string;
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <Reveal className="mb-12 max-w-2xl md:mb-16">
      <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.28em] text-accent">
        {index} — {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-relaxed text-mute sm:text-lg">{text}</p> : null}
    </Reveal>
  );
}

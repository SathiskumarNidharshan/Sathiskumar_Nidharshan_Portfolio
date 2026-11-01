import { useEffect, useState } from 'react';
import type { SectionId } from '../data/portfolio';

function resolveActiveSection(ids: readonly SectionId[]): SectionId {
  const first = ids[0];
  if (typeof window === 'undefined') return first;

  const scrollBottom = window.scrollY + window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;

  if (scrollBottom >= docHeight - 4) {
    return ids[ids.length - 1] ?? first;
  }

  const spyLine = window.scrollY + Math.min(140, window.innerHeight * 0.22);

  let current = first;
  for (const id of ids) {
    const element = document.getElementById(id);
    if (!element) continue;
    const top = element.getBoundingClientRect().top + window.scrollY;
    if (top <= spyLine + 1) {
      current = id;
    }
  }

  return current;
}

export function useActiveSection(ids: readonly SectionId[]) {
  const [active, setActive] = useState<SectionId>(ids[0]);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const next = resolveActiveSection(ids);
      setActive((current) => (current === next ? current : next));
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ids]);

  return [active, setActive] as const;
}

export function scrollToSection(id: string) {
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
  document.getElementById(id)?.scrollIntoView({
    behavior: reduce ? 'auto' : 'smooth',
    block: 'start',
  });
}

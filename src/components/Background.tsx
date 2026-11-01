import { useEffect } from 'react';

export function Background() {
  useEffect(() => {
    const fine = window.matchMedia?.('(pointer: fine)')?.matches;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    if (!fine || reduce) return undefined;

    const root = document.documentElement;
    const onMove = (event: PointerEvent) => {
      root.style.setProperty('--mx', `${event.clientX}px`);
      root.style.setProperty('--my', `${event.clientY}px`);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-canvas" />
      <div className="orb orb-a" />
      <div className="orb orb-b" />
      <div className="grid-fade absolute inset-0" />
      <div className="grain absolute inset-0" />
      <div className="cursor-glow" />
    </div>
  );
}

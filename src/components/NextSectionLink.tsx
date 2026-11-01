import { ArrowDown } from 'lucide-react';
import { scrollToSection } from '../hooks/useActiveSection';

export function NextSectionLink({ id, label }: { id: string; label: string }) {
  return (
    <a
      href={`#${id}`}
      onClick={(event) => {
        event.preventDefault();
        scrollToSection(id);
      }}
      className="mx-auto flex min-h-11 w-fit items-center gap-2 px-3 text-xs uppercase tracking-[0.24em] text-mute hover:text-ink"
    >
      <ArrowDown size={14} className="motion-safe:animate-bounce" />
      {label}
    </a>
  );
}

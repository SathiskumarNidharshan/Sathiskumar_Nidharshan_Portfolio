import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/portfolio';

const socials = [
  { href: profile.linkedin, label: 'LinkedIn', icon: Linkedin },
  { href: profile.github, label: 'GitHub', icon: Github },
  { href: `mailto:${profile.email}`, label: 'Email', icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="page-shell flex flex-col gap-8 py-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight text-ink">{profile.name}</p>
          <p className="mt-3 max-w-xl text-sm text-mute">{profile.footerRoles.join(' · ')}</p>
        </div>
        <div className="flex items-center gap-2">
          {socials.map((item) => {
            const Icon = item.icon;
            const external = item.href.startsWith('http');
            return (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="grid h-11 w-11 place-items-center rounded-full border border-line bg-card text-ink transition hover:-translate-y-0.5 hover:text-accent"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
      <div className="border-t border-line">
        <div className="page-shell flex flex-col gap-2 py-5 pr-20 text-sm text-mute sm:flex-row sm:items-center sm:justify-between sm:pr-[max(2rem,3vw)]">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Database, Monitor, Server, Wrench, type LucideIcon } from 'lucide-react';
import { useState } from 'react';
import type { IconType } from 'react-icons';
import { DiVisualstudio } from 'react-icons/di';
import {
  SiBootstrap,
  SiCss,
  SiDotnet,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiOpenjdk,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSqlite,
  SiSharp,
  SiTailwindcss,
  SiTypescript,
  SiUbuntu,
  SiVite,
  SiVuedotjs,
  SiWordpress,
} from 'react-icons/si';
import { VscAzureDevops, VscVscode } from 'react-icons/vsc';
import { skillGroups, type SkillGroupId } from '../data/portfolio';
import { Section, SectionHeading } from './Section';

type SkillMark = {
  Icon?: IconType;
  src?: string;
  color?: string;
};

const skillMarks: Record<string, SkillMark[]> = {
  React: [{ Icon: SiReact, color: '#61DAFB' }],
  'Vue.js': [{ Icon: SiVuedotjs, color: '#42B883' }],
  Flutter: [{ Icon: SiFlutter, color: '#02569B' }],
  TypeScript: [{ Icon: SiTypescript, color: '#3178C6' }],
  JavaScript: [{ Icon: SiJavascript, color: '#F7DF1E' }],
  HTML: [{ Icon: SiHtml5, color: '#E34F26' }],
  CSS: [{ Icon: SiCss, color: '#663399' }],
  Vite: [{ Icon: SiVite, color: '#646CFF' }],
  Bootstrap: [{ Icon: SiBootstrap, color: '#7952B3' }],
  Tailwind: [{ Icon: SiTailwindcss, color: '#06B6D4' }],
  '.NET': [{ Icon: SiDotnet, color: '#512BD4' }],
  'ASP.NET': [{ Icon: SiDotnet, color: '#512BD4' }],
  'Node.js': [{ Icon: SiNodedotjs, color: '#339933' }],
  PHP: [{ Icon: SiPhp, color: '#777BB4' }],
  Laravel: [{ Icon: SiLaravel, color: '#FF2D20' }],
  Python: [{ Icon: SiPython, color: '#3776AB' }],
  Java: [{ Icon: SiOpenjdk, color: '#437291' }],
  'C#': [{ Icon: SiSharp, color: '#512BD4' }],
  'Entity Framework': [{ Icon: SiDotnet, color: '#512BD4' }],
  JWT: [{ Icon: SiJsonwebtokens, color: '#EB5424' }],
  SignalR: [{ Icon: SiDotnet, color: '#512BD4' }],
  MySQL: [{ Icon: SiMysql, color: '#4479A1' }],
  MongoDB: [{ Icon: SiMongodb, color: '#47A248' }],
  Firebase: [{ Icon: SiFirebase, color: '#FFCA28' }],
  'Microsoft SQL Server': [{ src: '/icons/microsoftsqlserver.svg' }],
  PostgreSQL: [{ Icon: SiPostgresql, color: '#4169E1' }],
  SQLite: [{ Icon: SiSqlite, color: '#003B57' }],
  'Git/GitHub': [
    { Icon: SiGit, color: '#F05032' },
    { Icon: SiGithub },
  ],
  Ubuntu: [{ Icon: SiUbuntu, color: '#E95420' }],
  Windows: [{ src: '/icons/windows11.svg' }],
  Wordpress: [{ Icon: SiWordpress, color: '#21759B' }],
  'Azure DevOps': [{ Icon: VscAzureDevops, color: '#0078D7' }],
  'Visual Studio': [{ Icon: DiVisualstudio, color: '#5C2D91' }],
  'VS Code': [{ Icon: VscVscode, color: '#007ACC' }],
};

function SkillLogos({ name }: { name: string }) {
  const marks = skillMarks[name] ?? [];

  return (
    <span className="inline-flex items-center gap-1" aria-hidden="true">
      {marks.map((mark, index) => {
        const Logo = mark.Icon;
        const key = mark.src ?? `${mark.color ?? 'mark'}-${index}`;
        return mark.src ? (
          <img key={key} src={mark.src} alt="" className="h-3.5 w-3.5 shrink-0 object-contain" />
        ) : Logo ? (
          <Logo key={key} size={14} color={mark.color ?? 'currentColor'} />
        ) : null;
      })}
    </span>
  );
}

const icons: Record<SkillGroupId, LucideIcon> = {
  frontend: Monitor,
  backend: Server,
  databases: Database,
  tools: Wrench,
};

type Filter = 'all' | SkillGroupId;

export function Skills() {
  const [filter, setFilter] = useState<Filter>('all');
  const reduce = useReducedMotion();
  const visible = skillGroups.filter((group) => filter === 'all' || group.id === filter);
  const filters: { id: Filter; label: string }[] = [
    { id: 'all', label: 'All' },
    ...skillGroups.map((group) => ({ id: group.id, label: group.title.replace(' Technologies', '').replace(' & Others', '') })),
  ];

  return (
    <Section id="skills" index="03" next={{ id: 'experience', label: 'Experience' }}>
      <SectionHeading
        index="03"
        eyebrow="Skills"
        title="Tools I build with"
        text="Frontend, backend, databases, and the environments I use day to day."
      />

      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter skills">
        {filters.map((item) => {
          const selected = filter === item.id;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(item.id)}
              className={`min-h-11 rounded-full border px-4 py-2 text-sm transition ${
                selected ? 'border-transparent bg-accent text-accent-ink' : 'border-line bg-card text-mute hover:text-ink'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <motion.div layout className={`grid gap-5 ${visible.length > 1 ? 'md:grid-cols-2 2xl:grid-cols-4' : 'w-full'}`}>
        <AnimatePresence mode="popLayout">
          {visible.map((group) => {
            const Icon = icons[group.id];
            return (
              <motion.article
                layout
                key={group.id}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="panel group rounded-3xl p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-soft text-accent">
                    <Icon size={20} />
                  </span>
                  <span className="font-display text-sm text-mute">{group.items.length} skills</span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink">{group.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-full border border-line bg-field px-3 py-1.5 text-sm text-ink transition duration-300 group-hover:border-accent"
                    >
                      <SkillLogos name={item} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

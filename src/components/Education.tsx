import { education } from '../data/portfolio';
import { Reveal, Section, SectionHeading } from './Section';

export function Education() {
  return (
    <Section id="education" index="05" next={{ id: 'projects', label: 'Projects' }}>
      <SectionHeading index="05" eyebrow="Education" title="Education" />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {education.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.06} className={index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}>
            <article className="panel flex h-full flex-col overflow-hidden rounded-3xl transition duration-300 motion-safe:hover:-translate-y-1">
              <img src={item.image} alt="" loading="lazy" className="h-40 w-full object-cover xl:h-56 2xl:h-64" />
              <div className="flex flex-1 flex-col p-6">
                <p className="font-display text-sm font-semibold text-accent">{item.period}</p>
                <h3 className="mt-3 font-display text-xl font-semibold leading-snug tracking-tight text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{item.school}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

import { highlights, profile } from '../data/portfolio';
import { Reveal, Section, SectionHeading } from './Section';

export function About() {
  return (
    <Section id="about" index="02" next={{ id: 'skills', label: 'Skills' }}>
      <SectionHeading index="02" eyebrow="About" title="About me" />
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,46rem)_1fr] xl:gap-16">
        <Reveal>
          <p className="text-lg leading-relaxed text-ink sm:text-xl sm:leading-relaxed">{profile.about}</p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="panel h-full rounded-3xl p-5 transition duration-300 hover:-translate-y-1">
                <p className="font-display text-xs font-semibold tracking-[0.18em] text-accent">0{index + 1}</p>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

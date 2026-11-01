import { projects } from '../data/portfolio';
import { Reveal, Section, SectionHeading } from './Section';

export function Projects() {
  return (
    <Section id="projects" index="06" next={{ id: 'contact', label: 'Contact' }}>
      <SectionHeading
        index="06"
        eyebrow="Projects"
        title="Projects"
        text="Enterprise and academic systems built with React, TypeScript, ASP.NET Core, C#, Laravel, and the MERN stack."
      />
      <div className="space-y-6">
        {projects.map((project, index) => (
          <Reveal key={project.title}>
            <article className="panel group grid overflow-hidden rounded-[1.75rem] md:grid-cols-2">
              <div className={`relative min-h-[230px] overflow-hidden xl:min-h-[380px] 2xl:min-h-[460px] ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <img
                  src={project.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 motion-safe:group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <h3 className="font-display text-3xl font-semibold tracking-tight text-ink">{project.title}</h3>
                {'company' in project && project.company ? (
                  <p className="mt-1 text-sm font-medium text-ink/80">{project.company}</p>
                ) : null}
                <p className="mt-4 max-w-xl leading-relaxed text-mute">{project.summary}</p>
                {'points' in project && project.points?.length ? (
                  <ul className="mt-5 space-y-2.5">
                    {project.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed text-mute">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-line bg-field px-3 py-1 text-xs font-medium text-ink">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

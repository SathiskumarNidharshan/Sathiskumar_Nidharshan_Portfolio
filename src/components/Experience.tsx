import { experience } from '../data/portfolio';
import { Reveal, Section, SectionHeading } from './Section';

export function Experience() {
  return (
    <Section id="experience" index="04" next={{ id: 'education', label: 'Education' }}>
      <SectionHeading index="04" eyebrow="Experience" title="Experience" />
      <ol className="relative space-y-6 border-l border-line pl-6 sm:pl-10">
        {experience.map((job, index) => (
          <li key={`${job.role}-${job.period}`} className="relative">
            <span className="absolute -left-[31px] top-8 h-3.5 w-3.5 rounded-full border-[3px] border-canvas bg-accent sm:-left-[47px]" />
            <Reveal>
              <article className="panel grid gap-5 overflow-hidden rounded-3xl p-5 sm:p-7 lg:grid-cols-[1fr_minmax(220px,32%)]">
                <div>
                  <p className="font-display text-sm font-semibold text-accent">
                    {String(index + 1).padStart(2, '0')} · {job.period}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{job.role}</h3>
                  <p className="mt-1 text-mute">{job.company}</p>
                  {'summary' in job && job.summary ? (
                    <p className="mt-4 text-sm leading-relaxed text-mute">{job.summary}</p>
                  ) : null}
                  <ul className="mt-5 space-y-2.5">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed text-mute">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  {'skills' in job && job.skills?.length ? (
                    <div className="mt-5">
                      <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-mute">Skills</p>
                      <ul className="flex flex-wrap gap-2">
                        {job.skills.map((skill) => (
                          <li
                            key={skill}
                            className="rounded-full border border-line bg-field px-3 py-1 text-xs font-medium text-ink"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
                <div className="relative h-full min-h-48 overflow-hidden rounded-2xl lg:min-h-[280px]">
                  <img src={job.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}

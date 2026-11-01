import { FormEvent, useState } from 'react';
import { Download, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { profile } from '../data/portfolio';
import { Reveal, Section, SectionHeading } from './Section';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const emptyForm: FormValues = { name: '', email: '', message: '' };

function validate(values: FormValues) {
  const errors: Partial<FormValues> = {};
  if (!values.name.trim()) errors.name = 'Enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Enter a valid email address.';
  if (!values.message.trim()) errors.message = 'Enter a message.';
  return errors;
}

const channels = [
  { label: 'Phone', value: profile.phoneDisplay, href: profile.phoneHref, icon: Phone },
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'LinkedIn', value: 'sathiskumar-nidharshan-a29409216', href: profile.linkedin, icon: Linkedin, external: true },
  { label: 'GitHub', value: 'SathiskumarNidharshan', href: profile.github, icon: Github, external: true },
];

export function Contact() {
  const [values, setValues] = useState<FormValues>(emptyForm);
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [notice, setNotice] = useState('');

  const update = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setNotice('');
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setNotice('');
      return;
    }

    const subject = `Portfolio message from ${values.name.trim()}`;
    const body = `${values.message.trim()}\n\nFrom: ${values.name.trim()}\nEmail: ${values.email.trim()}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setNotice('Your email app should open with this message ready to send.');
  };

  return (
    <Section id="contact" index="07">
      <SectionHeading index="07" eyebrow="Contact" title="Get in touch" />
      <div className="grid gap-6 lg:grid-cols-2 xl:gap-10">
        <Reveal>
          <div className="panel h-full rounded-[1.75rem] p-6 sm:p-8">
            <h3 className="font-display text-3xl font-semibold tracking-tight text-ink">Let&apos;s connect</h3>
            <p className="mt-4 leading-relaxed text-mute">{profile.contactIntro}</p>
            <ul className="mt-8 space-y-3">
              {channels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      {...(channel.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                      className="flex min-w-0 items-center gap-4 rounded-2xl border border-line bg-field px-4 py-3 transition hover:border-accent"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-soft text-accent">
                        <Icon size={18} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs uppercase tracking-[0.16em] text-mute">{channel.label}</span>
                        <span className="block break-words text-sm text-ink">{channel.value}</span>
                      </span>
                    </a>
                  </li>
                );
              })}
              <li className="flex items-center gap-4 rounded-2xl border border-line bg-field px-4 py-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-soft text-accent">
                  <MapPin size={18} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.16em] text-mute">Location</span>
                  <span className="block text-sm text-ink">{profile.location}</span>
                </span>
              </li>
            </ul>
            <a className="btn btn-ghost mt-6" href={profile.cv} download={profile.cvFileName}>
              <Download size={16} />
              Download CV
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form className="panel ring-gradient rounded-[1.75rem] py-6 pl-6 pr-20 sm:p-8" onSubmit={onSubmit} noValidate>
            <div className="space-y-5">
              <Field
                id="contact-name"
                label="Name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                value={values.name}
                error={errors.name}
                onChange={(value) => update('name', value)}
              />
              <Field
                id="contact-email"
                label="Email"
                type="email"
                autoComplete="email"
                placeholder="you@email.com"
                value={values.email}
                error={errors.email}
                onChange={(value) => update('email', value)}
              />
              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-ink">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  className="field resize-none"
                  placeholder="Your message..."
                  value={values.message}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  onChange={(event) => update('message', event.target.value)}
                />
                {errors.message ? (
                  <p id="contact-message-error" className="mt-2 text-sm text-accent">
                    {errors.message}
                  </p>
                ) : null}
              </div>
            </div>
            <button type="submit" className="btn btn-primary mt-6 w-full">
              Send message
            </button>
            <p className="mt-3 text-sm text-mute" aria-live="polite">
              {notice || 'Sending opens your email app with this message addressed to me.'}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  id,
  label,
  type,
  value,
  placeholder,
  autoComplete,
  error,
  onChange,
}: {
  id: string;
  label: string;
  type: string;
  value: string;
  placeholder: string;
  autoComplete: string;
  error?: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        className="field"
        placeholder={placeholder}
        value={value}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-accent">
          {error}
        </p>
      ) : null}
    </div>
  );
}

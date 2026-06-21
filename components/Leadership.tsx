import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const involvement = [
  {
    org: "Chabad Jewish Student Group",
    role: "Israel Trip Coordinator",
  },
  {
    org: "Tau Epsilon Phi",
    role: "Brotherhood Chair",
  },
];

const leadership = [
  {
    org: "Management Leadership for Tomorrow (MLT)",
    role: "Career Prep Fellow",
    period: "February 2025 – Present",
    highlight: "Selected from 3,000+ applicants",
    desc: "Elite 18+-month leadership development program. Collaborate with Fortune 500 executives through exclusive seminars, business case studies, and professional development workshops focused on career acceleration.",
    logo: "/mlt-logo.png",
  },
  {
    org: "TAMID Group",
    role: "Investment Analyst",
    period: "September 2024 – Present",
    highlight: null,
    desc: "Pro-bono consulting for Israeli startups. Led U.S. market-entry analysis for Scoutrix, an AI-powered basketball player development platform, identifying partnership targets and a go-to-market strategy. Also built a marketing strategy for ClariFruit via SWOT, competitive research, and consumer segmentation, and researched AI trends in agriculture.",
    logo: "/tamid-logo.png",
  },
  {
    org: "Society of Hispanic Professional Engineers (SHPE)",
    role: "Industrial Engineer Member",
    period: "January 2023 – Present",
    highlight: null,
    desc: "Organize tutoring workshops and mentorship meetings to empower Latino engineers in STEM, fostering an inclusive environment for academic and career growth across the UF chapter.",
    logo: "/shpe-logo.webp",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-28 px-6 bg-surface/40 border-y border-line">
      <div className="max-w-content mx-auto">
        <SectionHeading
          eyebrow="Leadership & Development"
          title="Building beyond the classroom."
          subtitle="Programs and organizations where I've grown as a leader and contributor."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {leadership.map((l, idx) => (
            <Reveal key={l.org} delay={idx * 0.08}>
              <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-7 transition-shadow hover:shadow-[0_8px_30px_rgba(26,26,26,0.06)]">
                <div className="flex h-16 w-32 items-center justify-center rounded-xl border border-line bg-white p-3">
                  <Image
                    src={l.logo}
                    alt={l.org}
                    width={140}
                    height={56}
                    className="max-h-full max-w-full w-auto h-auto object-contain"
                  />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-ink">
                  {l.org}
                </h3>
                <p className="mt-1 text-sm font-medium text-ember">{l.role}</p>
                <p className="text-xs text-muted">{l.period}</p>

                {l.highlight && (
                  <p className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-ember/10 px-3 py-1 text-xs font-semibold text-ember">
                    ★ {l.highlight}
                  </p>
                )}

                <p className="mt-4 text-sm leading-relaxed text-ink/70">{l.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Community & involvement */}
        <Reveal delay={0.1} className="mt-6">
          <div className="rounded-2xl border border-line bg-surface p-7">
            <p className="eyebrow mb-4">Community &amp; Involvement</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {involvement.map((c) => (
                <div
                  key={c.org}
                  className="flex items-center gap-3 rounded-xl border border-line bg-paper px-4 py-3"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-ember" />
                  <div>
                    <p className="font-medium text-ink">{c.org}</p>
                    <p className="text-sm text-muted">{c.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

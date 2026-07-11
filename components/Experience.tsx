import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const jobs = [
  {
    company: "Visualogyx (VLX)",
    role: "Product & Operations Intern",
    period: "May 2026 - Present",
    location: "Aventura, FL",
    current: true,
    logo: "/vlx-logo.png",
    bullets: [
      "Revamped the CRM's lead management module and debugged core platform functionality, building automated workflows that streamlined the sales funnel and reduced manual data entry across the team.",
      "Built custom, reusable Claude skills adopted by the team, including a prompt builder for an internal AI template feature and an automated one-pager generator, and used MCP connectors to automate recurring CRM tasks.",
      "Produced email marketing campaigns and sales collateral, and demoed product features to clients and prospective leads in both English and Spanish, translating technical capabilities into clear business value.",
    ],
  },
  {
    company: "Building Engineering Consultants, Inc. (BECI)",
    role: "Project Manager / Engineer Intern",
    period: "June 2025 - August 2025",
    location: "Miami, FL",
    current: false,
    logo: "/beci-logo.png",
    bullets: [
      "Conducted detailed on-site inspections (balcony/railing, moisture/infrared, stucco, roof) to assess structural integrity per Florida building code and delivered technical reports guiding developers on required repairs.",
      "Generated comprehensive documentation used in repairs, legal cases, and long-term maintenance planning across multiple concurrent commercial and residential projects.",
      "Attended high-level client meetings with the branch manager, collaborating with developers, subcontractors, and city officials to align on scopes, timelines, and budgets.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-surface/40 border-y border-line">
      <div className="max-w-content mx-auto">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked."
          subtitle="Hands-on roles across operations, product, and engineering consulting."
        />

        <div className="mt-16 space-y-10">
          {jobs.map((job, idx) => (
            <Reveal key={job.company} delay={idx * 0.05}>
              <article className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-8 rounded-2xl border border-line bg-surface p-6 md:p-8 transition-shadow hover:shadow-[0_8px_30px_rgba(26,26,26,0.06)]">
                <div className="flex md:flex-col items-center gap-4">
                  <div className="flex h-16 w-32 shrink-0 items-center justify-center rounded-xl border border-line bg-white p-3">
                    <Image
                      src={job.logo}
                      alt={job.company}
                      width={140}
                      height={56}
                      className="max-h-full max-w-full w-auto h-auto object-contain"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-xl font-semibold text-ink">
                      {job.company}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-muted">
                      <span>{job.period}</span>
                      {job.current && (
                        <span className="rounded-full bg-ember/10 px-2.5 py-0.5 text-xs font-semibold text-ember">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="mt-1 font-medium text-ember">{job.role}</p>
                  <p className="text-sm text-muted">{job.location}</p>

                  <ul className="mt-5 space-y-2.5">
                    {job.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex gap-3 text-[15px] leading-relaxed text-ink/75"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const jobs = [
  {
    company: "VLX",
    role: "Operations & Product Development Intern",
    period: "2025 – Present",
    location: "Remote",
    current: true,
    bullets: [
      "Contributing to operations strategy and product development initiatives at a fast-moving technology company",
      "Supporting cross-functional workstreams across product, operations, and business development",
    ],
  },
  {
    company: "Building Engineering Consultants, Inc. (BECI)",
    role: "Project Manager / Engineer Intern",
    period: "June 2025 – August 2025",
    location: "Miami, FL",
    current: false,
    bullets: [
      "Conducted detailed on-site inspections (balcony/railing, moisture/infrared, stucco, roof) to assess structural integrity per Florida building code; delivered technical reports guiding developers on required repairs",
      "Generated comprehensive documentation used in repairs, legal cases, and long-term maintenance planning",
      "Attended high-level client meetings with the branch manager, collaborating with developers, subcontractors, and officials to discuss scopes, timelines, and budgets",
    ],
  },
];

const leadership = [
  {
    org: "Management Leadership for Tomorrow (MLT)",
    role: "Career Prep Fellow",
    period: "Feb 2025 – Present",
    highlight: "Selected from 3,000+ applicants",
    desc: "Elite 18+-month leadership development program. Collaborate with Fortune 500 executives through exclusive seminars, business case studies, and professional development workshops.",
  },
  {
    org: "TAMID Group",
    role: "Investment Analyst",
    period: "Sept 2024 – Present",
    highlight: null,
    desc: "Pro-bono consulting for Israeli startups. Developed a go-to-market strategy for ClariFruit via SWOT analysis, competitive research, and consumer segmentation. Researched AI trends in agriculture.",
  },
  {
    org: "Society of Hispanic Professional Engineers (SHPE)",
    role: "Industrial Engineer Member",
    period: "Jan 2023 – Present",
    highlight: null,
    desc: "Organizing tutoring workshops and mentorship meetings to empower Latino engineers in STEM, fostering an inclusive environment for academic and career growth.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        {/* Professional */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Experience</h2>
          <div className="mt-3 h-1 w-16 bg-[#FA4616] mx-auto rounded-full" />
        </div>

        <div className="space-y-6 mb-20">
          {jobs.map((job) => (
            <div
              key={job.company}
              className={`relative bg-white rounded-xl p-6 shadow-md border-l-4 hover:shadow-xl transition-all hover:-translate-y-0.5 ${
                job.current ? "border-[#FA4616]" : "border-[#003087]"
              }`}
            >
              {job.current && (
                <span className="absolute top-5 right-5 bg-[#FA4616] text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                  Current
                </span>
              )}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#003087]">{job.company}</h3>
                  <p className="text-[#FA4616] font-semibold mt-0.5">{job.role}</p>
                </div>
                <div className="text-sm text-gray-400 mt-2 md:mt-0 md:text-right">
                  <p className="font-medium">{job.period}</p>
                  <p>{job.location}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {job.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600 text-sm leading-relaxed">
                    <span className="text-[#FA4616] mt-1 flex-shrink-0 font-bold">▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Leadership */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Leadership &amp; Development
          </h2>
          <div className="mt-3 h-1 w-16 bg-[#003087] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {leadership.map((l) => (
            <div
              key={l.org}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <h3 className="font-bold text-[#003087] text-sm leading-snug mb-1">{l.org}</h3>
              <p className="text-[#FA4616] text-sm font-semibold mb-1">{l.role}</p>
              <p className="text-xs text-gray-400 mb-3">{l.period}</p>
              {l.highlight && (
                <p className="text-xs font-bold text-[#FA4616] mb-3">
                  ★ {l.highlight}
                </p>
              )}
              <p className="text-xs text-gray-600 leading-relaxed">{l.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

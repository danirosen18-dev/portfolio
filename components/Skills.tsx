import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const categories = [
  {
    title: "Programming",
    skills: ["Python", "AMPL", "VB.NET / Visual Basic .NET", "Excel VBA"],
  },
  {
    title: "Tools & Software",
    skills: [
      "SOLIDWORKS (CSWA Certified)",
      "Gurobi",
      "Microsoft Excel",
      "Arduino",
      "Zoho Flow",
      "Minitab",
      "CAD",
      "Google Workspace",
    ],
  },
  {
    title: "Methods & Analysis",
    skills: [
      "Data Analysis (Regression, PCA, Clustering)",
      "Operations Research (LP, Simplex, B&B)",
      "Work Sampling & MTM-1",
      "Workflow Automation",
      "Factorial ANOVA",
      "Arduino Hardware Integration",
    ],
  },
  {
    title: "Spoken Languages",
    skills: ["English (Native)", "Spanish (Native)", "Hebrew (Conversational)"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-surface/40 border-y border-line">
      <div className="max-w-content mx-auto">
        <SectionHeading eyebrow="Skills & Tools" title="What I work with." />

        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          {categories.map((cat, idx) => (
            <Reveal key={cat.title} delay={idx * 0.06}>
              <div className="h-full rounded-2xl border border-line bg-surface p-7">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {cat.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-line bg-paper px-3 py-1.5 text-sm text-ink/75"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

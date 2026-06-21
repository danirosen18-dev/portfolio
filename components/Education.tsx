import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const credentials = [
  "SOLIDWORKS CSWA Certified",
  "Hispanic Scholarship Fund Recipient",
  "Florida Bright Futures Scholar",
];

const coursework = [
  "Operations Research I",
  "Human Factors & Ergonomics",
  "Data Analysis I",
  "Data Analysis for Industrial Applications",
  "Engineering Economy",
  "Matrix & Numerical Methods",
  "Computational Linear Algebra",
  "Engineering Mechanics – Statics",
  "Computer-Aided Graphics & Design (CAD)",
  "Financial Accounting",
];

export default function Education() {
  return (
    <section id="education" className="py-28 px-6">
      <div className="max-w-content mx-auto">
        <SectionHeading eyebrow="Education" title="Academic foundation." />

        <Reveal className="mt-14">
          <div className="rounded-2xl border border-line bg-surface p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl font-semibold text-ink">
                  University of Florida
                </h3>
                <p className="mt-1 text-lg text-ember font-medium">
                  B.S. Industrial &amp; Systems Engineering
                </p>
                <p className="mt-1 text-ink/70">
                  Minor in Business Administration · Certificate in Engineering Project
                  Management
                </p>
                <p className="mt-1 text-sm text-muted">
                  Herbert Wertheim College of Engineering · Expected December 2027
                </p>
              </div>

              <div className="shrink-0 rounded-xl border border-line bg-paper px-6 py-4 text-center">
                <p className="font-display text-3xl font-semibold text-ink">3.52</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-muted">GPA / 4.00</p>
              </div>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-8 border-t border-line pt-8">
              <div>
                <p className="eyebrow mb-3">Honors &amp; Certifications</p>
                <ul className="space-y-2">
                  {credentials.map((c) => (
                    <li key={c} className="flex items-center gap-3 text-ink/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow mb-3">Relevant Coursework</p>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-line bg-paper px-3 py-1.5 text-sm text-ink/75"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

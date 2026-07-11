"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { links } from "@/lib/links";

type Project = {
  title: string;
  category: string;
  desc: string;
  tech: string[];
  icon: string;
  expandable?: boolean;
  details?: string[];
  paper?: string;
  paperLabel?: string;
  slides?: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: "Personal Finance Tracker",
    category: "Full-Stack Web App",
    desc: "A full-stack personal finance dashboard I designed and built to track spending, cards, and budgets — with interactive charts and an AI assistant (powered by Claude) that answers questions about your finances in plain English.",
    tech: ["Next.js", "TypeScript", "Prisma", "SQLite", "Recharts", "Claude AI"],
    icon: "💸",
    github: links.githubFinance,
  },
  {
    title: "F1 Simulator Ergonomics Study",
    category: "Engineering Research",
    desc: "Led a human factors research study analyzing how seat clearance and steering wheel reach distance affect lap performance in an F1 simulator, using a 3x3 mixed factorial ANOVA design across 6 participants.",
    tech: ["Minitab", "Excel", "Mixed Factorial ANOVA", "Human Factors"],
    icon: "🏎️",
    expandable: true,
    details: [
      "Research question: how do seat clearance and steering wheel reach distance affect lap performance in a simulator?",
      "Designed a 3x3 mixed factorial ANOVA with 6 participants across all treatment combinations.",
      "Served as de facto project manager for a 6-person team; identified and corrected a critical statistical methodology error mid-study.",
      "Coordinated directly with the course professor to validate the revised analytical approach.",
      "Led the construction of the final presentation and full analysis write-up.",
    ],
    paper: "/f1-research-paper.pdf",
    paperLabel: "Research Paper",
    slides: "/f1-presentation-slides.pdf",
  },
  {
    title: "TurnIt Timer",
    category: "Hardware Build",
    desc: "Designed and built a physical countdown timer for classroom use to keep students on task during timed activities. Engineered a full hardware-software system from scratch using an Arduino Uno with potentiometer, servo motor, LED, buzzer, and push button.",
    tech: ["Arduino Uno", "C++", "Potentiometer", "Servo Motor", "LED/Buzzer"],
    icon: "⏱️",
    paper: "/turnit-timer.pdf",
    paperLabel: "Project Overview",
  },
  {
    title: "Birthright Israel — Ops & Logistics",
    category: "Operations & Leadership",
    desc: "Managed end-to-end logistics for Chabad UF's Birthright Israel program: 120+ applicants and 42 students placed, serving as coordinator and on-the-ground counselor during active regional conflict.",
    tech: ["Google Sheets", "Mayanot Portal", "Budget Management", "Group Logistics"],
    icon: "✈️",
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-content mx-auto">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects."
          subtitle="Software builds, engineering research, hardware, and real-world operations work."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <Reveal key={p.title} delay={idx * 0.08}>
              <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-7 transition-shadow hover:shadow-[0_8px_30px_rgba(26,26,26,0.06)]">
                <div className="flex items-center justify-between">
                  <span className="text-2xl" aria-hidden="true">{p.icon}</span>
                  <span className="rounded-full border border-line bg-paper px-3 py-1 text-xs font-medium text-muted">
                    {p.category}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">{p.desc}</p>

                {p.expandable && expanded === p.title && p.details && (
                  <div className="mt-5 border-t border-line pt-4">
                    <p className="eyebrow mb-3">Study Details</p>
                    <ul className="space-y-2">
                      {p.details.map((d) => (
                        <li key={d} className="flex gap-2.5 text-sm text-ink/70">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ember" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-paper px-2.5 py-1 text-xs font-medium text-muted border border-line"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-col gap-3">
                  {p.expandable && (
                    <button
                      onClick={() => setExpanded(expanded === p.title ? null : p.title)}
                      aria-expanded={expanded === p.title}
                      className="flex w-fit items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-ember"
                    >
                      {expanded === p.title ? "Hide details" : "View details"}
                      <span
                        className={`inline-block transition-transform ${
                          expanded === p.title ? "rotate-180" : ""
                        }`}
                      >
                        ↓
                      </span>
                    </button>
                  )}
                  {(p.paper || p.slides || p.github) && (
                    <div className="flex gap-2">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 rounded-lg bg-ink px-3 py-2 text-center text-xs font-semibold text-paper transition-colors hover:bg-ember"
                        >
                          View Code ↗
                        </a>
                      )}
                      {p.paper && (
                        <a
                          href={p.paper}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 rounded-lg bg-ink px-3 py-2 text-center text-xs font-semibold text-paper transition-colors hover:bg-ember"
                        >
                          {p.paperLabel}
                        </a>
                      )}
                      {p.slides && (
                        <a
                          href={p.slides}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 rounded-lg border border-ink/20 px-3 py-2 text-center text-xs font-semibold text-ink transition-colors hover:border-ink"
                        >
                          View Slides
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

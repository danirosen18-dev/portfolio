"use client";

import { motion } from "motion/react";
import Rotating from "./Rotating";
import { links } from "@/lib/links";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const ease = [0.22, 1, 0.36, 1] as const;
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};
// The <h1> is the Largest Contentful Paint element — keep it opaque from the
// start (slide only) so the animation doesn't delay the LCP score.
const headline = {
  hidden: { opacity: 1, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

// Add more greetings here anytime — the component rotates whatever you give it.
const greetings = ["Hello", "Hola", "שלום"];

const credentials = [
  "MLT Career Prep Fellow",
  "HSF Scholar",
  "Bright Futures Scholar",
];

export default function Hero() {
  return (
    <section className="relative min-h-dvh flex items-center px-6 pt-24 pb-16">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-content mx-auto w-full"
      >
        <motion.p
          variants={item}
          className="font-display text-3xl md:text-4xl font-medium text-ink"
        >
          <Rotating items={greetings} />{" "}
          <span aria-hidden="true">👋</span>
        </motion.p>

        <motion.h1
          variants={headline}
          className="mt-3 font-display text-6xl md:text-8xl font-semibold tracking-tight text-ink leading-[0.95]"
        >
          Daniel Rosen
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-2xl text-xl md:text-2xl text-muted leading-relaxed font-light"
        >
          An <span className="text-ink font-normal">industrial engineer</span> with a{" "}
          <span className="text-ink font-normal">business mind</span>.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3"
        >
          <a
            href="#projects"
            className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-all hover:bg-ember hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href={links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-ink/20 px-7 py-3.5 text-sm font-semibold text-ink transition-all hover:border-ink hover:-translate-y-0.5"
          >
            View Résumé
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-ink/20 px-7 py-3.5 text-sm font-semibold text-ink transition-all hover:border-ink hover:-translate-y-0.5"
          >
            LinkedIn
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-ink/20 px-7 py-3.5 text-sm font-semibold text-ink transition-all hover:border-ink hover:-translate-y-0.5"
          >
            GitHub
          </a>
        </motion.div>

        {/* Now strip — current status */}
        <motion.div variants={item} className="mt-8">
          <span className="inline-flex flex-wrap items-center gap-x-2.5 gap-y-1 rounded-full border border-line bg-surface px-4 py-2 text-sm text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-emerald-500 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>Currently:</span>
            <span className="font-medium text-ink">
              Product &amp; Operations Intern @ VLX
            </span>
          </span>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted"
        >
          {credentials.map((c, i) => (
            <span key={c} className="flex items-center gap-6">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-ember/60" />}
              {c}
            </span>
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 hidden sm:block -translate-x-1/2 motion-safe:animate-bounce text-muted/60">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

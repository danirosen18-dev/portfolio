"use client";

import { motion } from "motion/react";
import Rotating from "./Rotating";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const ease = [0.22, 1, 0.36, 1] as const;
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

// Add more greetings here anytime — the component rotates whatever you give it.
const greetings = ["Hello", "Hola", "שלום"];

// The fun, rotating "currently" bit. Edit freely.
const nowItems = [
  "rooting for Arsenal ⚽",
  "deep in a Catan game 🎲",
  "cooking with too much garlic 🍳",
  "chasing the next skydive 🪂",
];

const credentials = [
  "MLT Career Prep Fellow",
  "HSF Scholar",
  "Bright Futures Scholar",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-24 pb-16">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-content mx-auto w-full"
      >
        <motion.p variants={item} className="text-lg text-muted">
          <Rotating items={greetings} className="font-medium text-ink" />{" "}
          <span aria-hidden="true">👋</span>
        </motion.p>

        <motion.p variants={item} className="mt-4 eyebrow">
          Operations · Product · Strategy
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-4 font-display text-6xl md:text-8xl font-semibold tracking-tight text-ink leading-[0.95]"
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
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-ink/20 px-7 py-3.5 text-sm font-semibold text-ink transition-all hover:border-ink hover:-translate-y-0.5"
          >
            View Résumé
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-rosen-"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-ink/20 px-7 py-3.5 text-sm font-semibold text-ink transition-all hover:border-ink hover:-translate-y-0.5"
          >
            LinkedIn
          </a>
        </motion.div>

        {/* Now / currently strip */}
        <motion.div variants={item} className="mt-8">
          <span className="inline-flex flex-wrap items-center gap-x-2.5 gap-y-1 rounded-full border border-line bg-surface px-4 py-2 text-sm text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-medium text-ink">Ops &amp; Product Intern @ VLX</span>
            <span aria-hidden="true">·</span>
            <span>currently</span>
            <Rotating items={nowItems} className="font-medium text-ember" />
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

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted/60">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Wraps children and fades/slides them into view as they enter the viewport.
 * Used across sections for a subtle, consistent scroll-reveal effect.
 * Honors the OS "Reduce Motion" setting via the app-wide <MotionProvider>
 * (MotionConfig reducedMotion="user") in app/layout.tsx.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const }}
    >
      {children}
    </motion.div>
  );
}

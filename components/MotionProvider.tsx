"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * Makes every motion animation on the site honor the OS
 * "Reduce Motion" accessibility setting. `reducedMotion="user"`
 * tells motion to skip transforms/fades for users who opt out.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

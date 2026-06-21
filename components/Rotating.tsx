"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

/**
 * Cycles through a list of strings with a small fade/slide.
 * Reusable — pass any array of items to rotate (greetings, statuses, etc.).
 */
export default function Rotating({
  items,
  interval = 2400,
  className,
}: {
  items: string[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % items.length),
      interval
    );
    return () => clearInterval(id);
  }, [items.length, interval]);

  return (
    <span className={`inline-block ${className ?? ""}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={items[index]}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="inline-block"
          dir="auto"
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // "Ink & Ember" palette
        paper: "#F7F4EF", // warm background
        surface: "#FFFFFF", // cards
        ink: "#1A1A1A", // near-black text
        ember: "#C2410C", // burnt-amber accent
        "ember-soft": "#EA580C", // lighter accent for hovers
        muted: "#6B6B6B", // secondary text
        line: "#E7E2D9", // borders / hairlines
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;

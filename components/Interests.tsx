import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// Uniform tiles — even 3x3 grid, all the same size.
const tiles = [
  {
    emoji: "⚽ 🐊 🏀",
    title: "Sports",
    desc: "Arsenal, the Gators, and all of Miami — Heat, Dolphins, Panthers & Marlins. Gunner for life, competitive at every watch party.",
  },
  {
    emoji: "👨‍👩‍👧‍👦",
    title: "Family",
    desc: "Family is the whole point — my foundation, and the reason behind everything I do.",
  },
  {
    emoji: "🪂",
    title: "Skydiving",
    desc: "Jumped from 14,000 ft over Interlaken — once you've freefallen, everything else feels manageable.",
  },
  {
    emoji: "🌐",
    title: "Trilingual",
    desc: "English · Spanish · Hebrew — raised between Latin and Jewish culture.",
  },
  {
    emoji: "🍳",
    title: "Cooking",
    desc: "A Latin–Jewish Miami kitchen. Always too much garlic.",
  },
  {
    emoji: "🎲",
    title: "Board Games",
    desc: "Game night is sacred, and Catan is home turf. Strategy over luck, every time.",
  },
  {
    emoji: "🧩",
    title: "Problem Solver",
    desc: "Not really an entrepreneur — more a problem solver. I find what's broken and build the fix.",
  },
  {
    emoji: "🏓",
    title: "Ping Pong",
    desc: "Fast hands, faster trash talk. Always down for a match.",
  },
  {
    emoji: "✈️",
    title: "Travel",
    desc: "Always chasing the next stamp in the passport.",
  },
];

export default function Interests() {
  return (
    <section id="interests" className="py-28 px-6">
      <div className="max-w-content mx-auto">
        <SectionHeading
          eyebrow="Beyond the Résumé"
          title="Outside of work."
          subtitle="The things that keep me curious, competitive, and grounded."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4">
          {tiles.map((t, idx) => (
            <Reveal key={t.title} delay={idx * 0.05}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(26,26,26,0.06)]">
                <div className="text-2xl" aria-hidden="true">
                  {t.emoji}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {t.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/70">{t.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const interests = [
  {
    emoji: "🪂",
    title: "Skydiving",
    desc: "Jumped out of a plane at 14,000 ft and have been hooked ever since. Nothing resets your perspective like freefall.",
  },
  {
    emoji: "🏆",
    title: "Sports",
    desc: "Lifelong Miami sports fan (Heat, Dolphins, Panthers) and a die-hard Arsenal supporter. Competitive in the boardroom and the watch party.",
  },
  {
    emoji: "🍳",
    title: "Cooking",
    desc: "Grew up between Latin and Jewish culture in Miami, so my kitchen leans heavily Spanish and Middle Eastern.",
  },
  {
    emoji: "🎲",
    title: "Board Games",
    desc: "Settlers of Catan is my go-to, but any game where strategy beats luck and I'll show up.",
  },
  {
    emoji: "🏓",
    title: "Ping Pong",
    desc: "Competitive table tennis player. Fast reflexes, faster trash talk. Always down for a match.",
  },
  {
    emoji: "💡",
    title: "Entrepreneurship",
    desc: "Obsessed with finding inefficiencies and building things to fix them, whether it's a product, a process, or a pitch.",
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

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.05}>
              <div className="h-full rounded-2xl border border-line bg-surface p-7 transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(26,26,26,0.06)]">
                <div className="text-3xl" aria-hidden="true">{item.emoji}</div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Tile = {
  emoji: string;
  title: string;
  desc: string;
  span?: string;
  variant?: "default" | "ink" | "ember";
  image?: string; // optional background photo (e.g. a freefall shot)
};

// Bento tiles — mix of sizes for a designed, lunchbox-style grid.
const tiles: Tile[] = [
  {
    emoji: "⚽ 🏀 🏈 🏒 ⚾",
    title: "Sports",
    desc: "Arsenal, the Heat, Dolphins, Panthers & Marlins. Gunner for life, Miami loyal — competitive at every watch party.",
    span: "lg:col-span-2",
  },
  {
    emoji: "🪂",
    title: "Skydiving",
    desc: "14,000 ft and hooked. Nothing resets your perspective like freefall.",
    span: "lg:col-span-2 lg:row-span-2",
    variant: "ink",
    image: "/skydiving.png",
  },
  {
    emoji: "🌐",
    title: "Trilingual",
    desc: "English · Spanish · Hebrew.",
    variant: "ember",
  },
  {
    emoji: "👨‍👩‍👧‍👦",
    title: "Family",
    desc: "Family is the whole point — my foundation, and the reason behind everything I do.",
    span: "lg:col-span-2",
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
    desc: "Fast hands, faster trash talk.",
  },
  {
    emoji: "✈️",
    title: "Travel",
    desc: "Always chasing the next stamp in the passport.",
  },
];

function tileClasses(variant: Tile["variant"], hasImage: boolean) {
  if (hasImage) return "border-ink text-paper";
  switch (variant) {
    case "ink":
      return "bg-ink text-paper border-ink";
    case "ember":
      return "bg-ember text-paper border-ember";
    default:
      return "bg-surface text-ink border-line";
  }
}

export default function Interests() {
  return (
    <section id="interests" className="py-28 px-6">
      <div className="max-w-content mx-auto">
        <SectionHeading
          eyebrow="Beyond the Résumé"
          title="Outside of work."
          subtitle="The things that keep me curious, competitive, and grounded."
        />

        <Reveal className="mt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[160px] grid-flow-dense gap-4">
            {tiles.map((t) => {
              const hasImage = Boolean(t.image);
              const lightText = hasImage || (t.variant && t.variant !== "default");
              return (
                <div
                  key={t.title}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-5 transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(26,26,26,0.10)] ${
                    t.span ?? ""
                  } ${tileClasses(t.variant, hasImage)}`}
                >
                  {hasImage && (
                    <>
                      <Image
                        src={t.image as string}
                        alt={t.title}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-ink/50" />
                    </>
                  )}

                  <div className="relative z-10 text-2xl" aria-hidden="true">
                    {t.emoji}
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-display text-lg font-semibold leading-tight">
                      {t.title}
                    </h3>
                    <p
                      className={`mt-1 text-sm leading-relaxed ${
                        lightText ? "text-paper/80" : "text-ink/70"
                      }`}
                    >
                      {t.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const facts = [
  { value: "3.52", label: "GPA / 4.00" },
  { value: "Eng · Esp · Heb", label: "Trilingual" },
  { value: "Venezuelan", label: "Heritage" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-content mx-auto">
        <SectionHeading eyebrow="About" title="Hi, I'm Daniel." />

        <div className="mt-14 grid md:grid-cols-5 gap-12 items-start">
          {/* Photo */}
          <Reveal className="md:col-span-2">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/daniel.jpg"
                alt="Daniel Rosen with UF Gators mascots"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          </Reveal>

          {/* Bio */}
          <Reveal delay={0.1} className="md:col-span-3">
            <p className="text-lg text-ink/80 leading-relaxed mb-5">
              I&apos;m an Industrial and Systems Engineering student at the University of
              Florida&apos;s Herbert Wertheim College of Engineering, pursuing a Minor in Business
              Administration and a Certificate in Engineering Project Management. I&apos;m
              passionate about the intersection of operations, product, and strategy, where
              systems thinking meets real-world execution. Whether I&apos;m optimizing a workflow
              or building out a go-to-market plan, I bring an analytical mindset and a bias
              toward action.
            </p>
            <p className="text-lg text-ink/80 leading-relaxed mb-8">
              I&apos;m a Venezuelan-American with Jewish roots, raised in Miami at the
              intersection of Latin and Jewish culture, which shapes how I think, communicate,
              and connect with people. Trilingual in English, Spanish, and Hebrew, and an MLT
              Career Prep Fellow and HSF recipient. Outside of work and school, you&apos;ll find me
              watching Arsenal or the Heat, cooking something with too much garlic, or arguing over
              Catan strategy. I&apos;m driven by curiosity, competition, and the belief that the
              best problems are the ones nobody&apos;s bothered to solve yet.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="rounded-xl border border-line bg-surface px-4 py-5 text-center"
                >
                  <p className="font-display text-lg font-semibold text-ink">{f.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-muted">{f.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

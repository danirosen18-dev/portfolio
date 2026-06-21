import Reveal from "./Reveal";

/**
 * Consistent section header: small uppercase eyebrow + large serif title,
 * with an optional supporting line. Left-aligned for an editorial feel.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : "text-left"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight text-ink">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-muted leading-relaxed max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 h-px w-full bg-line ${
          align === "center" ? "max-w-xs mx-auto" : "max-w-[8rem]"
        }`}
      />
    </Reveal>
  );
}

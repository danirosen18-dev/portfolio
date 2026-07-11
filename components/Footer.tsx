import Reveal from "./Reveal";
import { links } from "@/lib/links";

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-paper px-6 pt-28 pb-12">
      <div className="max-w-content mx-auto">
        <Reveal>
          <p className="eyebrow">Get in touch</p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-semibold tracking-tight">
            Let&apos;s build something.
          </h2>
          <p className="mt-5 max-w-md text-paper/60 leading-relaxed">
            Whether it&apos;s an opportunity, a collaboration, or just a conversation,
            my inbox is always open.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3">
            <a
              href={`mailto:${links.email}`}
              className="rounded-full bg-ember px-7 py-3.5 text-sm font-semibold text-paper transition-all hover:bg-ember-soft hover:-translate-y-0.5"
            >
              {links.email}
            </a>
            <a
              href={`tel:${links.phone}`}
              className="rounded-full border border-paper/20 px-7 py-3.5 text-sm font-semibold text-paper transition-all hover:border-paper hover:-translate-y-0.5"
            >
              {links.phoneDisplay}
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-paper/20 px-7 py-3.5 text-sm font-semibold text-paper transition-all hover:border-paper hover:-translate-y-0.5"
            >
              LinkedIn
            </a>
          </div>
        </Reveal>

        <div className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-paper/10 pt-8 text-sm text-paper/50">
          <p>© {new Date().getFullYear()} Daniel Rosen</p>
          <p>Industrial &amp; Systems Engineering · University of Florida</p>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-[#FA4616] font-bold text-xs uppercase tracking-widest mb-4">
          Get In Touch
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Let&apos;s <span className="text-[#FA4616]">Connect</span>
        </h2>
        <p className="text-gray-400 mb-10 max-w-md mx-auto text-sm leading-relaxed">
          Whether it&apos;s an opportunity, a collaboration, or just a conversation —
          my inbox is always open.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="mailto:daniel.rosen@ufl.edu"
            className="px-8 py-3.5 bg-[#FA4616] text-white font-semibold rounded-lg hover:bg-orange-500 transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            daniel.rosen@ufl.edu
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-rosen-"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-[#003087] hover:bg-[#003087] transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            LinkedIn
          </a>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-xs text-gray-500">
            © 2026 Daniel Rosen &nbsp;·&nbsp; Built with Next.js &nbsp;·&nbsp;{" "}
            <span className="text-[#FA4616]">🐊 Go Gators</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white px-6">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 opacity-60" />

      <div className="relative max-w-4xl mx-auto text-center">
        <p className="text-[#FA4616] font-semibold tracking-widest uppercase text-sm mb-6">
          Welcome to my portfolio
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 leading-tight">
          Daniel{" "}
          <span className="text-[#003087]">Rosen</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-3 font-light">
          Industrial &amp; Systems Engineering @ University of Florida
        </p>

        <p className="text-base md:text-lg text-[#FA4616] font-semibold mb-12 tracking-wide">
          MLT Career Prep Fellow &nbsp;·&nbsp; HSF Scholar &nbsp;·&nbsp; Operations &amp; Product Development
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#experience"
            className="px-8 py-3.5 bg-[#FA4616] text-white font-semibold rounded-lg hover:bg-orange-600 transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-rosen-"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border-2 border-[#003087] text-[#003087] font-semibold rounded-lg hover:bg-[#003087] hover:text-white transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}

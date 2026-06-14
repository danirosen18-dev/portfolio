export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Me</h2>
          <div className="mt-3 h-1 w-16 bg-[#FA4616] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-[#003087] flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                DR
              </div>
              {/* Orange ring accent */}
              <div className="absolute -inset-2 rounded-full border-4 border-[#FA4616] opacity-20" />
            </div>
          </div>

          {/* Bio */}
          <div>
            <h3 className="text-2xl font-bold text-[#003087] mb-5">
              Hi, I&apos;m Daniel 👋
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              I&apos;m an Industrial and Systems Engineering student at the University of
              Florida&apos;s Herbert Wertheim College of Engineering — with a Minor in Business
              Administration and a Certificate in Project Management. I&apos;m passionate about
              the intersection of engineering, business, and leadership.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              A first-generation scholar, MLT Career Prep Fellow, and HSF recipient, I bring
              a multicultural perspective and entrepreneurial mindset to everything I do. I
              speak English, Spanish, and Hebrew — and I&apos;m always looking for the next
              challenge, whether that&apos;s building something new or jumping out of a plane.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-sm text-center border-t-4 border-[#FA4616]">
                <p className="text-2xl font-bold text-[#003087]">3.58</p>
                <p className="text-xs text-gray-500 mt-1 font-medium">GPA</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm text-center border-t-4 border-[#003087]">
                <p className="text-2xl font-bold text-[#FA4616]">2027</p>
                <p className="text-xs text-gray-500 mt-1 font-medium">Graduating</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm text-center border-t-4 border-[#FA4616]">
                <p className="text-2xl font-bold text-[#003087]">3</p>
                <p className="text-xs text-gray-500 mt-1 font-medium">Languages</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

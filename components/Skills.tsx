const categories = [
  {
    title: "Languages",
    icon: "🌐",
    accent: "border-[#FA4616]",
    skills: ["English (Native)", "Spanish (Native)", "Hebrew (Conversational)"],
  },
  {
    title: "Programming",
    icon: "💻",
    accent: "border-[#003087]",
    skills: ["VB.NET / Visual Basic .NET"],
  },
  {
    title: "Tools & Software",
    icon: "🔧",
    accent: "border-[#FA4616]",
    skills: ["SOLIDWORKS (Certified)", "Arduino", "Microsoft Excel", "CAD"],
  },
  {
    title: "Interests",
    icon: "⚡",
    accent: "border-[#003087]",
    skills: [
      "Leadership",
      "Entrepreneurship",
      "Analytics",
      "Problem Solving",
      "Sports",
      "Cooking",
      "Skydiving",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Skills &amp; Interests
          </h2>
          <div className="mt-3 h-1 w-16 bg-[#FA4616] mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className={`bg-gray-50 rounded-xl p-6 border-t-4 ${cat.accent} hover:shadow-md transition-shadow`}
            >
              <div className="text-2xl mb-3">{cat.icon}</div>
              <h3 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wide">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs bg-white text-gray-600 px-3 py-1.5 rounded-full shadow-sm border border-gray-100 font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* UF Education callout */}
        <div className="bg-[#003087] rounded-2xl p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[#FA4616] font-bold text-xs uppercase tracking-widest mb-2">
              Education
            </p>
            <h3 className="text-xl font-bold">University of Florida</h3>
            <p className="text-blue-200 mt-1">
              B.S. Industrial &amp; Systems Engineering
            </p>
            <p className="text-blue-200 text-sm mt-0.5">
              Minor in Business Administration · Certificate in Project Management
            </p>
            <p className="text-blue-300 text-sm mt-1">
              Herbert Wertheim College of Engineering · Expected May 2027
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Hispanic Scholarship Fund Recipient", "Florida Bright Futures Scholar"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="text-xs bg-white/10 text-white px-3 py-1 rounded-full border border-white/20"
                  >
                    {badge}
                  </span>
                )
              )}
            </div>
          </div>
          <div className="text-center flex-shrink-0">
            <p className="text-5xl font-bold text-[#FA4616]">3.58</p>
            <p className="text-blue-200 text-sm mt-1">GPA / 4.00</p>
          </div>
        </div>
      </div>
    </section>
  );
}

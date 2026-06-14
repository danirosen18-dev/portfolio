const placeholders = [
  { id: 1, label: "Project 01" },
  { id: 2, label: "Project 02" },
  { id: 3, label: "Project 03" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Projects</h2>
          <div className="mt-3 h-1 w-16 bg-[#FA4616] mx-auto rounded-full" />
          <p className="mt-4 text-gray-400 text-sm">
            Portfolio projects coming soon — stay tuned.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {placeholders.map((p) => (
            <div
              key={p.id}
              className="group bg-white rounded-xl p-10 shadow-sm border-2 border-dashed border-gray-200 hover:border-[#FA4616] flex flex-col items-center justify-center text-center transition-all hover:shadow-md min-h-[220px]"
            >
              <div className="w-14 h-14 rounded-full bg-gray-100 group-hover:bg-[#FA4616] flex items-center justify-center mb-5 transition-all">
                <svg
                  className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <p className="text-xs text-gray-300 font-mono mb-1">{p.label}</p>
              <h3 className="font-bold text-gray-300 group-hover:text-[#003087] transition-colors text-lg">
                Coming Soon
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

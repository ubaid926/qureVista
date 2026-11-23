"use client";

const projects = [
  {
    id: 1,
    category: "Brand Identity",
    title: "Luxe Noir Branding",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80",
    wide: false,
  },
  {
    id: 2,
    category: "Packaging",
    title: "Product Design",
    image: "https://images.unsplash.com/photo-1612203985729-70726954388c?w=900&q=80",
    wide: true, // featured / centre card
  },
  {
    id: 3,
    category: "Print Design",
    title: "Editorial Layout",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
    wide: false,
  },
  {
    id: 4,
    category: "Social Media",
    title: "Campaign Graphics",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
    wide: false,
  },
  {
    id: 5,
    category: "Packaging",
    title: "Luxury Packaging",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    wide: false,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="w-full bg-white pt-20 lg:pt-28 pb-0 overflow-hidden">
      {/* ── Section heading ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="flex items-center justify-center gap-2 mb-4">
            <span className="block w-2 h-2 rounded-full bg-[#4f8ef7]" />
            <span className="text-[#4f8ef7] text-xs font-semibold tracking-[0.3em] uppercase">
              Projects
            </span>
          </p>
          <h2
            className="font-black uppercase leading-tight tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
          >
            <span className="text-[#081437]">Our </span>
            <span className="text-[#4f8ef7]">Works</span>
          </h2>
        </div>
      </div>

      {/* ── Horizontal scrolling gallery ── */}
      {/* Extends edge-to-edge */}
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div
          className="flex gap-3 px-6 lg:px-12 pb-6"
          style={{ width: "max-content" }}
        >
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`
                group relative overflow-hidden rounded-2xl shrink-0 cursor-pointer
                transition-transform duration-500 hover:scale-[1.02]
                ${project.wide
                  ? "w-[420px] lg:w-[480px] h-[380px] lg:h-[420px]"
                  : "w-[260px] lg:w-[300px] h-[380px] lg:h-[420px]"}
                ${i === 0 ? "ml-0" : ""}
              `}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${project.image}')` }}
              />

              {/* Grayscale + navy tint overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: "rgba(8, 20, 55, 0.55)",
                  mixBlendMode: "multiply",
                }}
              />
              {/* Additional grayscale simulation via dark overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(8,20,55,0.80) 0%, rgba(8,20,55,0.10) 50%, rgba(8,20,55,0.30) 100%)",
                }}
              />

              {/* Hover: lighter reveal */}
              <div className="absolute inset-0 bg-[#4f8ef7]/0 group-hover:bg-[#4f8ef7]/10 transition-colors duration-500" />

              {/* ── Bottom content ── */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-3">
                <div className="flex flex-col gap-2">
                  {/* Category pill */}
                  <span className="inline-flex items-center gap-1.5 self-start bg-white/15 backdrop-blur-sm text-white text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full border border-white/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4f8ef7]" />
                    {project.category}
                  </span>

                  {/* Project title badge */}
                  <span className="inline-block self-start bg-[#4f8ef7] text-white text-xs font-black tracking-widest uppercase px-4 py-2 rounded-lg">
                    {project.title}
                  </span>
                </div>

                {/* Arrow button */}
                <a
                  href="#portfolio"
                  className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#4f8ef7] text-white hover:bg-white hover:text-[#4f8ef7] transition-colors duration-300 shadow-lg"
                  aria-label={`View ${project.title}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 -rotate-45"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>
          ))}

          {/* Trailing spacer so last card isn't flush to viewport edge */}
          <div className="w-6 lg:w-12 shrink-0" />
        </div>
      </div>

      {/* Scroll hint fade on right edge */}
      <div
        className="pointer-events-none fixed right-0 top-0 bottom-0 w-16 z-10"
        style={{
          background:
            "linear-gradient(to left, rgba(255,255,255,0.6), transparent)",
        }}
      />
    </section>
  );
}

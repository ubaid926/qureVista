"use client";

import { useState } from "react";

const team = [
  {
    id: 1,
    name: "A. RAZA",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    bio: "10+ years crafting visual identities for global brands. Leads all creative strategy and art direction at Qure Vista.",
  },
  {
    id: 2,
    name: "S. MALIK",
    role: "Brand Designer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    bio: "Specialises in brand identity systems, logo design, and visual language that resonates across every touchpoint.",
  },
  {
    id: 3,
    name: "N. KHAN",
    role: "Packaging Designer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
    bio: "Brings products to life on the shelf with award-winning packaging design and structural mockup expertise.",
  },
  {
    id: 4,
    name: "L. AHMED",
    role: "Motion Designer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80",
    bio: "Animates brands into captivating stories — from logo reveals and social reels to full campaign motion suites.",
  },
  {
    id: 5,
    name: "M. HASSAN",
    role: "Print Specialist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
    bio: "Expert in pre-press, editorial layout, and print-ready production files for everything from posters to catalogues.",
  },
];

export default function Team() {
  const [activeInfo, setActiveInfo] = useState<number | null>(null);

  return (
    <section id="team" className="w-full bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Two-column layout: text left, cards right ── */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-start">

          {/* ── LEFT: Text block ── */}
          <div className="lg:w-[340px] shrink-0 lg:pr-10 lg:pt-6">
            {/* Eyebrow */}
            <p className="flex items-center gap-2 mb-5">
              <span className="block w-2 h-2 rounded-full bg-[#4f8ef7]" />
              <span className="text-[#4f8ef7] text-xs font-semibold tracking-[0.3em] uppercase">
                Seniors
              </span>
            </p>

            {/* Headline */}
            <h2
              className="font-black uppercase leading-none tracking-tight mb-5"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
            >
              <span className="text-[#081437]">Our </span>
              <span className="text-[#4f8ef7]">Team</span>
            </h2>

            {/* Body */}
            <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-xs">
              A crew of passionate designers and visual storytellers dedicated to building
              brands that look great everywhere — from print to pixels.
            </p>

            {/* CTA */}
            <a
              href="#team"
              className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-[#4f8ef7] text-white text-sm font-black tracking-widest uppercase transition-all duration-200 hover:bg-[#2d6fdf] hover:shadow-lg hover:shadow-[#4f8ef7]/30"
            >
              All Team
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5 -rotate-45"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          {/* ── RIGHT: Horizontal scroll cards ── */}
          <div className="flex-1 min-w-0 -mr-6 lg:-mr-12">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-4 pb-6 pl-1" style={{ width: "max-content" }}>
                {team.map((member) => (
                  <div
                    key={member.id}
                    className="relative group w-[220px] h-[300px] rounded-2xl overflow-hidden shrink-0 bg-slate-200 cursor-pointer"
                    onClick={() =>
                      setActiveInfo(activeInfo === member.id ? null : member.id)
                    }
                  >
                    {/* Grayscale photo */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 grayscale"
                      style={{ backgroundImage: `url('${member.image}')` }}
                    />

                    {/* Subtle dark gradient at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081437]/60 via-transparent to-transparent" />

                    {/* ── Vertical rotated name + role ── */}
                    <div className="absolute left-0 bottom-16 flex items-center gap-2 origin-bottom-left -rotate-90 translate-x-3 -translate-y-1">
                      <span className="text-white text-[11px] font-black tracking-[0.18em] uppercase whitespace-nowrap">
                        {member.name}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-[#4f8ef7]" />
                      <span className="text-white/70 text-[10px] font-medium tracking-widest uppercase whitespace-nowrap">
                        {member.role}
                      </span>
                    </div>

                    {/* ── Info button bottom-right ── */}
                    <button
                      className="absolute bottom-4 right-4 flex items-center justify-center w-9 h-9 rounded-full bg-white/90 text-[#081437] hover:bg-[#4f8ef7] hover:text-white transition-colors duration-200 shadow-md text-sm font-bold"
                      aria-label={`Info about ${member.name}`}
                    >
                      i
                    </button>

                    {/* ── Bio overlay on click ── */}
                    {activeInfo === member.id && (
                      <div className="absolute inset-0 bg-[#081437]/90 backdrop-blur-sm flex flex-col justify-center px-5 py-6">
                        <p className="text-[#4f8ef7] text-[10px] font-black tracking-[0.25em] uppercase mb-2">
                          {member.role}
                        </p>
                        <p className="text-white font-black text-sm uppercase tracking-wide mb-3">
                          {member.name}
                        </p>
                        <p className="text-white/70 text-xs leading-relaxed">
                          {member.bio}
                        </p>
                      </div>
                    )}
                  </div>
                ))}

                {/* Trailing spacer */}
                <div className="w-6 lg:w-10 shrink-0" />
              </div>
            </div>

            {/* ── Pagination dots ── */}
            <div className="flex items-center gap-2.5 mt-2 pl-1">
              {team.map((_, i) => (
                <span
                  key={i}
                  className={`block rounded-full transition-all duration-300 ${
                    i === 1
                      ? "w-5 h-[7px] bg-[#4f8ef7]"
                      : "w-[7px] h-[7px] border-2 border-[#081437]/25"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

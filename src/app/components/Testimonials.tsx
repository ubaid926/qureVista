"use client";

import { useState } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "Qure Vista completely transformed our brand. The new identity is bold, cohesive, and exactly what we needed to stand out in a crowded market.",
    highlight: "completely transformed",
    name: "T. COOPER",
    role: "Founder, Luxe Co.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
  },
  {
    id: 2,
    quote:
      "Their packaging design took our product from shelf-invisible to shelf-dominant. Sales jumped 40% in the first quarter after the rebrand.",
    highlight: "shelf-dominant",
    name: "G. MARTIN",
    role: "CEO, Vitae Labs",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&q=80",
  },
  {
    id: 3,
    quote:
      "The social media templates they designed are stunning. Our engagement tripled and customers constantly ask who does our graphics.",
    highlight: "engagement tripled",
    name: "L. BROWN",
    role: "Marketing Head, Novawave",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80",
  },
  {
    id: 4,
    quote:
      "Professional, fast, and incredibly talented. The print brochures they designed for our event were the most complimented material we've ever produced.",
    highlight: "incredibly talented",
    name: "S. AHMED",
    role: "Director, Apex Events",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80",
  },
  {
    id: 5,
    quote:
      "Qure Vista delivered a brand identity that speaks directly to our audience. Every detail was considered — from typography to colour psychology.",
    highlight: "speaks directly",
    name: "M. HASSAN",
    role: "Owner, Craft Studio",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80",
  },
  {
    id: 6,
    quote:
      "The motion graphics they created for our campaign were jaw-dropping. We saw a 60% increase in video completion rate across all platforms.",
    highlight: "jaw-dropping",
    name: "R. JAMES",
    role: "Brand Manager, Flux Media",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&q=80",
  },
];

const PER_PAGE = 3;

function highlightText(quote: string, highlight: string) {
  const idx = quote.toLowerCase().indexOf(highlight.toLowerCase());
  if (idx === -1) return <>{quote}</>;
  return (
    <>
      {quote.slice(0, idx)}
      <span className="text-[#4f8ef7] font-semibold">{quote.slice(idx, idx + highlight.length)}</span>
      {quote.slice(idx + highlight.length)}
    </>
  );
}

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(testimonials.length / PER_PAGE);
  const visible = testimonials.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section id="testimonials" className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Heading ── */}
        <div className="text-center mb-14">
          <p className="flex items-center justify-center gap-2 mb-4">
            <span className="block w-2 h-2 rounded-full bg-[#4f8ef7]" />
            <span className="text-[#4f8ef7] text-xs font-semibold tracking-[0.3em] uppercase">
              Testimonials
            </span>
          </p>
          <h2
            className="font-black uppercase leading-tight tracking-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            <span className="text-[#081437]">What </span>
            <span className="text-[#4f8ef7]">Clients </span>
            <span className="text-[#081437]">Say</span>
          </h2>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((t) => (
            <div
              key={t.id}
              className="group bg-[#f4f6fb] rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-[#4f8ef7]/10 hover:-translate-y-1"
            >
              {/* Quote mark */}
              <div>
                <span
                  className="block text-[#4f8ef7] font-black leading-none mb-4 select-none"
                  style={{ fontSize: "3rem" }}
                  aria-hidden="true"
                >
                  ❝
                </span>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {highlightText(t.quote, t.highlight)}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 ring-2 ring-[#4f8ef7]/30">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div>
                  <p className="text-[#081437] text-sm font-black uppercase tracking-wide">
                    {t.name}
                  </p>
                  <p className="text-slate-400 text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Pagination dots ── */}
        <div className="flex items-center justify-center gap-3 mt-10">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Page ${i + 1}`}
              className={`transition-all duration-300 rounded-full border-2 ${
                i === page
                  ? "w-5 h-5 bg-[#4f8ef7] border-[#4f8ef7]"
                  : "w-4 h-4 bg-transparent border-[#081437]/20 hover:border-[#4f8ef7]"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

"use client";

import { useState } from "react";

const services = [
  {
    title: "Brand Identity",
    description:
      "We build cohesive visual identities — logo systems, colour palettes, typography, and brand guidelines — that make your business instantly recognisable.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke="currentColor" className="w-6 h-6">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v2m0 16v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M2 12h2m16 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
  {
    title: "Print & Packaging",
    description:
      "From luxury packaging and product labels to brochures and stationery, we design print-ready artwork that commands attention on the shelf.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0v9l-9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    title: "Social Media Design",
    description:
      "Scroll-stopping templates, story sets, and campaign graphics crafted for every platform — consistent, on-brand, and always eye-catching.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke="currentColor" className="w-6 h-6">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    title: "Marketing Materials",
    description:
      "Flyers, banners, billboards, and event collateral designed to drive action — professionally laid out and production-ready.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    title: "Typography Design",
    description:
      "Custom typefaces, lettering, and typographic layouts that give your brand a distinctive written voice across every touchpoint.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
  },
  {
    title: "Motion Graphics",
    description:
      "Animated logos, ad creatives, and social reels that bring your brand to life — designed to capture attention in the first second.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
];

const CARDS_PER_PAGE = 3;

export default function Services() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(services.length / CARDS_PER_PAGE);
  const visible = services.slice(page * CARDS_PER_PAGE, page * CARDS_PER_PAGE + CARDS_PER_PAGE);

  return (
    <section id="services" className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Section heading ── */}
        <div className="text-center mb-14">
          <p className="flex items-center justify-center gap-2 mb-4">
            <span className="block w-2 h-2 rounded-full bg-[#4f8ef7]" />
            <span className="text-[#4f8ef7] text-xs font-semibold tracking-[0.3em] uppercase">
              What We Do
            </span>
          </p>
          <h2
            className="font-black uppercase leading-tight tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
          >
            <span className="text-[#081437]">Our </span>
            <span className="text-[#4f8ef7]">Services</span>
          </h2>
        </div>

        {/* ── Service cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((service, i) => (
            <div
              key={service.title}
              className="group relative bg-[#f4f6fb] rounded-2xl p-8 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:shadow-xl hover:shadow-[#4f8ef7]/10 hover:-translate-y-1"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Top: title + description */}
              <div>
                <h3 className="text-[#081437] font-black text-lg uppercase tracking-wide mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom-right: icon circle */}
              <div className="flex justify-end mt-6">
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-white text-[#4f8ef7] shadow-md group-hover:bg-[#4f8ef7] group-hover:text-white transition-all duration-300">
                  {service.icon}
                </span>
              </div>

              {/* Subtle left accent bar on hover */}
              <span className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-[#4f8ef7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                  ? "w-5 h-5 border-[#4f8ef7] bg-[#4f8ef7]"
                  : "w-4 h-4 border-[#081437]/20 bg-transparent hover:border-[#4f8ef7]"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

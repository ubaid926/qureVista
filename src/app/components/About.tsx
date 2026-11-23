"use client";

import { useState } from "react";

export default function About() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section id="about" className="w-full bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Text block ── */}
          <div>
            {/* Eyebrow */}
            <p className="flex items-center gap-2 mb-5">
              <span className="block w-2 h-2 rounded-full bg-[#4f8ef7]" />
              <span className="text-[#4f8ef7] text-xs font-semibold tracking-[0.3em] uppercase">
                About Us
              </span>
            </p>

            {/* Headline */}
            <h2 className="font-black uppercase leading-none tracking-tight mb-6">
              {/* Line 1 — royal blue (matches Hero line 2) */}
              <span
                className="block text-[#4f8ef7]"
                style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
              >
                Crafting Brands
              </span>
              {/* Line 2 — deep navy */}
              <span
                className="block text-[#081437]"
                style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
              >
                With Purpose
              </span>
            </h2>

            {/* Body */}
            <p className="text-slate-500 text-base leading-relaxed max-w-md mb-10">
              We are a graphic design studio obsessed with turning ideas into
              iconic visuals. From brand identities and packaging to social
              graphics and print, every pixel we place is built to make your
              business unmistakable — online and in the real world.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-5">
              {/* Primary button */}
              <a
                href="#services"
                className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-[#4f8ef7] text-white text-sm font-bold tracking-widest uppercase transition-all duration-200 hover:bg-[#2d6fdf] hover:shadow-lg hover:shadow-[#4f8ef7]/30"
              >
                Our Services
              </a>

              {/* Phone link */}
              <a
                href="tel:+123456789"
                className="inline-flex items-center gap-3 text-[#081437] hover:text-[#4f8ef7] transition-colors duration-200 group"
              >
                {/* Phone icon circle */}
                <span className="flex items-center justify-center w-11 h-11 rounded-full border-2 border-[#081437]/15 group-hover:border-[#4f8ef7] transition-colors duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.6 1.17h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 5.37 5.37l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span className="text-sm font-semibold tracking-wide">
                  +1 234 567 8910
                </span>
              </a>
            </div>
          </div>

          {/* ── RIGHT: Image + Watch Video ── */}
          <div className="relative">
            {/* Main image — rounded corners, slight navy tint overlay */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#081437]/20 aspect-[4/3]">
              {/* Background photo: designers collaborating in studio */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=80')",
                }}
              />
              {/* Navy tint overlay — lighter than hero so image reads clearly */}
              <div
                className="absolute inset-0"
                style={{ background: "rgba(8,20,55,0.45)" }}
              />

              {/* Corner accent — top-right navy square peek */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#4f8ef7]/10 rounded-bl-3xl" />
            </div>

            {/* Watch Video pill — overlapping bottom-left of image */}
            <button
              onClick={() => setVideoOpen(true)}
              className="absolute -bottom-5 left-6 flex items-center gap-4 bg-[#081437] text-white rounded-full pl-2 pr-7 py-2 shadow-xl hover:bg-[#0d2252] transition-colors duration-200 group"
            >
              {/* Play circle */}
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#4f8ef7] group-hover:bg-[#2d6fdf] transition-colors duration-200 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 translate-x-0.5"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span className="text-xs font-bold tracking-widest uppercase">
                Watch Video
              </span>
            </button>

            {/* Decorative floating dot grid — top-right */}
            <div
              className="absolute -top-6 -right-6 w-28 h-28 opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #4f8ef7 1px, transparent 1px)",
                backgroundSize: "10px 10px",
              }}
            />
          </div>
        </div>
      </div>

      {/* ── Lightbox placeholder ── */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl aspect-video bg-[#081437] rounded-2xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-white/60 text-sm tracking-widest uppercase">
              Video coming soon
            </p>
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white text-2xl leading-none"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

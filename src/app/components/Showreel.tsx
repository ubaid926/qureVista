"use client";

import { useState } from "react";

const marqueeWords = [
  "Graphic", "Design", "Creative", "Branding", "Packaging",
  "Typography", "Motion", "Identity", "Print", "Digital",
  "Graphic", "Design", "Creative", "Branding", "Packaging",
  "Typography", "Motion", "Identity", "Print", "Digital",
];

export default function Showreel() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <section
        id="showreel"
        className="relative w-full min-h-[520px] lg:min-h-[600px] overflow-hidden flex flex-col"
      >
        {/* ── Background: dark studio photo ── */}
        <div
          className="absolute inset-0 bg-cover bg-center grayscale"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=80')",
          }}
          aria-hidden="true"
        />

        {/* Deep dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(5, 10, 25, 0.82)" }}
          aria-hidden="true"
        />

        {/* ── Giant watermark text ── */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 select-none pointer-events-none z-0"
          aria-hidden="true"
        >
          <span
            className="block font-black uppercase text-white/[0.06] whitespace-nowrap"
            style={{ fontSize: "clamp(5rem, 20vw, 14rem)", letterSpacing: "-0.04em" }}
          >
            SHOWREEL
          </span>
        </div>

        {/* ── Centred play button with circular text ── */}
        <div className="relative z-10 flex flex-1 items-center justify-center py-20">
          <button
            onClick={() => setVideoOpen(true)}
            aria-label="Play showreel video"
            className="group relative flex items-center justify-center"
          >
            {/* Rotating circular SVG text */}
            <svg
              width="180"
              height="180"
              viewBox="0 0 180 180"
              className="absolute animate-spin-slow"
              style={{ animationDuration: "14s" }}
              aria-hidden="true"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 90,90 m -72,0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
                />
              </defs>
              <text
                className="fill-white text-[11px] font-bold tracking-[0.28em] uppercase"
                fontSize="11"
                fontWeight="700"
                letterSpacing="4"
                fill="white"
              >
                <textPath href="#circlePath">
                  ✦ GRAPHIC DESIGN ✦ QURE VISTA ✦ CREATIVE STUDIO ✦
                </textPath>
              </text>
            </svg>

            {/* Outer ring */}
            <span className="absolute w-[130px] h-[130px] rounded-full border border-white/20 group-hover:border-[#4f8ef7]/60 transition-colors duration-300" />

            {/* Play circle */}
            <span className="relative flex items-center justify-center w-[90px] h-[90px] rounded-full bg-[#4f8ef7] text-white shadow-2xl shadow-[#4f8ef7]/50 group-hover:bg-[#2d6fdf] group-hover:scale-110 transition-all duration-300">
              {/* Pulse rings */}
              <span className="absolute w-full h-full rounded-full bg-[#4f8ef7]/30 animate-ping" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-9 h-9 translate-x-0.5"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        </div>

        {/* ── Scrolling marquee ticker ── */}
        <div className="relative z-10 w-full overflow-hidden border-t border-white/10 bg-white/5 backdrop-blur-sm py-4">
          <div className="flex whitespace-nowrap animate-marquee">
            {marqueeWords.map((word, i) => (
              <span key={i} className="inline-flex items-center gap-4 mx-2">
                <span className="text-white text-sm font-black uppercase tracking-widest">
                  {word}
                </span>
                <span className="text-[#4f8ef7] text-lg">✳</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Video lightbox ── */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-[#081437] rounded-2xl flex items-center justify-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#4f8ef7]/20 mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#4f8ef7" className="w-8 h-8 translate-x-0.5">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-white/60 text-sm tracking-widest uppercase">
                Showreel coming soon
              </p>
            </div>
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}

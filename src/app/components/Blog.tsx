"use client";

import { useState } from "react";

const posts = [
  {
    id: 1,
    title: "5 Brand Identity Trends Dominating 2025",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    day: "22",
    month: "Apr",
    category: "Branding",
  },
  {
    id: 2,
    title: "Corporate Identity Mockup Graphic Design",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
    day: "21",
    month: "Apr",
    category: "Design",
  },
  {
    id: 3,
    title: "How to Furnish and Decorate a Creative Agency",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    day: "20",
    month: "Apr",
    category: "Studio",
  },
  {
    id: 4,
    title: "The Art of Packaging: Why Less Is Always More",
    image: "https://images.unsplash.com/photo-1612203985729-70726954388c?w=800&q=80",
    day: "18",
    month: "Apr",
    category: "Packaging",
  },
  {
    id: 5,
    title: "Social Media Design: What Makes Thumbs Stop",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
    day: "15",
    month: "Apr",
    category: "Social",
  },
  {
    id: 6,
    title: "Motion Graphics: The Future of Brand Campaigns",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80",
    day: "12",
    month: "Apr",
    category: "Motion",
  },
];

const PER_PAGE = 3;

export default function Blog() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(posts.length / PER_PAGE);
  const visible = posts.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section id="blog" className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Heading ── */}
        <div className="text-center mb-14">
          <p className="flex items-center justify-center gap-2 mb-4">
            <span className="block w-2 h-2 rounded-full bg-[#4f8ef7]" />
            <span className="text-[#4f8ef7] text-xs font-semibold tracking-[0.3em] uppercase">
              Our Blog
            </span>
          </p>
          <h2
            className="font-black uppercase leading-tight tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
          >
            <span className="text-[#081437]">Latest </span>
            <span className="text-[#4f8ef7]">News</span>
          </h2>
        </div>

        {/* ── Blog cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((post) => (
            <article
              key={post.id}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              {/* Background photo */}
              <div
                className="absolute inset-0 bg-cover bg-center grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                style={{ backgroundImage: `url('${post.image}')` }}
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#081437]/90 via-[#081437]/30 to-transparent" />

              {/* Category pill top-left */}
              <span className="absolute top-4 left-4 bg-[#4f8ef7]/90 text-white text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full">
                {post.category}
              </span>

              {/* Bottom: title + date badge */}
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5 gap-3">
                <h3 className="text-white font-black uppercase text-sm leading-snug tracking-wide max-w-[75%]">
                  {post.title}
                </h3>

                {/* Date badge — dark circle */}
                <div className="shrink-0 flex flex-col items-center justify-center w-12 h-12 rounded-full bg-[#081437] border-2 border-[#4f8ef7]/40 text-white">
                  <span className="text-base font-black leading-none">{post.day}</span>
                  <span className="text-[9px] font-bold tracking-widest uppercase text-[#4f8ef7] leading-none mt-0.5">
                    {post.month}
                  </span>
                </div>
              </div>

              {/* Hover: blue border glow */}
              <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-[#4f8ef7]/40 rounded-2xl transition-all duration-300" />
            </article>
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

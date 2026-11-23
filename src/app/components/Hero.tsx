import { Antonio } from "next/font/google";

const antonio = Antonio({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-[#121212] text-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-[position:60%_center] grayscale"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1800&q=85')",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,.76),rgba(0,0,0,.54)_58%,rgba(0,0,0,.62))]"
      />

      <div
        className={`${antonio.className} relative mx-auto w-[calc(100%-3rem)] max-w-[1120px] pb-16 pt-28 sm:pt-32 lg:min-h-[644px] lg:pt-[132px]`}
      >
        <p className="mb-5 flex items-center gap-2.5 text-base font-bold uppercase tracking-[0.04em]">
          <span
            aria-hidden="true"
            className="size-1.5 rounded-full bg-[#5787FF]"
          />
          Discover Qure Vista
        </p>

        <h1
          id="hero-title"
          className="max-w-[790px] text-[clamp(3rem,10.5vw,8rem)] font-bold uppercase leading-[1.04] tracking-[-0.045em] lg:text-[clamp(5rem,9.4vw,8rem)]"
        >
          <span className="block lg:whitespace-nowrap">Graphic Design</span>
          <span className="mt-2 block text-[#5787FF]">Agency</span>
        </h1>

        <a
          href="#portfolio"
          className="mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-[#4f8ef7] px-9 text-base font-bold uppercase tracking-widest text-white transition-all duration-200 hover:bg-[#2d6fdf] hover:shadow-lg hover:shadow-[#4f8ef7]/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5787FF]"
        >
          View Our Work
        </a>

        <div
          id="brand"
          className="mt-7 flex w-fit scroll-mt-8 items-center gap-4 lg:absolute lg:right-[8%] lg:top-[235px] lg:mt-0 lg:flex-col lg:gap-2.5"
        >
          <span
            aria-hidden="true"
            className="grid size-[88px] shrink-0 place-items-center rounded-full border border-[#5787FF] bg-black/20 text-4xl font-bold text-[#5787FF]"
          >
            QV
          </span>
          <p className="max-w-[190px] text-sm font-semibold uppercase leading-relaxed tracking-[0.12em] text-white lg:text-center">
            Designs That Define Your Brand
          </p>
        </div>
      </div>
    </section>
  );
}
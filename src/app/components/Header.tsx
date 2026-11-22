import Image from "next/image";
import { Antonio } from "next/font/google";

const antonio = Antonio({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 border-b border-white/15 bg-[#07152d]/30">
      <div className="mx-auto flex h-[76px] w-[calc(100%-3rem)] max-w-[1120px] items-center justify-between lg:h-[100px]">
        <a
          href="#home"
          aria-label="Qure Vista home"
          className="flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6495FF]"
        >
          <span className="relative size-11 shrink-0 overflow-hidden rounded bg-white">
            <Image
              src="/qureVistaLogo.jpeg"
              alt=""
              fill
              sizes="44px"
              className="scale-[1.4] object-contain"
            />
          </span>
          <span
            className={`${antonio.className} text-2xl font-bold uppercase tracking-tight text-white`}
          >
            Qure <span className="text-[#6495FF]">Vista</span>
          </span>
        </a>

   <nav aria-label="Main navigation">
  <ul
    className={`${antonio.className} flex flex-wrap items-center justify-end gap-x-3 gap-y-1 text-[11px] font-bold uppercase tracking-[0.06em] sm:gap-x-5 sm:text-sm lg:gap-x-7 lg:text-lg`}
  >
    <li>
      <a href="#home" aria-current="page" className="text-[#5787FF]">
        Home
      </a>
    </li>

    {["About", "Services", "Portfolio", "Team", "Blog", "Contact"].map(
      (label) => (
        <li key={label}>
          <span className="text-white">{label}</span>
        </li>
      ),
    )}
  </ul>
</nav>
      </div>
    </header>
  );
}
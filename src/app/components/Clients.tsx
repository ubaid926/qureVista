const clients = [
  { name: "awwwards.", style: "font-serif italic" },
  { name: "envato", style: "font-sans font-bold" },
  { name: "monday", style: "font-sans font-black" },
  { name: "pingdom", style: "font-sans font-bold" },
  { name: "Walmart", style: "font-sans font-black" },
  { name: "Dribbble", style: "font-sans font-bold" },
  { name: "Behance", style: "font-sans font-black" },
  { name: "Adobe", style: "font-serif italic font-bold" },
];

// Duplicate for seamless loop
const doubled = [...clients, ...clients];

export default function Clients() {
  return (
    <div className="w-full border-t border-b border-slate-100 bg-white py-8 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee" style={{ animationDuration: "30s" }}>
        {doubled.map((client, i) => (
          <span
            key={i}
            className={`${client.style} inline-block mx-10 text-xl text-slate-300 hover:text-[#4f8ef7] transition-colors duration-300 cursor-default select-none`}
          >
            {client.name}
          </span>
        ))}
      </div>
    </div>
  );
}

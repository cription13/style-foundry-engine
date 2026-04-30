import board from "@/assets/look-board.jpg";
import wedding from "@/assets/look-wedding.jpg";
import weekend from "@/assets/look-weekend.jpg";
import { Reveal } from "./Reveal";
import { ArrowUpRight } from "lucide-react";

const looks = [
  { img: board, name: "The Boardroom Look", tags: ["Navy 3-Piece Suit", "Crisp White Shirt", "Silk Tie"] },
  { img: wedding, name: "The Wedding Guest", tags: ["Embroidered Sherwani", "Silk Pocket Square", "Mojari"] },
  { img: weekend, name: "The Weekend Essential", tags: ["Linen Shirt", "Cream Trousers", "Loafers"] },
];

export function Looks() {
  return (
    <section className="py-24 md:py-36 bg-jet">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <Reveal className="mb-16 text-center">
          <span className="font-eyebrow text-[10px] text-gold">— Featured Looks —</span>
          <h2 className="mt-6 font-display text-5xl md:text-7xl text-ivory leading-none">
            The Looks. The Fits.<br /><em className="font-price not-italic text-gold">The Confidence.</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {looks.map((l, i) => (
            <Reveal key={l.name} delay={i * 120}>
              <article className="group relative aspect-[3/4] lg:aspect-[3/4.5] overflow-hidden bg-charcoal">
                <img src={l.img} alt={l.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-jet via-jet/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <span className="font-eyebrow text-[10px] text-gold">Editorial</span>
                  <h3 className="mt-3 font-display text-4xl md:text-5xl text-ivory leading-none">{l.name}</h3>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {l.tags.map((t) => (
                      <li key={t} className="font-eyebrow text-[9px] text-ivory/70 border border-white/15 px-2.5 py-1">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="mt-6 inline-flex items-center gap-2 font-eyebrow text-[10px] text-gold border-b border-gold/40 hover:border-gold pb-1 transition">
                    Shop This Look <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import formal from "@/assets/cat-formal.jpg";
import casual from "@/assets/cat-casual.jpg";
import occasion from "@/assets/cat-occasion.jpg";
import street from "@/assets/cat-street.jpg";
import { Reveal } from "./Reveal";
import { ArrowUpRight } from "lucide-react";

const cats = [
  { img: formal, name: "Formal Wear", icon: "👔", desc: "Sharp suits, dress shirts, and trousers for the man who means business." },
  { img: casual, name: "Casual Wear", icon: "👕", desc: "Premium tees, polos, and relaxed fits that never look lazy." },
  { img: occasion, name: "Occasion Wear", icon: "🧥", desc: "Wedding season, celebrations, and every moment worth dressing up for." },
  { img: street, name: "Streetwear & Basics", icon: "🩳", desc: "Clean, minimal, effortlessly cool — everyday essentials elevated." },
];

export function Collections() {
  return (
    <section id="collections" className="py-24 md:py-36 bg-background">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <Reveal className="mb-16 md:mb-24 text-center">
          <span className="font-eyebrow text-[10px] text-gold">— Collections —</span>
          <h2 className="mt-6 font-display text-6xl md:text-8xl lg:text-9xl text-ivory leading-none">
            Dress Like You<br />
            <em className="font-price not-italic text-gold">Mean It.</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {cats.map((c, i) => (
            <Reveal key={c.name} delay={i * 120}>
              <a href="#new-arrivals" className="category-card group relative block overflow-hidden aspect-[4/5] bg-charcoal">
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 gradient-card" />
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <span className="font-eyebrow text-[10px] text-gold">{c.icon} Category</span>
                      <h3 className="mt-3 font-display text-5xl md:text-6xl text-ivory leading-none">
                        {c.name}
                      </h3>
                      <p className="mt-4 max-w-md font-body text-sm text-ivory/70">{c.desc}</p>
                    </div>
                    <div className="shrink-0 size-14 rounded-full border border-gold/40 flex items-center justify-center text-gold transition-transform group-hover:scale-110 group-hover:bg-gold group-hover:text-jet">
                      <ArrowUpRight className="size-5" />
                    </div>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

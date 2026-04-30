import { Reveal } from "./Reveal";
import { Gem, Shirt, MapPin, RefreshCw, Handshake, Sparkles } from "lucide-react";

const items = [
  { Icon: Gem, t: "Premium Curation Only", d: "Every piece in store is handpicked for quality and style." },
  { Icon: Shirt, t: "Men's Exclusive", d: "100% dedicated to men's fashion. No distractions. Pure focus." },
  { Icon: MapPin, t: "Kuthuparamba's Finest", d: "The most stylish store in Kannur, right in your neighbourhood." },
  { Icon: RefreshCw, t: "New Arrivals Regularly", d: "Fresh styles drop often. There's always something new to discover." },
  { Icon: Handshake, t: "Personal Styling Help", d: "Walk in and our team helps you find exactly what works for you." },
  { Icon: Sparkles, t: "Affordable Luxury", d: "Premium quality at prices that make sense. Style shouldn't break the bank." },
];

export function WhyUs() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal className="mb-16 text-center">
          <span className="font-eyebrow text-[10px] text-gold">— Why Stash Stage 11 —</span>
          <h2 className="mt-6 font-display text-5xl md:text-7xl text-ivory leading-none">
            Built Different.<br /><em className="font-price not-italic text-gold">By Design.</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {items.map(({ Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 80} className="bg-background">
              <div className="p-10 md:p-12 h-full transition-colors hover:bg-charcoal group">
                <Icon className="size-8 text-gold transition-transform group-hover:scale-110" strokeWidth={1.2} />
                <h3 className="mt-8 font-heading font-extrabold text-ivory text-xl">{t}</h3>
                <p className="mt-3 font-body text-sm text-ivory/65 leading-relaxed">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

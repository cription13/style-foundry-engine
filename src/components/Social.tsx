import { Reveal } from "./Reveal";
import { Instagram } from "lucide-react";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import look from "@/assets/look-weekend.jpg";

const tiles = [look, p2, p5, p1, p6, p4];

export function Social() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <Reveal className="mb-14 text-center">
          <span className="font-eyebrow text-[10px] text-gold">— Instagram —</span>
          <h2 className="mt-6 font-display text-5xl md:text-7xl text-ivory leading-none">
            Follow the Style.<br /><em className="font-price not-italic text-gold">@stashstage11</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
          {tiles.map((t, i) => (
            <Reveal key={i} delay={i * 60}>
              <a href="#" className="group relative block aspect-square overflow-hidden bg-charcoal">
                <img src={t} alt="Instagram post" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/70 transition-colors flex items-center justify-center">
                  <Instagram className="size-7 text-jet opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <p className="font-body text-ivory/60 max-w-md mx-auto">
            New arrivals, style tips, and looks from Kannur's best-dressed men.
          </p>
          <a href="#" className="mt-6 inline-flex btn-gold">
            <Instagram className="size-4" /> Follow Us on Instagram
          </a>
        </Reveal>
      </div>
    </section>
  );
}

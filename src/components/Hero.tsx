import hero from "@/assets/hero.jpg";
import { ArrowDown, ArrowRight } from "lucide-react";

const headline = "ELEVATE YOUR WARDROBE.";

export function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[720px] w-full overflow-hidden">
      <img
        src={hero}
        alt="Sharp-dressed man in premium black blazer — Stash Stage 11"
        className="absolute inset-0 h-full w-full object-cover ken-burns"
      />
      <div className="absolute inset-0 gradient-hero" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="mb-8 inline-flex items-center gap-3 border border-gold/40 px-4 py-2">
          <span className="size-1.5 rounded-full bg-gold animate-pulse" />
          <span className="font-eyebrow text-[10px] text-gold">
            Kuthuparamba · Kannur · Kerala — Mens Fashion
          </span>
        </div>

        <h1 className="font-display text-ivory text-[14vw] sm:text-[11vw] md:text-[9vw] lg:text-[8.5rem] leading-[0.9] letter-reveal max-w-[14ch]">
          {headline.split("").map((c, i) => (
            <span key={i} style={{ animationDelay: `${0.04 * i}s` }}>
              {c === " " ? "\u00A0" : c}
            </span>
          ))}
        </h1>

        <p className="mt-8 max-w-xl font-body text-ivory/70 text-base md:text-lg leading-relaxed">
          Premium menswear curated for the modern Kerala man. Style that commands respect.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <a href="#new-arrivals" className="btn-gold">
            Shop New Arrivals <ArrowRight className="size-4" />
          </a>
          <a href="#collections" className="btn-ghost">
            Explore Collections <ArrowDown className="size-4" />
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="font-eyebrow text-[10px] text-ivory/50">Scroll</span>
          <div className="h-12 w-px bg-gradient-to-b from-gold to-transparent" />
        </div>
      </div>
    </section>
  );
}

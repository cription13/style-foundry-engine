import { Wordmark } from "./Wordmark";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-jet pt-24 pb-10 border-t border-white/5">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 text-center">
        <div className="overflow-hidden">
          <Wordmark size="xl" />
        </div>
        <p className="mt-6 font-price text-2xl md:text-3xl text-gold">Elevate Your Wardrobe.</p>

        <nav className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {["Collections", "New Arrivals", "About", "Visit Us", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
              className="font-eyebrow text-[10px] text-ivory/60 hover:text-gold transition-colors"
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="mt-10 flex items-center justify-center gap-5">
          {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
            <a key={i} href="#" className="size-11 border border-white/15 flex items-center justify-center text-ivory/70 hover:text-jet hover:bg-gold hover:border-gold transition">
              <Icon className="size-4" strokeWidth={1.5} />
            </a>
          ))}
        </div>

        <p className="mt-14 font-eyebrow text-[10px] text-ivory/40">
          © 2025 Stash Stage 11. All Rights Reserved. · Kuthuparamba, Kannur, Kerala
        </p>
      </div>
    </footer>
  );
}

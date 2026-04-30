import { useEffect, useState } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { Wordmark } from "./Wordmark";

const links = ["Collections", "New Arrivals", "About", "Visit Us", "Contact"];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-jet/90 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 h-20 flex items-center justify-between">
          <a href="#top" className="shrink-0">
            <Wordmark size="sm" />
          </a>

          <nav className="hidden lg:flex items-center gap-9">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
                className="font-eyebrow text-[11px] text-ivory/80 hover:text-gold transition-colors"
              >
                {l}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <button aria-label="Search" className="text-ivory/80 hover:text-gold transition">
              <Search className="size-[18px]" strokeWidth={1.5} />
            </button>
            <button aria-label="Cart" className="relative text-ivory/80 hover:text-gold transition">
              <ShoppingBag className="size-[18px]" strokeWidth={1.5} />
              <span className="absolute -top-1 -right-2 size-4 rounded-full bg-gold text-jet text-[9px] font-semibold flex items-center justify-center">0</span>
            </button>
            <a href="#new-arrivals" className="hidden md:inline-flex btn-gold !py-2.5 !px-5 !text-[10px]">
              Shop Now
            </a>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="lg:hidden text-ivory"
            >
              <Menu />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-jet transition-opacity duration-500 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-20 px-6 flex items-center justify-between">
          <Wordmark size="sm" />
          <button aria-label="Close menu" onClick={() => setOpen(false)} className="text-ivory">
            <X />
          </button>
        </div>
        <nav className="px-6 mt-12 flex flex-col gap-7">
          {links.map((l, i) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setOpen(false)}
              className="font-display text-5xl text-ivory hover:text-gold transition"
              style={{ animation: open ? `letterIn 0.6s ${0.1 * i}s both` : undefined }}
            >
              {l}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}

import { Reveal } from "./Reveal";

const beliefs = [
  "We curate only what deserves to be in a man's wardrobe — nothing average ever makes the cut.",
  "Style isn't about the price tag. It's about the fit, the fabric, and the confidence it gives you.",
  "From Kuthuparamba to everywhere — the best-dressed men in Kannur know where to shop.",
];

export function Manifesto() {
  return (
    <section id="about" className="relative py-32 md:py-48 bg-jet gold-grain overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <span className="font-eyebrow text-[10px] text-gold">— The Stash Stage 11 Story —</span>
        </Reveal>
        <Reveal delay={150}>
          <blockquote className="mt-10 font-price text-3xl md:text-5xl lg:text-6xl text-ivory leading-[1.15]">
            "Your clothes speak before you do.<br />
            Make sure they say the <span className="text-gold">right things.</span>"
          </blockquote>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-left md:text-center">
          {beliefs.map((b, i) => (
            <Reveal key={i} delay={300 + i * 120} className="flex flex-col items-start md:items-center gap-4">
              <span className="text-gold text-2xl">✦</span>
              <p className="font-body text-ivory/75 text-sm leading-relaxed max-w-xs">{b}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

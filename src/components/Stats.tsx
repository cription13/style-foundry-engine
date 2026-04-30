import { Reveal } from "./Reveal";

const stats = [
  { n: "500+", l: "Styles Available" },
  { n: "100%", l: "Mens Exclusive" },
  { n: "1", l: "Premium Store Location" },
  { n: "★ 5.0", l: "Customer Rating" },
];

export function Stats() {
  return (
    <section className="bg-charcoal border-y border-white/5 py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 100} className="text-center">
              <div className="font-display text-gold text-5xl md:text-6xl lg:text-7xl">{s.n}</div>
              <div className="mt-3 font-eyebrow text-[10px] text-ivory/60">{s.l}</div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={400} className="mt-14 text-center">
          <p className="font-price text-2xl md:text-3xl text-ivory/80">
            Kannur's most stylish men shop here. Now it's your turn.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

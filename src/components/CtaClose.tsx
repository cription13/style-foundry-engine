import { Reveal } from "./Reveal";

export function CtaClose() {
  return (
    <section className="relative py-32 md:py-48 bg-jet overflow-hidden">
      {/* Gold particles */}
      <div className="absolute inset-0 gold-grain" />
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="absolute size-1 rounded-full bg-gold/40"
            style={{
              top: `${(i * 53) % 100}%`,
              left: `${(i * 37) % 100}%`,
              animation: `kenBurns ${8 + (i % 5)}s ease-in-out ${i * 0.3}s infinite alternate`,
              opacity: 0.2 + ((i % 5) * 0.1),
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h2 className="font-display text-6xl md:text-8xl lg:text-9xl text-ivory leading-[0.95]">
            Your <em className="font-price not-italic text-gold">Best-Dressed</em><br />Era Starts Now.
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-8 font-body text-ivory/70 text-lg max-w-xl mx-auto">
            New arrivals in store. Premium styles waiting. Come see what Stash Stage 11 has for you.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#new-arrivals" className="btn-gold">Shop Online</a>
            <a href="#visit-us" className="btn-ghost">Visit Our Store</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

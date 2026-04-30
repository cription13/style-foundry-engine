import { Reveal } from "./Reveal";
import { Star } from "lucide-react";

const reviews = [
  { q: "Best men's clothing store in Kannur. The collection is premium and the staff actually knows fashion.", n: "R.K.", c: "Kuthuparamba" },
  { q: "Stash Stage 11 is where I shop before every wedding season. Never disappointed.", n: "A.M.", c: "Kannur" },
  { q: "The quality of the fabrics is genuinely impressive for the price. My go-to shop.", n: "S.P.", c: "Thalassery" },
  { q: "Finally a men's store in this area that actually has style. Love the new arrivals.", n: "F.N.", c: "Kuthuparamba" },
  { q: "Bought a full wedding outfit here and got so many compliments. Highly recommend.", n: "J.R.", c: "Kannur" },
  { q: "Clean store, great selection, helpful staff. Stash Stage 11 stands out from every other shop.", n: "M.T.", c: "Iritty" },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-jet">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <Reveal className="mb-16 text-center">
          <span className="font-eyebrow text-[10px] text-gold">— Testimonials —</span>
          <h2 className="mt-6 font-display text-5xl md:text-7xl text-ivory leading-none">
            Words from <em className="font-price not-italic text-gold">Our Men.</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <Reveal key={r.q} delay={i * 80}>
              <div className="h-full p-8 border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-gold/40 transition-colors">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="size-3.5 fill-current" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-6 font-body text-ivory/85 leading-relaxed">"{r.q}"</p>
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                  <div className="size-10 rounded-full bg-gold/20 text-gold font-display flex items-center justify-center">
                    {r.n.charAt(0)}
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-ivory text-sm">{r.n}</div>
                    <div className="font-eyebrow text-[9px] text-ivory/50">{r.c}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

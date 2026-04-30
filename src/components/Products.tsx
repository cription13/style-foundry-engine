import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import { Reveal } from "./Reveal";
import { ArrowRight } from "lucide-react";

const products = [
  { img: p1, alt: p2, name: "Premium Linen Shirt — White", tag: "Casual", price: "₹ 1,890" },
  { img: p2, alt: p3, name: "Tailored Wool Blazer — Midnight", tag: "Formal", price: "₹ 5,490" },
  { img: p3, alt: p1, name: "Slim Chino Trouser — Sand", tag: "Casual", price: "₹ 1,690" },
  { img: p4, alt: p1, name: "Pique Cotton Polo — Royal", tag: "Casual", price: "₹ 1,290" },
  { img: p5, alt: p2, name: "Silk Blend Kurta — Cream", tag: "Occasion", price: "₹ 2,890" },
  { img: p6, alt: p4, name: "Heavyweight Hoodie — Jet", tag: "Streetwear", price: "₹ 1,990" },
];

export function Products() {
  return (
    <section id="new-arrivals" className="py-24 md:py-36 bg-background">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <Reveal className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="font-eyebrow text-[10px] text-gold">— New Arrivals —</span>
            <h2 className="mt-6 font-display text-5xl md:text-7xl text-ivory leading-none">
              Just Landed at<br />
              <em className="font-price not-italic text-gold">Stash Stage 11.</em>
            </h2>
          </div>
          <a href="#contact" className="btn-ghost self-start md:self-end">
            View All <ArrowRight className="size-4" />
          </a>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <article className="product-card group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden bg-charcoal">
                  <img src={p.img} alt={p.name} loading="lazy" className="img-primary absolute inset-0 h-full w-full object-cover" />
                  <img src={p.alt} alt="" loading="lazy" className="img-secondary absolute inset-0 h-full w-full object-cover" />
                  <span className="absolute top-4 left-4 font-eyebrow text-[9px] text-jet bg-gold px-2.5 py-1">
                    {p.tag}
                  </span>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading font-semibold text-ivory text-base">{p.name}</h3>
                    <button className="mt-2 font-eyebrow text-[10px] text-ivory/60 hover:text-gold transition border-b border-transparent hover:border-gold pb-0.5">
                      Add to Cart
                    </button>
                  </div>
                  <span className="font-price text-2xl text-gold whitespace-nowrap">{p.price}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

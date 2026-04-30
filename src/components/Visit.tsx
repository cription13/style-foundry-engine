import store from "@/assets/store.jpg";
import { Reveal } from "./Reveal";
import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";

export function Visit() {
  const wa = "https://wa.me/919999999999?text=" + encodeURIComponent("Hi Stash Stage 11, I'd like to know about your latest collection.");
  return (
    <section id="visit-us" className="py-24 md:py-36 bg-background">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal className="order-2 lg:order-1">
          <span className="font-eyebrow text-[10px] text-gold">— Visit Us —</span>
          <h2 className="mt-6 font-display text-5xl md:text-7xl text-ivory leading-none">
            Come In. Try It On.<br /><em className="font-price not-italic text-gold">Leave Looking Better.</em>
          </h2>
          <p className="mt-8 font-body text-ivory/70 text-base max-w-lg leading-relaxed">
            Walk into Stash Stage 11 and walk out with a wardrobe upgrade. Our team is ready to help you find your style.
          </p>

          <ul className="mt-10 space-y-5">
            {[
              { Icon: MapPin, t: "Kuthuparamba, Kannur, Kerala" },
              { Icon: Clock, t: "Open Daily · 10:00 AM — 9:30 PM" },
              { Icon: Phone, t: "+91 99999 99999" },
              { Icon: MessageCircle, t: "WhatsApp for stock enquiries" },
            ].map(({ Icon, t }) => (
              <li key={t} className="flex items-center gap-4">
                <span className="size-10 border border-gold/40 flex items-center justify-center text-gold shrink-0">
                  <Icon className="size-4" strokeWidth={1.5} />
                </span>
                <span className="font-body text-ivory/85">{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="https://maps.google.com/?q=Kuthuparamba,Kannur,Kerala" target="_blank" rel="noreferrer" className="btn-gold">
              Get Directions
            </a>
            <a href={wa} target="_blank" rel="noreferrer" className="btn-ghost">
              WhatsApp Us
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="order-1 lg:order-2">
          <div className="relative aspect-[4/5] overflow-hidden bg-charcoal">
            <img src={store} alt="Stash Stage 11 storefront in Kuthuparamba, Kannur" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-jet/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 border border-gold/40 bg-jet/70 backdrop-blur px-4 py-3">
              <div className="font-eyebrow text-[9px] text-gold">Flagship Store</div>
              <div className="font-display text-2xl text-ivory mt-1">Kuthuparamba · Kannur</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

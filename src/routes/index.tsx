import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Stats } from "@/components/Stats";
import { Collections } from "@/components/Collections";
import { Products } from "@/components/Products";
import { Manifesto } from "@/components/Manifesto";
import { WhyUs } from "@/components/WhyUs";
import { Looks } from "@/components/Looks";
import { Visit } from "@/components/Visit";
import { Testimonials } from "@/components/Testimonials";
import { Social } from "@/components/Social";
import { CtaClose } from "@/components/CtaClose";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stash Stage 11 — Premium Menswear in Kuthuparamba, Kannur" },
      {
        name: "description",
        content:
          "Stash Stage 11 — premium men's fashion store in Kuthuparamba, Kannur, Kerala. Formal, casual, occasion & streetwear curated to elevate your wardrobe.",
      },
      { property: "og:title", content: "Stash Stage 11 — Elevate Your Wardrobe" },
      {
        property: "og:description",
        content: "Premium menswear curated for the modern Kerala man. Visit our flagship in Kuthuparamba, Kannur.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Stats />
      <Collections />
      <Products />
      <Manifesto />
      <WhyUs />
      <Looks />
      <Visit />
      <Testimonials />
      <Social />
      <CtaClose />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}

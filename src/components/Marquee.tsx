const items = [
  "Mens Fashion",
  "Kuthuparamba",
  "Kannur",
  "Kerala",
  "Stash Stage 11",
  "Elevate Your Wardrobe",
  "New Arrivals",
  "Premium Menswear",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-gold/30 bg-jet py-4">
      <div className="marquee-track flex whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="font-eyebrow text-[11px] text-gold mx-8 inline-flex items-center gap-8">
            ✦ {t}
          </span>
        ))}
      </div>
    </div>
  );
}

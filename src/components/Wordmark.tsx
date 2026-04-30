export function Wordmark({ size = "md" }: { size?: "sm" | "md" | "lg" | "xl" }) {
  const sizes = {
    sm: "text-base tracking-[0.22em]",
    md: "text-xl tracking-[0.25em]",
    lg: "text-5xl md:text-6xl tracking-[0.18em]",
    xl: "text-[18vw] md:text-[14vw] leading-none tracking-[0.04em]",
  } as const;
  return (
    <span className={`font-display font-normal text-ivory ${sizes[size]} inline-flex items-baseline gap-[0.4em]`}>
      <span>STASH</span>
      <span>STAGE</span>
      <span className="text-gold">11</span>
    </span>
  );
}

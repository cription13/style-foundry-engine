import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  const link = "https://wa.me/919999999999?text=" + encodeURIComponent("Hi Stash Stage 11, I'd like to know about your latest collection.");
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp Stash Stage 11"
      className="fixed bottom-6 right-6 z-40 size-14 rounded-full bg-gold text-jet shadow-[0_10px_30px_-5px_rgba(201,147,42,0.6)] flex items-center justify-center hover:scale-110 transition-transform"
    >
      <MessageCircle className="size-6" strokeWidth={2} />
      <span className="absolute inset-0 rounded-full bg-gold animate-ping opacity-30" />
    </a>
  );
}

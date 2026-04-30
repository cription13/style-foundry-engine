import { useState } from "react";
import { z } from "zod";
import { Reveal } from "./Reveal";
import { Instagram, MapPin, MessageCircle, ArrowRight } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(80),
  phone: z.string().trim().min(7, "Valid phone required").max(20),
  email: z.string().trim().email("Valid email required").max(160),
  message: z.string().trim().min(1, "Message required").max(800),
});

export function Contact() {
  const [status, setStatus] = useState<null | "ok" | "err">(null);
  const [err, setErr] = useState<string>("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      phone: fd.get("phone"),
      email: fd.get("email"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      setStatus("err");
      setErr(parsed.error.issues[0]?.message ?? "Please check the form.");
      return;
    }
    setStatus("ok");
    setErr("");
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid lg:grid-cols-[1.3fr_1fr] gap-16">
        <Reveal>
          <span className="font-eyebrow text-[10px] text-gold">— Contact —</span>
          <h2 className="mt-6 font-display text-5xl md:text-7xl text-ivory leading-none">
            We're Here.<br /><em className="font-price not-italic text-gold">Let's Talk Style.</em>
          </h2>

          <form onSubmit={onSubmit} className="mt-12 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Name" name="name" />
              <Field label="Phone" name="phone" type="tel" />
            </div>
            <Field label="Email" name="email" type="email" />
            <Field label="Message" name="message" textarea />

            {status === "err" && <p className="text-destructive text-sm font-eyebrow">{err}</p>}
            {status === "ok" && <p className="text-gold text-sm font-eyebrow">✦ Thank you. We'll be in touch shortly.</p>}

            <button type="submit" className="btn-gold">
              Send Message <ArrowRight className="size-4" />
            </button>
          </form>
        </Reveal>

        <Reveal delay={150} className="lg:pt-24">
          <div className="space-y-8 border-l border-gold/30 pl-8">
            <Item Icon={MapPin} t="Kuthuparamba, Kannur, Kerala" />
            <Item Icon={MessageCircle} t="WhatsApp Stock Enquiries" />
            <Item Icon={Instagram} t="@stashstage11" />
          </div>
          <p className="mt-12 font-price text-2xl text-ivory/70">
            "Walk in. We'll make sure you walk out looking better."
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", textarea }: { label: string; name: string; type?: string; textarea?: boolean }) {
  const cls = "w-full bg-transparent border-b border-white/15 focus:border-gold transition-colors py-3 text-ivory placeholder:text-ivory/30 outline-none font-body";
  return (
    <label className="block">
      <span className="font-eyebrow text-[10px] text-ivory/50">{label}</span>
      {textarea ? (
        <textarea name={name} rows={4} maxLength={800} className={cls} placeholder="Tell us what you're looking for…" />
      ) : (
        <input name={name} type={type} maxLength={160} className={cls} placeholder=" " />
      )}
    </label>
  );
}

function Item({ Icon, t }: { Icon: typeof MapPin; t: string }) {
  return (
    <div className="flex items-center gap-4">
      <Icon className="size-5 text-gold" strokeWidth={1.4} />
      <span className="font-body text-ivory/85">{t}</span>
    </div>
  );
}

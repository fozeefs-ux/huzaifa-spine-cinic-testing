import { createFileRoute } from "@tanstack/react-router";
import { PhotoSlot } from "@/components/site/PhotoSlot";
import { SectionMarker } from "@/components/site/SectionMarker";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Booking — Huzaifa Spine Clinic" },
      { name: "description", content: "Book an appointment at Huzaifa Spine Clinic in Gulshan-e-Iqbal, Karachi. Call 0304-2357261 or message us on WhatsApp." },
      { property: "og:title", content: "Contact — Huzaifa Spine Clinic" },
      { property: "og:description", content: "Book directly: 0304-2357261. Gulshan-e-Iqbal, Karachi." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <SectionMarker index="—" label="Begin" />
          <h1 className="font-display text-7xl lg:text-[11rem] leading-[0.85] text-balance">
            Make the <em className="text-gold">call</em>.
          </h1>
          <p className="mt-12 max-w-xl text-lg text-muted-foreground leading-relaxed text-pretty">
            One phone number. One direct line to the clinic. We answer ourselves — there is no front desk, no holding queue.
          </p>
        </div>
      </section>

      {/* BIG PHONE */}
      <section className="relative py-24 lg:py-32 border-t border-border overflow-hidden">
        <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,oklch(0.78_0.13_75/0.15),transparent_60%)]" />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">Direct line</span>
          <a href="tel:03042357261" className="block mt-6 font-display text-6xl lg:text-[10rem] italic leading-none hover:text-gold transition-colors duration-500">
            0304<span className="text-gold/60">·</span>2357261
          </a>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a href="tel:03042357261" className="bg-gold text-background px-8 h-14 inline-flex items-center text-[11px] font-mono uppercase tracking-[0.25em] hover:bg-foreground transition-all">
              Call Now
            </a>
            <a href="https://wa.me/923042357261" target="_blank" rel="noopener noreferrer" className="border border-gold/40 text-gold px-8 h-14 inline-flex items-center text-[11px] font-mono uppercase tracking-[0.25em] hover:bg-gold hover:text-background transition-all">
              WhatsApp ↗
            </a>
          </div>
        </div>
      </section>

      {/* LOCATION + HOURS GRID */}
      <section className="relative">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-12 gap-px bg-border">
          <div className="lg:col-span-7 bg-background">
            <PhotoSlot label="Clinic exterior" caption="Gulshan-e-Iqbal · Karachi" aspect="landscape" className="!aspect-[16/10]" />
          </div>
          <div className="lg:col-span-5 bg-background p-10 lg:p-12 flex flex-col gap-12">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-gold mb-4">Address</div>
              <div className="font-display text-3xl italic leading-tight">
                Huzaifa Spine Clinic<br />
                Gulshan-e-Iqbal<br />
                Karachi, Pakistan
              </div>
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-gold mb-4">Hours</div>
              <dl className="space-y-3 text-base">
                <div className="flex justify-between border-b border-border pb-2"><dt className="text-muted-foreground">Mon — Thu</dt><dd>11:00 — 20:00</dd></div>
                <div className="flex justify-between border-b border-border pb-2"><dt className="text-muted-foreground">Fri</dt><dd>15:00 — 20:00</dd></div>
                <div className="flex justify-between border-b border-border pb-2"><dt className="text-muted-foreground">Sat</dt><dd>11:00 — 18:00</dd></div>
                <div className="flex justify-between"><dt className="text-muted-foreground">Sun</dt><dd className="text-gold">By appointment</dd></div>
              </dl>
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-gold mb-4">Follow</div>
              <div className="flex flex-wrap gap-4 text-sm">
                <a href="https://www.instagram.com/huzaifa_spine_clinic/" target="_blank" rel="noopener noreferrer" className="border border-border px-4 h-10 inline-flex items-center hover:border-gold hover:text-gold transition-colors">Instagram ↗</a>
                <a href="https://www.youtube.com/channel/UCZVNLkEzBQ4m0sMLq9jEOIw" target="_blank" rel="noopener noreferrer" className="border border-border px-4 h-10 inline-flex items-center hover:border-gold hover:text-gold transition-colors">YouTube ↗</a>
                <a href="https://www.facebook.com/huzaifaspineclinic/" target="_blank" rel="noopener noreferrer" className="border border-border px-4 h-10 inline-flex items-center hover:border-gold hover:text-gold transition-colors">Facebook ↗</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ STRIP */}
      <section className="relative py-32 lg:py-44 border-t border-border mt-px">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <SectionMarker index="01" label="Common Questions" />
          <div className="grid lg:grid-cols-12 gap-12">
            <h2 className="lg:col-span-5 font-display text-4xl lg:text-6xl leading-[0.95] text-balance">
              Before you <em className="text-gold">call</em>.
            </h2>
            <dl className="lg:col-span-6 lg:col-start-7 space-y-8">
              {[
                { q: "Do I need a referral?", a: "No. You can call us directly to book an assessment." },
                { q: "Will the first session involve adjustment?", a: "Only if your case is clear. Most first visits are diagnostic — we don't adjust what we haven't yet understood." },
                { q: "How many sessions are typical?", a: "Most conditions resolve within 3 to 8 sessions. Chronic disc and frozen shoulder cases may take longer." },
                { q: "Do you treat post-surgical cases?", a: "Yes, with caution. Bring your imaging and surgical notes to the first session." },
              ].map((f) => (
                <div key={f.q} className="border-b border-border pb-8">
                  <dt className="font-display text-2xl italic mb-3">{f.q}</dt>
                  <dd className="text-muted-foreground leading-relaxed">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}

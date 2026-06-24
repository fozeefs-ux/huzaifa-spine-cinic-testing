import { createFileRoute } from "@tanstack/react-router";
import { PhotoSlot } from "@/components/site/PhotoSlot";
import { SectionMarker } from "@/components/site/SectionMarker";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Dr. Saleem Uddin — Huzaifa Spine Clinic" },
      { name: "description", content: "The story and practice of Dr. Saleem Uddin, Karachi's go-to chiropractor and founder of Huzaifa Spine Clinic." },
      { property: "og:title", content: "Dr. Saleem Uddin — Karachi's Chiropractor" },
      { property: "og:description", content: "The story and practice behind Huzaifa Spine Clinic." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const chapters = [
  { year: "The Calling", body: "A childhood spent watching his father struggle with chronic back pain — and seeing surgery fail him — planted a quiet conviction: there had to be another way." },
  { year: "The Training", body: "Years of focused chiropractic training under masters of manual therapy, refining a single discipline rather than spreading thin across many." },
  { year: "The Clinic", body: "Huzaifa Spine Clinic opened in Gulshan-e-Iqbal with a singular promise — no two spines treated the same, and no protocol prescribed before it is understood." },
  { year: "Today", body: "Recognised as Pakistan's #1 chiropractor, with a YouTube community of 2.8k watching real recoveries unfold each week." },
];

function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      {/* INTRO */}
      <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <SectionMarker index="—" label="The Practitioner" />
          <h1 className="font-display text-7xl lg:text-[12rem] leading-[0.85] text-balance">
            Dr. <em className="text-gold">Saleem</em><br /> Uddin.
          </h1>
          <p className="mt-12 max-w-xl text-lg text-muted-foreground leading-relaxed text-pretty">
            Founder and lead chiropractor at Huzaifa Spine Clinic. A practitioner whose patience is a clinical instrument and whose hands are a second diagnostic.
          </p>
        </div>
      </section>

      {/* PORTRAIT + QUOTE */}
      <section className="relative py-24 lg:py-32 bg-card">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <PhotoSlot label="Dr. Saleem in studio" caption="Editorial portrait" aspect="portrait" />
          </div>
          <div className="lg:col-span-6">
            <blockquote className="font-display text-3xl lg:text-5xl italic leading-tight text-balance">
              "Pain is the body's last polite request. <span className="text-gold">My job is to listen — and to answer with precision.</span>"
            </blockquote>
            <cite className="block mt-8 text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground not-italic">
              Dr. Saleem Uddin · Karachi
            </cite>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <SectionMarker index="01" label="Chapters" />
          <h2 className="font-display text-5xl lg:text-7xl leading-[0.95] max-w-3xl text-balance">
            A practice built <em className="text-gold">slowly</em>, one spine at a time.
          </h2>

          <div className="mt-20 grid md:grid-cols-2 gap-px bg-border">
            {chapters.map((c, i) => (
              <div key={i} className="bg-background p-10 lg:p-12 hover:bg-card transition-colors duration-500">
                <div className="flex items-baseline justify-between mb-8">
                  <span className="font-display text-2xl italic text-gold">{c.year}</span>
                  <span className="text-[10px] font-mono text-muted-foreground">0{i + 1}</span>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed text-pretty">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="relative py-32 lg:py-44 bg-card">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionMarker index="02" label="Credentials" />
            <h2 className="font-display text-4xl lg:text-6xl leading-tight text-balance">
              The quiet <em className="text-gold">credentials</em>.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-10">
            {[
              { k: "Specialisation", v: "Spinal & joint mechanics" },
              { k: "Focus", v: "Sciatica, disc, cervical, shoulder" },
              { k: "Recognition", v: "Pakistan's #1 chiropractor" },
              { k: "Community", v: "2.8k YouTube subscribers documenting real healing" },
              { k: "Location", v: "Gulshan-e-Iqbal, Karachi" },
            ].map((row) => (
              <div key={row.k} className="grid grid-cols-12 gap-6 pb-6 border-b border-border">
                <dt className="col-span-4 text-[10px] font-mono uppercase tracking-[0.3em] text-gold pt-1">{row.k}</dt>
                <dd className="col-span-8 font-display text-2xl italic text-balance">{row.v}</dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="relative py-32 border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">Begin with a consultation</p>
          <a href="tel:03042357261" className="block mt-6 font-display text-5xl lg:text-7xl italic hover:text-gold transition-colors">
            0304-2357261
          </a>
        </div>
      </section>
    </div>
  );
}

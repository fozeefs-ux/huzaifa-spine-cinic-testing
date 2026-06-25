import { createFileRoute } from "@tanstack/react-router";
import { SectionMarker } from "@/components/site/SectionMarker";
import portraitAsset from "@/assets/dr-saleem-portrait.png";

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
  { year: "The Spark", body: "A boyhood fascination with the skeleton — the architecture beneath everything. Long before it was a profession, the body's framework was already his quiet obsession." },
  { year: "The Father", body: "Years of watching his own father trapped by chronic back pain from long hours at a desk. Medication failed. Surgery felt wrong. The search for an answer became personal." },
  { year: "The Discovery", body: "A chiropractic adjustment did what years of pills could not. What looked like a miracle was, in fact, mechanics — and it set the course of a life's work." },
  { year: "The Degree", body: "Formal training in chiropractic care, then years of refinement under hands-on practice. One discipline, pursued in depth rather than breadth." },
  { year: "The Clinic", body: "Huzaifa Spine Clinic opens in Gulshan, Karachi. A space built around a single promise — no two spines treated the same, and no protocol prescribed before it is understood." },
  { year: "Today", body: "Over 16 years of practice. More than 6,000 patients treated — children through the elderly. A YouTube community of 2.8k watching real recoveries unfold each week." },
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
            Founder and lead chiropractor at Huzaifa Spine Clinic. Over 16 years of practice, more than 6,000 spines restored — a discipline that began as a son's search for his father's relief.
          </p>

        </div>
      </section>

      {/* PORTRAIT + QUOTE */}
      <section className="relative py-24 lg:py-32 bg-card">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden grain vignette">
              <img
                src={portraitAsset.url}
                alt="Dr. Saleem Uddin — founder of Huzaifa Spine Clinic, Karachi"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
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

      {/* ORIGIN NARRATIVE */}
      <section className="relative py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <SectionMarker index="00" label="Origin" />
            <h2 className="font-display text-4xl lg:text-6xl leading-[0.95] text-balance">
              One son's <em className="text-gold">answer</em> for his father.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-8 text-lg leading-relaxed text-muted-foreground text-pretty">
            <p>
              Dr. Saleem Uddin's fascination with the human body began early — particularly the skeleton, the quiet architecture under everything. Long before it became his life's work, the body's framework was already his obsession.
            </p>
            <p>
              That curiosity found its purpose when he watched his own father struggle for years with chronic back pain from long hours seated at work. <span className="text-foreground">No medication helped. No solution seemed to exist.</span> The search for an answer led young Saleem to discover a treatment that felt nothing short of miraculous: chiropractic care. That discovery marked the beginning of a journey.
            </p>
            <p>
              Today, with a formal degree in chiropractic care and over 16 years of clinical experience, Dr. Saleem has treated more than <span className="text-gold font-display not-italic">6,000 patients</span> — from young children to the elderly — across back pain, sciatica, disc problems, frozen shoulder and neck conditions. His range across ages reflects an adaptive method: a child's developing spine and an elderly patient's age-related wear are not the same problem, and they are not treated the same way.
            </p>
            <p>
              His philosophy centres on hands-on spinal adjustment for long-term mobility and pain relief — often without medication or surgery. A path born, directly, out of his father's experience.
            </p>
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
              { k: "Experience", v: "16+ years of clinical practice" },
              { k: "Patients Treated", v: "6,000+ — children through elderly" },
              { k: "Specialisation", v: "Spinal & joint mechanics" },
              { k: "Focus", v: "Back pain, sciatica, disc, frozen shoulder, neck" },
              { k: "Method", v: "Hands-on adjustment. No medication. No surgery." },
              { k: "Recognition", v: "Karachi's go-to chiropractor" },
              { k: "Community", v: "2.8k on YouTube · real recoveries, documented" },
              { k: "Location", v: "Gulshan, Karachi" },
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

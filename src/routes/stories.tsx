import { createFileRoute } from "@tanstack/react-router";
import { PhotoSlot } from "@/components/site/PhotoSlot";
import { SectionMarker } from "@/components/site/SectionMarker";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Patient Stories — Huzaifa Spine Clinic" },
      { name: "description", content: "Documented recoveries from patients treated at Huzaifa Spine Clinic in Karachi. Real spines, real restoration." },
      { property: "og:title", content: "Patient Stories — Huzaifa Spine Clinic" },
      { property: "og:description", content: "Documented healing stories from Karachi's #1 chiropractor." },
      { property: "og:url", content: "/stories" },
    ],
    links: [{ rel: "canonical", href: "/stories" }],
  }),
  component: StoriesPage,
});

const stories = [
  {
    name: "F. Khan",
    age: "47",
    where: "Gulshan-e-Iqbal",
    condition: "Sciatica · 2 years",
    quote: "Two years of pain. Three sessions. I forgot what limping felt like.",
    body: "F. arrived unable to sit through a single meal. Within three weeks of focused work on the lumbar and pelvis, she walked into the clinic for the fourth session — and forgot to mention her leg.",
  },
  {
    name: "A. Rehman",
    age: "52",
    where: "DHA, Karachi",
    condition: "Disc Herniation",
    quote: "My surgeon scheduled my disc operation. Dr. Saleem cancelled it.",
    body: "An MRI-confirmed L5–S1 herniation. A. came to the clinic four weeks before a scheduled surgery. Today, a year on, the operation has never been needed.",
  },
  {
    name: "S. Memon",
    age: "39",
    where: "PECHS",
    condition: "Frozen Shoulder",
    quote: "I came in unable to lift my arm. I left choosing which shirt to wear.",
    body: "Adhesive capsulitis is patient work. Six weeks of methodical capsular release and cervical correction restored full overhead range with no surgical intervention.",
  },
  {
    name: "M. Ahmed",
    age: "61",
    where: "North Nazimabad",
    condition: "Chronic Neck Pain · 8 years",
    quote: "Eight years of headaches. Gone in a month.",
    body: "Cervical realignment changed the geometry of his daily life. Headaches that ruled his afternoons no longer arrive at all.",
  },
];

function StoriesPage() {
  return (
    <div className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <SectionMarker index="—" label="Patient Stories" />
          <h1 className="font-display text-7xl lg:text-[11rem] leading-[0.85] text-balance">
            Real spines.<br />
            <em className="text-gold">Real</em> restoration.
          </h1>
          <p className="mt-12 max-w-xl text-lg text-muted-foreground leading-relaxed text-pretty">
            Documented recoveries — not stock testimonials. Names abbreviated for privacy; stories preserved in full on our YouTube channel of 2.8k spine-care enthusiasts.
          </p>
        </div>
      </section>

      {/* STORY ENTRIES */}
      <section className="relative">
        {stories.map((s, i) => (
          <article key={s.name} className={`relative border-t border-border ${i % 2 === 1 ? "bg-card" : ""}`}>
            <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-12 items-center">
              <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <PhotoSlot label={`${s.name} · ${s.condition.split("·")[0].trim()}`} caption={s.where} aspect="portrait" />
              </div>
              <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-1 lg:col-start-2" : "lg:col-start-7"}`}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-gold">Case 0{i + 1}</span>
                  <span className="h-px w-12 bg-gold/40" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">{s.condition}</span>
                </div>
                <blockquote className="font-display text-4xl lg:text-6xl italic leading-[1] text-balance">
                  "{s.quote}"
                </blockquote>
                <p className="mt-10 text-base text-muted-foreground leading-relaxed text-pretty max-w-xl">{s.body}</p>
                <div className="mt-10 pt-6 border-t border-border flex items-center justify-between max-w-xl">
                  <div>
                    <div className="font-medium">{s.name}</div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground mt-1">{s.where}</div>
                  </div>
                  <div className="font-display text-2xl text-gold">{s.age}</div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* YOUTUBE CTA */}
      <section className="relative py-32 lg:py-44 border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <SectionMarker index="∞" label="The Channel" />
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.95] text-balance">
              Watch the <em className="text-gold">work</em>.
            </h2>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed text-pretty max-w-md">
              2,800 spine-care enthusiasts. Patient sessions, adjustments, recoveries — documented in long form. No filters, no editing tricks. Just the work.
            </p>
            <a
              href="https://www.youtube.com/channel/UCZVNLkEzBQ4m0sMLq9jEOIw"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex items-center gap-4 border border-gold/40 hover:bg-gold hover:text-background transition-all duration-500 px-8 h-14"
            >
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-gold group-hover:text-background">Visit YouTube</span>
              <span className="text-gold">↗</span>
            </a>
          </div>
          <div className="lg:col-span-5">
            <PhotoSlot label="Adjustment in session" caption="Behind the scenes · Studio cut" aspect="landscape" />
          </div>
        </div>
      </section>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import spineHero from "@/assets/spine-hero.jpg";
import { SectionMarker } from "@/components/site/SectionMarker";

export const Route = createFileRoute("/treatments")({
  head: () => ({
    meta: [
      { title: "Treatments — Huzaifa Spine Clinic" },
      { name: "description", content: "Non-surgical chiropractic treatments at Huzaifa Spine Clinic for back pain, sciatica, disc problems, frozen shoulder, and neck issues." },
      { property: "og:title", content: "Treatments — Huzaifa Spine Clinic" },
      { property: "og:description", content: "Non-surgical chiropractic care in Karachi." },
      { property: "og:url", content: "/treatments" },
    ],
    links: [{ rel: "canonical", href: "/treatments" }],
  }),
  component: TreatmentsPage,
});

const treatments = [
  {
    n: "01",
    name: "Back Pain",
    sub: "Lumbar & thoracic",
    body: "Chronic and acute lower back tension addressed through targeted spinal mobilisation. We identify the structural origin — not just the painful endpoint — and adjust from there.",
    steps: ["Postural assessment", "Targeted lumbar adjustment", "Soft-tissue release", "Recovery protocol"],
  },
  {
    n: "02",
    name: "Sciatica",
    sub: "Nerve decompression",
    body: "Relieving sciatic nerve compression through precise lumbar and pelvic correction. Patients typically feel directional change within the first three sessions.",
    steps: ["Nerve-path mapping", "Pelvic realignment", "L4–L5 decompression", "Movement re-education"],
  },
  {
    n: "03",
    name: "Disc Problems",
    sub: "Herniated & slipped discs",
    body: "Non-surgical management of bulging and herniated discs. A controlled decompression protocol that allows the disc to retract and the surrounding tissue to recover.",
    steps: ["MRI-informed review", "Decompression sessions", "Stabilisation work", "Long-term care plan"],
  },
  {
    n: "04",
    name: "Frozen Shoulder",
    sub: "Adhesive capsulitis",
    body: "Methodical restoration of glenohumeral range of motion. We break through adhesions gently and rebuild capacity without forcing tissue that isn't ready.",
    steps: ["Range mapping", "Capsular release", "Cervical adjustment", "Mobility rebuild"],
  },
  {
    n: "05",
    name: "Neck Pain",
    sub: "Cervical correction",
    body: "Realignment of the cervical spine to relieve chronic neck stiffness, tension headaches, and the postural debt of modern life.",
    steps: ["Postural analysis", "C1–C7 adjustment", "Tension release", "Daily protocol"],
  },
];

function TreatmentsPage() {
  return (
    <div className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 overflow-hidden">
        <img src={spineHero} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25 animate-slow-zoom" loading="lazy" width={1280} height={1920} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <SectionMarker index="—" label="Treatments" />
          <h1 className="font-display text-7xl lg:text-[11rem] leading-[0.85] text-balance">
            What we <em className="text-gold">resolve</em>.
          </h1>
          <p className="mt-12 max-w-xl text-lg text-muted-foreground leading-relaxed text-pretty">
            Five focused disciplines. Hundreds of variations. Every protocol built around the specific architecture of your spine.
          </p>
        </div>
      </section>

      {/* TREATMENT BLOCKS */}
      <section className="relative">
        {treatments.map((t, i) => (
          <article
            key={t.n}
            className={`relative border-t border-border ${i % 2 === 1 ? "bg-card" : ""}`}
          >
            <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <div className="font-display text-[10rem] lg:text-[14rem] leading-none text-gold/20">{t.n}</div>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-gold mb-4">{t.sub}</div>
                <h2 className="font-display text-5xl lg:text-7xl leading-[0.95] text-balance">{t.name}</h2>
                <p className="mt-8 text-lg text-muted-foreground leading-relaxed text-pretty max-w-xl">{t.body}</p>

                <ol className="mt-12 grid grid-cols-2 gap-px bg-border max-w-2xl">
                  {t.steps.map((s, k) => (
                    <li key={s} className="bg-background p-5">
                      <div className="font-mono text-[10px] text-gold mb-2">0{k + 1}</div>
                      <div className="text-sm">{s}</div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* CTA */}
      <section className="relative py-32 lg:py-44 border-t border-border text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-5xl lg:text-7xl leading-[0.95] text-balance">
            Not sure which <em className="text-gold">applies</em> to you?
          </h2>
          <p className="mt-6 text-muted-foreground">Most patients aren't. That's why the first conversation is free.</p>
          <a href="tel:03042357261" className="mt-12 inline-flex items-center gap-4 bg-gold text-background px-8 h-14 hover:bg-foreground transition-all">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em]">Call 0304-2357261</span>
            <span>→</span>
          </a>
        </div>
      </section>
    </div>
  );
}

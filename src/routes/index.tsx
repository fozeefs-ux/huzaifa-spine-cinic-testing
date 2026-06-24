import { createFileRoute, Link } from "@tanstack/react-router";
import spineHero from "@/assets/spine-hero.jpg";
import anatomyNeck from "@/assets/anatomy-neck.jpg";
import textureDark from "@/assets/texture-dark.jpg";
import { PhotoSlot } from "@/components/site/PhotoSlot";
import { SectionMarker } from "@/components/site/SectionMarker";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Huzaifa Spine Clinic — Pakistan's #1 Chiropractor in Karachi" },
      { name: "description", content: "Dr. Saleem Uddin leads Karachi's premier chiropractic clinic. Non-surgical relief for back pain, sciatica, disc issues, frozen shoulder, and neck pain. Book: 0304-2357261." },
      { property: "og:title", content: "Huzaifa Spine Clinic — Pakistan's #1 Chiropractor" },
      { property: "og:description", content: "Cinematic, evidence-led chiropractic care in Gulshan, Karachi." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const conditions = [
  { n: "01", name: "Back Pain", desc: "Chronic lumbar tension resolved through targeted spinal adjustment." },
  { n: "02", name: "Sciatica", desc: "Relieving nerve compression to restore pain-free leg mobility." },
  { n: "03", name: "Disc Issues", desc: "Non-invasive decompression for slipped and herniated discs." },
  { n: "04", name: "Frozen Shoulder", desc: "Restoring full range of motion without surgical intervention." },
  { n: "05", name: "Neck Pain", desc: "Cervical realignment to eliminate stiffness and chronic headaches." },
];

const principles = [
  { n: "I", title: "Diagnose first.", body: "We map the structure before we touch it. No two spines are identical; no two protocols should be." },
  { n: "II", title: "Adjust precisely.", body: "Decades of refined technique meet a single contact point. The smallest input creates the largest correction." },
  { n: "III", title: "Heal naturally.", body: "Your body was built to recover. We restore the conditions for it to do so — no surgery, no dependency." },
];

function Home() {
  return (
    <div className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src={spineHero}
            alt="Glowing spine"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-60 animate-slow-zoom"
            width={1280}
            height={1920}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        </div>

        <div className="relative mx-auto max-w-[1400px] w-full px-6 lg:px-10 py-32 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 animate-cinematic-rise">
            <div className="inline-flex items-center gap-3 mb-10">
              <span className="size-1.5 rounded-full bg-gold animate-shimmer" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-gold">Pakistan's #1 Chiropractor</span>
            </div>

            <h1 className="font-display text-[15vw] sm:text-[10vw] lg:text-[7.5vw] leading-[0.85] tracking-tight text-balance">
              The <em className="text-gold">precise</em><br />
              relief of <em>proper</em><br />
              alignment.
            </h1>

            <p className="mt-10 max-w-md text-base text-muted-foreground leading-relaxed text-pretty">
              Led by Dr. Saleem Uddin. Karachi's authority on non-surgical spinal correction — for the back you live in every day.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-6">
              <a
                href="tel:03042357261"
                className="group flex items-center gap-4 bg-gold text-background px-8 h-14 hover:bg-foreground transition-all duration-500"
              >
                <span className="text-[11px] font-mono uppercase tracking-[0.25em]">Book Consultation</span>
                <span className="text-lg">→</span>
              </a>
              <a
                href="https://wa.me/923042357261"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors underline-offset-8 hover:underline"
              >
                WhatsApp Clinic ↗
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:flex justify-end animate-cinematic-rise [animation-delay:300ms]">
            <div className="space-y-6 text-right">
              <div>
                <div className="font-display text-5xl text-gold">2.8k</div>
                <div className="text-[9px] font-mono uppercase tracking-[0.3em] text-muted-foreground mt-2">YouTube Community</div>
              </div>
              <div className="h-px w-20 bg-border ml-auto" />
              <div>
                <div className="font-display text-5xl">12+</div>
                <div className="text-[9px] font-mono uppercase tracking-[0.3em] text-muted-foreground mt-2">Years of Practice</div>
              </div>
              <div className="h-px w-20 bg-border ml-auto" />
              <div>
                <div className="font-display text-5xl">∞</div>
                <div className="text-[9px] font-mono uppercase tracking-[0.3em] text-muted-foreground mt-2">Stories Restored</div>
              </div>
            </div>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
          <div className="h-12 w-px bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* MARQUEE */}
      <section className="relative py-6 border-y border-border bg-card overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center shrink-0">
              {["Back Pain", "Sciatica", "Disc Herniation", "Frozen Shoulder", "Neck Pain", "Cervical Issues", "Lumbar Recovery", "Postural Correction"].map((w) => (
                <span key={w} className="font-display italic text-3xl lg:text-5xl px-8 text-foreground/40">
                  {w} <span className="text-gold mx-4">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="relative py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <SectionMarker index="01" label="Philosophy" />
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <h2 className="font-display text-5xl lg:text-7xl leading-[0.95] text-balance">
                We don't <em>chase</em> pain.<br />
                We correct the <span className="text-gold italic">structure</span> beneath it.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 self-end">
              <p className="text-base text-muted-foreground leading-relaxed text-pretty">
                Every protocol at Huzaifa Spine Clinic is built around one truth: the spine is the architecture of your nervous system. When it's aligned, the body remembers how to heal.
              </p>
            </div>
          </div>

          <div className="mt-24 grid md:grid-cols-3 gap-px bg-border">
            {principles.map((p) => (
              <div key={p.n} className="bg-background p-10 lg:p-12 group hover:bg-card transition-colors duration-500">
                <div className="font-display text-7xl text-gold/30 group-hover:text-gold transition-colors duration-500">{p.n}</div>
                <h3 className="mt-12 font-display text-3xl italic">{p.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONDITIONS / EXPERTISE */}
      <section className="relative py-32 lg:py-44 overflow-hidden">
        <img src={textureDark} alt="" className="absolute inset-0 w-full h-full object-cover opacity-60" loading="lazy" width={1920} height={1280} />
        <div className="absolute inset-0 bg-background/70" />

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <SectionMarker index="02" label="Expertise" />
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.95] max-w-2xl">
              Conditions <em className="text-gold">resolved</em> in our chair.
            </h2>
            <Link to="/treatments" className="text-[11px] font-mono uppercase tracking-[0.25em] text-gold hover:text-foreground transition-colors">
              All Treatments →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
            {conditions.map((c) => (
              <div key={c.n} className="group relative bg-background hover:bg-card transition-all duration-500 p-8 lg:p-10 min-h-[280px] flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 [background:radial-gradient(circle_at_center,oklch(0.78_0.13_75/0.12),transparent_70%)]" />
                <span className="relative font-mono text-[10px] tracking-[0.3em] text-gold">{c.n}</span>
                <div className="relative">
                  <h3 className="font-display text-2xl lg:text-3xl italic mb-3">{c.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DR. SALEEM */}
      <section className="relative py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <PhotoSlot label="Dr. Saleem Uddin" caption="Portrait · Studio" aspect="portrait" />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <SectionMarker index="03" label="The Practitioner" />
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.95] text-balance">
              Dr. <em className="text-gold">Saleem</em><br /> Uddin.
            </h2>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed text-pretty max-w-md">
              Karachi's go-to chiropractor. A practitioner whose hands have remembered the architecture of thousands of spines — and who treats each one as if it were the first.
            </p>
            <blockquote className="mt-12 border-l-2 border-gold pl-6">
              <p className="font-display text-2xl italic text-pretty">
                "I don't promise miracles. I promise that if your body can heal, I will give it every reason to."
              </p>
              <cite className="block mt-4 text-[10px] font-mono uppercase tracking-[0.3em] text-gold not-italic">— Dr. Saleem</cite>
            </blockquote>
            <Link to="/about" className="mt-12 inline-flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.25em] text-foreground border-b border-gold pb-2 hover:text-gold transition-colors">
              Full Biography <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ANATOMY FEATURE */}
      <section className="relative py-32 lg:py-44 bg-card overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <SectionMarker index="04" label="The Science" />
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.95] text-balance">
              Anatomy is <em className="text-gold">destiny</em>.
            </h2>
            <p className="mt-8 text-base text-muted-foreground leading-relaxed text-pretty max-w-md">
              Seven cervical vertebrae carry the weight of how you think, sleep, and move. We treat them with the reverence that engineering of this precision deserves.
            </p>
            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: "33", v: "Vertebrae" },
                { k: "120+", v: "Nerves" },
                { k: "1", v: "Spine to protect" },
              ].map((d) => (
                <div key={d.v}>
                  <dt className="font-display text-4xl text-gold">{d.k}</dt>
                  <dd className="mt-1 text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">{d.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:col-span-6">
            <div className="relative aspect-square overflow-hidden">
              <img src={anatomyNeck} alt="Cervical spine anatomical study" className="w-full h-full object-cover" loading="lazy" width={1280} height={1280} />
            </div>
          </div>
        </div>
      </section>

      {/* STORIES TEASER */}
      <section className="relative py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div>
              <SectionMarker index="05" label="Patient Stories" />
              <h2 className="font-display text-5xl lg:text-7xl leading-[0.95] text-balance max-w-3xl">
                Real spines. <em className="text-gold">Real</em> restoration.
              </h2>
            </div>
            <Link to="/stories" className="text-[11px] font-mono uppercase tracking-[0.25em] text-gold hover:text-foreground transition-colors">
              All Stories →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { quote: "Two years of pain. Three sessions. I forgot what limping felt like.", who: "F.K.", where: "Gulshan-e-Iqbal", role: "Sciatica" },
              { quote: "My surgeon scheduled my disc operation. Dr. Saleem cancelled it.", who: "A.R.", where: "DHA, Karachi", role: "Disc Herniation" },
              { quote: "I came in unable to lift my arm. I left choosing which shirt to wear.", who: "S.M.", where: "PECHS", role: "Frozen Shoulder" },
            ].map((t, i) => (
              <article key={i} className="group relative bg-card p-8 lg:p-10 border border-border hover:border-gold/40 transition-all duration-500">
                <span className="font-display text-6xl text-gold/30 absolute top-6 right-8">"</span>
                <p className="relative font-display text-xl italic leading-tight text-balance">{t.quote}</p>
                <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">{t.who}</div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground mt-1">{t.where}</div>
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold">{t.role}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-32 lg:py-48 overflow-hidden border-t border-border">
        <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,oklch(0.78_0.13_75/0.18),transparent_60%)]" />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
          <SectionMarker index="06" label="Begin" />
          <h2 className="font-display text-6xl lg:text-9xl leading-[0.9] text-balance">
            Your spine has<br />
            <em className="text-gold">waited</em> long enough.
          </h2>
          <a
            href="tel:03042357261"
            className="mt-16 inline-flex items-center gap-6 group"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">Direct line</span>
            <span className="font-display text-4xl lg:text-6xl text-foreground group-hover:text-gold transition-colors">
              0304-2357261
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}

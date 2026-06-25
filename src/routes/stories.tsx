import { createFileRoute } from "@tanstack/react-router";
import { SectionMarker } from "@/components/site/SectionMarker";
import ashrafAsset from "@/assets/ashraf-japan.png";
import azamAsset from "@/assets/azam-sciatica.png";
import shayanAsset from "@/assets/shayan-back.png";
import treatingAsset from "@/assets/dr-saleem-treating.png";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Patient Stories — Huzaifa Spine Clinic" },
      { name: "description", content: "Documented recoveries from patients treated at Huzaifa Spine Clinic in Karachi. Real spines, real restoration." },
      { property: "og:title", content: "Patient Stories — Huzaifa Spine Clinic" },
      { property: "og:description", content: "Documented healing stories from Karachi's #1 chiropractor." },
      { property: "og:url", content: "/stories" },
      { property: "og:image", content: treatingAsset },
      { name: "twitter:image", content: treatingAsset },
    ],
    links: [{ rel: "canonical", href: "/stories" }],
  }),
  component: StoriesPage,
});

const stories = [
  {
    name: "Ashraf",
    origin: "Visiting from Japan",
    condition: "Shoulder · Neck · Back · Knee · 9 years",
    quote: "Nine years of pain across four regions. I flew from Japan for this. I am leaving lighter than I arrived.",
    body: "Ashraf carried nearly a decade of compounded pain — shoulders, neck, back and knees, all asking for attention at once. A staged protocol unwound the layers in sequence, restoring range and quieting the chronic inflammation that had become his baseline.",
    video: "https://youtu.be/MnUgQjZ-qf0",
    image: ashrafAsset,
  },
  {
    name: "Azam",
    origin: "Karachi",
    condition: "Sciatica",
    quote: "The sciatica that ruled my life is gone. Two thumbs up — and one straight leg.",
    body: "Sciatic compression had reshaped how Azam sat, slept and walked. Focused lumbar and pelvic correction released the nerve pathway; within weeks the radiating leg pain that had defined his routine was no longer part of it.",
    video: "https://youtube.com/shorts/k8wb5X3XLhk",
    image: azamAsset,
  },
  {
    name: "Shayan",
    origin: "Karachi",
    condition: "Chronic Back Pain",
    quote: "I walked in bracing. I walked out standing tall.",
    body: "Young, active, and increasingly trapped by a back that wouldn't cooperate. A short, precise course of spinal correction returned Shayan to the posture — and the confidence — of his age.",
    video: "https://youtube.com/shorts/UxAR4pzotcc",
    image: shayanAsset,
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
            Documented recoveries — not stock testimonials. Every case below is published in full on our YouTube channel of 2.8k spine-care enthusiasts.
          </p>
        </div>
      </section>

      {/* STORY ENTRIES */}
      <section className="relative">
        {stories.map((s, i) => (
          <article key={s.name} className={`relative border-t border-border ${i % 2 === 1 ? "bg-card" : ""}`}>
            <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-12 items-center">
              <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative overflow-hidden aspect-[4/5] grain vignette">
                  <img
                    src={s.image}
                    alt={`${s.name} — ${s.condition} recovery at Huzaifa Spine Clinic`}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                    <div>
                      <div className="font-display italic text-3xl text-foreground">{s.name}</div>
                      <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-gold mt-1">{s.origin}</div>
                    </div>
                    <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-muted-foreground">Case 0{i + 1}</span>
                  </div>
                </div>
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

                <a
                  href={s.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(s.video, "_blank", "noopener,noreferrer");
                  }}
                  className="mt-10 inline-flex items-center gap-4 border border-gold/40 hover:bg-gold hover:text-background transition-all duration-500 px-7 h-12 group cursor-pointer"
                >
                  <span className="size-2 rounded-full bg-gold group-hover:bg-background" />
                  <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-gold group-hover:text-background">
                    Watch {s.name}'s story
                  </span>
                  <span className="text-gold group-hover:text-background">↗</span>
                </a>

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
              href="https://www.youtube.com/@huzaifaspineclinic"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://www.youtube.com/@huzaifaspineclinic", "_blank", "noopener,noreferrer");
              }}
              className="mt-12 inline-flex items-center gap-4 border border-gold/40 hover:bg-gold hover:text-background transition-all duration-500 px-8 h-14 cursor-pointer"
            >
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-gold group-hover:text-background">Visit YouTube</span>
              <span className="text-gold">↗</span>
            </a>

          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden grain vignette">
              <img
                src={treatingAsset.url}
                alt="Dr. Saleem performing an adjustment at Huzaifa Spine Clinic"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-[10px] font-mono uppercase tracking-[0.3em] text-gold">
                Behind the scenes · The work
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

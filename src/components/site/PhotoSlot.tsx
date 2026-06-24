import { cn } from "@/lib/utils";

interface PhotoSlotProps {
  label: string;
  caption?: string;
  aspect?: "portrait" | "landscape" | "square" | "tall" | "wide";
  className?: string;
}

const aspectMap = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[16/10]",
  square: "aspect-square",
  tall: "aspect-[3/4]",
  wide: "aspect-[21/9]",
};

/**
 * Cinematic placeholder for forthcoming clinic / Dr. Saleem photography.
 * Replace with <img> once the user provides photos.
 */
export function PhotoSlot({ label, caption, aspect = "portrait", className }: PhotoSlotProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[oklch(0.11_0.014_60)] grain vignette",
        aspectMap[aspect],
        className,
      )}
    >
      <div className="absolute inset-0 [background:radial-gradient(ellipse_at_30%_30%,oklch(0.20_0.025_75/0.6),transparent_70%)]" />
      <div className="absolute inset-0 [background:repeating-linear-gradient(45deg,transparent_0_60px,oklch(1_0_0/0.015)_60px_61px)]" />

      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <div className="flex items-start justify-between">
          <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-gold/70">— Photography</span>
          <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-muted-foreground">35mm · ƒ1.4</span>
        </div>
        <div>
          <div className="font-display italic text-xl text-foreground/80">{label}</div>
          {caption && (
            <div className="mt-1 text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">{caption}</div>
          )}
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 rounded-full border border-gold/20 flex items-center justify-center">
        <div className="size-2 rounded-full bg-gold/40 animate-shimmer" />
      </div>
    </div>
  );
}

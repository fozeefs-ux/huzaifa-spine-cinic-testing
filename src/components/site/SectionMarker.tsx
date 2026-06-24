interface SectionMarkerProps {
  index: string;
  label: string;
}

export function SectionMarker({ index, label }: SectionMarkerProps) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="text-[10px] font-mono text-gold tracking-[0.3em]">{index}</span>
      <span className="h-px w-12 bg-gold/40" />
      <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">{label}</span>
    </div>
  );
}

import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/treatments", label: "Treatments" },
    { to: "/about", label: "Dr. Saleem" },
    { to: "/stories", label: "Stories" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] flex items-center justify-between px-6 lg:px-10 h-20">
        <Link to="/" className="group flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-tight italic">Huzaifa</span>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold">Spine Clinic</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a
          href="tel:03042357261"
          className="group hidden sm:flex items-center gap-3 border border-gold/40 hover:border-gold hover:bg-gold hover:text-background transition-all duration-300 px-5 h-11 text-[11px] font-mono uppercase tracking-[0.2em] text-gold"
        >
          <span className="size-1.5 rounded-full bg-gold animate-shimmer" />
          0304-2357261
        </a>
      </div>
    </header>
  );
}

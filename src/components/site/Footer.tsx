import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none [background:radial-gradient(ellipse_at_top,oklch(0.78_0.13_75/0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="font-display text-5xl lg:text-6xl italic leading-[0.95] text-balance">
              Move again. <br />
              <span className="text-gold">Without surgery.</span>
            </div>
            <a
              href="tel:03042357261"
              className="mt-10 inline-flex items-center gap-4 group"
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">Book directly</span>
              <span className="font-display text-3xl text-foreground group-hover:text-gold transition-colors">
                0304-2357261
              </span>
            </a>
          </div>

          <div className="md:col-span-2 md:col-start-8">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-gold mb-6">Navigate</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
              <li><Link to="/treatments" className="text-muted-foreground hover:text-foreground transition-colors">Treatments</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">Dr. Saleem</Link></li>
              <li><Link to="/stories" className="text-muted-foreground hover:text-foreground transition-colors">Stories</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-gold mb-6">Clinic</h4>
            <address className="not-italic text-sm text-muted-foreground leading-relaxed">
              A-437, Block-1, Gulshan-e-Iqbal<br />
              Karachi, Pakistan
            </address>
            <p className="mt-4 text-sm text-muted-foreground">
              Open Every Day (Except on Certain Occasions)<br />
             3:30 PM — 11 PM
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-gold mb-6">Follow</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="https://www.instagram.com/huzaifa_spine_clinic/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">Instagram ↗</a></li>
              <li><a href="https://www.youtube.com/channel/UCZVNLkEzBQ4m0sMLq9jEOIw" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">YouTube ↗</a></li>
              <li><a href="https://www.facebook.com/huzaifaspineclinic/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">Facebook ↗</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
          <span>© MMXXVI Huzaifa Spine Clinic</span>
          <span>Pakistan's #1 Chiropractor · Karachi</span>
        </div>
      </div>
    </footer>
  );
}

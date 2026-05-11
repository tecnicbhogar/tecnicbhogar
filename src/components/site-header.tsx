import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

function BrandMark({ className }: { className?: string }) {
  // Unique mark: rounded appliance front (door + dial) crossed by a wrench head,
  // forming a stylised "C" of TecniCB. Drawn with strokes for a hand-crafted feel.
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="brand-warm" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(18 92% 58%)" />
          <stop offset="100%" stopColor="hsl(36 96% 56%)" />
        </linearGradient>
      </defs>
      {/* appliance body */}
      <rect x="5" y="5" width="30" height="30" rx="9" fill="url(#brand-warm)" />
      {/* drum / dial */}
      <circle cx="20" cy="21" r="7.5" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="32 8" transform="rotate(-25 20 21)" />
      {/* inner spark / power dot */}
      <circle cx="20" cy="21" r="2.2" fill="white" />
      {/* wrench notch on top — opens the C */}
      <path d="M14 9.5 L20 9.5 L22.5 6.5 L26 6.5 L24 10 L26 13.5 L22.5 13.5 L20 10.5 L14 10.5 Z" fill="hsl(20 14% 14%)" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <BrandMark className="h-10 w-10 drop-shadow-[0_4px_10px_hsl(18_92%_58%/0.35)]" />
          <span className="font-display text-lg font-semibold tracking-tight leading-none">
            TecniCB <span className="text-primary">Hogar</span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground mt-0.5">Servicio técnico · Valencia</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-primary" }} className="hover:text-primary">Inicio</Link>
          <Link to="/servicios" activeProps={{ className: "text-primary" }} className="hover:text-primary">Servicios</Link>
          <Link to="/zonas" activeProps={{ className: "text-primary" }} className="hover:text-primary">Zonas</Link>
          <Link to="/contacto" activeProps={{ className: "text-primary" }} className="hover:text-primary">Contacto</Link>
        </nav>
        <a
          href={SITE.phoneHref}
          className="hidden items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition hover:opacity-90 md:inline-flex"
        >
          <Phone className="h-4 w-4" /> {SITE.phone}
        </a>
      </div>
    </header>
  );
}


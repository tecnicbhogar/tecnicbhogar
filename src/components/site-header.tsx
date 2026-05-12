import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

function BrandMark({ className }: { className?: string }) {
  // Bold mark: warm shield (trust + service) with a wrench crossing a lightning
  // bolt (repair + electrodomésticos). Distinctive at small sizes.
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="brand-warm" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(14 95% 55%)" />
          <stop offset="55%" stopColor="hsl(24 96% 56%)" />
          <stop offset="100%" stopColor="hsl(40 98% 58%)" />
        </linearGradient>
        <linearGradient id="brand-steel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(0 0% 100%)" />
          <stop offset="100%" stopColor="hsl(210 16% 88%)" />
        </linearGradient>
      </defs>
      {/* Shield */}
      <path
        d="M24 2.5 L42 8 V23 C42 34.5 34.2 42.5 24 45.5 C13.8 42.5 6 34.5 6 23 V8 Z"
        fill="url(#brand-warm)"
        stroke="hsl(20 14% 14%)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Lightning bolt — power / electricidad */}
      <path
        d="M27 11 L16 26 H23 L21 37 L33 21 H26 Z"
        fill="hsl(48 100% 62%)"
        stroke="hsl(20 14% 14%)"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* Wrench — reparación, crossing the bolt diagonally */}
      <g transform="rotate(38 24 24)">
        <path
          d="M11 22 h18 a3 3 0 0 1 3 3 v0 a3 3 0 0 1 -3 3 h-18 z"
          fill="url(#brand-steel)"
          stroke="hsl(20 14% 14%)"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M11 19 a5 5 0 0 0 0 12 l0 -3 a3 3 0 0 1 0 -6 z"
          fill="url(#brand-steel)"
          stroke="hsl(20 14% 14%)"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </g>
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


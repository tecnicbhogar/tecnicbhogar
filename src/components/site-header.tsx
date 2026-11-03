import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { SITE } from "@/lib/site";
import logoUrl from "@/assets/logo-tecnicb-hogar.png";

const NAV = [
  { to: "/", label: "Inicio", exact: true },
  { to: "/servicios", label: "Servicios", exact: false },
  { to: "/zonas", label: "Zonas", exact: false },
  { to: "/contacto", label: "Contacto", exact: false },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 md:px-8">
        <Link to="/" onClick={() => setOpen(false)} className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <img
            src={logoUrl}
            alt="TecniCB Hogar — Reparación de electrodomésticos en Valencia"
            width={462}
            height={363}
            className="block h-[52px] w-auto shrink-0 object-contain sm:h-[70px]"
          />
          <span className="min-w-0 font-sans text-base font-semibold leading-snug tracking-normal sm:text-lg">
            TecniCB <span className="text-primary">Hogar</span>
            <span className="mt-0.5 block text-xs font-normal tracking-normal text-muted-foreground">
              Servicio técnico
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-4 text-sm font-medium md:flex lg:gap-7">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.exact }}
              activeProps={{ className: "text-primary" }}
              className="hover:text-primary"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <a
          href={SITE.phoneHref}
          className="hidden items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition hover:opacity-90 md:inline-flex"
        >
          <Phone className="h-4 w-4" /> {SITE.phone}
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground shadow-soft md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background px-4 pb-4 pt-2 md:hidden">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: n.exact }}
              activeProps={{ className: "text-primary" }}
              className="block rounded-xl px-3 py-3 text-base font-medium hover:bg-muted"
            >
              {n.label}
            </Link>
          ))}
          <a
            href={SITE.phoneHref}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-foreground px-4 py-3 text-sm font-semibold text-background"
          >
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
        </nav>
      )}
    </header>
  );
}

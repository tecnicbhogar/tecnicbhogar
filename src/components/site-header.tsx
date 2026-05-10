import { Link } from "@tanstack/react-router";
import { Phone, Wrench } from "lucide-react";
import { SITE } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-warm text-primary-foreground shadow-soft">
            <Wrench className="h-4 w-4" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            TecniCB <span className="text-primary">Hogar</span>
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

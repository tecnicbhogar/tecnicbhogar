import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import logoAsset from "@/assets/logo-tecnicb-hogar.jpeg.asset.json";
const logoUrl = logoAsset.url;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src={logoUrl}
            alt="TecniCB Hogar — Reparación de electrodomésticos en Valencia"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full shadow-soft"
          />
          <span className="font-display text-lg font-semibold tracking-tight leading-none">
            TecniCB <span className="text-primary">Hogar</span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground mt-0.5">
              Servicio técnico
            </span>
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

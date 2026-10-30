import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import logoAsset from "@/assets/logo-tecnicb-hogar-v2.jpeg.asset.json";
const logoUrl = logoAsset.url;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 md:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoUrl}
            alt="TecniCB Hogar — Reparación de electrodomésticos en Valencia"
            width={88}
            height={88}
            className="h-[68px] w-[68px] shrink-0 rounded-full bg-white ring-1 ring-black/5 shadow-soft md:h-[86px] md:w-[86px]"
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

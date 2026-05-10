import { Link } from "@tanstack/react-router";
import { SITE, SERVICES } from "@/lib/site";
import { Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-8">
        <div>
          <h3 className="font-display text-2xl">ReparaHogar Valencia</h3>
          <p className="mt-3 text-sm opacity-70">Servicio técnico de electrodomésticos rápido, garantizado y de proximidad en {SITE.area}.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider opacity-60">Servicios</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to="/servicios/$slug" params={{ slug: s.slug }} className="opacity-80 hover:opacity-100 hover:text-accent">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider opacity-60">Empresa</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/zonas" className="opacity-80 hover:opacity-100 hover:text-accent">Zonas de actuación</Link></li>
            <li><Link to="/contacto" className="opacity-80 hover:opacity-100 hover:text-accent">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider opacity-60">Contacto</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> {SITE.phone}</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> {SITE.email}</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> {SITE.area}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10 py-5 text-center text-xs opacity-60">
        © {new Date().getFullYear()} ReparaHogar Valencia · Todos los derechos reservados
      </div>
    </footer>
  );
}

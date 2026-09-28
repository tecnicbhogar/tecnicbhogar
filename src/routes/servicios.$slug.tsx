import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SERVICES, SITE } from "@/lib/site";
import { ServiceImage } from "@/components/service-image";
import { ContactForm } from "@/components/contact-form";
import { ArrowLeft, Check } from "lucide-react";

const COPY: Record<string, { intro: string; bullets: string[]; brands: string[] }> = {
  lavadoras: {
    intro: "Reparamos lavadoras de carga frontal y superior de todas las marcas. Solucionamos fugas, problemas de centrifugado, desagüe, ruidos, errores electrónicos y cambio de rodamientos.",
    bullets: ["No carga ni descarga agua", "No centrifuga o hace ruido", "Error en el display", "Goteos y fugas", "Cambio de rodamientos y correa"],
    brands: ["Bosch", "Balay", "Siemens", "LG", "Samsung", "Whirlpool", "AEG", "Beko", "Bauknecht", "Candy", "Hoover", "Indesit", "Hotpoint", "Zanussi", "Electrolux", "Edesa", "Fagor", "Aspes", "Otsein", "Lynx", "New Pol", "Daewoo", "Haier", "Hisense", "Miele", "Smeg", "Teka"],
  },
  lavavajillas: {
    intro: "Servicio técnico de lavavajillas: bombas de desagüe, resistencias, electroválvulas, filtros y módulos electrónicos. Lo dejamos lavando como el primer día.",
    bullets: ["No coge agua o no calienta", "Vajilla con restos", "Fugas o malos olores", "Error en el panel", "Cambio de bomba y filtros"],
    brands: ["Bosch", "Balay", "Siemens", "Fagor", "Teka", "Smeg", "Indesit", "Hotpoint", "AEG", "Electrolux", "Zanussi", "Whirlpool", "Bauknecht", "Beko", "Candy", "Hoover", "LG", "Samsung", "Edesa", "Aspes", "Miele", "Neff"],
  },
  frigorificos: {
    intro: "Reparación de frigoríficos y congeladores: combis, americanos, no frost y de una puerta. Recargas de gas, cambio de termostato, motor y resistencias de descongelación.",
    bullets: ["No enfría o enfría poco", "Hace escarcha en exceso", "Hace ruido o vibra", "Pierde agua", "Cambio de motor o termostato"],
    brands: ["Liebherr", "Bosch", "Balay", "Siemens", "LG", "Samsung", "Hisense", "Beko", "Whirlpool", "AEG", "Electrolux", "Zanussi", "Indesit", "Hotpoint", "Candy", "Hoover", "Bauknecht", "Fagor", "Edesa", "Aspes", "Haier", "Daewoo", "Smeg", "Teka", "Miele"],
  },
  hornos: {
    intro: "Reparación de hornos eléctricos encastrables y de sobremesa. Cambiamos resistencias, ventiladores, programadores y mandos.",
    bullets: ["No calienta o calienta mal", "El ventilador no funciona", "Mandos rotos", "Puerta o bisagras", "Programador electrónico"],
    brands: ["Bosch", "Balay", "Teka", "Siemens", "Whirlpool", "AEG", "Electrolux", "Zanussi", "Fagor", "Edesa", "Smeg", "Neff", "Bauknecht", "Indesit", "Hotpoint", "Candy", "Hoover", "Beko", "LG", "Samsung", "Miele", "Aspes"],
  },
  cocinas: {
    intro: "Servicio técnico para cocinas eléctricas, vitrocerámicas, de inducción y a gas. Cambio de zonas de calor, mandos, módulos y reparación de inyectores.",
    bullets: ["Vitro o inducción que no enciende", "Quemador de gas con fallo", "Cristal roto", "Mandos sueltos o rotos", "Conversión de gas natural a butano"],
    brands: ["Teka", "Bosch", "Balay", "Siemens", "Smeg", "Fagor", "AEG", "Electrolux", "Zanussi", "Whirlpool", "Bauknecht", "Indesit", "Hotpoint", "Candy", "Hoover", "Beko", "Edesa", "Aspes", "Cata", "Neff", "LG", "Samsung"],
  },
  termos: {
    intro: "Reparación e instalación de termos eléctricos y calentadores a gas. Cambio de resistencia, ánodo de magnesio, termostato y descalcificación completa.",
    bullets: ["No sale agua caliente", "Salta el térmico", "Goteos en el termo", "Calentador con fallo de encendido", "Cambio de resistencia y ánodo"],
    brands: ["Junkers", "Cointra", "Saunier Duval", "Ariston", "Vaillant", "Bosch", "Fagor", "Fleck", "Edesa", "Cabel", "Thermor", "Aparici", "Beretta", "Ferroli", "Baxi", "Chaffoteaux", "Neckar", "Forcali", "Teka"],
  },
  "aire-acondicionado": {
    intro: "Mantenimiento, limpieza y reparación de aire acondicionado split, multisplit y conductos en Valencia. Recarga de gas, limpieza de filtros y unidades, revisión de fugas y puesta a punto antes del verano.",
    bullets: ["Mantenimiento anual y limpieza profunda", "Recarga y detección de fugas de gas", "No enfría o no calienta", "Goteos en la unidad interior", "Ruidos, malos olores o error en el mando"],
    brands: ["Daikin", "Mitsubishi", "Fujitsu", "LG", "Samsung", "Panasonic", "Hisense", "Hitachi", "Toshiba", "Hyundai", "Haier", "Bosch", "Balay", "Saunier Duval", "Airwell", "Carrier", "Johnson", "Midea", "Gree", "TCL", "Electrolux", "AEG", "Beko"],
  },
};


export const Route = createFileRoute("/servicios/$slug")({
  head: ({ params }) => {
    const s = SERVICES.find((x) => x.slug === params.slug);
    if (!s) return { meta: [{ title: "Servicio no encontrado" }] };
    return {
      meta: [
        { title: `Reparación de ${s.title.toLowerCase()} en Valencia · ReparaHogar` },
        { name: "description", content: `Servicio técnico de ${s.title.toLowerCase()} en Valencia y alrededores. ${s.short}. Presupuesto gratis y garantía.` },
        { property: "og:title", content: `Reparación de ${s.title.toLowerCase()} en Valencia` },
        { property: "og:description", content: `${s.short}. Servicio rápido en Valencia y alrededores.` },
      ],
    };
  },
  loader: ({ params }) => {
    const service = SERVICES.find((x) => x.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  errorComponent: ({ error }) => <div className="p-12 text-center">{error.message}</div>,
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="font-display text-4xl">Servicio no encontrado</h1>
      <Link to="/servicios" className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">Ver servicios</Link>
    </div>
  ),
  component: ServicePage,
});

function ServicePage() {
  const { slug } = Route.useParams();
  const service = SERVICES.find((x) => x.slug === slug)!;
  const copy = COPY[service.slug];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-12 md:px-8 md:py-24">
          <div className="md:col-span-6">
            <Link to="/servicios" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
              <ArrowLeft className="h-4 w-4" /> Volver a servicios
            </Link>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-primary">Servicio técnico</p>
            <h1 className="mt-2 font-display text-5xl tracking-tight md:text-6xl">
              Reparación de <span className="bg-gradient-warm bg-clip-text text-transparent">{service.title.toLowerCase()}</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">{copy.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={SITE.whatsappHref} target="_blank" rel="noopener" className="rounded-full bg-[var(--color-whatsapp)] px-6 py-3.5 font-semibold text-white shadow-elegant">WhatsApp</a>
              <a href={SITE.phoneHref} className="rounded-full border border-foreground/15 bg-card px-6 py-3.5 font-semibold">Llamar {SITE.phone}</a>
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="overflow-hidden rounded-3xl shadow-elegant">
              <ServiceImage name={service.img} alt={service.title} className="aspect-[4/3] w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:grid-cols-2 md:px-8">
        <div>
          <h2 className="font-display text-3xl md:text-4xl">Averías más frecuentes</h2>
          <ul className="mt-6 space-y-3">
            {copy.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 rounded-2xl bg-card p-4 shadow-soft">
                <span className="mt-0.5 grid h-6 w-6 place-items-center rounded-full bg-gradient-warm text-primary-foreground"><Check className="h-3.5 w-3.5" /></span>
                <span className="text-sm">{b}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-10 font-display text-2xl">Servicio técnico multimarca</h3>
          <p className="mt-2 text-sm text-muted-foreground">Trabajamos con todas las marcas del mercado. Estas son algunas de las más habituales, pero <strong>si tu marca no aparece, también la reparamos</strong>: somos un servicio técnico multimarca independiente.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {copy.brands.map((b) => (
              <span key={b} className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">{b}</span>
            ))}
            <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">y muchas más…</span>
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl md:text-4xl">Pide presupuesto gratis</h2>
          <p className="mt-2 text-muted-foreground">Te respondemos en menos de 1 hora.</p>
          <div className="mt-6">
            <ContactForm defaultService={service.title} />
          </div>
        </div>
      </section>
    </>
  );
}

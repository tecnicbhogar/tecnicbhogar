import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { SERVICES } from "@/lib/site";
import { ServiceImage } from "@/components/service-image";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios · Reparación de electrodomésticos en Valencia" },
      { name: "description", content: "Reparamos lavadoras, lavavajillas, frigoríficos, hornos, cocinas, termos y calentadores en Valencia y alrededores." },
    ],
  }),
  component: ServicesLayout,
});

function ServicesLayout() {
  const matches = useMatches();
  const isLeaf = matches.some((m) => m.routeId === "/servicios/$slug");
  if (isLeaf) return <Outlet />;

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-wider text-primary">Servicios</p>
      <h1 className="mt-2 font-display text-5xl md:text-6xl">Todos los servicios.</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">Servicio técnico especializado en las principales marcas. Diagnóstico, recambios originales y garantía por escrito.</p>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <Link key={s.slug} to="/servicios/$slug" params={{ slug: s.slug }} className="group overflow-hidden rounded-3xl bg-card shadow-soft transition hover:shadow-elegant">
            <div className="aspect-[4/3] overflow-hidden">
              <ServiceImage name={s.img} alt={s.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <div className="flex items-center justify-between p-5">
              <div>
                <h3 className="font-display text-2xl">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.short}</p>
              </div>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-foreground text-background group-hover:bg-primary"><ArrowRight className="h-4 w-4" /></span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

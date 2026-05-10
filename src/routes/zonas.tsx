import { createFileRoute } from "@tanstack/react-router";
import valenciaImg from "@/assets/valencia.jpg";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/zonas")({
  head: () => ({
    meta: [
      { title: "Zonas de actuación · TecniCB Hogar" },
      { name: "description", content: "Servicio técnico de electrodomésticos en Valencia y alrededores en un radio de 40 km, incluido Xàtiva." },
    ],
  }),
  component: Zonas,
});

const ZONAS = [
  "Valencia capital", "Torrent", "Paterna", "Mislata", "Burjassot", "Manises",
  "Quart de Poblet", "Aldaia", "Alaquàs", "Xirivella", "Catarroja", "Massanassa",
  "Alfafar", "Sedaví", "Picanya", "Paiporta", "Albal", "Silla",
  "Alboraya", "Tavernes Blanques", "Almàssera", "Meliana", "Foios", "Moncada",
  "Godella", "Rocafort", "Puçol", "El Puig", "Sagunt", "Bétera",
  "Xàtiva", "Alzira", "Algemesí", "Sueca", "Cullera", "Carcaixent",
  "L'Alcúdia", "Llíria", "Riba-roja de Túria", "Chiva", "Buñol", "Requena (parcial)",
];

function Zonas() {
  return (
    <>
      <section className="relative overflow-hidden">
        <img src={valenciaImg} alt="Valencia" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-foreground/65" />
        <div className="mx-auto max-w-7xl px-4 py-24 text-background md:px-8 md:py-32">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Cobertura total</p>
          <h1 className="mt-2 max-w-3xl font-display text-5xl md:text-7xl">Valencia y alrededores en un radio de 40 km.</h1>
          <p className="mt-4 max-w-xl text-background/80">Llegamos hasta Xàtiva y toda el área metropolitana. Sin coste de desplazamiento al aceptar el presupuesto.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="mb-10">
          <h2 className="font-display text-3xl md:text-4xl">Nuestra área de cobertura</h2>
          <p className="mt-2 text-muted-foreground">Radio aproximado de 40 km desde Valencia capital, incluyendo Xàtiva.</p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
          <iframe
            title="Área de cobertura TecniCB Hogar - Valencia y 40 km a la redonda incluido Xàtiva"
            src="https://www.google.com/maps/d/embed?mid=1n_jE3VQqgJrK0p_5VkS9OqL3rJv5x4Q&hl=es"
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full"
          />
        </div>
        <div className="mt-4 overflow-hidden rounded-3xl border border-border shadow-soft">
          <iframe
            title="Mapa Valencia"
            src="https://www.google.com/maps?q=Valencia,+Spain&hl=es&z=9&output=embed"
            width="100%"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <h2 className="mb-6 font-display text-3xl md:text-4xl">Localidades incluidas</h2>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {ZONAS.map((z) => (
            <div key={z} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft transition hover:border-primary">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-warm text-primary-foreground"><MapPin className="h-4 w-4" /></span>
              <span className="text-sm font-medium">{z}</span>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">¿Tu localidad no está en la lista? Llámanos, seguramente también vamos.</p>
      </section>
    </>
  );
}

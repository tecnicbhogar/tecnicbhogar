import { createFileRoute } from "@tanstack/react-router";
import valenciaImg from "@/assets/valencia.jpg";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/zonas")({
  head: () => ({
    meta: [
      { title: "Zonas de actuación · ReparaHogar Valencia" },
      { name: "description", content: "Servicio técnico de electrodomésticos en Valencia capital y toda el área metropolitana." },
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
];

function Zonas() {
  return (
    <>
      <section className="relative overflow-hidden">
        <img src={valenciaImg} alt="Valencia" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-foreground/65" />
        <div className="mx-auto max-w-7xl px-4 py-24 text-background md:px-8 md:py-32">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Cobertura total</p>
          <h1 className="mt-2 max-w-3xl font-display text-5xl md:text-7xl">Valencia y todo el área metropolitana.</h1>
          <p className="mt-4 max-w-xl text-background/80">Llegamos donde estés. Sin coste de desplazamiento al aceptar el presupuesto.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
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

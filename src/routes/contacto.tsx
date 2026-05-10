import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/contact-form";
import { SITE } from "@/lib/site";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto · ReparaHogar Valencia" },
      { name: "description", content: "Contacta con ReparaHogar Valencia. Teléfono, WhatsApp, email y formulario para reparar tu electrodoméstico." },
      { property: "og:title", content: "Contacto · ReparaHogar Valencia" },
      { property: "og:description", content: "Pide tu presupuesto gratis por teléfono, WhatsApp o formulario." },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Hablemos</p>
          <h1 className="mt-2 font-display text-5xl tracking-tight md:text-6xl">Contacta con nosotros.</h1>
          <p className="mt-4 max-w-md text-muted-foreground">Estamos disponibles de lunes a sábado. Te respondemos en menos de 1 hora en horario laboral.</p>

          <div className="mt-10 space-y-3">
            <a href={SITE.phoneHref} className="flex items-center gap-4 rounded-2xl bg-card p-5 shadow-soft transition hover:shadow-elegant">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-warm text-primary-foreground"><Phone className="h-5 w-5" /></span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Teléfono</p>
                <p className="font-display text-xl">{SITE.phone}</p>
              </div>
            </a>
            <a href={SITE.whatsappHref} target="_blank" rel="noopener" className="flex items-center gap-4 rounded-2xl bg-card p-5 shadow-soft transition hover:shadow-elegant">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--color-whatsapp)] text-white"><MessageCircle className="h-5 w-5" /></span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</p>
                <p className="font-display text-xl">Chatea con un técnico</p>
              </div>
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-4 rounded-2xl bg-card p-5 shadow-soft transition hover:shadow-elegant">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-foreground text-background"><Mail className="h-5 w-5" /></span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                <p className="font-display text-xl">{SITE.email}</p>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-2xl bg-card p-5 shadow-soft">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-accent-foreground"><MapPin className="h-5 w-5" /></span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Cobertura</p>
                <p className="font-display text-xl">{SITE.area}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

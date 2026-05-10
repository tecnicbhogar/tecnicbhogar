import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import valenciaImg from "@/assets/valencia.jpg";
import { SERVICES, SITE } from "@/lib/site";
import { ServiceImage } from "@/components/service-image";
import { ArrowRight, BadgeCheck, Clock, ShieldCheck, Sparkles, Wrench } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Reparación de electrodomésticos en Valencia · ReparaHogar" },
      { name: "description", content: "Servicio técnico a domicilio en Valencia y alrededores. Lavadoras, frigoríficos, hornos, cocinas y termos. Presupuesto gratis y garantía." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-cream" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-12 md:grid-cols-12 md:px-8 md:pt-20">
          <div className="md:col-span-6 md:pt-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> Servicio técnico en {SITE.area}
            </span>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-balance md:text-7xl">
              Tu electrodoméstico,
              <span className="block bg-gradient-warm bg-clip-text text-transparent">como nuevo hoy.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Reparamos lavadoras, lavavajillas, frigoríficos, hornos, cocinas, termos y calentadores
              en toda Valencia. Presupuesto gratis, sin compromiso y con garantía escrita.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contacto" className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-6 py-3.5 font-semibold text-primary-foreground shadow-elegant transition hover:translate-y-[-1px]">
                Pedir presupuesto <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={SITE.whatsappHref} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-card px-6 py-3.5 font-semibold transition hover:border-foreground/40">
                WhatsApp directo
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { k: "+15", v: "años de experiencia" },
                { k: "24h", v: "respuesta media" },
                { k: "98%", v: "clientes satisfechos" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-3xl text-primary">{s.k}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative md:col-span-6">
            <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-accent/40 blur-3xl" />
            <div className="absolute -bottom-8 -right-6 h-56 w-56 rounded-full bg-primary/30 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl shadow-elegant">
              <img src={heroImg} alt="Técnico reparando una lavadora en Valencia" width={1600} height={1024} className="h-full w-full object-cover" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-card/95 p-4 backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-warm text-primary-foreground"><Wrench className="h-4 w-4" /></span>
                  <div>
                    <p className="text-sm font-semibold">Desplazamiento gratis</p>
                    <p className="text-xs text-muted-foreground">en aceptación del presupuesto</p>
                  </div>
                </div>
                <span className="hidden rounded-full bg-foreground px-3 py-1 text-xs font-semibold text-background sm:inline">Hoy disponible</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Nuestros servicios</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">Reparamos todo lo que enchufas.</h2>
          </div>
          <Link to="/servicios" className="hidden text-sm font-semibold text-primary hover:underline md:inline">Ver todos →</Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              to="/servicios/$slug"
              params={{ slug: s.slug }}
              className="group relative overflow-hidden rounded-3xl bg-card shadow-soft transition hover:shadow-elegant"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ServiceImage name={s.img} alt={s.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="flex items-center justify-between p-5">
                <div>
                  <h3 className="font-display text-2xl">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.short}</p>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-foreground text-background transition group-hover:bg-primary">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-foreground py-20 text-background">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="max-w-2xl font-display text-4xl md:text-5xl">Rápidos, honestos, cercanos.</h2>
          <p className="mt-4 max-w-xl text-background/70">Tres principios que nos diferencian del resto de servicios técnicos.</p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { i: Clock, t: "Intervención en 24h", d: "Damos prioridad a urgencias para que tu hogar no se pare." },
              { i: ShieldCheck, t: "Garantía de 3 meses", d: "Cubrimos por escrito mano de obra y recambios instalados." },
              { i: BadgeCheck, t: "Técnicos certificados", d: "Personal propio, formado en todas las marcas del mercado." },
            ].map(({ i: Icon, t, d }) => (
              <div key={t} className="rounded-3xl border border-background/10 bg-background/[0.03] p-7">
                <Icon className="h-6 w-6 text-accent" />
                <h3 className="mt-5 font-display text-2xl">{t}</h3>
                <p className="mt-2 text-sm text-background/70">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREA */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl shadow-soft">
            <img src={valenciaImg} alt="Skyline de Valencia al atardecer" loading="lazy" width={1600} height={800} className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Zona de actuación</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">Valencia y toda su área metropolitana.</h2>
            <p className="mt-4 text-muted-foreground">Cubrimos Valencia capital, Horta Nord, Horta Sud, l'Horta Oest y poblaciones del entorno como Torrent, Paterna, Mislata, Burjassot, Manises, Alboraya, Catarroja o Aldaia.</p>
            <Link to="/zonas" className="mt-6 inline-flex items-center gap-2 rounded-full border border-foreground/15 px-5 py-3 font-semibold transition hover:border-foreground/40">
              Ver todas las zonas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-10 md:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-sunset px-6 py-14 text-center text-primary-foreground md:px-16 md:py-20">
          <h2 className="mx-auto max-w-2xl font-display text-4xl md:text-5xl">¿Tu electrodoméstico ha fallado?</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">Cuéntanos qué ocurre y un técnico te atenderá hoy mismo. Presupuesto sin compromiso.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contacto" className="rounded-full bg-background px-6 py-3.5 font-semibold text-foreground shadow-elegant">Pedir presupuesto</Link>
            <a href={SITE.phoneHref} className="rounded-full border border-primary-foreground/40 px-6 py-3.5 font-semibold text-primary-foreground hover:bg-primary-foreground/10">Llamar ahora</a>
          </div>
        </div>
      </section>
    </>
  );
}

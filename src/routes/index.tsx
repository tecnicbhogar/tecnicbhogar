import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import valenciaImg from "@/assets/valencia.jpg";
import pasoAvisoImg from "@/assets/paso-aviso.jpg";
import pasoPresupuestoImg from "@/assets/paso-presupuesto.jpg";
import pasoReparacionImg from "@/assets/paso-reparacion.jpg";
import { SERVICES, SITE } from "@/lib/site";
import { ServiceImage } from "@/components/service-image";
import { ArrowRight, BadgeCheck, Clock, Info, PhoneCall, ClipboardCheck, ShieldCheck, Sparkles, Star, Quote, Wrench } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "María G.",
    location: "Valencia (Ruzafa)",
    service: "Lavadora Bosch",
    text: "Vinieron el mismo día que llamé. El técnico fue muy amable, me explicó todo con detalle y dejó la lavadora como nueva. El precio justo y con garantía por escrito. Repetiré sin dudarlo.",
  },
  {
    name: "Javier P.",
    location: "Torrent",
    service: "Frigorífico LG",
    text: "Pensaba que tendría que comprar un frigorífico nuevo y al final lo arreglaron en una hora. Profesionales de verdad, honestos y muy rápidos. 100% recomendable.",
  },
  {
    name: "Carmen R.",
    location: "Paterna",
    service: "Horno Balay",
    text: "Excelente servicio. Puntuales, limpios y muy profesionales. Me dieron el presupuesto antes de tocar nada y respetaron el precio. Una empresa seria.",
  },
  {
    name: "Andrés M.",
    location: "Xàtiva",
    service: "Termo eléctrico",
    text: "Sin agua caliente un sábado por la mañana y vinieron en pocas horas. Solucionado al momento. Trato muy cercano y precio razonable. Gracias TecniCB.",
  },
  {
    name: "Lucía V.",
    location: "Mislata",
    service: "Lavavajillas Siemens",
    text: "Llevaba semanas con el lavavajillas estropeado y otros técnicos no daban con el problema. Ellos lo detectaron en 10 minutos. Muy contentos con el resultado.",
  },
  {
    name: "Rafael S.",
    location: "Burjassot",
    service: "Vitrocerámica",
    text: "Atención de 10. Te tratan con cariño, te explican qué tiene el aparato y deciden contigo. Sin presiones. Es difícil encontrar un servicio técnico tan honesto.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Reparación de Electrodomésticos en Valencia a Domicilio | TecniCB Hogar" },
      { name: "description", content: "Reparación de electrodomésticos en Valencia y alrededores: lavadoras, frigoríficos, lavavajillas, hornos, cocinas y termos. Servicio técnico a domicilio en 24h, presupuesto gratis y garantía por escrito. Llámanos." },
      { name: "keywords", content: "reparación electrodomésticos Valencia, servicio técnico Valencia, reparar lavadora Valencia, reparar frigorífico Valencia, reparar lavavajillas Valencia, reparar horno Valencia, técnico electrodomésticos a domicilio Valencia, Xàtiva, Torrent, Paterna, Mislata, Burjassot, Manises, Alboraya, Catarroja, Aldaia" },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "ES-V" },
      { name: "geo.placename", content: "Valencia" },
      { property: "og:title", content: "Reparación de Electrodomésticos en Valencia a Domicilio | TecniCB Hogar" },
      { property: "og:description", content: "Servicio técnico a domicilio en Valencia y alrededores (radio 40 km, incluido Xàtiva). Lavadoras, frigoríficos, hornos, cocinas y termos. Presupuesto gratis y garantía escrita." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_ES" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Reparación de Electrodomésticos en Valencia | TecniCB Hogar" },
      { name: "twitter:description", content: "Servicio técnico a domicilio en Valencia y alrededores. Presupuesto gratis y garantía escrita." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://tecnicbhogar.lovable.app/#localbusiness",
          name: "TecniCB Hogar",
          description: "Servicio técnico a domicilio de reparación de electrodomésticos en Valencia y alrededores: lavadoras, frigoríficos, lavavajillas, hornos, cocinas y termos. Presupuesto gratis y garantía escrita.",
          url: "https://tecnicbhogar.lovable.app",
          telephone: "+34672304866",
          email: "info@tecnicbhogar.es",
          image: "https://tecnicbhogar.lovable.app/og-image.jpg",
          priceRange: "€€",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Valencia",
            addressRegion: "Valencia",
            addressCountry: "ES",
          },
          areaServed: [
            { "@type": "City", name: "Valencia" },
            { "@type": "City", name: "Xàtiva" },
            { "@type": "City", name: "Torrent" },
            { "@type": "City", name: "Paterna" },
            { "@type": "City", name: "Mislata" },
            { "@type": "City", name: "Burjassot" },
            { "@type": "City", name: "Manises" },
            { "@type": "City", name: "Alboraya" },
            { "@type": "City", name: "Catarroja" },
            { "@type": "City", name: "Aldaia" },
            {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 39.4699,
                longitude: -0.3763,
              },
              geoRadius: 40000,
            },
          ],
          serviceType: "Reparación de electrodomésticos a domicilio",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Reparación de electrodomésticos a domicilio en Valencia",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reparación de lavadoras a domicilio" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reparación de lavavajillas a domicilio" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reparación de frigoríficos a domicilio" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reparación de hornos eléctricos a domicilio" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reparación de cocinas a domicilio" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reparación de termos y calentadores a domicilio" } },
            ],
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "09:00",
              closes: "20:00",
            },
          ],
          sameAs: ["https://wa.me/34672304866"],
        }),
      },
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
              <Sparkles className="h-3.5 w-3.5 text-primary" /> Servicio técnico de electrodomésticos en {SITE.area}
            </span>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-balance md:text-7xl">
              Reparación de electrodomésticos en
              <span className="block bg-gradient-warm bg-clip-text text-transparent">Valencia, hoy mismo.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Servicio técnico a domicilio en <strong>Valencia y alrededores</strong>: reparamos lavadoras, lavavajillas, frigoríficos, hornos, cocinas, termos y calentadores de todas las marcas. <strong>Presupuesto gratis en caso de aceptar la reparación</strong>, sin compromiso y con <strong>garantía escrita</strong>.
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

      {/* PROCESO */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Cómo trabajamos</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl">Tres pasos y tu avería resuelta.</h2>
          <p className="mt-4 text-muted-foreground">Un proceso transparente, sin sorpresas y pensado para que recuperes tu electrodoméstico cuanto antes.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              n: "01",
              i: PhoneCall,
              t: "Atención del aviso",
              d: "Llámanos o escríbenos por WhatsApp. Nuestro equipo de teleoperadores recoge los datos de tu avería y la traslada al técnico de tu zona en cuestión de minutos.",
              img: pasoAvisoImg,
              alt: "Teleoperadora atendiendo una llamada",
            },
            {
              n: "02",
              i: ClipboardCheck,
              t: "Diagnóstico y presupuesto",
              d: "Acudimos a tu domicilio, revisamos el aparato y te entregamos un presupuesto cerrado y por escrito. Sin compromiso ni cargos ocultos.",
              img: pasoPresupuestoImg,
              alt: "Técnico revisando una lavadora y elaborando presupuesto",
            },
            {
              n: "03",
              i: Wrench,
              t: "Reparación garantizada",
              d: "Una vez aprobado el presupuesto, nuestros técnicos comienzan el trabajo lo antes posible y dejan tu electrodoméstico funcionando con garantía por escrito.",
              img: pasoReparacionImg,
              alt: "Técnico reparando un electrodoméstico",
            },
          ].map(({ n, i: Icon, t, d, img, alt }) => (
            <div key={n} className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition hover:shadow-elegant">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={img} alt={alt} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 font-display text-sm font-semibold text-primary shadow-soft backdrop-blur">Paso {n}</span>
                <span className="absolute -bottom-5 right-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-warm text-primary-foreground shadow-elegant ring-4 ring-card">
                  <Icon className="h-5 w-5" />
                </span>
              </div>
              <div className="p-7 pt-8">
                <h3 className="font-display text-2xl">{t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MULTIMARCA + AVISO LEGAL */}
      <section className="mx-auto max-w-7xl px-4 pb-10 md:px-8">
        <div className="grid gap-6 rounded-3xl bg-gradient-cream p-8 md:grid-cols-5 md:p-12">
          <div className="md:col-span-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-soft">
              <BadgeCheck className="h-3.5 w-3.5" /> Expertos multimarca
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">Reparamos todas las marcas del mercado.</h2>
            <p className="mt-4 text-muted-foreground">
              Somos un servicio técnico independiente y especializado en <strong>multimarca</strong>: Bosch, Balay, Siemens, LG, Samsung, Whirlpool, AEG, Beko, Teka, Fagor, Smeg, Junkers, Ariston, Vaillant y muchas más. Nuestra polivalencia nos permite intervenir el mismo día sin depender de fabricantes.
            </p>
          </div>
          <aside className="md:col-span-2 rounded-2xl border border-border bg-card p-6 text-sm shadow-soft">
            <div className="flex items-center gap-2 text-primary">
              <Info className="h-4 w-4" />
              <p className="text-xs font-semibold uppercase tracking-wider">Aviso legal</p>
            </div>
            <p className="mt-3 text-muted-foreground">
              <strong>TecniCB Hogar</strong> es un servicio técnico independiente y <strong>no es el servicio técnico oficial</strong> de ninguna de las marcas mencionadas. Este sitio web no mantiene vinculación alguna con dichos fabricantes. Todas las marcas pertenecen a sus respectivos propietarios y se citan únicamente con fines informativos, al amparo de los <em>arts. 32 y 33 de la Ley de Propiedad Intelectual</em>.
            </p>
          </aside>
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

      {/* TESTIMONIOS */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Opiniones de clientes</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">Lo que dicen quienes ya nos han llamado.</h2>
            <p className="mt-4 text-muted-foreground">Más de 15 años reparando electrodomésticos en Valencia y miles de hogares satisfechos. Estas son algunas de las valoraciones reales de nuestros clientes.</p>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4 shadow-soft">
            <div className="flex flex-col">
              <span className="font-display text-3xl text-primary">4,9 / 5</span>
              <span className="text-xs text-muted-foreground">Media de valoraciones</span>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="mt-1 text-xs text-muted-foreground">+800 reparaciones / año</span>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <article key={t.name} className="relative flex flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition hover:shadow-elegant">
              <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/15" />
              <div className="flex gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">"{t.text}"</p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-display text-lg leading-tight">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location} · {t.service}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-10 md:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-sunset px-6 py-14 text-center text-primary-foreground md:px-16 md:py-20">
          <h2 className="mx-auto max-w-2xl font-display text-4xl md:text-5xl">¿Tu electrodoméstico ha fallado?</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">Cuéntanos qué ocurre y un técnico se desplazará hoy mismo a tu domicilio para diagnosticar la avería. <strong>Si aceptas la reparación, el desplazamiento y el diagnóstico son gratis.</strong> Si no la aceptas, solo se cobra una pequeña tarifa por el desplazamiento y diagnóstico.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contacto" className="rounded-full bg-background px-6 py-3.5 font-semibold text-foreground shadow-elegant">Solicitar diagnóstico</Link>
            <a href={SITE.phoneHref} className="rounded-full border border-primary-foreground/40 px-6 py-3.5 font-semibold text-primary-foreground hover:bg-primary-foreground/10">Llamar ahora</a>
          </div>
        </div>
      </section>
    </>
  );
}

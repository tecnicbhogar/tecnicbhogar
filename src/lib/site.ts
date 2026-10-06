export const SITE = {
  name: "TecniCB Hogar",
  phone: "+34 672 304 866",
  phoneHref: "tel:+34672304866",
  whatsappNumber: "34672304866",
  whatsappHref:
    "https://wa.me/34672304866?text=" +
    encodeURIComponent(
      "¡Hola TecniCB Hogar! 👋\n\n" +
        "• Aparato averiado: \n" +
        "• Avería: ",
    ),
  email: "info@tecnicbhogar.es",
  area: "Valencia y alrededores (radio 40 km, incluido Xàtiva)",
};

export const SERVICES = [
  { slug: "lavadoras", title: "Lavadoras", short: "Centrifugado, fugas y desagüe", img: "lavadora" },
  { slug: "lavavajillas", title: "Lavavajillas", short: "Bombas, resistencias y filtros", img: "lavavajillas" },
  { slug: "frigorificos", title: "Frigoríficos", short: "Frío, motor y termostato", img: "frigorifico" },
  { slug: "hornos", title: "Hornos eléctricos", short: "Resistencias, ventilador y mandos", img: "horno" },
  { slug: "cocinas", title: "Cocinas", short: "Vitrocerámica, inducción y gas", img: "cocina" },
  { slug: "termos", title: "Termos y calentadores", short: "Eléctricos y a gas", img: "termo" },
  { slug: "aire-acondicionado", title: "Aire acondicionado", short: "Mantenimiento, recarga y limpieza", img: "aireAcondicionado" },
] as const;

export type ServiceSlug = typeof SERVICES[number]["slug"];

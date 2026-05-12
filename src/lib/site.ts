export const SITE = {
  name: "TecniCB Hogar",
  phone: "+34 641 897 997",
  phoneHref: "tel:+34641897997",
  whatsappNumber: "34641897997",
  whatsappHref:
    "https://wa.me/34641897997?text=" +
    encodeURIComponent(
      "Hola TecniCB Hogar 👋, quiero solicitar una reparación.\n\n" +
        "1) ¿Qué aparato desea reparar? (responda con el número)\n" +
        "  1. Lavadora\n" +
        "  2. Lavavajillas\n" +
        "  3. Frigorífico\n" +
        "  4. Horno eléctrico\n" +
        "  5. Cocina / Vitrocerámica / Inducción\n" +
        "  6. Termo / Calentador\n" +
        "  7. Aire acondicionado\n\n" +
        "2) ¿Qué avería tiene? \n" +
        "3) Marca del aparato: \n" +
        "4) Antigüedad aproximada: \n" +
        "5) Población / Zona de Valencia: \n\n" +
        "Gracias. En cuanto reciba sus datos, le redirigiré con un técnico para coordinar el horario de visita.",
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

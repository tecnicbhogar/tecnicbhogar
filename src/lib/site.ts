export const SITE = {
  name: "TecniCB Hogar",
  phone: "+34 641 897 997",
  phoneHref: "tel:+34641897997",
  whatsappNumber: "34641897997",
  whatsappHref:
    "https://wa.me/34641897997?text=" +
    encodeURIComponent(
      "Hola TecniCB Hogar 👋, me gustaría solicitar una visita técnica a domicilio.\n\n" +
        "Para agilizar la gestión, le facilito mis datos:\n\n" +
        "• Nombre: \n" +
        "• Teléfono: \n" +
        "• Población / Zona: \n" +
        "• Aparato a reparar: (lavadora, lavavajillas, frigorífico, horno, cocina, termo o aire acondicionado)\n" +
        "• Marca y modelo (si lo conoce): \n" +
        "• Antigüedad aproximada: \n" +
        "• Avería o síntomas que presenta: \n\n" +
        "Entiendo cómo funciona el servicio: el técnico se desplaza, revisa el aparato y me entrega un presupuesto por escrito. Si acepto la reparación, el desplazamiento y el diagnóstico están incluidos; si no la acepto, solo abono el desplazamiento y diagnóstico.\n\n" +
        "Quedo a la espera de que me confirmen día y hora de visita. Muchas gracias.",
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

export const SITE = {
  name: "ReparaHogar Valencia",
  phone: "+34 600 123 456",
  phoneHref: "tel:+34600123456",
  whatsappNumber: "34600123456",
  whatsappHref: "https://wa.me/34600123456?text=Hola%2C%20necesito%20reparar%20un%20electrodom%C3%A9stico",
  email: "info@reparahogarvalencia.es",
  area: "Valencia y alrededores",
};

export const SERVICES = [
  { slug: "lavadoras", title: "Lavadoras", short: "Centrifugado, fugas y desagüe", img: "lavadora" },
  { slug: "lavavajillas", title: "Lavavajillas", short: "Bombas, resistencias y filtros", img: "lavavajillas" },
  { slug: "frigorificos", title: "Frigoríficos", short: "Frío, motor y termostato", img: "frigorifico" },
  { slug: "hornos", title: "Hornos eléctricos", short: "Resistencias, ventilador y mandos", img: "horno" },
  { slug: "cocinas", title: "Cocinas", short: "Vitrocerámica, inducción y gas", img: "cocina" },
  { slug: "termos", title: "Termos y calentadores", short: "Eléctricos y a gas", img: "termo" },
] as const;

export type ServiceSlug = typeof SERVICES[number]["slug"];

export const SITE = {
  name: "TecniCB Hogar",
  phone: "+34 641 897 997",
  phoneHref: "tel:+34641897997",
  whatsappNumber: "34641897997",
  whatsappHref: "https://wa.me/34641897997?text=Hola%2C%20necesito%20reparar%20un%20electrodom%C3%A9stico",
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
] as const;

export type ServiceSlug = typeof SERVICES[number]["slug"];

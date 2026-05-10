import { useState } from "react";
import { SERVICES, SITE } from "@/lib/site";

export function ContactForm({ defaultService }: { defaultService?: string }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: defaultService ?? "",
    message: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Hola, soy ${form.name}.%0ATel: ${form.phone}%0AServicio: ${form.service}%0A${form.message}`;
    window.open(`https://wa.me/${SITE.whatsappNumber}?text=${text}`, "_blank");
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-3xl bg-card p-6 shadow-soft md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-1.5 text-sm">
          <span className="font-medium">Nombre</span>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-primary"
            placeholder="Tu nombre"
          />
        </label>
        <label className="grid gap-1.5 text-sm">
          <span className="font-medium">Teléfono</span>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-primary"
            placeholder="600 000 000"
          />
        </label>
      </div>
      <label className="grid gap-1.5 text-sm">
        <span className="font-medium">Electrodoméstico</span>
        <select
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          className="rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-primary"
        >
          <option value="">Selecciona un servicio</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.title}>{s.title}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5 text-sm">
        <span className="font-medium">¿Qué le ocurre?</span>
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-primary"
          placeholder="Describe brevemente la avería"
        />
      </label>
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-warm px-6 py-3.5 font-semibold text-primary-foreground shadow-elegant transition hover:translate-y-[-1px]"
      >
        Solicitar presupuesto gratis
      </button>
      {sent && (
        <p className="text-center text-sm text-[var(--color-whatsapp)]">
          ¡Hemos abierto WhatsApp para enviar tu solicitud!
        </p>
      )}
    </form>
  );
}

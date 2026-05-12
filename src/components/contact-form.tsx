import { useState } from "react";
import { z } from "zod";
import { SERVICES, SITE } from "@/lib/site";

const APPLIANCES = SERVICES.map((s) => s.title);

const AGE_OPTIONS = [
  "Menos de 2 años",
  "Entre 2 y 5 años",
  "Entre 5 y 10 años",
  "Más de 10 años",
  "No lo sé",
] as const;

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Indica tu nombre")
    .max(80, "Máximo 80 caracteres"),
  phone: z
    .string()
    .trim()
    .min(6, "Teléfono no válido")
    .max(20, "Teléfono no válido")
    .regex(/^[0-9+\s().-]+$/, "Solo números y símbolos de teléfono"),
  appliance: z.string().min(1, "Selecciona el aparato"),
  brand: z.string().trim().max(40, "Máximo 40 caracteres").optional().or(z.literal("")),
  age: z.string().min(1, "Selecciona la antigüedad"),
  zone: z
    .string()
    .trim()
    .min(2, "Indica tu población o zona")
    .max(60, "Máximo 60 caracteres"),
  fault: z
    .string()
    .trim()
    .min(5, "Describe brevemente la avería")
    .max(600, "Máximo 600 caracteres"),
});

type FormState = {
  name: string;
  phone: string;
  appliance: string;
  brand: string;
  age: string;
  zone: string;
  fault: string;
};

function buildMessage(d: FormState) {
  return (
    `Hola TecniCB Hogar 👋, solicito una reparación.\n\n` +
    `• Nombre: ${d.name}\n` +
    `• Teléfono: ${d.phone}\n` +
    `• Aparato: ${d.appliance}\n` +
    `• Marca: ${d.brand || "No indicada"}\n` +
    `• Antigüedad: ${d.age}\n` +
    `• Zona: ${d.zone}\n` +
    `• Avería: ${d.fault}\n\n` +
    `Quedo a la espera de horario de visita. Gracias.`
  );
}

export function ContactForm({ defaultService }: { defaultService?: string }) {
  const [sent, setSent] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    appliance: defaultService ?? "",
    brand: "",
    age: "",
    zone: "",
    fault: "",
  });

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = formSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormState, string>> = {};
      for (const issue of result.error.issues) {
        const k = issue.path[0] as keyof FormState;
        if (!fieldErrors[k]) fieldErrors[k] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setPreview(buildMessage(result.data));
    setSent(false);
  }

  function openWhatsapp() {
    if (!preview) return;
    const url = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(preview)}`;
    window.open(url, "_blank", "noopener");
    setSent(true);
  }

  const inputCls =
    "rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-primary";
  const errCls = "border-destructive focus:border-destructive";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="grid gap-4 rounded-3xl bg-card p-6 shadow-soft md:p-8"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-1.5 text-sm">
          <span className="font-medium">Nombre</span>
          <input
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            maxLength={80}
            className={`${inputCls} ${errors.name ? errCls : ""}`}
            placeholder="Tu nombre"
          />
          {errors.name && <span className="text-xs text-destructive">{errors.name}</span>}
        </label>
        <label className="grid gap-1.5 text-sm">
          <span className="font-medium">Teléfono</span>
          <input
            type="tel"
            inputMode="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            maxLength={20}
            className={`${inputCls} ${errors.phone ? errCls : ""}`}
            placeholder="600 000 000"
          />
          {errors.phone && <span className="text-xs text-destructive">{errors.phone}</span>}
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-1.5 text-sm">
          <span className="font-medium">Aparato</span>
          <select
            value={form.appliance}
            onChange={(e) => update("appliance", e.target.value)}
            className={`${inputCls} ${errors.appliance ? errCls : ""}`}
          >
            <option value="">Selecciona un aparato</option>
            {APPLIANCES.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
          {errors.appliance && (
            <span className="text-xs text-destructive">{errors.appliance}</span>
          )}
        </label>
        <label className="grid gap-1.5 text-sm">
          <span className="font-medium">Marca <span className="text-muted-foreground">(opcional)</span></span>
          <input
            value={form.brand}
            onChange={(e) => update("brand", e.target.value)}
            maxLength={40}
            className={`${inputCls} ${errors.brand ? errCls : ""}`}
            placeholder="Bosch, Balay, LG…"
          />
          {errors.brand && <span className="text-xs text-destructive">{errors.brand}</span>}
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-1.5 text-sm">
          <span className="font-medium">Antigüedad</span>
          <select
            value={form.age}
            onChange={(e) => update("age", e.target.value)}
            className={`${inputCls} ${errors.age ? errCls : ""}`}
          >
            <option value="">Selecciona la antigüedad</option>
            {AGE_OPTIONS.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
          {errors.age && <span className="text-xs text-destructive">{errors.age}</span>}
        </label>
        <label className="grid gap-1.5 text-sm">
          <span className="font-medium">Zona / Población</span>
          <input
            value={form.zone}
            onChange={(e) => update("zone", e.target.value)}
            maxLength={60}
            className={`${inputCls} ${errors.zone ? errCls : ""}`}
            placeholder="Valencia, Torrent, Paterna…"
          />
          {errors.zone && <span className="text-xs text-destructive">{errors.zone}</span>}
        </label>
      </div>

      <label className="grid gap-1.5 text-sm">
        <span className="font-medium">¿Qué avería tiene?</span>
        <textarea
          rows={4}
          value={form.fault}
          onChange={(e) => update("fault", e.target.value)}
          maxLength={600}
          className={`${inputCls} ${errors.fault ? errCls : ""}`}
          placeholder="Describe brevemente el problema (no enciende, hace ruido, no enfría, etc.)"
        />
        {errors.fault && <span className="text-xs text-destructive">{errors.fault}</span>}
      </label>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-warm px-6 py-3.5 font-semibold text-primary-foreground shadow-elegant transition hover:translate-y-[-1px]"
      >
        Enviar por WhatsApp
      </button>

      {sent && (
        <p className="text-center text-sm text-[var(--color-whatsapp)]">
          ¡Hemos abierto WhatsApp con tu solicitud lista para enviar!
        </p>
      )}
    </form>
  );
}

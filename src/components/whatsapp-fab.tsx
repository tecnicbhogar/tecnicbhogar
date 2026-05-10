import { SITE } from "@/lib/site";
import { MessageCircle } from "lucide-react";

export function WhatsappFab() {
  return (
    <a
      href={SITE.whatsappHref}
      target="_blank"
      rel="noopener"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[var(--color-whatsapp)] px-4 py-3 text-white shadow-elegant transition hover:scale-105"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[var(--color-whatsapp)] opacity-40" />
      <MessageCircle className="h-5 w-5" />
      <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
    </a>
  );
}

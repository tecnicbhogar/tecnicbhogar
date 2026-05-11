import { SITE } from "@/lib/site";

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-6 w-6"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.495-1.318.144-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.692-1.39zm-2.792 5.142c-3.73 0-6.766-3.038-6.766-6.768 0-1.476.473-2.882 1.353-4.043l-.93-2.78 2.886.93a6.74 6.74 0 0 1 3.484-.96c3.73 0 6.766 3.037 6.766 6.768 0 3.73-3.036 6.853-6.79 6.853zm0-15.215c-4.673 0-8.464 3.792-8.464 8.464 0 1.46.388 2.92 1.118 4.18L8 25l4.5-1.18a8.41 8.41 0 0 0 4.027 1.03h.014c4.67 0 8.46-3.79 8.46-8.46 0-2.27-.92-4.39-2.5-5.99-1.6-1.6-3.7-2.49-5.97-2.49z" />
      </svg>
      <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
    </a>
  );
}

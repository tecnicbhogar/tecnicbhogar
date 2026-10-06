import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsappFab } from "@/components/whatsapp-fab";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Página no encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">La página que buscas no existe o ha sido movida.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90">
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Esta página no se cargó</h1>
        <p className="mt-2 text-sm text-muted-foreground">Algo ha fallado. Puedes reintentar o volver al inicio.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">Reintentar</button>
          <a href="/" className="rounded-full border border-input px-5 py-2.5 text-sm font-semibold">Inicio</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "TecniCB Hogar · Reparación de electrodomésticos en Valencia" },
      { name: "description", content: "Servicio técnico TecniCB Hogar en Valencia y alrededores (radio 40 km, incluido Xàtiva): lavadoras, frigoríficos, hornos, cocinas y termos. Presupuesto gratis." },
      { name: "author", content: "TecniCB Hogar" },
      { name: "google-site-verification", content: "googlef7f0993698ac9423" },
      { property: "og:title", content: "TecniCB Hogar · Reparación de electrodomésticos en Valencia" },
      { property: "og:description", content: "Servicio técnico TecniCB Hogar en Valencia y alrededores (radio 40 km, incluido Xàtiva): lavadoras, frigoríficos, hornos, cocinas y termos. Presupuesto gratis." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "TecniCB Hogar · Reparación de electrodomésticos en Valencia" },
      { name: "twitter:description", content: "Servicio técnico TecniCB Hogar en Valencia y alrededores (radio 40 km, incluido Xàtiva): lavadoras, frigoríficos, hornos, cocinas y termos. Presupuesto gratis." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/66242dee-81a9-4bc6-a012-6a628f309b0a/id-preview-edb0a0ac--5dbe6c04-4244-4e1b-8cf0-ff07190d203a.lovable.app-1778427472714.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/66242dee-81a9-4bc6-a012-6a628f309b0a/id-preview-edb0a0ac--5dbe6c04-4244-4e1b-8cf0-ff07190d203a.lovable.app-1778427472714.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
        <WhatsappFab />
      </div>
    </QueryClientProvider>
  );
}

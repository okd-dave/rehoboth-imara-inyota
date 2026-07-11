import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { I18nProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-8xl font-bold text-royal">404</h1>
        <h2 className="mt-4 font-serif text-2xl text-foreground">Page introuvable</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Cette page n'existe pas ou a été déplacée.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center h-12 px-6 rounded-full bg-royal text-white text-xs font-bold uppercase tracking-widest hover:bg-gold hover:text-accent-foreground transition-colors"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-3xl text-foreground">Une erreur est survenue</h1>
        <p className="mt-3 text-sm text-muted-foreground">Veuillez réessayer ou revenir à l'accueil.</p>
        <div className="mt-8 flex justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center h-12 px-6 rounded-full bg-royal text-white text-xs font-bold uppercase tracking-widest"
          >
            Réessayer
          </button>
          <a href="/" className="inline-flex items-center h-12 px-6 rounded-full border border-border text-xs font-bold uppercase tracking-widest">
            Accueil
          </a>
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
      { title: "Église Rehoboth Imara Inyota Bwiza — Foi, Espérance, Amour" },
      { name: "description", content: "Rehoboth Imara Inyota Bwiza : une église centrée sur le Christ où la présence de Dieu transforme les vies, restaure les familles et révèle les destinées." },
      { name: "author", content: "Église Rehoboth Imara Inyota Bwiza" },
      { name: "theme-color", content: "#1E3A8A" },
      { property: "og:title", content: "Église Rehoboth Imara Inyota Bwiza" },
      { property: "og:description", content: "Un lieu où la présence de Dieu transforme les vies, restaure les familles et révèle les destinées." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <I18nProvider>
          <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Nav />
            <main className="flex-1">
              <Outlet />
            </main>
            <Footer />
            <BackToTop />
          </div>
        </I18nProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

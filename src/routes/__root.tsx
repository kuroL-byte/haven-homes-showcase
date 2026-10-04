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
import { Toaster } from "sonner";
import appCss from "../styles.css?url";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppWidget } from "@/components/common/WhatsAppWidget";
import { GlobalBackgroundVideo } from "@/components/common/GlobalBackgroundVideo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#080c14] px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-white">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-white">Page not found</h2>
        <p className="mt-2 text-sm text-slate-400">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-gold px-5 py-2.5 text-sm font-bold text-navy transition-all hover:bg-gold-light"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    console.error("Application error boundary:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#080c14] px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-white">
          This page encountered an issue
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Something unexpected occurred. You can try refreshing or return to the main page.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-xl bg-gold px-4 py-2 text-sm font-bold text-navy transition-all hover:bg-gold-light cursor-pointer"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/10"
          >
            Go to Home
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
      { title: "Parjane Buildcon — Building Tomorrow's Landmarks Today" },
      {
        name: "description",
        content:
          "Parjane Buildcon: Crafting premium residential and commercial developments with engineering innovation, quality, and trust across Maharashtra.",
      },
      { name: "author", content: "Parjane Buildcon" },
      { property: "og:title", content: "Parjane Buildcon — Building Tomorrow's Landmarks Today" },
      {
        property: "og:description",
        content:
          "Luxury residential, commercial, industrial and turnkey infrastructure developments.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600;1,700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="text-[#f8fafc] antialiased">
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
      <GlobalBackgroundVideo />
      <Navbar />
      <main className="relative z-10 min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppWidget />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#0e1526",
            color: "#ffffff",
            border: "1px solid rgba(212, 175, 55, 0.4)",
            borderRadius: "0.75rem",
          },
        }}
      />
    </QueryClientProvider>
  );
}

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
import { Nav } from "../components/site/Nav";
import { Footer } from "../components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="font-display text-[9rem] leading-none text-gold/30">404</div>
        <h2 className="mt-4 font-display text-3xl italic">Off the chart</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          This page doesn't exist on our anatomy.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-3 border border-gold/40 hover:bg-gold hover:text-background transition-all px-6 h-11 text-[11px] font-mono uppercase tracking-[0.2em] text-gold"
        >
          Return Home
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
        <h1 className="font-display text-3xl italic">Misalignment detected</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Something went out of place. Try again or head home.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="border border-gold/40 hover:bg-gold hover:text-background transition-all px-6 h-11 text-[11px] font-mono uppercase tracking-[0.2em] text-gold"
          >
            Try Again
          </button>
          <a href="/" className="border border-border hover:border-foreground transition-all px-6 h-11 text-[11px] font-mono uppercase tracking-[0.2em] inline-flex items-center">
            Home
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
      { title: "Huzaifa Spine Clinic — Pakistan's #1 Chiropractor · Karachi" },
      { name: "description", content: "Led by Dr. Saleem Uddin, Huzaifa Spine Clinic in Gulshan, Karachi specializes in non-surgical chiropractic care for back pain, sciatica, disc issues, frozen shoulder, and neck pain." },
      { name: "author", content: "Huzaifa Spine Clinic" },
      { property: "og:title", content: "Huzaifa Spine Clinic — Pakistan's #1 Chiropractor · Karachi" },
      { property: "og:description", content: "Led by Dr. Saleem Uddin, Huzaifa Spine Clinic in Gulshan, Karachi specializes in non-surgical chiropractic care for back pain, sciatica, disc issues, frozen shoulder, and neck pain." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Huzaifa Spine Clinic" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Huzaifa Spine Clinic — Pakistan's #1 Chiropractor · Karachi" },
      { name: "twitter:description", content: "Led by Dr. Saleem Uddin, Huzaifa Spine Clinic in Gulshan, Karachi specializes in non-surgical chiropractic care for back pain, sciatica, disc issues, frozen shoulder, and neck pain." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/94a96a14-235a-4671-90db-580615e0f5f0/id-preview-f66fa9a8--8183cd7a-49a8-4604-b31b-ed8d724c65f4.lovable.app-1782303102760.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/94a96a14-235a-4671-90db-580615e0f5f0/id-preview-f66fa9a8--8183cd7a-49a8-4604-b31b-ed8d724c65f4.lovable.app-1782303102760.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
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
      <Nav />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}

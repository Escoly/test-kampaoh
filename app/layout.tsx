import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";
import { GlobalStateProvider } from "./context/globalStateContext";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link
          href="/icon?<generated>"
          rel="icon"
          sizes="<generated>"
          type="image/<generated>"
        />

        <script
          crossOrigin="anonymous"
          src="https://kit.fontawesome.com/2955565a84.js"
        />
      </head>
      <GlobalStateProvider>
        <body
          className={clsx(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
          )}
        >
          <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
            <div className="relative flex flex-col h-screen">
              <Navbar defaultTheme={"dark"} />
              <main className="container mx-auto max-w-7xl pt-4 px-6 flex-grow">
                <section className="flex flex-col items-center w-full justify-center">
                  {children}
                </section>
              </main>
              <footer className="w-full flex items-center justify-center py-3">
                <Link
                  isExternal
                  className="flex items-center gap-1 text-current"
                  href="https://www.linkedin.com/in/albert-escolar-cano/"
                  title="nextui.org homepage"
                >
                  <span className="text-default-600">
                    Prueba técnica hecha por
                  </span>
                  <p className="text-primary">Albert Escolar</p>
                </Link>
              </footer>
            </div>
          </Providers>
        </body>
      </GlobalStateProvider>
    </html>
  );
}

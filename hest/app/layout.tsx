import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import { site } from "@/data/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hest-edu.net"),
  title: {
    default: `${site.name} — ${site.legalName}`,
    template: `%s — ${site.name}`,
  },
  description:
    "École des Hautes Études de Sciences et Technologies à Lomé, Togo. Formations BTS, Licence et Master. Nous faisons de votre réussite notre métier.",
  openGraph: {
    title: `${site.name} — ${site.legalName}`,
    description: site.tagline,
    locale: "fr_TG",
    type: "website",
    images: [{ url: site.ogImage, alt: "Logo HEST" }],
  },
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      data-theme="hest"
      className={`${fraunces.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-base-100 font-sans text-base-content">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-content"
        >
          Aller au contenu
        </a>
        <TopBar />
        <Header />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

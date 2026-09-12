import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { PageTransition } from "@/components/motion/PageTransition";
import { site } from "@/content/site";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-dm-serif",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Architecture & Interior Design in Pune`,
    template: `%s | ${site.name}`,
  },
  description: site.metaDescription,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  keywords: [
    "Vastukala Design Studio",
    "architecture company in Pune",
    "architect in Pune",
    "interior designer in Pune",
    "architecture and interior design Pune",
    "residential interior designer Pune",
    "home interior design Pune",
    "architectural design Pune",
    "3D interior design Pune",
    "commercial interior design Pune",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    url: site.url,
    title: `${site.name} | Architecture & Interior Design in Pune`,
    description: site.metaDescription,
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "Architecture & Interior Design",
};

export const viewport: Viewport = {
  themeColor: "#34452A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-IN"
      className={`${dmSerifDisplay.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      {/*
        suppressHydrationWarning: browser extensions (e.g. ColorZilla) inject
        attributes onto <body> before React hydrates, which would otherwise
        surface as a harmless but noisy mismatch in development.
      */}
      <body suppressHydrationWarning>
        <a
          href="#main"
          className="label sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-olive focus:px-5 focus:py-3 focus:text-ivory"
        >
          Skip to content
        </a>
        <Header />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}

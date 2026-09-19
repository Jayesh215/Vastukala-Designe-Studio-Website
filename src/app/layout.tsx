import type { Metadata, Viewport } from "next";
import { Geist, Instrument_Sans, Inter, Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { LogoLoader } from "@/components/motion/LogoLoader";
import { PageTransition } from "@/components/motion/PageTransition";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { site } from "@/content/site";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument",
});

const interDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/InterDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/InterDisplay-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-inter-display",
  display: "swap",
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
  themeColor: "#F2EDE7",
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
      className={`${manrope.variable} ${inter.variable} ${geist.variable} ${interDisplay.variable} ${instrument.variable}`}
      suppressHydrationWarning
    >
      {/*
        suppressHydrationWarning: browser extensions (e.g. ColorZilla) inject
        attributes onto <body> before React hydrates, which would otherwise
        surface as a harmless but noisy mismatch in development.
      */}
      <body suppressHydrationWarning>
        <LogoLoader />
        <ScrollProgress />
        <a
          href="#main"
          className="label sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-[10px] focus:bg-ink focus:px-5 focus:py-3 focus:text-canvas"
        >
          Skip to content
        </a>
        <SiteChrome>
          <PageTransition>{children}</PageTransition>
        </SiteChrome>
      </body>
    </html>
  );
}

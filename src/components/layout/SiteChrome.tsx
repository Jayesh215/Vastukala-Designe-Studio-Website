"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArcHeader } from "@/components/layout/ArcHeader";
import { ArcFooter } from "@/components/layout/ArcFooter";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";

const ARC_ROUTES = [
  "/about",
  "/services",
  "/projects",
  "/process",
  "/insights",
  "/contact",
];

function isArcRoute(pathname: string) {
  return ARC_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
}

/** Switches Avéon chrome ↔ ArcGrid chrome by route. */
export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const arc = isArcRoute(pathname);

  return (
    <div className={arc ? "theme-arc" : undefined}>
      {arc ? <ArcHeader /> : <Header />}
      {children}
      {arc ? <ArcFooter /> : <Footer />}
      {!arc && <MobileCtaBar />}
    </div>
  );
}

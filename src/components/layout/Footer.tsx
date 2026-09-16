import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import { site } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";
import { ArrowUpRight } from "@/components/ui/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-canvas text-ink">
      <Container className="pt-16 pb-28 md:pt-20 md:pb-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Logo tone="dark" size="footer" />
            <p className="mt-6 max-w-xs text-[0.9375rem] leading-relaxed text-muted">
              Thoughtful spaces designed around the people who experience them.
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="label text-muted">Studio</p>
            <ul className="mt-5 space-y-3">
              {site.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline text-[0.9375rem] text-ink/80 transition-colors duration-300 hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="label text-muted">Contact</p>
            <ul className="mt-5 space-y-3 text-[0.9375rem] text-ink/80">
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="break-all transition-colors duration-300 hover:text-ink"
                >
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.contact.phoneE164}`}
                  className="transition-colors duration-300 hover:text-ink"
                >
                  {site.contact.phoneDisplay}
                </a>
              </li>
              <li>{site.contact.locationShort}</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="label text-muted">Project</p>
            <p className="mt-5 max-w-xs text-[0.9375rem] leading-relaxed text-muted">
              Tell us about your site, your timeline, and your vision.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 rounded-[10px] bg-ink px-5 py-3 text-[0.8125rem] font-medium text-canvas transition-colors duration-300 hover:bg-ink-soft"
            >
              {site.primaryCta}
              <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-7 md:flex-row md:items-center md:justify-between">
          <p className="text-[0.8125rem] text-muted">
            © {year} {site.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {site.legalNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="link-underline text-[0.8125rem] text-muted transition-colors duration-300 hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}

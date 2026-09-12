import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";
import {
  ArrowUpRight,
  InstagramIcon,
  MailIcon,
  PinIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-ivory">
      <Container className="pt-20 pb-32 md:pt-28 md:pb-16">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <p className="font-display text-3xl leading-none md:text-4xl">
              Vastukala <span className="block">Design Studio</span>
            </p>
            <p className="label mt-5 text-sand/80">{site.descriptor}</p>
            <p className="mt-7 max-w-sm text-[0.9375rem] leading-relaxed text-ivory/60">
              Thoughtful spaces designed around the people who experience them.
            </p>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="label group mt-9 inline-flex items-center gap-2.5 rounded-full bg-ivory px-6 py-3.5 text-charcoal transition-colors duration-500 hover:bg-sand"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {site.primaryCta}
              <ArrowUpRight className="h-3 w-3 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <p className="label text-sand/70">Studio</p>
            <ul className="mt-6 space-y-3.5">
              {site.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline text-[0.9375rem] text-ivory/70 transition-colors duration-300 hover:text-ivory"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <p className="label text-sand/70">Contact</p>
            <ul className="mt-6 space-y-4 text-[0.9375rem] text-ivory/70">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 transition-colors duration-300 hover:text-ivory"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0 text-sand/70" />
                  {site.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="inline-flex items-start gap-3 transition-colors duration-300 hover:text-ivory"
                >
                  <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-sand/70" />
                  <span className="break-all">{site.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={site.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 transition-colors duration-300 hover:text-ivory"
                >
                  <InstagramIcon className="h-4 w-4 shrink-0 text-sand/70" />
                  {site.contact.instagramHandle}
                </a>
              </li>
              <li className="inline-flex items-start gap-3">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-sand/70" />
                {site.contact.locationShort}
              </li>
            </ul>

            <p className="mt-7 text-sm text-ivory/45">
              {site.contact.workingHours}
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-ivory/12 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-[0.8125rem] text-ivory/45">
            © {year} {site.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-7 gap-y-2">
            {site.legalNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="link-underline text-[0.8125rem] text-ivory/45 transition-colors duration-300 hover:text-ivory/80"
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

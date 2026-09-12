import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PageHero } from "@/components/sections/PageHero";
import { FaqSection } from "@/components/sections/FaqSection";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  InstagramIcon,
  MailIcon,
  PinIcon,
  WhatsAppIcon,
  ArrowUpRight,
} from "@/components/ui/icons";
import { site } from "@/content/site";
import { images } from "@/content/images";
import { homeFaqs } from "@/content/faqs";
import {
  breadcrumbSchema,
  faqSchema,
  organisationSchema,
  pageMetadata,
} from "@/lib/seo";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = pageMetadata({
  title: "Contact | Talk to an Architect & Interior Designer in Pune",
  description:
    "Start a conversation with Vastukala Design Studio. WhatsApp +91 89567 30655 or send an enquiry for architecture, interior design and turnkey projects in Pune and Maharashtra.",
  path: "/contact",
  keywords: [
    "contact architect Pune",
    "interior designer contact Pune",
    "architecture consultation Pune",
  ],
});

const channels = [
  {
    label: "WhatsApp",
    value: site.contact.phoneDisplay,
    href: whatsappLink(),
    icon: WhatsAppIcon,
    note: "Fastest way to reach us",
  },
  {
    label: "Email",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
    icon: MailIcon,
    note: "For drawings and documents",
  },
  {
    label: "Instagram",
    value: site.contact.instagramHandle,
    href: site.contact.instagramUrl,
    icon: InstagramIcon,
    note: site.contact.instagramPositioning,
  },
  {
    label: "Location",
    value: site.contact.locationShort,
    href: null,
    icon: PinIcon,
    note: site.contact.workingHours,
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd schema={organisationSchema()} />
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <JsonLd schema={faqSchema(homeFaqs)} />

      <PageHero
        eyebrow="Contact"
        heading={"Let's design something\nmeaningful."}
        description="Have a new home, renovation, interior or commercial project in mind? Tell us a little about your project and let's start the conversation."
        image={images.livingWarm}
        imageAlt="Warm neutral living room with layered textures and soft daylight"
        size="compact"
      />

      {/* Channels */}
      <section className="border-b border-charcoal/10 bg-ivory py-16 md:py-20">
        <Container>
          <RevealGroup
            as="ul"
            stagger={0.08}
            className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4"
          >
            {channels.map((channel) => {
              const Icon = channel.icon;

              const inner = (
                <>
                  <span className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-brown" />
                    <span className="label text-charcoal/45">
                      {channel.label}
                    </span>
                  </span>
                  <span className="mt-4 flex items-start justify-between gap-4">
                    <span className="font-display text-lg break-words text-charcoal transition-colors duration-500 group-hover:text-olive md:text-xl">
                      {channel.value}
                    </span>
                    {channel.href && (
                      <ArrowUpRight className="mt-1.5 h-3.5 w-3.5 shrink-0 text-brown transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    )}
                  </span>
                  <span className="mt-3 block text-[0.8125rem] text-charcoal/45">
                    {channel.note}
                  </span>
                </>
              );

              return (
                <RevealItem as="li" key={channel.label}>
                  {channel.href ? (
                    <a
                      href={channel.href}
                      {...(channel.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group block border-t border-charcoal/12 pt-6"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="group block border-t border-charcoal/12 pt-6">
                      {inner}
                    </div>
                  )}
                </RevealItem>
              );
            })}
          </RevealGroup>
        </Container>
      </section>

      {/* Enquiry form */}
      <section className="bg-ivory py-24 md:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow className="mb-7">Project Enquiry</Eyebrow>
              </Reveal>
              <TextReveal
                text={"Tell us about\nyour project."}
                className="text-display-3 text-charcoal"
              />
              <Reveal delay={0.15}>
                <p className="mt-7 text-[0.9375rem] leading-relaxed text-charcoal/65">
                  The more you can share about the space, your requirements and
                  your budget, the more useful our first conversation will be.
                </p>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="mt-10 border-t border-charcoal/12 pt-7">
                  <p className="label text-charcoal/45">Prefer to talk?</p>
                  <a
                    href={`tel:${site.contact.phoneE164}`}
                    className="mt-4 block font-display text-2xl text-charcoal transition-colors duration-500 hover:text-olive"
                  >
                    {site.contact.phoneDisplay}
                  </a>
                  <p className="mt-3 text-[0.8125rem] text-charcoal/45">
                    {site.contact.workingHours}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="mt-10 border-t border-charcoal/12 pt-7">
                  <p className="label text-charcoal/45">Areas We Serve</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {site.contact.serviceAreas.map((area) => (
                      <li
                        key={area}
                        className="rounded-full border border-charcoal/12 px-3.5 py-1.5 text-[0.6875rem] tracking-[0.06em] text-charcoal/55 uppercase"
                      >
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <Reveal delay={0.1}>
                <div className="border border-charcoal/12 bg-ivory-dim p-7 md:p-12">
                  <EnquiryForm />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <FaqSection items={homeFaqs} eyebrow="Before You Write" heading="Common questions" />
    </>
  );
}

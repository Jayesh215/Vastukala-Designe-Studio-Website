import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { ArticleBody } from "@/components/insights/ArticleBody";
import { InsightCard } from "@/components/insights/InsightCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { WhatsAppIcon } from "@/components/ui/icons";
import {
  formatInsightDate,
  getInsightBySlug,
  getRelatedInsights,
  insights,
} from "@/content/insights";
import { site } from "@/content/site";
import { articleSchema, breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/whatsapp";

/** One static page per article in the collection. */
export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) return { title: "Article not found" };

  return pageMetadata({
    title: insight.title,
    description: insight.excerpt,
    path: `/insights/${insight.slug}`,
    image: insight.coverImage,
    type: "article",
    publishedTime: insight.date,
    keywords: [insight.category, `${insight.category} Pune`],
  });
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) notFound();

  const related = getRelatedInsights(insight.slug);

  return (
    <>
      <JsonLd
        schema={articleSchema({
          title: insight.title,
          description: insight.excerpt,
          path: `/insights/${insight.slug}`,
          image: insight.coverImage,
          date: insight.date,
          author: insight.author,
        })}
      />
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
          { name: insight.title, path: `/insights/${insight.slug}` },
        ])}
      />

      <PageHero
        eyebrow={insight.category}
        heading={insight.title}
        image={insight.coverImage}
        imageAlt={insight.coverAlt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Insights", href: "/insights" },
          { label: insight.category },
        ]}
        meta={
          <p className="label mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-ivory/55">
            <span>{formatInsightDate(insight.date)}</span>
            <span aria-hidden="true">/</span>
            <span>{insight.readingTime}</span>
            <span aria-hidden="true">/</span>
            <span>{insight.author}</span>
          </p>
        }
      />

      <article className="bg-ivory py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Article */}
            <div className="lg:col-span-8">
              <Reveal>
                <p className="border-l-2 border-olive pl-6 font-display text-[clamp(1.25rem,2vw,1.625rem)] leading-snug text-charcoal">
                  {insight.excerpt}
                </p>
              </Reveal>

              <div className="mt-12">
                <ArticleBody blocks={insight.body} />
              </div>

              <Reveal className="mt-16 border-t border-charcoal/12 pt-10">
                <p className="font-display text-2xl text-charcoal">
                  Planning something similar?
                </p>
                <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-charcoal/65">
                  We are happy to talk through your space before you commit to
                  anything. Send us a message and describe what you have in
                  mind.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button
                    href={whatsappLink(
                      `Hi Vastukala Design Studio, I read your article "${insight.title}" and would like to discuss my project.`,
                    )}
                    variant="solid"
                    className="label"
                    icon={<WhatsAppIcon className="h-4 w-4" />}
                  >
                    Talk to Us
                  </Button>
                  <Button href="/contact" variant="outline" className="label" arrow>
                    Send an Enquiry
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <div className="border border-charcoal/12 bg-ivory-dim p-8">
                  <Eyebrow className="mb-6">In This Journal</Eyebrow>
                  <p className="text-[0.9375rem] leading-relaxed text-charcoal/65">
                    Practical notes on architecture, interiors, materials and
                    space planning — written for people planning their own
                    projects.
                  </p>
                  <Button
                    href="/insights"
                    variant="outline"
                    className="label mt-7 w-full"
                    arrow
                  >
                    All Insights
                  </Button>
                </div>

                <div className="mt-8 border border-charcoal/12 p-8">
                  <Eyebrow className="mb-6">The Studio</Eyebrow>
                  <p className="font-display text-xl text-charcoal">
                    {site.name}
                  </p>
                  <p className="label mt-3 text-brown">{site.descriptor}</p>
                  <p className="mt-5 text-[0.9375rem] leading-relaxed text-charcoal/65">
                    {site.contact.locationShort}
                  </p>
                  <Button
                    href="/about"
                    variant="text"
                    className="label mt-6 text-olive"
                    arrow
                  >
                    About Us
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="border-t border-charcoal/10 bg-ivory-dim py-24 md:py-28">
          <Container>
            <Reveal>
              <Eyebrow className="mb-7">Keep Reading</Eyebrow>
            </Reveal>
            <h2 className="text-display-3 text-charcoal">
              More from the journal
            </h2>

            <RevealGroup
              stagger={0.1}
              className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
            >
              {related.map((item) => (
                <RevealItem key={item.slug} className="h-full">
                  <InsightCard insight={item} />
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </section>
      )}

      <FinalCta />
    </>
  );
}

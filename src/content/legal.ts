import { site } from "./site";

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

/**
 * Legal page copy.
 *
 * These are sensible, plain-language defaults for a design studio website.
 * Have them reviewed by a legal advisor before relying on them commercially,
 * and update `lastUpdated` whenever the text changes.
 */
export const privacyPolicy = {
  title: "Privacy Policy",
  lastUpdated: "1 September 2026",
  intro: `This policy explains what information ${site.name} collects through this website, how it is used and what choices you have. We keep data collection to the minimum needed to respond to enquiries.`,
  sections: [
    {
      heading: "Information we collect",
      paragraphs: [
        "This website does not require you to create an account and does not store enquiry data on our servers.",
        "The enquiry form on our contact page formats the details you enter into a WhatsApp message that opens in your own WhatsApp application. Nothing is submitted to this website's servers or saved in a database here. The information only reaches us once you choose to send that message.",
      ],
      list: [
        "Details you voluntarily share with us — name, phone number, email address, project type, location, budget range, timeline and project description",
        "Basic technical information your browser sends with any web request, such as IP address, browser type and the pages you visit",
      ],
    },
    {
      heading: "How we use your information",
      list: [
        "To respond to your enquiry and discuss your project",
        "To prepare proposals, scopes of work and fee estimates",
        "To communicate with you about an ongoing project",
        "To maintain our own business and accounting records",
      ],
      paragraphs: [
        "We do not sell, rent or trade your personal information, and we do not use it for unrelated marketing without your consent.",
      ],
    },
    {
      heading: "Third-party services",
      paragraphs: [
        "Messages you send through the WhatsApp links on this site are handled by WhatsApp and are subject to its own privacy policy. Email you send to us is handled by our email provider.",
        "Our website may be served through a hosting and content delivery provider which processes standard server logs for security and performance purposes. Images may be delivered from third-party image hosts.",
      ],
    },
    {
      heading: "Cookies and analytics",
      paragraphs: [
        "This website does not set advertising or tracking cookies of its own. If we add analytics in future, this policy will be updated before it is enabled, and only aggregated, non-identifying usage data would be collected.",
      ],
    },
    {
      heading: "Project images and confidentiality",
      paragraphs: [
        "We treat client drawings, plans and personal details as confidential. Project photographs are published on this website and on social media only where we have the client's permission, and client names are withheld unless they have agreed to be identified.",
      ],
    },
    {
      heading: "Data retention",
      paragraphs: [
        "Enquiry correspondence is kept for as long as it is commercially useful and as required by applicable record-keeping and tax obligations. Project records are retained for the duration of our professional relationship and a reasonable period afterwards.",
      ],
    },
    {
      heading: "Your choices",
      list: [
        "You can ask us what information we hold about you",
        "You can ask us to correct inaccurate details",
        "You can ask us to delete your enquiry correspondence, subject to any legal obligation to retain it",
        "You can ask us not to publish photographs of your project",
      ],
      paragraphs: [
        `To make any of these requests, write to ${site.contact.email}.`,
      ],
    },
    {
      heading: "Children",
      paragraphs: [
        "This website is intended for adults commissioning design services and is not directed at children.",
      ],
    },
    {
      heading: "Changes to this policy",
      paragraphs: [
        "We may update this policy as our practice or this website changes. The date above reflects the most recent revision.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [
        `Questions about this policy can be sent to ${site.contact.email} or ${site.contact.phoneDisplay}. ${site.name}, ${site.contact.locationShort}.`,
      ],
    },
  ] satisfies LegalSection[],
};

export const termsConditions = {
  title: "Terms & Conditions",
  lastUpdated: "1 September 2026",
  intro: `These terms govern your use of this website. They are not a contract for design services — project work is governed by a separate written agreement issued by ${site.name}.`,
  sections: [
    {
      heading: "Use of this website",
      paragraphs: [
        "You may browse this website and use its contact links for genuine enquiries about design services. You agree not to use it in any way that damages it, interferes with its operation, or attempts to gain unauthorised access to it.",
        "Automated scraping, bulk downloading of images, or reuse of this website's content to train commercial models is not permitted without written consent.",
      ],
    },
    {
      heading: "Intellectual property",
      paragraphs: [
        `All designs, drawings, renders, photographs, text and layouts on this website are the property of ${site.name} or are used with permission, and are protected by applicable copyright law.`,
        "You may not reproduce, republish or distribute any part of this website for commercial purposes without prior written permission. Sharing a link to a page is always welcome.",
      ],
    },
    {
      heading: "Project images and representations",
      paragraphs: [
        "Images shown on this website include completed project photography and, in some cases, 3D visualizations prepared during design. Visualizations are design representations and may differ from a built result depending on materials, site conditions, execution and client decisions.",
        "Project details such as area, year and status are provided for context. Where a project is marked ongoing, the images may show design intent rather than completed work.",
      ],
    },
    {
      heading: "Enquiries and no professional advice",
      paragraphs: [
        "Information on this website, including journal articles, is general in nature and published for interest. It does not constitute architectural, engineering, structural, legal or regulatory advice for any specific site or project.",
        "No client relationship is created by browsing this website or sending an enquiry. A professional engagement begins only when a written scope of work and fee proposal has been agreed by both parties.",
      ],
    },
    {
      heading: "Fees, scope and timelines",
      paragraphs: [
        "Any indicative budget ranges, timelines or fee structures mentioned on this website are illustrative. Actual fees, scope, stages and schedules are confirmed in a written proposal specific to your project.",
      ],
    },
    {
      heading: "Third-party links",
      paragraphs: [
        "This website links to third-party platforms such as WhatsApp and Instagram. We are not responsible for the content, availability or policies of those platforms.",
      ],
    },
    {
      heading: "Limitation of liability",
      paragraphs: [
        "This website is provided on an as-is basis. While we take care to keep it accurate and available, we do not warrant that it will be uninterrupted or error-free.",
        "To the extent permitted by law, we are not liable for any indirect or consequential loss arising from use of this website or reliance on its general content.",
      ],
    },
    {
      heading: "Governing law",
      paragraphs: [
        `These terms are governed by the laws of India, and any dispute relating to this website is subject to the jurisdiction of the courts at ${site.contact.city}, ${site.contact.state}.`,
      ],
    },
    {
      heading: "Changes to these terms",
      paragraphs: [
        "We may revise these terms from time to time. Continued use of the website after a revision constitutes acceptance of the updated terms.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [
        `For any question about these terms, write to ${site.contact.email} or call ${site.contact.phoneDisplay}.`,
      ],
    },
  ] satisfies LegalSection[],
};

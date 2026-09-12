import { site } from "@/content/site";

const WHATSAPP_BASE = `https://wa.me/${site.contact.whatsappNumber}`;

/**
 * Builds a wa.me link with a URL-encoded prefilled message.
 * Called with no argument it uses the studio's default enquiry message.
 */
export const whatsappLink = (message: string = site.whatsappDefaultMessage) =>
  `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;

/** Context-specific messages so each CTA arrives with a useful opening line. */
export const whatsappMessages = {
  default: site.whatsappDefaultMessage,
  consultation:
    "Hi Vastukala Design Studio, I would like to book a consultation for my project.",
  project: (projectName: string) =>
    `Hi Vastukala Design Studio, I saw the ${projectName} project on your website and would like to discuss something similar.`,
  service: (serviceName: string) =>
    `Hi Vastukala Design Studio, I would like to know more about your ${serviceName} service.`,
  quote:
    "Hi Vastukala Design Studio, I would like an estimate for my project. Here are a few details:",
};

export interface EnquiryDetails {
  fullName: string;
  phone: string;
  email: string;
  projectType: string;
  projectLocation: string;
  budget: string;
  timeline: string;
  description: string;
}

/**
 * Formats an enquiry form submission into a readable WhatsApp message.
 * Empty fields are omitted so short enquiries stay short.
 */
export const buildEnquiryMessage = (details: EnquiryDetails) => {
  const lines: string[] = [
    site.whatsappDefaultMessage,
    "",
    "--- Project Enquiry ---",
  ];

  const append = (label: string, value: string) => {
    const trimmed = value.trim();
    if (trimmed) lines.push(`${label}: ${trimmed}`);
  };

  append("Name", details.fullName);
  append("Phone", details.phone);
  append("Email", details.email);
  append("Project Type", details.projectType);
  append("Location", details.projectLocation);
  append("Budget", details.budget);
  append("Timeline", details.timeline);

  if (details.description.trim()) {
    lines.push("", "Requirement:", details.description.trim());
  }

  return lines.join("\n");
};

export const enquiryWhatsappLink = (details: EnquiryDetails) =>
  whatsappLink(buildEnquiryMessage(details));

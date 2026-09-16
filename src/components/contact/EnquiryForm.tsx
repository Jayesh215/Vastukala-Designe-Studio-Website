"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/ui/icons";
import { projectTypeOptions } from "@/content/services";
import {
  buildEnquiryMessage,
  enquiryWhatsappLink,
  type EnquiryDetails,
} from "@/lib/whatsapp";

const budgetOptions = [
  "Under ₹10 Lakhs",
  "₹10–25 Lakhs",
  "₹25–50 Lakhs",
  "₹50 Lakhs–₹1 Crore",
  "₹1 Crore+",
  "Not Decided",
];

const timelineOptions = [
  "Immediately",
  "Within 1–3 Months",
  "3–6 Months",
  "6+ Months",
  "Just Exploring",
];

const emptyForm: EnquiryDetails = {
  fullName: "",
  phone: "",
  email: "",
  projectType: "",
  projectLocation: "",
  budget: "",
  timeline: "",
  description: "",
};

type FieldErrors = Partial<Record<keyof EnquiryDetails, string>>;

const fieldClasses =
  "w-full border-b border-line bg-transparent py-3 text-[0.9375rem] text-ink transition-colors duration-300 outline-none placeholder:text-muted/60 focus:border-ink";

const labelClasses = "label mb-2 block text-muted";

/**
 * Enquiry form that hands off to WhatsApp.
 *
 * Nothing is posted to a server: the submission is formatted into a message and
 * opened in WhatsApp, so enquiries land directly in the studio's chat.
 */
export function EnquiryForm() {
  const [form, setForm] = useState<EnquiryDetails>(emptyForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sent, setSent] = useState(false);

  const update = (field: keyof EnquiryDetails, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const validate = () => {
    const next: FieldErrors = {};

    if (!form.fullName.trim()) next.fullName = "Please tell us your name.";

    const digits = form.phone.replace(/\D/g, "");
    if (!digits) next.phone = "Please add a phone number.";
    else if (digits.length < 10) next.phone = "Please enter a valid number.";

    if (form.email.trim() && !/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      next.email = "Please check the email address.";
    }

    if (!form.projectType) next.projectType = "Please choose a project type.";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    const url = enquiryWhatsappLink(form);
    const opened = window.open(url, "_blank", "noopener,noreferrer");

    // If the popup was blocked, navigate in the current tab instead.
    if (!opened) window.location.href = url;

    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={labelClasses}>
            Full Name *
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            value={form.fullName}
            onChange={(event) => update("fullName", event.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            placeholder="Your name"
            className={fieldClasses}
          />
          {errors.fullName && (
            <p id="fullName-error" className="mt-2 text-xs text-muted">
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => update("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            placeholder="+91 00000 00000"
            className={fieldClasses}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-2 text-xs text-muted">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            placeholder="you@example.com"
            className={fieldClasses}
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-xs text-muted">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="projectType" className={labelClasses}>
            Project Type *
          </label>
          <select
            id="projectType"
            name="projectType"
            value={form.projectType}
            onChange={(event) => update("projectType", event.target.value)}
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={
              errors.projectType ? "projectType-error" : undefined
            }
            className={`${fieldClasses} cursor-pointer`}
          >
            <option value="">Select a project type</option>
            {projectTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <p id="projectType-error" className="mt-2 text-xs text-muted">
              {errors.projectType}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="projectLocation" className={labelClasses}>
            Project Location
          </label>
          <input
            id="projectLocation"
            name="projectLocation"
            type="text"
            value={form.projectLocation}
            onChange={(event) => update("projectLocation", event.target.value)}
            placeholder="Area, city"
            className={fieldClasses}
          />
        </div>

        <div>
          <label htmlFor="budget" className={labelClasses}>
            Approximate Budget
          </label>
          <select
            id="budget"
            name="budget"
            value={form.budget}
            onChange={(event) => update("budget", event.target.value)}
            className={`${fieldClasses} cursor-pointer`}
          >
            <option value="">Select a range</option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="timeline" className={labelClasses}>
            Project Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={form.timeline}
            onChange={(event) => update("timeline", event.target.value)}
            className={`${fieldClasses} cursor-pointer`}
          >
            <option value="">When would you like to start?</option>
            {timelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="description" className={labelClasses}>
            Project Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            value={form.description}
            onChange={(event) => update("description", event.target.value)}
            placeholder="Tell us about the space, the requirements and anything else that would help."
            className={`${fieldClasses} resize-y`}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="label group inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-[10px] bg-ink px-8 py-4 text-canvas transition-colors duration-500 hover:bg-ink-soft"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Send Enquiry on WhatsApp
        </button>

        <p className="max-w-xs text-xs leading-relaxed text-muted">
          Your details are formatted into a WhatsApp message — nothing is stored
          on this website.
        </p>
      </div>

      {sent && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border border-ink/30 bg-ink/5 p-6"
          role="status"
        >
          <p className="font-display text-lg text-ink">
            WhatsApp should now be open.
          </p>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
            If it did not open, copy the message below and send it to{" "}
            <span className="whitespace-nowrap">+91 89567 30655</span>.
          </p>
          <pre className="mt-5 max-h-52 overflow-auto border border-line bg-canvas p-4 text-xs leading-relaxed whitespace-pre-wrap text-ink/70">
            {buildEnquiryMessage(form)}
          </pre>
        </motion.div>
      )}
    </form>
  );
}

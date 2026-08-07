import { createFileRoute } from "@tanstack/react-router";
import { brand } from "@/theme";
import { images, faqs } from "@/data/content";
import { PageHero } from "@/components/PageHero";
import { SectionWrapper } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedSection } from "@/components/AnimatedSection";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Accordion } from "@/components/Accordion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Parjane Buildcon" },
      {
        name: "description",
        content:
          "Connect with the Parjane Buildcon corporate team. Head office: FC Road, Pune. Enquiries answered within 2 hours.",
      },
      { property: "og:title", content: "Contact Us — Parjane Buildcon" },
      {
        property: "og:description",
        content: "Schedule a private site viewing or request project specifications kit.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Corporate Headquarters"
        title="Schedule a Site Visit or Consultation."
        lede="Our sales directors and senior project engineers are available six days a week to host private site tours."
        image={images.clubhouse}
      />

      <SectionWrapper className="bg-white">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-24">
          {/* Form */}
          <AnimatedSection className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <p className="eyebrow text-gold font-bold mb-4">Direct Enquiry</p>
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-navy leading-tight">
              Let's Discuss Your Landmark Requirements.
            </h2>
            <div className="mt-8">
              <EnquiryForm />
            </div>
          </AnimatedSection>

          {/* Details */}
          <AnimatedSection delay={120}>
            <p className="eyebrow text-gold font-bold mb-4">Corporate Office</p>
            <address className="space-y-1 text-[17px] font-light not-italic leading-[1.9] text-navy">
              {brand.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>

            <dl className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
              {[
                {
                  label: "Telephone",
                  value: brand.phone,
                  href: `tel:${brand.phone.replace(/\s/g, "")}`,
                },
                { label: "Email", value: brand.email, href: `mailto:${brand.email}` },
                { label: "Office Hours", value: brand.hours },
              ].map((row) => (
                <div key={row.label} className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr] sm:gap-6">
                  <dt className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-400">
                    {row.label}
                  </dt>
                  <dd className="text-sm font-medium text-navy">
                    {row.href ? (
                      <a href={row.href} className="link-reveal text-gold">
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${brand.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center rounded-xl bg-green-600 px-6 text-xs uppercase font-bold tracking-wider text-white shadow-md transition-all hover:bg-green-700 hover:scale-105"
              >
                💬 WhatsApp Direct Chat
              </a>
              {brand.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center text-xs uppercase font-semibold tracking-wider text-slate-600 transition-colors hover:text-gold"
                >
                  <span className="link-reveal">{s.label}</span>
                </a>
              ))}
            </div>

            <div className="mt-10 aspect-4/3 w-full overflow-hidden rounded-3xl border border-slate-200 shadow-md">
              <iframe
                title="Map to the Parjane Buildcon office"
                src="https://www.google.com/maps?q=FC%20Road%2C%20Pune&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale-[0.2]"
              />
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="sand">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Frequently Asked Buyer Questions"
        />
        <div className="mt-12">
          <Accordion items={faqs.map((f) => ({ title: f.q, content: f.a }))} />
        </div>
      </SectionWrapper>
    </>
  );
}

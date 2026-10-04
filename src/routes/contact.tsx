import { createFileRoute } from "@tanstack/react-router";
import { brand } from "@/theme";
import { images, faqs } from "@/data/content";
import { PageHero } from "@/components/PageHero";
import { SectionWrapper, Container, Hairline } from "@/components/Container";
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

      <SectionWrapper>
        <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
          {/* Form */}
          <AnimatedSection className="rounded-2xl border border-white/10 bg-black/25 backdrop-blur-xl p-5 sm:p-7 shadow-xl">
            <p className="eyebrow text-amber-400 font-bold mb-1.5 text-[10px]">Direct Enquiry</p>
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-white leading-tight drop-shadow-sm">
              Let's Discuss Your Landmark Requirements.
            </h2>
            <div className="mt-5">
              <EnquiryForm />
            </div>
          </AnimatedSection>

          {/* Details */}
          <AnimatedSection delay={120} className="flex flex-col justify-between">
            <div>
              <p className="eyebrow text-amber-400 font-bold mb-1.5 text-[10px]">Corporate Office</p>
              <address className="space-y-0.5 text-xs sm:text-sm font-normal not-italic text-slate-200">
                {brand.address.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </address>

              <dl className="mt-4 divide-y divide-white/10 border-y border-white/10">
                {[
                  {
                    label: "Telephone",
                    value: brand.phone,
                    href: `tel:${brand.phone.replace(/\s/g, "")}`,
                  },
                  { label: "Email", value: brand.email, href: `mailto:${brand.email}` },
                  { label: "Office Hours", value: brand.hours },
                ].map((row) => (
                  <div key={row.label} className="grid gap-1 py-2.5 sm:grid-cols-[7rem_1fr] sm:gap-4">
                    <dt className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                      {row.label}
                    </dt>
                    <dd className="text-xs sm:text-sm font-semibold text-white">
                      {row.href ? (
                        <a href={row.href} className="text-amber-400 hover:underline">
                          {row.value}
                        </a>
                      ) : (
                        row.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${brand.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 items-center gap-1.5 rounded-xl bg-emerald-600 px-4 text-[11px] uppercase font-bold tracking-wider text-white shadow-md transition-all hover:bg-emerald-500 hover:scale-105"
                >
                  💬 WhatsApp Sales Desk
                </a>
                {brand.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-9 items-center px-2.5 text-[11px] uppercase font-semibold tracking-wider text-slate-300 hover:text-amber-400 transition-colors"
                  >
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-6 aspect-4/3 w-full overflow-hidden rounded-2xl border border-white/10 shadow-lg">
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

      <Container>
        <Hairline />
      </Container>

      {/* ── FAQs Section ─────────────────────────────────────────── */}
      <SectionWrapper>
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Common Buyer &amp; Investor Questions"
          lede="Clear answers regarding MahaRERA certifications, customization, payment milestones, and possession schedules."
        />
        <div className="mt-8 sm:mt-10 rounded-2xl border border-white/10 bg-black/25 backdrop-blur-xl p-5 sm:p-7 shadow-xl">
          <Accordion items={faqs.map((f) => ({ title: f.q, content: f.a }))} />
        </div>
      </SectionWrapper>
    </>
  );
}

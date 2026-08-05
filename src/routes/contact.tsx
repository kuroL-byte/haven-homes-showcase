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
      { title: "Contact — Atelier Meridian" },
      {
        name: "description",
        content:
          "Speak with the residences team. Meridian House, 12 Carmichael Road, Mumbai. Enquiries answered within one working day.",
      },
      { property: "og:title", content: "Contact — Atelier Meridian" },
      {
        property: "og:description",
        content: "Arrange a private viewing or request the full information set for any project.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Enquiries"
        title="Come and see the work."
        lede="Viewings are hosted by the team that built the building, seven days a week by appointment."
        image={images.clubhouse}
      />

      <SectionWrapper>
        <div className="grid gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-24">
          {/* Form */}
          <AnimatedSection>
            <p className="eyebrow mb-6">Write to us</p>
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-tight">
              Tell us what you are looking for.
            </h2>
            <div className="mt-10">
              <EnquiryForm />
            </div>
          </AnimatedSection>

          {/* Details */}
          <AnimatedSection delay={120}>
            <p className="eyebrow mb-6">The office</p>
            <address className="space-y-1 text-[17px] font-light not-italic leading-[1.9]">
              {brand.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>

            <dl className="mt-10 divide-y divide-border border-y border-border">
              {[
                { label: "Telephone", value: brand.phone, href: `tel:${brand.phone.replace(/\s/g, "")}` },
                { label: "Email", value: brand.email, href: `mailto:${brand.email}` },
                { label: "Hours", value: brand.hours },
              ].map((row) => (
                <div key={row.label} className="grid gap-1 py-5 sm:grid-cols-[8rem_1fr] sm:gap-6">
                  <dt className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {row.label}
                  </dt>
                  <dd className="text-sm font-light">
                    {row.href ? (
                      <a href={row.href} className="link-reveal">
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
                className="inline-flex h-12 items-center border border-bronze px-8 text-[11px] uppercase tracking-[0.22em] text-bronze transition-all duration-500 hover:bg-bronze hover:text-primary-foreground"
              >
                WhatsApp us
              </a>
              {brand.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="link-reveal">{s.label}</span>
                </a>
              ))}
            </div>

            <div className="mt-10 aspect-4/3 w-full overflow-hidden border border-border">
              <iframe
                title="Map to the Atelier Meridian office"
                src="https://www.google.com/maps?q=Carmichael%20Road%2C%20Mumbai&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale-[0.35]"
              />
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="sand">
        <SectionHeading eyebrow="Before you write" title="Questions we are asked most." />
        <div className="mt-12">
          <Accordion items={faqs.map((f) => ({ title: f.q, content: f.a }))} />
        </div>
      </SectionWrapper>
    </>
  );
}

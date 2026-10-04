import { createFileRoute } from "@tanstack/react-router";
import { images, testimonials, stats } from "@/data/content";
import { PageHero } from "@/components/PageHero";
import { SectionWrapper, Container, Hairline } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedSection } from "@/components/AnimatedSection";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Carousel } from "@/components/Carousel";
import { StatCounter } from "@/components/StatCounter";
import { ButtonLink } from "@/components/Button";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Parjane Buildcon" },
      {
        name: "description",
        content:
          "Read authentic client reviews and homeowner testimonials from residents across Parjane Buildcon landmarks.",
      },
      { property: "og:title", content: "Testimonials — Parjane Buildcon" },
      {
        property: "og:description",
        content: "Reviews and testimonials from 3000+ happy families and corporate tenants.",
      },
    ],
  }),
  component: Testimonials,
});

function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Resident Voices"
        title="3,000+ Families Settled With Lasting Trust."
        lede="Hear from luxury homebuyers and corporate tenants who have experienced Parjane construction quality and post-possession care firsthand."
        image={images.clubhouse}
      />

      {/* ── Featured Carousel ────────────────────────────────────── */}
      <SectionWrapper>
        <SectionHeading
          eyebrow="Featured Reviews"
          title="Words From Our Homeowners &amp; Partners"
          lede="Unfiltered experiences from owners across our sky residence towers and corporate parks."
        />
        <div className="mt-8 sm:mt-10">
          <Carousel
            perView={2}
            controlsTone="light"
            slides={testimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} className="h-full" />
            ))}
          />
        </div>
      </SectionWrapper>

      <Container>
        <Hairline />
      </Container>

      {/* ── Full Reviews Grid ────────────────────────────────────── */}
      <SectionWrapper>
        <SectionHeading
          eyebrow="Verified Community"
          title="All Feedback &amp; Resident Experiences"
          lede="Read what makes Parjane Buildcon homes stand the test of time."
        />
        <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={(i % 3) * 70} className="h-full">
              <TestimonialCard testimonial={t} className="h-full" />
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Live Stats Strip & CTA ────────────────────────────────── */}
      <SectionWrapper tone="dark" tight className="border-t border-amber-500/20 bg-black/35 backdrop-blur-md py-6 sm:py-8">
        <div className="grid gap-6 sm:gap-8 grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 90}>
              <StatCounter value={s.value} suffix={s.suffix} label={s.label} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection className="mt-8 sm:mt-10 text-center">
          <ButtonLink
            to="/contact"
            size="sm"
            className="rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c59b27] text-[#080c14] font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105"
          >
            Connect With Our Advisory Desk →
          </ButtonLink>
        </AnimatedSection>
      </SectionWrapper>
    </>
  );
}

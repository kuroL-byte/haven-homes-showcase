import { createFileRoute } from "@tanstack/react-router";
import { images, testimonials, stats } from "@/data/content";
import { PageHero } from "@/components/PageHero";
import { SectionWrapper } from "@/components/Container";
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
        eyebrow="Client Voices"
        title="3,000+ Families Settled With Trust."
        lede="Hear from home buyers and corporate tenants who have experienced Parjane construction quality firsthand."
        image={images.clubhouse}
      />

      {/* Featured Carousel */}
      <SectionWrapper tone="dark">
        <SectionHeading eyebrow="Featured Reviews" title="Words From Our Homeowners" />
        <div className="mt-16">
          <Carousel
            perView={2}
            controlsTone="light"
            slides={testimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} className="h-full" />
            ))}
          />
        </div>
      </SectionWrapper>

      {/* Full Grid */}
      <SectionWrapper className="bg-slate-50">
        <SectionHeading eyebrow="All Feedback" title="Verified Reviews &amp; Experiences" />
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={(i % 3) * 90} className="h-full">
              <TestimonialCard testimonial={t} className="h-full" />
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper tone="dark" tight>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 90}>
              <StatCounter value={s.value} suffix={s.suffix} label={s.label} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection className="mt-16 text-center">
          <ButtonLink to="/contact" size="lg" className="rounded-2xl bg-gold text-navy font-bold">
            Connect With Our Sales Desk
          </ButtonLink>
        </AnimatedSection>
      </SectionWrapper>
    </>
  );
}

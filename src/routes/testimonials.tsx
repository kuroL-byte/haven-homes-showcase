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
      { title: "Testimonials — Atelier Meridian" },
      {
        name: "description",
        content:
          "What owners and tenants say about buying, living in and maintaining an Atelier Meridian building.",
      },
      { property: "og:title", content: "Testimonials — Atelier Meridian" },
      {
        property: "og:description",
        content: "Owners, four years on: unedited words from residents across the portfolio.",
      },
    ],
  }),
  component: Testimonials,
});

function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="In their words"
        title="The only review that counts is year five."
        lede="Anyone can be delighted at handover. These are people who have lived with the buildings."
        image={images.clubhouse}
      />

      {/* Featured carousel */}
      <SectionWrapper tone="dark">
        <SectionHeading eyebrow="Featured" title="A few we return to." />
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

      {/* Full grid */}
      <SectionWrapper>
        <SectionHeading eyebrow="All testimonials" title="Every voice, unedited." />
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={(i % 3) * 90} className="h-full">
              <TestimonialCard testimonial={t} className="h-full" />
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper tone="sand" tight>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 90}>
              <StatCounter value={s.value} suffix={s.suffix} label={s.label} decimals={s.decimals ?? 0} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection className="mt-16 text-center">
          <ButtonLink to="/contact" size="lg">
            Speak with an owner
          </ButtonLink>
        </AnimatedSection>
      </SectionWrapper>
    </>
  );
}

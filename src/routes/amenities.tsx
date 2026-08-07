import { createFileRoute } from "@tanstack/react-router";
import { images, amenities, amenityIcons } from "@/data/content";
import { type as typeScale } from "@/theme";
import { PageHero } from "@/components/PageHero";
import { SectionWrapper } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedSection } from "@/components/AnimatedSection";
import { LazyImage } from "@/components/LazyImage";
import { ButtonLink } from "@/components/Button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/amenities")({
  head: () => ({
    meta: [
      { title: "Amenities — Parjane Buildcon" },
      {
        name: "description",
        content:
          "Rooftop infinity pool, sky gym, grand executive lounge, landscaped gardens and 24/7 smart security — shared facilities crafted to luxury standards.",
      },
      { property: "og:title", content: "Amenities — Parjane Buildcon" },
      {
        property: "og:description",
        content: "Shared lifestyle amenities and estate services at every Parjane address.",
      },
    ],
  }),
  component: Amenities,
});

function Amenities() {
  return (
    <>
      <PageHero
        eyebrow="Lifestyle & Infrastructure"
        title="Shared Spaces Held to The Highest Standard."
        lede="From rooftop infinity pools to 24/7 smart security, our amenities are engineered for long-term luxury and effortless living."
        image={images.pool}
      />

      {/* Alternating image/text blocks */}
      <SectionWrapper className="bg-white">
        <div className="space-y-24 lg:space-y-36">
          {amenities.map((item, i) => {
            const flip = i % 2 === 1;
            return (
              <div key={item.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
                <AnimatedSection variant="scale" className={cn(flip && "lg:order-2")}>
                  <LazyImage
                    src={item.image}
                    alt={item.title}
                    width={1280}
                    height={960}
                    wrapperClassName="aspect-4/3 rounded-3xl border border-slate-200 shadow-xl"
                    className="transition-transform duration-[1600ms] hover:scale-[1.04]"
                  />
                </AnimatedSection>

                <AnimatedSection delay={120} className={cn(flip && "lg:order-1")}>
                  <p className="eyebrow text-gold font-bold mb-4">{item.eyebrow}</p>
                  <h2 className={typeScale.h2}>{item.title}</h2>
                  <p className={`${typeScale.body} mt-6 max-w-lg`}>{item.body}</p>
                  <div className="mt-8 h-1 w-16 bg-gold rounded-full" />
                </AnimatedSection>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Service grid */}
      <SectionWrapper tone="dark">
        <SectionHeading eyebrow="Services" title="Quiet Infrastructure Running in the Background" />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {amenityIcons.map((item, i) => (
            <AnimatedSection
              key={item.title}
              delay={i * 70}
              className="rounded-3xl border border-white/10 bg-navy/80 p-8 shadow-sm transition-all duration-500 hover:border-gold"
            >
              <span className="font-display text-3xl font-bold text-gold">0{i + 1}</span>
              <h3 className="mt-6 font-display text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm font-light leading-[1.85] text-slate-300">{item.body}</p>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper tone="sand" tight>
        <AnimatedSection className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <h2 className="max-w-xl font-display text-[clamp(1.75rem,3vw,2.75rem)] font-bold text-navy leading-tight">
            Schedule an amenity walkthrough with our engineering team.
          </h2>
          <ButtonLink to="/contact" size="lg" className="rounded-2xl bg-gold text-navy font-bold">
            Book Site Walkthrough
          </ButtonLink>
        </AnimatedSection>
      </SectionWrapper>
    </>
  );
}

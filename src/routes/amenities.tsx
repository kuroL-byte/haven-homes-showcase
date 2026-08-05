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
      { title: "Amenities — Atelier Meridian" },
      {
        name: "description",
        content:
          "Lap pool, wellness studio, clubhouse, gardens and estate services — the shared spaces held to the same standard as the homes.",
      },
      { property: "og:title", content: "Amenities — Atelier Meridian" },
      {
        property: "og:description",
        content: "The shared spaces at a Meridian address, from the lap pool to the residents' library.",
      },
    ],
  }),
  component: Amenities,
});

function Amenities() {
  return (
    <>
      <PageHero
        eyebrow="Lifestyle"
        title="The parts of a building everyone shares."
        lede="Commons are where developers usually economise. We treat them as the reason the building holds its value."
        image={images.pool}
      />

      {/* Alternating image/text blocks */}
      <SectionWrapper>
        <div className="space-y-24 lg:space-y-36">
          {amenities.map((item, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={item.title}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20"
              >
                <AnimatedSection
                  variant="scale"
                  className={cn(flip && "lg:order-2")}
                >
                  <LazyImage
                    src={item.image}
                    alt={item.title}
                    width={1280}
                    height={960}
                    wrapperClassName="aspect-4/3"
                    className="transition-transform duration-[1600ms] hover:scale-[1.04]"
                  />
                </AnimatedSection>

                <AnimatedSection delay={120} className={cn(flip && "lg:order-1")}>
                  <p className="eyebrow mb-5">{item.eyebrow}</p>
                  <h2 className={typeScale.h2}>{item.title}</h2>
                  <p className={`${typeScale.body} mt-6 max-w-lg`}>{item.body}</p>
                  <div className="mt-8 h-px w-16 bg-bronze" />
                </AnimatedSection>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Service grid */}
      <SectionWrapper tone="dark">
        <SectionHeading eyebrow="Services" title="Everything running quietly in the background." />
        <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {amenityIcons.map((item, i) => (
            <AnimatedSection
              key={item.title}
              delay={i * 70}
              className="bg-background p-8 transition-colors duration-700 hover:bg-secondary lg:p-10"
            >
              <span className="font-display text-3xl text-bronze/50">0{i + 1}</span>
              <h3 className="mt-6 font-display text-xl">{item.title}</h3>
              <p className="mt-3 text-sm font-light leading-[1.85] text-muted-foreground">{item.body}</p>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper tone="sand" tight>
        <AnimatedSection className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <h2 className="max-w-xl font-display text-[clamp(1.75rem,3vw,2.75rem)] leading-tight">
            Walk the commons before you commit to the home.
          </h2>
          <ButtonLink to="/contact" size="lg">
            Book a walkthrough
          </ButtonLink>
        </AnimatedSection>
      </SectionWrapper>
    </>
  );
}

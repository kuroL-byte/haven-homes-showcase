import { createFileRoute } from "@tanstack/react-router";
import { images, amenities, amenityIcons } from "@/data/content";
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
        lede="From temperature-controlled rooftop pools to MERV-13 air-filtered wellness lounges, our amenities are engineered for long-term luxury and effortless living."
        image={images.pool}
      />

      {/* ── Alternating Editorial Showcase ────────────────────────── */}
      <SectionWrapper>
        <div className="space-y-12 lg:space-y-16">
          {amenities.map((item, i) => {
            const flip = i % 2 === 1;
            return (
              <div key={item.title} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                <AnimatedSection variant="scale" className={cn(flip && "lg:order-2")}>
                  <div className="overflow-hidden rounded-2xl border border-amber-500/25 bg-black/25 shadow-xl">
                    <LazyImage
                      src={item.image}
                      alt={item.title}
                      width={1280}
                      height={960}
                      wrapperClassName="aspect-4/3"
                      className="transition-transform duration-[1600ms] hover:scale-105"
                    />
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={120} className={cn(flip && "lg:order-1")}>
                  <p className="eyebrow text-amber-400 font-bold mb-2 text-[10px]">{item.eyebrow}</p>
                  <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-white leading-tight">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-slate-300 max-w-lg">
                    {item.body}
                  </p>
                  <div className="mt-4 h-0.5 w-12 bg-gradient-to-r from-amber-400 to-amber-200 rounded-full" />
                </AnimatedSection>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* ── Estate Infrastructure Service Grid ────────────────────── */}
      <SectionWrapper className="border-y border-amber-500/20 bg-black/25 backdrop-blur-md">
        <SectionHeading
          eyebrow="Estate Operations"
          title="Quiet Infrastructure Running in the Background"
          lede="High-performance building systems ensuring seamless 24/7 power, security, water treatment, and concierge maintenance."
        />
        <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {amenityIcons.map((item, i) => (
            <AnimatedSection
              key={item.title}
              delay={i * 60}
              className="rounded-2xl border border-white/10 bg-black/25 backdrop-blur-xl p-5 sm:p-6 shadow-xl transition-all duration-400 hover:border-amber-400/50 hover:bg-black/35 hover:-translate-y-1"
            >
              <span className="font-display text-xl sm:text-2xl font-bold text-amber-400">0{i + 1}</span>
              <h3 className="mt-3.5 font-display text-base sm:text-lg font-semibold text-white drop-shadow-sm">{item.title}</h3>
              <p className="mt-1.5 text-xs font-normal leading-relaxed text-slate-300">{item.body}</p>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Amenity Walkthrough CTA ───────────────────────────────── */}
      <SectionWrapper tight>
        <AnimatedSection className="rounded-2xl border border-white/10 bg-black/25 backdrop-blur-xl p-6 sm:p-8 shadow-xl flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
          <div>
            <span className="eyebrow text-amber-400 font-bold text-[10px]">Private Tour</span>
            <h2 className="mt-1.5 max-w-xl font-display text-lg sm:text-xl lg:text-2xl font-semibold text-white leading-tight drop-shadow-sm">
              Schedule an amenity walkthrough with our engineering director.
            </h2>
          </div>
          <ButtonLink
            to="/contact"
            size="sm"
            className="rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c59b27] text-[#080c14] font-bold text-xs uppercase tracking-wider shadow-md shrink-0 hover:scale-105"
          >
            Book Site Walkthrough →
          </ButtonLink>
        </AnimatedSection>
      </SectionWrapper>
    </>
  );
}

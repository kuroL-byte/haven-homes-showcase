import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { images, galleryItems, testimonials, stats } from "@/data/content";
import { PageHero } from "@/components/PageHero";
import { SectionWrapper, Container, Hairline } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedSection } from "@/components/AnimatedSection";
import { LazyImage } from "@/components/LazyImage";
import { Modal } from "@/components/Modal";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Carousel } from "@/components/Carousel";
import { StatCounter } from "@/components/StatCounter";
import { ButtonLink } from "@/components/Button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery & Testimonials — Parjane Buildcon" },
      {
        name: "description",
        content:
          "Visual showcase of completed exteriors, luxury interiors, lifestyle amenities, and authentic client reviews from 3,000+ happy families across Parjane Buildcon landmarks.",
      },
      { property: "og:title", content: "Gallery & Testimonials — Parjane Buildcon" },
      {
        property: "og:description",
        content: "A visual record of our architectural landmarks and verified resident experiences.",
      },
    ],
  }),
  component: GalleryAndTestimonials,
});

const categories = ["All", "Exteriors", "Interiors", "Amenities", "Construction Progress"];

function GalleryAndTestimonials() {
  const [category, setCategory] = useState("All");
  const [active, setActive] = useState<number | null>(null);

  const items = useMemo(
    () => galleryItems.filter((g) => category === "All" || g.category === category),
    [category],
  );

  const current = active === null ? null : items[active];

  const step = (dir: 1 | -1) =>
    setActive((i) => (i === null ? null : (i + dir + items.length) % items.length));

  return (
    <>
      <PageHero
        eyebrow="Showcase &amp; Stories"
        title="Landmarks As Built &amp; Trusted by 3,000+ Families."
        lede="Explore high-resolution photography of our completed towers, luxury interior show flats, and honest reviews from residents across our landmarks."
        image={images.interior1}
      />

      {/* ── Visual Gallery Section ────────────────────────────────── */}
      <SectionWrapper>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <p className="eyebrow text-amber-400 font-bold mb-1">Visual Portfolio</p>
            <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight drop-shadow-md">
              Architectural Photography &amp; Progress
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-100 font-medium max-w-sm drop-shadow-sm">
            Filter by construction category to view completed towers, show suites, and site progress.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-black/15 backdrop-blur-[2px] p-3 shadow-xl">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => {
                setCategory(c);
                setActive(null);
              }}
              className={cn(
                "rounded-xl border px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer",
                category === c
                  ? "border-amber-400 bg-gradient-to-r from-[#d4af37] to-[#c59b27] text-[#080c14] font-extrabold shadow-sm"
                  : "border-transparent bg-transparent text-white hover:border-amber-400/50 hover:text-amber-300",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="mt-6 sm:mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {items.map((item, i) => (
            <AnimatedSection
              key={item.caption}
              delay={(i % 3) * 70}
              variant="scale"
              className="break-inside-avoid"
            >
              <button
                onClick={() => setActive(i)}
                className="group block w-full overflow-hidden rounded-2xl border border-white/10 bg-black/15 backdrop-blur-[2px] p-2.5 text-left shadow-xl transition-all duration-400 hover:-translate-y-1 hover:border-amber-400/50 hover:bg-black/25 hover:shadow-[0_16px_36px_rgba(212,175,55,0.15)] cursor-pointer"
                aria-label={`Open ${item.caption}`}
              >
                <div className="overflow-hidden rounded-xl">
                  <LazyImage
                    src={item.src}
                    alt={item.caption}
                    width={1280}
                    height={960}
                    wrapperClassName={cn("w-full", i % 3 === 1 ? "aspect-3/4" : "aspect-4/3")}
                    className="transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 pt-3 px-1.5 pb-0.5">
                  <span className="font-display font-semibold text-xs sm:text-sm text-white group-hover:text-amber-300 transition-colors drop-shadow-sm">
                    {item.caption}
                  </span>
                  <span className="shrink-0 rounded-full border border-amber-400/30 bg-amber-500/15 px-2 py-0.5 text-[8px] uppercase font-bold tracking-wider text-amber-300">
                    {item.category}
                  </span>
                </div>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Lightbox Modal */}
      <Modal open={current !== null} onClose={() => setActive(null)} label="Gallery image">
        {current && (
          <figure className="rounded-2xl bg-black/80 backdrop-blur-[2px] p-4 sm:p-5 border border-amber-500/30 text-white max-h-[85vh] overflow-y-auto">
            <img
              src={current.src}
              alt={current.caption}
              className="max-h-[55vh] sm:max-h-[70vh] w-full rounded-xl object-contain"
            />
            <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="font-display text-base sm:text-lg font-semibold text-white">{current.caption}</span>
              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase font-bold text-amber-400">
                  {current.category}
                </span>
                <div className="flex gap-1.5">
                  <button
                    onClick={() => step(-1)}
                    aria-label="Previous image"
                    className="grid size-8 place-items-center rounded-lg border border-white/20 text-white transition-colors hover:border-amber-400 hover:text-amber-400 cursor-pointer"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => step(1)}
                    aria-label="Next image"
                    className="grid size-8 place-items-center rounded-lg border border-white/20 text-white transition-colors hover:border-amber-400 hover:text-amber-400 cursor-pointer"
                  >
                    →
                  </button>
                </div>
              </div>
            </figcaption>
          </figure>
        )}
      </Modal>

      <Container className="px-0">
        <Hairline />
      </Container>

      {/* ── Featured Testimonials Carousel ────────────────────────── */}
      <SectionWrapper>
        <SectionHeading
          eyebrow="Resident Voices"
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

      {/* ── Full Reviews Grid ────────────────────────────────────── */}
      <SectionWrapper className="border-t border-amber-500/20 bg-transparent">
        <SectionHeading
          eyebrow="Verified Community"
          title="All Resident Feedback &amp; Experiences"
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
      <SectionWrapper tone="dark" tight className="border-t border-amber-500/20 bg-black/15 backdrop-blur-[2px] py-6 sm:py-8">
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


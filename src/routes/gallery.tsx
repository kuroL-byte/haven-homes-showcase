import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { images, galleryItems } from "@/data/content";
import { PageHero } from "@/components/PageHero";
import { SectionWrapper } from "@/components/Container";
import { AnimatedSection } from "@/components/AnimatedSection";
import { LazyImage } from "@/components/LazyImage";
import { Modal } from "@/components/Modal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Atelier Meridian" },
      {
        name: "description",
        content:
          "Exteriors, interiors, amenities and construction progress from across the Atelier Meridian portfolio.",
      },
      { property: "og:title", content: "Gallery — Atelier Meridian" },
      {
        property: "og:description",
        content: "A visual record of the buildings, from courtyards to core.",
      },
    ],
  }),
  component: Gallery,
});

const categories = ["All", "Exteriors", "Interiors", "Amenities", "Construction Progress"];

function Gallery() {
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
        eyebrow="Gallery"
        title="A record of the work."
        lede="Photographed as built, not rendered. Filter by category or open any frame full-screen."
        image={images.interior1}
      />

      <SectionWrapper>
        <div className="flex flex-wrap gap-x-8 gap-y-3 border-b border-border pb-6">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => {
                setCategory(c);
                setActive(null);
              }}
              className={cn(
                "border-b pb-1 text-[11px] uppercase tracking-[0.2em] transition-colors duration-500",
                category === c
                  ? "border-bronze text-bronze"
                  : "border-transparent text-muted-foreground hover:text-foreground",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Masonry via CSS columns */}
        <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {items.map((item, i) => (
            <AnimatedSection key={item.caption} delay={(i % 3) * 80} variant="scale" className="break-inside-avoid">
              <button
                onClick={() => setActive(i)}
                className="group block w-full text-left"
                aria-label={`Open ${item.caption}`}
              >
                <LazyImage
                  src={item.src}
                  alt={item.caption}
                  width={1280}
                  height={960}
                  wrapperClassName={i % 3 === 1 ? "aspect-3/4" : "aspect-4/3"}
                  className="transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                />
                <div className="flex items-baseline justify-between gap-4 pt-4">
                  <span className="text-sm font-light">{item.caption}</span>
                  <span className="shrink-0 text-[10px] uppercase tracking-[0.2em] text-bronze">
                    {item.category}
                  </span>
                </div>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Lightbox */}
      <Modal open={current !== null} onClose={() => setActive(null)} label="Gallery image">
        {current && (
          <figure>
            <img
              src={current.src}
              alt={current.caption}
              className="max-h-[76vh] w-full object-contain"
            />
            <figcaption className="mt-5 flex flex-wrap items-center justify-between gap-4 text-ivory">
              <span className="font-display text-xl">{current.caption}</span>
              <span className="flex items-center gap-6">
                <span className="text-[10px] uppercase tracking-[0.22em] text-ivory/60">
                  {current.category}
                </span>
                <span className="flex gap-3">
                  <button
                    onClick={() => step(-1)}
                    aria-label="Previous image"
                    className="grid size-10 place-items-center border border-ivory/25 transition-colors hover:bg-ivory hover:text-ink"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => step(1)}
                    aria-label="Next image"
                    className="grid size-10 place-items-center border border-ivory/25 transition-colors hover:bg-ivory hover:text-ink"
                  >
                    →
                  </button>
                </span>
              </span>
            </figcaption>
          </figure>
        )}
      </Modal>
    </>
  );
}

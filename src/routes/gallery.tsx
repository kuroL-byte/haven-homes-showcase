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
      { title: "Gallery — Parjane Buildcon" },
      {
        name: "description",
        content:
          "Visual showcase of completed exteriors, luxury interiors, lifestyle amenities, and active construction progress across Parjane Buildcon landmarks.",
      },
      { property: "og:title", content: "Gallery — Parjane Buildcon" },
      {
        property: "og:description",
        content: "A visual record of our architectural landmarks as built.",
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
        eyebrow="Visual Portfolio"
        title="Landmarks Photographed as Built."
        lede="Explore high-resolution photography of our completed towers, luxury interior show flats, and site progress."
        image={images.interior1}
      />

      <SectionWrapper className="bg-slate-50">
        <div className="flex flex-wrap gap-x-3 gap-y-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => {
                setCategory(c);
                setActive(null);
              }}
              className={cn(
                "rounded-xl border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer",
                category === c
                  ? "border-gold bg-gold text-navy shadow-md"
                  : "border-transparent text-slate-600 hover:border-gold/50 hover:text-navy",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {items.map((item, i) => (
            <AnimatedSection
              key={item.caption}
              delay={(i % 3) * 80}
              variant="scale"
              className="break-inside-avoid"
            >
              <button
                onClick={() => setActive(i)}
                className="group block w-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-3 text-left shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-gold hover:shadow-xl cursor-pointer"
                aria-label={`Open ${item.caption}`}
              >
                <LazyImage
                  src={item.src}
                  alt={item.caption}
                  width={1280}
                  height={960}
                  wrapperClassName={cn("rounded-2xl", i % 3 === 1 ? "aspect-3/4" : "aspect-4/3")}
                  className="transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="flex items-baseline justify-between gap-4 pt-4 px-2 pb-1">
                  <span className="font-display font-bold text-sm text-navy">{item.caption}</span>
                  <span className="shrink-0 rounded-full border border-gold/40 bg-gold/10 px-2.5 py-0.5 text-[9px] uppercase font-bold tracking-wider text-gold">
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
          <figure className="rounded-3xl bg-navy p-6 border border-gold/30 text-white">
            <img
              src={current.src}
              alt={current.caption}
              className="max-h-[72vh] w-full rounded-2xl object-contain"
            />
            <figcaption className="mt-5 flex flex-wrap items-center justify-between gap-4">
              <span className="font-display text-xl font-bold">{current.caption}</span>
              <span className="flex items-center gap-6">
                <span className="text-xs uppercase font-semibold text-gold">
                  {current.category}
                </span>
                <span className="flex gap-3">
                  <button
                    onClick={() => step(-1)}
                    aria-label="Previous image"
                    className="grid size-10 place-items-center rounded-xl border border-white/20 text-white transition-colors hover:bg-gold hover:text-navy cursor-pointer"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => step(1)}
                    aria-label="Next image"
                    className="grid size-10 place-items-center rounded-xl border border-white/20 text-white transition-colors hover:bg-gold hover:text-navy cursor-pointer"
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

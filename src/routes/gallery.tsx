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
        title="Landmarks Photographed As Built."
        lede="Explore high-resolution photography of our completed towers, luxury interior show flats, and site progress."
        image={images.interior1}
      />

      <SectionWrapper>
        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-black/25 backdrop-blur-xl p-3 shadow-xl">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => {
                setCategory(c);
                setActive(null);
              }}
              className={cn(
                "rounded-xl border px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer",
                category === c
                  ? "border-amber-400 bg-gradient-to-r from-[#d4af37] to-[#c59b27] text-[#080c14] font-extrabold shadow-sm"
                  : "border-transparent bg-transparent text-slate-300 hover:border-amber-400/50 hover:text-white",
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
                className="group block w-full overflow-hidden rounded-2xl border border-white/10 bg-black/25 backdrop-blur-xl p-2.5 text-left shadow-xl transition-all duration-400 hover:-translate-y-1 hover:border-amber-400/50 hover:bg-black/35 hover:shadow-[0_16px_36px_rgba(212,175,55,0.15)] cursor-pointer"
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
          <figure className="rounded-2xl bg-black/80 backdrop-blur-2xl p-4 sm:p-5 border border-amber-500/30 text-white max-h-[85vh] overflow-y-auto">
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
    </>
  );
}

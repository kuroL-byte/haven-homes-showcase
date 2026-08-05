import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { images, posts } from "@/data/content";
import { PageHero } from "@/components/PageHero";
import { SectionWrapper } from "@/components/Container";
import { AnimatedSection } from "@/components/AnimatedSection";
import { BlogCard } from "@/components/BlogCard";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Insights — Atelier Meridian" },
      {
        name: "description",
        content:
          "Notes from the studio on materials, floor plans, landscape and what a serious handover looks like.",
      },
      { property: "og:title", content: "Insights — Atelier Meridian" },
      {
        property: "og:description",
        content: "Essays and buyer's guides from an architect-led development practice.",
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [category, setCategory] = useState("All");
  const categories = useMemo(() => ["All", ...new Set(posts.map((p) => p.category))], []);
  const filtered = posts.filter((p) => category === "All" || p.category === category);

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Notes from the studio."
        lede="Longer-form writing on the decisions behind the buildings, and guidance for buyers."
        image={images.construction}
      />

      <SectionWrapper>
        <div className="flex flex-wrap gap-x-8 gap-y-3 border-b border-border pb-6">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
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

        <div className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, i) => (
            <AnimatedSection key={post.slug} delay={(i % 3) * 90}>
              <BlogCard post={post} />
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}

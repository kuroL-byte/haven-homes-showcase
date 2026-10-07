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
      { title: "Insights & Journal — Parjane Buildcon" },
      {
        name: "description",
        content:
          "Articles and buyer's guides from Parjane Buildcon engineers on structural safety, green construction, and urban redevelopment.",
      },
      { property: "og:title", content: "Insights & Journal — Parjane Buildcon" },
      {
        property: "og:description",
        content: "Engineering insights, buyer guides, and construction updates.",
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
        eyebrow="Insights & Journal"
        title="Engineering & Construction Knowledge."
        lede="Articles from our structural engineers and architects on material science, redevelopment guides, and green building."
        image={images.construction}
      />

      <SectionWrapper>
        <div className="flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-black/15 backdrop-blur-[2px] p-3 shadow-xl">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
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

        <div className="mt-6 sm:mt-8 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, i) => (
            <AnimatedSection key={post.slug} delay={(i % 3) * 70}>
              <BlogCard post={post} />
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}

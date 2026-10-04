import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { images, projects, type ProjectStatus, type ProjectType } from "@/data/content";
import { PageHero } from "@/components/PageHero";
import { SectionWrapper } from "@/components/Container";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ProjectCard } from "@/components/ProjectCard";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Portfolio — Parjane Buildcon" },
      {
        name: "description",
        content:
          "Explore ongoing, upcoming, and completed luxury residential towers, corporate office parks, and gated estates by Parjane Buildcon.",
      },
      { property: "og:title", content: "Portfolio — Parjane Buildcon" },
      {
        property: "og:description",
        content: "Luxury sky residences, Grade-A office towers, and turnkey developments.",
      },
    ],
  }),
  component: ProjectsIndex,
});

const statuses: (ProjectStatus | "All")[] = ["All", "Ongoing", "Upcoming", "Completed"];
const types: (ProjectType | "All")[] = ["All", "Residential", "Commercial"];

function FilterRow({
  label,
  options,
  active,
  onChange,
}: {
  label: string;
  options: readonly string[];
  active: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
      <span className="eyebrow text-amber-400 font-bold shrink-0">{label}</span>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={cn(
              "rounded-xl border px-3.5 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer",
              active === opt
                ? "border-amber-400 bg-gradient-to-r from-[#d4af37] to-[#c59b27] text-[#080c14] font-extrabold shadow-md"
                : "border-white/15 bg-white/5 text-slate-300 hover:border-amber-400/50 hover:text-white",
            )}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function ProjectsIndex() {
  const [status, setStatus] = useState<string>("All");
  const [type, setType] = useState<string>("All");

  const filtered = useMemo(
    () =>
      projects.filter(
        (p) => (status === "All" || p.status === status) && (type === "All" || p.type === type),
      ),
    [status, type],
  );

  return (
    <>
      <PageHero
        eyebrow="Landmarks Portfolio"
        title="150+ Landmarks Delivered With Zero Compromise."
        lede="Filter by status or development category. Each project detail page features specifications, floor plans, and VIP site tour bookings."
        image={images.project2}
      />

      <SectionWrapper>
        <div className="flex flex-col gap-3 sm:gap-4 rounded-2xl border border-white/10 bg-black/25 backdrop-blur-xl p-4 sm:p-6 shadow-xl">
          <FilterRow label="Status" options={statuses} active={status} onChange={setStatus} />
          <FilterRow label="Type" options={types} active={type} onChange={setType} />
        </div>

        <p className="mt-5 sm:mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-400">
          Showing {filtered.length} {filtered.length === 1 ? "landmark" : "landmarks"}
        </p>

        {filtered.length === 0 ? (
          <div className="mt-10 text-center rounded-2xl border border-white/10 bg-black/25 backdrop-blur-xl p-8 shadow-xl">
            <p className="font-display text-lg sm:text-xl font-semibold text-slate-200">
              No landmarks match that filter criteria.
            </p>
            <button
              onClick={() => {
                setStatus("All");
                setType("All");
              }}
              className="mt-3 text-xs uppercase font-bold text-amber-400 hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="mt-6 sm:mt-8 grid gap-6 sm:gap-8 md:grid-cols-2">
            {filtered.map((p, i) => (
              <AnimatedSection key={p.slug} delay={(i % 2) * 80} variant="scale">
                <ProjectCard project={p} index={i} />
              </AnimatedSection>
            ))}
          </div>
        )}
      </SectionWrapper>
    </>
  );
}

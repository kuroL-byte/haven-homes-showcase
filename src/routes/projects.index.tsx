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
        content: "Luxury sky residences, Grade-A office towers, and hilltop estates.",
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
      <span className="eyebrow text-gold font-bold shrink-0">{label}</span>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={cn(
              "rounded-xl border px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer",
              active === opt
                ? "border-gold bg-gold text-navy shadow-md"
                : "border-slate-200 bg-white text-slate-600 hover:border-gold/50 hover:text-navy",
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
        title="150+ Projects Handed Over With Excellence."
        lede="Filter by status or development category. Each project detail page features specifications, floor plans, and enquiry contacts."
        image={images.project2}
      />

      <SectionWrapper className="bg-slate-50">
        <div className="flex flex-col gap-4 sm:gap-6 rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm">
          <FilterRow label="Status" options={statuses} active={status} onChange={setStatus} />
          <FilterRow label="Type" options={types} active={type} onChange={setType} />
        </div>

        <p className="mt-6 sm:mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Showing {filtered.length} {filtered.length === 1 ? "landmark" : "landmarks"}
        </p>

        {filtered.length === 0 ? (
          <p className="mt-16 text-center font-display text-xl sm:text-2xl font-bold text-slate-400">
            No projects match that filter criteria.
          </p>
        ) : (
          <div className="mt-8 sm:mt-10 grid gap-6 sm:gap-10 md:grid-cols-2">
            {filtered.map((p, i) => (
              <AnimatedSection key={p.slug} delay={(i % 2) * 90} variant="scale">
                <ProjectCard project={p} index={i} />
              </AnimatedSection>
            ))}
          </div>
        )}
      </SectionWrapper>
    </>
  );
}

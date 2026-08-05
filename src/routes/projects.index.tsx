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
      { title: "Projects — Atelier Meridian" },
      {
        name: "description",
        content:
          "Ongoing, upcoming and completed residential and commercial developments across Mumbai, Pune and Lonavala.",
      },
      { property: "og:title", content: "Projects — Atelier Meridian" },
      {
        property: "og:description",
        content: "Full-floor residences, garden courts, hillside villas and Grade-A workplaces.",
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
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
      <span className="eyebrow">{label}</span>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={cn(
              "border-b pb-1 text-[11px] uppercase tracking-[0.2em] transition-colors duration-500",
              active === opt
                ? "border-bronze text-bronze"
                : "border-transparent text-muted-foreground hover:text-foreground",
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
        eyebrow="Portfolio"
        title="Forty-one buildings, one language."
        lede="Filter by stage or by use. Each project page carries specs, plans, amenities and an enquiry line."
        image={images.project2}
      />

      <SectionWrapper>
        <div className="flex flex-col gap-6 border-b border-border pb-8">
          <FilterRow label="Status" options={statuses} active={status} onChange={setStatus} />
          <FilterRow label="Type" options={types} active={type} onChange={setType} />
        </div>

        <p className="mt-6 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? "project" : "projects"}
        </p>

        {filtered.length === 0 ? (
          <p className="mt-20 text-center font-display text-2xl text-muted-foreground">
            No projects match that combination.
          </p>
        ) : (
          <div className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-2">
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

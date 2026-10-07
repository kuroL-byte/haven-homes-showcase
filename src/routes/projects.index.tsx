import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { images, projects, amenityIcons, type ProjectStatus, type ProjectType } from "@/data/content";
import { PageHero } from "@/components/PageHero";
import { SectionWrapper, Container, Hairline } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ProjectCard, StatusBadge } from "@/components/ProjectCard";
import { LazyImage } from "@/components/LazyImage";
import { ButtonLink } from "@/components/Button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Portfolio & Amenities — Parjane Buildcon" },
      {
        name: "description",
        content:
          "Explore ongoing, upcoming, and completed luxury residential towers, corporate office parks, and distinct project amenities crafted by Parjane Buildcon.",
      },
      { property: "og:title", content: "Portfolio & Amenities — Parjane Buildcon" },
      {
        property: "og:description",
        content: "Luxury sky residences, Grade-A office towers, and distinct project amenities.",
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
  const [selectedSlug, setSelectedSlug] = useState<string>(projects[0].slug);

  const filtered = useMemo(
    () =>
      projects.filter(
        (p) => (status === "All" || p.status === status) && (type === "All" || p.type === type),
      ),
    [status, type],
  );

  const activeProject = useMemo(
    () => projects.find((p) => p.slug === selectedSlug) || projects[0],
    [selectedSlug],
  );

  return (
    <>
      <PageHero
        eyebrow="Landmarks &amp; Lifestyle"
        title="150+ Landmarks Delivered With Signature Amenities."
        lede="Explore each luxury landmark, architectural specifications, and the exclusive lifestyle amenities designed for each development."
        image={images.project2}
      />

      {/* ── Portfolio Grid Section ──────────────────────────────── */}
      <SectionWrapper>
        <div className="flex flex-col gap-3 sm:gap-4 rounded-2xl border border-white/10 bg-black/15 backdrop-blur-[2px] p-4 sm:p-6 shadow-xl">
          <FilterRow label="Status" options={statuses} active={status} onChange={setStatus} />
          <FilterRow label="Type" options={types} active={type} onChange={setType} />
        </div>

        <p className="mt-5 sm:mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-400">
          Showing {filtered.length} {filtered.length === 1 ? "landmark" : "landmarks"}
        </p>

        {filtered.length === 0 ? (
          <div className="mt-10 text-center rounded-2xl border border-white/10 bg-black/15 backdrop-blur-[2px] p-8 shadow-xl">
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

      {/* ── Dedicated Project-Specific Amenities Showcase ──────────── */}
      <SectionWrapper className="border-t border-amber-500/20 bg-transparent">
        <AnimatedSection>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-amber-400 font-bold mb-1">Distinct Features</p>
              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-white leading-tight">
                Project-Specific Lifestyle &amp; Amenities
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-100 font-medium max-w-md leading-relaxed drop-shadow-sm">
              Every Parjane development is engineered with its own unique suite of lifestyle, wellness, and architectural amenities.
            </p>
          </div>
        </AnimatedSection>

        {/* Project Selector Pills */}
        <div className="mt-6 sm:mt-8 overflow-x-auto pb-2 scrollbar-thin">
          <div className="flex gap-2 min-w-max">
            {projects.map((proj) => {
              const isSelected = proj.slug === activeProject.slug;
              return (
                <button
                  key={proj.slug}
                  onClick={() => setSelectedSlug(proj.slug)}
                  className={cn(
                    "flex items-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-sm",
                    isSelected
                      ? "border-amber-400 bg-gradient-to-r from-[#d4af37] to-[#c59b27] text-[#080c14] font-extrabold shadow-md scale-[1.02]"
                      : "border-white/15 bg-black/20 text-slate-100 hover:border-amber-400/50 hover:bg-black/30 hover:text-white",
                  )}
                >
                  <span className={cn("size-2 rounded-full", isSelected ? "bg-[#080c14]" : "bg-amber-400")} />
                  <span>{proj.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Project Overview Card */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-black/15 backdrop-blur-[2px] p-5 sm:p-7 shadow-xl">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2.5">
                <StatusBadge status={activeProject.status} />
                <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 text-[9px] uppercase font-bold tracking-wider text-slate-100">
                  {activeProject.type}
                </span>
                <span className="text-xs text-amber-300 font-bold">📍 {activeProject.location}</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white drop-shadow">
                {activeProject.name}
              </h3>
              <p className="mt-2 text-xs sm:text-sm font-medium text-slate-100 leading-relaxed drop-shadow-sm">
                {activeProject.summary}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-6">
              <div className="text-left">
                <span className="block text-[9px] uppercase tracking-wider text-slate-200 font-semibold">
                  Area &amp; Possession
                </span>
                <span className="font-display text-xs sm:text-sm font-bold text-white">
                  {activeProject.area} · <span className="text-amber-300">{activeProject.completion}</span>
                </span>
              </div>
              <ButtonLink
                to="/projects/$slug"
                params={{ slug: activeProject.slug }}
                size="sm"
                className="rounded-xl bg-gradient-to-r from-[#d4af37] to-[#c59b27] text-[#080c14] font-bold text-xs uppercase tracking-wider shadow-md shrink-0 text-center"
              >
                View Full Landmark →
              </ButtonLink>
            </div>
          </div>

          {/* Project Specific Amenity Cards */}
          <div className="mt-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-300 mb-4">
              Exclusive Amenities for {activeProject.name}
            </p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {activeProject.amenityHighlights.map((item) => (
                <div
                  key={item.title}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/15 backdrop-blur-[2px] shadow-lg transition-all duration-300 hover:border-amber-400/50 hover:bg-black/25 hover:-translate-y-1"
                >
                  {item.image && (
                    <div className="relative aspect-16/10 overflow-hidden bg-black/20">
                      <LazyImage
                        src={item.image}
                        alt={item.title}
                        width={800}
                        height={500}
                        wrapperClassName="h-full w-full"
                        className="transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <span className="absolute top-2.5 left-2.5 rounded-full border border-white/15 bg-black/30 backdrop-blur-[2px] px-2.5 py-0.5 text-[9px] uppercase font-bold tracking-wider text-amber-300">
                        {item.category}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                    <div>
                      <h4 className="font-display text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors drop-shadow-sm">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-xs font-medium leading-relaxed text-slate-100 drop-shadow-sm">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-3.5 border-t border-white/10 pt-2.5 text-[9px] uppercase font-bold text-amber-300">
                      ✦ {activeProject.name} Specification
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Roster */}
          <div className="mt-6 border-t border-white/10 pt-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-200 mb-2.5">
              All Included Amenities &amp; Facilities
            </p>
            <div className="flex flex-wrap gap-2">
              {activeProject.amenities.map((amenity) => (
                <span
                  key={amenity}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-white drop-shadow-sm"
                >
                  <span className="text-amber-400 text-xs font-bold">✓</span>
                  <span>{amenity}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Shared Estate Infrastructure Grid ────────────────────── */}
      <SectionWrapper className="border-t border-amber-500/20 bg-transparent">
        <SectionHeading
          eyebrow="Estate Operations"
          title="Quiet Infrastructure Built into Every Landmark"
          lede="High-performance building systems ensuring seamless 24/7 power, security, water treatment, and concierge maintenance across all Parjane developments."
        />
        <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {amenityIcons.map((item, i) => (
            <AnimatedSection
              key={item.title}
              delay={i * 60}
              className="rounded-2xl border border-white/10 bg-black/15 backdrop-blur-[2px] p-5 sm:p-6 shadow-xl transition-all duration-400 hover:border-amber-400/50 hover:bg-black/25 hover:-translate-y-1"
            >
              <span className="font-display text-xl sm:text-2xl font-bold text-amber-400">0{i + 1}</span>
              <h3 className="mt-3.5 font-display text-base sm:text-lg font-bold text-white drop-shadow-sm">
                {item.title}
              </h3>
              <p className="mt-1.5 text-xs font-medium leading-relaxed text-slate-100 drop-shadow-sm">{item.body}</p>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Amenity Walkthrough CTA ───────────────────────────────── */}
      <SectionWrapper tight>
        <AnimatedSection className="rounded-2xl border border-white/10 bg-black/15 backdrop-blur-[2px] p-6 sm:p-8 shadow-xl flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
          <div>
            <span className="eyebrow text-amber-400 font-bold text-[10px]">Private Site Visit</span>
            <h2 className="mt-1.5 max-w-xl font-display text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight drop-shadow-md">
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


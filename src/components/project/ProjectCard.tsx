import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/content";
import { LazyImage } from "@/components/common/LazyImage";

/** Status badge — gold pill badge */
export function StatusBadge({ status, className }: { status: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-block rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[10px] uppercase font-bold tracking-[0.2em] text-gold",
        className,
      )}
    >
      {status}
    </span>
  );
}

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group block overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-gold hover:shadow-2xl hover:shadow-gold/10"
      aria-label={`${project.name}, ${project.location}`}
    >
      <div className="relative overflow-hidden aspect-16/10">
        <LazyImage
          src={project.image}
          alt={project.name}
          width={1280}
          height={960}
          wrapperClassName="h-full w-full"
          className="transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          priority={index === 0}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />

        <div className="absolute top-4 left-4 flex gap-2">
          <StatusBadge status={project.status} />
          <span className="inline-block rounded-full bg-navy/80 backdrop-blur-md px-3 py-1 text-[10px] uppercase font-semibold tracking-[0.18em] text-white">
            {project.type}
          </span>
        </div>
      </div>

      <div className="p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl font-bold text-navy group-hover:text-gold transition-colors">
              {project.name}
            </h3>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] font-semibold text-slate-700">
              📍 {project.location}
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm font-normal leading-relaxed text-slate-700 line-clamp-2">
          {project.summary}
        </p>

        {/* Project Key Metrics Row */}
        <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4 text-xs">
          <div>
            <span className="block text-[10px] uppercase tracking-wider text-slate-600 font-bold">
              Area
            </span>
            <span className="font-display font-bold text-navy text-sm">{project.area}</span>
          </div>
          <div className="text-right">
            <span className="block text-[10px] uppercase tracking-wider text-slate-600 font-bold">
              Completion
            </span>
            <span className="font-display font-extrabold text-gold text-sm">
              {project.completion}
            </span>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy transition-all group-hover:text-gold">
          <span>View Landmark Details</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </div>
      </div>
    </Link>
  );
}

import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/content";
import { LazyImage } from "./LazyImage";

/** Status badge — bronze hairline pill, no fills. */
export function StatusBadge({ status, className }: { status: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-block border border-current/30 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-bronze",
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
      className="group block"
      aria-label={`${project.name}, ${project.location}`}
    >
      <div className="relative overflow-hidden">
        <LazyImage
          src={project.image}
          alt={project.name}
          width={1280}
          height={960}
          wrapperClassName="aspect-4/3"
          className="transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
          priority={index === 0}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      </div>

      <div className="flex items-start justify-between gap-4 pt-6">
        <div className="min-w-0">
          <h3 className="font-display text-2xl leading-tight">{project.name}</h3>
          <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {project.location}
          </p>
        </div>
        <StatusBadge status={project.status} className="shrink-0" />
      </div>

      <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">{project.summary}</p>

      <span className="link-reveal mt-6 inline-block text-[11px] uppercase tracking-[0.24em] text-foreground">
        View details
      </span>
    </Link>
  );
}

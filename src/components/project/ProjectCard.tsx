import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/content";
import { LazyImage } from "@/components/common/LazyImage";

/** Status badge — gold pill badge */
export function StatusBadge({ status, className }: { status: string; className?: string }) {
  const isOngoing = status === "Ongoing";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] uppercase font-bold tracking-[0.2em] backdrop-blur-md shadow-sm",
        isOngoing
          ? "border border-amber-400/40 bg-amber-500/20 text-amber-300"
          : "border border-emerald-400/40 bg-emerald-500/20 text-emerald-300",
        className,
      )}
    >
      <span className={cn("size-1.5 rounded-full", isOngoing ? "bg-amber-400 animate-pulse" : "bg-emerald-400")} />
      {status}
    </span>
  );
}

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/25 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:bg-black/35 hover:shadow-[0_16px_36px_-8px_rgba(0,0,0,0.7),0_0_20px_rgba(212,175,55,0.15)]"
      aria-label={`${project.name}, ${project.location}`}
    >
      <div className="relative overflow-hidden aspect-16/10 bg-black/30">
        <LazyImage
          src={project.image}
          alt={project.name}
          width={1280}
          height={960}
          wrapperClassName="h-full w-full"
          className="transition-transform duration-700 ease-out group-hover:scale-105"
          priority={index === 0}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />

        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <StatusBadge status={project.status} />
          <span className="inline-block rounded-full border border-white/15 bg-black/40 backdrop-blur-md px-2.5 py-0.5 text-[9px] uppercase font-medium tracking-[0.16em] text-slate-200">
            {project.type}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
        <div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-amber-400">
              📍 {project.location}
            </p>
            <h3 className="mt-1 font-display text-base sm:text-lg font-semibold text-white group-hover:text-amber-300 transition-colors">
              {project.name}
            </h3>
          </div>

          <p className="mt-2 text-xs font-normal leading-relaxed text-slate-300/90 line-clamp-2">
            {project.summary}
          </p>
        </div>

        <div>
          {/* Project Key Metrics Row */}
          <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/10 pt-3 text-xs">
            <div>
              <span className="block text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                Typology &amp; Area
              </span>
              <span className="font-display font-medium text-white text-xs">{project.area}</span>
            </div>
            <div className="text-right">
              <span className="block text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                Possession
              </span>
              <span className="font-display font-bold text-amber-300 text-xs">
                {project.completion}
              </span>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-2.5">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-400 group-hover:text-amber-300 transition-colors">
              Explore Landmark
            </span>
            <span className="grid size-6 place-items-center rounded-full bg-amber-400/10 text-amber-400 text-xs transition-all duration-300 group-hover:translate-x-1 group-hover:bg-amber-400 group-hover:text-[#080c14]">
              →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

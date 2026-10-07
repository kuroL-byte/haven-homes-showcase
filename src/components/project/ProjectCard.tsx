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
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] uppercase font-bold tracking-[0.2em] backdrop-blur-[2px] shadow-sm",
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
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/15 backdrop-blur-[2px] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:bg-black/25 hover:shadow-[0_16px_36px_-8px_rgba(0,0,0,0.7),0_0_20px_rgba(212,175,55,0.15)]"
      aria-label={`${project.name}, ${project.location}`}
    >
      <div className="relative overflow-hidden aspect-16/10 bg-black/20">
        <LazyImage
          src={project.image}
          alt={project.name}
          width={1280}
          height={960}
          wrapperClassName="h-full w-full"
          className="transition-transform duration-700 ease-out group-hover:scale-105"
          priority={index === 0}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />

        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <StatusBadge status={project.status} />
          <span className="inline-block rounded-full border border-white/15 bg-black/30 backdrop-blur-[2px] px-2.5 py-0.5 text-[9px] uppercase font-medium tracking-[0.16em] text-slate-200">
            {project.type}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
        <div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-amber-300 drop-shadow-sm">
              📍 {project.location}
            </p>
            <h3 className="mt-1 font-display text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors drop-shadow-sm">
              {project.name}
            </h3>
          </div>

          <p className="mt-2 text-xs font-medium leading-relaxed text-slate-100 line-clamp-2 drop-shadow-sm">
            {project.summary}
          </p>

          {/* Project Amenities Quick Pills */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.amenities.slice(0, 3).map((amenity) => (
              <span
                key={amenity}
                className="inline-flex items-center gap-1 rounded-md border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-[10px] font-semibold text-amber-200"
              >
                <span className="text-[9px] text-amber-400 font-bold">✦</span>
                <span className="truncate max-w-[140px]">{amenity}</span>
              </span>
            ))}
            {project.amenities.length > 3 && (
              <span className="inline-flex items-center rounded-md border border-white/15 bg-white/10 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                +{project.amenities.length - 3} more
              </span>
            )}
          </div>
        </div>

        <div>
          {/* Project Key Metrics Row */}
          <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/10 pt-3 text-xs">
            <div>
              <span className="block text-[9px] uppercase tracking-wider text-slate-200 font-semibold">
                Typology &amp; Area
              </span>
              <span className="font-display font-bold text-white text-xs drop-shadow-sm">{project.area}</span>
            </div>
            <div className="text-right">
              <span className="block text-[9px] uppercase tracking-wider text-slate-200 font-semibold">
                Possession
              </span>
              <span className="font-display font-bold text-amber-300 text-xs drop-shadow-sm">
                {project.completion}
              </span>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-2.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 group-hover:text-white transition-colors">
              Explore Landmark
            </span>
            <span className="grid size-6 place-items-center rounded-full bg-amber-400/15 text-amber-300 text-xs transition-all duration-300 group-hover:translate-x-1 group-hover:bg-amber-400 group-hover:text-[#080c14]">
              →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

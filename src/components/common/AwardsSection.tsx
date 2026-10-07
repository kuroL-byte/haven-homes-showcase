import { awardsCertifications } from "@/data/content";
import { AnimatedSection } from "./AnimatedSection";

export function AwardsSection() {
  return (
    <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
      {awardsCertifications.map((award, i) => (
        <AnimatedSection
          key={award.name}
          delay={i * 70}
          className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-black/20 backdrop-blur-[2px] p-4 sm:p-5 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/60 hover:bg-black/35 hover:shadow-[0_12px_28px_rgba(212,175,55,0.15)]"
        >
          {/* Subtle Corner Marker */}
          <div className="pointer-events-none absolute top-2 right-2 size-2 border-t border-r border-amber-400/40 opacity-0 transition-opacity group-hover:opacity-100" />

          <div>
            <div className="flex items-center justify-between">
              <span className="grid size-9 place-items-center rounded-xl border border-amber-400/30 bg-amber-500/10 text-amber-300 text-base shadow-sm group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-[#080c14] transition-all">
                🏆
              </span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-amber-300">
                {award.year}
              </span>
            </div>
            <h4 className="mt-4 font-display text-sm sm:text-[15px] font-bold text-white transition-colors group-hover:text-amber-300 drop-shadow-sm">
              {award.name}
            </h4>
            <p className="mt-1.5 text-xs font-medium text-slate-100 drop-shadow-sm">{award.category}</p>
          </div>

          <div className="mt-4 h-0.5 w-full bg-white/10 transition-colors group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-transparent" />
        </AnimatedSection>
      ))}
    </div>
  );
}

import { awardsCertifications } from "@/data/content";
import { AnimatedSection } from "./AnimatedSection";

export function AwardsSection() {
  return (
    <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
      {awardsCertifications.map((award, i) => (
        <AnimatedSection
          key={award.name}
          delay={i * 70}
          className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-black/25 backdrop-blur-xl p-4 sm:p-5 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:bg-black/35 hover:shadow-[0_12px_28px_rgba(212,175,55,0.15)]"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="grid size-9 place-items-center rounded-lg border border-amber-400/30 bg-amber-500/10 text-amber-300 text-base shadow-sm group-hover:scale-105 transition-transform">
                🏆
              </span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-amber-400">
                {award.year}
              </span>
            </div>
            <h4 className="mt-4 font-display text-sm sm:text-[15px] font-semibold text-white transition-colors group-hover:text-amber-300 drop-shadow-sm">
              {award.name}
            </h4>
            <p className="mt-1.5 text-xs font-normal text-slate-300">{award.category}</p>
          </div>

          <div className="mt-4 h-0.5 w-full bg-white/10 transition-colors group-hover:bg-amber-400/50" />
        </AnimatedSection>
      ))}
    </div>
  );
}

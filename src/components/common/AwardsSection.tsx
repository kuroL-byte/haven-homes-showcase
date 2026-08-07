import { awardsCertifications } from "@/data/content";
import { AnimatedSection } from "./AnimatedSection";

export function AwardsSection() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
      {awardsCertifications.map((award, i) => (
        <AnimatedSection
          key={award.name}
          delay={i * 80}
          className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-gold hover:shadow-xl"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="grid size-10 place-items-center rounded-xl bg-navy/5 text-gold text-lg transition-colors group-hover:bg-navy group-hover:text-gold">
                🏆
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                {award.year}
              </span>
            </div>
            <h4 className="mt-5 font-display text-lg font-bold text-navy transition-colors group-hover:text-gold">
              {award.name}
            </h4>
            <p className="mt-2 text-xs font-light text-slate-500">{award.category}</p>
          </div>

          <div className="mt-6 h-0.5 w-full bg-slate-100 transition-colors group-hover:bg-gold/40" />
        </AnimatedSection>
      ))}
    </div>
  );
}

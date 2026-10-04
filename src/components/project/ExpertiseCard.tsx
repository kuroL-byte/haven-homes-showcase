import { AnimatedSection } from "../common/AnimatedSection";

export interface ExpertiseItem {
  id: string;
  title: string;
  icon: string;
  body: string;
}

export function ExpertiseCard({ item, index }: { item: ExpertiseItem; index: number }) {
  return (
    <AnimatedSection
      delay={index * 80}
      className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-black/25 backdrop-blur-xl p-5 sm:p-6 shadow-xl transition-all duration-400 hover:-translate-y-1 hover:border-amber-400/50 hover:bg-black/35 hover:shadow-[0_16px_36px_rgba(0,0,0,0.6),0_0_20px_rgba(212,175,55,0.12)]"
    >
      <div>
        <div className="flex items-center justify-between">
          <span className="grid size-11 sm:size-12 place-items-center rounded-xl border border-amber-400/30 bg-amber-500/10 text-xl transition-transform duration-300 group-hover:scale-105 group-hover:bg-amber-400 group-hover:text-[#080c14] shadow-sm">
            {item.icon}
          </span>
          <span className="font-display text-xl sm:text-2xl font-bold text-slate-500/80 transition-colors group-hover:text-amber-400">
            0{index + 1}
          </span>
        </div>

        <h3 className="mt-5 sm:mt-6 font-display text-base sm:text-lg font-semibold text-white transition-colors group-hover:text-amber-300 drop-shadow-sm">
          {item.title}
        </h3>

        <p className="mt-2.5 text-xs sm:text-[13px] font-normal leading-relaxed text-slate-300">
          {item.body}
        </p>
      </div>

      <div className="mt-5 sm:mt-6 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-amber-400 transition-all group-hover:text-amber-300">
        <span>Explore Solutions</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </div>
    </AnimatedSection>
  );
}

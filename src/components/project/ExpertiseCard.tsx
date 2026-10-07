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
      className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-black/20 backdrop-blur-[2px] p-5 sm:p-6 shadow-xl transition-all duration-400 hover:-translate-y-1.5 hover:border-amber-400/60 hover:bg-black/35 hover:shadow-[0_16px_36px_rgba(212,175,55,0.15)]"
    >
      {/* Subtle Architectural Corner Accents on Hover */}
      <div className="pointer-events-none absolute top-2 left-2 size-2.5 border-t-2 border-l-2 border-amber-400/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute bottom-2 right-2 size-2.5 border-b-2 border-r-2 border-amber-400/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div>
        <div className="flex items-center justify-between">
          <span className="grid size-11 sm:size-12 place-items-center rounded-xl border border-amber-400/30 bg-amber-500/10 text-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-[#080c14] shadow-sm">
            {item.icon}
          </span>
          <span className="font-display text-xl sm:text-2xl font-extrabold text-amber-400/50 transition-colors group-hover:text-amber-300 drop-shadow">
            0{index + 1}
          </span>
        </div>

        <h3 className="mt-5 sm:mt-6 font-display text-base sm:text-lg font-bold text-white transition-colors group-hover:text-amber-300 drop-shadow-sm">
          {item.title}
        </h3>

        <p className="mt-2.5 text-xs sm:text-[13.5px] font-medium leading-relaxed text-slate-100 drop-shadow-sm">
          {item.body}
        </p>
      </div>

      <div className="mt-5 sm:mt-6 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-amber-300 transition-all group-hover:text-white border-t border-white/10 pt-3">
        <span>Explore Solutions</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </div>
    </AnimatedSection>
  );
}

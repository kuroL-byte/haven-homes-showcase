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
      className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-gold hover:shadow-2xl hover:shadow-gold/10"
    >
      <div>
        <div className="flex items-center justify-between">
          <span className="grid size-14 place-items-center rounded-2xl bg-navy/5 text-2xl transition-transform duration-500 group-hover:scale-110 group-hover:bg-navy group-hover:text-gold">
            {item.icon}
          </span>
          <span className="font-display text-2xl font-bold text-slate-200 transition-colors group-hover:text-gold/40">
            0{index + 1}
          </span>
        </div>

        <h3 className="mt-8 font-display text-2xl font-bold text-navy transition-colors group-hover:text-gold">
          {item.title}
        </h3>

        <p className="mt-4 text-sm font-light leading-relaxed text-slate-600">{item.body}</p>
      </div>

      <div className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-navy opacity-80 transition-all group-hover:opacity-100 group-hover:text-gold">
        <span>Explore Solutions</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </div>
    </AnimatedSection>
  );
}

import { AnimatedSection } from "./AnimatedSection";
import { Container } from "./Container";

export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  image?: string;
  video?: string;
}) {
  return (
    <section className="relative flex min-h-[220px] sm:min-h-[28vh] items-end overflow-hidden pb-6 pt-24 sm:pb-8 sm:pt-28 text-white bg-transparent">
      <Container className="relative z-10">
        <AnimatedSection className="max-w-3xl relative">
          {/* Subtle Architectural Corner Markers */}
          <div className="pointer-events-none absolute -top-2 -left-2 size-3.5 border-t-2 border-l-2 border-amber-400/60 rounded-tl" />
          <div className="pointer-events-none absolute -bottom-2 -left-2 size-3.5 border-b-2 border-l-2 border-amber-400/60 rounded-bl" />

          <div className="relative pl-4 sm:pl-6 border-l-2 border-amber-400/80 py-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-black/40 backdrop-blur-[2px] px-3.5 py-1 mb-2.5 shadow-lg">
              <span className="size-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-amber-300">
                {eyebrow}
              </span>
            </div>

            <h1 className="font-display font-extrabold text-white text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-tight">
              {title}
            </h1>

            {lede && (
              <div className="mt-3 max-w-2xl rounded-xl border border-white/15 bg-black/30 backdrop-blur-[2px] p-3 sm:p-3.5 shadow-md">
                <p className="text-xs sm:text-[13.5px] font-normal leading-relaxed text-slate-100">
                  {lede}
                </p>
              </div>
            )}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

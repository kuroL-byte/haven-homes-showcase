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
        <AnimatedSection className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-black/30 backdrop-blur-md px-3 py-0.5 mb-3 shadow-sm">
            <span className="size-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-300">
              {eyebrow}
            </span>
          </div>

          <h1 className="font-display font-bold text-white text-[clamp(1.6rem,2.8vw,2.35rem)] leading-[1.18] tracking-tight drop-shadow-sm">
            {title}
          </h1>

          {lede && (
            <p className="mt-2.5 max-w-xl text-xs sm:text-[13.5px] font-normal leading-relaxed text-slate-200/90 drop-shadow">
              {lede}
            </p>
          )}
        </AnimatedSection>
      </Container>
    </section>
  );
}

import { LazyImage } from "./LazyImage";
import { AnimatedSection } from "./AnimatedSection";
import { Container } from "./Container";
import { type as typeScale } from "@/theme";

/** Compact page hero used on interior pages. */
export function PageHero({
  eyebrow,
  title,
  lede,
  image,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden pb-16 pt-40 sm:min-h-[68vh] sm:pb-24">
      <LazyImage
        src={image}
        alt=""
        priority
        width={1920}
        height={1200}
        wrapperClassName="absolute inset-0"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/70 to-navy/40"
      />
      <Container className="relative z-10">
        <AnimatedSection className="max-w-3xl text-white">
          <p className="eyebrow mb-4 text-gold-light font-bold text-xs uppercase tracking-[0.25em]">{eyebrow}</p>
          <h1 className="font-display font-extrabold text-white text-[clamp(2.25rem,4.5vw,4rem)] leading-[1.08] tracking-[-0.02em]">{title}</h1>
          {lede && (
            <p className="mt-6 max-w-xl text-base font-normal leading-[1.8] text-slate-200">
              {lede}
            </p>
          )}
        </AnimatedSection>
      </Container>
    </section>
  );
}

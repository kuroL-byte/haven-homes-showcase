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
        className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/45 to-ink/25"
      />
      <Container className="relative">
        <AnimatedSection className="max-w-3xl text-ivory">
          <p className="eyebrow mb-5 text-bronze-soft">{eyebrow}</p>
          <h1 className={typeScale.h1}>{title}</h1>
          {lede && (
            <p className="mt-6 max-w-xl text-[15px] font-light leading-[1.85] text-ivory/75">
              {lede}
            </p>
          )}
        </AnimatedSection>
      </Container>
    </section>
  );
}

import { useEffect, useRef } from "react";
import { LazyImage } from "./LazyImage";
import { AnimatedSection } from "./AnimatedSection";
import { Container } from "./Container";

/** Compact page hero used on interior pages with optional background video. */
export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  video = "/sample.mp4",
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  image: string;
  video?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [video]);

  return (
    <section className="relative flex min-h-[420px] sm:min-h-[62vh] items-end overflow-hidden pb-12 pt-32 sm:pb-20 sm:pt-40 bg-navy text-white border-b border-gold/20">
      {/* Background Poster Image */}
      <LazyImage
        src={image}
        alt=""
        priority
        width={1920}
        height={1200}
        wrapperClassName="absolute inset-0 z-0"
      />

      {/* Video Background Layer */}
      {video && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 z-0 h-full w-full object-cover opacity-85"
        >
          <source src={video} type="video/mp4" />
        </video>
      )}

      {/* Subtle Gradient Overlay for Text Contrast */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 bg-gradient-to-t from-navy/95 via-navy/50 to-transparent pointer-events-none"
      />

      <Container className="relative z-10">
        <AnimatedSection className="max-w-3xl text-white">
          <p className="eyebrow mb-4 text-gold font-bold text-xs uppercase tracking-[0.25em]">
            {eyebrow}
          </p>
          <h1 className="font-display font-extrabold text-white text-[clamp(2.25rem,4.5vw,4rem)] leading-[1.08] tracking-[-0.02em]">
            {title}
          </h1>
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

import { useRef, useState } from "react";
import { images } from "@/data/content";
import { type as typeScale } from "@/theme";
import { AnimatedSection } from "./AnimatedSection";
import { Container } from "./Container";
import { ButtonLink } from "./Button";
import { Hero3DCanvas } from "./Hero3DCanvas";

export function ArchitecturalHero() {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden bg-navy text-white">
      {/* 1. Full-Bleed 3D Looping Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        poster={images.hero}
        className="absolute inset-0 h-full w-full object-cover opacity-50 scale-105 transition-opacity duration-1000 z-0 pointer-events-none"
      >
        <source
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
          type="video/mp4"
        />
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-modern-city-skyscrapers-and-buildings-41547-large.mp4"
          type="video/mp4"
        />
      </video>

      {/* 2. Interactive WebGL 3D Canvas Particles & Lighting Layer */}
      <Hero3DCanvas />

      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 bg-blueprint opacity-40 z-0 pointer-events-none" />

      {/* Dark Navy Gradient Overlay for High Text Legibility */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/35 z-0 pointer-events-none"
      />

      {/* Ambient Gold Floating Glow Orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <div className="absolute left-[8%] top-[18%] size-40 animate-[spin_45s_linear_infinite] rounded-3xl border border-gold/20 bg-gold/5 backdrop-blur-[2px]" />
        <div className="absolute right-[12%] bottom-[25%] size-80 rounded-full bg-gold/10 blur-[120px]" />
      </div>

      {/* Discrete Video Controls (Bottom Right) */}
      <div className="absolute bottom-8 right-8 z-20 hidden sm:flex items-center gap-2 rounded-full border border-gold/30 bg-navy/80 px-3 py-1.5 backdrop-blur-md text-xs font-medium text-slate-200 shadow-lg">
        <span className="size-2 rounded-full bg-gold animate-pulse" />
        <span>3D Video Reel</span>
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className="ml-2 text-gold hover:text-white transition-colors cursor-pointer"
        >
          {isPlaying ? "⏸" : "▶"}
        </button>
        <button
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className="ml-1 text-gold hover:text-white transition-colors cursor-pointer"
        >
          {isMuted ? "🔇" : "🔊"}
        </button>
      </div>

      {/* Hero Core Content */}
      <Container className="relative z-10 pt-36 pb-32">
        <AnimatedSection className="max-w-4xl text-left">
          {/* RERA & ISO Credentials Pill */}
          <div className="inline-flex flex-wrap items-center gap-3 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 backdrop-blur-md">
            <span className="size-2 rounded-full bg-gold animate-ping" />
            <span className="eyebrow text-gold-light tracking-[0.22em] text-[11px] font-bold">
              ISO 9001:2015 Certified · MahaRERA P52100098765
            </span>
          </div>

          <h1
            className={`${typeScale.hero} mt-8 font-extrabold text-white text-balance leading-[1.04]`}
          >
            Building Tomorrow's <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-amber-200">
              Landmarks Today.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg font-light leading-[1.8] text-slate-300">
            Crafting premium residential developments, corporate towers, and turnkey infrastructure
            with innovation, quality, and trust across Maharashtra.
          </p>

          {/* Action Buttons */}
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <ButtonLink
              to="/projects"
              variant="solid"
              size="lg"
              className="rounded-2xl bg-gold text-navy font-bold shadow-[0_10px_30px_-5px_rgba(200,169,106,0.4)] hover:bg-gold-light hover:scale-105 transition-all"
            >
              Explore Portfolio
            </ButtonLink>
            <ButtonLink
              to="/contact"
              variant="light"
              size="lg"
              className="rounded-2xl border-white/30 text-white hover:border-gold hover:bg-gold/10 transition-all"
            >
              Book Private Viewing →
            </ButtonLink>
          </div>

          {/* Key Metric Highlights Row */}
          <div className="mt-14 grid grid-cols-3 gap-6 border-t border-white/15 pt-6 max-w-xl text-left">
            <div>
              <p className="font-display text-2xl font-bold text-gold">25+</p>
              <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-300 mt-0.5">
                Years Experience
              </p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-white">150+</p>
              <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-300 mt-0.5">
                Delivered Projects
              </p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-gold">100%</p>
              <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-300 mt-0.5">
                On-Time Handover
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Container>

      {/* Subtle Animated Skyline Silhouette at Bottom */}
      <div className="absolute bottom-0 inset-x-0 h-24 overflow-hidden pointer-events-none opacity-25 z-10">
        <svg
          className="w-full h-full text-gold fill-current"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0 120 V80 H40 V60 H70 V80 H110 V30 H150 V80 H200 V40 H240 V80 H280 V10 H330 V80 H380 V50 H420 V80 H480 V20 H540 V80 H600 V45 H650 V80 H710 V15 H770 V80 H830 V35 H880 V80 H940 V25 H1000 V80 H1060 V55 H1120 V80 H1200 V120 Z" />
        </svg>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about-section"
        aria-label="Scroll down to About Parjane Buildcon"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold/70 transition-all hover:text-gold hover:translate-y-1 z-20"
      >
        <span className="eyebrow text-[9px] font-bold">Scroll</span>
        <span className="h-10 w-px animate-pulse bg-gold/50" />
      </a>
    </section>
  );
}

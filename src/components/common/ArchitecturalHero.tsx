import { Container } from "./Container";
import { AnimatedSection } from "./AnimatedSection";
import { ButtonLink } from "./Button";
import { Link } from "@tanstack/react-router";

export function ArchitecturalHero() {
  return (
    <section className="relative flex min-h-[92dvh] sm:min-h-[95dvh] w-full flex-col justify-between overflow-hidden pt-28 pb-6 sm:pt-36 sm:pb-10 bg-transparent">
      {/* ── Hero Main Content Grid ─────────────────────────────────── */}
      <Container className="relative z-10 my-auto">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
          {/* Left Column: Architectural Editorial Headline & Description */}
          <AnimatedSection className="relative">
            {/* Subtle Architectural Corner Markers */}
            <div className="pointer-events-none absolute -top-3 -left-3 size-4 border-t-2 border-l-2 border-amber-400/60 rounded-tl" />
            <div className="pointer-events-none absolute -bottom-3 -left-3 size-4 border-b-2 border-l-2 border-amber-400/60 rounded-bl" />

            <div className="relative pl-4 sm:pl-6 border-l-2 border-amber-400/80 py-2">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-black/40 backdrop-blur-[2px] px-3.5 py-1 shadow-lg">
                <span className="size-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-amber-300">
                  Parjane Buildcon · Engineering Tomorrow
                </span>
              </div>

              {/* Main Headline — Cinematic Luxury Typography */}
              <h1 className="mt-4 font-display text-[clamp(2.2rem,4.5vw,3.85rem)] font-extrabold leading-[1.1] tracking-tight text-white">
                Building Tomorrow’s <br />
                <span className="text-gradient-gold drop-shadow-sm">
                  Landmarks Today.
                </span>
              </h1>

              {/* Lede text with sleek backdrop panel */}
              <div className="mt-4 max-w-xl rounded-xl border border-white/15 bg-black/30 backdrop-blur-[2px] p-3.5 sm:p-4 shadow-lg">
                <p className="text-xs sm:text-[14px] font-normal leading-relaxed text-slate-100">
                  Western India’s premier luxury developer. Over 25 years of earthquake-engineered 
                  sky residences, Grade-A commercial hubs, and sustainable infrastructure built with zero-compromise precision.
                </p>
              </div>

              {/* Action CTAs */}
              <div className="mt-6 flex flex-wrap items-center gap-3.5">
                <ButtonLink
                  to="/projects"
                  variant="solid"
                  size="md"
                  className="rounded-xl bg-gradient-to-r from-[#d4af37] via-[#fce79a] to-[#c59b27] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#080c14] shadow-[0_4px_20px_rgba(212,175,55,0.35)] transition-all hover:scale-[1.03] hover:shadow-[0_6px_25px_rgba(212,175,55,0.5)]"
                >
                  Explore Portfolio →
                </ButtonLink>

                <ButtonLink
                  to="/contact"
                  variant="outline"
                  size="md"
                  className="rounded-xl border border-white/25 bg-black/30 backdrop-blur-[2px] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:border-amber-400 hover:bg-amber-400/20 hover:text-amber-300 hover:scale-[1.02]"
                >
                  Schedule Private Viewing
                </ButtonLink>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column: Floating Flagship Architectural Spotlight Card */}
          <AnimatedSection delay={150} className="hidden lg:block">
            <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-black/35 backdrop-blur-[2px] p-5 shadow-2xl transition-all duration-400 hover:border-amber-400/50 hover:bg-black/45 hover:-translate-y-1">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 text-xs font-bold">✦</span>
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-amber-300">
                    Flagship Development
                  </span>
                </div>
                <span className="rounded-full border border-emerald-400/40 bg-emerald-500/20 px-2 py-0.5 text-[9px] uppercase font-bold text-emerald-300">
                  Active Site
                </span>
              </div>

              <div className="mt-3.5 space-y-1">
                <h3 className="font-display text-lg font-bold text-white group-hover:text-amber-300 transition-colors drop-shadow-sm">
                  The Sovereign Horizon
                </h3>
                <p className="text-xs text-slate-100 font-medium flex items-center gap-1.5">
                  <span>📍</span> FC Road, Pune · Luxury Sky Mansions
                </p>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2.5 rounded-xl border border-white/10 bg-white/5 p-3 text-xs">
                <div>
                  <span className="block text-[9px] uppercase tracking-wider text-slate-200 font-semibold">Configuration</span>
                  <span className="font-display font-bold text-white text-xs">4 &amp; 5 BHK Duplex</span>
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-wider text-slate-200 font-semibold">MahaRERA Status</span>
                  <span className="font-display font-bold text-amber-300 text-xs">P52100078901</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between pt-1">
                <Link
                  to="/projects/$slug"
                  params={{ slug: "the-sovereign-horizon" }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-300 hover:text-white transition-colors cursor-pointer"
                >
                  <span>View Project Dossier</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <span className="text-[10px] font-semibold text-slate-200">Handover Q4 2026</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>

      {/* ── Hero Bottom Floating Metric Capsules ───────────────────── */}
      <Container className="relative z-10 mt-8 sm:mt-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Floating Stat Capsules */}
          <div className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:gap-3 lg:gap-4">
            <div className="rounded-xl border border-white/15 border-t-2 border-t-amber-400 bg-black/35 backdrop-blur-[2px] px-3.5 py-2.5 shadow-xl transition-transform hover:-translate-y-1">
              <p className="font-display text-base sm:text-lg font-bold text-amber-300 drop-shadow">25+ Years</p>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-white font-semibold drop-shadow-sm">Engineering Legacy</p>
            </div>
            <div className="rounded-xl border border-white/15 border-t-2 border-t-amber-400 bg-black/35 backdrop-blur-[2px] px-3.5 py-2.5 shadow-xl transition-transform hover:-translate-y-1">
              <p className="font-display text-base sm:text-lg font-bold text-amber-300 drop-shadow">150+ Landmarks</p>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-white font-semibold drop-shadow-sm">Handed Over</p>
            </div>
            <div className="rounded-xl border border-white/15 border-t-2 border-t-amber-400 bg-black/35 backdrop-blur-[2px] px-3.5 py-2.5 shadow-xl transition-transform hover:-translate-y-1">
              <p className="font-display text-base sm:text-lg font-bold text-amber-300 drop-shadow">100% On-Time</p>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-white font-semibold drop-shadow-sm">MahaRERA Record</p>
            </div>
            <div className="hidden lg:block rounded-xl border border-white/15 border-t-2 border-t-amber-400 bg-black/35 backdrop-blur-[2px] px-3.5 py-2.5 shadow-xl transition-transform hover:-translate-y-1">
              <p className="font-display text-base sm:text-lg font-bold text-amber-300 drop-shadow">ISO 9001:2015</p>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-white font-semibold drop-shadow-sm">Certified Quality</p>
            </div>
          </div>

          {/* Discover More Pill */}
          <a
            href="#about-section"
            className="self-start sm:self-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/35 backdrop-blur-[2px] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-all hover:border-amber-400 hover:text-amber-300 hover:bg-black/50 cursor-pointer shadow-lg"
          >
            <span>Discover More</span>
            <span className="text-amber-400 font-bold animate-bounce">↓</span>
          </a>
        </div>
      </Container>
    </section>
  );
}

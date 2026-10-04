import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Container } from "./Container";
import { AnimatedSection } from "./AnimatedSection";
import { ButtonLink } from "./Button";

export function ArchitecturalHero() {
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedLocation, setSelectedLocation] = useState<string>("All");

  return (
    <section className="relative flex min-h-[85dvh] w-full flex-col justify-between overflow-hidden pt-24 pb-6 sm:pt-28 sm:pb-8 bg-transparent">
      {/* ── Hero Foreground Content ─────────────────────────────── */}
      <Container className="relative z-10 my-auto">
        <AnimatedSection className="max-w-3xl">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-black/30 backdrop-blur-md px-3 py-1 shadow-sm">
            <span className="size-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-300">
              Parjane Buildcon · Engineering Tomorrow
            </span>
          </div>

          {/* Main Headline — Minimal, Classy, High-Attraction */}
          <h1 className="mt-4 font-display text-[clamp(2rem,3.8vw,3.25rem)] font-bold leading-[1.12] tracking-tight text-white drop-shadow-md">
            Building Tomorrow’s <br />
            <span className="text-gradient-gold">
              Landmarks Today.
            </span>
          </h1>

          {/* Lede text */}
          <p className="mt-4 max-w-xl text-xs sm:text-[13.5px] font-normal leading-relaxed text-slate-200/90 drop-shadow">
            Western India’s premier luxury real estate developer. Over 25 years of earthquake-engineered 
            sky residences, Grade-A commercial parks, and turnkey infrastructure crafted with zero-compromise precision.
          </p>

          {/* Action CTAs */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <ButtonLink
              to="/projects"
              variant="solid"
              size="md"
              className="rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c59b27] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#080c14] shadow-md transition-all hover:scale-[1.02]"
            >
              Explore Portfolio
            </ButtonLink>

            <ButtonLink
              to="/contact"
              variant="outline"
              size="md"
              className="rounded-xl border border-white/20 bg-black/30 backdrop-blur-md px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-all hover:border-amber-400 hover:bg-amber-400/10"
            >
              Schedule Private Viewing
            </ButtonLink>
          </div>

          {/* ── Interactive Quick Landmark Finder ────────────────────── */}
          <div className="mt-8 max-w-2xl rounded-2xl border border-white/10 bg-black/25 backdrop-blur-xl p-3 sm:p-4 shadow-xl">
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-3 sm:items-end">
              <div>
                <label className="block text-[9px] font-bold uppercase tracking-[0.18em] text-amber-400 mb-1">
                  Development Typology
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-xs font-medium text-white outline-none focus:border-amber-400 cursor-pointer"
                >
                  <option value="All">All Typologies</option>
                  <option value="Residential">Luxury Sky Residences</option>
                  <option value="Commercial">Grade-A Corporate Towers</option>
                </select>
              </div>

              <div>
                <label className="block text-[9px] font-bold uppercase tracking-[0.18em] text-amber-400 mb-1">
                  Prime Location
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-xs font-medium text-white outline-none focus:border-amber-400 cursor-pointer"
                >
                  <option value="All">All Locations</option>
                  <option value="Pune">Pune (FC Road / Baner)</option>
                  <option value="Mumbai">Mumbai (BKC / Worli)</option>
                </select>
              </div>

              <div>
                <Link
                  to="/projects"
                  search={{ type: selectedType !== "All" ? selectedType : undefined }}
                  className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#c59b27] py-2 px-3.5 text-xs font-bold uppercase tracking-wider text-[#080c14] shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <span>Search Landmarks</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>

      {/* ── Hero Bottom Key Metrics Strip ───────────────────────── */}
      <Container className="relative z-10 mt-6 sm:mt-8">
        <div className="flex flex-col gap-4 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between text-white">
          <div className="grid grid-cols-2 gap-3 sm:flex sm:gap-6 lg:gap-8">
            <div className="border-l-2 border-amber-400/50 pl-2.5">
              <p className="font-display text-base sm:text-lg font-bold text-amber-300">25+ Years</p>
              <p className="text-[9px] uppercase tracking-wider text-slate-300">Engineering Legacy</p>
            </div>
            <div className="border-l-2 border-amber-400/50 pl-2.5">
              <p className="font-display text-base sm:text-lg font-bold text-amber-300">150+ Landmarks</p>
              <p className="text-[9px] uppercase tracking-wider text-slate-300">Handed Over</p>
            </div>
            <div className="hidden md:block border-l-2 border-amber-400/50 pl-2.5">
              <p className="font-display text-base sm:text-lg font-bold text-amber-300">100% On-Time</p>
              <p className="text-[9px] uppercase tracking-wider text-slate-300">MahaRERA Record</p>
            </div>
            <div className="hidden lg:block border-l-2 border-amber-400/50 pl-2.5">
              <p className="font-display text-base sm:text-lg font-bold text-amber-300">ISO 9001:2015</p>
              <p className="text-[9px] uppercase tracking-wider text-slate-300">Certified Quality</p>
            </div>
          </div>

          <a
            href="#about-section"
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300 transition-colors hover:text-amber-400"
          >
            <span>Discover More</span>
            <span className="text-amber-400">↓</span>
          </a>
        </div>
      </Container>
    </section>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  stats,
  projects,
  testimonials,
  expertiseServices,
  whyChooseUsPillars,
  values,
} from "@/data/content";
import { brand, layout, type as typeScale } from "@/theme";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Container, Hairline, SectionWrapper } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink, Button } from "@/components/Button";
import { StatCounter } from "@/components/StatCounter";
import { ProjectCard } from "@/components/ProjectCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Carousel } from "@/components/Carousel";
import { ArchitecturalHero } from "@/components/common/ArchitecturalHero";
import { ProcessTimeline } from "@/components/common/ProcessTimeline";
import { AwardsSection } from "@/components/common/AwardsSection";
import { ExpertiseCard } from "@/components/project/ExpertiseCard";
import { LoanCalculator } from "@/components/tools/LoanCalculatorModal";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Parjane Buildcon — Building Tomorrow's Landmarks Today" },
      {
        name: "description",
        content:
          "Parjane Buildcon: Luxury real estate developer and construction pioneer across Maharashtra. Over 25 years of engineering excellence, quality, and trust.",
      },
      { property: "og:title", content: "Parjane Buildcon — Building Tomorrow's Landmarks Today" },
      {
        property: "og:description",
        content:
          "High-rise residential towers, Grade-A commercial parks, turnkey infrastructure, and urban redevelopment.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const [projectCategory, setProjectCategory] = useState<string>("All");
  const [vipName, setVipName] = useState("");
  const [vipPhone, setVipPhone] = useState("");
  const [vipProject, setVipProject] = useState(projects[0]?.name ?? "");

  const filteredProjects = useMemo(() => {
    if (projectCategory === "All") return projects.slice(0, 4);
    if (projectCategory === "Residential") return projects.filter((p) => p.type === "Residential").slice(0, 4);
    if (projectCategory === "Commercial") return projects.filter((p) => p.type === "Commercial").slice(0, 4);
    if (projectCategory === "Ongoing") return projects.filter((p) => p.status === "Ongoing").slice(0, 4);
    return projects.slice(0, 4);
  }, [projectCategory]);

  const handleVipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Private Tour Confirmed! Our VIP Relations team will contact you within 60 minutes.");
    setVipName("");
    setVipPhone("");
  };

  return (
    <>
      {/* ── 1. CINEMATIC HERO SECTION ─────────────────────────────── */}
      <ArchitecturalHero />

      {/* ── 2. ABOUT PARJANE BUILDCON ─────────────────────────────── */}
      <SectionWrapper id="about-section">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:items-center">
          <AnimatedSection>
            <p className="eyebrow text-amber-400 mb-2.5 font-bold">Heritage &amp; Engineering Trust</p>
            <h2 className="font-display text-[clamp(1.5rem,2.6vw,2.15rem)] font-semibold leading-tight text-white">
              25 Years of Engineering Excellence &amp; Unshakeable Trust.
            </h2>
            <p className="mt-4 text-xs sm:text-sm font-normal leading-relaxed text-slate-300">
              Founded over two decades ago, {brand.name} has grown into Western India's most
              respected construction and real estate developer. We combine architectural
              innovation, earthquake-resistant structural engineering, and 100% transparent execution across every residential
              sky landmark and corporate tower we build.
            </p>
            <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-slate-300">
              Our in-house team of structural engineers, architects, and project managers ensures
              that design vision translates into certified, long-lasting construction without
              compromise.
            </p>

            {/* Quick Metrics Callout */}
            <div className="mt-6 grid grid-cols-2 gap-4 border-y border-white/10 py-4">
              <div>
                <p className="font-display text-xl sm:text-2xl font-bold text-amber-300">₹2,400+ Cr</p>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Delivered Portfolio</p>
              </div>
              <div>
                <p className="font-display text-xl sm:text-2xl font-bold text-amber-300">99.8%</p>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Safety &amp; Compliance</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink
                to="/about"
                variant="solid"
                size="sm"
                className="rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c59b27] text-[#080c14] font-bold text-xs uppercase tracking-wider shadow-md"
              >
                Read Our Story &amp; Leadership
              </ButtonLink>
              <ButtonLink
                to="/contact"
                variant="outline"
                size="sm"
                className="rounded-xl border border-white/15 text-white hover:border-amber-400 text-xs uppercase tracking-wider"
              >
                Connect With Engineers
              </ButtonLink>
            </div>
          </AnimatedSection>

          {/* Mission, Vision & Values Cards */}
          <AnimatedSection delay={140} className="space-y-3.5">
            <div className="rounded-2xl border border-white/10 bg-black/25 backdrop-blur-xl p-5 sm:p-6 shadow-xl transition-all duration-300 hover:border-amber-400/50 hover:bg-black/35">
              <div className="flex items-center justify-between">
                <span className="eyebrow text-amber-400 font-bold text-[10px]">Our Mission</span>
                <span className="text-base">🏗️</span>
              </div>
              <h3 className="mt-1.5 font-display text-base sm:text-lg font-semibold text-white drop-shadow-sm">
                Crafting Quality Landmarks
              </h3>
              <p className="mt-1.5 text-xs font-normal text-slate-300 leading-relaxed">
                To deliver world-class infrastructure and luxury residences through structural
                innovation, zero-defect execution, and transparent MahaRERA buyer practices.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/25 backdrop-blur-xl p-5 sm:p-6 shadow-xl transition-all duration-300 hover:border-amber-400/50 hover:bg-black/35">
              <div className="flex items-center justify-between">
                <span className="eyebrow text-amber-400 font-bold text-[10px]">Our Vision</span>
                <span className="text-base">✨</span>
              </div>
              <h3 className="mt-1.5 font-display text-base sm:text-lg font-semibold text-white drop-shadow-sm">
                Defining Future Skylines
              </h3>
              <p className="mt-1.5 text-xs font-normal text-slate-300 leading-relaxed">
                To remain Western India's benchmark developer, recognized for sustainable green
                construction, architectural timelessness, and exceptional customer delight.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-500/25 bg-black/25 backdrop-blur-xl p-5 sm:p-6 text-white shadow-xl">
              <span className="eyebrow text-amber-400 font-bold text-[10px]">Foundational Values</span>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-medium">
                {values.map((v) => (
                  <div key={v.title} className="flex items-center gap-2">
                    <span className="text-amber-400">✦</span>
                    <span className="text-slate-200">{v.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      <Container>
        <Hairline />
      </Container>

      {/* ── 3. OUR EXPERTISE ───────────────────────────────────────── */}
      <SectionWrapper>
        <SectionHeading
          eyebrow="Engineering Capabilities"
          title="Construction & Development Expertise"
          lede="From ultra-luxury high-rise sky residences to turnkey commercial headquarters, our engineering capabilities span 6 core verticals."
        />

        <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {expertiseServices.map((service, i) => (
            <ExpertiseCard key={service.id} item={service} index={i} />
          ))}
        </div>
      </SectionWrapper>

      <Container>
        <Hairline />
      </Container>

      {/* ── 4. FEATURED PROJECTS ──────────────────────────────────── */}
      <SectionWrapper>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Signature Portfolio"
            title="Featured Landmarks & Developments"
            lede="Explore our current active construction sites and recently handed over luxury residences."
          />

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {["All", "Residential", "Commercial", "Ongoing"].map((cat) => (
              <button
                key={cat}
                onClick={() => setProjectCategory(cat)}
                className={`rounded-xl border px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  projectCategory === cat
                    ? "border-amber-400 bg-amber-400 text-[#080c14] shadow-sm"
                    : "border-white/10 bg-black/25 backdrop-blur-md text-slate-300 hover:border-amber-400/50 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 sm:mt-10 grid gap-6 sm:gap-8 md:grid-cols-2">
          {filteredProjects.map((p, i) => (
            <AnimatedSection key={p.slug} delay={(i % 2) * 100} variant="scale">
              <ProjectCard project={p} index={i} />
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-8 text-center">
          <ButtonLink
            to="/projects"
            variant="solid"
            size="sm"
            className="rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c59b27] text-[#080c14] font-bold text-xs uppercase tracking-widest shadow-md hover:scale-105"
          >
            Explore Complete 150+ Portfolio →
          </ButtonLink>
        </div>
      </SectionWrapper>

      <Container>
        <Hairline />
      </Container>

      {/* ── 5. WHY CHOOSE US ───────────────────────────────────────── */}
      <SectionWrapper>
        <SectionHeading
          eyebrow="The Parjane Advantage"
          title="Why Leading Buyers & Corporations Choose Us"
          lede="Every Parjane development is built on six foundational engineering promises."
        />

        <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUsPillars.map((pillar, i) => (
            <AnimatedSection
              key={pillar.title}
              delay={i * 80}
              className="group rounded-2xl border border-white/10 bg-black/25 backdrop-blur-xl p-5 sm:p-6 shadow-xl transition-all duration-400 hover:-translate-y-1 hover:border-amber-400/50 hover:bg-black/35 hover:shadow-[0_16px_36px_rgba(212,175,55,0.15)]"
            >
              <span className="grid size-11 place-items-center rounded-xl border border-amber-400/30 bg-amber-500/10 text-xl transition-transform duration-300 group-hover:scale-105 group-hover:bg-amber-400 group-hover:text-[#080c14] shadow-sm">
                {pillar.icon}
              </span>
              <h3 className="mt-4 font-display text-base sm:text-lg font-semibold text-white group-hover:text-amber-300 transition-colors drop-shadow-sm">
                {pillar.title}
              </h3>
              <p className="mt-2 text-xs sm:text-[13px] font-normal leading-relaxed text-slate-300">
                {pillar.body}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* ── 6. COMPANY NUMBERS (ANIMATED STATS COUNTER) ──────────── */}
      <SectionWrapper tone="dark" tight className="relative overflow-hidden border-y border-amber-500/20 bg-black/35 backdrop-blur-md py-6 sm:py-8">
        <div className="absolute inset-0 bg-blueprint opacity-10 pointer-events-none" />

        <div className="relative z-10 grid gap-6 sm:gap-8 grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 100}>
              <StatCounter value={s.value} suffix={s.suffix} label={s.label} />
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* ── 7. CONSTRUCTION PROCESS TIMELINE ──────────────────────── */}
      <SectionWrapper>
        <SectionHeading
          eyebrow="Engineering Rigor"
          title="Construction Process & Handover Lifecycle"
          lede="From initial land geotechnical validation to key handover, explore how we execute projects with precision."
        />

        <div className="mt-8 sm:mt-10">
          <ProcessTimeline />
        </div>
      </SectionWrapper>

      <Container>
        <Hairline />
      </Container>

      {/* ── 8. LIVE INTERACTIVE MORTGAGE & EMI CALCULATOR ────────── */}
      <SectionWrapper>
        <LoanCalculator />
      </SectionWrapper>

      <Container>
        <Hairline />
      </Container>

      {/* ── 9. TESTIMONIALS ───────────────────────────────────────── */}
      <SectionWrapper>
        <SectionHeading
          eyebrow="Resident Voices"
          title="What Our Clients & Owners Say"
          lede="Genuine feedback from residents and commercial partners across our landmark portfolio."
        />
        <div className="mt-8 sm:mt-10">
          <Carousel
            perView={2}
            controlsTone="light"
            slides={testimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} className="h-full" />
            ))}
          />
        </div>
      </SectionWrapper>

      <Container>
        <Hairline />
      </Container>

      {/* ── 10. AWARDS & CERTIFICATIONS ────────────────────────────── */}
      <SectionWrapper>
        <SectionHeading
          eyebrow="Accreditation"
          title="Awards & Certifications"
          lede="Certified by premier regulatory and green building authorities for excellence in structural safety and quality."
        />

        <div className="mt-8 sm:mt-10">
          <AwardsSection />
        </div>
      </SectionWrapper>

      {/* ── 11. VIP PRIVATE SITE VISIT CTA BANNER ──────────────────── */}
      <section className="relative overflow-hidden bg-black/35 backdrop-blur-md py-12 sm:py-16 text-white border-t border-amber-500/20">
        <div className="absolute top-0 right-1/4 size-96 rounded-full bg-amber-500/10 blur-[140px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <AnimatedSection>
              <span className="eyebrow text-amber-400 font-bold">Private Concierge</span>
              <h2 className="mt-3 font-display text-[clamp(1.6rem,2.8vw,2.25rem)] font-semibold leading-tight text-white">
                Experience Luxury In Person. <br />
                <span className="text-gradient-gold">Schedule a Private Tour.</span>
              </h2>
              <p className="mt-4 text-xs sm:text-sm font-normal text-slate-300 leading-relaxed">
                Step inside our completed show flats, inspect raw structural quality firsthand, and
                discuss customized payment schedules with our resident advisory board.
              </p>

              <div className="mt-6 flex flex-col gap-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>Chauffeured site visits available across Pune and Mumbai</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>Full architectural specification kits &amp; MahaRERA dossiers</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>Direct interaction with senior project structural engineers</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Quick VIP Form */}
            <AnimatedSection delay={120}>
              <div className="rounded-2xl border border-white/10 bg-black/25 backdrop-blur-xl p-5 sm:p-7 shadow-xl">
                <h3 className="font-display text-lg sm:text-xl font-semibold text-white drop-shadow-sm">
                  Book a Priority Private Appointment
                </h3>
                <p className="mt-1 text-xs text-slate-300">
                  Fill in your details below for expedited concierge scheduling.
                </p>

                <form onSubmit={handleVipSubmit} className="mt-4 space-y-3">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-amber-400 mb-1">
                      Your Full Name
                    </label>
                    <input
                      required
                      type="text"
                      value={vipName}
                      onChange={(e) => setVipName(e.target.value)}
                      placeholder="e.g. Rahul Deshmukh"
                      className="w-full rounded-xl border border-white/10 bg-black/25 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 outline-none focus:border-amber-400 focus:bg-black/40"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-amber-400 mb-1">
                      Phone Number (WhatsApp Active)
                    </label>
                    <input
                      required
                      type="tel"
                      value={vipPhone}
                      onChange={(e) => setVipPhone(e.target.value)}
                      placeholder="+91 98000 00000"
                      className="w-full rounded-xl border border-white/10 bg-black/25 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 outline-none focus:border-amber-400 focus:bg-black/40"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-amber-400 mb-1">
                      Preferred Landmark
                    </label>
                    <select
                      value={vipProject}
                      onChange={(e) => setVipProject(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-black/25 px-3.5 py-2.5 text-xs sm:text-sm text-white outline-none focus:border-amber-400 focus:bg-black/40 cursor-pointer"
                    >
                      {projects.map((p) => (
                        <option key={p.slug} value={p.name}>
                          {p.name} ({p.location})
                        </option>
                      ))}
                    </select>
                  </div>

                  <Button
                    type="submit"
                    variant="solid"
                    size="sm"
                    className="w-full rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c59b27] py-3 text-xs font-bold uppercase tracking-widest text-[#080c14] shadow-md hover:scale-[1.01] transition-all"
                  >
                    Confirm Private Site Tour
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>
    </>
  );
}

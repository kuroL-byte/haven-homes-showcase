import { createFileRoute, Link } from "@tanstack/react-router";
import {
  differentiators,
  stats,
  projects,
  testimonials,
  posts,
  expertiseServices,
  whyChooseUsPillars,
  values,
} from "@/data/content";
import { brand, layout, type as typeScale } from "@/theme";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Container, Hairline, SectionWrapper } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/Button";
import { StatCounter } from "@/components/StatCounter";
import { ProjectCard } from "@/components/ProjectCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { BlogCard } from "@/components/BlogCard";
import { Carousel } from "@/components/Carousel";
import { ArchitecturalHero } from "@/components/common/ArchitecturalHero";
import { ProcessTimeline } from "@/components/common/ProcessTimeline";
import { AwardsSection } from "@/components/common/AwardsSection";
import { ExpertiseCard } from "@/components/project/ExpertiseCard";

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
  return (
    <>
      {/* ── 1. HERO SECTION ───────────────────────────────────────── */}
      <ArchitecturalHero />

      {/* ── 2. ABOUT PARJANE BUILDCON ─────────────────────────────── */}
      <SectionWrapper id="about-section" className="bg-white">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20 lg:items-center">
          <AnimatedSection>
            <p className="eyebrow mb-4">About Parjane Buildcon</p>
            <h2 className={typeScale.h2}>
              25 Years of Engineering Excellence &amp; Unshakeable Trust.
            </h2>
            <p className="mt-6 text-base font-normal leading-[1.85] text-slate-700">
              Founded over two decades ago, {brand.name} has grown into one of Western India's most
              respected construction and real estate developers. We combine architectural
              innovation, structural integrity, and transparent execution across every residential
              landmark and commercial tower we build.
            </p>
            <p className="mt-4 text-base font-normal leading-[1.85] text-slate-700">
              Our in-house team of structural engineers, architects, and project leaders ensures
              that design vision translates into certified, long-lasting construction without
              compromise.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink
                to="/about"
                variant="outline"
                className="rounded-xl border-navy text-navy hover:bg-navy hover:text-white"
              >
                Read Our Story
              </ButtonLink>
            </div>
          </AnimatedSection>

          {/* Mission, Vision & Values Cards */}
          <AnimatedSection delay={140} className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <span className="eyebrow text-gold font-bold">Our Mission</span>
              <h3 className="mt-1 font-display text-xl font-bold text-navy">
                Crafting Quality Landmarks
              </h3>
              <p className="mt-2 text-xs font-normal text-slate-700">
                To deliver world-class infrastructure and luxury residences through engineering
                innovation, zero-defect execution, and transparent buyer practices.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <span className="eyebrow text-gold font-bold">Our Vision</span>
              <h3 className="mt-1 font-display text-xl font-bold text-navy">
                Defining Future Skylines
              </h3>
              <p className="mt-2 text-xs font-normal text-slate-700">
                To remain Western India's most trusted developer, recognized for sustainable green
                construction, architectural timelessness, and customer delight.
              </p>
            </div>

            <div className="rounded-3xl border border-gold/40 bg-navy p-6 text-white shadow-xl">
              <span className="eyebrow text-gold font-bold">Core Values</span>
              <div className="mt-3 grid grid-cols-2 gap-3 text-xs font-medium">
                {values.map((v) => (
                  <div key={v.title} className="flex items-center gap-2">
                    <span className="text-gold">✦</span>
                    <span>{v.title}</span>
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
      <SectionWrapper className="bg-slate-50">
        <SectionHeading
          eyebrow="Capabilities"
          title="Our Construction & Development Expertise"
          lede="From ultra-luxury high-rise residences to turnkey industrial infrastructure, our engineering capabilities span 6 core domains."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {expertiseServices.map((service, i) => (
            <ExpertiseCard key={service.id} item={service} index={i} />
          ))}
        </div>
      </SectionWrapper>

      {/* ── 4. FEATURED PROJECTS ──────────────────────────────────── */}
      <SectionWrapper className="bg-white">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Portfolio"
            title="Featured Landmarks & Developments"
            lede="Explore our current active construction sites and recently handed over luxury residences."
          />
          <AnimatedSection delay={100}>
            <Link
              to="/projects"
              className="link-underline text-xs uppercase tracking-[0.2em] font-semibold text-navy"
            >
              View All Projects →
            </Link>
          </AnimatedSection>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {projects.slice(0, 4).map((p, i) => (
            <AnimatedSection key={p.slug} delay={(i % 2) * 100} variant="scale">
              <ProjectCard project={p} index={i} />
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* ── 5. WHY CHOOSE US ───────────────────────────────────────── */}
      <SectionWrapper className="bg-slate-50">
        <SectionHeading
          eyebrow="The Parjane Advantage"
          title="Why Leading Buyers & Corporate Clients Choose Us"
          lede="Every Parjane development is built on six foundational promises."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUsPillars.map((pillar, i) => (
            <AnimatedSection
              key={pillar.title}
              delay={i * 80}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-gold hover:shadow-xl"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-navy/5 text-2xl transition-transform group-hover:scale-110 group-hover:bg-gold group-hover:text-navy">
                {pillar.icon}
              </span>
              <h3 className="mt-6 font-display text-xl font-bold text-navy group-hover:text-gold transition-colors">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm font-normal leading-relaxed text-slate-700">
                {pillar.body}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* ── 6. COMPANY NUMBERS (ANIMATED STATS COUNTER) ──────────── */}
      <SectionWrapper tone="dark" tight className="relative overflow-hidden">
        {/* Background blueprint pattern */}
        <div className="absolute inset-0 bg-blueprint opacity-10 pointer-events-none" />

        <div className="relative z-10 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 100}>
              <StatCounter value={s.value} suffix={s.suffix} label={s.label} />
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* ── 7. CONSTRUCTION PROCESS TIMELINE ──────────────────────── */}
      <SectionWrapper className="bg-white">
        <SectionHeading
          eyebrow="Methodology"
          title="Our Construction Process &amp; Handover Timeline"
          lede="From initial planning to key handover, explore how we execute projects with precision."
        />

        <div className="mt-16">
          <ProcessTimeline />
        </div>
      </SectionWrapper>

      {/* ── 8. TESTIMONIALS ───────────────────────────────────────── */}
      <SectionWrapper tone="dark">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients &amp; Owners Say"
          lede="Unedited words from residents and commercial partners across our portfolio."
        />
        <div className="mt-16">
          <Carousel
            perView={2}
            controlsTone="light"
            slides={testimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} className="h-full" />
            ))}
          />
        </div>
      </SectionWrapper>

      {/* ── 9. AWARDS & CERTIFICATIONS ────────────────────────────── */}
      <SectionWrapper className="bg-slate-50">
        <SectionHeading
          eyebrow="Recognition"
          title="Awards &amp; Certifications"
          lede="Certified by industry regulatory bodies for quality management, green construction, and engineering safety."
        />

        <div className="mt-12">
          <AwardsSection />
        </div>
      </SectionWrapper>

      {/* ── 10. CALL TO ACTION ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy py-24 text-white">
        {/* Background graphic glow */}
        <div className="absolute top-0 right-0 size-96 rounded-full bg-gold/10 blur-[120px]" />

        <Container className="relative z-10 text-center">
          <AnimatedSection className="mx-auto max-w-3xl">
            <span className="eyebrow text-gold font-bold">Start Your Journey</span>
            <h2 className="mt-4 font-display text-[clamp(2.25rem,4vw,3.75rem)] font-extrabold leading-tight text-white">
              Let's Build Something <br />
              <span className="text-gold">Extraordinary Together.</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg font-light text-slate-300">
              Schedule a private site visit with our senior engineering team or request our complete
              project specification kit.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <ButtonLink
                to="/contact"
                variant="solid"
                size="lg"
                className="rounded-2xl bg-gold text-navy font-bold hover:bg-gold-light hover:scale-105 transition-all shadow-xl"
              >
                Schedule Private Viewing
              </ButtonLink>
              <ButtonLink
                to="/projects"
                variant="light"
                size="lg"
                className="rounded-2xl border-white/30 text-white hover:border-gold hover:bg-white/10"
              >
                Explore Portfolio
              </ButtonLink>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* ── 11. FOOTER IS MOUNTED IN ROOT LAYOUT ─────────────────── */}
    </>
  );
}

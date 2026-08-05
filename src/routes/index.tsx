import { createFileRoute, Link } from "@tanstack/react-router";
import { images, differentiators, stats, projects, testimonials, posts } from "@/data/content";
import { brand, layout, type as typeScale } from "@/theme";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Container, Hairline, SectionWrapper } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/Button";
import { StatCounter } from "@/components/StatCounter";
import { LazyImage } from "@/components/LazyImage";
import { ProjectCard } from "@/components/ProjectCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { BlogCard } from "@/components/BlogCard";
import { Carousel } from "@/components/Carousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atelier Meridian — Architect-led Luxury Residences" },
      {
        name: "description",
        content:
          "An architect-led development practice creating a small number of considered residences and workplaces in Mumbai, Pune and Lonavala.",
      },
      { property: "og:title", content: "Atelier Meridian — Architect-led Luxury Residences" },
      {
        property: "og:description",
        content:
          "Full-floor residences, garden courts and Grade-A workplaces. Thirty-two years of considered architecture.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative flex min-h-svh items-center overflow-hidden">
        <LazyImage
          src={images.hero}
          alt="Meridian House at dusk, seen across its reflecting court"
          priority
          width={1920}
          height={1200}
          wrapperClassName="absolute inset-0"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/45" />

        <Container className="relative pt-32 pb-28">
          <AnimatedSection className="max-w-4xl text-ivory">
            <p className="eyebrow mb-8 text-bronze-soft">Est. 1994 · Mumbai</p>
            <h1 className={typeScale.hero}>
              Buildings that keep
              <br />
              their composure.
            </h1>
            <p className="mt-8 max-w-lg text-[15px] font-light leading-[1.9] text-ivory/75">
              We design and build a small number of residences each decade — full-floor homes,
              garden courts, and workplaces made from materials that improve with weather.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <ButtonLink to="/projects" variant="light" size="lg">
                View the portfolio
              </ButtonLink>
              <ButtonLink to="/contact" variant="ghost" size="lg" className="text-ivory/80 hover:text-ivory">
                Arrange a viewing →
              </ButtonLink>
            </div>
          </AnimatedSection>
        </Container>

        {/* Scroll indicator */}
        <a
          href="#intro"
          aria-label="Scroll to content"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-ivory/60 transition-colors hover:text-ivory sm:flex"
        >
          <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="block h-14 w-px animate-pulse bg-ivory/40" />
        </a>
      </section>

      {/* ── Intro / about teaser ─────────────────────────────── */}
      <SectionWrapper id="intro">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <AnimatedSection>
            <p className="eyebrow mb-6">Our legacy</p>
            <h2 className={typeScale.h2}>
              Thirty-two years in one
              <br className="hidden sm:block" /> discipline.
            </h2>
            <div className="mt-8 flex items-baseline gap-5">
              <span className="font-display text-7xl leading-none text-bronze">32</span>
              <span className="max-w-[12rem] text-[11px] uppercase leading-relaxed tracking-[0.22em] text-muted-foreground">
                Years designing and delivering under one roof
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={120}>
            <p className="text-[17px] font-light leading-[1.9]">
              {brand.name} began as a two-person studio in a Fort warehouse. We still draw every
              project ourselves, and we still build only what we have drawn.
            </p>
            <p className={`${typeScale.body} mt-6`}>
              That continuity is unusual in this industry, and it is the whole proposition. Design
              intent survives to the last handover because the people who set it are on site when
              the stone is cut. We take on fewer commissions than we could, and we keep an estate
              team on every building for a decade after the keys are handed over.
            </p>
            <ButtonLink to="/about" variant="outline" className="mt-10">
              Our story
            </ButtonLink>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      <Container>
        <Hairline />
      </Container>

      {/* ── Why choose us ─────────────────────────────────────── */}
      <SectionWrapper>
        <SectionHeading
          eyebrow="Why Meridian"
          title="Four things we refuse to compromise."
          lede="Every project is measured against these before it is measured against a budget."
        />
        <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item, i) => (
            <AnimatedSection
              key={item.title}
              delay={i * 90}
              className="group bg-background p-8 transition-colors duration-700 hover:bg-secondary lg:p-10"
            >
              <span className="font-display text-4xl text-bronze/40 transition-colors duration-700 group-hover:text-bronze">
                0{i + 1}
              </span>
              <h3 className="mt-8 font-display text-2xl">{item.title}</h3>
              <p className="mt-4 text-sm font-light leading-[1.85] text-muted-foreground">{item.body}</p>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Stats band (dark) ─────────────────────────────────── */}
      <SectionWrapper tone="dark" tight>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 100}>
              <StatCounter value={s.value} suffix={s.suffix} label={s.label} decimals={s.decimals ?? 0} />
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Featured projects ─────────────────────────────────── */}
      <SectionWrapper>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Featured residences" title="Currently in build and recently delivered." />
          <AnimatedSection delay={100}>
            <Link to="/projects" className="link-underline text-[11px] uppercase tracking-[0.24em]">
              All projects
            </Link>
          </AnimatedSection>
        </div>
        <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2">
          {projects.slice(0, 4).map((p, i) => (
            <AnimatedSection key={p.slug} delay={(i % 2) * 100} variant="scale">
              <ProjectCard project={p} index={i} />
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Testimonials preview ──────────────────────────────── */}
      <SectionWrapper tone="dark">
        <SectionHeading eyebrow="In their words" title="Owners, four years on." />
        <div className="mt-16">
          <Carousel
            perView={2}
            controlsTone="light"
            slides={testimonials.slice(0, 4).map((t) => (
              <TestimonialCard key={t.name} testimonial={t} className="h-full" />
            ))}
          />
        </div>
        <AnimatedSection className="mt-12">
          <Link to="/testimonials" className="link-underline text-[11px] uppercase tracking-[0.24em]">
            Read all testimonials
          </Link>
        </AnimatedSection>
      </SectionWrapper>

      {/* ── Insights ──────────────────────────────────────────── */}
      <SectionWrapper>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Insights" title="Notes from the studio." />
          <AnimatedSection delay={100}>
            <Link to="/blog" className="link-underline text-[11px] uppercase tracking-[0.24em]">
              All insights
            </Link>
          </AnimatedSection>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {posts.slice(0, 3).map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 100}>
              <BlogCard post={post} />
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* ── CTA strip ─────────────────────────────────────────── */}
      <section className={`${layout.sectionYTight} bg-secondary`}>
        <Container>
          <AnimatedSection className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <p className="eyebrow mb-4">Private viewings</p>
              <h2 className="font-display text-[clamp(1.75rem,3vw,2.75rem)] leading-tight">
                Visit a residence with the architect who drew it.
              </h2>
            </div>
            <ButtonLink to="/contact" size="lg">
              Arrange a viewing
            </ButtonLink>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { images, milestones, values, team, stats } from "@/data/content";
import { brand } from "@/theme";
import { PageHero } from "@/components/PageHero";
import { SectionWrapper, Container, Hairline } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedSection } from "@/components/AnimatedSection";
import { LazyImage } from "@/components/LazyImage";
import { StatCounter } from "@/components/StatCounter";
import { ButtonLink } from "@/components/Button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Parjane Buildcon" },
      {
        name: "description",
        content:
          "Established in 2001, Parjane Buildcon has completed over 150 landmarks across Western India with engineering excellence, quality materials, and unshakeable trust.",
      },
      { property: "og:title", content: "About Us — Parjane Buildcon" },
      {
        property: "og:description",
        content:
          "25+ years of engineering leadership, corporate values, and on-time project delivery.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Engineering Legacy"
        title="25 Years of Building Tomorrow's Landmarks."
        lede="Over two decades of crafting luxury residences and corporate towers with structural precision, quality, and complete transparency."
        image={images.project1}
      />

      {/* ── Founder Story & Heritage ──────────────────────────────── */}
      <SectionWrapper>
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:items-center">
          <AnimatedSection>
            <p className="eyebrow text-amber-400 font-bold mb-2.5">Founder's Vision</p>
            <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-white leading-tight">
              “We build with structural integrity, ethical precision, and lasting trust.”
            </h2>
            <p className="mt-4 text-xs sm:text-sm font-normal leading-relaxed text-slate-300">
              Rajesh Parjane established {brand.name} in 2001 with a clear mandate: to redefine
              urban construction standards in Western India through uncompromising engineering
              quality, earthquake-resistant structural safety, and transparent MahaRERA buyer commitments.
            </p>
            <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-slate-300">
              Over 25 years, our company has delivered more than 150 projects — spanning high-rise
              luxury towers, boutique sky duplexes, Grade-A corporate office parks, and major
              turnkey infrastructure.
            </p>
            <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-slate-300">
              By keeping land acquisition, architectural design, structural engineering, and estate
              care under one integrated leadership, we maintain 100% control over build quality and delivery dates.
            </p>
            <div className="mt-6 border-t border-white/10 pt-3.5">
              <p className="font-display text-lg sm:text-xl font-semibold text-white">Rajesh Parjane</p>
              <p className="mt-0.5 text-[10px] uppercase tracking-wider text-amber-400 font-bold">
                Founder &amp; Managing Director
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={140} variant="scale">
            <div className="overflow-hidden rounded-2xl border border-amber-500/25 bg-black/25 shadow-xl">
              <LazyImage
                src={images.interior1}
                alt="Completed Parjane Buildcon luxury interior"
                width={1280}
                height={960}
                wrapperClassName="aspect-4/3 sm:aspect-4/5"
                className="transition-transform duration-[1400ms] hover:scale-105"
              />
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      <Container>
        <Hairline />
      </Container>

      {/* ── Core Values ───────────────────────────────────────────── */}
      <SectionWrapper>
        <SectionHeading
          eyebrow="Core Values"
          title="Foundational Principles Guiding Every Project"
          lede="Every blueprint and foundation is grounded in these four uncompromised standards."
        />
        <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <AnimatedSection
              key={v.title}
              delay={i * 80}
              className="group rounded-2xl border border-white/10 bg-black/25 backdrop-blur-xl p-5 sm:p-6 shadow-xl transition-all duration-300 hover:border-amber-400/50 hover:bg-black/35 hover:-translate-y-1"
            >
              <div className="h-0.5 w-8 bg-gradient-to-r from-amber-400 to-amber-200 rounded-full" />
              <h3 className="mt-4 font-display text-base sm:text-lg font-semibold text-white group-hover:text-amber-300 transition-colors drop-shadow-sm">
                {v.title}
              </h3>
              <p className="mt-2 text-xs sm:text-[13px] font-normal leading-relaxed text-slate-300">
                {v.body}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Milestones Timeline ───────────────────────────────────── */}
      <SectionWrapper className="border-y border-amber-500/20 bg-black/25 backdrop-blur-md">
        <SectionHeading
          eyebrow="Growth Trajectory"
          title="25 Years of Architectural Milestones"
          lede="A chronological journey through landmark handovers across Western India."
        />
        <ol className="mt-8 sm:mt-10 border-l-2 border-amber-400/30 ml-3 sm:ml-5">
          {milestones.map((m, i) => (
            <AnimatedSection
              key={m.year}
              as="li"
              delay={i * 60}
              className="relative pb-8 pl-5 sm:pl-8 last:pb-0"
            >
              <span
                aria-hidden
                className="absolute left-0 top-2 size-3 -translate-x-[7px] rounded-full border-2 border-amber-400 bg-[#080c14] shadow-[0_0_8px_rgba(212,175,55,0.5)]"
              />
              <div className="rounded-xl border border-white/10 bg-black/25 backdrop-blur-xl p-4 sm:p-5 shadow-md">
                <span className="font-display text-lg sm:text-xl font-bold text-amber-300">{m.year}</span>
                <h3 className="mt-1 font-display text-base font-semibold text-white drop-shadow-sm">{m.title}</h3>
                <p className="mt-1 text-xs sm:text-[13px] font-normal leading-relaxed text-slate-300">
                  {m.body}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </ol>
      </SectionWrapper>

      {/* ── Company Stats Strip ────────────────────────────────────── */}
      <SectionWrapper tone="dark" tight className="border-b border-amber-500/20 bg-black/35 backdrop-blur-md py-6 sm:py-8">
        <div className="grid gap-6 sm:gap-8 grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 100}>
              <StatCounter value={s.value} suffix={s.suffix} label={s.label} />
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Executive Leadership ──────────────────────────────────── */}
      <SectionWrapper>
        <SectionHeading
          eyebrow="Executive Board"
          title="Executive Leadership &amp; Engineering Directors"
          lede="Seasoned civil engineers, architects, and financial leaders driving our landmark projects."
        />
        <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <AnimatedSection
              key={member.name}
              delay={i * 80}
              className="group rounded-2xl border border-white/10 bg-black/25 backdrop-blur-xl p-5 sm:p-6 shadow-xl transition-all duration-400 hover:-translate-y-1 hover:border-amber-400/50 hover:bg-black/35 hover:shadow-[0_16px_36px_rgba(212,175,55,0.12)]"
            >
              <div className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-[#d4af37] to-[#aa820a] font-display text-sm font-bold text-[#080c14] shadow-sm">
                {member.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")}
              </div>
              <h3 className="mt-4 font-display text-base sm:text-lg font-semibold text-white group-hover:text-amber-300 transition-colors drop-shadow-sm">
                {member.name}
              </h3>
              <p className="mt-0.5 text-[10px] uppercase tracking-wider text-amber-400 font-bold">
                {member.role}
              </p>
              <p className="mt-2 text-xs font-normal leading-relaxed text-slate-300">{member.bio}</p>
            </AnimatedSection>
          ))}
        </div>

        <Container className="mt-12 px-0">
          <Hairline />
        </Container>

        <AnimatedSection className="mt-10 text-center">
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-white">
            Visit one of our completed landmarks in person.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            Book a guided site tour with our engineering directors and experience structural excellence firsthand.
          </p>
          <ButtonLink
            to="/contact"
            size="sm"
            className="mt-6 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c59b27] text-[#080c14] font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105"
          >
            Schedule a Private Viewing →
          </ButtonLink>
        </AnimatedSection>
      </SectionWrapper>
    </>
  );
}

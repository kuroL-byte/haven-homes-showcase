import { createFileRoute } from "@tanstack/react-router";
import { images, milestones, values, team, stats } from "@/data/content";
import { brand, type as typeScale } from "@/theme";
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
        eyebrow="Our Legacy"
        title="25 Years of Engineering Excellence"
        lede="Over two decades of crafting luxury landmarks with precision, quality, and complete transparency."
        image={images.project1}
      />

      {/* Founder story */}
      <SectionWrapper>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20 lg:items-center">
          <AnimatedSection>
            <p className="eyebrow mb-6">Our Journey</p>
            <h2 className={typeScale.h2}>
              “We build with structural integrity and lasting trust.”
            </h2>
            <p className={`${typeScale.body} mt-8`}>
              Rajesh Parjane established {brand.name} in 2001 with a clear mandate: to redefine
              urban construction standards in Western India through uncompromising engineering
              quality, structural safety, and transparent buyer commitments.
            </p>
            <p className={`${typeScale.body} mt-5`}>
              Over 25 years, our practice has delivered more than 150 projects — spanning high-rise
              luxury towers, boutique gated communities, Grade-A corporate office parks, and major
              turnkey infrastructure.
            </p>
            <p className={`${typeScale.body} mt-5`}>
              By keeping land acquisition, architectural design, structural engineering, and estate
              care under one roof, we maintain 100% control over build quality and delivery dates.
            </p>
            <div className="mt-10">
              <p className="font-display text-2xl font-bold text-navy">Rajesh Parjane</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-gold font-semibold">
                Founder &amp; Managing Director
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={140} variant="scale">
            <LazyImage
              src={images.interior1}
              alt="Completed Parjane Buildcon luxury interior"
              width={1280}
              height={960}
              wrapperClassName="aspect-4/5 rounded-3xl border border-slate-200 shadow-2xl"
            />
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper tone="sand">
        <SectionHeading eyebrow="Core Values" title="Principles That Drive Every Landmark" />
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <AnimatedSection
              key={v.title}
              delay={i * 90}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="h-1 w-12 bg-gold rounded-full" />
              <h3 className="mt-6 font-display text-2xl font-bold text-navy">{v.title}</h3>
              <p className="mt-4 text-sm font-light leading-[1.85] text-slate-600">{v.body}</p>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Milestones timeline */}
      <SectionWrapper>
        <SectionHeading eyebrow="Milestones" title="25 Years of Architectural Milestones" />
        <ol className="mt-16 border-l-2 border-gold/40">
          {milestones.map((m, i) => (
            <AnimatedSection
              key={m.year}
              as="li"
              delay={i * 70}
              className="relative pb-14 pl-8 last:pb-0 sm:pl-14"
            >
              <span
                aria-hidden
                className="absolute left-0 top-2 size-4 -translate-x-[9px] rounded-full border-2 border-gold bg-navy"
              />
              <div className="grid gap-2 sm:grid-cols-[7rem_1fr] sm:gap-8">
                <span className="font-display text-3xl font-extrabold text-gold">{m.year}</span>
                <div>
                  <h3 className="font-display text-2xl font-bold text-navy">{m.title}</h3>
                  <p className="mt-3 max-w-xl text-sm font-light leading-[1.85] text-slate-600">
                    {m.body}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </ol>
      </SectionWrapper>

      {/* Stats */}
      <SectionWrapper tone="dark" tight>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 100}>
              <StatCounter value={s.value} suffix={s.suffix} label={s.label} />
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Leadership */}
      <SectionWrapper>
        <SectionHeading eyebrow="Leadership" title="Executive Leadership &amp; Engineering Team" />
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <AnimatedSection
              key={member.name}
              delay={i * 90}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-gold hover:shadow-xl"
            >
              <div className="grid size-16 place-items-center rounded-2xl bg-navy font-display text-xl font-bold text-gold">
                {member.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")}
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-navy">{member.name}</h3>
              <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-gold font-semibold">
                {member.role}
              </p>
              <p className="mt-4 text-sm font-light leading-[1.85] text-slate-600">{member.bio}</p>
            </AnimatedSection>
          ))}
        </div>

        <Container className="mt-24 px-0">
          <Hairline />
        </Container>

        <AnimatedSection className="mt-16 text-center">
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.75rem)] font-bold text-navy">
            Visit one of our completed landmarks.
          </h2>
          <ButtonLink
            to="/contact"
            size="lg"
            className="mt-8 rounded-2xl bg-gold text-navy font-bold"
          >
            Schedule a Private Viewing
          </ButtonLink>
        </AnimatedSection>
      </SectionWrapper>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { images, milestones, values, team, stats } from "@/data/content";
import { type as typeScale } from "@/theme";
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
      { title: "About — Atelier Meridian" },
      {
        name: "description",
        content:
          "Founded in 1994 as a two-person studio. Our story, values, leadership team and the milestones behind forty-one delivered projects.",
      },
      { property: "og:title", content: "About — Atelier Meridian" },
      {
        property: "og:description",
        content: "An architect-led development practice: our story, values and leadership.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our legacy"
        title="A studio that never stopped drawing."
        lede="Thirty-two years, one discipline, and a deliberately small number of buildings."
        image={images.project1}
      />

      {/* Founder story */}
      <SectionWrapper>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <AnimatedSection>
            <p className="eyebrow mb-6">The founding</p>
            <h2 className={typeScale.h2}>“We only build what we have drawn.”</h2>
            <p className={`${typeScale.body} mt-8`}>
              Anaya Raghunath founded the practice in 1994 with a single draughting table and a
              commission to remodel a Fort warehouse. The rule she set then still governs: the
              studio takes no project it cannot see through from first sketch to final handover.
            </p>
            <p className={`${typeScale.body} mt-5`}>
              In 2009 we began acquiring our own sites. The reason was not ambition but control —
              too many good drawings had been diluted by developers optimising after the fact.
              Bringing land, design and construction under one roof let us hold the line on
              structure, services and material quality where it actually matters.
            </p>
            <p className={`${typeScale.body} mt-5`}>
              We remain small on purpose. Three sites in build at any time is our ceiling, because
              it is the number the principals can visit weekly.
            </p>
            <p className="mt-10 font-display text-2xl">Anaya Raghunath</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Founder &amp; Principal Architect
            </p>
          </AnimatedSection>

          <AnimatedSection delay={140} variant="scale">
            <LazyImage
              src={images.interior1}
              alt="Interior of a completed Meridian residence"
              width={1280}
              height={960}
              wrapperClassName="aspect-4/5"
            />
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper tone="sand">
        <SectionHeading eyebrow="Mission & values" title="What the work is measured against." />
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 90}>
              <div className="h-px w-10 bg-bronze" />
              <h3 className="mt-6 font-display text-2xl">{v.title}</h3>
              <p className="mt-4 text-sm font-light leading-[1.85] text-muted-foreground">{v.body}</p>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Milestones timeline */}
      <SectionWrapper>
        <SectionHeading eyebrow="Milestones" title="Three decades, told briefly." />
        <ol className="mt-16 border-l border-border">
          {milestones.map((m, i) => (
            <AnimatedSection key={m.year} as="li" delay={i * 70} className="relative pb-14 pl-8 last:pb-0 sm:pl-14">
              <span
                aria-hidden
                className="absolute left-0 top-2 size-2 -translate-x-1/2 rounded-full bg-bronze"
              />
              <div className="grid gap-2 sm:grid-cols-[7rem_1fr] sm:gap-8">
                <span className="font-display text-2xl text-bronze">{m.year}</span>
                <div>
                  <h3 className="font-display text-2xl">{m.title}</h3>
                  <p className="mt-3 max-w-xl text-sm font-light leading-[1.85] text-muted-foreground">
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
              <StatCounter value={s.value} suffix={s.suffix} label={s.label} decimals={s.decimals ?? 0} />
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Leadership */}
      <SectionWrapper>
        <SectionHeading eyebrow="Leadership" title="The people you will actually meet." />
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <AnimatedSection key={member.name} delay={i * 90} className="border-t border-border pt-8">
              <div className="grid size-14 place-items-center rounded-full border border-bronze/40 font-display text-lg text-bronze">
                {member.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")}
              </div>
              <h3 className="mt-6 font-display text-xl">{member.name}</h3>
              <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-bronze">{member.role}</p>
              <p className="mt-4 text-sm font-light leading-[1.85] text-muted-foreground">{member.bio}</p>
            </AnimatedSection>
          ))}
        </div>

        <Container className="mt-24 px-0">
          <Hairline />
        </Container>

        <AnimatedSection className="mt-16 text-center">
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.75rem)]">
            Come and see one of the buildings.
          </h2>
          <ButtonLink to="/contact" size="lg" className="mt-8">
            Arrange a viewing
          </ButtonLink>
        </AnimatedSection>
      </SectionWrapper>
    </>
  );
}

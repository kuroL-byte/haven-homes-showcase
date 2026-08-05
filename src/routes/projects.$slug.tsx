import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { projects } from "@/data/content";
import { type as typeScale } from "@/theme";
import { PageHero } from "@/components/PageHero";
import { SectionWrapper, Container, Hairline } from "@/components/Container";
import { AnimatedSection } from "@/components/AnimatedSection";
import { LazyImage } from "@/components/LazyImage";
import { EnquiryForm } from "@/components/EnquiryForm";
import { StatusBadge } from "@/components/ProjectCard";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project unavailable — Atelier Meridian" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    const title = `${project.name}, ${project.location} — Atelier Meridian`;
    return {
      meta: [
        { title },
        { name: "description", content: project.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: project.summary },
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectDetail,
});

function ProjectNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 text-center">
      <div>
        <p className="eyebrow">Not found</p>
        <h1 className="mt-4 font-display text-4xl">That project isn't in the portfolio.</h1>
        <Link to="/projects" className="link-underline mt-8 inline-block text-[11px] uppercase tracking-[0.24em]">
          Back to projects
        </Link>
      </div>
    </div>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();

  return (
    <>
      <PageHero
        eyebrow={`${project.type} · ${project.status}`}
        title={project.name}
        lede={project.location}
        image={project.image}
      />

      {/* Overview */}
      <SectionWrapper>
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <AnimatedSection>
            <p className="eyebrow mb-6">Overview</p>
            <h2 className={typeScale.h2}>{project.summary}</h2>
            {project.overview.map((para) => (
              <p key={para.slice(0, 24)} className={`${typeScale.body} mt-6`}>
                {para}
              </p>
            ))}
          </AnimatedSection>

          <AnimatedSection delay={120}>
            <div className="flex items-center justify-between gap-4">
              <p className="eyebrow">Specifications</p>
              <StatusBadge status={project.status} />
            </div>
            <dl className="mt-6 divide-y divide-border border-y border-border">
              {project.specs.map((spec) => (
                <div key={spec.label} className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 py-4">
                  <dt className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {spec.label}
                  </dt>
                  <dd className="text-right text-sm font-light">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Gallery / floor plan imagery */}
      <SectionWrapper tone="sand" tight>
        <p className="eyebrow mb-8">Views &amp; plans</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {project.gallery.map((src, i) => (
            <AnimatedSection key={src + i} delay={i * 80} variant="scale">
              <LazyImage
                src={src}
                alt={`${project.name} — view ${i + 1}`}
                width={1280}
                height={960}
                wrapperClassName="aspect-3/4"
                className="transition-transform duration-[1400ms] hover:scale-[1.04]"
              />
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Amenities */}
      <SectionWrapper>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <AnimatedSection>
            <p className="eyebrow mb-6">Amenities</p>
            <h2 className={typeScale.h2}>Shared spaces, kept to the same standard.</h2>
          </AnimatedSection>
          <AnimatedSection delay={120}>
            <ul className="grid gap-px border border-border bg-border sm:grid-cols-2">
              {project.amenities.map((a) => (
                <li key={a} className="bg-background px-6 py-6 text-sm font-light">
                  {a}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>

        <Container className="mt-24 px-0">
          <Hairline />
        </Container>

        {/* Location + enquiry */}
        <div className="mt-20 grid gap-14 lg:grid-cols-2 lg:gap-20">
          <AnimatedSection>
            <p className="eyebrow mb-6">Location</p>
            <h3 className="font-display text-3xl">{project.location}</h3>
            <div className="mt-8 aspect-4/3 w-full overflow-hidden border border-border">
              <iframe
                title={`Map of ${project.name}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(project.mapQuery)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale-[0.35]"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={120}>
            <p className="eyebrow mb-6">Enquire</p>
            <h3 className="font-display text-3xl">Request the full information set.</h3>
            <p className={`${typeScale.body} mt-4`}>
              Floor plates, material schedules, payment structure and available levels.
            </p>
            <div className="mt-8">
              <EnquiryForm defaultProject={project.name} compact />
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>
    </>
  );
}

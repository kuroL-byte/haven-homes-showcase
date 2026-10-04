import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { projects, type Project } from "@/data/content";
import { PageHero } from "@/components/PageHero";
import { SectionWrapper, Container, Hairline } from "@/components/Container";
import { AnimatedSection } from "@/components/AnimatedSection";
import { LazyImage } from "@/components/LazyImage";
import { EnquiryForm } from "@/components/EnquiryForm";
import { StatusBadge } from "@/components/ProjectCard";
import { FloorPlanViewer } from "@/components/project/FloorPlanViewer";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Landmark Unavailable — Parjane Buildcon" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    const title = `${project.name}, ${project.location} — Parjane Buildcon`;
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
    <div className="flex min-h-screen items-center justify-center bg-[#080c14] px-6 text-center text-white">
      <div>
        <p className="eyebrow text-amber-400 font-bold">Not Found</p>
        <h1 className="mt-4 font-display text-4xl font-black">That landmark isn't in the portfolio.</h1>
        <Link
          to="/projects"
          className="mt-8 inline-block rounded-xl bg-gradient-to-r from-[#d4af37] to-[#c59b27] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#080c14] shadow-lg"
        >
          Back to Projects Portfolio
        </Link>
      </div>
    </div>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };

  return (
    <>
      <PageHero
        eyebrow={`${project.type} · ${project.status}`}
        title={project.name}
        lede={project.location}
        image={project.image}
      />

      {/* ── Overview & Specifications ───────────────────────────── */}
      <SectionWrapper>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
          <AnimatedSection>
            <p className="eyebrow text-amber-400 font-bold mb-2.5">Architectural Overview</p>
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-white leading-snug">
              {project.summary}
            </h2>
            {project.overview.map((para, i) => (
              <p key={i} className="mt-3.5 text-xs sm:text-sm font-normal leading-relaxed text-slate-300">
                {para}
              </p>
            ))}
          </AnimatedSection>

          <AnimatedSection delay={120}>
            <div className="rounded-2xl border border-white/10 bg-black/25 backdrop-blur-xl p-5 sm:p-6 shadow-xl">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3.5">
                <p className="eyebrow text-amber-400 font-bold text-[10px]">Specifications</p>
                <StatusBadge status={project.status} />
              </div>
              <dl className="mt-3 divide-y divide-white/10">
                {project.specs.map((spec) => (
                  <div key={spec.label} className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 py-2.5">
                    <dt className="text-[10px] uppercase tracking-wider text-slate-300 font-semibold">
                      {spec.label}
                    </dt>
                    <dd className="text-right text-xs sm:text-sm font-semibold text-white">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* ── Interactive Floor Plans ──────────────────────────────── */}
      <SectionWrapper className="border-y border-amber-500/20 bg-black/25 backdrop-blur-md">
        <AnimatedSection variant="scale">
          <FloorPlanViewer projectName={project.name} />
        </AnimatedSection>

        <div className="mt-10 sm:mt-12">
          <p className="eyebrow text-amber-400 font-bold mb-4">Views &amp; Site Gallery</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {project.gallery.map((src, i) => (
              <AnimatedSection key={src + i} delay={i * 70} variant="scale">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/25 shadow-md">
                  <LazyImage
                    src={src}
                    alt={`${project.name} — view ${i + 1}`}
                    width={1280}
                    height={960}
                    wrapperClassName="aspect-3/4"
                    className="transition-transform duration-[1200ms] hover:scale-105"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── Amenities Grid ───────────────────────────────────────── */}
      <SectionWrapper>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-12 lg:items-center">
          <AnimatedSection>
            <p className="eyebrow text-amber-400 font-bold mb-2">Lifestyle &amp; Amenities</p>
            <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-white leading-tight">
              Shared Spaces Built To International Luxury Standards.
            </h2>
            <p className="mt-3 text-xs sm:text-sm font-normal text-slate-300 leading-relaxed">
              Every Parjane development features fully maintained wellness, leisure, and concierge facilities 
              with multi-tier security and green footprint engineering.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={120}>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {project.amenities.map((a) => (
                <div key={a} className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-black/25 backdrop-blur-md p-3 text-xs font-medium text-slate-100 shadow-sm">
                  <span className="grid size-5 place-items-center rounded-full bg-amber-400/20 text-amber-400 font-bold text-[10px]">
                    ✓
                  </span>
                  <span>{a}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <Container className="mt-12 px-0">
          <Hairline />
        </Container>

        {/* ── Location Map + Booking Enquiry ──────────────────────── */}
        <div className="mt-10 sm:mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <AnimatedSection>
            <p className="eyebrow text-amber-400 font-bold mb-2">Strategic Location</p>
            <h3 className="font-display text-lg sm:text-xl font-semibold text-white drop-shadow-sm">{project.location}</h3>
            <div className="mt-4 aspect-4/3 w-full overflow-hidden rounded-2xl border border-white/10 shadow-xl">
              <iframe
                title={`Map of ${project.name}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(project.mapQuery)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale-[0.2]"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={120}>
            <div className="rounded-2xl border border-white/10 bg-black/25 backdrop-blur-xl p-5 sm:p-7 shadow-xl">
              <p className="eyebrow text-amber-400 font-bold mb-1.5 text-[10px]">Concierge Desk</p>
              <h3 className="font-display text-lg sm:text-xl font-semibold text-white drop-shadow-sm">Request Specification Dossier</h3>
              <p className="mt-1.5 text-xs font-normal text-slate-300 leading-relaxed">
                Receive comprehensive floor plates, structural certificates, material schedules, and VIP site visit options.
              </p>
              <div className="mt-5">
                <EnquiryForm defaultProject={project.name} compact />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>
    </>
  );
}

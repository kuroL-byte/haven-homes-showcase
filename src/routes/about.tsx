import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { images, awardsCertifications, stats } from "@/data/content";
import { brand } from "@/theme";
import { SectionWrapper, Container } from "@/components/Container";
import { AnimatedSection } from "@/components/AnimatedSection";
import { LazyImage } from "@/components/LazyImage";
import { StatCounter } from "@/components/StatCounter";
import { ButtonLink } from "@/components/Button";
import { Modal } from "@/components/Modal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Parjane Buildcon" },
      {
        name: "description",
        content:
          "Discover Parjane Buildcon's 25+ year journey of engineering excellence, proven process (Ideation, Planning, Execution), leadership team, and award-winning landmarks.",
      },
      { property: "og:title", content: "About Us — Parjane Buildcon" },
      {
        property: "og:description",
        content:
          "Success comes from process: Ideation, Planning & Execution. Meet our leadership team and explore 25+ years of landmark excellence.",
      },
    ],
  }),
  component: About,
});

const processSteps = [
  {
    num: "01",
    title: "Ideation",
    icon: "💡",
    body: "The journey to prosperous landmarks starts with the process of rigorous surveying, feasibility reports & a gut feeling that comes from decades of golden experience.",
  },
  {
    num: "02",
    title: "Planning & Designing",
    icon: "📐",
    body: "The next step is to design the façade, amenities, floor space planning, and MEP engineering, giving prominence to luxury, efficiency, and supreme convenience for the owners.",
  },
  {
    num: "03",
    title: "Execution",
    icon: "🏗️",
    body: "Only after proper planning, designing & conceptualizing a project do we begin with execution work with a steadfast vision — to provide a lavish lifestyle along with lasting convenience.",
  },
];

const leadershipTeam = [
  {
    name: "Rajesh Parjane",
    role: "Founder, Managing Director",
    image: images.hero,
    paragraphs: [
      "The humble journey commenced with being a civil engineer and working across various infrastructure projects.",
      "To being an A1 licensed government and private developer. Mr. Rajesh Parjane has built numerous residential towers, commercial parks, and civic structures with precision construction. He proficiently uses his golden experiences to overcome any obstacles and guide the team.",
      "In his 25+ years of experience in private buildership, he has delivered over 150+ projects across Maharashtra nodes.",
    ],
  },
  {
    name: "Priya Deshmukh",
    role: "Director of Architecture",
    image: images.interior1,
    paragraphs: [
      "Expertise in sustainable architecture design, facade engineering, and high-performance luxury materials.",
      "In more than 20+ years of bright experience as an architectural lead and developer, with her precious knowledge, she envisions and implements her strengths in making projects turn out spectacular.",
      "She aspires to provide the best construction outcome and effortless living convenience in each project.",
    ],
  },
  {
    name: "Anish Parjane",
    role: "Executive Director",
    image: images.grandeur,
    paragraphs: [
      "Mr. Anish is a second-generation developer with a mission to be a Grade-A developer and to set a massive geographical footprint with incredible ethics and values.",
      "He uses modern construction technologies, digital BIM modeling, and young wisdom to make projects up to the mark. He overcomes rough circumstances and makes sure nothing hinders quality or delivery.",
      "He holds deep expertise in management processes, capital allocation, business development, and team building.",
    ],
  },
];

const awardsList = [
  {
    title: "Best Luxury Landmark Developer",
    org: "Western India Real Estate Awards",
    year: "2025",
    icon: "🏆",
  },
  {
    title: "Excellence in Structural Engineering",
    org: "Builders Association of India (BAI)",
    year: "2024",
    icon: "🥇",
  },
  {
    title: "IGBC Platinum Sustainable Architecture",
    org: "Indian Green Building Council",
    year: "2025",
    icon: "🌿",
  },
  {
    title: "MahaRERA 100% On-Time Delivery",
    org: "Apex Real Estate Forum",
    year: "2023",
    icon: "⭐",
  },
  {
    title: "Iconic Commercial Workplace Design",
    org: "National Architecture Conclave",
    year: "2024",
    icon: "🏢",
  },
  {
    title: "Most Trusted Builder of the Decade",
    org: "Maharashtra Consumer Trust Forum",
    year: "2026",
    icon: "🎖️",
  },
];

function VerticalDivider() {
  return (
    <div className="flex flex-col items-center justify-center my-10 sm:my-14">
      <div className="h-12 sm:h-16 w-px bg-gradient-to-b from-transparent via-amber-400/60 to-transparent" />
      <div className="size-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
      <div className="h-12 sm:h-16 w-px bg-gradient-to-b from-transparent via-amber-400/60 to-transparent" />
    </div>
  );
}

function About() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      {/* ── Banner / Hero Section ─────────────────────────────────── */}
      <section className="relative flex min-h-[220px] sm:min-h-[28vh] items-end overflow-hidden pb-4 pt-24 sm:pb-6 sm:pt-28 text-white bg-transparent">
        <Container className="relative z-10">
          <AnimatedSection className="max-w-3xl relative">
            {/* Subtle Architectural Corner Markers */}
            <div className="pointer-events-none absolute -top-2 -left-2 size-3.5 border-t-2 border-l-2 border-amber-400/60 rounded-tl" />
            <div className="pointer-events-none absolute -bottom-2 -left-2 size-3.5 border-b-2 border-l-2 border-amber-400/60 rounded-bl" />

            <div className="relative pl-4 sm:pl-6 border-l-2 border-amber-400/80 py-2">
              {/* Breadcrumb Row */}
              <nav aria-label="breadcrumb" className="mb-2.5">
                <ol className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-200">
                  <li>
                    <a href="/" className="text-slate-200 hover:text-amber-300 transition-colors">
                      Home
                    </a>
                  </li>
                  <li className="text-amber-400">/</li>
                  <li className="text-amber-300 font-bold">About Us</li>
                </ol>
              </nav>

              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-black/40 backdrop-blur-[2px] px-3.5 py-1 mb-2.5 shadow-lg">
                <span className="size-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-amber-300">
                  Corporate Profile &amp; Heritage
                </span>
              </div>

              <h1 className="font-display text-[clamp(1.85rem,3.4vw,2.85rem)] font-extrabold text-white leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                About <br />
                <span className="text-gradient-gold">{brand.name}</span>
              </h1>

              <div className="mt-3.5 max-w-2xl rounded-xl border border-white/10 bg-black/30 backdrop-blur-[2px] p-3.5 sm:p-4 shadow-md">
                <p className="text-xs sm:text-[14px] font-medium text-white leading-relaxed drop-shadow-md">
                  Over 25+ years of delivering high-precision residential landmarks, corporate office towers,
                  and sustainable infrastructure with unshakeable buyer trust.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* ── Process: Success Comes From Process (01, 02, 03) ──────── */}
      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <AnimatedSection>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight drop-shadow-md">
              Success Comes From Process
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-slate-100 font-medium leading-relaxed drop-shadow-sm">
              Every project starts by discovering where you are—and where you want to go. By understanding
              what you want, we can start to build your vision.
            </p>
          </AnimatedSection>
        </div>

        {/* 3 Step Process Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {processSteps.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 90} variant="scale">
              <div className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-black/15 backdrop-blur-[2px] p-6 sm:p-7 shadow-lg transition-all duration-400 hover:-translate-y-1.5 hover:border-amber-400/50 hover:bg-black/25 hover:shadow-[0_16px_36px_rgba(212,175,55,0.12)]">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="grid size-12 place-items-center rounded-xl border border-amber-400/30 bg-amber-500/10 text-xl shadow-inner group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                    <span className="font-display text-2xl sm:text-3xl font-extrabold text-amber-400">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors drop-shadow-sm">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-[13px] font-medium leading-relaxed text-slate-100 drop-shadow-sm">
                    {step.body}
                  </p>
                </div>
                <div className="mt-6 h-0.5 w-10 bg-gradient-to-r from-amber-400 to-amber-200/40 rounded-full" />
              </div>
            </AnimatedSection>
          ))}
        </div>

        <VerticalDivider />

        {/* ── Section 04: Why Us & Video Box ───────────────────────── */}
        <div className="rounded-3xl border border-white/10 bg-black/15 backdrop-blur-[2px] p-6 sm:p-10 shadow-xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-center">
            <AnimatedSection>
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-amber-400 drop-shadow">
                04
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight drop-shadow-md">
                Why Us
              </h2>
              <div className="mt-4 space-y-3.5 text-xs sm:text-sm font-medium leading-relaxed text-slate-100 drop-shadow-sm">
                <p>
                  <strong className="text-white font-bold">{brand.name}</strong> is a premier Real Estate &amp;
                  Infrastructure Developer based in Maharashtra (Pune &amp; Mumbai). We have been
                  working on splendid projects in prime locations of Western India.
                </p>
                <p>
                  We have a highly proficient team to facilitate your property dealing and handover process.
                  We take our clients' preferences into top consideration. We are your reliable companion for
                  your property deals and generational investments.
                </p>
                <p>
                  With our glorious golden experience of <strong className="text-amber-300 font-bold">25+ years</strong>,
                  we utilize our wisdom, precision structural engineering &amp; experience to provide the
                  finest properties for your convenience and enduring luxury.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-[11px] font-bold text-amber-300">
                <span className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-3.5 py-1.5 shadow-sm">
                  ✓ 100% MahaRERA Compliant
                </span>
                <span className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-3.5 py-1.5 shadow-sm">
                  ✓ ISO 9001:2015 Certified Quality
                </span>
              </div>
            </AnimatedSection>

            {/* Video Box with Corner Brackets */}
            <AnimatedSection delay={140} variant="scale">
              <div className="relative p-3">
                {/* minfra style corner brackets */}
                <div className="pointer-events-none absolute top-0 left-0 size-10 border-t-4 border-l-4 border-amber-400 rounded-tl-lg" />
                <div className="pointer-events-none absolute bottom-0 right-0 size-10 border-b-4 border-r-4 border-amber-400 rounded-br-lg" />

                <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-black/15 backdrop-blur-[2px] shadow-xl">
                  <LazyImage
                    src={images.hero}
                    alt="Parjane Buildcon Architectural Walkthrough"
                    width={1280}
                    height={800}
                    wrapperClassName="aspect-16/10 w-full"
                    className="transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] transition-colors group-hover:bg-black/10" />

                  {/* Play Button Trigger */}
                  <button
                    onClick={() => setVideoOpen(true)}
                    aria-label="Play Corporate Film"
                    className="absolute inset-0 m-auto flex size-16 sm:size-20 items-center justify-center rounded-full bg-gradient-to-br from-[#f3e5ab] via-[#d4af37] to-[#aa820a] text-[#080c14] shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-transform duration-300 hover:scale-110 cursor-pointer"
                  >
                    <span className="ml-1 text-2xl sm:text-3xl font-black">▶</span>
                  </button>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white drop-shadow">
                    <span className="font-bold uppercase tracking-wider text-[10px] text-amber-300">
                      Corporate Film &amp; Heritage
                    </span>
                    <span className="text-[10px] text-white font-semibold">Click to Watch</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <VerticalDivider />

        {/* ── Section 05: Leadership Team ──────────────────────────── */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <AnimatedSection>
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-amber-400">
                05
              </span>
              <h2 className="mt-1 font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight drop-shadow-md">
                Leadership &amp; Management Team
              </h2>
            </AnimatedSection>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {leadershipTeam.map((leader, i) => (
              <AnimatedSection key={leader.name} delay={i * 100} variant="scale">
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/15 backdrop-blur-[2px] p-5 sm:p-6 shadow-lg transition-all duration-400 hover:-translate-y-1.5 hover:border-amber-400/50 hover:bg-black/25 hover:shadow-[0_16px_36px_rgba(212,175,55,0.12)]">
                  {/* Photo Header */}
                  <div className="overflow-hidden rounded-xl border border-white/10 bg-black/15 aspect-4/3 relative mb-4">
                    <LazyImage
                      src={leader.image}
                      alt={leader.name}
                      width={600}
                      height={450}
                      wrapperClassName="h-full w-full"
                      className="transition-transform duration-700 group-hover:scale-105 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <h3 className="font-display text-lg sm:text-xl font-bold text-white drop-shadow">
                        {leader.name}
                      </h3>
                      <p className="text-[10px] uppercase font-bold tracking-wider text-amber-300">
                        {leader.role}
                      </p>
                    </div>
                  </div>

                  {/* Bio Paragraphs */}
                  <div className="flex-1 space-y-2.5 text-xs font-medium leading-relaxed text-slate-100 drop-shadow-sm">
                    {leader.paragraphs.map((p, pIndex) => (
                      <p key={pIndex}>{p}</p>
                    ))}
                  </div>

                  <div className="mt-5 border-t border-white/10 pt-3 text-[10px] uppercase font-bold tracking-wider text-amber-300">
                    ✦ Executive Board Member
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Multidisciplinary Team Note */}
          <AnimatedSection className="mt-8 rounded-2xl border border-white/10 bg-black/15 backdrop-blur-[2px] p-5 text-center max-w-4xl mx-auto shadow-md">
            <p className="text-xs sm:text-sm font-medium text-white leading-relaxed drop-shadow-sm">
              We have a team of <strong className="text-amber-300 font-bold">Multiple Renowned Architects</strong> (landscaping,
              façade designing, spatial master-planning, and luxury interiors) to tailor your property to absolute perfection.
              Supported by a highly trained, experienced Engineering, RCC Design, and Management Directorate to ensure
              zero-snag execution.
            </p>
          </AnimatedSection>
        </div>

        <VerticalDivider />

        {/* ── Section 06: Awards & Achievements ─────────────────────── */}
        <div className="rounded-3xl border border-white/10 bg-black/15 backdrop-blur-[2px] p-6 sm:p-10 shadow-xl">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12 lg:items-center">
            <AnimatedSection>
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-amber-400">
                06
              </span>
              <h2 className="mt-1 font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight drop-shadow-md">
                Awards &amp; Achievements
              </h2>
              <p className="mt-3 text-xs sm:text-sm font-medium text-slate-100 leading-relaxed drop-shadow-sm">
                We are earnestly grateful for the recognition we have received for our work.
                These are some of the precious awards and achievements we have received. This gives us the reason
                to give our best performance, as we aim to continue to serve you better and stand prominent in the
                real estate industry.
              </p>

              {/* Awards Grid */}
              <div className="mt-6 grid gap-3.5 sm:grid-cols-2">
                {awardsList.map((a) => (
                  <div
                    key={a.title}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/15 p-3.5 shadow-sm transition-all hover:border-amber-400/40 hover:bg-black/25"
                  >
                    <span className="text-xl shrink-0">{a.icon}</span>
                    <div>
                      <h3 className="font-display text-xs sm:text-sm font-bold text-white drop-shadow-sm">
                        {a.title}
                      </h3>
                      <p className="text-[10px] text-slate-200 mt-0.5 font-medium">
                        {a.org} · <span className="text-amber-300 font-bold">{a.year}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Awards Side Visual */}
            <AnimatedSection delay={140} variant="scale">
              <div className="overflow-hidden rounded-2xl border border-amber-500/25 bg-black/15 shadow-xl">
                <LazyImage
                  src={images.clubhouse}
                  alt="Parjane Buildcon Awards &amp; Trophy Showcase"
                  width={900}
                  height={900}
                  wrapperClassName="aspect-square w-full"
                  className="transition-transform duration-[1200ms] hover:scale-105"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* ── Stats Strip & CTA ────────────────────────────────────── */}
        <div className="mt-12 sm:mt-16 rounded-2xl border border-amber-500/20 bg-black/15 backdrop-blur-[2px] p-6 sm:p-8 shadow-xl">
          <div className="grid gap-6 sm:gap-8 grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 80}>
                <StatCounter value={s.value} suffix={s.suffix} label={s.label} />
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-8 border-t border-white/10 pt-6 text-center">
            <h3 className="font-display text-lg sm:text-xl font-bold text-white drop-shadow-sm">
              Experience our landmark craftsmanship in person.
            </h3>
            <p className="mt-1.5 text-xs text-slate-100 font-medium max-w-md mx-auto drop-shadow-sm">
              Schedule a guided site tour with our engineering director and explore current availability.
            </p>
            <ButtonLink
              to="/contact"
              size="sm"
              className="mt-5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c59b27] text-[#080c14] font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105"
            >
              Schedule a Private Viewing →
            </ButtonLink>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Corporate Video Modal ─────────────────────────────────── */}
      <Modal open={videoOpen} onClose={() => setVideoOpen(false)} label="Parjane Corporate Film">
        <div className="overflow-hidden rounded-2xl border border-amber-500/30 bg-black/80 backdrop-blur-[2px] p-4 sm:p-6 text-white max-w-3xl w-full">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
            <h3 className="font-display text-base sm:text-lg font-bold text-white">
              {brand.name} — Corporate Heritage Film
            </h3>
            <span className="text-[10px] uppercase font-bold text-amber-400">25+ Years of Excellence</span>
          </div>

          <div className="aspect-16/9 w-full overflow-hidden rounded-xl bg-black">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/rjoze69l2fA?autoplay=1"
              title="Parjane Corporate Film"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <p className="mt-3 text-xs text-white font-medium text-center drop-shadow-sm">
            A journey through 25+ years of engineering precision, landmark towers, and 100% on-time delivery across Maharashtra.
          </p>
        </div>
      </Modal>
    </>
  );
}


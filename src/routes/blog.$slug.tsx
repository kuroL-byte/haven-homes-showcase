import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { posts, type Post } from "@/data/content";
import { SectionWrapper, Container, Hairline } from "@/components/Container";
import { AnimatedSection } from "@/components/AnimatedSection";
import { LazyImage } from "@/components/LazyImage";
import { BlogCard } from "@/components/BlogCard";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article Unavailable — Parjane Buildcon" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData as { post: Post };
    const title = `${post.title} — Parjane Buildcon`;
    return {
      meta: [
        { title },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: PostNotFound,
  component: BlogPost,
});

function PostNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#080c14] px-6 text-center text-white">
      <div>
        <p className="eyebrow text-amber-400 font-bold">Not Found</p>
        <h1 className="mt-4 font-display text-4xl font-black">That article has moved or expired.</h1>
        <Link
          to="/blog"
          className="mt-8 inline-block rounded-xl bg-gradient-to-r from-[#d4af37] to-[#c59b27] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#080c14] shadow-lg"
        >
          Back to Insights
        </Link>
      </div>
    </div>
  );
}

function BlogPost() {
  const { post } = Route.useLoaderData() as { post: Post };
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className="text-white">
      <SectionWrapper narrow className="pb-0 pt-24 sm:pt-28">
        <AnimatedSection>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] uppercase font-bold tracking-wider text-slate-400">
            <span className="text-amber-400">{post.category}</span>
            <span aria-hidden>·</span>
            <span>{post.date}</span>
            <span aria-hidden>·</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="mt-4 font-display text-[clamp(1.6rem,2.8vw,2.4rem)] font-semibold text-white leading-tight">
            {post.title}
          </h1>
          <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-slate-300">
            {post.excerpt}
          </p>
        </AnimatedSection>
      </SectionWrapper>

      <Container className="mt-6 sm:mt-8">
        <AnimatedSection variant="scale">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/25 shadow-xl">
            <LazyImage
              src={post.image}
              alt={post.title}
              width={1280}
              height={960}
              wrapperClassName="aspect-16/9"
              className="h-full w-full object-cover"
            />
          </div>
        </AnimatedSection>
      </Container>

      <SectionWrapper narrow>
        <div className="space-y-4 rounded-2xl border border-white/10 bg-black/25 backdrop-blur-xl p-5 sm:p-8 shadow-xl">
          {post.body.map((para, i) => (
            <AnimatedSection key={i} delay={i * 30}>
              <p
                className={
                  i === 0
                    ? "text-sm sm:text-base font-normal leading-relaxed text-slate-100 first-letter:float-left first-letter:mr-2.5 first-letter:font-display first-letter:text-4xl first-letter:font-bold first-letter:leading-[0.8] first-letter:text-amber-400"
                    : "text-xs sm:text-sm font-normal leading-relaxed text-slate-300"
                }
              >
                {para}
              </p>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-8">
          <Hairline />
        </div>

        <AnimatedSection className="mt-5">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-amber-400 hover:underline cursor-pointer"
          >
            ← Back to Insights &amp; Journal
          </Link>
        </AnimatedSection>
      </SectionWrapper>

      <SectionWrapper className="border-t border-amber-500/20 bg-black/25 backdrop-blur-md">
        <p className="eyebrow text-amber-400 font-bold mb-4">Related Engineering Articles</p>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {related.map((p, i) => (
            <AnimatedSection key={p.slug} delay={i * 70}>
              <BlogCard post={p} />
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>
    </article>
  );
}

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
        meta: [{ title: "Article unavailable — Atelier Meridian" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData as { post: Post };
    const title = `${post.title} — Atelier Meridian`;
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
    <div className="flex min-h-screen items-center justify-center px-6 text-center">
      <div>
        <p className="eyebrow">Not found</p>
        <h1 className="mt-4 font-display text-4xl">That article has moved.</h1>
        <Link to="/blog" className="link-underline mt-8 inline-block text-[11px] uppercase tracking-[0.24em]">
          Back to insights
        </Link>
      </div>
    </div>
  );
}

function BlogPost() {
  const { post } = Route.useLoaderData() as { post: Post };
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article>
      <SectionWrapper narrow className="pb-0 pt-36 sm:pt-44">
        <AnimatedSection>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            <span className="text-bronze">{post.category}</span>
            <span aria-hidden>·</span>
            <span>{post.date}</span>
            <span aria-hidden>·</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.08]">{post.title}</h1>
          <p className="mt-6 text-[17px] font-light leading-[1.9] text-muted-foreground">{post.excerpt}</p>
        </AnimatedSection>
      </SectionWrapper>

      <Container className="mt-14">
        <AnimatedSection variant="scale">
          <LazyImage
            src={post.image}
            alt={post.title}
            width={1280}
            height={960}
            wrapperClassName="aspect-16/9"
          />
        </AnimatedSection>
      </Container>

      <SectionWrapper narrow>
        <div className="space-y-7">
          {post.body.map((para, i) => (
            <AnimatedSection key={i} delay={i * 40}>
              <p
                className={
                  i === 0
                    ? "text-[19px] font-light leading-[1.85] first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:leading-[0.8] first-letter:text-bronze"
                    : "text-[17px] font-light leading-[1.9] text-muted-foreground"
                }
              >
                {para}
              </p>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-16">
          <Hairline />
        </div>

        <AnimatedSection className="mt-10">
          <Link to="/blog" className="link-underline text-[11px] uppercase tracking-[0.24em]">
            ← All insights
          </Link>
        </AnimatedSection>
      </SectionWrapper>

      <SectionWrapper tone="sand">
        <p className="eyebrow mb-10">Continue reading</p>
        <div className="grid gap-10 md:grid-cols-3">
          {related.map((p, i) => (
            <AnimatedSection key={p.slug} delay={i * 90}>
              <BlogCard post={p} />
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>
    </article>
  );
}

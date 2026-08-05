import { Link } from "@tanstack/react-router";
import type { Post } from "@/data/content";
import { LazyImage } from "./LazyImage";

export function BlogCard({ post }: { post: Post }) {
  return (
    <article className="group">
      <Link to="/blog/$slug" params={{ slug: post.slug }} className="block">
        <LazyImage
          src={post.image}
          alt={post.title}
          width={1280}
          height={960}
          wrapperClassName="aspect-3/2"
          className="transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-6 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          <span className="text-bronze">{post.category}</span>
          <span aria-hidden>·</span>
          <span>{post.date}</span>
          <span aria-hidden>·</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="mt-4 font-display text-2xl leading-snug transition-colors duration-500 group-hover:text-bronze">
          {post.title}
        </h3>
        <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <span className="link-reveal mt-6 inline-block text-[11px] uppercase tracking-[0.24em]">
          Read
        </span>
      </Link>
    </article>
  );
}

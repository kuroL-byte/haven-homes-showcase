import { Link } from "@tanstack/react-router";
import type { Post } from "@/data/content";
import { LazyImage } from "@/components/common/LazyImage";

export function BlogCard({ post }: { post: Post }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-gold hover:shadow-xl">
      <Link to="/blog/$slug" params={{ slug: post.slug }} className="block p-4">
        <LazyImage
          src={post.image}
          alt={post.title}
          width={1280}
          height={960}
          wrapperClassName="aspect-3/2 rounded-2xl"
          className="transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        <div className="p-3">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] uppercase tracking-wider font-semibold text-slate-500">
            <span className="text-gold font-bold">{post.category}</span>
            <span aria-hidden>·</span>
            <span>{post.date}</span>
            <span aria-hidden>·</span>
            <span>{post.readTime}</span>
          </div>
          <h3 className="mt-3 font-display text-xl font-bold text-navy leading-snug transition-colors duration-300 group-hover:text-gold">
            {post.title}
          </h3>
          <p className="mt-2 text-xs font-light leading-relaxed text-slate-600 line-clamp-2">
            {post.excerpt}
          </p>
          <span className="link-reveal mt-4 inline-block text-xs uppercase font-bold tracking-wider text-navy">
            Read Article →
          </span>
        </div>
      </Link>
    </article>
  );
}

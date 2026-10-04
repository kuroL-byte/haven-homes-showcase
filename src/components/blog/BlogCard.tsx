import { Link } from "@tanstack/react-router";
import type { Post } from "@/data/content";
import { LazyImage } from "@/components/common/LazyImage";

export function BlogCard({ post }: { post: Post }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-black/25 backdrop-blur-xl shadow-xl transition-all duration-400 hover:-translate-y-1 hover:border-amber-400/50 hover:bg-black/35 hover:shadow-[0_16px_36px_rgba(0,0,0,0.6),0_0_20px_rgba(212,175,55,0.12)]">
      <Link to="/blog/$slug" params={{ slug: post.slug }} className="block p-3.5 sm:p-4">
        <div className="overflow-hidden rounded-xl">
          <LazyImage
            src={post.image}
            alt={post.title}
            width={1280}
            height={960}
            wrapperClassName="aspect-3/2"
            className="transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
        </div>
        <div className="pt-3.5 px-1">
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[10px] uppercase tracking-wider font-semibold text-slate-400">
            <span className="text-amber-400">{post.category}</span>
            <span aria-hidden>·</span>
            <span>{post.date}</span>
            <span aria-hidden>·</span>
            <span>{post.readTime}</span>
          </div>
          <h3 className="mt-2.5 font-display text-base sm:text-[17px] font-semibold text-white leading-snug transition-colors duration-300 group-hover:text-amber-300 drop-shadow-sm">
            {post.title}
          </h3>
          <p className="mt-2 text-xs sm:text-[13px] font-normal leading-relaxed text-slate-300 line-clamp-2">
            {post.excerpt}
          </p>
          <span className="mt-3.5 inline-flex items-center gap-1.5 text-[11px] uppercase font-bold tracking-wider text-amber-400 group-hover:text-amber-300">
            <span>Read Article</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}

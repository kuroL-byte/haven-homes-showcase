import { cn } from "@/lib/utils";
import type { Testimonial } from "@/data/content";

function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-1 text-gold text-base"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden className={i < rating ? "opacity-100" : "opacity-30"}>
          ★
        </span>
      ))}
      <span className="ml-2 text-xs font-bold text-slate-300">5.0 / 5.0 Google Rating</span>
    </div>
  );
}

function Monogram({ name }: { name: string }) {
  const initials = name
    .replace(/\(.*?\)/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gold font-display font-bold text-navy text-sm shadow-md">
      {initials}
    </div>
  );
}

export function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-navy/90 p-8 shadow-xl backdrop-blur-sm sm:p-10",
        className,
      )}
    >
      <div>
        <div className="flex items-center justify-between">
          <Stars rating={testimonial.rating} />
          <span className="text-3xl text-gold/30 font-serif">“</span>
        </div>
        <blockquote className="mt-6 font-display text-lg font-medium leading-relaxed text-slate-200">
          “{testimonial.quote}”
        </blockquote>
      </div>

      <figcaption className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
        <Monogram name={testimonial.name} />
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-white">{testimonial.name}</p>
          <p className="mt-0.5 text-[10px] uppercase font-bold tracking-[0.2em] text-gold">
            {testimonial.project}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

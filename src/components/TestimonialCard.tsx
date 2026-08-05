import { cn } from "@/lib/utils";
import type { Testimonial } from "@/data/content";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-bronze" aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden className={i < rating ? "opacity-100" : "opacity-25"}>
          ★
        </span>
      ))}
    </div>
  );
}

/** Initial-monogram avatar keeps the card composed without stock portraits. */
function Monogram({ name }: { name: string }) {
  const initials = name
    .replace(/\(.*?\)/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <div className="grid size-11 shrink-0 place-items-center rounded-full border border-bronze/40 font-display text-sm text-bronze">
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
    <figure className={cn("flex h-full flex-col border border-border/70 bg-card p-8 sm:p-10", className)}>
      <Stars rating={testimonial.rating} />
      <blockquote className="mt-6 font-display text-[clamp(1.25rem,2vw,1.6rem)] leading-[1.45]">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-auto flex items-center gap-4 pt-8">
        <Monogram name={testimonial.name} />
        <div className="min-w-0">
          <p className="truncate text-sm">{testimonial.name}</p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            {testimonial.project}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Generic slide carousel.
 * - smooth cross-fade/slide transition
 * - optional autoplay, paused on hover and on focus within
 * - manual prev/next + dot controls
 */
export function Carousel({
  slides,
  autoPlay = true,
  interval = 6000,
  className,
  perView = 1,
  controlsTone = "dark",
}: {
  slides: ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
  /** slides visible at >= lg */
  perView?: 1 | 2 | 3;
  controlsTone?: "dark" | "light";
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [view, setView] = useState(1);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  // responsive slides-per-view without a layout library
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      setView(w >= 1024 ? perView : w >= 640 ? Math.min(2, perView) : 1);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, [perView]);

  const pages = Math.max(1, slides.length - view + 1);
  const go = useCallback((next: number) => setIndex(((next % pages) + pages) % pages), [pages]);

  useEffect(() => {
    if (!autoPlay || paused || pages <= 1) return;
    timer.current = setInterval(() => setIndex((i) => (i + 1) % pages), interval);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [autoPlay, paused, interval, pages]);

  useEffect(() => {
    if (index > pages - 1) setIndex(0);
  }, [pages, index]);

  const light = controlsTone === "light";

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${index * (100 / view)}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="shrink-0 px-3 first:pl-0 last:pr-0"
              style={{ width: `${100 / view}%` }}
              aria-hidden={i < index || i >= index + view}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between gap-6">
        <div className="flex gap-2">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={cn(
                "h-px w-10 transition-all duration-500",
                i === index
                  ? "bg-bronze"
                  : light
                    ? "bg-ivory/30 hover:bg-ivory/60"
                    : "bg-border hover:bg-bronze/50",
              )}
            />
          ))}
        </div>

        <div className="flex gap-3">
          {(["prev", "next"] as const).map((dir) => (
            <button
              key={dir}
              onClick={() => go(dir === "prev" ? index - 1 : index + 1)}
              aria-label={dir === "prev" ? "Previous slide" : "Next slide"}
              className={cn(
                "grid size-11 place-items-center border transition-all duration-500",
                light
                  ? "border-ivory/25 text-ivory hover:border-ivory hover:bg-ivory hover:text-ink"
                  : "border-border text-foreground hover:border-bronze hover:text-bronze",
              )}
            >
              <span aria-hidden className="text-sm">
                {dir === "prev" ? "←" : "→"}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

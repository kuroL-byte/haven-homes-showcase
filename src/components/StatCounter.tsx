import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/** Counts up from 0 to `value` when scrolled into view. */
export function StatCounter({
  value,
  suffix = "",
  label,
  decimals = 0,
  duration = 1800,
  className,
}: {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let raf = 0;
    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        // easeOutExpo — decelerating, never overshooting
        const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        setDisplay(value * eased);
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    if (typeof IntersectionObserver === "undefined") {
      setDisplay(value);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <div ref={ref} className={cn("text-center sm:text-left", className)}>
      <div className="font-display text-[clamp(2.75rem,5vw,4.25rem)] leading-none tabular-nums">
        {display.toFixed(decimals)}
        <span className="text-bronze-soft">{suffix}</span>
      </div>
      <div className="mt-4 h-px w-10 bg-bronze/50 max-sm:mx-auto" />
      <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">{label}</p>
    </div>
  );
}

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Reveals children on scroll using IntersectionObserver.
 * Subtle fade-up (default) or scale-in, never bouncy.
 */
export function AnimatedSection({
  children,
  className,
  delay = 0,
  variant = "up",
  as: Tag = "div",
  once = true,
}: {
  children: ReactNode;
  className?: string;
  /** delay in ms */
  delay?: number;
  variant?: "up" | "scale";
  as?: ElementType;
  once?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(variant === "scale" ? "reveal-scale" : "reveal", visible && "is-visible", className)}
    >
      {children}
    </Tag>
  );
}

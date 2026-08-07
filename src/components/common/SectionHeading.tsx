import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { type as typeScale } from "@/theme";
import { AnimatedSection } from "./AnimatedSection";

/** Eyebrow label + display heading + optional lede, with scroll reveal. */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  level = 2,
  className,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  level?: 1 | 2;
  className?: string;
  children?: ReactNode;
}) {
  const Heading = level === 1 ? "h1" : "h2";
  return (
    <AnimatedSection
      className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}
    >
      {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
      <Heading className={level === 1 ? typeScale.h1 : typeScale.h2}>{title}</Heading>
      {lede && (
        <p className={cn(typeScale.body, "mt-6 max-w-2xl", align === "center" && "mx-auto")}>
          {lede}
        </p>
      )}
      {children}
    </AnimatedSection>
  );
}

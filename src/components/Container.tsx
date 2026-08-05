import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { layout } from "@/theme";

/** Consistent max-width + horizontal padding wrapper. */
export function Container({
  children,
  className,
  narrow = false,
}: {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}) {
  return (
    <div className={cn(narrow ? layout.containerNarrow : layout.container, className)}>
      {children}
    </div>
  );
}

/**
 * Full-width section with vertical rhythm.
 * `tone="dark"` applies the charcoal contrast band token set.
 */
export function SectionWrapper({
  children,
  className,
  id,
  tone = "light",
  tight = false,
  narrow = false,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "light" | "dark" | "sand" | "bare";
  tight?: boolean;
  narrow?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        tight ? layout.sectionYTight : layout.sectionY,
        tone === "dark" && "section-dark",
        tone === "sand" && "bg-secondary",
        className,
      )}
    >
      <Container narrow={narrow}>{children}</Container>
    </section>
  );
}

/** Thin bronze hairline used instead of hard borders between sections. */
export function Hairline({ className }: { className?: string }) {
  return <div aria-hidden className={cn("hairline", className)} />;
}

import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-sans text-[11px] uppercase tracking-[0.22em] " +
  "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] rounded-none cursor-pointer " +
  "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 " +
  "focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  solid: "bg-primary text-primary-foreground hover:bg-charcoal hover:tracking-[0.26em]",
  outline:
    "border border-border text-foreground hover:border-primary hover:text-primary hover:tracking-[0.26em]",
  ghost: "text-foreground hover:text-primary",
  light:
    "border border-ivory/40 text-ivory backdrop-blur-[2px] hover:bg-ivory hover:text-ink hover:tracking-[0.26em]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-5",
  md: "h-12 px-8",
  lg: "h-14 px-10",
};

export function buttonClasses(variant: Variant = "solid", size: Size = "md", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

interface ButtonProps extends ComponentProps<"button"> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

export function Button({ variant = "solid", size = "md", className, ...props }: ButtonProps) {
  return <button className={buttonClasses(variant, size, className)} {...props} />;
}

/** Router-aware button-styled link. */
export function ButtonLink({
  to,
  variant = "solid",
  size = "md",
  className,
  children,
  ...rest
}: {
  to: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, "to" | "className" | "children">) {
  return (
    <Link to={to} className={buttonClasses(variant, size, className)} {...rest}>
      {children}
    </Link>
  );
}

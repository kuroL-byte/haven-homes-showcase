import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "ghost" | "light" | "gold";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-sans text-xs uppercase tracking-[0.16em] " +
  "transition-all duration-300 ease-out rounded-xl cursor-pointer font-bold " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 " +
  "disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  solid:
    "bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c59b27] text-[#080c14] shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:scale-105 hover:shadow-[0_6px_25px_rgba(212,175,55,0.5)]",
  gold:
    "bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c59b27] text-[#080c14] shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:scale-105 hover:shadow-[0_6px_25px_rgba(212,175,55,0.5)]",
  outline:
    "border border-white/25 bg-[#0e1526]/70 text-white backdrop-blur-[2px] hover:border-amber-400 hover:bg-amber-400/10 hover:text-amber-300 shadow-md",
  ghost: "text-slate-300 hover:text-amber-300 hover:bg-white/5",
  light:
    "border border-white/30 text-white bg-white/5 backdrop-blur-[2px] hover:border-amber-400 hover:bg-amber-400/20 hover:text-amber-300",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[11px]",
  md: "h-11 px-6 text-xs",
  lg: "h-13 px-8 text-xs sm:text-sm",
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

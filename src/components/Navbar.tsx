import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { brand, layout, navLinks } from "@/theme";
import { ButtonLink } from "./Button";

/** Sticky header: transparent over hero on the home page, solid once scrolled. */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const transparent = overHero && !scrolled && !menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
        transparent
          ? "bg-transparent py-6 text-ivory"
          : "bg-background/92 py-3 text-foreground shadow-[0_1px_0_0_var(--hairline)] backdrop-blur-md",
      )}
    >
      <div className={cn(layout.container, "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6")}>
        <Link to="/" className="min-w-0 leading-none" aria-label={`${brand.name} — home`}>
          <span className="block truncate font-display text-xl tracking-[0.14em] uppercase sm:text-2xl">
            {brand.name}
          </span>
          <span className="mt-1 hidden text-[9px] uppercase tracking-[0.3em] opacity-60 sm:block">
            Est. 1994
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="link-reveal text-[11px] uppercase tracking-[0.2em] opacity-80 transition-opacity hover:opacity-100"
              activeProps={{ className: "opacity-100 text-bronze" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
          <ButtonLink to="/contact" variant={transparent ? "light" : "solid"} size="sm">
            Enquire
          </ButtonLink>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex size-10 shrink-0 flex-col items-center justify-center gap-[7px] lg:hidden"
        >
          <span
            className={cn(
              "block h-px w-7 bg-current transition-transform duration-500",
              menuOpen && "translate-y-[4px] rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-px w-7 bg-current transition-transform duration-500",
              menuOpen && "-translate-y-[4px] -rotate-45",
            )}
          />
        </button>
      </div>

      {/* Mobile slide-in panel */}
      <div
        className={cn(
          "fixed inset-0 top-0 -z-10 flex flex-col justify-center bg-background px-8 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
          menuOpen ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-6 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1">
          {navLinks.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              style={{ transitionDelay: menuOpen ? `${120 + i * 45}ms` : "0ms" }}
              className={cn(
                "border-b border-border/60 py-4 font-display text-3xl text-foreground transition-all duration-700",
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
              )}
              activeProps={{ className: "text-bronze" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-10 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          <p>{brand.phone}</p>
          <p className="mt-2 normal-case tracking-normal">{brand.email}</p>
        </div>
      </div>
    </header>
  );
}

import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { brand, layout, navLinks } from "@/theme";
import { ButtonLink } from "@/components/common/Button";

/** Sticky glass header for Parjane Buildcon */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu when pathname changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    if (menuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const transparent = !scrolled && !menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out",
        transparent
          ? "bg-gradient-to-b from-navy/90 via-navy/50 to-transparent py-4 sm:py-5 text-white"
          : "bg-navy/95 py-4 text-white shadow-xl shadow-navy/20 backdrop-blur-lg border-b border-gold/20",
      )}
    >
      <div
        className={cn(
          layout.container,
          "flex items-center justify-between gap-2 sm:gap-6 w-full max-w-full relative z-50",
        )}
      >
        {/* Brand Logo Mark */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="group flex items-center gap-2 sm:gap-3 leading-none shrink min-w-0"
          aria-label={`${brand.name} — home`}
        >
          <div className="grid size-8 sm:size-10 shrink-0 place-items-center rounded-xl bg-gold font-display font-black text-navy text-lg sm:text-xl shadow-md transition-transform duration-300 group-hover:scale-105">
            P
          </div>
          <div className="min-w-0 shrink">
            <span className="block font-display text-base sm:text-2xl font-extrabold tracking-tight text-white group-hover:text-gold transition-colors truncate">
              PARJANE <span className="font-light text-gold">BUILDCON</span>
            </span>
            <span className="mt-0.5 block text-[7.5px] sm:text-[9px] uppercase tracking-wider sm:tracking-[0.3em] font-medium text-slate-200 truncate">
              Building Tomorrow's Landmarks
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="link-reveal text-xs uppercase tracking-[0.2em] font-bold text-white transition-colors hover:text-gold"
              activeProps={{ className: "text-gold font-extrabold" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
          <ButtonLink
            to="/contact"
            variant="solid"
            size="sm"
            className="rounded-xl bg-gold text-navy font-semibold hover:bg-gold-light hover:scale-105 transition-all shadow-md"
          >
            Enquire Now
          </ButtonLink>
        </nav>

        {/* Mobile Toggle Hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="relative z-50 flex size-10 shrink-0 flex-col items-center justify-center gap-1.5 lg:hidden cursor-pointer rounded-lg hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          <span
            className={cn(
              "block h-0.5 w-6 bg-gold transition-all duration-300 ease-in-out origin-center",
              menuOpen ? "translate-y-[4px] rotate-45" : "translate-y-0 rotate-0",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-gold transition-all duration-300 ease-in-out origin-center",
              menuOpen ? "-translate-y-[4px] -rotate-45" : "translate-y-0 rotate-0",
            )}
          />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={cn(
          "fixed inset-0 top-0 z-40 flex h-[100dvh] w-full flex-col justify-between bg-navy/98 px-6 sm:px-10 pb-10 pt-24 text-white backdrop-blur-2xl transition-all duration-500 ease-out lg:hidden overflow-y-auto",
          menuOpen
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "translate-x-full opacity-0 pointer-events-none",
        )}
      >
        <nav className="flex flex-col gap-2 mt-2">
          {navLinks.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: menuOpen ? `${60 + i * 30}ms` : "0ms" }}
              className={cn(
                "border-b border-white/10 py-3 font-display text-xl sm:text-2xl font-bold text-white transition-all duration-300 hover:text-gold hover:pl-2",
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
              )}
              activeProps={{ className: "text-gold font-black pl-2" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 space-y-4 border-t border-white/10 pt-6">
          <div className="text-xs text-slate-300">
            <p className="font-semibold text-gold text-sm">{brand.phone}</p>
            <p className="mt-1">{brand.email}</p>
          </div>
          <ButtonLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            variant="solid"
            className="w-full rounded-xl bg-gold text-navy font-bold py-3.5 text-center justify-center"
          >
            Contact Us
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}

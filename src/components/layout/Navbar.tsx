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
  const overHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
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

  const transparent = !scrolled && !menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
        transparent
          ? "bg-gradient-to-b from-navy/80 via-navy/40 to-transparent py-5 sm:py-6 text-white"
          : "bg-navy/95 py-4 text-white shadow-xl shadow-navy/20 backdrop-blur-lg border-b border-gold/20",
      )}
    >
      <div
        className={cn(
          layout.container,
          "flex items-center justify-between gap-2 sm:gap-6 w-full max-w-full",
        )}
      >
        {/* Brand Logo Mark */}
        <Link
          to="/"
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
          className="relative z-50 flex size-10 shrink-0 flex-col items-center justify-center gap-1.5 lg:hidden cursor-pointer"
        >
          <span
            className={cn(
              "block h-0.5 w-6 bg-gold transition-transform duration-300",
              menuOpen && "translate-y-[4px] rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-gold transition-transform duration-300",
              menuOpen && "-translate-y-[4px] -rotate-45",
            )}
          />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={cn(
          "fixed inset-0 top-0 z-40 flex flex-col justify-between bg-navy px-8 pb-12 pt-24 text-white transition-all duration-500 ease-out max-h-screen overflow-y-auto lg:hidden",
          menuOpen ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-8 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-3">
          {navLinks.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              style={{ transitionDelay: menuOpen ? `${80 + i * 35}ms` : "0ms" }}
              className={cn(
                "border-b border-white/10 py-3 font-display text-2xl font-bold text-white transition-all duration-300 hover:text-gold",
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
              )}
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 space-y-4 border-t border-white/10 pt-6">
          <div className="text-xs text-slate-300">
            <p className="font-semibold text-gold">{brand.phone}</p>
            <p className="mt-1">{brand.email}</p>
          </div>
          <ButtonLink
            to="/contact"
            variant="solid"
            className="w-full rounded-xl bg-gold text-navy font-bold"
          >
            Contact Us
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}

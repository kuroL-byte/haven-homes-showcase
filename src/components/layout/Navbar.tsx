import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { brand, layout, navLinks } from "@/theme";
import { ButtonLink } from "@/components/common/Button";

/**
 * Minimalist transparent Navbar with Three-Line Menu Trigger and
 * all navigation links, contact details, and CTA inside the side drawer.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu when pathname changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when sidebar menu is open
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

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300 ease-out",
          scrolled
            ? "bg-black/60 py-3 sm:py-3.5 text-white shadow-md border-b border-white/10 backdrop-blur-[2px]"
            : "bg-transparent py-4 sm:py-5 text-white",
        )}
      >
        <div
          className={cn(
            layout.container,
            "flex items-center justify-between gap-4 w-full max-w-full",
          )}
        >
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="group flex items-center gap-2.5 sm:gap-3.5 leading-none shrink min-w-0"
            aria-label={`${brand.name} — home`}
          >
            <div className="grid size-9 sm:size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#f3e5ab] via-[#d4af37] to-[#aa820a] font-display font-black text-[#080c14] text-lg sm:text-xl shadow-md transition-transform duration-300 group-hover:scale-105">
              P
            </div>
            <div className="min-w-0 shrink">
              <span className="block font-display text-lg sm:text-2xl font-extrabold tracking-tight text-white group-hover:text-amber-400 transition-colors truncate drop-shadow">
                PARJANE <span className="font-light text-gradient-gold">BUILDCON</span>
              </span>
              <span className="mt-0.5 block text-[8px] sm:text-[9px] uppercase tracking-widest font-medium text-slate-200 truncate drop-shadow">
                Building Tomorrow's Landmarks
              </span>
            </div>
          </Link>

          {/* Right Action Controls: Three-lines Menu Button Only */}
          <div className="flex items-center">
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              className="group flex items-center gap-2.5 rounded-xl border border-white/25 bg-black/35 backdrop-blur-[2px] px-4 py-2 text-white transition-all duration-300 hover:border-amber-400 hover:bg-amber-400 hover:text-[#080c14] cursor-pointer shadow-lg"
            >
              <span className="flex flex-col justify-center gap-1">
                <span className="block h-0.5 w-4 bg-current transition-transform group-hover:scale-x-110 origin-left" />
                <span className="block h-0.5 w-3.5 bg-current transition-transform group-hover:scale-x-110 origin-left" />
                <span className="block h-0.5 w-4 bg-current transition-transform group-hover:scale-x-110 origin-left" />
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar Overlay Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
        className={cn(
          "fixed inset-0 z-50 bg-black/70 backdrop-blur-[2px] transition-opacity duration-400 ease-out",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      />

      {/* Sidebar Navigation Drawer (Everything in it) */}
      <aside
        aria-label="Sidebar Navigation"
        aria-hidden={!menuOpen}
        className={cn(
          "fixed top-0 right-0 z-50 flex h-[100dvh] w-full max-w-[420px] flex-col justify-between border-l border-amber-500/30 bg-[#0a0f1d]/95 backdrop-blur-[2px] p-6 sm:p-8 text-white shadow-2xl transition-transform duration-400 ease-out overflow-y-auto",
          menuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Drawer Header */}
        <div>
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div className="flex items-center gap-2.5">
              <div className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-[#f3e5ab] via-[#d4af37] to-[#aa820a] font-display font-black text-[#080c14] text-base shadow">
                P
              </div>
              <span className="font-display text-lg font-extrabold tracking-tight text-white">
                PARJANE <span className="text-gradient-gold font-light">BUILDCON</span>
              </span>
            </div>

            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation sidebar"
              className="flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-1.5 text-xs uppercase font-semibold text-slate-300 hover:border-amber-400 hover:bg-amber-400 hover:text-[#080c14] transition-all cursor-pointer"
            >
              <span>✕</span>
              <span>Close</span>
            </button>
          </div>

          <p className="eyebrow text-amber-400 mt-6 mb-3 text-[10px] tracking-[0.25em] font-bold">Navigation</p>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="group flex items-center justify-between rounded-xl px-3.5 py-3 transition-all duration-300 hover:bg-white/5"
                activeProps={{ className: "bg-amber-500/10 border-l-2 border-amber-400 text-amber-400 font-bold" }}
                activeOptions={{ exact: link.to === "/" }}
              >
                <div className="flex items-center gap-3.5">
                  <span className="text-xs font-mono text-amber-400/70 group-hover:text-amber-400 transition-colors">
                    0{i + 1}.
                  </span>
                  <span className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 group-hover:translate-x-1 transition-all">
                    {link.label}
                  </span>
                </div>
                <span className="text-xs text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1.5 transition-all">
                  →
                </span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Drawer Footer / Contact & Booking */}
        <div className="mt-8 space-y-4 border-t border-white/10 pt-6">
          <div className="space-y-1 text-xs text-slate-300">
            <p className="eyebrow text-amber-400 text-[10px] font-bold">Head Office</p>
            <p className="font-medium text-white">{brand.address[0]}</p>
            <p className="text-slate-400">{brand.address[1]}</p>
            <p className="pt-1.5 font-semibold text-amber-400">
              📞 <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="hover:underline">{brand.phone}</a>
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            {brand.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-[10px] uppercase font-bold tracking-widest text-slate-400 hover:text-amber-400 transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>

          <ButtonLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            variant="solid"
            className="w-full justify-center rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c59b27] py-3 text-center text-xs uppercase tracking-wider font-extrabold text-[#080c14] shadow-lg transition-all hover:scale-[1.02]"
          >
            Schedule Site Tour
          </ButtonLink>
        </div>
      </aside>
    </>
  );
}

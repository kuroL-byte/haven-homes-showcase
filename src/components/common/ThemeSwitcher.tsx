import { useState, useEffect, useRef } from "react";
import { useTheme, THEMES, type ThemeId } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

export function ThemeSwitcher({ className }: { className?: string }) {
  const { theme, setTheme, activeThemeConfig } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className={cn("relative inline-block text-left", className)} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Select Theme"
        aria-expanded={isOpen}
        className="group flex items-center gap-2.5 rounded-full border border-gold/30 bg-navy/80 px-3.5 py-1.5 text-xs font-semibold text-white shadow-md backdrop-blur-md transition-all hover:border-gold hover:bg-navy hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold"
      >
        <div className="flex items-center gap-1">
          <span
            className="size-3 rounded-full border border-white/30 shadow-inner transition-transform group-hover:scale-110"
            style={{ backgroundColor: activeThemeConfig.colors.accent }}
          />
          <span
            className="size-2.5 rounded-full border border-white/20 transition-transform group-hover:scale-110"
            style={{ backgroundColor: activeThemeConfig.colors.primary }}
          />
        </div>
        <span className="hidden sm:inline font-medium tracking-wide text-slate-200 group-hover:text-gold transition-colors">
          Theme: <span className="font-bold text-white">{activeThemeConfig.name.split(" ")[0]}</span>
        </span>
        <svg
          className={cn(
            "size-3.5 text-gold transition-transform duration-300",
            isOpen ? "rotate-180" : "rotate-0",
          )}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Theme Picker Drawer Modal */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-3 z-50 w-[92vw] max-w-[560px] origin-top-right rounded-2xl border border-gold/30 bg-navy/95 p-5 text-white shadow-2xl backdrop-blur-2xl transition-all duration-200 sm:w-[560px]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <h3 className="font-display text-base font-bold tracking-tight text-white flex items-center gap-2">
                <span>🎨</span> Architectural Themes
                <span className="rounded-full bg-gold/20 px-2 py-0.5 text-[10px] uppercase font-bold tracking-widest text-gold">
                  8 Presets
                </span>
              </h3>
              <p className="mt-0.5 text-xs text-slate-300">
                Choose a minimal design theme to customize your viewing experience.
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1.5 text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
              aria-label="Close theme picker"
            >
              <svg className="size-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Themes Grid */}
          <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 max-h-[60vh] overflow-y-auto pr-1">
            {THEMES.map((t) => {
              const isActive = t.id === theme;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => {
                    setTheme(t.id);
                  }}
                  className={cn(
                    "group relative flex flex-col justify-between rounded-xl border p-3.5 text-left transition-all duration-200 hover:scale-[1.02]",
                    isActive
                      ? "border-gold bg-white/10 shadow-lg ring-1 ring-gold"
                      : "border-white/10 bg-white/5 hover:border-gold/50 hover:bg-white/10",
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-xs font-bold text-white group-hover:text-gold transition-colors">
                        {t.name}
                      </span>
                      {isActive ? (
                        <span className="flex size-4 items-center justify-center rounded-full bg-gold text-[10px] text-navy font-black shadow">
                          ✓
                        </span>
                      ) : (
                        <span className="text-[10px] uppercase font-semibold text-slate-400">
                          {t.subtitle}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-[11px] leading-tight text-slate-300 line-clamp-1">
                      {t.vibe}
                    </p>
                  </div>

                  {/* Swatch preview bar */}
                  <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2">
                    <div className="flex items-center gap-1.5">
                      <span
                        className="size-4 rounded-full border border-white/20 shadow-xs"
                        style={{ backgroundColor: t.colors.primary }}
                        title="Primary Color"
                      />
                      <span
                        className="size-4 rounded-full border border-white/20 shadow-xs"
                        style={{ backgroundColor: t.colors.accent }}
                        title="Accent Color"
                      />
                      <span
                        className="size-4 rounded-full border border-white/20 shadow-xs"
                        style={{ backgroundColor: t.colors.background }}
                        title="Background"
                      />
                      <span
                        className="size-4 rounded-full border border-white/20 shadow-xs"
                        style={{ backgroundColor: t.colors.card }}
                        title="Surface/Card"
                      />
                    </div>
                    {isActive && (
                      <span className="text-[9px] uppercase font-extrabold tracking-wider text-gold">
                        Active
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="mt-4 border-t border-white/10 pt-3 text-center text-[10px] font-medium text-slate-300">
            Selected theme is automatically saved to your browser settings.
          </div>
        </div>
      )}
    </div>
  );
}

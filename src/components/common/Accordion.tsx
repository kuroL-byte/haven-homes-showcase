import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  title: string;
  content: ReactNode;
}

/** Luxury disclosure list with smooth animations and gold accents. */
export function Accordion({ items, className }: { items: AccordionItem[]; className?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const num = String(i + 1).padStart(2, "0");
        return (
          <div
            key={item.title}
            className={cn(
              "rounded-2xl border transition-all duration-300 overflow-hidden",
              isOpen
                ? "border-amber-400/50 bg-black/25 backdrop-blur-[2px] shadow-[0_8px_24px_rgba(212,175,55,0.08)]"
                : "border-white/10 bg-black/10 backdrop-blur-[2px] hover:border-white/20 hover:bg-black/20",
            )}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-3.5 sm:gap-4.5 min-w-0">
                <span className="font-display text-sm sm:text-base font-extrabold text-amber-400 shrink-0">
                  {num}
                </span>
                <span
                  className={cn(
                    "font-display text-base sm:text-lg font-bold leading-snug transition-colors drop-shadow-sm truncate",
                    isOpen ? "text-amber-300" : "text-white hover:text-amber-200",
                  )}
                >
                  {item.title}
                </span>
              </div>
              <span
                aria-hidden
                className={cn(
                  "grid size-8 place-items-center rounded-xl border border-amber-400/40 bg-amber-500/15 text-amber-300 text-sm font-black transition-transform duration-300 shrink-0 shadow-sm",
                  isOpen && "rotate-45 bg-gradient-to-br from-[#f3e5ab] to-[#d4af37] text-[#080c14] border-transparent shadow-[0_0_12px_rgba(212,175,55,0.4)]",
                )}
              >
                +
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <div className="border-t border-white/10 px-5 sm:px-6 pt-4 pb-6 text-xs sm:text-sm font-medium leading-relaxed text-slate-100 drop-shadow-sm max-w-3xl">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

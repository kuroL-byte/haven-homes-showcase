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
    <div className={cn("divide-y divide-white/10", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.title}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors duration-300 hover:text-amber-400 text-white cursor-pointer"
            >
              <span className="font-display text-base sm:text-lg font-bold leading-snug">{item.title}</span>
              <span
                aria-hidden
                className={cn(
                  "grid size-8 place-items-center rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 text-sm font-bold transition-transform duration-300 shrink-0",
                  isOpen && "rotate-45 bg-amber-400 text-[#080c14]",
                )}
              >
                +
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <div className="max-w-2xl pb-6 text-xs sm:text-sm font-normal leading-relaxed text-slate-300">
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

import { useEffect, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Lightweight overlay modal used by the gallery lightbox and calculator tools. */
export function Modal({
  open,
  onClose,
  children,
  label = "Dialog",
  className,
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  label?: string;
  className?: string;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
    >
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 animate-[fade-in_0.4s_ease-out] bg-navy/92 backdrop-blur-md"
      />
      <div
        className={cn("relative z-10 w-full max-w-5xl animate-[scale-in_0.4s_ease-out]", className)}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute -top-10 right-0 cursor-pointer rounded-full bg-navy/80 border border-gold/40 px-4 py-1 text-[11px] font-bold uppercase tracking-[0.24em] text-gold transition-all hover:bg-gold hover:text-navy shadow-lg"
        >
          Close ✕
        </button>
        {children}
      </div>
    </div>
  );
}

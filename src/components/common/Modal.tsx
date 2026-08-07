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
        className="absolute inset-0 animate-[fade-in_0.4s_ease-out] bg-ink/92 backdrop-blur-sm"
      />
      <div
        className={cn("relative z-10 w-full max-w-5xl animate-[scale-in_0.4s_ease-out]", className)}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute -top-12 right-0 cursor-pointer text-[11px] uppercase tracking-[0.24em] text-ivory/70 transition-colors hover:text-ivory"
        >
          Close ✕
        </button>
        {children}
      </div>
    </div>
  );
}

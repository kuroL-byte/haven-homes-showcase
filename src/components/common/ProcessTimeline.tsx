import { useState } from "react";
import { processSteps } from "@/data/content";
import { AnimatedSection } from "./AnimatedSection";
import { cn } from "@/lib/utils";

export function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <div className="w-full">
      {/* Desktop Horizontal Connecting Line & Indicators */}
      <div className="relative hidden lg:block">
        {/* Background Connecting Line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 bg-slate-200" />

        {/* Active Progress Line */}
        <div
          className="absolute top-1/2 left-0 h-0.5 -translate-y-1/2 bg-gold transition-all duration-700 ease-out"
          style={{ width: `${(activeStep / (processSteps.length - 1)) * 100}%` }}
        />

        <div className="relative grid grid-cols-6 gap-4 text-center">
          {processSteps.map((s, i) => {
            const isActive = activeStep === i;
            const isPassed = activeStep >= i;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStep(i)}
                className="group relative flex flex-col items-center cursor-pointer focus:outline-none"
              >
                {/* Node circle */}
                <div
                  className={cn(
                    "relative z-10 grid size-14 place-items-center rounded-2xl border-2 font-display text-sm font-bold transition-all duration-500",
                    isActive
                      ? "border-gold bg-navy text-gold shadow-lg shadow-gold/20 scale-110"
                      : isPassed
                        ? "border-gold bg-gold text-navy font-semibold"
                        : "border-slate-300 bg-white text-slate-400 group-hover:border-gold/60 group-hover:text-slate-600",
                  )}
                >
                  {s.step}
                </div>

                <span
                  className={cn(
                    "mt-4 font-display text-sm font-bold transition-colors duration-300",
                    isActive ? "text-navy" : "text-slate-600 group-hover:text-gold",
                  )}
                >
                  {s.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Step Detail Card */}
      <div className="mt-12">
        <AnimatedSection
          key={activeStep}
          variant="scale"
          className="rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50 p-8 shadow-xl sm:p-10"
        >
          <div className="grid gap-6 lg:grid-cols-[auto_1fr_auto] lg:items-center">
            <div className="grid size-16 place-items-center rounded-2xl bg-navy font-display text-2xl font-bold text-gold">
              {processSteps[activeStep]?.step}
            </div>

            <div>
              <p className="eyebrow">Phase {activeStep + 1} of 6</p>
              <h3 className="mt-1 font-display text-2xl font-bold text-navy">
                {processSteps[activeStep]?.title}
              </h3>
              <p className="mt-2 text-base font-light text-slate-600">
                {processSteps[activeStep]?.body}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                className="grid size-11 place-items-center rounded-xl border border-slate-200 text-slate-700 transition-all hover:border-gold hover:text-gold disabled:opacity-30 cursor-pointer"
                aria-label="Previous phase"
              >
                ←
              </button>
              <button
                disabled={activeStep === processSteps.length - 1}
                onClick={() => setActiveStep((prev) => Math.min(processSteps.length - 1, prev + 1))}
                className="grid size-11 place-items-center rounded-xl border border-slate-200 text-slate-700 transition-all hover:border-gold hover:text-gold disabled:opacity-30 cursor-pointer"
                aria-label="Next phase"
              >
                →
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Mobile Vertical Accordion-style Steps */}
      <div className="mt-8 space-y-4 lg:hidden">
        {processSteps.map((s, i) => (
          <div
            key={s.step}
            onClick={() => setActiveStep(i)}
            className={cn(
              "rounded-2xl border p-5 transition-all cursor-pointer",
              activeStep === i
                ? "border-gold bg-navy text-white shadow-lg"
                : "border-slate-200 bg-white text-slate-800",
            )}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "font-display text-sm font-bold",
                    activeStep === i ? "text-gold" : "text-slate-400",
                  )}
                >
                  {s.step}
                </span>
                <span className="font-display font-bold text-base">{s.title}</span>
              </div>
              <span className="text-xs">{activeStep === i ? "▲" : "▼"}</span>
            </div>
            {activeStep === i && (
              <p className="mt-3 text-xs font-light text-slate-300 leading-relaxed">{s.body}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

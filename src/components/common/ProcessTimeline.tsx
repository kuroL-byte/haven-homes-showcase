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
        <div className="absolute top-6 left-10 right-10 h-0.5 bg-white/10" />

        {/* Active Progress Line */}
        <div
          className="absolute top-6 left-10 h-0.5 bg-gradient-to-r from-amber-400 to-amber-200 transition-all duration-700 ease-out"
          style={{ width: `${(activeStep / (processSteps.length - 1)) * 84}%` }}
        />

        <div className="relative grid grid-cols-6 gap-3 text-center">
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
                    "relative z-10 grid size-12 place-items-center rounded-xl border-2 font-display text-xs font-bold transition-all duration-400",
                    isActive
                      ? "border-amber-400 bg-black/60 text-amber-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105"
                      : isPassed
                        ? "border-amber-400/80 bg-amber-400 text-[#080c14] font-bold"
                        : "border-white/15 bg-black/25 text-slate-400 group-hover:border-amber-400/50 group-hover:text-white",
                  )}
                >
                  {s.step}
                </div>

                <span
                  className={cn(
                    "mt-3 font-display text-xs font-medium transition-colors duration-300 line-clamp-1",
                    isActive ? "text-amber-300 font-bold" : "text-slate-400 group-hover:text-white",
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
      <div className="mt-6 lg:mt-8">
        <AnimatedSection
          key={activeStep}
          variant="scale"
          className="rounded-2xl border border-white/10 bg-black/25 backdrop-blur-xl p-5 sm:p-7 shadow-xl"
        >
          <div className="grid gap-5 lg:grid-cols-[auto_1fr_auto] lg:items-center">
            <div className="grid size-14 place-items-center rounded-xl bg-gradient-to-br from-[#d4af37] to-[#aa820a] font-display text-xl font-bold text-[#080c14] shadow-md shadow-amber-500/15">
              {processSteps[activeStep]?.step}
            </div>

            <div>
              <p className="eyebrow text-amber-400 text-[11px] font-bold">Phase {activeStep + 1} of 6</p>
              <h3 className="mt-1 font-display text-lg sm:text-xl font-semibold text-white drop-shadow-sm">
                {processSteps[activeStep]?.title}
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm font-normal leading-relaxed text-slate-300">
                {processSteps[activeStep]?.body}
              </p>
            </div>

            <div className="flex gap-2 shrink-0">
              <button
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                className="grid size-9 place-items-center rounded-lg border border-white/15 bg-black/25 text-slate-300 transition-all hover:border-amber-400 hover:text-amber-400 disabled:opacity-20 cursor-pointer"
                aria-label="Previous phase"
              >
                ←
              </button>
              <button
                disabled={activeStep === processSteps.length - 1}
                onClick={() => setActiveStep((prev) => Math.min(processSteps.length - 1, prev + 1))}
                className="grid size-9 place-items-center rounded-lg border border-white/15 bg-black/25 text-slate-300 transition-all hover:border-amber-400 hover:text-amber-400 disabled:opacity-20 cursor-pointer"
                aria-label="Next phase"
              >
                →
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

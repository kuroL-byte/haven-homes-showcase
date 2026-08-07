import { useState } from "react";
import { cn } from "@/lib/utils";

export interface PlanVariant {
  title: string;
  type: string;
  carpetArea: string;
  balconyArea: string;
  exposure: string;
  description: string;
  specs: { label: string; value: string }[];
}

const defaultPlans: PlanVariant[] = [
  {
    title: "Typical Full-Floor Residence",
    type: "4 Bedroom + Family Lounge",
    carpetArea: "5,400 sq. ft.",
    balconyArea: "680 sq. ft. wraparound deck",
    exposure: "North, South, East & West (360°)",
    description:
      "Spans an entire tower level with a private elevator foyer, 11 ft. finished floor-to-ceiling height, and dual service entry.",
    specs: [
      { label: "Master Suite", value: "850 sq. ft. with walk-in dressing room" },
      { label: "Living & Dining", value: "1,200 sq. ft. contiguous gallery" },
      { label: "Staff Quarters", value: "2 en-suite rooms with separate lift" },
      { label: "Parking Bays", value: "4 dedicated EV-ready basement slots" },
    ],
  },
  {
    title: "Garden Duplex Residence",
    type: "5 Bedroom + Private Lap Pool",
    carpetArea: "7,200 sq. ft.",
    balconyArea: "1,800 sq. ft. private garden & pool deck",
    exposure: "East & South water court view",
    description:
      "Ground and first level residence organized around a double-height courtyard and a heated plunge pool.",
    specs: [
      { label: "Private Pool", value: "12m x 3.5m heated infinity pool" },
      { label: "Court Height", value: "22 ft. double-height glass wall" },
      { label: "Kitchen", value: "Chef's show kitchen + separate wet kitchen" },
      { label: "Parking Bays", value: "5 basement slots + private storage room" },
    ],
  },
  {
    title: "Sky Penthouse",
    type: "5 Bedroom Sky Villa",
    carpetArea: "8,800 sq. ft.",
    balconyArea: "2,400 sq. ft. roof terrace",
    exposure: "Panoramic ocean & city skyline",
    description:
      "Top two levels featuring a private roof deck, outdoor fireplace, and glass-walled pavilion.",
    specs: [
      { label: "Roof Pavilion", value: "Private sky lounge & observatory" },
      { label: "Ceiling Height", value: "13.5 ft. clear height" },
      { label: "Private Lift", value: "Dedicated high-speed card access elevator" },
      { label: "Parking Bays", value: "6 basement slots" },
    ],
  },
];

const samplePlansMap: Record<string, PlanVariant[]> = {
  "Meridian House": defaultPlans,
  "The Stone Court": defaultPlans,
  "Meridian Exchange": defaultPlans,
  "The Ridge Villas": defaultPlans,
};

export function FloorPlanViewer({ projectName }: { projectName: string }) {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const plans = samplePlansMap[projectName] ?? defaultPlans;
  const current: PlanVariant = (plans[activeIdx] ?? plans[0] ?? defaultPlans[0]) as PlanVariant;

  return (
    <div className="border border-border bg-card p-6 sm:p-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="eyebrow">Architectural Layouts</p>
          <h3 className="font-display text-2xl sm:text-3xl">Interactive Floor Plans</h3>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap gap-2">
          {plans.map((p, i) => (
            <button
              key={p.title}
              onClick={() => setActiveIdx(i)}
              className={cn(
                "border px-4 py-2 text-[11px] uppercase tracking-[0.2em] transition-all duration-500 cursor-pointer",
                activeIdx === i
                  ? "border-bronze bg-bronze text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-bronze/50 hover:text-foreground",
              )}
            >
              {p.title}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        {/* Schematic Layout Card */}
        <div className="relative flex flex-col justify-between border border-border bg-secondary/50 p-8 min-h-[340px]">
          <div className="flex justify-between items-start">
            <div>
              <span className="inline-block border border-bronze/40 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-bronze">
                {current.type}
              </span>
              <h4 className="mt-4 font-display text-2xl">{current.title}</h4>
            </div>
            <div className="text-right">
              <p className="font-display text-3xl text-bronze">{current.carpetArea}</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Carpet Area
              </p>
            </div>
          </div>

          {/* Graphical Schematic Diagram Placeholder */}
          <div className="my-8 relative flex h-48 w-full items-center justify-center border border-dashed border-bronze/30 bg-background/80 p-6 text-center">
            <div className="space-y-2">
              <svg
                className="mx-auto h-10 w-10 text-bronze/60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0H7m4 0h4m0 0v10"
                />
              </svg>
              <p className="font-display text-lg text-foreground">{current.type}</p>
              <p className="text-xs text-muted-foreground">
                Deck: {current.balconyArea} • Orientation: {current.exposure}
              </p>
            </div>
          </div>

          <p className="text-xs font-light leading-relaxed text-muted-foreground">
            {current.description}
          </p>
        </div>

        {/* Specifications List */}
        <div className="flex flex-col justify-between border border-border p-6 sm:p-8">
          <div>
            <p className="eyebrow mb-4">Key Metrics</p>
            <dl className="divide-y divide-border">
              {current.specs.map((s) => (
                <div key={s.label} className="py-3">
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {s.label}
                  </dt>
                  <dd className="mt-1 text-sm font-light">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-8 border-t border-border pt-6 text-xs font-light text-muted-foreground">
            <p>
              * Certified as-built CAD drawings and MEP schematics available upon NDA execution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

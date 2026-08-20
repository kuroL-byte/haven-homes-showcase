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
  "Parjane Heights": defaultPlans,
  "Parjane One Corporate Tower": [
    {
      title: "Full Floor Corporate Office",
      type: "Grade-A Office Plate",
      carpetArea: "28,000 sq. ft.",
      balconyArea: "1,200 sq. ft. executive breakout terrace",
      exposure: "North & East BKC skyline view",
      description:
        "Column-free floor plate with 4.2m clear height, central HVAC, and 8 high-speed smart elevators.",
      specs: [
        { label: "Executive Bay", value: "Corner MD suites with private washrooms" },
        { label: "Conference Room", value: "30-seat board room provision" },
        { label: "Power Capacity", value: "100% 1:1 DG power backup" },
        { label: "Parking Slots", value: "24 dedicated basement EV slots" },
      ],
    },
    {
      title: "Duplex Headquarters Unit",
      type: "Executive Office Suite",
      carpetArea: "18,500 sq. ft.",
      balconyArea: "850 sq. ft. sky terrace",
      exposure: "360° Financial District View",
      description:
        "Interconnected internal stairs, double-height reception lobby, and private CEO lounge.",
      specs: [
        { label: "Lobby Height", value: "24 ft. grand internal atrium" },
        { label: "FACADE", value: "Acoustic low-E double glass" },
        { label: "Green Cert", value: "LEED Platinum targeted" },
      ],
    },
  ],
  "Parjane Horizon Twin Towers": defaultPlans,
  "Parjane Crest Estate": defaultPlans,
  "Parjane Bayfront Supertall": defaultPlans,
  "The Parjane Sanctuary": defaultPlans,
  "Parjane Grandeur": defaultPlans,
};

export function FloorPlanViewer({ projectName }: { projectName: string }) {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const plans = samplePlansMap[projectName] ?? defaultPlans;
  const current: PlanVariant = (plans[activeIdx] ?? plans[0] ?? defaultPlans[0]) as PlanVariant;

  return (
    <div className="border border-slate-200 rounded-3xl bg-white p-6 sm:p-10 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="eyebrow text-gold font-bold">Architectural Layouts</p>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy">
            Interactive Floor Plans
          </h3>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap gap-2">
          {plans.map((p, i) => (
            <button
              key={p.title}
              onClick={() => setActiveIdx(i)}
              className={cn(
                "rounded-xl border px-4 py-2 text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 cursor-pointer",
                activeIdx === i
                  ? "border-gold bg-gold text-navy shadow-md"
                  : "border-slate-200 text-slate-600 hover:border-gold/50 hover:text-navy",
              )}
            >
              {p.title}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        {/* Schematic Layout Card */}
        <div className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-8 min-h-[340px]">
          <div className="flex justify-between items-start">
            <div>
              <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] font-bold text-gold">
                {current.type}
              </span>
              <h4 className="mt-4 font-display text-2xl font-bold text-navy">{current.title}</h4>
            </div>
            <div className="text-right">
              <p className="font-display text-3xl font-bold text-gold">{current.carpetArea}</p>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
                Carpet Area
              </p>
            </div>
          </div>

          {/* Graphical Schematic Diagram Placeholder */}
          <div className="my-8 relative flex h-48 w-full items-center justify-center rounded-2xl border border-dashed border-gold/40 bg-white p-6 text-center shadow-inner">
            <div className="space-y-2">
              <svg
                className="mx-auto h-10 w-10 text-gold"
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

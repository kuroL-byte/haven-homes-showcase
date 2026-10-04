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
    <div className="border border-white/10 rounded-2xl bg-black/25 backdrop-blur-xl p-5 sm:p-7 shadow-xl text-white">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="eyebrow text-amber-400 font-bold text-[10px]">Architectural Layouts</p>
          <h3 className="font-display text-lg sm:text-xl font-semibold text-white drop-shadow-sm">
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
                "rounded-xl border px-3.5 py-1.5 text-[11px] uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer",
                activeIdx === i
                  ? "border-amber-400 bg-amber-400 text-[#080c14] font-bold shadow-md"
                  : "border-white/10 bg-black/20 text-slate-300 hover:border-amber-400/50 hover:text-white",
              )}
            >
              {p.title}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        {/* Schematic Layout Card */}
        <div className="relative flex flex-col justify-between rounded-xl border border-white/10 bg-black/25 backdrop-blur-md p-5 sm:p-6 min-h-[300px] shadow-md">
          <div className="flex justify-between items-start">
            <div>
              <span className="inline-block rounded-full border border-amber-400/30 bg-amber-500/10 px-2.5 py-0.5 text-[9px] uppercase tracking-wider font-bold text-amber-300">
                {current.type}
              </span>
              <h4 className="mt-3 font-display text-lg sm:text-xl font-semibold text-white drop-shadow-sm">{current.title}</h4>
            </div>
            <div className="text-right">
              <p className="font-display text-xl sm:text-2xl font-bold text-amber-300">{current.carpetArea}</p>
              <p className="text-[9px] uppercase tracking-wider font-bold text-slate-400">
                Carpet Area
              </p>
            </div>
          </div>

          {/* Graphical Schematic Diagram */}
          <div className="my-6 relative flex h-40 w-full items-center justify-center rounded-xl border border-dashed border-amber-400/30 bg-black/20 p-5 text-center shadow-inner">
            <div className="space-y-1.5">
              <svg
                className="mx-auto h-8 w-8 text-amber-400"
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
              <p className="font-display text-base font-semibold text-white">{current.type}</p>
              <p className="text-xs text-slate-300">
                Deck: {current.balconyArea} • Orientation: {current.exposure}
              </p>
            </div>
          </div>

          <p className="text-xs font-normal leading-relaxed text-slate-300">
            {current.description}
          </p>
        </div>

        {/* Specifications List */}
        <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-black/25 backdrop-blur-md p-5 sm:p-6 shadow-md">
          <div>
            <p className="eyebrow text-amber-400 font-bold mb-3 text-[10px]">Key Metrics</p>
            <dl className="divide-y divide-white/10">
              {current.specs.map((s) => (
                <div key={s.label} className="py-2.5">
                  <dt className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                    {s.label}
                  </dt>
                  <dd className="mt-0.5 text-xs sm:text-sm font-semibold text-white">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-6 border-t border-white/10 pt-4 text-[11px] font-normal text-slate-400">
            <p>
              * Certified as-built CAD drawings and MEP schematics available upon NDA execution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

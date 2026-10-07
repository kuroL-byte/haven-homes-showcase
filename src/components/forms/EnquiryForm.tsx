import { useState } from "react";
import { Button } from "@/components/common/Button";
import { projects } from "@/data/content";
import { toast } from "sonner";

export function EnquiryForm({
  defaultProject,
  compact = false,
}: {
  defaultProject?: string;
  compact?: boolean;
}) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const field =
    "h-10 sm:h-11 w-full rounded-xl border border-white/15 bg-black/25 px-3.5 text-xs sm:text-sm text-white font-medium outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-amber-400 focus:bg-black/35 focus:ring-1 focus:ring-amber-400";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      toast.success("Enquiry received! A senior relationship director will contact you shortly.");
    }, 400);
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-amber-400/40 bg-black/30 backdrop-blur-[2px] p-6 sm:p-8 text-center shadow-2xl text-white">
        <span className="grid size-12 place-items-center rounded-full bg-amber-400/20 text-amber-400 text-2xl mx-auto mb-3 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
          ✓
        </span>
        <p className="eyebrow text-amber-300 font-bold text-[10px]">Enquiry Confirmed</p>
        <p className="mt-1.5 font-display text-lg sm:text-xl font-bold text-white drop-shadow-sm">Thank you for writing to us.</p>
        <p className="mt-2 text-xs sm:text-sm font-medium text-slate-100 drop-shadow-sm">
          A dedicated member of the Parjane Buildcon advisory board will respond within 2 hours.
        </p>
        <Button
          type="button"
          variant="solid"
          size="sm"
          className="mt-5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#fce79a] to-[#c59b27] text-[#080c14] font-bold text-xs shadow-md"
          onClick={() => setSent(false)}
        >
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form className="space-y-3.5" onSubmit={handleSubmit}>
      <div className={compact ? "space-y-3" : "grid gap-3 sm:grid-cols-2"}>
        <div>
          <label htmlFor="ef-name" className="block text-[10px] font-bold uppercase tracking-wider text-amber-300 mb-1 drop-shadow-sm">
            Full Name
          </label>
          <input id="ef-name" required className={field} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="ef-email" className="block text-[10px] font-bold uppercase tracking-wider text-amber-300 mb-1 drop-shadow-sm">
            Email Address
          </label>
          <input
            id="ef-email"
            type="email"
            required
            className={field}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="ef-phone" className="block text-[10px] font-bold uppercase tracking-wider text-amber-300 mb-1 drop-shadow-sm">
            Phone Number
          </label>
          <input
            id="ef-phone"
            type="tel"
            required
            className={field}
            placeholder="+91 98000 00000"
          />
        </div>
        <div>
          <label htmlFor="ef-project" className="block text-[10px] font-bold uppercase tracking-wider text-amber-300 mb-1 drop-shadow-sm">
            Landmark Interest
          </label>
          <select id="ef-project" defaultValue={defaultProject ?? ""} className={`${field} cursor-pointer`}>
            <option value="">Select a landmark</option>
            {projects.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name} ({p.location})
              </option>
            ))}
            <option value="Other">General Real Estate Enquiry</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="ef-message" className="block text-[10px] font-bold uppercase tracking-wider text-amber-300 mb-1 drop-shadow-sm">
          Your Message &amp; Requirements
        </label>
        <textarea
          id="ef-message"
          rows={3}
          className="w-full rounded-xl border border-white/15 bg-black/25 p-3 text-xs sm:text-sm font-medium text-white outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-amber-400 focus:bg-black/35 focus:ring-1 focus:ring-amber-400"
          placeholder="Specify preferred configuration, budget, or preferred site tour date."
        />
      </div>

      <Button
        type="submit"
        size="sm"
        disabled={loading}
        className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-[#d4af37] via-[#fce79a] to-[#c59b27] text-[#080c14] font-bold text-xs uppercase tracking-wider shadow-md hover:scale-[1.02] transition-transform"
      >
        {loading ? "Sending..." : "Submit Enquiry Request →"}
      </Button>
    </form>
  );
}

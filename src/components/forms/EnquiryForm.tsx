import { useState } from "react";
import { Button } from "@/components/common/Button";
import { projects } from "@/data/content";
import { toast } from "sonner";

/** Reusable enquiry form. Client-side only — wire to a backend when ready. */
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
    "h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-navy font-normal outline-none transition-colors duration-300 placeholder:text-slate-400 focus:border-gold focus:ring-1 focus:ring-gold";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      toast.success("Enquiry received! A member of the residences team will contact you shortly.");
    }, 400);
  };

  if (sent) {
    return (
      <div className="rounded-3xl border border-gold/40 bg-white p-10 text-center shadow-md">
        <p className="eyebrow text-gold font-bold">Received</p>
        <p className="mt-4 font-display text-2xl font-bold text-navy">Thank you for writing.</p>
        <p className="mt-3 text-sm font-normal text-slate-600">
          A member of the Parjane Buildcon team will respond within 2 hours.
        </p>
        <Button
          type="button"
          variant="solid"
          size="sm"
          className="mt-6 rounded-xl bg-gold text-navy font-bold"
          onClick={() => setSent(false)}
        >
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className={compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
        <div>
          <label htmlFor="ef-name" className="eyebrow text-gold font-bold">
            Name
          </label>
          <input id="ef-name" required className={`${field} mt-2`} placeholder="Full name" />
        </div>
        <div>
          <label htmlFor="ef-email" className="eyebrow text-gold font-bold">
            Email
          </label>
          <input
            id="ef-email"
            type="email"
            required
            className={`${field} mt-2`}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="ef-phone" className="eyebrow text-gold font-bold">
            Phone
          </label>
          <input
            id="ef-phone"
            type="tel"
            className={`${field} mt-2`}
            placeholder="+91 98000 00000"
          />
        </div>
        <div>
          <label htmlFor="ef-project" className="eyebrow text-gold font-bold">
            Project interest
          </label>
          <select id="ef-project" defaultValue={defaultProject ?? ""} className={`${field} mt-2`}>
            <option value="">Select a project</option>
            {projects.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
            <option value="Other">Something else</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="ef-message" className="eyebrow text-gold font-bold">
          Message
        </label>
        <textarea
          id="ef-message"
          rows={5}
          className="mt-2 w-full rounded-2xl border border-slate-200 bg-white p-4 text-sm font-normal text-navy outline-none transition-colors duration-300 placeholder:text-slate-400 focus:border-gold focus:ring-1 focus:ring-gold"
          placeholder="Tell us what you are looking for."
        />
      </div>

      <Button type="submit" size="lg" disabled={loading} className="w-full sm:w-auto">
        {loading ? "Sending..." : "Send enquiry"}
      </Button>
    </form>
  );
}

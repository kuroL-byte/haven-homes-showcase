import { useState } from "react";
import { Button } from "./Button";
import { projects } from "@/data/content";

/** Reusable enquiry form. Client-side only — wire to a backend when ready. */
export function EnquiryForm({
  defaultProject,
  compact = false,
}: {
  defaultProject?: string;
  compact?: boolean;
}) {
  const [sent, setSent] = useState(false);

  const field =
    "h-12 w-full border border-input bg-transparent px-4 text-sm font-light outline-none transition-colors duration-500 placeholder:text-muted-foreground focus:border-bronze";

  if (sent) {
    return (
      <div className="border border-border p-10 text-center">
        <p className="eyebrow">Received</p>
        <p className="mt-4 font-display text-2xl">Thank you for writing.</p>
        <p className="mt-3 text-sm font-light text-muted-foreground">
          A member of the residences team will respond within one working day.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className={compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
        <div>
          <label htmlFor="ef-name" className="eyebrow">
            Name
          </label>
          <input id="ef-name" required className={`${field} mt-2`} placeholder="Full name" />
        </div>
        <div>
          <label htmlFor="ef-email" className="eyebrow">
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
          <label htmlFor="ef-phone" className="eyebrow">
            Phone
          </label>
          <input id="ef-phone" type="tel" className={`${field} mt-2`} placeholder="+91" />
        </div>
        <div>
          <label htmlFor="ef-project" className="eyebrow">
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
        <label htmlFor="ef-message" className="eyebrow">
          Message
        </label>
        <textarea
          id="ef-message"
          rows={5}
          className="mt-2 w-full border border-input bg-transparent p-4 text-sm font-light outline-none transition-colors duration-500 placeholder:text-muted-foreground focus:border-bronze"
          placeholder="Tell us what you are looking for."
        />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Send enquiry
      </Button>
    </form>
  );
}

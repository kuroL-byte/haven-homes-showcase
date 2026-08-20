import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { brand, layout, navLinks } from "@/theme";
import { buyerGuideLinks } from "@/data/content";
import { Button } from "@/components/common/Button";
import { Hairline } from "@/components/common/Container";
import { LoanCalculatorModal } from "@/components/tools/LoanCalculatorModal";
import { toast } from "sonner";

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [calcOpen, setCalcOpen] = useState(false);

  const handleGuideClick = (linkName: string) => {
    if (linkName === "Loan calculator" || linkName === "Home loans") {
      setCalcOpen(true);
    }
  };

  return (
    <footer className="section-dark bg-navy border-t border-gold/20 text-white">
      <div className={layout.container}>
        <div className="grid gap-10 py-12 sm:py-20 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.4fr] lg:gap-10">
          {/* Brand Column */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-xl bg-gold font-display font-black text-navy text-xl shadow-md">
                P
              </div>
              <p className="font-display font-extrabold text-2xl tracking-tight text-white">
                PARJANE <span className="text-gold font-light">BUILDCON</span>
              </p>
            </div>

            <p className="mt-6 text-sm font-light leading-[1.85] text-slate-300">
              A premier luxury construction and real estate development company. Over 25 years of
              engineering excellence, structural safety, and unshakeable buyer trust.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold text-gold">
              <span className="rounded-lg bg-gold/10 border border-gold/30 px-3 py-1">
                ISO 9001:2015
              </span>
              <span className="rounded-lg bg-gold/10 border border-gold/30 px-3 py-1">
                RERA Registered
              </span>
            </div>

            <div className="mt-8 flex gap-5">
              {brand.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-reveal text-xs uppercase tracking-[0.2em] font-medium text-slate-400 hover:text-gold"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="eyebrow text-gold mb-6">Navigation</p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="link-reveal text-sm font-light text-slate-300 hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Buyer's Guide */}
          <div>
            <p className="eyebrow text-gold mb-6">Buyer Tools</p>
            <ul className="space-y-3">
              {buyerGuideLinks.map((l) => (
                <li key={l}>
                  {l === "Loan calculator" || l === "Home loans" ? (
                    <button
                      type="button"
                      onClick={() => handleGuideClick(l)}
                      className="link-reveal text-left text-sm font-light text-slate-300 hover:text-gold cursor-pointer"
                    >
                      {l} <span className="text-[10px] font-semibold text-gold">↗ EMI Tool</span>
                    </button>
                  ) : (
                    <Link
                      to="/contact"
                      className="link-reveal text-sm font-light text-slate-300 hover:text-white"
                    >
                      {l}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter & Map Link */}
          <div>
            <p className="eyebrow text-gold mb-6">Headquarters</p>
            <address className="space-y-2 text-sm font-light not-italic text-slate-300">
              {brand.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p className="pt-2 font-medium text-white">
                📞{" "}
                <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="link-reveal text-gold">
                  {brand.phone}
                </a>
              </p>
              <p>
                ✉️{" "}
                <a href={`mailto:${brand.email}`} className="link-reveal text-slate-200">
                  {brand.email}
                </a>
              </p>
            </address>

            <form
              className="mt-6"
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
                setEmail("");
                toast.success("Subscribed to Parjane Buildcon updates.");
              }}
            >
              <label htmlFor="footer-email" className="eyebrow text-gold text-[10px]">
                Stay Updated
              </label>
              <div className="mt-2 flex gap-2">
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Corporate Email"
                  className="h-11 min-w-0 flex-1 rounded-xl border border-white/20 bg-navy/80 px-4 text-sm outline-none placeholder:text-slate-500 focus:border-gold"
                />
                <Button
                  type="submit"
                  size="sm"
                  className="h-11 rounded-xl bg-gold text-navy font-bold shrink-0"
                >
                  Subscribe
                </Button>
              </div>
              {done && (
                <p className="mt-2 text-xs font-light text-gold">
                  Thank you — you've been added to our corporate list.
                </p>
              )}
            </form>
          </div>
        </div>

        <Hairline />

        <div className="flex flex-col gap-3 py-8 text-[11px] uppercase tracking-[0.18em] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {brand.name}. All rights reserved. Crafting Tomorrow's
            Landmarks.
          </p>
          <p className="flex gap-4">
            <span>MahaRERA Registered</span>
            <span>·</span>
            <span>Privacy Policy</span>
            <span>·</span>
            <span>Terms of Service</span>
          </p>
        </div>
      </div>

      <LoanCalculatorModal open={calcOpen} onClose={() => setCalcOpen(false)} />
    </footer>
  );
}

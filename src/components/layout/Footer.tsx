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
    <footer className="relative bg-black/45 backdrop-blur-2xl border-t border-amber-500/20 text-white">
      <div className={layout.container}>
        <div className="grid gap-10 py-14 sm:py-20 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:gap-10">
          {/* Brand Column */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-[#d4af37] to-[#aa820a] font-display font-black text-[#080c14] text-xl shadow-md">
                P
              </div>
              <p className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-white">
                PARJANE <span className="text-gradient-gold font-light">BUILDCON</span>
              </p>
            </div>

            <p className="mt-5 text-xs sm:text-sm font-light leading-relaxed text-slate-400">
              A premier luxury construction and real estate development company. Over 25 years of
              structural engineering precision, sustainable architecture, and unshakeable buyer trust.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-[11px] font-bold text-amber-400">
              <span className="rounded-lg bg-amber-500/10 border border-amber-500/30 px-3 py-1">
                ISO 9001:2015
              </span>
              <span className="rounded-lg bg-amber-500/10 border border-amber-500/30 px-3 py-1">
                MahaRERA Registered
              </span>
            </div>

            <div className="mt-6 flex gap-4">
              {brand.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs uppercase tracking-wider font-semibold text-slate-400 hover:text-amber-400 transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="eyebrow text-amber-400 mb-5 font-bold">Navigation</p>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-xs sm:text-sm font-normal text-slate-300 hover:text-amber-400 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Buyer's Tools */}
          <div>
            <p className="eyebrow text-amber-400 mb-5 font-bold">Buyer Tools</p>
            <ul className="space-y-2.5">
              {buyerGuideLinks.map((l) => (
                <li key={l}>
                  {l === "Loan calculator" || l === "Home loans" ? (
                    <button
                      type="button"
                      onClick={() => handleGuideClick(l)}
                      className="text-left text-xs sm:text-sm font-normal text-slate-300 hover:text-amber-400 transition-colors cursor-pointer"
                    >
                      {l} <span className="text-[10px] font-bold text-amber-400">↗ EMI Tool</span>
                    </button>
                  ) : (
                    <Link
                      to="/contact"
                      className="text-xs sm:text-sm font-normal text-slate-300 hover:text-amber-400 transition-colors"
                    >
                      {l}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Headquarters & Newsletter */}
          <div>
            <p className="eyebrow text-amber-400 mb-5 font-bold">Headquarters</p>
            <address className="space-y-1.5 text-xs sm:text-sm font-normal not-italic text-slate-300">
              {brand.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p className="pt-2 font-semibold text-white">
                📞{" "}
                <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="text-amber-400 hover:underline">
                  {brand.phone}
                </a>
              </p>
              <p>
                ✉️{" "}
                <a href={`mailto:${brand.email}`} className="text-slate-300 hover:text-amber-400">
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
              <label htmlFor="footer-email" className="block text-[10px] font-bold uppercase tracking-wider text-amber-400 mb-1.5">
                Stay Updated With Developments
              </label>
              <div className="flex gap-2">
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Corporate Email"
                  className="h-10 min-w-0 flex-1 rounded-xl border border-white/15 bg-[#0e1526] px-3.5 text-xs text-white outline-none placeholder:text-slate-500 focus:border-amber-400"
                />
                <Button
                  type="submit"
                  size="sm"
                  className="h-10 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#c59b27] text-[#080c14] font-bold text-xs uppercase shrink-0 shadow-md"
                >
                  Join
                </Button>
              </div>
              {done && (
                <p className="mt-2 text-xs font-medium text-amber-400">
                  Thank you — you have been added to our VIP release list.
                </p>
              )}
            </form>
          </div>
        </div>

        <Hairline />

        <div className="flex flex-col gap-3 py-6 text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {brand.name}. All rights reserved. Engineering Tomorrow's Landmarks.
          </p>
          <div className="flex flex-wrap gap-4 text-slate-400">
            <span>MahaRERA Compliance</span>
            <span>·</span>
            <span>Privacy Policy</span>
            <span>·</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>

      <LoanCalculatorModal open={calcOpen} onClose={() => setCalcOpen(false)} />
    </footer>
  );
}

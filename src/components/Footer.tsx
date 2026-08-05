import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { brand, layout, navLinks } from "@/theme";
import { buyerGuideLinks } from "@/data/content";
import { Button } from "./Button";
import { Hairline } from "./Container";

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="section-dark">
      <div className={layout.container}>
        <div className="grid gap-14 py-20 sm:py-24 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:gap-10">
          {/* Brand */}
          <div className="max-w-sm">
            <p className="font-display text-2xl uppercase tracking-[0.14em]">{brand.name}</p>
            <p className="mt-6 text-sm font-light leading-[1.9] text-muted-foreground">
              An architect-led development practice building a small number of considered
              residences and workplaces each decade. {brand.tagline}.
            </p>
            <div className="mt-8 flex gap-6">
              {brand.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-reveal text-[10px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="eyebrow mb-6">Navigate</p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="link-reveal text-sm font-light text-muted-foreground hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Buyer's guide */}
          <div>
            <p className="eyebrow mb-6">Buyer's guide</p>
            <ul className="space-y-3">
              {buyerGuideLinks.map((l) => (
                <li key={l}>
                  <Link
                    to="/contact"
                    className="link-reveal text-sm font-light text-muted-foreground hover:text-foreground"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + newsletter */}
          <div>
            <p className="eyebrow mb-6">Enquiries</p>
            <address className="space-y-2 text-sm font-light not-italic text-muted-foreground">
              {brand.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p className="pt-2">
                <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="link-reveal">
                  {brand.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${brand.email}`} className="link-reveal">
                  {brand.email}
                </a>
              </p>
            </address>

            <form
              className="mt-8"
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
                setEmail("");
              }}
            >
              <label htmlFor="footer-email" className="eyebrow">
                Newsletter
              </label>
              <div className="mt-3 flex gap-2">
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="h-11 min-w-0 flex-1 border border-border bg-transparent px-3 text-sm font-light outline-none transition-colors placeholder:text-muted-foreground focus:border-bronze"
                />
                <Button type="submit" size="sm" className="h-11 shrink-0">
                  Join
                </Button>
              </div>
              {done && (
                <p className="mt-3 text-xs font-light text-bronze">
                  Thank you — you're on the list.
                </p>
              )}
            </form>
          </div>
        </div>

        <Hairline />

        <div className="flex flex-col gap-3 py-8 text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <p>Privacy policy · Terms · RERA disclosures</p>
        </div>
      </div>
    </footer>
  );
}

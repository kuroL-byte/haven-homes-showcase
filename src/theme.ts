/**
 * Centralized brand & theme configuration for Parjane Buildcon.
 */

export const brand = {
  name: "Parjane Buildcon",
  tagline: "Building Tomorrow's Landmarks Today",
  phone: "+91 98220 12345",
  whatsapp: "919822012345",
  email: "contact@parjanebuildcon.com",
  address: ["Parjane Heights, Main Avenue, FC Road", "Pune 411004, Maharashtra, India"],
  hours: "Monday – Saturday · 09:30 – 19:00",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
} as const;

/** Shared layout rhythm */
export const layout = {
  container: "mx-auto w-full max-w-[1340px] px-6 sm:px-8 lg:px-12",
  containerNarrow: "mx-auto w-full max-w-[880px] px-6 sm:px-8",
  sectionY: "py-20 sm:py-28 lg:py-36",
  sectionYTight: "py-14 sm:py-20",
} as const;

/** Type scale used for headings across pages */
export const type = {
  hero: "font-display font-extrabold text-[clamp(2.75rem,6vw,5.5rem)] leading-[1.05] tracking-[-0.03em] text-navy",
  h1: "font-display font-bold text-[clamp(2.25rem,4.5vw,4rem)] leading-[1.08] tracking-[-0.02em] text-navy",
  h2: "font-display font-bold text-[clamp(1.85rem,3.5vw,3rem)] leading-[1.12] tracking-[-0.02em] text-navy",
  h3: "font-display font-semibold text-[clamp(1.35rem,2.2vw,1.85rem)] leading-[1.25] text-navy",
  body: "text-[15px] sm:text-[16px] leading-[1.8] font-normal text-slate-600",
  eyebrow: "eyebrow",
} as const;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Amenities", to: "/amenities" },
  { label: "Gallery", to: "/gallery" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Insights", to: "/blog" },
  { label: "Contact", to: "/contact" },
] as const;

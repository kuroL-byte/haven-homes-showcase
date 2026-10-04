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

/** Shared layout rhythm — seamless, no awkward gaps */
export const layout = {
  container: "mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8",
  containerNarrow: "mx-auto w-full max-w-[840px] px-4 sm:px-6",
  sectionY: "py-6 sm:py-10 lg:py-12",
  sectionYTight: "py-4 sm:py-6",
} as const;

/** Minimal, sleek, and attractive type scale */
export const type = {
  hero: "font-display font-bold text-[clamp(1.85rem,3.4vw,2.75rem)] leading-[1.15] tracking-tight text-white drop-shadow-md",
  h1: "font-display font-bold text-[clamp(1.6rem,2.8vw,2.3rem)] leading-[1.18] tracking-tight text-white drop-shadow-sm",
  h2: "font-display font-bold text-[clamp(1.35rem,2.2vw,1.85rem)] leading-[1.22] tracking-tight text-white",
  h3: "font-display font-semibold text-[clamp(1.1rem,1.5vw,1.35rem)] leading-[1.3] text-white",
  body: "text-xs sm:text-[13.5px] leading-[1.7] font-normal text-slate-200/90",
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

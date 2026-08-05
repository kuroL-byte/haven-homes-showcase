/**
 * Centralized brand/theme config.
 * Color + font *values* live in src/styles.css as design tokens; this file
 * holds the semantic class names and layout scales that components share so
 * the whole site stays visually consistent.
 */

export const brand = {
  name: "Atelier Meridian",
  tagline: "Developers of considered architecture",
  phone: "+91 98200 41100",
  whatsapp: "919820041100",
  email: "residences@ateliermeridian.com",
  address: ["Meridian House, 12 Carmichael Road", "Mumbai 400026, India"],
  hours: "Monday – Saturday · 10:00 – 19:00",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Pinterest", href: "https://pinterest.com" },
  ],
} as const;

/** Shared layout rhythm */
export const layout = {
  container: "mx-auto w-full max-w-[1320px] px-6 sm:px-8 lg:px-12",
  containerNarrow: "mx-auto w-full max-w-[860px] px-6 sm:px-8",
  sectionY: "py-20 sm:py-28 lg:py-36",
  sectionYTight: "py-14 sm:py-20",
} as const;

/** Type scale used for headings across pages */
export const type = {
  hero: "font-display text-[clamp(3rem,8vw,6rem)] leading-[1.02] tracking-[-0.02em]",
  h1: "font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.06]",
  h2: "font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.1]",
  h3: "font-display text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.2]",
  body: "text-[15px] leading-[1.85] font-light text-muted-foreground",
  eyebrow: "eyebrow",
} as const;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Amenities", to: "/amenities" },
  { label: "Gallery", to: "/gallery" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Insights", to: "/blog" },
  { label: "Contact", to: "/contact" },
] as const;

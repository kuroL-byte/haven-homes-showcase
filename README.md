# Haven Homes Showcase

Build a premium, production-ready real estate developer website using React + Tailwind CSS. This is for a luxury construction/property development brand — design should feel like a high-end architecture studio or five-star hospitality brand, NOT a generic template. Original design only, inspired by nothing specific — no cloning of existing sites.

Design Direction

Aesthetic: quiet luxury — generous whitespace, restrained color, architectural precision. Think premium hospitality/interior design portfolio, not a typical builder site.

Typography: pair an elegant serif or high-contrast display serif (headlines, section titles, project names) with a clean modern sans-serif (body, UI labels, nav). Use large type scale for hero and section headers (48–96px desktop), generous line-height, wide letter-spacing on small caps/eyebrow labels (e.g. "OUR LEGACY", "FEATURED RESIDENCES").

Color palette: warm neutral base (ivory/off-white, soft sand, charcoal) with one deep accent (e.g. deep bronze, emerald, or ink navy) used sparingly for CTAs, dividers, and highlights. Avoid bright/saturated colors. Support a dark section variant (charcoal/black background, ivory text) for at least one contrast band (e.g. stats or testimonials).

Imagery: full-bleed architectural photography, subtle dark gradient overlays for text legibility, thin gold/bronze hairline dividers between sections instead of hard borders.

Technical Requirements

React functional components, organized into reusable, composable pieces (Button, SectionHeading, Card, StatCounter, Carousel, Accordion, Modal, Navbar, Footer, etc.)

Tailwind CSS only, custom design tokens (colors, font families, spacing) defined via Tailwind config/theme extension

Fully responsive: mobile-first breakpoints, nav collapses to an elegant slide-in/fade-in mobile menu with hamburger toggle

Smooth scrolling (scroll-behavior + scroll-margin for anchor nav links)

Scroll-triggered entrance animations (fade-up, subtle scale-in) using Intersection Observer or a lightweight animation approach — animations should be subtle and premium, never bouncy or playful

Sticky header that transitions from transparent-over-hero to solid on scroll

Animated number/stat counters that count up when scrolled into view

Image/testimonial carousel with smooth auto-play and manual controls, pause on hover

Micro-interactions: hover states with gentle scale/opacity shifts on cards and buttons, underline-reveal link animations

Lazy-loaded images with graceful fade-in on load

Pages/Sections to Build

1. Landing Page (Home)

Full-viewport hero: background image/video, large serif headline, subheadline, primary CTA, subtle scroll-down indicator

Brand intro/About teaser with years-of-experience stat and CTA

"Why Choose Us" — 4-icon feature grid with hover animation

Stats band (dark background) — animated counters (years, projects delivered, families, sq. ft. developed)

Featured Projects carousel/grid with project cards (image, name, location, status badge, "View Details" link)

Testimonials preview

Latest blog/insights preview grid

Newsletter/contact CTA strip

2. About Page

Founder/company story with timeline component

Mission/values grid

Leadership team cards

Milestones timeline with scroll-triggered reveal

3. Projects/Showcase Page

Filterable project grid (by status: ongoing/upcoming/completed; by type: residential/commercial)

Individual project detail template: hero image, overview, specs table, floor plans gallery, amenities list, location map embed, enquiry form

4. Amenities Page

Icon + image grid showcasing lifestyle amenities (pool, gym, clubhouse, gardens, security)

Alternating image/text layout blocks with scroll animations

5. Gallery Page

Masonry/grid image gallery with lightbox modal, category filter tabs (Exteriors, Interiors, Amenities, Construction Progress)

6. Testimonials Page

Full testimonial grid/carousel with client photo, name, project, star rating, quote card design

7. Blog Page

Blog listing grid with category tags, featured image, date, read-time

Individual blog post template with rich typography styling

8. Contact Page

Split layout: contact form (name, email, phone, message, project interest dropdown) + office details, embedded map, WhatsApp CTA button, social links

9. Footer (site-wide)

Multi-column: brand blurb + logo, quick links, buyer's guide links (GST, Stamp Duty, Loans, NRI Corner, Loan Calculator), contact details, social icons, newsletter signup, legal/copyright line

Reusability Requirements

Build a shared <Navbar /> and <Footer /> used across all pages

Create a <SectionWrapper /> or <Container /> component for consistent max-width/padding

Build generic <ProjectCard />, <TestimonialCard />, <BlogCard />, <StatCounter />, <AnimatedSection /> components accepting props for content reuse

Use a centralized theme/config file for colors, fonts, and spacing so the whole site stays visually consistent

Deliver clean, well-commented, modular component code ready for iteration.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/25075cef-7403-4c98-ae2d-c59156ba688a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

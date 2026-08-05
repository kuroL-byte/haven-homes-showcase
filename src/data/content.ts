/** Static site content. Swap for a CMS/database later without touching components. */

import hero from "@/assets/hero.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import interior1 from "@/assets/interior-1.jpg";
import pool from "@/assets/amenity-pool.jpg";
import gym from "@/assets/amenity-gym.jpg";
import garden from "@/assets/amenity-garden.jpg";
import clubhouse from "@/assets/amenity-clubhouse.jpg";
import construction from "@/assets/construction.jpg";

export const images = {
  hero,
  project1,
  project2,
  project3,
  interior1,
  pool,
  gym,
  garden,
  clubhouse,
  construction,
};

export type ProjectStatus = "Ongoing" | "Upcoming" | "Completed";
export type ProjectType = "Residential" | "Commercial";

export interface Project {
  slug: string;
  name: string;
  location: string;
  status: ProjectStatus;
  type: ProjectType;
  image: string;
  summary: string;
  overview: string[];
  specs: { label: string; value: string }[];
  amenities: string[];
  gallery: string[];
  mapQuery: string;
}

export const projects: Project[] = [
  {
    slug: "meridian-house",
    name: "Meridian House",
    location: "Carmichael Road, Mumbai",
    status: "Ongoing",
    type: "Residential",
    image: images.hero,
    summary:
      "Twenty-two full-floor residences arranged around a limestone water court, with bronze fins tracking the light through the day.",
    overview: [
      "Meridian House is a single-tower composition of twenty-two full-floor residences, conceived as a quiet counterpoint to the density around it. Every home occupies an entire level, with cross-ventilation on four aspects and a private arrival lobby.",
      "The facade is a rhythm of honed limestone and patinated bronze fins, calibrated so the building reads as solid at midday and porous at dusk. At grade, a reflecting court sets the tower back from the street and gives residents a threshold of silence.",
    ],
    specs: [
      { label: "Typology", value: "Full-floor residences" },
      { label: "Configuration", value: "4 & 5 bedroom" },
      { label: "Carpet area", value: "4,850 – 7,200 sq. ft." },
      { label: "Floors", value: "G + 22" },
      { label: "Structure", value: "RCC shear-wall, seismic zone IV" },
      { label: "Possession", value: "Q4 2027" },
      { label: "RERA", value: "P51900054321" },
    ],
    amenities: [
      "Reflecting water court",
      "Residents' library",
      "25m lap pool",
      "Wellness & spa suite",
      "Private dining room",
      "Concierge desk",
    ],
    gallery: [images.hero, images.interior1, images.pool, images.clubhouse],
    mapQuery: "Carmichael Road, Mumbai",
  },
  {
    slug: "the-stone-court",
    name: "The Stone Court",
    location: "Koregaon Park, Pune",
    status: "Completed",
    type: "Residential",
    image: images.project1,
    summary:
      "Low-rise garden residences in warm sandstone, organised around a shaded courtyard and a mature rain tree.",
    overview: [
      "The Stone Court is a low-rise ensemble of forty-eight homes that keeps the existing tree canopy intact. Buildings step back as they rise, so every residence receives a deep, usable terrace.",
      "Materials were chosen to age well: load-bearing sandstone, oiled teak joinery, and lime plaster that softens rather than stains.",
    ],
    specs: [
      { label: "Typology", value: "Garden residences" },
      { label: "Configuration", value: "3 & 4 bedroom" },
      { label: "Carpet area", value: "2,100 – 3,400 sq. ft." },
      { label: "Floors", value: "G + 4" },
      { label: "Structure", value: "RCC frame with stone cladding" },
      { label: "Possession", value: "Delivered 2023" },
      { label: "RERA", value: "P52100031187" },
    ],
    amenities: [
      "Central courtyard",
      "Reading pavilion",
      "Children's garden",
      "Yoga deck",
      "Guest suites",
      "EV-ready parking",
    ],
    gallery: [images.project1, images.garden, images.interior1, images.clubhouse],
    mapQuery: "Koregaon Park, Pune",
  },
  {
    slug: "meridian-exchange",
    name: "Meridian Exchange",
    location: "BKC, Mumbai",
    status: "Ongoing",
    type: "Commercial",
    image: images.project2,
    summary:
      "A workplace building with column-free floorplates, a stone plinth, and a double-height arrival hall facing the boulevard.",
    overview: [
      "Meridian Exchange offers 320,000 sq. ft. of column-free workplace across fourteen levels, designed for occupiers who want daylight on every desk.",
      "A stone plinth grounds the tower and holds the arrival hall, a café, and a 120-seat auditorium available to tenants.",
    ],
    specs: [
      { label: "Typology", value: "Grade-A workplace" },
      { label: "Floorplate", value: "22,000 sq. ft. column-free" },
      { label: "Total area", value: "320,000 sq. ft." },
      { label: "Floors", value: "G + 14" },
      { label: "Certification", value: "LEED Platinum (targeted)" },
      { label: "Possession", value: "Q2 2027" },
      { label: "RERA", value: "P51800045992" },
    ],
    amenities: [
      "Double-height arrival hall",
      "120-seat auditorium",
      "Tenant café",
      "Sky terrace",
      "Valet parking",
      "24/7 building management",
    ],
    gallery: [images.project2, images.construction, images.clubhouse, images.gym],
    mapQuery: "Bandra Kurla Complex, Mumbai",
  },
  {
    slug: "the-ridge-villas",
    name: "The Ridge Villas",
    location: "Lonavala Hills",
    status: "Upcoming",
    type: "Residential",
    image: images.project3,
    summary:
      "Sixteen terraced villas following the contour of the ridge, each with an infinity edge facing the valley.",
    overview: [
      "The Ridge Villas sit lightly on a south-facing slope, terraced so no house looks onto another. Local basalt retaining walls do the structural work and the landscape does the rest.",
      "Each villa is planned around an outdoor room — a covered court that stays usable through the monsoon.",
    ],
    specs: [
      { label: "Typology", value: "Hillside villas" },
      { label: "Configuration", value: "4 bedroom + study" },
      { label: "Plot size", value: "0.4 – 0.9 acre" },
      { label: "Built-up", value: "5,600 – 8,100 sq. ft." },
      { label: "Structure", value: "Basalt + RCC composite" },
      { label: "Launch", value: "Registrations open" },
      { label: "RERA", value: "Application in process" },
    ],
    amenities: [
      "Private infinity pools",
      "Valley clubhouse",
      "Trail network",
      "Organic kitchen garden",
      "Estate management",
      "Solar micro-grid",
    ],
    gallery: [images.project3, images.pool, images.garden, images.interior1],
    mapQuery: "Lonavala, Maharashtra",
  },
];

export const stats = [
  { value: 32, suffix: "", label: "Years of practice" },
  { value: 41, suffix: "", label: "Projects delivered" },
  { value: 2400, suffix: "+", label: "Families settled" },
  { value: 9.6, suffix: "M", label: "Sq. ft. developed", decimals: 1 },
];

export const differentiators = [
  {
    title: "Architect-led",
    body: "Every project begins in our own studio. Design intent survives to the last handover because the people who drew it also build it.",
  },
  {
    title: "Material honesty",
    body: "Stone, lime, teak and bronze. We specify materials that improve with weather instead of finishes that need replacing.",
  },
  {
    title: "Delivered on date",
    body: "Forty-one projects, an average handover eleven days ahead of the committed date. Our schedules are commitments, not estimates.",
  },
  {
    title: "Stewardship after keys",
    body: "A dedicated estate team stays with each building for a decade, maintaining the commons to the standard we handed over.",
  },
];

export const values = [
  {
    title: "Restraint",
    body: "The best detail is the one you do not notice. We remove until only the necessary remains.",
  },
  {
    title: "Longevity",
    body: "We design to a hundred-year horizon — structure, services, and the patina of the materials.",
  },
  {
    title: "Light",
    body: "Orientation, depth of plan, and shading are settled before a single elevation is drawn.",
  },
  {
    title: "Craft",
    body: "We keep long relationships with stone yards, joiners, and metalworkers. Continuity shows in the work.",
  },
];

export const milestones = [
  { year: "1994", title: "The practice begins", body: "Founded as a two-person architectural studio in a Fort warehouse, taking on interior commissions." },
  { year: "2001", title: "First ground-up building", body: "A twelve-home building in Bandra establishes the material language we still work in." },
  { year: "2009", title: "Development arm formed", body: "We begin acquiring and developing our own sites, keeping design and delivery under one roof." },
  { year: "2016", title: "Twenty-fifth handover", body: "The Stone Court predecessor sets the low-rise, courtyard-first template for the portfolio." },
  { year: "2021", title: "Estate services launched", body: "A ten-year stewardship programme begins for every completed building." },
  { year: "2026", title: "Three sites in build", body: "Meridian House, Meridian Exchange, and the Ridge Villas move through construction together." },
];

export const team = [
  { name: "Anaya Raghunath", role: "Founder & Principal Architect", bio: "Thirty-two years in practice. Leads design across every commission." },
  { name: "Devan Mistry", role: "Managing Director", bio: "Runs land, capital, and delivery. Joined from an infrastructure background." },
  { name: "Leela Fernandes", role: "Head of Construction", bio: "Site-first. Has handed over nineteen buildings without a schedule slip." },
  { name: "Kabir Sethi", role: "Director, Residences", bio: "Works with buyers from first visit through customisation and handover." },
];

export const amenities = [
  {
    title: "The Lap Pool",
    eyebrow: "Water",
    body: "A twenty-five metre pool held between travertine decks, warmed in winter and shaded by cabanas through the afternoon.",
    image: images.pool,
  },
  {
    title: "Wellness Studio",
    eyebrow: "Movement",
    body: "Full-height glazing onto the gardens, sprung oak floors, and equipment specified with a trainer rather than a catalogue.",
    image: images.gym,
  },
  {
    title: "The Clubhouse",
    eyebrow: "Gathering",
    body: "A residents' lounge with a private dining room, a library corner, and a bar that can be booked for the evening.",
    image: images.clubhouse,
  },
  {
    title: "Gardens & Courts",
    eyebrow: "Landscape",
    body: "Three quarters of the ground plane is planted. Mature trees were surveyed and retained before the first line was drawn.",
    image: images.garden,
  },
];

export const amenityIcons = [
  { title: "Concierge", body: "Front-of-house team on duty around the clock." },
  { title: "Security", body: "Layered access control with discreet perimeter monitoring." },
  { title: "Parking", body: "Valet-assisted basements, every bay EV-ready." },
  { title: "Backup power", body: "Full-load generation across homes and commons." },
  { title: "Water", body: "On-site treatment, softening, and rainwater recharge." },
  { title: "Estate care", body: "A ten-year maintenance covenant on all commons." },
];

export interface Testimonial {
  quote: string;
  name: string;
  project: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "We looked for two years. Meridian was the only developer who answered questions about the structure with drawings instead of adjectives.",
    name: "Rohan & Meera Kapadia",
    project: "The Stone Court",
    rating: 5,
  },
  {
    quote:
      "Handover came three weeks early and the snag list ran to four items. After twenty years of owning property in this city, that is remarkable.",
    name: "Justice A. Nariman (Retd.)",
    project: "Meridian House",
    rating: 5,
  },
  {
    quote:
      "The courtyard is the reason we bought. Four years on, the trees are taller and the building has settled into itself beautifully.",
    name: "Dr. Sunita Rao",
    project: "The Stone Court",
    rating: 5,
  },
  {
    quote:
      "As a tenant, the arrival hall does more for recruitment than any brochure we have printed. The daylight on the floorplate is exceptional.",
    name: "Vikram Shenoy",
    project: "Meridian Exchange",
    rating: 5,
  },
  {
    quote:
      "They talked us out of a larger apartment because the smaller one had better light. That told us everything about how they work.",
    name: "Ishaan Malhotra",
    project: "Meridian House",
    rating: 5,
  },
  {
    quote:
      "The estate team still responds within the hour, three years after possession. That continuity is rare and worth paying for.",
    name: "Farida Contractor",
    project: "The Stone Court",
    rating: 5,
  },
];

export interface Post {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  body: string[];
}

export const posts: Post[] = [
  {
    slug: "why-we-build-in-stone",
    title: "Why we still build in stone",
    category: "Design",
    date: "12 June 2026",
    readTime: "6 min read",
    excerpt:
      "Cladding is cheaper, faster, and lighter. We keep specifying solid stone anyway — here is the arithmetic behind that decision.",
    image: images.project1,
    body: [
      "Stone is an inconvenient material. It is heavy, slow to set out, and unforgiving of a careless dimension. It also outlives every alternative on the market by a factor that makes the premium look small.",
      "The comparison most developers run is capital cost per square foot at handover. The comparison we run is total cost across forty years, including recoating, sealing, and the reputational cost of a facade that looks tired in year twelve.",
      "There is a second argument, harder to put on a spreadsheet. Stone registers weather. A limestone wall after a monsoon is a different wall than it was in April, and buildings that record time this way are the ones people become attached to.",
      "None of this is nostalgia. We use stone where it works structurally and honestly, and we do not apply it as a veneer to something else. When the budget does not carry it, we change the material rather than fake it.",
    ],
  },
  {
    slug: "reading-a-floor-plan",
    title: "How to read a floor plan before you buy",
    category: "Buyer's Guide",
    date: "28 May 2026",
    readTime: "8 min read",
    excerpt:
      "Six things worth checking on a plan that almost no brochure will point out — and what each one tells you about how the home will live.",
    image: images.interior1,
    body: [
      "Start with the depth of the plan. Measure from the window wall to the innermost point of a habitable room. Beyond about seven metres, daylight stops doing useful work and you will run lights at noon.",
      "Next, look for cross-ventilation. Two openable faces on a home is the difference between a breeze and a fan. On a single-aspect plan, ask what the summer electricity bill looks like.",
      "Third, find the services. Shafts, ducts, and the position of the outdoor units of the air-conditioning tell you more about a developer's care than the marble specification does.",
      "Fourth, check the circulation-to-carpet ratio. Corridors are area you pay for and never use. Fifth, confirm door swings against furniture layouts. Sixth, and most overlooked, look at where the sun rises relative to the bedrooms.",
    ],
  },
  {
    slug: "landscape-first",
    title: "Landscape first, building second",
    category: "Practice",
    date: "9 April 2026",
    readTime: "5 min read",
    excerpt:
      "On surveying every mature tree on a site before drawing a single line, and what that discipline costs.",
    image: images.garden,
    body: [
      "On every site we acquire, the first drawing produced is not a massing study. It is a tree survey — species, girth, canopy spread, and health for everything above a hundred millimetres.",
      "That survey then constrains the building footprint. It is an expensive constraint; on one project it cost us eleven saleable units. It is also the reason the courtyard at that project reads as forty years old rather than four.",
      "Mature canopy cannot be bought. It can only be kept.",
    ],
  },
  {
    slug: "the-handover-standard",
    title: "What a serious handover looks like",
    category: "Delivery",
    date: "21 February 2026",
    readTime: "7 min read",
    excerpt:
      "Snag lists, commissioning records, and the ten-year covenant we sign on the commons of every building.",
    image: images.construction,
    body: [
      "Most handovers are a set of keys and an optimistic warranty card. We treat it as the start of a decade-long relationship, and the paperwork reflects that.",
      "Every home is commissioned twice: once by the contractor, once by an independent inspector we appoint and the buyer can brief directly. The second list is the one that governs.",
      "Buyers receive a bound record — as-built drawings, service routes, material provenance, and the maintenance cycle for every finish. It is the document you want in year seven when something needs matching.",
    ],
  },
];

export const galleryItems = [
  { src: images.hero, category: "Exteriors", caption: "Meridian House at dusk" },
  { src: images.interior1, category: "Interiors", caption: "Full-floor living room" },
  { src: images.pool, category: "Amenities", caption: "The lap pool" },
  { src: images.project1, category: "Exteriors", caption: "The Stone Court courtyard" },
  { src: images.gym, category: "Amenities", caption: "Wellness studio" },
  { src: images.construction, category: "Construction Progress", caption: "Tower core, level 14" },
  { src: images.clubhouse, category: "Interiors", caption: "Residents' lounge" },
  { src: images.garden, category: "Amenities", caption: "Garden court" },
  { src: images.project2, category: "Exteriors", caption: "Meridian Exchange" },
  { src: images.project3, category: "Exteriors", caption: "The Ridge Villas" },
];

export const faqs = [
  {
    q: "Do you offer customisation on residences?",
    a: "Yes. Until the internal blockwork stage we can combine rooms, relocate non-structural walls, and change joinery and stone specifications. Our residences director works directly with your architect.",
  },
  {
    q: "How are payments structured?",
    a: "Construction-linked, in line with RERA. No milestone is invoiced before it is certified complete by the project's independent engineer.",
  },
  {
    q: "Are the projects NRI-friendly?",
    a: "All projects accept NRE/NRO funding and we manage FEMA documentation in-house. Remote handover with a nominated representative is standard.",
  },
  {
    q: "What happens after possession?",
    a: "Our estate team maintains the commons under a ten-year covenant, and individual homes carry a five-year structural and three-year services warranty.",
  },
];

export const buyerGuideLinks = [
  "GST on property",
  "Stamp duty & registration",
  "Home loans",
  "NRI corner",
  "Loan calculator",
];

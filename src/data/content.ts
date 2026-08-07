/** Static site content for Parjane Buildcon. */

import hero from "@/assets/parjane_hero_landmark.png";
import project1 from "@/assets/parjane_drone_township.png";
import project2 from "@/assets/parjane_commercial_tower.png";
import project3 from "@/assets/project-3.jpg";
import interior1 from "@/assets/parjane_luxury_lobby.png";
import pool from "@/assets/amenity-pool.jpg";
import gym from "@/assets/amenity-gym.jpg";
import garden from "@/assets/amenity-garden.jpg";
import clubhouse from "@/assets/amenity-clubhouse.jpg";
import construction from "@/assets/construction.jpg";
import blueprintTexture from "@/assets/parjane_blueprint_texture.png";

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
  blueprintTexture,
};

export type ProjectStatus = "Ongoing" | "Upcoming" | "Completed";
export type ProjectType = "Residential" | "Commercial" | "Industrial" | "Infrastructure";

export interface Project {
  slug: string;
  name: string;
  location: string;
  status: ProjectStatus;
  type: ProjectType;
  area: string;
  completion: string;
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
    slug: "parjane-heights",
    name: "Parjane Heights",
    location: "FC Road, Pune",
    status: "Ongoing",
    type: "Residential",
    area: "4,800 – 7,500 sq. ft.",
    completion: "Q4 2027",
    image: images.hero,
    summary:
      "Thirty-two luxury sky residences featuring double-height private decks, Italian marble finishes, and 360-degree city views.",
    overview: [
      "Parjane Heights stands as a marquee luxury landmark in Pune. Engineered with seismic-resistant RCC shear walls and wrapped in energy-efficient acoustic glazing, each residence commands an entire half-floor.",
      "Residents enjoy private elevator foyers, smart home automation, temperature-controlled plunge pools on executive levels, and dedicated EV charging stations.",
    ],
    specs: [
      { label: "Typology", value: "Luxury Sky Residences" },
      { label: "Configuration", value: "4 & 5 BHK Duplexes" },
      { label: "Carpet Area", value: "4,800 – 7,500 sq. ft." },
      { label: "Floors", value: "G + 28 Floors" },
      { label: "Structure", value: "RCC Frame, Seismic Zone IV" },
      { label: "Possession", value: "Q4 2027" },
      { label: "RERA Registration", value: "P52100098765" },
    ],
    amenities: [
      "Infinity edge rooftop pool",
      "Private wellness spa & sauna",
      "Exclusive residents' lounge",
      "Multi-tier 24/7 security",
      "EV-ready basement parking",
      "Concierge valet services",
    ],
    gallery: [images.hero, images.interior1, images.pool, images.clubhouse],
    mapQuery: "FC Road, Pune, Maharashtra",
  },
  {
    slug: "parjane-one-tower",
    name: "Parjane One Corporate Tower",
    location: "BKC, Mumbai",
    status: "Ongoing",
    type: "Commercial",
    area: "450,000 sq. ft.",
    completion: "Q2 2027",
    image: images.project2,
    summary:
      "Grade-A commercial workplace with column-free floor plates, LEED Platinum certification, and high-speed destination elevators.",
    overview: [
      "Parjane One is designed for forward-thinking enterprises seeking a high-performance commercial headquarters in BKC.",
      "Features double-glazed low-E glass facade, central HVAC with MERV-13 air filtration, 150-seat executive conference auditorium, and lush sky garden terraces.",
    ],
    specs: [
      { label: "Typology", value: "Grade-A Commercial Tower" },
      { label: "Floor Plate", value: "28,000 sq. ft. column-free" },
      { label: "Total Built-Up Area", value: "450,000 sq. ft." },
      { label: "Floors", value: "G + 18 Floors" },
      { label: "Green Certification", value: "LEED Platinum (Targeted)" },
      { label: "Completion", value: "Q2 2027" },
      { label: "RERA Registration", value: "P51800076543" },
    ],
    amenities: [
      "Grand double-height atrium",
      "Executive dining & café",
      "150-seat auditorium",
      "Sky garden breakout deck",
      "High-speed smart lifts",
      "Integrated BMS & Security",
    ],
    gallery: [images.project2, images.construction, images.clubhouse, images.gym],
    mapQuery: "Bandra Kurla Complex, Mumbai",
  },
  {
    slug: "the-parjane-sanctuary",
    name: "The Parjane Sanctuary",
    location: "Koregaon Park, Pune",
    status: "Completed",
    type: "Residential",
    area: "3,200 – 4,500 sq. ft.",
    completion: "Delivered 2024",
    image: images.project1,
    summary:
      "Low-density boutique residences built around preserved heritage rain trees and serene water cascades.",
    overview: [
      "Delivered ahead of schedule in 2024, The Parjane Sanctuary exemplifies our commitment to eco-conscious luxury construction.",
      "Crafted with natural teakwood joinery, rain harvesting systems, and solar micro-grids.",
    ],
    specs: [
      { label: "Typology", value: "Boutique Garden Homes" },
      { label: "Configuration", value: "3 & 4 BHK Luxury Suites" },
      { label: "Carpet Area", value: "3,200 – 4,500 sq. ft." },
      { label: "Floors", value: "G + 6 Floors" },
      { label: "Handover", value: "Delivered March 2024" },
      { label: "RERA Registration", value: "P52100054321" },
    ],
    amenities: [
      "Central water court",
      "Zen yoga garden",
      "Temperature-controlled pool",
      "Children's play park",
      "Clubhouse & gym",
      "Subterranean parking",
    ],
    gallery: [images.project1, images.garden, images.interior1, images.clubhouse],
    mapQuery: "Koregaon Park, Pune",
  },
  {
    slug: "parjane-crest-villas",
    name: "Parjane Crest Estate",
    location: "Lonavala Hills",
    status: "Upcoming",
    type: "Residential",
    area: "6,500 – 10,000 sq. ft.",
    completion: "Q1 2028",
    image: images.project3,
    summary:
      "Sixteen hill-crest luxury villas with private infinity pools overlooking the Sahyadri valley.",
    overview: [
      "Nestled along the ridge of Lonavala, Parjane Crest offers exclusive hilltop villas crafted with local basalt stone and floor-to-ceiling glass.",
    ],
    specs: [
      { label: "Typology", value: "Hillside Luxury Villas" },
      { label: "Plot Size", value: "0.5 – 1.2 Acres" },
      { label: "Built-up Area", value: "6,500 – 10,000 sq. ft." },
      { label: "Status", value: "Pre-launch Registrations" },
      { label: "RERA Registration", value: "Application in Process" },
    ],
    amenities: [
      "Private infinity pool",
      "Private organic garden",
      "Valley view clubhouse",
      "24/7 estate concierge",
      "Solar powered grid",
    ],
    gallery: [images.project3, images.pool, images.garden, images.interior1],
    mapQuery: "Lonavala, Maharashtra",
  },
];

export const stats = [
  { value: 25, suffix: "+", label: "Years Experience" },
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 3000, suffix: "+", label: "Happy Families" },
  { value: 100, suffix: "%", label: "Commitment & Trust" },
];

export const expertiseServices = [
  {
    id: "residential",
    title: "Residential Projects",
    icon: "🏠",
    body: "Ultra-luxury high-rise towers, garden suites, and gated villa communities built with uncompromising architectural elegance.",
  },
  {
    id: "commercial",
    title: "Commercial Buildings",
    icon: "🏢",
    body: "Grade-A corporate office towers, tech parks, and luxury retail hubs with column-free floor plates and LEED certifications.",
  },
  {
    id: "industrial",
    title: "Industrial Construction",
    icon: "🏗️",
    body: "High-spec manufacturing plants, automated logistics hubs, and heavy industrial facilities engineered for durability.",
  },
  {
    id: "redevelopment",
    title: "Redevelopment",
    icon: "🔄",
    body: "Transforming prime urban land and legacy properties into modern architectural landmarks while honoring original communities.",
  },
  {
    id: "turnkey",
    title: "Turnkey Projects",
    icon: "🔑",
    body: "End-to-end design-build execution — from land acquisition, master planning, and engineering to final key handover.",
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    icon: "🌉",
    body: "Large-scale urban infrastructure including arterial roads, podium landscapes, and smart utility grids.",
  },
];

export const whyChooseUsPillars = [
  {
    title: "Quality Construction",
    icon: "🛡️",
    body: "Rigorous 120-point structural audits, certified RCC grade testing, and premium materials that outlast industry benchmarks.",
  },
  {
    title: "On-time Delivery",
    icon: "⏱️",
    body: "150+ projects handed over with zero schedule slippage. Time-bound milestones backed by penalty-bound commitments.",
  },
  {
    title: "Experienced Team",
    icon: "👷",
    body: "Led by veteran civil engineers, structural architects, and project managers with over 25 years of hands-on expertise.",
  },
  {
    title: "Premium Materials",
    icon: "✨",
    body: "Direct sourcing of Italian marble, German joinery, solid teak, and low-E acoustic glass directly from quarry manufacturers.",
  },
  {
    title: "Transparent Process",
    icon: "📊",
    body: "Clear construction-linked milestones, online buyer portal tracking, zero hidden charges, and complete RERA compliance.",
  },
  {
    title: "Innovative Design",
    icon: "📐",
    body: "State-of-the-art BIM modeling, climate-responsive facades, and smart home automation integrated from day one.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Planning",
    body: "Site analysis, feasibility studies, tree surveys, and master plan optimization.",
  },
  {
    step: "02",
    title: "Design",
    body: "Architectural drawings, 3D BIM spatial models, and interior layout refinement.",
  },
  {
    step: "03",
    title: "Approval",
    body: "RERA registrations, municipal sanctions, environmental clearances, and legal audits.",
  },
  {
    step: "04",
    title: "Construction",
    body: "Precision ground breaking, RCC structural framing, MEP services, and facade installation.",
  },
  {
    step: "05",
    title: "Quality Check",
    body: "120-point independent engineering inspection, pressure tests, and finish snagging.",
  },
  {
    step: "06",
    title: "Handover",
    body: "Key handover ceremony, bound as-built documentation, and 10-year stewardship initiation.",
  },
];

export const awardsCertifications = [
  {
    name: "ISO 9001:2015",
    category: "Quality Management Certified",
    year: "Certified 2026",
  },
  {
    name: "IGBC Green Building",
    category: "Gold & Platinum Standard Leader",
    year: "Winner 2025",
  },
  {
    name: "RERA Maharashtra",
    category: "100% Compliance Excellence",
    year: "Verified",
  },
  {
    name: "CREDAI Pune Metro",
    category: "Lifetime Patron Member",
    year: "Member since 2002",
  },
  {
    name: "Builders Association of India",
    category: "Best Structural Engineering Award",
    year: "Winner 2024",
  },
];

export const differentiators = [
  {
    title: "Architectural Leadership",
    body: "Every Parjane landmark is spearheaded by in-house master architects and senior structural engineers.",
  },
  {
    title: "Zero Compromise Materials",
    body: "Tested RCC steel, natural stone, and weatherproof finishes chosen to look pristine across decades.",
  },
  {
    title: "Guaranteed Timelines",
    body: "150 delivered developments with an average completion 14 days ahead of scheduled RERA dates.",
  },
  {
    title: "10-Year Estate Covenant",
    body: "A dedicated property care team remains on site after key handover to maintain common facilities.",
  },
];

export const values = [
  {
    title: "Integrity",
    body: "Complete transparency in pricing, specifications, and legal documentation.",
  },
  {
    title: "Craftsmanship",
    body: "Attention to joint alignments, MEP routing, and structural finish precision.",
  },
  {
    title: "Sustainability",
    body: "Rainwater recharge, solar powering, and zero-waste construction protocols.",
  },
  {
    title: "Customer First",
    body: "Dedicated client relations manager from booking through customization and possession.",
  },
];

export const milestones = [
  {
    year: "2001",
    title: "Inception of Parjane Buildcon",
    body: "Established in Pune as a boutique contracting firm taking on high-end residential builds.",
  },
  {
    year: "2007",
    title: "First High-Rise Delivered",
    body: "Completed landmark 12-storey luxury apartment complex in Deccan Gymkhana.",
  },
  {
    year: "2013",
    title: "Commercial Division Launched",
    body: "Expanded into Grade-A office parks and tech centers across Pune and BKC Mumbai.",
  },
  {
    year: "2018",
    title: "100th Landmark Completed",
    body: "Crossed 100 successful handovers with 100% on-time delivery record.",
  },
  {
    year: "2023",
    title: "IGBC Green Leadership",
    body: "Awarded IGBC Platinum rating for sustainable high-density residential developments.",
  },
  {
    year: "2026",
    title: "Expanding Skylines",
    body: "Over 4.5 million sq. ft. currently under active construction across 4 major hubs.",
  },
];

export const team = [
  {
    name: "Rajesh Parjane",
    role: "Founder & Managing Director",
    bio: "25+ years shaping Western India's skylines with vision, precision, and passion.",
  },
  {
    name: "Anish Parjane",
    role: "Executive Director & COO",
    bio: "Oversees capital allocation, project delivery, and digital construction technology.",
  },
  {
    name: "Priya Deshmukh",
    role: "Chief Architectural Officer",
    bio: "Leads spatial planning, sustainable facades, and luxury interior design.",
  },
  {
    name: "Vikramaditya Shinde",
    role: "Head of Engineering",
    bio: "Directs structural integrity, seismic safety, and site quality control.",
  },
];

export const amenities = [
  {
    title: "Rooftop Infinity Lap Pool",
    eyebrow: "Aquatics",
    body: "Heated 25-meter infinity lap pool framed by anti-skid Italian marble decks and cabana seating.",
    image: images.pool,
  },
  {
    title: "High-Performance Gymnasium",
    eyebrow: "Fitness",
    body: "Equipped with Technogym machinery, dedicated pilates studio, and panoramic skyline glass walls.",
    image: images.gym,
  },
  {
    title: "Grand Executive Lounge",
    eyebrow: "Community",
    body: "Private meeting suites, billiards parlor, cigar room, and multi-cuisine catering kitchen.",
    image: images.clubhouse,
  },
  {
    title: "Landscaped Podium Gardens",
    eyebrow: "Nature",
    body: "70% green open space featuring reflexology walkways, fragrant flora, and serene water features.",
    image: images.garden,
  },
];

export const amenityIcons = [
  {
    title: "24/7 Smart Security",
    body: "Multi-tier biometric access, ANPR vehicle tracking, and discreet AI CCTV.",
  },
  {
    title: "EV Infrastructure",
    body: "100% parking bays equipped with high-speed EV charging provisions.",
  },
  {
    title: "Power Backup",
    body: "Silent DG sets providing 100% full-load auto-switch power backup.",
  },
  {
    title: "Water Treatment",
    body: "Dual-stage water treatment, softening plant, and rainwater harvesting.",
  },
  {
    title: "High-Speed Elevators",
    body: "Destination-controlled Mitsubishi high-speed elevators.",
  },
  { title: "Estate Care", body: "10-year facility management covenant by Parjane Services." },
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
      "Parjane Buildcon delivered our duplex residence 2 weeks before the promised RERA date. The finish quality on the marble and balcony glass is flawless.",
    name: "Sanjay & Neha Kulkarni",
    project: "Parjane Heights",
    rating: 5,
  },
  {
    quote:
      "As a commercial tenant in BKC, the column-free floor plate and natural daylight at Parjane One have dramatically improved our workspace culture.",
    name: "Anand Shah",
    project: "Parjane One Corporate Tower",
    rating: 5,
  },
  {
    quote:
      "Their construction transparency is unparalleled. Every milestone was documented with site photos and structural quality test reports.",
    name: "Dr. Arvind Joshi",
    project: "The Parjane Sanctuary",
    rating: 5,
  },
  {
    quote:
      "Two years after moving into Korean Park, the maintenance and estate management team still resolves any request within 2 hours.",
    name: "Meenakshi Seshadri",
    project: "The Parjane Sanctuary",
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
    slug: "future-of-luxury-constructions",
    title: "Engineering Luxury: The Science Behind Long-Lasting Structures",
    category: "Engineering",
    date: "14 July 2026",
    readTime: "6 min read",
    excerpt:
      "How high-grade RCC shear walls, seismic damping, and Italian marble cladding combine to build homes that last a century.",
    image: images.project1,
    body: [
      "Building a true luxury landmark requires looking far beyond surface aesthetics. It begins with soil load testing, deep piling, and seismic-resistant RCC framing.",
      "At Parjane Buildcon, we specify concrete mixes tested to withstand 1.5x standard load capacities, ensuring zero micro-fissures over decades.",
      "Furthermore, acoustic double-glazing reduces street noise by up to 38dB, providing serene indoor silence in the heart of urban centers.",
    ],
  },
  {
    slug: "redevelopment-masterclass",
    title: "Navigating Urban Redevelopment With Trust and Speed",
    category: "Redevelopment",
    date: "28 June 2026",
    readTime: "7 min read",
    excerpt:
      "Key insights for society members considering redevelopment: timelines, bank guarantees, and structural quality assurance.",
    image: images.construction,
    body: [
      "Redevelopment is fundamentally about rebuilding lives and enhancing asset value. We ensure every original member receives transparent floor plans, bank guarantees, and transit rent paid upfront.",
      "Our dedicated legal and engineering teams work hand-in-hand with society committees to ensure seamless execution without legal friction.",
    ],
  },
  {
    slug: "green-building-innovations",
    title: "Why IGBC Gold & Platinum Certification Matters for Homeowners",
    category: "Sustainability",
    date: "10 May 2026",
    readTime: "5 min read",
    excerpt:
      "Reduced energy bills, fresh air filtration, and higher resale value — how eco-friendly building practices benefit buyers.",
    image: images.garden,
    body: [
      "Green buildings are no longer an optional luxury — they are essential for healthy living. Rainwater harvesting, solar power generation, and native planting reduce operational costs by up to 30%.",
      "Our homes feature MERV-13 air filters and low-VOC paints to guarantee healthy indoor air quality for your family.",
    ],
  },
];

export const galleryItems = [
  { src: images.hero, category: "Exteriors", caption: "Parjane Heights at dusk" },
  { src: images.interior1, category: "Interiors", caption: "Executive duplex living suite" },
  { src: images.pool, category: "Amenities", caption: "Rooftop infinity lap pool" },
  { src: images.project1, category: "Exteriors", caption: "The Parjane Sanctuary courtyard" },
  { src: images.gym, category: "Amenities", caption: "Skyline gym & wellness studio" },
  {
    src: images.construction,
    category: "Construction Progress",
    caption: "Parjane One tower core level 18",
  },
  { src: images.clubhouse, category: "Interiors", caption: "Grand executive lounge" },
  { src: images.garden, category: "Amenities", caption: "Podium garden landscape" },
  { src: images.project2, category: "Exteriors", caption: "Parjane One Corporate Tower" },
  { src: images.project3, category: "Exteriors", caption: "Parjane Crest Estate" },
];

export const faqs = [
  {
    q: "What types of construction projects does Parjane Buildcon undertake?",
    a: "We specialize in ultra-luxury residential towers, boutique garden residences, Grade-A commercial office parks, industrial facilities, turnkey infrastructure, and urban society redevelopment.",
  },
  {
    q: "Are all Parjane Buildcon projects RERA registered?",
    a: "Yes, 100% of our developments are registered with MahaRERA with complete legal titles, clear sanctions, and transparent construction-linked payment plans.",
  },
  {
    q: "What is your track record on project delivery timelines?",
    a: "We have delivered over 150 projects across 25+ years with a 100% on-time completion record. Our schedules are binding commitments backed by RERA guidelines.",
  },
  {
    q: "Do you offer post-possession maintenance and warranty?",
    a: "Yes. All projects carry a 5-year structural warranty, a 3-year MEP services warranty, and 10-year estate stewardship managed directly by Parjane Facility Services.",
  },
];

export const buyerGuideLinks = [
  "GST on property",
  "Stamp duty & registration",
  "Home loans",
  "NRI corner",
  "Loan calculator",
];

# Parjane Buildcon — Enterprise Web Application

A modern, production-grade web application built for **Parjane Buildcon**, Western India's premier real estate developer and luxury construction enterprise.

Designed with architectural precision, high-performance video streaming, 3D project showcases, and a responsive design system.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [TanStack Router](https://tanstack.com/router/latest)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **State & Data**: TanStack React Query + TanStack Start (SSR ready)
- **Build Tool**: [Vite 6](https://vitejs.dev/) + [Nitro Engine](https://nitro.unjs.io/)
- **Type Checking**: [TypeScript 5](https://www.typescriptlang.org/)

---

## 📁 Project Architecture

```
src/
├── assets/          # 3D Renderings, Hero Video, and Brand Assets
├── components/      # Modular UI Component Library
│   ├── blog/        # Article & Insight Cards
│   ├── common/      # Architectural Hero, Containers, Buttons, Timelines
│   ├── forms/       # RERA & Buyer Contact Forms
│   ├── layout/      # Navbar Header & Site Footer
│   ├── project/     # Project Cards, Specs Tables, and Filters
│   └── ui/          # Accessible UI Primitives
├── data/            # Centralized Data Store (Projects, Services, Stats)
├── lib/             # Utility Helpers & Class Converters
├── routes/          # TanStack File-Based Route Tree
├── styles.css       # Design System Tokens & Base Styles
└── theme.ts         # Centralized Brand Theme Configuration
```

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) to view the application in your browser.

### 3. Production Build

```bash
npm run build
```

---

## 🌟 Key Features

- **Pure Video Hero Section**: Edge-to-edge full-bleed background video showcasing 3D architectural landmarks.
- **Filterable Landmarks Portfolio**: Filter projects dynamically across **Ongoing**, **Upcoming**, and **Completed** statuses.
- **High-Contrast Design System**: High-contrast slate typography (`#0F172A`) paired with warm sunset gold accents (`#B4883B`).
- **Interactive Tools**: Home Loan EMI Calculator modal and RERA compliance documentation viewers.
- **Responsive Layout**: Optimized mobile navigation and touch gestures across desktop, tablet, and mobile.

---

© 2026 Parjane Buildcon. All rights reserved.

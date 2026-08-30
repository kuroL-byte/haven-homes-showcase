import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type ThemeId =
  | "obsidian"
  | "wabi-sabi"
  | "nordic"
  | "emerald"
  | "midnight"
  | "coastal"
  | "sapphire"
  | "terracotta";

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  subtitle: string;
  vibe: string;
  isDark?: boolean;
  colors: {
    primary: string;
    accent: string;
    background: string;
    card: string;
    text: string;
  };
}

export const THEMES: ThemeConfig[] = [
  {
    id: "obsidian",
    name: "Obsidian Royal Gold",
    subtitle: "Signature Luxury",
    vibe: "Deep navy slate & warm brushed gold contrast",
    isDark: false,
    colors: {
      primary: "#0f172a",
      accent: "#b4883b",
      background: "#ffffff",
      card: "#f8fafc",
      text: "#0f172a",
    },
  },
  {
    id: "wabi-sabi",
    name: "Wabi-Sabi Sandstone",
    subtitle: "Organic Earth",
    vibe: "Warm limestone, charred slate wood & terracotta",
    isDark: false,
    colors: {
      primary: "#1c2421",
      accent: "#c07a50",
      background: "#f7f4ee",
      card: "#efebe4",
      text: "#1c2421",
    },
  },
  {
    id: "nordic",
    name: "Nordic Minimalist",
    subtitle: "Scandinavian Architecture",
    vibe: "Pure porcelain white, graphite & cool titanium",
    isDark: false,
    colors: {
      primary: "#09090b",
      accent: "#52525b",
      background: "#ffffff",
      card: "#f4f4f5",
      text: "#09090b",
    },
  },
  {
    id: "emerald",
    name: "Emerald Haven & Gold",
    subtitle: "Botanical Prestige",
    vibe: "Imperial deep forest emerald & champagne gold",
    isDark: false,
    colors: {
      primary: "#081c15",
      accent: "#d4af37",
      background: "#f8faf8",
      card: "#edf2ef",
      text: "#081c15",
    },
  },
  {
    id: "midnight",
    name: "Midnight Velvet & Bronze",
    subtitle: "Ultra Dark Mode",
    vibe: "Charcoal obsidian black & warm glowing bronze",
    isDark: true,
    colors: {
      primary: "#0d1117",
      accent: "#d98e48",
      background: "#0d1117",
      card: "#161b22",
      text: "#f0f6fc",
    },
  },
  {
    id: "coastal",
    name: "Ivory Coastal Villa",
    subtitle: "Mediterranean Sun",
    vibe: "Warm silk ivory, clay ochre & deep navy bay",
    isDark: false,
    colors: {
      primary: "#2b3e50",
      accent: "#d97745",
      background: "#faf8f5",
      card: "#f2eee7",
      text: "#2b3e50",
    },
  },
  {
    id: "sapphire",
    name: "Sapphire Blueprint",
    subtitle: "High-Tech Modernism",
    vibe: "Architectural blueprint navy, sky cyan & ice canvas",
    isDark: false,
    colors: {
      primary: "#0a192f",
      accent: "#38bdf8",
      background: "#ffffff",
      card: "#f1f5f9",
      text: "#0a192f",
    },
  },
  {
    id: "terracotta",
    name: "Desert Terracotta",
    subtitle: "Warm Sunbaked Earth",
    vibe: "Rich clay terracotta, sunbaked amber & warm cream",
    isDark: false,
    colors: {
      primary: "#3d231d",
      accent: "#9e472a",
      background: "#fdfbf7",
      card: "#f6f0e6",
      text: "#3d231d",
    },
  },
];

interface ThemeContextType {
  theme: ThemeId;
  setTheme: (id: ThemeId) => void;
  activeThemeConfig: ThemeConfig;
  themes: ThemeConfig[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = "parjane-buildcon-theme";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY) as ThemeId;
      if (stored && THEMES.some((t) => t.id === stored)) {
        return stored;
      }
    }
    return "obsidian";
  });

  const setTheme = (newTheme: ThemeId) => {
    setThemeState(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, newTheme);
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    const active = THEMES.find((t) => t.id === theme);
    if (active?.isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const activeThemeConfig = THEMES.find((t) => t.id === theme) || THEMES[0];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, activeThemeConfig, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

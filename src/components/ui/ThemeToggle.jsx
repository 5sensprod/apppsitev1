// src/components/ui/ThemeToggle.jsx
import React from "react";
import { useTheme } from "@/design/ThemeProvider";

/**
 * Bouton pour basculer entre light/dark/system
 */
export function ThemeToggle({ className }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="px-3 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
        aria-label="Toggle theme"
      >
        {theme === "light" ? "🌙" : "☀️"}
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
}
/**
 * Selecteur de densité
 */
export function DensityToggle({ className }) {
  const { density, setDensity } = useTheme();

  const densities = [
    { value: "compact", label: "Compact", icon: "📦" },
    { value: "default", label: "Normal", icon: "📋" },
    { value: "comfortable", label: "Large", icon: "📄" },
  ];

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {densities.map((d) => (
        <button
          key={d.value}
          onClick={() => setDensity(d.value)}
          className={`px-3 py-2 rounded-md text-sm transition-colors ${
            density === d.value
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          {d.icon} {d.label}
        </button>
      ))}
    </div>
  );
}

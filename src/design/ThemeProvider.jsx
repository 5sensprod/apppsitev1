// src/design/ThemeProvider.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const ThemeProviderContext = createContext({
  theme: "light",
  density: "default",
  setTheme: () => null,
  setDensity: () => null,
});

/**
 * Provider pour gérer les thèmes et la densité
 * @param {Object} props
 * @param {ReactNode} props.children
 * @param {string} props.defaultTheme - Thème par défaut ('light'|'dark'|'system')
 * @param {string} props.defaultDensity - Densité par défaut ('compact'|'default'|'comfortable')
 * @param {string} props.storageKey - Clé localStorage pour persister
 */
export function ThemeProvider({
  children,
  defaultTheme = "system",
  defaultDensity = "default",
  storageKey = "ui-theme",
  ...props
}) {
  const [theme, setTheme] = useState(() => localStorage?.getItem(storageKey) || defaultTheme);

  const [density, setDensity] = useState(
    () => localStorage?.getItem(`${storageKey}-density`) || defaultDensity
  );

  useEffect(() => {
    const root = window.document.documentElement;

    // Nettoyer les classes précédentes
    root.classList.remove("light", "dark");
    root.classList.remove("density-compact", "density-comfortable");

    // Appliquer le thème
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }

    // Appliquer la densité
    if (density !== "default") {
      root.classList.add(`density-${density}`);
    }
  }, [theme, density]);

  const value = {
    theme,
    density,
    setTheme: (theme) => {
      localStorage?.setItem(storageKey, theme);
      setTheme(theme);
    },
    setDensity: (density) => {
      localStorage?.setItem(`${storageKey}-density`, density);
      setDensity(density);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  defaultTheme: PropTypes.oneOf(["light", "dark", "system"]),
  defaultDensity: PropTypes.oneOf(["compact", "default", "comfortable"]),
  storageKey: PropTypes.string,
};

/**
 * Hook pour utiliser le contexte theme
 */
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Button } from "./components/ui/button.jsx";
import { cn } from "./lib/utils.js";
import { Rocket, Sun, Moon, Home as HomeIcon, Book, Layers, Zap } from "lucide-react";
import { config } from "./config.js";
import Home from "./pages/Home.jsx";
import Primitives from "./pages/Primitives.jsx";
import HeroDemo from "./pages/HeroDemo.jsx";
import { ThemeProvider, useTheme } from "@/design/ThemeProvider";
import "@/design/tokens.css";

function NotFound() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-2">404</h2>
      <p>
        Page introuvable.{" "}
        <Link className="text-primary underline" to="/">
          Retour à l'accueil
        </Link>
      </p>
    </div>
  );
}

// Composant navigation avec toutes les pages de démo
function Navigation() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="border-b bg-card text-card-foreground">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="inline-flex items-center font-semibold">
          <HomeIcon className="size-4 mr-2" /> React Page Builder
        </Link>

        {/* Navigation principale */}
        <div className="hidden md:flex items-center gap-2">
          <Button asChild variant="ghost" size="sm">
            <Link to="/primitives" className="inline-flex items-center">
              <Layers className="size-4 mr-2" />
              Primitives
            </Link>
          </Button>

          <Button asChild variant="ghost" size="sm">
            <Link to="/hero" className="inline-flex items-center">
              <Zap className="size-4 mr-2" />
              HeroBlock
            </Link>
          </Button>

          <Button asChild variant="ghost" size="sm">
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
              Vite
            </a>
          </Button>

          <Button asChild variant="ghost" size="sm">
            <a href="https://tailwindcss.com" target="_blank" rel="noreferrer">
              Tailwind
            </a>
          </Button>
        </div>

        {/* Menu mobile */}
        <div className="md:hidden">
          <Button variant="ghost" size="sm">
            <Book className="size-4" />
          </Button>
        </div>

        {/* Toggle thème */}
        <Button variant="secondary" size="sm" onClick={toggleTheme}>
          {theme === "dark" ? <Sun className="size-4 mr-2" /> : <Moon className="size-4 mr-2" />}
          Thème
        </Button>
      </div>

      {/* Barre de navigation secondaire mobile */}
      <div className="md:hidden border-t bg-muted/50 px-4 py-2">
        <div className="flex gap-2 overflow-x-auto">
          <Button asChild variant="ghost" size="sm">
            <Link to="/primitives">Primitives</Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link to="/hero">HeroBlock</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <BrowserRouter>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/primitives" element={<Primitives />} />
            <Route path="/hero" element={<HeroDemo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer global avec infos */}
        <footer className="border-t bg-muted/30 p-4 mt-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pages disponibles */}
              <div>
                <h3 className="font-semibold text-sm mb-2 text-foreground">
                  Pages de démonstration
                </h3>
                <div className="space-y-1">
                  <Link
                    to="/"
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Accueil - Test général du système
                  </Link>
                  <Link
                    to="/primitives"
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Primitives - Section, Stack, Text, Image, Grid
                  </Link>
                  <Link
                    to="/hero"
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    HeroBlock - 3 variants (split, centered, minimal)
                  </Link>
                </div>
              </div>

              {/* Infos technique */}
              <div>
                <h3 className="font-semibold text-sm mb-2 text-foreground">Configuration</h3>
                <p className="text-sm text-muted-foreground">
                  <span className="font-mono px-2 py-1 rounded bg-muted">MODE</span>{" "}
                  <strong>{config.env}</strong> — API:{" "}
                  <code className="font-mono">{config.apiUrl}</code>
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  React + Vite + Tailwind + shadcn/ui
                </p>
              </div>
            </div>
          </div>
        </footer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

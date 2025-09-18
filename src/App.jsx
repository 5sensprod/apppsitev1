import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Primitives from "./pages/Primitives.jsx";
import HeroDemo from "./pages/HeroDemo.jsx";
import FeaturesDemo from "./pages/FeaturesDemo.jsx";
import CTADemo from "./pages/CTADemo.jsx";
import AdvancedBlocksDemo from "./pages/AdvancedBlocksDemo.jsx";
import LayoutDemo from "./pages/LayoutDemo.jsx";
import { AppLayout } from "./components/layout/AppLayout.jsx";
import { ThemeProvider, useTheme } from "@/design/ThemeProvider";
import "@/design/tokens.css";

function NotFound() {
  return <div className="p-8 text-sm">404 — Page introuvable</div>;
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <BrowserRouter>
        <Routes>
          {/* Accueil */}
          <Route
            element={
              <AppLayout
                showHeader
                showFooter
                showBreadcrumbs
                breadcrumbs={[{ label: "Accueil", current: true }]}
              />
            }
          >
            <Route index element={<Home />} />
          </Route>

          {/* Primitives */}
          <Route
            path="/primitives"
            element={
              <AppLayout
                showHeader
                showFooter
                showBreadcrumbs
                breadcrumbs={[
                  { label: "Accueil", href: "/" },
                  { label: "Primitives", current: true },
                ]}
              >
                <Primitives />
              </AppLayout>
            }
          />

          {/* Hero */}
          <Route
            path="/hero"
            element={
              <AppLayout
                showHeader
                showFooter
                showBreadcrumbs
                breadcrumbs={[
                  { label: "Accueil", href: "/" },
                  { label: "Hero", current: true },
                ]}
              >
                <HeroDemo />
              </AppLayout>
            }
          />

          {/* Features */}
          <Route
            path="/features"
            element={
              <AppLayout
                showHeader
                showFooter
                showBreadcrumbs
                breadcrumbs={[
                  { label: "Accueil", href: "/" },
                  { label: "Features", current: true },
                ]}
              >
                <FeaturesDemo />
              </AppLayout>
            }
          />

          {/* CTA */}
          <Route
            path="/cta"
            element={
              <AppLayout
                showHeader
                showFooter
                showBreadcrumbs
                breadcrumbs={[
                  { label: "Accueil", href: "/" },
                  { label: "CTA", current: true },
                ]}
              >
                <CTADemo />
              </AppLayout>
            }
          />

          {/* Advanced */}
          <Route
            path="/advanced"
            element={
              <AppLayout
                showHeader
                showFooter
                showBreadcrumbs
                breadcrumbs={[
                  { label: "Accueil", href: "/" },
                  { label: "Advanced Blocks", current: true },
                ]}
              >
                <AdvancedBlocksDemo />
              </AppLayout>
            }
          />

          {/* Layout */}
          <Route
            path="/layout"
            element={
              <AppLayout
                showHeader
                showFooter
                showBreadcrumbs
                breadcrumbs={[
                  { label: "Sprint 2", href: "/advanced" },
                  { label: "Layout & Navigation", current: true },
                ]}
              >
                <LayoutDemo />
              </AppLayout>
            }
          />

          {/* 404 */}
          <Route
            path="*"
            element={
              <AppLayout
                showHeader
                showFooter
                showBreadcrumbs
                breadcrumbs={[
                  { label: "Accueil", href: "/" },
                  { label: "404", current: true },
                ]}
              >
                <NotFound />
              </AppLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

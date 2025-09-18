// src/components/layout/AppLayout.jsx
import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import { cn } from "@/design/utils";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Breadcrumbs } from "./Breadcrumbs";

/**
 * Layout principal de l'application avec Header, Footer et gestion responsive
 * @param {Object} props
 * @param {ReactNode} props.children - Contenu principal
 * @param {boolean} props.showHeader - Afficher le header (true par défaut)
 * @param {boolean} props.showFooter - Afficher le footer (true par défaut)
 * @param {boolean} props.showBreadcrumbs - Afficher les breadcrumbs (false par défaut)
 * @param {Array} props.breadcrumbs - Items breadcrumbs [{label, href, current}]
 * @param {boolean} props.fixedHeader - Header fixe (false par défaut)
 * @param {string} props.headerVariant - Variant du header ('default'|'transparent'|'colored')
 * @param {string} props.footerVariant - Variant du footer ('default'|'minimal'|'extended')
 * @param {string} props.maxWidth - Largeur max du contenu ('full'|'7xl'|'6xl'|'5xl'|'4xl')
 * @param {string} props.className - Classes CSS additionnelles
 */
export function AppLayout({
  children,
  showHeader = true,
  showFooter = true,
  showBreadcrumbs = false,
  breadcrumbs = [],
  fixedHeader = false,
  headerVariant = "default",
  footerVariant = "default",
  maxWidth = "6xl",
  className,
  ...props
}) {
  // Si utilisé comme route parent (<Route element={<AppLayout/>}>), on rend l'Outlet.
  const content = children ?? <Outlet />;

  return (
    <div className={cn("min-h-screen flex flex-col", className)} {...props}>
      {/* Header */}
      {showHeader && (
        <Header
          variant={headerVariant}
          fixed={fixedHeader}
          className={fixedHeader ? "sticky top-0 z-40" : ""}
        />
      )}

      {/* Main content */}
      <main
        className={cn(
          "flex-1 flex flex-col",
          fixedHeader && "pt-0" // Pas de padding si header fixe
        )}
      >
        {/* Breadcrumbs */}
        {showBreadcrumbs && breadcrumbs.length > 0 && (
          <div className={cn("border-b bg-muted/30", maxWidth === "full" ? "px-4" : "")}>
            <div
              className={cn(
                "mx-auto py-4",
                maxWidth !== "full" && `max-w-${maxWidth} px-4 sm:px-6 lg:px-8`
              )}
            >
              <Breadcrumbs items={breadcrumbs} />
            </div>
          </div>
        )}

        {/* Contenu principal avec contrainte de largeur */}
        <div
          className={cn("flex-1", maxWidth === "full" ? "" : `mx-auto w-full max-w-${maxWidth}`)}
        >
          {content}
        </div>
      </main>

      {/* Footer */}
      {showFooter && <Footer variant={footerVariant} />}
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node,
  showHeader: PropTypes.bool,
  showFooter: PropTypes.bool,
  showBreadcrumbs: PropTypes.bool,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
      current: PropTypes.bool,
    })
  ),
  fixedHeader: PropTypes.bool,
  headerVariant: PropTypes.oneOf(["default", "transparent", "colored"]),
  footerVariant: PropTypes.oneOf(["default", "minimal", "extended"]),
  maxWidth: PropTypes.oneOf(["full", "7xl", "6xl", "5xl", "4xl"]),
  className: PropTypes.string,
};

// src/components/layout/Breadcrumbs.jsx
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

/**
 * Breadcrumbs pour navigation contextuelle avec shadcn/ui et schema.org
 * @param {Object} props
 * @param {Array} props.items - Items breadcrumbs [{label, href, current?}]
 * @param {boolean} props.showHome - Afficher l'icône accueil (true par défaut)
 * @param {string} props.className - Classes additionnelles
 */
export function Breadcrumbs({ items = [], showHome = true, className }) {
  if (!items.length) return null;

  // Génération du JSON-LD pour schema.org
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      ...(showHome
        ? [
            {
              "@type": "ListItem",
              position: 1,
              name: "Accueil",
              item: `${window.location.origin}/`,
            },
          ]
        : []),
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: (showHome ? 2 : 1) + index,
        name: item.label,
        item: item.href ? `${window.location.origin}${item.href}` : undefined,
      })),
    ],
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumb className={className}>
        <BreadcrumbList>
          {/* Home item */}
          {showHome && (
            <>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="flex items-center">
                    <Home className="w-4 h-4" />
                    <span className="sr-only">Accueil</span>
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          )}

          {/* Breadcrumb items */}
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  {isLast || !item.href ? (
                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link to={item.href}>{item.label}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>

                {/* Separator (sauf pour le dernier item) */}
                {!isLast && <BreadcrumbSeparator />}
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
}

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
      current: PropTypes.bool,
    })
  ).isRequired,
  showHome: PropTypes.bool,
  className: PropTypes.string,
};

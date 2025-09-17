// src/components/primitives/Heading.jsx
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "@/design/utils";

const headingVariants = cva(
  "font-heading tracking-tight", // base
  {
    variants: {
      size: {
        xs: "[--heading-size:0.75rem] [--heading-lh:1rem] text-[var(--heading-size)] leading-[var(--heading-lh)]",
        sm: "[--heading-size:0.875rem] [--heading-lh:1.25rem] text-[var(--heading-size)] leading-[var(--heading-lh)]",
        md: "[--heading-size:1rem] [--heading-lh:1.5rem] text-[var(--heading-size)] leading-[var(--heading-lh)]",
        lg: "[--heading-size:1.125rem] [--heading-lh:1.75rem] text-[var(--heading-size)] leading-[var(--heading-lh)]",
        xl: "[--heading-size:1.25rem] [--heading-lh:1.75rem] text-[var(--heading-size)] leading-[var(--heading-lh)]",
        "2xl":
          "[--heading-size:1.5rem] [--heading-lh:2rem] text-[var(--heading-size)] leading-[var(--heading-lh)]",
        "3xl":
          "[--heading-size:1.875rem] [--heading-lh:2.25rem] text-[var(--heading-size)] leading-[var(--heading-lh)]",
      },
      weight: {
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
      },
    },
    defaultVariants: {
      size: "lg",
      weight: "semibold",
    },
  }
);

// Counter pour vérifier les h1 en dev
let h1Count = 0;

/**
 * Titres avec hiérarchie imposée (un seul h1 par page - guard dev)
 * @param {Object} props
 * @param {number} props.level - Niveau hiérarchique (1-6)
 * @param {string} props.as - Override element ('h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'p')
 * @param {string} props.size - Taille visuelle ('xs'|'sm'|'md'|'lg'|'xl'|'2xl'|'3xl')
 * @param {string} props.weight - Graisse ('normal'|'medium'|'semibold'|'bold')
 * @param {string} props.eyebrow - Kicker au-dessus du titre
 * @param {string} props.className
 * @param {ReactNode} props.children
 */
export function Heading({
  level = 2,
  as,
  size = "lg",
  weight = "semibold",
  eyebrow,
  className,
  children,
  ...props
}) {
  const Tag = as || `h${level}`;

  // Guard dev pour h1 unique
  useEffect(() => {
    if (process.env.NODE_ENV === "development" && level === 1) {
      h1Count++;
      if (h1Count > 1) {
        console.warn(
          `⚠️  Multiple h1 detected (${h1Count}). Only one h1 per page is recommended for SEO and accessibility.`
        );
      }

      // Cleanup au démontage
      return () => {
        h1Count--;
      };
    }
  }, [level]);

  const headingClasses = cn(headingVariants({ size, weight }), className);

  return (
    <div>
      {eyebrow && (
        <div className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wide">
          {eyebrow}
        </div>
      )}
      <Tag className={headingClasses} data-level={level} data-size={size} {...props}>
        {children}
      </Tag>
    </div>
  );
}

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
  weight: PropTypes.oneOf(["normal", "medium", "semibold", "bold"]),
  eyebrow: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

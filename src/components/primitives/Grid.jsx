// src/components/primitives/Grid.jsx (Bonus utile)
import React from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "@/design/utils";

const gridVariants = cva(
  "grid", // base
  {
    variants: {
      cols: {
        1: "grid-cols-1",
        2: "grid-cols-1 sm:grid-cols-2",
        3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
        6: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
        12: "grid-cols-12",
      },
      gap: {
        xs: "[--grid-gap:var(--spacing-xs)] gap-[var(--grid-gap)]",
        sm: "[--grid-gap:var(--spacing-sm)] gap-[var(--grid-gap)]",
        md: "[--grid-gap:var(--spacing-md)] gap-[var(--grid-gap)]",
        lg: "[--grid-gap:var(--spacing-lg)] gap-[var(--grid-gap)]",
        xl: "[--grid-gap:var(--spacing-xl)] gap-[var(--grid-gap)]",
      },
    },
    defaultVariants: {
      cols: 3,
      gap: "md",
    },
  }
);

/**
 * Grille responsive avec gaps
 * @param {Object} props
 * @param {number} props.cols - Colonnes (1|2|3|4|6|12)
 * @param {string} props.gap - Espacement ('xs'|'sm'|'md'|'lg'|'xl')
 * @param {string} props.className
 * @param {ReactNode} props.children
 */
export function Grid({ cols = 3, gap = "md", className, children, ...props }) {
  return (
    <div
      className={cn(gridVariants({ cols, gap }), className)}
      data-cols={cols}
      data-gap={gap}
      {...props}
    >
      {children}
    </div>
  );
}

Grid.propTypes = {
  cols: PropTypes.oneOf([1, 2, 3, 4, 6, 12]),
  gap: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

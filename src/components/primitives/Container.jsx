// src/components/primitives/Container.jsx (helper pour Section)
import React from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "@/design/utils";

const containerVariants = cva(
  "mx-auto", // base
  {
    variants: {
      width: {
        sm: "max-w-2xl",
        md: "max-w-4xl",
        lg: "max-w-6xl",
        xl: "max-w-7xl",
        full: "max-w-full",
      },
      pad: {
        none: "[--container-px:0] px-[var(--container-px)]",
        sm: "[--container-px:var(--spacing-sm)] px-[var(--container-px)]",
        md: "[--container-px:var(--spacing-md)] px-[var(--container-px)]",
        lg: "[--container-px:var(--spacing-lg)] px-[var(--container-px)]",
      },
    },
    defaultVariants: {
      width: "lg",
      pad: "md",
    },
  }
);

/**
 * Conteneur avec largeur max et gutters
 */
export function Container({ width = "lg", pad = "md", className, children, ...props }) {
  return (
    <div className={cn(containerVariants({ width, pad }), className)} data-width={width} {...props}>
      {children}
    </div>
  );
}

Container.propTypes = {
  width: PropTypes.oneOf(["sm", "md", "lg", "xl", "full"]),
  pad: PropTypes.oneOf(["none", "sm", "md", "lg"]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

// src/components/primitives/Text.jsx
import React from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "@/design/utils";

const textVariants = cva(
  "font-body", // base
  {
    variants: {
      variant: {
        default: "text-foreground",
        muted: "text-muted-foreground",
        small: "text-sm text-muted-foreground",
        lead: "text-xl text-foreground font-light leading-7",
        large: "text-lg font-semibold text-foreground",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
        justify: "text-justify",
      },
    },
    defaultVariants: {
      variant: "default",
      align: "left",
    },
  }
);

/**
 * Texte avec variants typographiques
 * @param {Object} props
 * @param {string} props.as - Element HTML ('p'|'span'|'div')
 * @param {string} props.variant - Style ('default'|'muted'|'small'|'lead'|'large')
 * @param {string} props.align - Alignement ('left'|'center'|'right'|'justify')
 * @param {boolean} props.truncate - Tronquer sur une ligne
 * @param {number} props.clamp - Line clamp (2|3|4|5|6)
 * @param {string} props.className
 * @param {ReactNode} props.children
 */
export function Text({
  as = "p",
  variant = "default",
  align = "left",
  truncate = false,
  clamp,
  className,
  children,
  ...props
}) {
  const Comp = as;

  // Classes pour truncate et clamp
  const truncateClasses = truncate ? "truncate" : "";
  const clampClasses = clamp ? `line-clamp-${clamp}` : "";

  return (
    <Comp
      className={cn(textVariants({ variant, align }), truncateClasses, clampClasses, className)}
      data-variant={variant}
      {...props}
    >
      {children}
    </Comp>
  );
}

Text.propTypes = {
  as: PropTypes.oneOf(["p", "span", "div"]),
  variant: PropTypes.oneOf(["default", "muted", "small", "lead", "large"]),
  align: PropTypes.oneOf(["left", "center", "right", "justify"]),
  truncate: PropTypes.bool,
  clamp: PropTypes.oneOf([2, 3, 4, 5, 6]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

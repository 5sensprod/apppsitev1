// src/components/primitives/Stack.jsx
import React from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "@/design/utils";

const stackVariants = cva(
  "flex flex-col", // base
  {
    variants: {
      gap: {
        xs: "[--stack-gap:var(--spacing-xs)] gap-[var(--stack-gap)]",
        sm: "[--stack-gap:var(--spacing-sm)] gap-[var(--stack-gap)]",
        md: "[--stack-gap:var(--spacing-md)] gap-[var(--stack-gap)]",
        lg: "[--stack-gap:var(--spacing-lg)] gap-[var(--stack-gap)]",
        xl: "[--stack-gap:var(--spacing-xl)] gap-[var(--stack-gap)]",
      },
      align: {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
      },
      justify: {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        between: "justify-between",
        around: "justify-around",
      },
    },
    defaultVariants: {
      gap: "md",
      align: "start",
      justify: "start",
    },
  }
);

/**
 * Empilement vertical avec espacement
 * @param {Object} props
 * @param {string} props.gap - Espacement ('xs'|'sm'|'md'|'lg'|'xl')
 * @param {string} props.align - Alignement horizontal ('start'|'center'|'end'|'stretch')
 * @param {string} props.justify - Justification ('start'|'center'|'end'|'between'|'around')
 * @param {string} props.as - Element HTML ('div'|'section'|'article')
 * @param {string} props.className
 * @param {ReactNode} props.children
 */
export function Stack({
  gap = "md",
  align = "start",
  justify = "start",
  as = "div",
  className,
  children,
  ...props
}) {
  const Comp = as;

  return (
    <Comp
      className={cn(stackVariants({ gap, align, justify }), className)}
      data-gap={gap}
      data-align={align}
      {...props}
    >
      {children}
    </Comp>
  );
}

Stack.propTypes = {
  gap: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  align: PropTypes.oneOf(["start", "center", "end", "stretch"]),
  justify: PropTypes.oneOf(["start", "center", "end", "between", "around"]),
  as: PropTypes.oneOf(["div", "section", "article"]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

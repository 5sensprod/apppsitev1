// src/components/primitives/Section.jsx
import React from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/design/utils";
import { Container } from "./Container";

const sectionVariants = cva(
  "w-full", // base
  {
    variants: {
      background: {
        default: "bg-background text-foreground",
        muted: "bg-muted text-muted-foreground",
        accent: "bg-accent text-accent-foreground",
        primary: "bg-primary text-primary-foreground",
      },
      spacing: {
        none: "[--section-py:0] py-[var(--section-py)]",
        sm: "[--section-py:var(--spacing-lg)] py-[var(--section-py)]",
        md: "[--section-py:var(--spacing-2xl)] py-[var(--section-py)]",
        lg: "[--section-py:var(--spacing-3xl)] py-[var(--section-py)]",
        xl: "[--section-py:calc(var(--spacing-3xl)*1.5)] py-[var(--section-py)]",
      },
      inset: {
        none: "[--section-px:0] px-[var(--section-px)]",
        sm: "[--section-px:var(--spacing-sm)] px-[var(--section-px)]",
        md: "[--section-px:var(--spacing-md)] px-[var(--section-px)]",
        lg: "[--section-px:var(--spacing-lg)] px-[var(--section-px)]",
      },
      bleed: {
        none: "",
        x: "mx-[-1rem] sm:mx-[-2rem]",
        full: "mx-[-100vw] px-[100vw]",
      },
    },
    defaultVariants: {
      background: "default",
      spacing: "lg",
      inset: "md",
      bleed: "none",
    },
  }
);

/**
 * Wrapper principal pour zones thématiques
 * @param {Object} props
 * @param {string} props.as - Element HTML ('section'|'div'|'header'|'footer')
 * @param {boolean} props.asChild - Utilise Slot (évite wrapper inutile)
 * @param {string} props.id - ID pour ancrage
 * @param {string} props.background - Arrière-plan ('default'|'muted'|'accent'|'primary')
 * @param {string} props.spacing - Espacement vertical ('none'|'sm'|'md'|'lg'|'xl')
 * @param {string} props.inset - Padding interne ('none'|'sm'|'md'|'lg')
 * @param {string} props.bleed - Débordement ('none'|'x'|'full')
 * @param {boolean|Object} props.container - Auto Container {width?, pad?}
 * @param {string} props.themeScope - Thème local ('ocean'|'corporate'|null)
 * @param {string} props.ariaLabelledby - ID du titre de section
 * @param {string} props.role - Role ARIA ('region'|'none')
 * @param {string} props.className - Classes additionnelles
 * @param {ReactNode} props.children
 */
export function Section({
  as = "section",
  asChild = false,
  id,
  background = "default",
  spacing = "lg",
  inset = "md",
  bleed = "none",
  container,
  themeScope,
  ariaLabelledby,
  role,
  className,
  children,
  ...props
}) {
  const Comp = asChild ? Slot : as;

  // Classes dynamiques
  const sectionClasses = cn(
    sectionVariants({ background, spacing, inset, bleed }),
    themeScope && `theme-${themeScope}`,
    className
  );

  // Props ARIA
  const ariaProps = {
    ...(ariaLabelledby && { "aria-labelledby": ariaLabelledby }),
    ...(role && role !== "none" && { role }),
  };

  // Contenu avec container auto ou non
  const content = container ? (
    <Container
      width={typeof container === "object" ? container.width : "lg"}
      pad={typeof container === "object" ? container.pad : "md"}
    >
      {children}
    </Container>
  ) : (
    children
  );

  return (
    <Comp
      id={id}
      className={sectionClasses}
      data-background={background}
      data-theme-scope={themeScope}
      {...ariaProps}
      {...props}
    >
      {content}
    </Comp>
  );
}

Section.propTypes = {
  as: PropTypes.oneOf(["section", "div", "header", "footer"]),
  asChild: PropTypes.bool,
  id: PropTypes.string,
  background: PropTypes.oneOf(["default", "muted", "accent", "primary"]),
  spacing: PropTypes.oneOf(["none", "sm", "md", "lg", "xl"]),
  inset: PropTypes.oneOf(["none", "sm", "md", "lg"]),
  bleed: PropTypes.oneOf(["none", "x", "full"]),
  container: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      width: PropTypes.oneOf(["sm", "md", "lg", "xl", "full"]),
      pad: PropTypes.oneOf(["none", "sm", "md", "lg"]),
    }),
  ]),
  themeScope: PropTypes.oneOf(["ocean", "corporate"]),
  ariaLabelledby: PropTypes.string,
  role: PropTypes.oneOf(["region", "none"]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

// src/components/layout/Footer.jsx
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { cva } from "class-variance-authority";
import { cn } from "@/design/utils";
import { Text, Heading } from "@/components/primitives";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin } from "lucide-react";

const footerVariants = cva("border-t bg-muted/30 mt-auto", {
  variants: {
    variant: {
      default: "py-12",
      minimal: "py-6",
      extended: "py-16",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

/**
 * Footer avec liens et informations
 * @param {Object} props
 * @param {string} props.variant - Style du footer
 * @param {string} props.className - Classes additionnelles
 */
export function Footer({ variant = "default", className }) {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Pages de démonstration",
      links: [
        {
          name: "Primitives",
          href: "/primitives",
          description: "Section, Stack, Text, Image, Grid",
        },
        { name: "HeroBlock", href: "/hero", description: "3 variants (split, centered, minimal)" },
        { name: "FeaturesBlock", href: "/features", description: "3 variants (grid, list, cards)" },
        { name: "CTABlock", href: "/cta", description: "3 variants (banner, card, inline)" },
        {
          name: "Advanced Blocks",
          href: "/advanced",
          description: "PricingBlock & MediaTextBlock",
        },
      ],
    },
    {
      title: "Ressources",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "Guide de démarrage", href: "/getting-started" },
        { name: "API Reference", href: "/api" },
        { name: "Exemples", href: "/examples" },
      ],
    },
    {
      title: "Communauté",
      links: [
        { name: "GitHub", href: "https://github.com", external: true },
        { name: "Discussions", href: "https://github.com/discussions", external: true },
        { name: "Issues", href: "https://github.com/issues", external: true },
        { name: "Changelog", href: "/changelog" },
      ],
    },
  ];

  if (variant === "minimal") {
    return (
      <footer className={cn(footerVariants({ variant }), className)}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <Text variant="small" className="text-muted-foreground">
              © {currentYear} React Page Builder • Sprint 2 - Layout & Navigation
            </Text>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className={cn(footerVariants({ variant }), className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Heading level={3} size="lg" className="mb-4">
              React Page Builder
            </Heading>
            <Text variant="small" className="text-muted-foreground mb-4">
              Architecture moderne pour créer des sites web performants avec React + Tailwind +
              shadcn/ui
            </Text>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <Heading level={4} size="sm" className="mb-4">
                {section.title}
              </Heading>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                        {link.description && (
                          <span className="block text-xs text-muted-foreground/60 mt-0.5">
                            {link.description}
                          </span>
                        )}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <Text variant="small" className="text-muted-foreground">
              © {currentYear} React Page Builder • Sprint 2 - Layout & Navigation terminé
            </Text>
            <Text variant="small" className="text-muted-foreground">
              React + Vite + Tailwind + shadcn/ui
            </Text>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  variant: PropTypes.oneOf(["default", "minimal", "extended"]),
  className: PropTypes.string,
};

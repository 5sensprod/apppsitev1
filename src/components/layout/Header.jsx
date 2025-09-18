// src/components/layout/Header.jsx
import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { cva } from "class-variance-authority";
import { cn } from "@/design/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ThemeToggle, DensityToggle } from "@/components/ui/ThemeToggle";
import {
  Home as HomeIcon,
  Layers,
  Zap,
  Grid3x3,
  Target,
  CreditCard,
  Layout as LayoutIcon,
  Menu,
} from "lucide-react";

const headerVariants = cva("w-full border-b bg-background/80 backdrop-blur-sm transition-colors", {
  variants: {
    variant: {
      default: "bg-background border-border",
      transparent: "bg-transparent border-transparent",
      colored: "bg-primary border-primary text-primary-foreground",
    },
    fixed: {
      true: "sticky top-0 z-40",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    fixed: false,
  },
});

/**
 * Header de navigation principal avec composants shadcn/ui
 * @param {Object} props
 * @param {string} props.variant - Style du header
 * @param {boolean} props.fixed - Header fixe
 * @param {string} props.className - Classes additionnelles
 */
export function Header({ variant = "default", fixed = false, className }) {
  const location = useLocation();

  // Navigation items
  const navItems = [
    {
      name: "Primitives",
      href: "/primitives",
      icon: Layers,
      description: "Section, Stack, Text, Image, Grid",
    },
    {
      name: "Hero",
      href: "/hero",
      icon: Zap,
      description: "3 variants (split, centered, minimal)",
    },
    {
      name: "Features",
      href: "/features",
      icon: Grid3x3,
      description: "3 variants (grid, list, cards)",
    },
    { name: "CTA", href: "/cta", icon: Target, description: "3 variants (banner, card, inline)" },
    {
      name: "Advanced",
      href: "/advanced",
      icon: CreditCard,
      description: "PricingBlock & MediaTextBlock",
    },
    { name: "Layout", href: "/layout", icon: LayoutIcon, description: "AppLayout, Header, Footer" },
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <header className={cn(headerVariants({ variant, fixed }), className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 font-semibold">
            <HomeIcon className="w-6 h-6" />
            <span className="hidden sm:block">React Page Builder</span>
            <span className="sm:hidden">RPB</span>
          </Link>

          {/* Navigation desktop avec NavigationMenu */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <NavigationMenuItem key={item.name}>
                    <Button asChild variant={isActive(item.href) ? "default" : "ghost"} size="sm">
                      <Link to={item.href} className="flex items-center space-x-2">
                        <Icon className="w-4 h-4" />
                        <span>{item.name}</span>
                      </Link>
                    </Button>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Actions desktop */}
          <div className="hidden md:flex items-center space-x-2">
            <ThemeToggle />
            <DensityToggle />
          </div>

          {/* Menu mobile avec Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="w-5 h-5" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-80">
              <div className="flex flex-col h-full">
                {/* Header du Sheet */}
                <div className="flex items-center space-x-2 pb-6 border-b">
                  <HomeIcon className="w-6 h-6" />
                  <span className="font-semibold">React Page Builder</span>
                </div>

                {/* Navigation mobile */}
                <nav className="flex-1 py-6">
                  <div className="space-y-1">
                    {navItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Button
                          key={item.name}
                          asChild
                          variant={isActive(item.href) ? "default" : "ghost"}
                          className="w-full justify-start h-auto py-3"
                        >
                          <Link to={item.href} className="flex flex-col items-start space-y-1">
                            <div className="flex items-center space-x-3">
                              <Icon className="w-5 h-5" />
                              <span className="font-medium">{item.name}</span>
                            </div>
                            <span className="text-xs text-muted-foreground ml-8">
                              {item.description}
                            </span>
                          </Link>
                        </Button>
                      );
                    })}
                  </div>
                </nav>

                {/* Actions mobile */}
                <div className="pt-6 border-t">
                  <div className="text-sm font-medium mb-3 text-muted-foreground">Paramètres</div>
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Thème</span>
                      <ThemeToggle />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Densité</span>
                      <DensityToggle />
                    </div>
                  </div>
                </div>

                {/* Footer du Sheet */}
                <div className="pt-6 border-t">
                  <div className="text-xs text-muted-foreground text-center">
                    Sprint 2 - Phase 2.2
                    <br />
                    Layout & Navigation
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  variant: PropTypes.oneOf(["default", "transparent", "colored"]),
  fixed: PropTypes.bool,
  className: PropTypes.string,
};

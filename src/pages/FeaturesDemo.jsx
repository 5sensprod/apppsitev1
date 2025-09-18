// src/pages/FeaturesDemo.jsx
import React from "react";
import { FeaturesBlock } from "@/components/blocks/FeaturesBlock";
import { Section, Heading, Text } from "@/components/primitives";
import { Zap, Shield, Rocket, Palette, Code, Users } from "lucide-react";

// Données de test
const basicFeatures = [
  {
    id: "performance",
    icon: "⚡",
    title: "Performance",
    description: "Tree-shaking optimal et code-splitting automatique pour des bundles légers.",
    href: "/performance",
  },
  {
    id: "theming",
    icon: "🎨",
    title: "Théming avancé",
    description: "Dark mode, thèmes multiples et variables CSS pour une personnalisation totale.",
  },
  {
    id: "components",
    icon: "🧩",
    title: "Composants réutilisables",
    description: "Primitives et blocks avec variants cohérents et API standardisée.",
  },
];

const advancedFeatures = [
  {
    id: "fast",
    icon: <Zap className="w-6 h-6" />,
    title: "Lightning Fast",
    description:
      "Built for speed with optimized rendering and minimal re-renders. Every component is performance-first.",
    image: {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      alt: "Performance dashboard",
      width: 400,
      height: 300,
    },
  },
  {
    id: "secure",
    icon: <Shield className="w-6 h-6" />,
    title: "Enterprise Security",
    description:
      "Security-first architecture with built-in protection against common vulnerabilities and best practices.",
    image: {
      src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      alt: "Security concept",
      width: 400,
      height: 300,
    },
  },
  {
    id: "scalable",
    icon: <Rocket className="w-6 h-6" />,
    title: "Infinitely Scalable",
    description:
      "From prototypes to enterprise applications. The architecture scales with your needs without compromises.",
    image: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      alt: "Scalable interface",
      width: 400,
      height: 300,
    },
  },
];

const designFeatures = [
  {
    id: "design-system",
    icon: <Palette className="w-8 h-8" />,
    title: "Design System complet",
    description: "Tokens, primitives, variants et thèmes pour une cohérence visuelle parfaite.",
    href: "/design-system",
  },
  {
    id: "developer-dx",
    icon: <Code className="w-8 h-8" />,
    title: "Developer Experience",
    description: "TypeScript, Storybook, hot-reload et documentation interactive.",
    href: "/dev-experience",
  },
  {
    id: "community",
    icon: <Users className="w-8 h-8" />,
    title: "Community Driven",
    description: "Open source avec une communauté active et des contributions régulières.",
    href: "/community",
  },
  {
    id: "accessible",
    icon: "♿",
    title: "Accessibilité native",
    description: "WCAG 2.1 AA compliant avec des composants accessibles par défaut.",
    href: "/accessibility",
  },
];

/**
 * Page de démonstration du FeaturesBlock
 */
export default function FeaturesDemo() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Section background="primary" spacing="lg" container={true}>
        <div className="text-center">
          <Heading
            level={1}
            size="3xl"
            eyebrow="Blocks Documentation"
            className="text-primary-foreground"
          >
            FeaturesBlock - 3 Variants
          </Heading>
          <Text variant="lead" className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
            Grid, List et Cards pour présenter vos fonctionnalités de manière optimale
          </Text>
        </div>
      </Section>

      {/* Variant Grid - Basique */}
      <FeaturesBlock
        variant="grid"
        size="lg"
        background="muted"
        eyebrow="Variant Grid"
        title="Fonctionnalités principales"
        subtitle="Une grille simple et efficace pour présenter vos points forts"
        features={basicFeatures}
        columns={3}
      />

      {/* Variant List - Avec images alternées */}
      <FeaturesBlock
        variant="list"
        size="xl"
        background="default"
        themeScope="ocean"
        eyebrow="Variant List"
        title="Solutions Enterprise"
        subtitle="Présentation détaillée avec images et alternance visuelle pour plus d'impact"
        features={advancedFeatures}
      />

      {/* Variant Cards - Avec shadcn/ui cards */}
      <FeaturesBlock
        variant="cards"
        size="lg"
        background="accent"
        themeScope="corporate"
        eyebrow="Variant Cards"
        title="Écosystème complet"
        subtitle="Cards élégantes pour mettre en valeur chaque fonctionnalité"
        features={designFeatures}
        columns={2}
      />

      {/* Section comparaison colonnes */}
      <Section spacing="lg" container={true}>
        <Heading level={2} size="xl" className="mb-8 text-center">
          Colonnes configurables
        </Heading>

        <div className="space-y-12">
          {/* 2 colonnes */}
          <div>
            <Heading level={3} size="lg" className="mb-4">
              Grid 2 colonnes
            </Heading>
            <FeaturesBlock
              variant="grid"
              features={basicFeatures.slice(0, 2)}
              columns={2}
              section={false}
            />
          </div>

          {/* 3 colonnes */}
          <div>
            <Heading level={3} size="lg" className="mb-4">
              Grid 3 colonnes (défaut)
            </Heading>
            <FeaturesBlock variant="grid" features={basicFeatures} columns={3} section={false} />
          </div>

          {/* 4 colonnes */}
          <div>
            <Heading level={3} size="lg" className="mb-4">
              Grid 4 colonnes
            </Heading>
            <FeaturesBlock variant="grid" features={designFeatures} columns={4} section={false} />
          </div>
        </div>
      </Section>

      {/* Section tailles */}
      <Section background="muted" spacing="lg" container={true}>
        <Heading level={2} size="xl" className="mb-8 text-center">
          Variations de taille
        </Heading>

        <div className="space-y-8">
          <FeaturesBlock
            variant="grid"
            size="sm"
            title="Size SM - Compact"
            features={basicFeatures.slice(0, 2)}
            columns={2}
            section={false}
          />

          <FeaturesBlock
            variant="grid"
            size="md"
            title="Size MD - Standard"
            features={basicFeatures.slice(0, 2)}
            columns={2}
            section={false}
          />

          <FeaturesBlock
            variant="grid"
            size="lg"
            title="Size LG - Large"
            features={basicFeatures.slice(0, 2)}
            columns={2}
            section={false}
          />
        </div>
      </Section>

      {/* Section données flexibles */}
      <Section spacing="lg" container={true}>
        <Heading level={2} size="xl" className="mb-8 text-center">
          Flexibilité des données
        </Heading>

        <div className="space-y-12">
          {/* Avec icônes emoji */}
          <div>
            <Heading level={3} size="lg" className="mb-4">
              Icônes Emoji
            </Heading>
            <FeaturesBlock
              variant="grid"
              features={[
                { icon: "🚀", title: "Rapide", description: "Performance optimale" },
                { icon: "🎨", title: "Personnalisable", description: "Thèmes multiples" },
                { icon: "📱", title: "Responsive", description: "Mobile-first" },
              ]}
              section={false}
            />
          </div>

          {/* Avec icônes React */}
          <div>
            <Heading level={3} size="lg" className="mb-4">
              Icônes React Components
            </Heading>
            <FeaturesBlock
              variant="grid"
              features={[
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Performance",
                  description: "Lightning fast rendering",
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "Sécurité",
                  description: "Enterprise-grade security",
                },
                {
                  icon: <Rocket className="w-6 h-6" />,
                  title: "Évolutif",
                  description: "Scales with your needs",
                },
              ]}
              section={false}
            />
          </div>

          {/* Sans icônes */}
          <div>
            <Heading level={3} size="lg" className="mb-4">
              Sans icônes
            </Heading>
            <FeaturesBlock
              variant="grid"
              features={[
                { title: "Simplicité", description: "Clean et minimal design" },
                { title: "Efficacité", description: "Focus sur le contenu" },
                { title: "Lisibilité", description: "Typographie optimisée" },
              ]}
              section={false}
            />
          </div>
        </div>
      </Section>

      {/* Footer récap */}
      <Section as="footer" background="muted" spacing="md" container={true}>
        <div className="text-center">
          <Text variant="small">
            <strong>3 variants :</strong> grid, list, cards •<strong>Colonnes :</strong> 2, 3, 4 •
            <strong>Données :</strong> icônes emoji/React, images, liens optionnels
          </Text>
        </div>
      </Section>
    </div>
  );
}

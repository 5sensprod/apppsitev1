// src/pages/HeroDemo.jsx
import React from "react";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { Section, Heading, Text } from "@/components/primitives";

/**
 * Page de démonstration du HeroBlock
 */
export default function HeroDemo() {
  return (
    <div className="min-h-screen">
      {/* Intro */}
      <Section background="muted" spacing="md" container={true}>
        <div className="text-center">
          <Heading level={1} size="2xl" eyebrow="Blocks Documentation">
            HeroBlock - 3 Variants
          </Heading>
          <Text variant="muted" className="mt-2">
            Démonstration des différents layouts et options
          </Text>
        </div>
      </Section>

      {/* Hero Split avec image */}
      <HeroBlock
        variant="split"
        size="lg"
        background="primary"
        eyebrow="Variant Split"
        title="Créez des sites web modernes avec React"
        subtitle="Une architecture modulaire et performante pour développer rapidement des interfaces utilisateur cohérentes et réutilisables."
        cta={{
          text: "Commencer maintenant",
          href: "/start",
          variant: "secondary",
        }}
        secondaryCta={{
          text: "Voir la doc",
          href: "/docs",
          variant: "outline",
        }}
        image={{
          src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
          alt: "Dashboard moderne",
          width: 600,
          height: 400,
          ratio: "3/2",
        }}
      />

      {/* Hero Centered */}
      <HeroBlock
        variant="centered"
        size="xl"
        background="accent"
        themeScope="ocean"
        eyebrow="Variant Centered"
        title="Composants primitives + Design system"
        subtitle="Stack, Grid, Text, Image... Tous les building blocks nécessaires pour créer des interfaces cohérentes. Théming avancé avec dark mode et thèmes personnalisés."
        cta={{
          text: "Explorer les composants",
          href: "/primitives",
          variant: "default",
        }}
        secondaryCta={{
          text: "GitHub",
          href: "https://github.com",
          variant: "ghost",
        }}
        image={{
          src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
          alt: "Interface utilisateur",
          width: 800,
          height: 400,
          ratio: "2/1",
        }}
      />

      {/* Hero Minimal */}
      <HeroBlock
        variant="minimal"
        size="md"
        background="muted"
        themeScope="corporate"
        eyebrow="Variant Minimal"
        title="Simple, rapide, efficace"
        subtitle="Parfois moins c'est plus. Ce variant minimal met l'accent sur le contenu sans distractions visuelles."
        cta={{
          text: "En savoir plus",
          href: "/about",
        }}
        secondaryCta={{
          text: "Contact",
          href: "/contact",
          variant: "outline",
        }}
      />

      {/* Variations de taille */}
      <Section spacing="lg" container={true}>
        <Heading level={2} size="xl" className="mb-8 text-center">
          Variations de taille
        </Heading>

        <div className="space-y-0">
          {/* Size SM */}
          <HeroBlock
            variant="centered"
            size="sm"
            background="default"
            title="Hero size='sm'"
            subtitle="Plus compact pour des sections secondaires"
            cta={{
              text: "Action",
              href: "#",
              size: "sm",
            }}
            section={{
              spacing: "sm",
              className: "border-b",
            }}
          />

          {/* Size MD */}
          <HeroBlock
            variant="centered"
            size="md"
            background="default"
            title="Hero size='md'"
            subtitle="Taille moyenne pour un équilibre optimal"
            cta={{
              text: "Action",
              href: "#",
              size: "default",
            }}
            section={{
              spacing: "md",
              className: "border-b",
            }}
          />

          {/* Size LG */}
          <HeroBlock
            variant="centered"
            size="lg"
            background="default"
            title="Hero size='lg'"
            subtitle="Taille standard pour la plupart des cas d'usage"
            cta={{
              text: "Action",
              href: "#",
              size: "lg",
            }}
            section={{
              spacing: "lg",
              className: "border-b",
            }}
          />

          {/* Size XL */}
          <HeroBlock
            variant="centered"
            size="xl"
            background="default"
            title="Hero size='xl'"
            subtitle="Maximum d'impact pour les landing pages importantes"
            cta={{
              text: "Action",
              href: "#",
              size: "lg",
            }}
            section={{
              spacing: "xl",
            }}
          />
        </div>
      </Section>

      {/* Section sans wrapper (section=false) */}
      <Section background="primary" spacing="lg" container={true}>
        <Heading level={2} size="xl" className="mb-4 text-center text-primary-foreground">
          Hero sans wrapper Section
        </Heading>
        <Text align="center" className="text-primary-foreground/80 mb-8">
          Utilisation avec{" "}
          <code className="bg-primary-foreground/20 px-2 py-1 rounded">section={false}</code> pour
          un contrôle total
        </Text>

        <HeroBlock
          variant="minimal"
          title="Contenu personnalisé"
          subtitle="Ce hero n'a pas de wrapper Section automatique"
          cta={{
            text: "Personnaliser",
            href: "#",
            variant: "secondary",
          }}
          section={false}
          className="text-primary-foreground"
        />
      </Section>

      {/* Footer récap */}
      <Section as="footer" background="muted" spacing="md" container={true}>
        <div className="text-center">
          <Text variant="small">
            <strong>3 variants :</strong> split, centered, minimal •<strong>4 tailles :</strong> sm,
            md, lg, xl •<strong>Thèmes :</strong> default, ocean, corporate
          </Text>
        </div>
      </Section>
    </div>
  );
}

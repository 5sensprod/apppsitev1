// src/pages/Home.jsx
import React from "react";
import { Section, Heading, Text, Stack, Grid } from "@/components/primitives";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { FeaturesBlock } from "@/components/blocks/FeaturesBlock";
import { CTABlock } from "@/components/blocks/CTABlock";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Grid3x3, Target, Layers, CreditCard, Layout as LayoutIcon } from "lucide-react";

/**
 * Page d'accueil - Présentation générale du système
 * Note: Utilise AppLayout via App.jsx
 */
export default function Home() {
  // Données pour les features
  const systemFeatures = [
    {
      id: "primitives",
      icon: <Layers className="w-6 h-6" />,
      title: "Primitives solides",
      description:
        "Section, Stack, Text, Image, Grid - composants de base réutilisables avec variants cohérents.",
      href: "/primitives",
    },
    {
      id: "blocks",
      icon: <Grid3x3 className="w-6 h-6" />,
      title: "Blocks modulaires",
      description:
        "Hero, Features, CTA, Pricing, MediaText - blocks métier composables en JSX natif.",
      href: "/hero",
    },
    {
      id: "theming",
      icon: <Zap className="w-6 h-6" />,
      title: "Théming avancé",
      description: "Dark mode, thèmes multiples, densité adaptable via CSS variables et tokens.",
      href: "#theming",
    },
  ];

  const architectureStats = [
    { label: "Primitives", value: "7", description: "Composants de base" },
    { label: "Blocks", value: "5", description: "Sprint 1 & 2" },
    { label: "Thèmes", value: "4", description: "Default, Dark, Ocean, Corporate" },
    { label: "Pages demo", value: "6", description: "Documentation complète" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero principal */}
      <HeroBlock
        variant="centered"
        size="xl"
        background="primary"
        eyebrow="React Page Builder"
        title="Architecture moderne pour sites performants"
        subtitle="Primitives + Blocks + Théming = JSX composable sans sur-engineering. Sprint 1 & 2 terminés avec AppLayout complet."
        cta={{
          text: "Explorer les primitives",
          href: "/primitives",
        }}
        secondaryCta={{
          text: "Voir les blocks",
          href: "/hero",
          variant: "outline",
        }}
      />

      {/* Features du système */}
      <FeaturesBlock
        variant="grid"
        size="lg"
        background="muted"
        eyebrow="Architecture Sprint 1 & 2"
        title="Système complet et production-ready"
        subtitle="De la primitive de base au layout complexe, tout est pensé pour la réutilisabilité et la performance."
        features={systemFeatures}
        columns={3}
      />

      {/* Stats & Navigation rapide */}
      <Section spacing="lg" container={true}>
        <Stack gap="xl">
          <div className="text-center">
            <Heading level={2} size="2xl" weight="bold" className="mb-4">
              Vue d'ensemble
            </Heading>
            <Text variant="lead" className="text-muted-foreground max-w-2xl mx-auto">
              Naviguez vers les pages de démonstration pour voir chaque composant en action
            </Text>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {architectureStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="font-medium text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>

          {/* Navigation cards */}
          <Grid cols={3} gap="lg">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="w-5 h-5" />
                  Sprint 1
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Text variant="small" className="text-muted-foreground mb-3">
                  Primitives + 3 blocks essentiels
                </Text>
                <div className="space-y-2">
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start p-2 h-auto"
                  >
                    <a href="/primitives" className="block">
                      <div className="font-medium">Primitives</div>
                      <div className="text-xs text-muted-foreground">
                        Section, Stack, Text, Image...
                      </div>
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start p-2 h-auto"
                  >
                    <a href="/hero" className="block">
                      <div className="font-medium">HeroBlock</div>
                      <div className="text-xs text-muted-foreground">
                        3 variants (split, centered, minimal)
                      </div>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow cursor-pointer border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Sprint 2
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Text variant="small" className="text-muted-foreground mb-3">
                  Blocks avancés + AppLayout
                </Text>
                <div className="space-y-2">
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start p-2 h-auto"
                  >
                    <a href="/advanced" className="block">
                      <div className="font-medium">Advanced Blocks</div>
                      <div className="text-xs text-muted-foreground">Pricing + MediaText</div>
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start p-2 h-auto"
                  >
                    <a href="/layout" className="block">
                      <div className="font-medium">AppLayout</div>
                      <div className="text-xs text-muted-foreground">
                        Header, Footer, Breadcrumbs
                      </div>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Tests & Démo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Text variant="small" className="text-muted-foreground mb-3">
                  Tous les composants en action
                </Text>
                <div className="space-y-2">
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start p-2 h-auto"
                  >
                    <a href="/features" className="block">
                      <div className="font-medium">FeaturesBlock</div>
                      <div className="text-xs text-muted-foreground">Grid, list, cards</div>
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start p-2 h-auto"
                  >
                    <a href="/cta" className="block">
                      <div className="font-medium">CTABlock</div>
                      <div className="text-xs text-muted-foreground">Banner, card, inline</div>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Stack>
      </Section>

      {/* Théming demo */}
      <Section background="accent" spacing="lg" container={true} id="theming">
        <Stack gap="lg">
          <div className="text-center">
            <Heading level={2} size="xl" weight="semibold" className="mb-4">
              Système de théming
            </Heading>
            <Text variant="default" className="text-accent-foreground/80 max-w-2xl mx-auto">
              Dark mode, thèmes multiples et densité adaptable
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-background border rounded-lg">
              <Heading level={3} size="md" className="mb-2">
                Mode sombre/clair
              </Heading>
              <Text variant="small" className="text-muted-foreground">
                Toggle automatique avec persistance localStorage
              </Text>
            </div>

            <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
              <Heading level={3} size="md" className="mb-2">
                Thèmes multiples
              </Heading>
              <Text variant="small" className="text-muted-foreground">
                Ocean, Corporate avec scopes locaux
              </Text>
            </div>

            <div className="p-4 bg-muted border rounded-lg">
              <Heading level={3} size="md" className="mb-2">
                Densité adaptable
              </Heading>
              <Text variant="small" className="text-muted-foreground">
                Compact, Normal, Comfortable
              </Text>
            </div>
          </div>
        </Stack>
      </Section>

      {/* CTA final */}
      <CTABlock
        variant="banner"
        size="lg"
        background="primary"
        eyebrow="Prêt à utiliser"
        title="Architecture complète - Sprint 1 & 2 terminés"
        subtitle="Système production-ready avec primitives, blocks, théming et layout. Tout est documenté et testé."
        cta={{
          text: "Commencer à développer",
          href: "/primitives",
          variant: "secondary",
        }}
        secondaryCta={{
          text: "Voir la roadmap",
          href: "#roadmap",
          variant: "outline",
        }}
      />
    </div>
  );
}

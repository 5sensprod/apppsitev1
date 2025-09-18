// src/pages/AdvancedBlocksDemo.jsx
import React from "react";
import { PricingBlock } from "@/components/blocks/PricingBlock";
import { MediaTextBlock } from "@/components/blocks/MediaTextBlock";
import { Section, Heading, Text } from "@/components/primitives";

// Données de test pour PricingBlock
const basicPlans = [
  {
    id: "starter",
    name: "Starter",
    price: 0,
    description: "Parfait pour débuter",
    features: {
      Utilisateurs: "1",
      Projets: "3",
      Stockage: "5 GB",
      Support: true,
      API: false,
    },
    cta: { text: "Commencer gratuitement", href: "/signup" },
  },
  {
    id: "pro",
    name: "Pro",
    price: 29,
    description: "Pour les équipes en croissance",
    badge: "Populaire",
    popular: true,
    features: {
      Utilisateurs: "10",
      Projets: "Illimités",
      Stockage: "100 GB",
      Support: true,
      API: true,
      Analytics: true,
    },
    cta: { text: "Essayer Pro", href: "/signup/pro" },
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 99,
    description: "Pour les grandes organisations",
    badge: "Avancé",
    features: {
      Utilisateurs: "Illimités",
      Projets: "Illimités",
      Stockage: "1 TB",
      Support: "Prioritaire",
      API: true,
      SSO: true,
      Custom: true,
    },
    cta: { text: "Contacter les ventes", href: "/contact" },
  },
];

// Fonctionnalités pour le tableau comparatif
const tableFeatures = [
  { key: "Utilisateurs", name: "Nombre d'utilisateurs" },
  { key: "Projets", name: "Projets" },
  { key: "Stockage", name: "Espace de stockage" },
  { key: "Support", name: "Support client" },
  { key: "API", name: "Accès API" },
  { key: "Analytics", name: "Analytics avancées" },
  { key: "SSO", name: "Single Sign-On" },
  { key: "Custom", name: "Développement sur-mesure" },
];

/**
 * Page de démonstration des blocks avancés Sprint 2
 */
export default function AdvancedBlocksDemo() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Section background="primary" spacing="lg" container={true}>
        <div className="text-center">
          <Heading
            level={1}
            size="3xl"
            eyebrow="Sprint 2 - Blocks Avancés"
            className="text-primary-foreground"
          >
            PricingBlock & MediaTextBlock
          </Heading>
          <Text variant="lead" className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
            Blocks sophistiqués pour présenter tarifs et fonctionnalités avec impact
          </Text>
        </div>
      </Section>

      {/* PricingBlock - Variant Cards */}
      <PricingBlock
        variant="cards"
        size="lg"
        background="muted"
        eyebrow="Pricing Cards"
        title="Choisissez votre plan"
        subtitle="Des tarifs transparents qui s'adaptent à vos besoins. Commencez gratuitement, évoluez quand vous voulez."
        plans={basicPlans}
        currency="€"
        period="mois"
      />

      {/* PricingBlock - Variant Table */}
      <PricingBlock
        variant="table"
        size="lg"
        background="default"
        themeScope="ocean"
        eyebrow="Pricing Table"
        title="Comparaison détaillée des fonctionnalités"
        subtitle="Tableau comparatif complet pour vous aider à choisir le plan parfait"
        plans={basicPlans}
        features={tableFeatures}
        currency="€"
        period="mois"
      />

      {/* PricingBlock - Variant Simple */}
      <PricingBlock
        variant="simple"
        size="md"
        background="accent"
        themeScope="corporate"
        eyebrow="Pricing Simple"
        title="Tarification simplifiée"
        subtitle="Vue d'ensemble claire et concise de nos offres"
        plans={basicPlans.slice(0, 2)}
        currency="€"
        period="mois"
      />

      {/* MediaTextBlock - Variant Left */}
      <MediaTextBlock
        variant="left"
        size="lg"
        background="default"
        eyebrow="Media Text Left"
        title="Interface moderne et intuitive"
        subtitle="Découvrez une expérience utilisateur repensée de A à Z"
        content="Notre nouvelle interface a été conçue en collaboration avec des designers UX experts. Chaque détail a été pensé pour optimiser votre productivité et vous offrir une expérience fluide et agréable."
        image={{
          src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
          alt: "Interface moderne",
          width: 600,
          height: 400,
        }}
        features={[
          "Design responsive adapté à tous les écrans",
          "Navigation intuitive et raccourcis clavier",
          "Thème sombre et clair selon vos préférences",
          "Personnalisation complète de l'espace de travail",
        ]}
        cta={{
          text: "Découvrir l'interface",
          href: "/demo",
        }}
        secondaryCta={{
          text: "Guide utilisateur",
          href: "/guide",
          variant: "outline",
        }}
      />

      {/* MediaTextBlock - Variant Right */}
      <MediaTextBlock
        variant="right"
        size="lg"
        background="muted"
        themeScope="ocean"
        eyebrow="Media Text Right"
        title="Performance et sécurité de niveau entreprise"
        subtitle="Infrastructure robuste pour vos projets critiques"
        content="Hébergé sur des serveurs haute performance avec une architecture redondante. Vos données sont chiffrées et sauvegardées en temps réel. Conformité RGPD et certifications de sécurité internationales."
        image={{
          src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
          alt: "Infrastructure sécurisée",
          width: 600,
          height: 400,
        }}
        features={[
          "Uptime garanti 99.9% avec SLA",
          "Chiffrement AES-256 bout en bout",
          "Sauvegardes automatiques quotidiennes",
          "Support 24/7 par des experts techniques",
        ]}
        cta={{
          text: "Voir les détails sécurité",
          href: "/security",
        }}
      />

      {/* MediaTextBlock - Variant Stacked */}
      <MediaTextBlock
        variant="stacked"
        size="xl"
        background="primary"
        eyebrow="Media Text Stacked"
        title="Collaboration en temps réel"
        subtitle="Travaillez ensemble, où que vous soyez"
        content="Partagez vos projets, commentez en direct, assignez des tâches et suivez l'avancement en temps réel. Notre système de collaboration permet à vos équipes d'être plus efficaces que jamais."
        image={{
          src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop",
          alt: "Équipe en collaboration",
          width: 800,
          height: 400,
          ratio: "2/1",
        }}
        features={[
          "Édition collaborative temps réel",
          "Commentaires et annotations",
          "Gestion des versions et historique",
          "Notifications intelligentes",
        ]}
        cta={{
          text: "Tester la collaboration",
          href: "/collab",
          variant: "secondary",
        }}
        secondaryCta={{
          text: "Cas d'usage",
          href: "/use-cases",
          variant: "outline",
        }}
      />

      {/* Section variations */}
      <Section spacing="lg" container={true}>
        <Heading level={2} size="xl" className="mb-8 text-center">
          Variations et cas d'usage
        </Heading>

        <div className="space-y-12">
          {/* PricingBlock tailles */}
          <div>
            <Heading level={3} size="lg" className="mb-6">
              PricingBlock - Tailles
            </Heading>

            <div className="space-y-8">
              <div className="border rounded-lg p-4">
                <Text variant="small" className="mb-2">
                  Size SM - Compact
                </Text>
                <PricingBlock
                  variant="simple"
                  size="sm"
                  plans={basicPlans.slice(0, 2)}
                  section={false}
                />
              </div>

              <div className="border rounded-lg p-4">
                <Text variant="small" className="mb-2">
                  Size LG - Standard
                </Text>
                <PricingBlock
                  variant="simple"
                  size="lg"
                  plans={basicPlans.slice(0, 2)}
                  section={false}
                />
              </div>
            </div>
          </div>

          {/* MediaTextBlock sans features */}
          <div>
            <Heading level={3} size="lg" className="mb-6">
              MediaTextBlock - Minimal
            </Heading>

            <div className="border rounded-lg p-4">
              <MediaTextBlock
                variant="left"
                title="Simple et efficace"
                content="Parfois moins c'est plus. Ce variant minimal se concentre sur l'essentiel."
                image={{
                  src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
                  alt: "Simplicité",
                  width: 400,
                  height: 300,
                }}
                section={false}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Section données flexibles */}
      <Section background="muted" spacing="lg" container={true}>
        <Heading level={2} size="xl" className="mb-8 text-center">
          Flexibilité des données
        </Heading>

        <div className="space-y-8">
          {/* Plan gratuit seul */}
          <div>
            <Heading level={3} size="lg" className="mb-4">
              Plan unique
            </Heading>
            <PricingBlock
              variant="cards"
              plans={[basicPlans[0]]}
              title="Offre découverte"
              section={false}
            />
          </div>

          {/* Tarifs annuels */}
          <div>
            <Heading level={3} size="lg" className="mb-4">
              Facturation annuelle
            </Heading>
            <PricingBlock
              variant="simple"
              plans={basicPlans.slice(0, 2).map((plan) => ({
                ...plan,
                price: plan.price === 0 ? 0 : Math.round(plan.price * 10), // 2 mois offerts
              }))}
              period="an"
              currency="€"
              subtitle="2 mois offerts sur la facturation annuelle"
              section={false}
            />
          </div>
        </div>
      </Section>

      {/* CTA Final */}
      <Section background="primary" spacing="lg" container={true}>
        <div className="text-center">
          <Heading level={2} size="2xl" className="text-primary-foreground mb-4">
            Phase 2.1 Terminée !
          </Heading>
          <Text variant="lead" className="text-primary-foreground/80 mb-6">
            PricingBlock et MediaTextBlock sont opérationnels. Direction Phase 2.2 : Layout &
            Navigation
          </Text>
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-3 bg-primary-foreground text-primary rounded-lg font-medium hover:bg-primary-foreground/90 transition-colors">
              Phase 2.2 →
            </button>
          </div>
        </div>
      </Section>

      {/* Footer récap */}
      <Section as="footer" background="muted" spacing="md" container={true}>
        <div className="text-center">
          <Text variant="small">
            <strong>PricingBlock :</strong> cards, table, simple •<strong>MediaTextBlock :</strong>{" "}
            left, right, stacked •<strong>Données :</strong> plans flexibles, features optionnelles
          </Text>
        </div>
      </Section>
    </div>
  );
}

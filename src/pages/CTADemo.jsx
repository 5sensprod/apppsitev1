// src/pages/CTADemo.jsx
import React from "react";
import { CTABlock } from "@/components/blocks/CTABlock";
import { Section, Heading, Text } from "@/components/primitives";

/**
 * Page de démonstration du CTABlock
 */
export default function CTADemo() {
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
            CTABlock - 3 Variants
          </Heading>
          <Text variant="lead" className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
            Banner, Card et Inline pour inciter à l'action avec impact
          </Text>
        </div>
      </Section>

      {/* Variant Banner - Impact maximal */}
      <CTABlock
        variant="banner"
        size="xl"
        background="muted"
        eyebrow="Variant Banner"
        title="Prêt à révolutionner votre workflow ?"
        subtitle="Rejoignez plus de 10 000 développeurs qui ont déjà adopté notre architecture moderne. Commencez dès maintenant et gagnez en productivité."
        cta={{
          text: "Commencer gratuitement",
          href: "/signup",
          variant: "default",
        }}
        secondaryCta={{
          text: "Voir la démo",
          href: "/demo",
          variant: "outline",
        }}
      />

      {/* Variant Card avec image */}
      <CTABlock
        variant="card"
        size="lg"
        background="muted"
        themeScope="ocean"
        eyebrow="Variant Card"
        title="Découvrez notre nouvelle fonctionnalité"
        subtitle="Une interface repensée pour une expérience utilisateur optimale. Testez-la dès aujourd'hui."
        cta={{
          text: "Essayer maintenant",
          href: "/try",
        }}
        secondaryCta={{
          text: "En savoir plus",
          href: "/features",
          variant: "ghost",
        }}
        image={{
          src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
          alt: "Interface moderne",
          width: 600,
          height: 300,
        }}
      />

      {/* Variant Inline - Compact */}
      <CTABlock
        variant="inline"
        size="md"
        background="default"
        themeScope="corporate"
        title="Questions ? Contactez notre équipe"
        subtitle="Support disponible 24/7 pour vous accompagner"
        cta={{
          text: "Nous contacter",
          href: "/contact",
        }}
        secondaryCta={{
          text: "FAQ",
          href: "/faq",
          variant: "outline",
        }}
      />

      {/* Section variations de taille */}
      <Section spacing="lg" container={true}>
        <Heading level={2} size="xl" className="mb-8 text-center">
          Variations de taille
        </Heading>

        <div className="space-y-8">
          {/* Size SM */}
          <div className="border rounded-lg p-1">
            <CTABlock
              variant="banner"
              size="sm"
              background="muted"
              title="CTA Size SM - Compact"
              subtitle="Plus discret pour des sections secondaires"
              cta={{ text: "Action", href: "#" }}
            />
          </div>

          {/* Size MD */}
          <div className="border rounded-lg p-1">
            <CTABlock
              variant="banner"
              size="md"
              background="muted"
              title="CTA Size MD - Standard"
              subtitle="Équilibre parfait entre visibilité et modération"
              cta={{ text: "Action", href: "#" }}
            />
          </div>

          {/* Size LG */}
          <div className="border rounded-lg p-1">
            <CTABlock
              variant="banner"
              size="lg"
              background="muted"
              title="CTA Size LG - Large"
              subtitle="Plus d'impact pour les actions importantes"
              cta={{ text: "Action", href: "#" }}
            />
          </div>

          {/* Size XL */}
          <div className="border rounded-lg p-1">
            <CTABlock
              variant="banner"
              size="xl"
              background="muted"
              title="CTA Size XL - Maximum"
              subtitle="Maximum d'impact pour les conversions critiques"
              cta={{ text: "Action", href: "#" }}
            />
          </div>
        </div>
      </Section>

      {/* Section comparaison variants */}
      <Section background="muted" spacing="lg" container={true}>
        <Heading level={2} size="xl" className="mb-8 text-center">
          Comparaison des variants
        </Heading>

        <div className="space-y-8">
          {/* Banner */}
          <div>
            <Heading level={3} size="lg" className="mb-4">
              Banner - Impact maximal
            </Heading>
            <div className="border rounded-lg overflow-hidden">
              <CTABlock
                variant="banner"
                background="primary"
                title="Lancez-vous maintenant"
                subtitle="Le moment parfait pour commencer votre transformation digitale"
                cta={{ text: "Démarrer", href: "#", variant: "secondary" }}
                secondaryCta={{ text: "Plus d'infos", href: "#", variant: "outline" }}
              />
            </div>
          </div>

          {/* Card */}
          <div>
            <Heading level={3} size="lg" className="mb-4">
              Card - Élégant et contenu
            </Heading>
            <div className="max-w-2xl mx-auto">
              <CTABlock
                variant="card"
                title="Offre spéciale limitée"
                subtitle="Profitez de 50% de réduction sur votre premier mois"
                cta={{ text: "Profiter de l'offre", href: "#" }}
                secondaryCta={{ text: "Conditions", href: "#", variant: "ghost" }}
              />
            </div>
          </div>

          {/* Inline */}
          <div>
            <Heading level={3} size="lg" className="mb-4">
              Inline - Compact et discret
            </Heading>
            <div className="border rounded-lg p-6">
              <CTABlock
                variant="inline"
                title="Newsletter hebdomadaire"
                subtitle="Restez informé des dernières nouveautés"
                cta={{ text: "S'abonner", href: "#" }}
                secondaryCta={{ text: "Exemple", href: "#", variant: "ghost" }}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Section thèmes et backgrounds */}
      <Section spacing="lg" container={true}>
        <Heading level={2} size="xl" className="mb-8 text-center">
          Thèmes et arrière-plans
        </Heading>

        <div className="space-y-6">
          {/* Background Primary */}
          <CTABlock
            variant="banner"
            size="sm"
            background="primary"
            title="Background Primary"
            subtitle="Contraste élevé pour attirer l'attention"
            cta={{ text: "Action principale", href: "#", variant: "secondary" }}
            section={{ spacing: "sm" }}
          />

          {/* Background Accent + Theme Ocean */}
          <CTABlock
            variant="banner"
            size="sm"
            background="accent"
            themeScope="ocean"
            title="Background Accent + Thème Ocean"
            subtitle="Combinaison couleurs pour créer une ambiance"
            cta={{ text: "Découvrir", href: "#" }}
            section={{ spacing: "sm" }}
          />

          {/* Background Muted + Theme Corporate */}
          <CTABlock
            variant="banner"
            size="sm"
            background="muted"
            themeScope="corporate"
            title="Background Muted + Thème Corporate"
            subtitle="Sobre et professionnel pour le monde de l'entreprise"
            cta={{ text: "En savoir plus", href: "#" }}
            section={{ spacing: "sm" }}
          />
        </div>
      </Section>

      {/* Section cas d'usage */}
      <Section background="accent" spacing="lg" container={true}>
        <Heading level={2} size="xl" className="mb-8 text-center">
          Cas d'usage recommandés
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-accent-foreground/10 rounded-lg p-6">
              <Heading level={3} size="lg" className="mb-2">
                Banner
              </Heading>
              <Text variant="small" className="text-accent-foreground/80">
                • Landing pages
                <br />
                • Conversion critique
                <br />
                • Annonces importantes
                <br />• Fin de contenu long
              </Text>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-accent-foreground/10 rounded-lg p-6">
              <Heading level={3} size="lg" className="mb-2">
                Card
              </Heading>
              <Text variant="small" className="text-accent-foreground/80">
                • Offres spéciales
                <br />
                • Nouveau produit
                <br />
                • Newsletter signup
                <br />• Contenu premium
              </Text>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-accent-foreground/10 rounded-lg p-6">
              <Heading level={3} size="lg" className="mb-2">
                Inline
              </Heading>
              <Text variant="small" className="text-accent-foreground/80">
                • Contact rapide
                <br />
                • Actions secondaires
                <br />
                • Sidebar
                <br />• Footer CTA
              </Text>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Final - Meta ! */}
      <CTABlock
        variant="banner"
        size="lg"
        background="primary"
        eyebrow="Sprint 1 Terminé !"
        title="Félicitations ! Vous maîtrisez maintenant les 3 blocks essentiels"
        subtitle="HeroBlock, FeaturesBlock et CTABlock sont opérationnels. Votre architecture React Page Builder est prête pour le Sprint 2 !"
        cta={{
          text: "Voir le récapitulatif",
          href: "/",
          variant: "secondary",
        }}
        secondaryCta={{
          text: "Sprint 2 →",
          href: "/roadmap",
          variant: "outline",
        }}
      />

      {/* Footer récap */}
      <Section as="footer" background="muted" spacing="md" container={true}>
        <div className="text-center">
          <Text variant="small">
            <strong>3 variants :</strong> banner, card, inline •<strong>Tous les thèmes :</strong>{" "}
            default, ocean, corporate •<strong>Boutons :</strong> primaire + secondaire optionnel
          </Text>
        </div>
      </Section>
    </div>
  );
}

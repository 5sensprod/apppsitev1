// src/pages/LayoutDemo.jsx
import React from "react";
import { Section, Heading, Text, Stack } from "@/components/primitives";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * Page de démonstration du système AppLayout
 * Note: Cette page utilise AppLayout via App.jsx, pas directement ici
 */
export default function LayoutDemo() {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <Section background="primary" spacing="lg" container={true}>
        <div className="text-center">
          <Heading
            level={1}
            size="3xl"
            eyebrow="Phase 2.2 Terminée"
            className="text-primary-foreground"
          >
            AppLayout - Header, Footer & Breadcrumbs
          </Heading>
          <Text variant="lead" className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
            Structure de page complète avec navigation responsive et breadcrumbs SEO
          </Text>
        </div>
      </Section>

      {/* Variants demonstration */}
      <Section spacing="lg" container={true}>
        <Stack gap="xl">
          <div className="text-center">
            <Heading level={2} size="xl" weight="semibold" className="mb-4">
              Variants de Header et Footer
            </Heading>
            <Text variant="default" className="text-muted-foreground">
              Différents styles selon vos besoins de design
            </Text>
          </div>

          <div className="space-y-8">
            {/* Header variants preview */}
            <div>
              <Heading level={3} size="lg" className="mb-4">
                Variants Header
              </Heading>
              <div className="grid grid-cols-1 gap-4">
                <div className="border rounded-lg p-4 bg-background">
                  <div className="text-xs font-medium mb-2 text-muted-foreground">default</div>
                  <div className="h-12 bg-background border rounded flex items-center px-4 text-sm">
                    Header standard avec background et bordure
                  </div>
                </div>

                <div className="border rounded-lg p-4 bg-gradient-to-r from-blue-50 to-purple-50">
                  <div className="text-xs font-medium mb-2 text-muted-foreground">transparent</div>
                  <div className="h-12 bg-transparent rounded flex items-center px-4 text-sm">
                    Header transparent pour overlay sur images
                  </div>
                </div>

                <div className="border rounded-lg p-4 bg-muted">
                  <div className="text-xs font-medium mb-2 text-muted-foreground">colored</div>
                  <div className="h-12 bg-primary text-primary-foreground rounded flex items-center px-4 text-sm">
                    Header coloré avec couleur de marque
                  </div>
                </div>
              </div>
            </div>

            {/* Footer variants */}
            <div>
              <Heading level={3} size="lg" className="mb-4">
                Variants Footer
              </Heading>
              <div className="space-y-4">
                <div className="border rounded-lg overflow-hidden">
                  <div className="px-4 py-2 bg-muted/50 text-xs font-medium">minimal</div>
                  <div className="p-4 bg-muted/30 text-sm text-center">
                    Copyright © 2024 • Liens essentiels • Réseaux sociaux
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden">
                  <div className="px-4 py-2 bg-muted/50 text-xs font-medium">default</div>
                  <div className="p-6 bg-muted/30">
                    <div className="grid grid-cols-3 gap-4 text-xs">
                      <div>
                        <div className="font-medium mb-2">Section 1</div>
                        <div className="space-y-1 text-muted-foreground">
                          <div>Lien 1</div>
                          <div>Lien 2</div>
                          <div>Lien 3</div>
                        </div>
                      </div>
                      <div>
                        <div className="font-medium mb-2">Section 2</div>
                        <div className="space-y-1 text-muted-foreground">
                          <div>Lien A</div>
                          <div>Lien B</div>
                        </div>
                      </div>
                      <div>
                        <div className="font-medium mb-2">Section 3</div>
                        <div className="space-y-1 text-muted-foreground">
                          <div>Contact</div>
                          <div>Support</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Stack>
      </Section>

      {/* Navigation active states */}
      <Section background="accent" spacing="lg" container={true}>
        <Stack gap="lg">
          <div className="text-center">
            <Heading level={2} size="xl" weight="semibold" className="mb-4">
              Navigation intelligente
            </Heading>
            <Text variant="default" className="text-accent-foreground/80">
              États actifs automatiques et menu mobile responsive
            </Text>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Heading level={3} size="lg" className="mb-4">
                États actifs
              </Heading>
              <Stack gap="sm">
                <Text variant="default">
                  Le Header détecte automatiquement la page courante grâce à{" "}
                  <code className="bg-accent-foreground/20 px-1 py-0.5 rounded text-xs">
                    useLocation()
                  </code>
                </Text>
                <Text variant="default">
                  Les liens de navigation s'adaptent visuellement selon l'état actif
                </Text>
                <Text variant="default">
                  Menu mobile avec fermeture automatique après sélection
                </Text>
              </Stack>
            </div>

            <div>
              <Heading level={3} size="lg" className="mb-4">
                Responsive design
              </Heading>
              <Stack gap="sm">
                <Text variant="default">Navigation desktop complète avec icônes et labels</Text>
                <Text variant="default">Menu hamburger sur mobile avec animations fluides</Text>
                <Text variant="default">Actions (thème, densité) accessibles partout</Text>
              </Stack>
            </div>
          </div>
        </Stack>
      </Section>

      {/* Migration guide */}
      <Section spacing="lg" container={true}>
        <div className="text-center max-w-4xl mx-auto">
          <Heading level={2} size="xl" weight="semibold" className="mb-6">
            Migration vers AppLayout
          </Heading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Avant */}
            <div>
              <Heading level={3} size="lg" className="mb-4 text-red-600">
                Avant (App.jsx actuel)
              </Heading>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm font-mono text-left">
                <div className="text-red-800">
                  <div>&lt;BrowserRouter&gt;</div>
                  <div className="ml-2">&lt;Navigation /&gt;</div>
                  <div className="ml-2">&lt;main className="p-8"&gt;</div>
                  <div className="ml-4">&lt;Routes&gt;</div>
                  <div className="ml-6">&lt;Route .../&gt;</div>
                  <div className="ml-4">&lt;/Routes&gt;</div>
                  <div className="ml-2">&lt;/main&gt;</div>
                  <div className="ml-2">&lt;footer&gt;...&lt;/footer&gt;</div>
                  <div>&lt;/BrowserRouter&gt;</div>
                </div>
              </div>
            </div>

            {/* Après */}
            <div>
              <Heading level={3} size="lg" className="mb-4 text-green-600">
                Après (AppLayout)
              </Heading>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm font-mono text-left">
                <div className="text-green-800">
                  <div>&lt;BrowserRouter&gt;</div>
                  <div className="ml-2">&lt;Routes&gt;</div>
                  <div className="ml-4">&lt;Route path="/" element={"{"}</div>
                  <div className="ml-6">&lt;AppLayout&gt;</div>
                  <div className="ml-8">&lt;HomePage /&gt;</div>
                  <div className="ml-6">&lt;/AppLayout&gt;</div>
                  <div className="ml-4">{"}"} /&gt;</div>
                  <div className="ml-2">&lt;/Routes&gt;</div>
                  <div>&lt;/BrowserRouter&gt;</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <Heading level={3} size="lg" className="mb-4">
              Avantages de la migration
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-blue-800">
                <strong>Structure cohérente</strong>
                <br />
                Header/Footer identiques partout
              </div>
              <div className="text-blue-800">
                <strong>SEO optimisé</strong>
                <br />
                Breadcrumbs avec schema.org
              </div>
              <div className="text-blue-800">
                <strong>Maintenance simplifiée</strong>
                <br />
                Un seul point de configuration
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Final */}
      <Section background="primary" spacing="lg" container={true}>
        <div className="text-center">
          <Heading level={2} size="2xl" className="text-primary-foreground mb-4">
            Phase 2.2 - Layout & Navigation terminée !
          </Heading>
          <Text variant="lead" className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            AppLayout, Header, Footer et Breadcrumbs sont opérationnels. Votre architecture est
            maintenant complète pour la production.
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="/">Voir le récapitulatif complet</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Sprint 2 terminé 🎉
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}

{
  /* Fonctionnalités */
}
<Section spacing="lg" container={true}>
  <Stack gap="xl">
    <div className="text-center max-w-3xl mx-auto">
      <Heading level={2} size="2xl" weight="bold" className="mb-4">
        Composants de Layout
      </Heading>
      <Text variant="lead" className="text-muted-foreground">
        Système complet pour structurer vos applications React
      </Text>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* AppLayout */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">📱 AppLayout</CardTitle>
        </CardHeader>
        <CardContent>
          <Text variant="small" className="text-muted-foreground mb-4">
            Structure principale avec Header, main content et Footer. Gestion responsive et variants
            multiples.
          </Text>
          <div className="space-y-2">
            <div className="text-xs font-medium">Props principales :</div>
            <div className="text-xs text-muted-foreground">
              • showHeader, showFooter
              <br />
              • fixedHeader, maxWidth
              <br />
              • headerVariant, footerVariant
              <br />• showBreadcrumbs
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">🧭 Header</CardTitle>
        </CardHeader>
        <CardContent>
          <Text variant="small" className="text-muted-foreground mb-4">
            Navigation principale avec menu responsive, logo et actions. Support mode fixe.
          </Text>
          <div className="space-y-2">
            <div className="text-xs font-medium">Variants :</div>
            <div className="text-xs text-muted-foreground">
              • default : Style standard
              <br />
              • transparent : Fond transparent
              <br />
              • colored : Fond coloré
              <br />• fixed : Position sticky
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">📄 Footer</CardTitle>
        </CardHeader>
        <CardContent>
          <Text variant="small" className="text-muted-foreground mb-4">
            Pied de page avec liens organisés, réseaux sociaux et informations légales.
          </Text>
          <div className="space-y-2">
            <div className="text-xs font-medium">Variants :</div>
            <div className="text-xs text-muted-foreground">
              • default : Footer complet
              <br />
              • minimal : Version réduite
              <br />
              • extended : Version étendue
              <br />• Links organisés par section
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </Stack>
</Section>;

{
  /* Breadcrumbs */
}
<Section background="muted" spacing="lg" container={true}>
  <Stack gap="lg">
    <div className="text-center">
      <Heading level={2} size="xl" weight="semibold" className="mb-4">
        Breadcrumbs & SEO
      </Heading>
      <Text variant="default" className="text-muted-foreground max-w-2xl mx-auto">
        Navigation contextuelle avec schema.org JSON-LD automatique pour le référencement
      </Text>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      {/* Features */}
      <div>
        <Heading level={3} size="lg" className="mb-4">
          Fonctionnalités
        </Heading>
        <Stack gap="sm">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
            <Text variant="default">
              <strong>Schema.org automatique</strong> - JSON-LD généré pour le SEO
            </Text>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
            <Text variant="default">
              <strong>Séparateurs configurables</strong> - Chevron, slash ou flèche
            </Text>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
            <Text variant="default">
              <strong>Icône Home optionnelle</strong> - Navigation vers l'accueil
            </Text>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
            <Text variant="default">
              <strong>Accessibilité native</strong> - ARIA labels et navigation
            </Text>
          </div>
        </Stack>
      </div>

      {/* Code example */}
      <div>
        <Heading level={3} size="lg" className="mb-4">
          Exemple d'usage
        </Heading>
        <div className="bg-muted/50 rounded-lg p-4 text-sm font-mono">
          <div className="text-muted-foreground mb-2">// Usage AppLayout</div>
          <div className="space-y-1">
            <div>&lt;AppLayout</div>
            <div className="ml-2">showBreadcrumbs={"{true}"}</div>
            <div className="ml-2">breadcrumbs={"{breadcrumbs}"}</div>
            <div className="ml-2">headerVariant="default"</div>
            <div className="ml-2">footerVariant="minimal"</div>
            <div className="ml-2">fixedHeader={"{true}"}</div>
            <div>&gt;</div>
            <div className="ml-2">{"{children}"}</div>
            <div>&lt;/AppLayout&gt;</div>
          </div>
        </div>
      </div>
    </div>
  </Stack>
</Section>;

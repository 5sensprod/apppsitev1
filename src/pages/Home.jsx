// src/pages/Primitives.jsx
import React from "react";
import { Section, Container, Heading, Stack, Text, Image, Grid } from "@/components/primitives";

/**
 * Page de démonstration de toutes les primitives
 */
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Section background="primary" spacing="lg" container={true} themeScope="corporate">
        <Stack gap="md" align="center">
          <Heading level={1} size="3xl" eyebrow="Documentation">
            Primitives React Page Builder
          </Heading>
          <Text variant="lead" align="center" className="text-primary-foreground/80">
            Composants de base réutilisables avec variants cohérents
          </Text>
        </Stack>
      </Section>

      {/* Stack Demo */}
      <Section spacing="lg" container={true}>
        <Stack gap="lg">
          <Heading level={2} size="2xl" eyebrow="Stack Component">
            Empilement vertical avec gaps
          </Heading>

          <Grid cols={2} gap="lg">
            <div className="border rounded-lg p-6 bg-card">
              <Heading level={3} size="lg" className="mb-4">
                Gap variants
              </Heading>

              <Stack gap="xs" className="mb-6">
                <Text variant="small">Stack gap="xs"</Text>
                <div className="h-4 bg-muted rounded"></div>
                <div className="h-4 bg-muted rounded"></div>
                <div className="h-4 bg-muted rounded"></div>
              </Stack>

              <Stack gap="md" className="mb-6">
                <Text variant="small">Stack gap="md"</Text>
                <div className="h-4 bg-accent rounded"></div>
                <div className="h-4 bg-accent rounded"></div>
                <div className="h-4 bg-accent rounded"></div>
              </Stack>

              <Stack gap="xl">
                <Text variant="small">Stack gap="xl"</Text>
                <div className="h-4 bg-primary rounded"></div>
                <div className="h-4 bg-primary rounded"></div>
                <div className="h-4 bg-primary rounded"></div>
              </Stack>
            </div>

            <div className="border rounded-lg p-6 bg-card">
              <Heading level={3} size="lg" className="mb-4">
                Align variants
              </Heading>

              <Stack gap="md" align="start" className="mb-4">
                <Text variant="small">align="start"</Text>
                <div className="w-16 h-4 bg-muted rounded"></div>
                <div className="w-24 h-4 bg-muted rounded"></div>
              </Stack>

              <Stack gap="md" align="center" className="mb-4">
                <Text variant="small">align="center"</Text>
                <div className="w-16 h-4 bg-accent rounded"></div>
                <div className="w-24 h-4 bg-accent rounded"></div>
              </Stack>

              <Stack gap="md" align="end">
                <Text variant="small">align="end"</Text>
                <div className="w-16 h-4 bg-primary rounded"></div>
                <div className="w-24 h-4 bg-primary rounded"></div>
              </Stack>
            </div>
          </Grid>
        </Stack>
      </Section>

      {/* Text Demo */}
      <Section background="muted" spacing="lg" container={true}>
        <Stack gap="lg">
          <Heading level={2} size="2xl" eyebrow="Text Component">
            Variants typographiques
          </Heading>

          <Grid cols={2} gap="lg">
            <Stack gap="md">
              <Heading level={3} size="lg">
                Variants de style
              </Heading>
              <Text variant="default">Texte par défaut (variant="default")</Text>
              <Text variant="muted">Texte atténué pour les descriptions (variant="muted")</Text>
              <Text variant="small">Petit texte pour les notes (variant="small")</Text>
              <Text variant="lead">Texte d'introduction avec plus d'impact (variant="lead")</Text>
              <Text variant="large">Texte important et visible (variant="large")</Text>
            </Stack>

            <Stack gap="md">
              <Heading level={3} size="lg">
                Truncate & Clamp
              </Heading>
              <Text truncate className="w-48 bg-accent/20 p-2 rounded">
                Ce texte très long sera tronqué avec des points de suspension
              </Text>
              <Text clamp={2} className="bg-accent/20 p-2 rounded">
                Ce paragraphe plus long sera limité à exactement 2 lignes grâce au line-clamp, peu
                importe sa longueur originale. Le reste sera coupé avec des points de suspension.
              </Text>
              <Text clamp={3} className="bg-accent/20 p-2 rounded">
                Celui-ci est limité à 3 lignes. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris.
              </Text>
            </Stack>
          </Grid>
        </Stack>
      </Section>

      {/* Image Demo */}
      <Section spacing="lg" container={true}>
        <Stack gap="lg">
          <Heading level={2} size="2xl" eyebrow="Image Component">
            Images optimisées avec ratios
          </Heading>

          <Grid cols={3} gap="lg">
            <div className="space-y-4">
              <Heading level={3} size="md">
                Ratio 16:9
              </Heading>
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop"
                alt="Paysage montagne"
                width={400}
                ratio="16/9"
                rounded="lg"
                className="w-full"
              />
              <Text variant="small" align="center">
                ratio="16/9" • rounded="lg"
              </Text>
            </div>

            <div className="space-y-4">
              <Heading level={3} size="md">
                Ratio 4:3
              </Heading>
              <Image
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop"
                alt="Lac nature"
                width={400}
                ratio="4/3"
                objectFit="cover"
                className="w-full"
              />
              <Text variant="small" align="center">
                ratio="4/3" • objectFit="cover"
              </Text>
            </div>

            <div className="space-y-4">
              <Heading level={3} size="md">
                Ratio 1:1
              </Heading>
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop"
                alt="Paysage carré"
                width={400}
                ratio="1/1"
                rounded="full"
                className="w-full"
              />
              <Text variant="small" align="center">
                ratio="1/1" • rounded="full"
              </Text>
            </div>
          </Grid>
        </Stack>
      </Section>

      {/* Grid Demo */}
      <Section background="accent" spacing="lg" container={true}>
        <Stack gap="lg">
          <Heading level={2} size="2xl" eyebrow="Grid Component">
            Grilles responsives
          </Heading>

          <Stack gap="xl">
            <div>
              <Heading level={3} size="lg" className="mb-4">
                Grid cols={2}
              </Heading>
              <Grid cols={2} gap="md">
                {Array.from({ length: 4 }, (_, i) => (
                  <div
                    key={i}
                    className="h-20 bg-accent-foreground/10 rounded-lg flex items-center justify-center"
                  >
                    Item {i + 1}
                  </div>
                ))}
              </Grid>
            </div>

            <div>
              <Heading level={3} size="lg" className="mb-4">
                Grid cols={3} gap="lg"
              </Heading>
              <Grid cols={3} gap="lg">
                {Array.from({ length: 6 }, (_, i) => (
                  <div
                    key={i}
                    className="h-20 bg-accent-foreground/10 rounded-lg flex items-center justify-center"
                  >
                    Item {i + 1}
                  </div>
                ))}
              </Grid>
            </div>

            <div>
              <Heading level={3} size="lg" className="mb-4">
                Grid cols={4} gap="xs"
              </Heading>
              <Grid cols={4} gap="xs">
                {Array.from({ length: 8 }, (_, i) => (
                  <div
                    key={i}
                    className="h-16 bg-accent-foreground/10 rounded flex items-center justify-center text-sm"
                  >
                    {i + 1}
                  </div>
                ))}
              </Grid>
            </div>
          </Stack>
        </Stack>
      </Section>

      <Section spacing="lg" className="bg-red-100">
        <Container className="bg-blue-100 border-2 border-blue-500">
          <Heading level={2}>Voici le Container visible !</Heading>
          <Text>Le contenu est centré et limité en largeur</Text>
        </Container>
      </Section>

      {/* Thème par défaut */}
      <Section background="primary" spacing="md">
        <Container className="border-2 border-primary-foreground/20">
          <Text>Thème par défaut</Text>
        </Container>
      </Section>

      {/* Thème Ocean */}
      <Section background="primary" spacing="md" themeScope="ocean">
        <Container className="border-2 border-primary-foreground/20">
          <Text>Thème Ocean</Text>
        </Container>
      </Section>

      {/* Thème Corporate */}
      <Section background="primary" spacing="md" themeScope="corporate">
        <Container className="border-2 border-primary-foreground/20">
          <Text>Thème Corporate</Text>
        </Container>
      </Section>

      {/* Footer */}
      <Section as="footer" background="muted" spacing="md" container={true}>
        <Text variant="small" align="center">
          Toutes les primitives respectent la densité et les thèmes 🎨
        </Text>
      </Section>
    </div>
  );
}

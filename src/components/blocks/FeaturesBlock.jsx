// src/components/blocks/FeaturesBlock.jsx
import React from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "@/design/utils";
import { Section, Stack, Heading, Text, Image, Grid } from "@/components/primitives";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const featuresVariants = cva(
  "w-full", // base
  {
    variants: {
      variant: {
        grid: "",
        list: "space-y-8",
        cards: "",
      },
      size: {
        sm: "",
        md: "",
        lg: "",
        xl: "",
      },
    },
    defaultVariants: {
      variant: "grid",
      size: "md",
    },
  }
);

/**
 * Section features avec liste de caractéristiques
 * @param {Object} props
 * @param {string} props.variant - Layout ('grid'|'list'|'cards')
 * @param {string} props.size - Taille ('sm'|'md'|'lg'|'xl')
 * @param {string} props.tone - Tonalité ('default'|'primary'|'muted'|'contrast')
 * @param {string} props.background - Arrière-plan ('default'|'muted'|'accent'|'primary')
 * @param {string} props.title - Titre de section
 * @param {string} props.subtitle - Sous-titre
 * @param {string} props.eyebrow - Kicker au-dessus du titre
 * @param {Array} props.features - Liste features (requis)
 * @param {number} props.columns - Colonnes pour variant grid (2|3|4)
 * @param {boolean|Object} props.section - Wrapper Section
 * @param {string} props.id - ID pour ancrage
 * @param {string} props.testId - Test ID
 * @param {string} props.themeScope - Thème local ('ocean'|'corporate')
 * @param {string} props.className
 */
export function FeaturesBlock({
  variant = "grid",
  size = "md",
  tone = "default",
  background = "default",
  title,
  subtitle,
  eyebrow,
  features,
  columns = 3,
  section = true,
  id,
  testId,
  themeScope,
  className,
  ...props
}) {
  // Mapping size -> Section spacing
  const sectionSpacing = {
    sm: "md",
    md: "lg",
    lg: "xl",
    xl: "xl",
  }[size];

  // Contenu principal
  const featuresContent = (
    <div
      className={cn(featuresVariants({ variant, size }), className)}
      data-variant={variant}
      data-tone={tone}
      data-testid={testId}
    >
      {/* Header de section */}
      {(title || subtitle || eyebrow) && (
        <div className="text-center max-w-3xl mx-auto mb-12">
          {eyebrow && (
            <Text
              variant="small"
              className="uppercase tracking-wide font-medium text-muted-foreground mb-3"
            >
              {eyebrow}
            </Text>
          )}

          {title && (
            <Heading level={2} size="2xl" weight="bold" className="mb-4">
              {title}
            </Heading>
          )}

          {subtitle && (
            <Text variant="lead" className="text-muted-foreground">
              {subtitle}
            </Text>
          )}
        </div>
      )}

      {/* Contenu des features selon variant */}
      {variant === "grid" && <GridLayout features={features} columns={columns} />}

      {variant === "list" && <ListLayout features={features} />}

      {variant === "cards" && <CardsLayout features={features} columns={columns} />}
    </div>
  );

  // Si section=false, retourner juste le contenu
  if (section === false) {
    return featuresContent;
  }

  // Sinon wrapper dans Section
  const sectionProps = typeof section === "object" ? section : {};

  return (
    <Section
      background={background}
      spacing={sectionSpacing}
      container={true}
      id={id}
      themeScope={themeScope}
      {...sectionProps}
    >
      {featuresContent}
    </Section>
  );
}

// Layout Grid - Grille simple
function GridLayout({ features, columns }) {
  return (
    <Grid cols={columns} gap="lg">
      {features.map((feature, index) => (
        <FeatureItem key={feature.id || index} feature={feature} layout="grid" />
      ))}
    </Grid>
  );
}

// Layout List - Liste verticale avec alternance
function ListLayout({ features }) {
  return (
    <Stack gap="xl">
      {features.map((feature, index) => (
        <div
          key={feature.id || index}
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",
            index % 2 === 1 && "lg:grid-flow-col-dense" // Alterne l'ordre
          )}
        >
          <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
            <FeatureItem feature={feature} layout="list" />
          </div>

          {feature.image && (
            <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
              <Image
                src={feature.image.src}
                alt={feature.image.alt}
                width={feature.image.width}
                height={feature.image.height}
                ratio={feature.image.ratio || "4/3"}
                className="w-full"
              />
            </div>
          )}
        </div>
      ))}
    </Stack>
  );
}

// Layout Cards - Cards avec shadcn/ui
function CardsLayout({ features, columns }) {
  return (
    <Grid cols={columns} gap="lg">
      {features.map((feature, index) => (
        <Card key={feature.id || index} className="h-full">
          {feature.image && (
            <div className="p-6 pb-0">
              <Image
                src={feature.image.src}
                alt={feature.image.alt}
                width={feature.image.width}
                height={feature.image.height}
                ratio={feature.image.ratio || "16/9"}
                className="w-full"
                rounded="md"
              />
            </div>
          )}

          <CardHeader>
            {feature.icon && (
              <div className="mb-2">
                {typeof feature.icon === "string" ? (
                  <span className="text-2xl">{feature.icon}</span>
                ) : (
                  feature.icon
                )}
              </div>
            )}
            <CardTitle>{feature.title}</CardTitle>
          </CardHeader>

          <CardContent>
            <CardDescription className="text-base">{feature.description}</CardDescription>

            {feature.href && (
              <Button variant="ghost" size="sm" className="mt-4 p-0 h-auto font-medium" asChild>
                <a href={feature.href}>En savoir plus →</a>
              </Button>
            )}
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
}

// Composant Feature Item réutilisé
function FeatureItem({ feature, layout }) {
  return (
    <div className={cn("text-center", layout === "list" && "text-left")}>
      {/* Icône */}
      {feature.icon && (
        <div
          className={cn(
            "mb-4",
            layout === "grid" && "flex justify-center",
            layout === "list" && "mb-3"
          )}
        >
          {typeof feature.icon === "string" ? (
            <div
              className={cn(
                "flex items-center justify-center rounded-lg bg-primary/10",
                layout === "grid" ? "w-12 h-12 text-xl" : "w-10 h-10 text-lg"
              )}
            >
              <span>{feature.icon}</span>
            </div>
          ) : (
            <div
              className={cn(
                "flex items-center justify-center text-primary",
                layout === "grid" ? "w-12 h-12" : "w-10 h-10"
              )}
            >
              {feature.icon}
            </div>
          )}
        </div>
      )}

      {/* Image (si pas d'icône et layout grid) */}
      {!feature.icon && feature.image && layout === "grid" && (
        <div className="mb-4">
          <Image
            src={feature.image.src}
            alt={feature.image.alt}
            width={feature.image.width}
            height={feature.image.height}
            ratio={feature.image.ratio || "16/9"}
            className="w-full"
          />
        </div>
      )}

      {/* Contenu */}
      <Stack gap={layout === "grid" ? "sm" : "xs"}>
        <Heading level={3} size={layout === "grid" ? "lg" : "xl"} weight="semibold">
          {feature.title}
        </Heading>

        <Text
          variant={layout === "list" ? "default" : "muted"}
          className={layout === "list" ? "text-lg" : ""}
        >
          {feature.description}
        </Text>

        {feature.href && layout === "grid" && (
          <Button variant="ghost" size="sm" className="mt-2 p-0 h-auto font-medium" asChild>
            <a href={feature.href}>En savoir plus →</a>
          </Button>
        )}
      </Stack>
    </div>
  );
}

FeaturesBlock.propTypes = {
  variant: PropTypes.oneOf(["grid", "list", "cards"]).isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  tone: PropTypes.oneOf(["default", "primary", "muted", "contrast"]),
  background: PropTypes.oneOf(["default", "muted", "accent", "primary"]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  eyebrow: PropTypes.string,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      href: PropTypes.string,
      image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number,
        ratio: PropTypes.string,
      }),
    })
  ).isRequired,
  columns: PropTypes.oneOf([2, 3, 4]),
  section: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  id: PropTypes.string,
  testId: PropTypes.string,
  themeScope: PropTypes.oneOf(["ocean", "corporate"]),
  className: PropTypes.string,
};

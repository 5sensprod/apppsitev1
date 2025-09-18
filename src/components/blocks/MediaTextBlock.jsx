// src/components/blocks/MediaTextBlock.jsx
import React from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "@/design/utils";
import { Section, Stack, Heading, Text, Image, Grid } from "@/components/primitives";
import { Button } from "@/components/ui/button";

const mediaTextVariants = cva(
  "w-full", // base
  {
    variants: {
      variant: {
        left: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",
        right: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:grid-flow-col-dense",
        stacked: "text-center space-y-8",
      },
      size: {
        sm: "",
        md: "",
        lg: "",
        xl: "",
      },
    },
    defaultVariants: {
      variant: "left",
      size: "md",
    },
  }
);

/**
 * Section media + texte avec image et contenu
 * @param {Object} props
 * @param {string} props.variant - Layout ('left'|'right'|'stacked')
 * @param {string} props.size - Taille ('sm'|'md'|'lg'|'xl')
 * @param {string} props.tone - Tonalité ('default'|'primary'|'muted'|'contrast')
 * @param {string} props.background - Arrière-plan ('default'|'muted'|'accent'|'primary')
 * @param {string} props.title - Titre principal (requis)
 * @param {string} props.subtitle - Sous-titre/description
 * @param {string} props.eyebrow - Kicker au-dessus du titre
 * @param {string} props.content - Contenu principal/description longue
 * @param {Object} props.image - Image (requis) {src, alt, width, height, ratio?}
 * @param {Object} props.cta - Call-to-action optionnel {text, href, variant?}
 * @param {Object} props.secondaryCta - CTA secondaire optionnel
 * @param {Array} props.features - Liste de points/caractéristiques optionnelles
 * @param {boolean|Object} props.section - Wrapper Section
 * @param {string} props.id - ID pour ancrage
 * @param {string} props.testId - Test ID
 * @param {string} props.themeScope - Thème local ('ocean'|'corporate')
 * @param {string} props.className
 */
export function MediaTextBlock({
  variant = "left",
  size = "md",
  tone = "default",
  background = "default",
  title,
  subtitle,
  eyebrow,
  content,
  image,
  cta,
  secondaryCta,
  features = [],
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

  // Contenu principal du media text
  const mediaTextContent = (
    <div
      className={cn(mediaTextVariants({ variant, size }), className)}
      data-variant={variant}
      data-tone={tone}
      data-testid={testId}
    >
      {variant === "stacked" ? (
        <StackedLayout
          title={title}
          subtitle={subtitle}
          eyebrow={eyebrow}
          content={content}
          image={image}
          cta={cta}
          secondaryCta={secondaryCta}
          features={features}
        />
      ) : (
        <SideLayout
          variant={variant}
          title={title}
          subtitle={subtitle}
          eyebrow={eyebrow}
          content={content}
          image={image}
          cta={cta}
          secondaryCta={secondaryCta}
          features={features}
        />
      )}
    </div>
  );

  // Si section=false, retourner juste le contenu
  if (section === false) {
    return mediaTextContent;
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
      {mediaTextContent}
    </Section>
  );
}

// Layout Side (left/right) - Image à côté du texte
function SideLayout({
  variant,
  title,
  subtitle,
  eyebrow,
  content,
  image,
  cta,
  secondaryCta,
  features,
}) {
  const isImageRight = variant === "right";

  return (
    <>
      {/* Contenu texte */}
      <div className={isImageRight ? "lg:col-start-1" : ""}>
        <Stack gap="lg">
          {eyebrow && (
            <Text
              variant="small"
              className="uppercase tracking-wide font-medium text-muted-foreground"
            >
              {eyebrow}
            </Text>
          )}

          <Heading level={2} size="2xl" weight="bold">
            {title}
          </Heading>

          {subtitle && (
            <Text variant="lead" className="text-muted-foreground">
              {subtitle}
            </Text>
          )}

          {content && <Text variant="default">{content}</Text>}

          {/* Features list */}
          {features.length > 0 && (
            <Stack gap="sm">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <Text variant="default">{feature}</Text>
                </div>
              ))}
            </Stack>
          )}

          {/* CTA Buttons */}
          {(cta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-4">
              {cta && (
                <Button variant={cta.variant || "default"} size="lg" asChild>
                  <a href={cta.href}>{cta.text}</a>
                </Button>
              )}

              {secondaryCta && (
                <Button variant={secondaryCta.variant || "outline"} size="lg" asChild>
                  <a href={secondaryCta.href}>{secondaryCta.text}</a>
                </Button>
              )}
            </div>
          )}
        </Stack>
      </div>

      {/* Image */}
      <div className={isImageRight ? "lg:col-start-2" : ""}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          ratio={image.ratio || "4/3"}
          className="w-full"
        />
      </div>
    </>
  );
}

// Layout Stacked - Image au-dessus du texte
function StackedLayout({ title, subtitle, eyebrow, content, image, cta, secondaryCta, features }) {
  return (
    <Stack gap="lg" align="center" className="max-w-4xl mx-auto">
      {/* Image */}
      <div className="max-w-3xl w-full">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          ratio={image.ratio || "16/9"}
          className="w-full"
        />
      </div>

      {/* Contenu texte */}
      <div className="text-center max-w-3xl">
        <Stack gap="md">
          {eyebrow && (
            <Text
              variant="small"
              className="uppercase tracking-wide font-medium text-muted-foreground"
            >
              {eyebrow}
            </Text>
          )}

          <Heading level={2} size="2xl" weight="bold">
            {title}
          </Heading>

          {subtitle && (
            <Text variant="lead" className="text-muted-foreground">
              {subtitle}
            </Text>
          )}

          {content && <Text variant="default">{content}</Text>}

          {/* Features en colonnes pour variant stacked */}
          {features.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 justify-center sm:justify-start"
                >
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  </div>
                  <Text variant="small">{feature}</Text>
                </div>
              ))}
            </div>
          )}

          {/* CTA Buttons */}
          {(cta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              {cta && (
                <Button variant={cta.variant || "default"} size="lg" asChild>
                  <a href={cta.href}>{cta.text}</a>
                </Button>
              )}

              {secondaryCta && (
                <Button variant={secondaryCta.variant || "outline"} size="lg" asChild>
                  <a href={secondaryCta.href}>{secondaryCta.text}</a>
                </Button>
              )}
            </div>
          )}
        </Stack>
      </div>
    </Stack>
  );
}

MediaTextBlock.propTypes = {
  variant: PropTypes.oneOf(["left", "right", "stacked"]).isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  tone: PropTypes.oneOf(["default", "primary", "muted", "contrast"]),
  background: PropTypes.oneOf(["default", "muted", "accent", "primary"]),
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  eyebrow: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number,
    ratio: PropTypes.string,
  }).isRequired,
  cta: PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    variant: PropTypes.string,
  }),
  secondaryCta: PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    variant: PropTypes.string,
  }),
  features: PropTypes.arrayOf(PropTypes.string),
  section: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  id: PropTypes.string,
  testId: PropTypes.string,
  themeScope: PropTypes.oneOf(["ocean", "corporate"]),
  className: PropTypes.string,
};

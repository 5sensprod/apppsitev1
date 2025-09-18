// src/components/blocks/CTABlock.jsx
import React from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "@/design/utils";
import { Section, Stack, Heading, Text, Image } from "@/components/primitives";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const ctaVariants = cva(
  "w-full", // base
  {
    variants: {
      variant: {
        banner: "text-center py-8",
        card: "max-w-2xl mx-auto",
        inline: "flex items-center justify-between flex-col sm:flex-row gap-6",
      },
      size: {
        sm: "",
        md: "",
        lg: "",
        xl: "",
      },
    },
    defaultVariants: {
      variant: "banner",
      size: "md",
    },
  }
);

/**
 * Section call-to-action avec titre, description et boutons
 * @param {Object} props
 * @param {string} props.variant - Style ('banner'|'card'|'inline')
 * @param {string} props.size - Taille ('sm'|'md'|'lg'|'xl')
 * @param {string} props.tone - Tonalité ('default'|'primary'|'muted'|'contrast')
 * @param {string} props.background - Arrière-plan ('default'|'muted'|'accent'|'primary')
 * @param {string} props.title - Titre CTA (requis)
 * @param {string} props.subtitle - Description
 * @param {string} props.eyebrow - Kicker au-dessus du titre
 * @param {Object} props.cta - Bouton principal (requis)
 * @param {Object} props.secondaryCta - Bouton secondaire optionnel
 * @param {Object} props.image - Image optionnelle pour variant card
 * @param {boolean|Object} props.section - Wrapper Section
 * @param {string} props.id - ID pour ancrage
 * @param {string} props.testId - Test ID
 * @param {string} props.themeScope - Thème local ('ocean'|'corporate')
 * @param {string} props.className
 */
export function CTABlock({
  variant = "banner",
  size = "md",
  tone = "primary",
  background = "primary",
  title,
  subtitle,
  eyebrow,
  cta,
  secondaryCta,
  image,
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

  // Contenu principal du CTA
  const ctaContent = (
    <div
      className={cn(ctaVariants({ variant, size }), className)}
      data-variant={variant}
      data-tone={tone}
      data-testid={testId}
    >
      {variant === "banner" && (
        <BannerLayout
          title={title}
          subtitle={subtitle}
          eyebrow={eyebrow}
          cta={cta}
          secondaryCta={secondaryCta}
        />
      )}

      {variant === "card" && (
        <CardLayout
          title={title}
          subtitle={subtitle}
          eyebrow={eyebrow}
          cta={cta}
          secondaryCta={secondaryCta}
          image={image}
        />
      )}

      {variant === "inline" && (
        <InlineLayout title={title} subtitle={subtitle} cta={cta} secondaryCta={secondaryCta} />
      )}
    </div>
  );

  // Si section=false, retourner juste le contenu
  if (section === false) {
    return ctaContent;
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
      {ctaContent}
    </Section>
  );
}

// Layout Banner - Centré et impactant
function BannerLayout({ title, subtitle, eyebrow, cta, secondaryCta }) {
  return (
    <Stack gap="lg" align="center" className="max-w-4xl mx-auto">
      {eyebrow && (
        <Text variant="small" className="uppercase tracking-wide font-medium text-muted-foreground">
          {eyebrow}
        </Text>
      )}

      <Heading level={2} size="3xl" weight="bold">
        {title}
      </Heading>

      {subtitle && (
        <Text variant="lead" align="center" className="text-muted-foreground max-w-2xl">
          {subtitle}
        </Text>
      )}

      <CTAButtons cta={cta} secondaryCta={secondaryCta} />
    </Stack>
  );
}

// Layout Card - Avec card shadcn/ui
function CardLayout({ title, subtitle, eyebrow, cta, secondaryCta, image }) {
  return (
    <Card className="overflow-hidden">
      {image && (
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            ratio={image.ratio || "16/9"}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      <CardHeader className="text-center pb-4">
        {eyebrow && (
          <Text
            variant="small"
            className="uppercase tracking-wide font-medium text-muted-foreground mb-3"
          >
            {eyebrow}
          </Text>
        )}

        <Heading level={2} size="2xl" weight="bold">
          {title}
        </Heading>
      </CardHeader>

      <CardContent className="text-center pt-0">
        {subtitle && (
          <Text variant="default" className="text-muted-foreground mb-6">
            {subtitle}
          </Text>
        )}

        <CTAButtons cta={cta} secondaryCta={secondaryCta} />
      </CardContent>
    </Card>
  );
}

// Layout Inline - Horizontal compact
function InlineLayout({ title, subtitle, cta, secondaryCta }) {
  return (
    <>
      {/* Contenu texte */}
      <div className="flex-1 text-center sm:text-left">
        <Heading level={2} size="xl" weight="semibold" className="mb-2">
          {title}
        </Heading>

        {subtitle && (
          <Text variant="default" className="text-muted-foreground">
            {subtitle}
          </Text>
        )}
      </div>

      {/* Boutons */}
      <div className="flex-shrink-0">
        <CTAButtons cta={cta} secondaryCta={secondaryCta} compact />
      </div>
    </>
  );
}

// Composant CTA Buttons réutilisé
function CTAButtons({ cta, secondaryCta, compact = false }) {
  if (!cta && !secondaryCta) return null;

  const buttonSize = compact ? "default" : "lg";
  const containerClass = compact ? "flex gap-3" : "flex flex-col sm:flex-row gap-4 justify-center";

  return (
    <div className={containerClass}>
      {cta && (
        <Button variant={cta.variant || "default"} size={cta.size || buttonSize} asChild>
          <a href={cta.href}>{cta.text}</a>
        </Button>
      )}

      {secondaryCta && (
        <Button
          variant={secondaryCta.variant || "outline"}
          size={secondaryCta.size || buttonSize}
          asChild
        >
          <a href={secondaryCta.href}>{secondaryCta.text}</a>
        </Button>
      )}
    </div>
  );
}

CTABlock.propTypes = {
  variant: PropTypes.oneOf(["banner", "card", "inline"]).isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  tone: PropTypes.oneOf(["default", "primary", "muted", "contrast"]),
  background: PropTypes.oneOf(["default", "muted", "accent", "primary"]),
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  eyebrow: PropTypes.string,
  cta: PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    variant: PropTypes.string,
    size: PropTypes.string,
  }).isRequired,
  secondaryCta: PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    variant: PropTypes.string,
    size: PropTypes.string,
  }),
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number,
    ratio: PropTypes.string,
  }),
  section: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  id: PropTypes.string,
  testId: PropTypes.string,
  themeScope: PropTypes.oneOf(["ocean", "corporate"]),
  className: PropTypes.string,
};

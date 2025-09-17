// src/components/blocks/HeroBlock.jsx
import React from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "@/design/utils";
import { Section, Stack, Heading, Text, Image, Grid } from "@/components/primitives";
import { Button } from "@/components/ui/button";

const heroVariants = cva(
  "w-full", // base
  {
    variants: {
      variant: {
        centered: "text-center",
        split: "text-left",
        minimal: "text-left max-w-4xl mx-auto",
      },
      size: {
        sm: "", // Gestion via Section spacing
        md: "",
        lg: "",
        xl: "",
      },
    },
    defaultVariants: {
      variant: "centered",
      size: "lg",
    },
  }
);

/**
 * Section hero avec titre, sous-titre, CTA et image optionnelle
 * @param {Object} props
 * @param {string} props.variant - Layout ('split'|'centered'|'minimal')
 * @param {string} props.size - Taille ('sm'|'md'|'lg'|'xl')
 * @param {string} props.tone - Tonalité couleur ('default'|'primary'|'muted'|'contrast')
 * @param {string} props.background - Arrière-plan ('default'|'muted'|'accent'|'primary')
 * @param {string} props.title - Titre principal (requis)
 * @param {string} props.subtitle - Sous-titre
 * @param {string} props.eyebrow - Kicker au-dessus du titre
 * @param {Object} props.cta - Call-to-action principal {text, href, variant?, size?}
 * @param {Object} props.secondaryCta - CTA secondaire optionnel {text, href, variant?}
 * @param {Object} props.image - Image {src, alt, width, height, ratio?}
 * @param {boolean|Object} props.section - Wrapper Section auto (true par défaut)
 * @param {string} props.id - ID pour ancrage
 * @param {string} props.testId - Test ID
 * @param {string} props.themeScope - Thème local ('ocean'|'corporate')
 * @param {string} props.className
 */
export function HeroBlock({
  variant = "centered",
  size = "lg",
  tone = "default",
  background = "default",
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

  // Contenu principal du hero
  const heroContent = (
    <div
      className={cn(heroVariants({ variant, size }), className)}
      data-variant={variant}
      data-tone={tone}
      data-testid={testId}
    >
      {variant === "split" ? (
        <SplitLayout
          title={title}
          subtitle={subtitle}
          eyebrow={eyebrow}
          cta={cta}
          secondaryCta={secondaryCta}
          image={image}
        />
      ) : variant === "minimal" ? (
        <MinimalLayout
          title={title}
          subtitle={subtitle}
          eyebrow={eyebrow}
          cta={cta}
          secondaryCta={secondaryCta}
        />
      ) : (
        <CenteredLayout
          title={title}
          subtitle={subtitle}
          eyebrow={eyebrow}
          cta={cta}
          secondaryCta={secondaryCta}
          image={image}
        />
      )}
    </div>
  );

  // Si section=false, retourner juste le contenu
  if (section === false) {
    return heroContent;
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
      {heroContent}
    </Section>
  );
}

// Layout Split (image à côté)
function SplitLayout({ title, subtitle, eyebrow, cta, secondaryCta, image }) {
  return (
    <Grid cols={2} gap="xl" className="items-center">
      {/* Contenu texte */}
      <Stack gap="lg">
        {eyebrow && (
          <Text
            variant="small"
            className="uppercase tracking-wide font-medium text-muted-foreground"
          >
            {eyebrow}
          </Text>
        )}

        <Heading level={1} size="3xl" weight="bold">
          {title}
        </Heading>

        {subtitle && (
          <Text variant="lead" className="text-muted-foreground">
            {subtitle}
          </Text>
        )}

        <CTAButtons cta={cta} secondaryCta={secondaryCta} />
      </Stack>

      {/* Image */}
      {image && (
        <div className="order-first md:order-last">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            ratio={image.ratio || "16/9"}
            className="w-full"
            loading="eager"
            fetchpriority="high"
          />
        </div>
      )}
    </Grid>
  );
}

// Layout Centered (tout centré)
function CenteredLayout({ title, subtitle, eyebrow, cta, secondaryCta, image }) {
  return (
    <Stack gap="lg" align="center" className="max-w-4xl mx-auto">
      {eyebrow && (
        <Text variant="small" className="uppercase tracking-wide font-medium text-muted-foreground">
          {eyebrow}
        </Text>
      )}

      <Heading level={1} size="3xl" weight="bold">
        {title}
      </Heading>

      {subtitle && (
        <Text variant="lead" align="center" className="text-muted-foreground max-w-2xl">
          {subtitle}
        </Text>
      )}

      <CTAButtons cta={cta} secondaryCta={secondaryCta} />

      {image && (
        <div className="mt-8 max-w-3xl w-full">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            ratio={image.ratio || "16/9"}
            className="w-full"
            loading="eager"
            fetchpriority="high"
          />
        </div>
      )}
    </Stack>
  );
}

// Layout Minimal (simple et épuré)
function MinimalLayout({ title, subtitle, eyebrow, cta, secondaryCta }) {
  return (
    <Stack gap="md" className="max-w-2xl">
      {eyebrow && (
        <Text variant="small" className="uppercase tracking-wide font-medium text-muted-foreground">
          {eyebrow}
        </Text>
      )}

      <Heading level={1} size="2xl" weight="semibold">
        {title}
      </Heading>

      {subtitle && (
        <Text variant="default" className="text-muted-foreground">
          {subtitle}
        </Text>
      )}

      <div className="flex gap-3 mt-2">
        {cta && (
          <Button variant={cta.variant || "default"} size={cta.size || "default"} asChild>
            <a href={cta.href}>{cta.text}</a>
          </Button>
        )}

        {secondaryCta && (
          <Button
            variant={secondaryCta.variant || "outline"}
            size={secondaryCta.size || "default"}
            asChild
          >
            <a href={secondaryCta.href}>{secondaryCta.text}</a>
          </Button>
        )}
      </div>
    </Stack>
  );
}

// Composant CTA Buttons réutilisé
function CTAButtons({ cta, secondaryCta }) {
  if (!cta && !secondaryCta) return null;

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      {cta && (
        <Button variant={cta.variant || "default"} size={cta.size || "lg"} asChild>
          <a href={cta.href}>{cta.text}</a>
        </Button>
      )}

      {secondaryCta && (
        <Button
          variant={secondaryCta.variant || "outline"}
          size={secondaryCta.size || "lg"}
          asChild
        >
          <a href={secondaryCta.href}>{secondaryCta.text}</a>
        </Button>
      )}
    </div>
  );
}

HeroBlock.propTypes = {
  variant: PropTypes.oneOf(["split", "centered", "minimal"]).isRequired,
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
  }),
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

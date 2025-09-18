// src/components/blocks/PricingBlock.jsx
import React from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "@/design/utils";
import { Section, Stack, Heading, Text, Grid } from "@/components/primitives";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

const pricingVariants = cva(
  "w-full", // base
  {
    variants: {
      variant: {
        cards: "",
        table: "overflow-x-auto",
        simple: "text-center",
      },
      size: {
        sm: "",
        md: "",
        lg: "",
        xl: "",
      },
    },
    defaultVariants: {
      variant: "cards",
      size: "md",
    },
  }
);

/**
 * Section pricing avec plans tarifaires
 * @param {Object} props
 * @param {string} props.variant - Layout ('cards'|'table'|'simple')
 * @param {string} props.size - Taille ('sm'|'md'|'lg'|'xl')
 * @param {string} props.tone - Tonalité ('default'|'primary'|'muted'|'contrast')
 * @param {string} props.background - Arrière-plan ('default'|'muted'|'accent'|'primary')
 * @param {string} props.title - Titre de section
 * @param {string} props.subtitle - Sous-titre
 * @param {string} props.eyebrow - Kicker au-dessus du titre
 * @param {Array} props.plans - Liste des plans tarifaires (requis)
 * @param {Array} props.features - Liste des fonctionnalités (pour variant table)
 * @param {string} props.currency - Devise ('€'|'$'|'£')
 * @param {string} props.period - Période de facturation ('mois'|'an'|'month'|'year')
 * @param {boolean|Object} props.section - Wrapper Section
 * @param {string} props.id - ID pour ancrage
 * @param {string} props.testId - Test ID
 * @param {string} props.themeScope - Thème local ('ocean'|'corporate')
 * @param {string} props.className
 */
export function PricingBlock({
  variant = "cards",
  size = "md",
  tone = "default",
  background = "default",
  title,
  subtitle,
  eyebrow,
  plans,
  features = [],
  currency = "€",
  period = "mois",
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

  // Contenu principal du pricing
  const pricingContent = (
    <div
      className={cn(pricingVariants({ variant, size }), className)}
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

      {/* Contenu selon variant */}
      {variant === "cards" && <CardsLayout plans={plans} currency={currency} period={period} />}

      {variant === "table" && (
        <TableLayout plans={plans} features={features} currency={currency} period={period} />
      )}

      {variant === "simple" && <SimpleLayout plans={plans} currency={currency} period={period} />}
    </div>
  );

  // Si section=false, retourner juste le contenu
  if (section === false) {
    return pricingContent;
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
      {pricingContent}
    </Section>
  );
}

// Layout Cards - Cards individuelles
function CardsLayout({ plans, currency, period }) {
  const columns = Math.min(plans.length, 4); // Max 4 colonnes

  return (
    <Grid cols={columns} gap="lg">
      {plans.map((plan, index) => (
        <PricingCard key={plan.id || index} plan={plan} currency={currency} period={period} />
      ))}
    </Grid>
  );
}

// Layout Table - Tableau comparatif
function TableLayout({ plans, features, currency, period }) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Header avec plans */}
          <thead>
            <tr className="border-b bg-muted/50">
              <th className="p-4 text-left font-medium">Fonctionnalités</th>
              {plans.map((plan, index) => (
                <th key={plan.id || index} className="p-4 text-center min-w-[200px]">
                  <div className="space-y-2">
                    {plan.badge && (
                      <Badge variant={plan.popular ? "default" : "outline"} className="mb-2">
                        {plan.badge}
                      </Badge>
                    )}
                    <div className="font-bold text-lg">{plan.name}</div>
                    <div className="text-2xl font-bold">
                      {plan.price === 0 ? (
                        "Gratuit"
                      ) : (
                        <>
                          {currency}
                          {plan.price}
                          <span className="text-sm font-normal text-muted-foreground">
                            /{period}
                          </span>
                        </>
                      )}
                    </div>
                    <Button
                      variant={plan.popular ? "default" : "outline"}
                      size="sm"
                      className="w-full"
                      asChild
                    >
                      <a href={plan.cta?.href || "#"}>{plan.cta?.text || "Choisir"}</a>
                    </Button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          {/* Body avec features */}
          <tbody>
            {features.map((feature, featureIndex) => (
              <tr key={featureIndex} className="border-b hover:bg-muted/25">
                <td className="p-4 font-medium">{feature.name}</td>
                {plans.map((plan, planIndex) => (
                  <td key={planIndex} className="p-4 text-center">
                    <FeatureValue value={plan.features?.[feature.key]} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Layout Simple - Horizontal compact
function SimpleLayout({ plans, currency, period }) {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {plans.map((plan, index) => (
        <div key={plan.id || index} className="text-center max-w-xs">
          {plan.badge && (
            <Badge variant={plan.popular ? "default" : "outline"} className="mb-3">
              {plan.badge}
            </Badge>
          )}

          <Heading level={3} size="xl" weight="semibold" className="mb-2">
            {plan.name}
          </Heading>

          <div className="mb-4">
            <div className="text-3xl font-bold">
              {plan.price === 0 ? (
                "Gratuit"
              ) : (
                <>
                  {currency}
                  {plan.price}
                  <span className="text-lg font-normal text-muted-foreground">/{period}</span>
                </>
              )}
            </div>
          </div>

          {plan.description && (
            <Text variant="muted" className="mb-4">
              {plan.description}
            </Text>
          )}

          <Button
            variant={plan.popular ? "default" : "outline"}
            size="lg"
            className="w-full"
            asChild
          >
            <a href={plan.cta?.href || "#"}>{plan.cta?.text || "Choisir"}</a>
          </Button>
        </div>
      ))}
    </div>
  );
}

// Composant Pricing Card
function PricingCard({ plan, currency, period }) {
  const isPopular = plan.popular;

  return (
    <Card className={cn("relative h-full", isPopular && "border-primary shadow-lg")}>
      {isPopular && plan.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge variant="default">{plan.badge}</Badge>
        </div>
      )}

      <CardHeader className="text-center pb-4">
        <CardTitle className="text-xl">{plan.name}</CardTitle>

        <div className="mt-4">
          <div className="text-4xl font-bold">
            {plan.price === 0 ? (
              "Gratuit"
            ) : (
              <>
                {currency}
                {plan.price}
                <span className="text-lg font-normal text-muted-foreground">/{period}</span>
              </>
            )}
          </div>
        </div>

        {plan.description && (
          <Text variant="muted" className="mt-2">
            {plan.description}
          </Text>
        )}
      </CardHeader>

      <CardContent className="pt-0">
        {/* Features list */}
        {plan.features && (
          <Stack gap="sm" className="mb-6">
            {Object.entries(plan.features).map(([key, value]) => (
              <div key={key} className="flex items-center gap-2">
                <FeatureValue value={value} />
                <Text variant="small">{key.replace(/([A-Z])/g, " $1").toLowerCase()}</Text>
              </div>
            ))}
          </Stack>
        )}

        {/* CTA Button */}
        <Button variant={isPopular ? "default" : "outline"} size="lg" className="w-full" asChild>
          <a href={plan.cta?.href || "#"}>{plan.cta?.text || "Choisir ce plan"}</a>
        </Button>
      </CardContent>
    </Card>
  );
}

// Composant Feature Value (pour table et cards)
function FeatureValue({ value }) {
  if (value === true) {
    return <Check className="w-5 h-5 text-green-500" />;
  }

  if (value === false) {
    return <X className="w-5 h-5 text-red-500" />;
  }

  if (typeof value === "string" || typeof value === "number") {
    return <span className="font-medium">{value}</span>;
  }

  return <span className="text-muted-foreground">-</span>;
}

PricingBlock.propTypes = {
  variant: PropTypes.oneOf(["cards", "table", "simple"]).isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  tone: PropTypes.oneOf(["default", "primary", "muted", "contrast"]),
  background: PropTypes.oneOf(["default", "muted", "accent", "primary"]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  eyebrow: PropTypes.string,
  plans: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string,
      badge: PropTypes.string,
      popular: PropTypes.bool,
      features: PropTypes.object,
      cta: PropTypes.shape({
        text: PropTypes.string,
        href: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  currency: PropTypes.string,
  period: PropTypes.string,
  section: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  id: PropTypes.string,
  testId: PropTypes.string,
  themeScope: PropTypes.oneOf(["ocean", "corporate"]),
  className: PropTypes.string,
};

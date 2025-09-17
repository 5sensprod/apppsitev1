// src/components/primitives/Image.jsx
import React from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "@/design/utils";

const imageVariants = cva(
  "block", // base
  {
    variants: {
      objectFit: {
        cover: "object-cover",
        contain: "object-contain",
        fill: "object-fill",
        "scale-down": "object-scale-down",
        none: "object-none",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      objectFit: "cover",
      rounded: "md",
    },
  }
);

/**
 * Image optimisée avec dimensions requises (anti-CLS)
 * @param {Object} props
 * @param {string} props.src - URL image (requis)
 * @param {string} props.alt - Texte alternatif (requis)
 * @param {number} props.width - Largeur en px (requis)
 * @param {number} props.height - Hauteur en px (ou calculée via ratio)
 * @param {string} props.ratio - Ratio d'aspect ('16/9'|'4/3'|'1/1'|'3/2') calcule height
 * @param {string} props.sizes - Attribute sizes pour responsive
 * @param {string} props.loading - Loading strategy ('lazy'|'eager')
 * @param {string} props.fetchPriority - Priorité fetch ('high'|'low'|'auto')
 * @param {string} props.objectFit - Ajustement ('cover'|'contain'|'fill'|'scale-down'|'none')
 * @param {string} props.rounded - Bordures arrondies ('none'|'sm'|'md'|'lg'|'xl'|'full')
 * @param {string} props.className
 */
export function Image({
  src,
  alt,
  width,
  height,
  ratio,
  sizes,
  loading = "lazy",
  fetchPriority = "auto",
  objectFit = "cover",
  rounded = "md",
  className,
  ...props
}) {
  // Si ratio fourni, calculer height automatiquement
  const computedHeight = React.useMemo(() => {
    if (height) return height;
    if (ratio && width) {
      // Parser des ratios comme "16/9", "4/3", etc.
      const [w, h] = ratio.split("/").map(Number);
      return Math.round((width * h) / w);
    }
    return undefined;
  }, [height, ratio, width]);

  // Validation en dev
  if (process.env.NODE_ENV === "development") {
    if (!computedHeight) {
      console.warn(
        `⚠️  Image component: either 'height' or 'ratio' prop is required for src="${src}"`
      );
    }
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={computedHeight}
      sizes={sizes}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding="async"
      className={cn(imageVariants({ objectFit, rounded }), className)}
      data-ratio={ratio}
      {...props}
    />
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number,
  ratio: PropTypes.string,
  sizes: PropTypes.string,
  loading: PropTypes.oneOf(["lazy", "eager"]),
  fetchPriority: PropTypes.oneOf(["high", "low", "auto"]),
  objectFit: PropTypes.oneOf(["cover", "contain", "fill", "scale-down", "none"]),
  rounded: PropTypes.oneOf(["none", "sm", "md", "lg", "xl", "full"]),
  className: PropTypes.string,
};

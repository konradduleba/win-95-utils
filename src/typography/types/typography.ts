import { HTMLAttributes } from "react";

export type Variants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

export type Weights = "light" | "normal" | "medium" | "semibold" | "bold";

export type Sizes = "xs" | "sm" | "md" | "lg" | "xl";

export type TypographyProps = HTMLAttributes<HTMLElement> & {
  variant: Variants;
  size?: Sizes;
  weight?: Weights;
  className?: string;
};

export type SizeStyles = Record<Sizes, string>;
export type WeightStyles = Record<Weights, string>;

import { Sizes, Variants, Weights } from "@typography/types";

type Typography = {
  variant: Variants;
  sizes: Sizes[];
  weights: Weights[];
};

const VARIANTS: Variants[] = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"];

const WEIGHTS: Weights[] = ["light", "normal", "medium", "semibold", "bold"];

const SIZES: Sizes[] = ["xl", "lg", "md", "sm", "xs"];

export const TYPOGRAPHY_VARIANTS: Typography[] = VARIANTS.map((variant) => ({
  variant,
  sizes: SIZES,
  weights: WEIGHTS,
}));

export const HEADINGS = ["Name", "Sizes", "Weights"];

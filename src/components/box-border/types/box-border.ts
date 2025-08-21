type Variants = "01" | "02";

export type BorderVariants = Record<Variants, string>;

export type BoxBorderProps = {
  variant: Variants;
  className?: string;
};

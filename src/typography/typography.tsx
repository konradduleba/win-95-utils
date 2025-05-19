import { FC, PropsWithChildren } from "react";
import cn from "classnames";

import { SizeStyles, TypographyProps, WeightStyles } from "./types";

import styles from "./typography.module.scss";

const SIZE_STYLES: SizeStyles = {
  xs: styles.xs,
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
  xl: styles.xl,
};

const WEIGHT_STYLES: WeightStyles = {
  light: styles.light,
  normal: styles.normal,
  medium: styles.medium,
  semibold: styles.semibold,
  bold: styles.bold,
};

export const Typography: FC<PropsWithChildren<TypographyProps>> = ({
  variant,
  children,
  size = "md",
  className,
  weight = "normal",
  ...rest
}) => {
  const Component = variant;

  return (
    <Component
      className={cn(
        styles.typography,
        SIZE_STYLES[size],
        WEIGHT_STYLES[weight],
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};

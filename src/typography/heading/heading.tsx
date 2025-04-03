import { FC, PropsWithChildren } from "react";
import cn from "classnames";

import styles from "./heading.module.scss";

type Size = "sm" | "md" | "bg";

type ColorOption = "default" | "alt";

export type HeadingProps = {
  size: Size;
  colorOption?: ColorOption;
  className?: string;
};

type SizeStyles = Record<Size, string>;

const SIZE_STYLES: SizeStyles = {
  sm: styles.sm,
  md: styles.md,
  bg: styles.bg,
};

type ColorStyles = Record<ColorOption, string>;

const COLOR_STYLES: ColorStyles = {
  alt: styles.alt,
  default: styles.default,
};

export const Heading: FC<PropsWithChildren<HeadingProps>> = ({
  size,
  colorOption = "default",
  children,
  className,
}) => {
  return (
    <h1
      className={cn(
        styles.heading,
        SIZE_STYLES[size],
        COLOR_STYLES[colorOption],
        className
      )}
    >
      {children}
    </h1>
  );
};

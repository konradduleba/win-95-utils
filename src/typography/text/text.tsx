import { AriaRole, FC, PropsWithChildren } from "react";
import cn from "classnames";

import styles from "./text.module.scss";

type Size = "sm" | "md" | "bg";

type ColorOption = "default" | "alt";

export type TextProps = {
  size: Size;
  colorOption?: ColorOption;
  className?: string;
  role?: AriaRole;
  testId?: string;
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

export const Text: FC<PropsWithChildren<TextProps>> = ({
  size,
  colorOption = "default",
  children,
  className,
  role,
  testId,
}) => {
  return (
    <span
      className={cn(
        styles.text,
        SIZE_STYLES[size],
        COLOR_STYLES[colorOption],
        className
      )}
      role={role}
      data-testid={testId}
    >
      {children}
    </span>
  );
};

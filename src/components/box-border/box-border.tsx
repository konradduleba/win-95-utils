import { FC, PropsWithChildren } from "react";
import cn from "classnames";

import { BorderVariants, BoxBorderProps } from "./types";

import styles from "./box-border.module.scss";

const BORDER_STYLES: BorderVariants = {
  "01": styles.border01,
  "02": styles.border02,
};

export const BoxBorder: FC<PropsWithChildren<BoxBorderProps>> = ({
  children,
  className,
  variant,
}) => {
  return (
    <div className={cn(styles.box, BORDER_STYLES[variant], className)}>
      {children}
    </div>
  );
};

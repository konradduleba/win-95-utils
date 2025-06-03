import { FC, PropsWithChildren } from "react";
import cn from "classnames";

import styles from "./box-border.module.scss";

export type BoxBorderProps = {
  className?: string;
};

export const BoxBorder: FC<PropsWithChildren<BoxBorderProps>> = ({
  children,
  className,
}) => {
  return <div className={cn(styles.box, className)}>{children}</div>;
};

import { FC } from "react";
import cn from "classnames";

import { Button, ButtonProps } from "@buttons/button/button";

import styles from "./action-button.module.scss";

export const ActionButton: FC<ButtonProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <Button {...rest} className={cn(styles.button, className)}>
      {children}
    </Button>
  );
};

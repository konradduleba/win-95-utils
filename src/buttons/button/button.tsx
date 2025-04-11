import { ButtonHTMLAttributes, FC, PropsWithChildren, RefObject } from "react";
import cn from "classnames";

import styles from "./button.module.scss";

type ButtonAdditionalTypes = {
  buttonRef?: RefObject<HTMLButtonElement>;
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonAdditionalTypes;

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  type,
  className,
  buttonRef,
  ...props
}) => {
  return (
    <button
      {...props}
      type={type || "button"}
      className={cn(styles.button, className)}
      ref={buttonRef}
    >
      {children}
    </button>
  );
};

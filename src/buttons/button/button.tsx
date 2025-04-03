import { ButtonHTMLAttributes, FC, PropsWithChildren, RefObject } from "react";
import cn from "classnames";

import styles from "./button.module.scss";

type Category = "default" | "button";

type CategoryStyles = Record<Category, string>;

const CATEGORY_STYLES: CategoryStyles = {
  button: styles.categoryButton,
  default: styles.categoryDefault,
};

type ButtonAdditionalTypes = {
  testId: string;
  category?: Category;
  buttonRef?: RefObject<HTMLButtonElement>;
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonAdditionalTypes;

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  type,
  className,
  category = "button",
  buttonRef,
  testId,
  ...props
}) => {
  return (
    <button
      {...props}
      type={type || "button"}
      className={cn(styles.button, className, CATEGORY_STYLES[category])}
      ref={buttonRef}
      data-testid={testId}
    >
      {children}
    </button>
  );
};

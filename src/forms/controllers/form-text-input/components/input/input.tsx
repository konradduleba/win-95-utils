import { FC } from "react";
import cn from "classnames";

import { useFocusOnKeyPress } from "@hooks/useFocusOnKeyPress";

import { useFormTextInput } from "../../hooks";

import styles from "./input.module.scss";

export const Input: FC = () => {
  const {
    isInvalid,
    onHandleChange,
    value,
    isPassword,
    autocompleteId,
    name,
    triggerKeys,
  } = useFormTextInput();
  const { elementRef } = useFocusOnKeyPress<HTMLInputElement>({ triggerKeys });

  return (
    <input
      id={name}
      type={isPassword ? "password" : "text"}
      ref={elementRef}
      name={name}
      aria-label={name}
      value={value}
      onChange={onHandleChange}
      className={cn(styles.input, { [styles.invalid]: isInvalid })}
      autoComplete={autocompleteId}
    />
  );
};

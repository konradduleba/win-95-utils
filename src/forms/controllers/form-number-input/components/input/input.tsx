import { FC } from "react";

import { useFocusOnKeyPress } from "@hooks/useFocusOnKeyPress";

import { useFormNumberInput } from "../../hooks";

import styles from "./input.module.scss";

export const Input: FC = () => {
  const { onHandleChange, value, name, triggerKeys, disabled, onBlur } =
    useFormNumberInput();
  const { elementRef } = useFocusOnKeyPress<HTMLInputElement>({ triggerKeys });

  return (
    <input
      id={name}
      type="text"
      ref={elementRef}
      name={name}
      aria-label={name}
      value={value}
      disabled={disabled}
      onChange={onHandleChange}
      className={styles.input}
      onBlur={onBlur}
    />
  );
};

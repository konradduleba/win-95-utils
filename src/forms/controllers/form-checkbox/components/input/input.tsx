import { FC } from "react";

import { useFormCheckbox } from "../../hooks";

import styles from "./input.module.scss";

export const Input: FC = () => {
  const { isChecked, name, onHandleChange, disabled } = useFormCheckbox();

  return (
    <input
      type="checkbox"
      id={name}
      name={name}
      checked={isChecked}
      aria-label={name}
      onChange={onHandleChange}
      className={styles.input}
      disabled={disabled}
    />
  );
};

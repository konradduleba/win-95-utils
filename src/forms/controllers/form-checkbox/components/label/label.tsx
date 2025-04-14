import { FC } from "react";

import { useFocusOnKeyPress } from "@hooks/useFocusOnKeyPress";

import { useFormCheckbox } from "../../hooks";

import { Box, LabelText } from "./components";

import { CHECKBOX_TEST_ID } from "../../constants";

import styles from "./label.module.scss";

export const Label: FC = () => {
  const { name, isChecked, triggerKeys, onKeyPress, disabled } =
    useFormCheckbox();
  const { elementRef } = useFocusOnKeyPress<HTMLLabelElement>({ triggerKeys });

  return (
    <label
      htmlFor={name}
      className={styles.label}
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      role="checkbox"
      aria-checked={isChecked}
      onKeyDown={onKeyPress}
      ref={elementRef}
      data-testid={CHECKBOX_TEST_ID}
    >
      <Box />
      <LabelText />
    </label>
  );
};

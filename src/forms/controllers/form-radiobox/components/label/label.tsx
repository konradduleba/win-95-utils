import { FC } from "react";

import { useFocusOnKeyPress } from "@hooks/useFocusOnKeyPress";

import { useFormRadiobox } from "../../hooks";

import { Circle, LabelText } from "./components";

import styles from "./label.module.scss";

export const Label: FC = () => {
  const {
    name,
    triggerKeys,
    onKeyPress,
    disabled,
    onHandleChange,
    isSelected,
    value,
    isInvalid,
  } = useFormRadiobox();
  const { elementRef } = useFocusOnKeyPress<HTMLLabelElement>({ triggerKeys });

  return (
    <label
      htmlFor={name}
      className={styles.label}
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      aria-selected={isSelected}
      aria-label={`${value}`}
      aria-invalid={isInvalid}
      role="radio"
      onKeyDown={onKeyPress}
      onClick={onHandleChange}
      ref={elementRef}
    >
      <Circle />
      <LabelText />
    </label>
  );
};

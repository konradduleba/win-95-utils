import { FC } from "react";

import { ActionButton } from "@buttons/action-button/action-button";

import SvgChevron from "@icons/chevron";

import { useFormNumberInput } from "../../../../hooks";
import { DECREMENT } from "../../../../constants";

import styles from "./decrement-button.module.scss";

export const DecrementButton: FC = () => {
  const { onDecrementValue, disabled } = useFormNumberInput();

  return (
    <ActionButton
      onClick={onDecrementValue}
      aria-label={DECREMENT}
      disabled={disabled}
    >
      <SvgChevron className={styles.icon} />
    </ActionButton>
  );
};

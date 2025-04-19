import { FC } from "react";
import { DropdownIndicatorProps } from "react-select";

import SvgChevron from "@icons/chevron";

import { ActionButton } from "@buttons/action-button/action-button";

import styles from "./dropdown-indicator.module.scss";

export const DropdownIndicator: FC<DropdownIndicatorProps> = ({
  innerProps,
  isDisabled,
}) => {
  return (
    <div {...innerProps}>
      <ActionButton disabled={isDisabled} tabIndex={-1}>
        <SvgChevron className={styles.chevron} />
      </ActionButton>
    </div>
  );
};

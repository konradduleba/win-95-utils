import { FC } from "react";
import { DropdownIndicatorProps } from "react-select";

import SvgChevron from "@icons/chevron";

import { ActionButton } from "@buttons/action-button/action-button";

import { SINGLE_SELECT_DROPDOWN_INDICATOR } from "../../../../constants";

import { getButtonHandlers } from "../../helpers";

import styles from "./dropdown-indicator.module.scss";

export const DropdownIndicator: FC<DropdownIndicatorProps> = ({
  innerProps,
  isDisabled,
}) => {
  const { ariaHidden, onHandleKeyDown, onHandleTouchEnd } = getButtonHandlers({
    innerProps,
  });

  return (
    <ActionButton
      disabled={isDisabled}
      aria-hidden={ariaHidden}
      onKeyDown={onHandleKeyDown}
      aria-label={SINGLE_SELECT_DROPDOWN_INDICATOR}
      onTouchEnd={onHandleTouchEnd}
    >
      <SvgChevron className={styles.chevron} />
    </ActionButton>
  );
};

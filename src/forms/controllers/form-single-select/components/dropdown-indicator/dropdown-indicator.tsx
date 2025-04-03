import { FC } from "react";
import { DropdownIndicatorProps } from "react-select";

import SvgChevron from "@icons/chevron";

import { Button } from "@buttons/button";

import { SELECT_DROPDOWN_INDICATOR_TEST_ID } from "../../constants";

import styles from "./dropdown-indicator.module.scss";

const TEMP_TEST_ID = "temp-test-id";

export const DropdownIndicator: FC<DropdownIndicatorProps> = ({
  innerProps,
}) => {
  return (
    <div {...innerProps} data-testid={SELECT_DROPDOWN_INDICATOR_TEST_ID}>
      <Button className={styles.button} testId={TEMP_TEST_ID}>
        <SvgChevron />
      </Button>
    </div>
  );
};

import { FC, PropsWithChildren } from "react";
import cn from "classnames";

import { FormNumberInputLabelProps } from "../../types";

import { useFormNumberInput } from "../../hooks";

import styles from "./wrapper.module.scss";

type LabelPositions = Record<
  FormNumberInputLabelProps["labelPosition"],
  string
>;

const LABEL_POSITIONS: LabelPositions = {
  column: styles.column,
  row: styles.row,
};

export const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  const { name, labelPosition = "column" } = useFormNumberInput();

  const testId = `number-input-wrapper-${name}`;

  return (
    <div
      data-testid={testId}
      className={cn(styles.wrapper, LABEL_POSITIONS[labelPosition])}
    >
      {children}
    </div>
  );
};
